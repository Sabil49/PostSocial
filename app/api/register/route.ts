import prisma from "@/lib/prisma";
import { z } from "zod";
import { hashPassword } from "@/utils/bcrypt";
import { NextRequest,NextResponse } from "next/server";
import { S3Client, PutObjectCommand } from "@aws-sdk/client-s3";
import fs from "fs";

const { AWS_REGION, AWS_ACCESS_KEY_ID, AWS_SECRET_ACCESS_KEY, S3_BUCKET_NAME } = process.env;

if (!AWS_REGION || !AWS_ACCESS_KEY_ID || !AWS_SECRET_ACCESS_KEY || !S3_BUCKET_NAME) {
  throw new Error("Missing AWS configuration in environment variables.");
}

const s3Client = new S3Client({
  region: AWS_REGION,
  credentials: {
    accessKeyId: AWS_ACCESS_KEY_ID,
    secretAccessKey: AWS_SECRET_ACCESS_KEY,
  },
});

export async function POST(req: NextRequest) {
  try {
    const data = await req.json();
    console.log("Received data:", data);

    if (!data) {
      return NextResponse.json({ message: "No data provided" }, { status: 400 });
    }
    const parsedData = z
      .object({
        email: z.string().email(),
        password: z.string().min(8),
        name: z.string().min(2).max(100),
        files: z.object({
          image: z.array(
            z.object({
              originalFilename: z.string(),
              mimetype: z.string(),
              filepath: z.string(),
            })
          ),
        }),
      })
      .safeParse(data);
    if (!parsedData.success) {
      console.log("Validation failed", parsedData.error);
      return NextResponse.json({ message: "Validation failed", error: parsedData.error }, { status: 400 });
    }
    const { email, password, name, files } = parsedData.data;

    const imageFile = files.image?.[0];

    const fileContent = await fs.promises.readFile(imageFile.filepath);
    const s3Key = `user-images/${email}/${Date.now()}-${imageFile.originalFilename}`;
    
            const uploadParams = {
              Bucket: process.env.S3_BUCKET_NAME,
              Key: s3Key,
              Body: fileContent,
              ContentType: imageFile.mimetype,
            };
    
          const imageUpload= await s3Client.send(new PutObjectCommand(uploadParams));
          if(!imageUpload){
            return NextResponse.json({ message: 'Image upload failed' }, { status: 500 });
          }
          const imageUrl = `https://${process.env.S3_BUCKET_NAME}.s3.${process.env.AWS_REGION}.amazonaws.com/${s3Key}`;
          console.log("Image uploaded successfully:", imageUrl);
    // Check if user already exists
    const existingUser = await prisma.user.findUnique({
      where: { email },
    });
    if (existingUser) {
      console.log("User already exists with email:", email);
      return NextResponse.json({ message: "User already exists" }, { status: 409 });
    }
    // Hash the password before storing it
    const hashedPassword = await hashPassword(password);
    // Store user in the database
    const user = await prisma.user.create({
      data: {
        email: email,
        password: hashedPassword,
        name: name,
        image: imageUrl,
      },
    });
    console.log("User registered successfully:", user);
    // Do not return the password in the response
    
    return NextResponse.json({ user }, { status: 201 });
  } catch (error) {
    console.error('Error handling POST request:', error);
    return NextResponse.json({ message: 'Error processing request' }, { status: 500 });
  }
}
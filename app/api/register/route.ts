import prisma from "@/lib/prisma";
import { hashPassword } from "@/utils/bcrypt";
import { NextRequest,NextResponse } from "next/server";
import { S3Client, PutObjectCommand } from "@aws-sdk/client-s3";
import * as zfd from 'zod-form-data';

// export const config = {
//       api: {
//         bodyParser: false,
//       },
//     };

    // Multer and classic req/res are not used in Next.js app router API routes.
    // File uploads should be handled using the formData() API from NextRequest.



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
    const data = await req.formData();
    console.log("Received data:", data);
    if (!data) {
      return NextResponse.json({ message: "No data provided" }, { status: 400 });
    }
    
    const uploadSchema = zfd.formData({
      name: zfd.text(),
      email: zfd.text(), // Validates email format
      files: zfd.file()
        .refine((file) => file.size < 5000000, `Max image size is 5MB.`) // Example: file size validation
        .refine((file) => ['image/jpeg', 'image/png'].includes(file.type), 'Only .jpg and .png formats are supported.'), // Example: file type validation
      password: zfd.text(),
    });

    const parsedData = uploadSchema.safeParse(data);
    if (!parsedData.success) {
      console.log("Validation failed", parsedData.error);
      return NextResponse.json({ message: "Validation failed", error: parsedData.error }, { status: 400 });
    }

    const { email, password, name, files } = parsedData.data as { email: string; password: string; name: string; files: File };
    if(!email.includes('@')){
      return NextResponse.json({ message: "Invalid email format" }, { status: 400 });
    }
    if(password.length < 8){
      return NextResponse.json({ message: "Password must be at least 8 characters long" }, { status: 400 });
    }
    if(name.length < 2 || name.length > 100){
      return NextResponse.json({ message: "Name must be between 2 and 100 characters long" }, { status: 400 });
    }
    if(!files){
      return NextResponse.json({ message: "Image file is required" }, { status: 400 });
    }

    const imageFile = files as File; // Explicitly type as File

    const fileContent = Buffer.from(await imageFile.arrayBuffer());
    const s3Key = `user-images/${email}/${Date.now()}-${imageFile.name}`;

    const uploadParams = {
              Bucket: process.env.S3_BUCKET_NAME,
              Key: s3Key,
              Body: fileContent,
              ContentType: imageFile.type,
            };
    
          const imageUpload= await s3Client.send(new PutObjectCommand(uploadParams));
          if(!imageUpload){
            return NextResponse.json({ message: 'Image upload failed' }, { status: 500 });
          }
          const imageUrl = `https://${process.env.S3_BUCKET_NAME}.s3.${process.env.AWS_REGION}.amazonaws.com/${s3Key}`;
          console.log("Image uploaded successfully:", imageUrl);
    // Check if user already exists
    const existingUser = await prisma.user.findUnique({
      where: { email: email },
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
    //console.error('Error handling POST request:', error);
    return NextResponse.json({ message: 'Error processing request' }, { status: 500 });
  }
}
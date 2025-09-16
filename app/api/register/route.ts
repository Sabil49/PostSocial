import prisma from "@/lib/prisma";
import { z } from "zod";
import { hashPassword } from "@/utils/bcrypt";
import { NextRequest,NextResponse } from "next/server";

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
      })
      .safeParse(data);
    if (!parsedData.success) {
      console.log("Validation failed", parsedData.error);
      return NextResponse.json({ message: "Validation failed", error: parsedData.error }, { status: 400 });
    }
    const { email, password, name } = parsedData.data;
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
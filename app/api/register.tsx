import prisma from "@/lib/prisma";
import { z } from "zod";
import { hashPassword } from "@/utils/bcrypt";
import { NextRequest,NextResponse } from "next/server";

export default async function handler(req: NextRequest, res: NextResponse) {
  if (req.method === 'POST') {
    const data = await req.json();
    if (!data) return null;
    const parsedData = z.object({ email: z.string().email(), password: z.string().min(8), name: z.string().min(2).max(100)}).safeParse(data);
    if (!parsedData.success) {
        console.log("Validation failed", parsedData.error);
        return null;
    }
                if (parsedData.success) {
                    const { email, password, name } = parsedData.data;
                    const existingUser = await prisma.user.findUnique({
                        where: { email },
                    });
                    if (existingUser) {
                        console.log("User already exists with email:", email);
                        return null; // User already exists
                    }
                    // Hash the password before storing it
                    const hashedPassword = await hashPassword(password);
                    // Store user in the database
                    const user = await prisma.user.create({
                        data: {
                            email,
                            password: hashedPassword,
                            name,
                        },
                    });
                    console.log("User registered successfully:", user);
                    return user; // Registration successful
                }
                console.log("Something went wrong during registration process. try again.");
                return null;
  } else {
    return NextResponse.json({ message: 'Method Not Allowed' }, { status: 405 });
  }
}
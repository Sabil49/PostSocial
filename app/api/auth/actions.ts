'use server';
 
import { z } from "zod";
import { signIn, signOut } from './auth';
import { AuthError } from 'next-auth';
import {hashPassword} from '@/utils/bcrypt';
import prisma from '@/lib/prisma';
import { NextResponse } from "next/server";

export const signOutUser = async () => {
   await signOut({ redirectTo: '/' });
}

export async function authenticate(
  prevState: string | undefined,
  formData: FormData,
) {
  try {
    await signIn('credentials', formData);
  } catch (error) {
    if (error instanceof AuthError) {
      switch (error.type) {
        case 'CredentialsSignin':
          return 'Invalid credentials.';
        default:
          return 'Something went wrong.';
      }
    }
    throw error;
  }
}

/* start registration function */

interface MyFormState {
  email: string;
  password: string;
  name: string;
}

async function signupUser(data: FormData) {
                if (!data) return null;
                const parsedData = z.object({ email: z.string().email(), password: z.string().min(8), name: z.string().min(2).max(100)}).safeParse(data);
                if (!parsedData.success) {
                    console.log("Invalid form data:", parsedData.error);
                    return NextResponse.json({ error: 'Invalid form data' }, { status: 400 });
                }
                if (parsedData.success) {
                    const { email, password, name } = parsedData.data;
                    const existingUser = await prisma.user.findUnique({
                        where: { email },
                    });
                    if (existingUser) {
                        console.log("User already exists with email:", email);
                        return NextResponse.json({ error: 'User already exists' }, { status: 409 });
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
                    console.log("User signed up successfully:", user);
                    return user; // Signup successful
                }
                console.log("Something went wrong during signup process. try again.");
                return NextResponse.json({ error: 'Something went wrong' }, { status: 500 });
            }

export async function signup(state: MyFormState, formData: FormData) {
  try {
    const user = await signupUser(formData);
    return user;
  } catch (error) {
    throw new Error("Signup error: " + error);
  }
}
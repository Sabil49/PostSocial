'use server';
 
import { z } from "zod";
import { signIn, signOut } from './auth';
import { AuthError } from 'next-auth';
import {hashPassword} from '@/utils/bcrypt';
import prisma from '@/lib/prisma';

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

async function registerUser(data: FormData) {
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
                    await prisma.user.create({
                        data: {
                            email,
                            password: hashedPassword,
                            name,
                        },
                    });
                    return true; // Registration successful
                }
                console.log("Something went wrong during registration process. try again.");
                return null;
            }

export async function registration(formData: FormData) {
  try {
    await registerUser(formData);
  } catch (error) {
    throw new Error("Registration error: " + error);
  }
}
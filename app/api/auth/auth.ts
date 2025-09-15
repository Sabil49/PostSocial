import NextAuth from 'next-auth';
import Credentials from 'next-auth/providers/credentials';
import { authConfig } from './auth.config';
import { z } from 'zod';
import type { User } from '@/lib/definitions';
import bcrypt from 'bcrypt';
import prisma from '@/lib/prisma';

 
async function getUser(email: string): Promise<User | null> {
  try {
    const user = await prisma.user.findUnique({
      where: { email },
    });
    if (!user) return null;
    // Ensure all required User fields are non-null as per your User type
    return {
      ...user,
      email: user.email ?? '',
      name: user.name ?? '',
      image: user.image ?? '',
      password: user.password ?? '',
      // Add other fields as needed to match your User type definition
    };
  } catch (error) {
    console.error('Failed to fetch user:', error);
    throw new Error('Failed to fetch user.');
  }
}
 
export const { auth, signIn, signOut } = NextAuth({
  ...authConfig,
  providers: [
    Credentials({
  async authorize(credentials) {
    if (!credentials) return null;
    const parsedCredentials = z
      .object({ email: z.string().email(), password: z.string().min(6) })
      .safeParse(credentials);

    if (parsedCredentials.success) {
      const { email, password } = parsedCredentials.data;
      const user = await getUser(email);
      if (user && user.password) {
        const passwordsMatch = await bcrypt.compare(password, user.password);
        if (passwordsMatch) return user;
      }
    }
    console.log('Invalid credentials');
    return null;
  }
}),
  ],
});
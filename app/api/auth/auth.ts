import GoogleProvider from "next-auth/providers/google";
import GitHubProvider from "next-auth/providers/github";
import NextAuth from "next-auth";
import CredentialsProvider from 'next-auth/providers/credentials';
import { z } from "zod";
import type { User } from "@/types/type";
import prisma from "@/lib/prisma";
import { verifyPassword } from "@/utils/bcrypt";

// Fetch user by email
async function getUser(email: string): Promise<User | null> {
    try {
        const user = await prisma.user.findUnique({
            where: { email },
        });
        if (!user) return null;
        // Ensure all required User fields are non-null as per your User type
        return {
            ...user,
            email: user.email ?? "",
            name: user.name ?? "",
            image: user.image ?? "",
            password: user.password ?? "",
            // Add other fields as needed to match your User type definition
        };
    } catch (error) {
        //console.error("Failed to fetch user:", error);
        throw new Error("Failed to fetch user.");
    }
}
const newDate = new Date(); // The new Date object you want to set
export const { handlers: { GET, POST }, auth, signIn, signOut } = NextAuth({
    pages: {
        signIn: "/login",
    },
    callbacks: {        
        async jwt({ token, account, profile }) {
         if (account) {
            token.accessToken = account.access_token;
            if (profile) {
              token.id = profile.id;
         }
        }
      return token;
    },
    async session({ session, token }) {
      if (token) {
        session.accessToken = token.accessToken as string;
        session.user.id = token.id as string;
      }
      return session;
    },
    async signIn({ user }) {
      const userData = await getUser(user.email || '');
      if (!userData) {
        await prisma.user.create({
            data: {
                id : user.id,
                name: user.name,
                email: user.email,
                image: user.image,
                loginAt: newDate
            }
        })
      }
      if(userData){
        await prisma.user.update({
                                where: {
                                 email: userData.email, // Specify the record to update using a unique identifier
                                },
                                data: {
                                 loginAt: newDate // Provide the new value for the field you want to update
                                },
       });  
      
      }
        return true;
      // Return true to allow sign in, false to deny
      
    },
    authorized({ auth, request: { nextUrl }}) {
            const isLoggedIn = auth?.user.id;
            const isOnSocialAccount = nextUrl.pathname.startsWith("/SocialAccount");
            if (isOnSocialAccount) {
                if (isLoggedIn) return true;
                return false; // Redirect unauthenticated users to login page
            } else if (isLoggedIn) {
                return Response.redirect(new URL("/SocialAccount", nextUrl));
            }
            return true;
        },
    },
    providers: [
        CredentialsProvider({
            name: 'Credentials',
            credentials: {
            email: { label: 'Email', type: 'text' },
            password: { label: 'Password', type: 'password' },
          },
            async authorize(credentials) {
                if (!credentials) return null;
                const parsedCredentials = z.object({ email: z.string().email(), password: z.string().min(6) }).safeParse(credentials);

                if (parsedCredentials.success) {
                    const { email, password } = parsedCredentials.data;
                    const user = await getUser(email);
                    if (user && user.password) {
                        const passwordsMatch = await verifyPassword(password, user.password);
                        if (passwordsMatch) {
                            await prisma.user.update({
                                where: {
                                 email: user.email, // Specify the record to update using a unique identifier
                                },
                                data: {
                                 loginAt: newDate // Provide the new value for the field you want to update
                                },
                             });   
                             return user;
                        }
                    }
                }
                console.log("Invalid credentials");
                return null;
            },
        }),
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET,
        }),
        GitHubProvider({
                clientId: process.env.GITHUB_CLIENT_ID,
                clientSecret: process.env.GITHUB_CLIENT_SECRET,
            })
    ], // Add providers with an empty array for now
    secret: process.env.NEXTAUTH_SECRET,
});

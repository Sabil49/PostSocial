import type { NextAuthConfig } from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';
 
export const authConfig = {
  pages: {
    signIn: '/login',
  },
  callbacks: {
    authorized({ auth, request: { nextUrl } }) {
      const isLoggedIn = auth?.user;
      const isOnSocialAccount = nextUrl.pathname.startsWith('/SocialAccount');
      if (isOnSocialAccount) {
        if (isLoggedIn) return true;
        return false; // Redirect unauthenticated users to login page
      } else if (isLoggedIn) {
        return Response.redirect(new URL('/SocialAccount', nextUrl));
      }
      return true;
    },
  },
  providers: [GoogleProvider({
          clientId: process.env.GOOGLE_CLIENT_ID,
          clientSecret: process.env.GOOGLE_CLIENT_SECRET,
        }),], // Add providers with an empty array for now
         secret: process.env.NEXTAUTH_SECRET
} satisfies NextAuthConfig;
    // types/next-auth.d.ts
    import NextAuth, { DefaultSession } from "next-auth";
    import { JWT } from "next-auth/jwt";

    declare module "next-auth" {
      interface Session {
        accessToken?: string; // Add your custom properties here
        user: {
          id: string; // Ensure id is present if you need it
        } & DefaultSession["user"];
      }
    }

    declare module "next-auth/jwt" {
      interface JWT {
        accessToken?: string; // Add your custom properties here
      }
    }
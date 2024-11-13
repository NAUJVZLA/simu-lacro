import NextAuth from "next-auth";

declare module "next-auth" {
  interface Session {
    user: {
      id?: string;
      token?: string;
      name?: string | null;
      role: string;
      photo: string;
      email?: string | null;
      image?: string | null;
    };
  }
}

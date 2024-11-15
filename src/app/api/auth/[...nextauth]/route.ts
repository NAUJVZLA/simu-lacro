import { ILoginRequest } from "@/app/core/application/dto";
import { AuthService } from "@/app/infrastucture/service/auth.service";
import NextAuth, { NextAuthOptions, Session } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

interface AuthToken {
  id?: string;
  token?: string;
}

interface AuthUser {
  id: string;
  name: string;
  email: string;
  role: string;
  photo: string;
  token: string;
}

export interface CustomSession extends Session {
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

export const authOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        username: { label: "Correo Electrónico", type: "text" },
        password: { label: "Contraseña", type: "password" },
      },
      authorize: async (credentials) => {
        if (!credentials?.password || !credentials.username) {
          console.error("Credenciales faltantes");
          return null;
        }
        const loginRequest: ILoginRequest = {
          password: credentials.password,
          email: credentials.username,
        };

        try {
          const authService = new AuthService();
          const response = await authService.login(loginRequest);

          return {
            email: loginRequest.email,
            id: loginRequest.email,
            name: loginRequest.email,
            token: response.data.access_token,
            role: response.data.user.role,
            photo: response.data.user.photo,
          } as AuthUser;
        } catch (error) {
          console.log(error);
          return Promise.reject(new Error(JSON.stringify(error)));
        }
      },
    }),
  ],
  session: {
    strategy: "jwt",
  },
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        const authUser = user as AuthUser;
        token.id = authUser.id;
        token.name = authUser.name;
        token.role = authUser.role;
        token.photo = authUser.photo;
        token.token = authUser.token;
      }
      return token;
    },
    async session({ session, token }) {
      const customSession = session as CustomSession;
      customSession.user.id = token.id as string;
      customSession.user.token = token.token as string;
      customSession.user.name = token.name as string;
      customSession.user.role = token.role as string;
      customSession.user.photo = token.photo as string;
      return customSession;
    },
  },
};

// export default NextAuth(authOptions)
export const POST = NextAuth(authOptions);
export const GET = NextAuth(authOptions);

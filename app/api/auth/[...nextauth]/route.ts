import NextAuth from "next-auth";
import GitHubProvider from 'next-auth/providers/github';
import { authenticateUser } from '@/lib/auth';
import CredentialsProvider from 'next-auth/providers/credentials';


interface Props{
    email: string;
    password: string;
}
export const authOptions = {
    providers: [
        GitHubProvider({
            clientId: process.env.GITHUB_ID ?? '',
            clientSecret: process.env.GITHUB_SECRET ?? '',
        }),
        // CredentialsProvider({
        //     name: 'Credentials',
        //     credentials: {
        //       username: { label: 'Email', type: 'email', placeholder: 'Email' },
        //       password: { label: 'Password', type: 'password', placeholder: 'Password' },
        //     },
        //     authorize: async ({ username, password }: Record<"username" | "password", string>, req) => {
        //         if (!username || !password) return null;
        //         // Custom authentication logic
        //         const user = await authenticateUser(username, password);
        //         if (user) {
        //           return user;
        //         } else {
        //           return null;
        //         }
        //       }
              
        //   }),
        ],
        pages: {
          signIn: '/auth/signin', 
        },
        secret: process.env.NEXTAUTH_SECRET,
}

export const handler = NextAuth(authOptions)

export {handler as GET, handler as POST}
import NextAuth from "next-auth";
import GitHubProvider from 'next-auth/providers/github';
import { authenticateUser } from '@/lib/auth';
import CredentialsProvider from 'next-auth/providers/credentials';


export const authOptions = {
    providers: [
        GitHubProvider({
            clientId: process.env.GITHUB_ID ?? '',
            clientSecret: process.env.GITHUB_SECRET ?? '',
        }),
        ],
        secret: process.env.NEXTAUTH_SECRET,
}
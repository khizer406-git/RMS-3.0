import NextAuth from "next-auth";
import GitHubProvider from 'next-auth/providers/github';
import { authenticateUser } from '@/lib/auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import { query } from "@/lib/db";
import { compare } from "bcryptjs";
import sequelize from "@/db/sequlize";

interface SessionUser {
    id: string,
    name: string,
    email: string,
    password: string,
    role: string,
}
interface Token {
    id?: string;
    role?: string;
    email?: string;
    // Add any other properties you need
  }
interface JwtProps {
    user: SessionUser,
    token: Token,
}

interface Session {
    user: SessionUser;
  }
    
export const authOptions = {
    providers: [
        CredentialsProvider({
            name: 'Credentials',
            credentials: {
              email: { label: "Email", type: "text" },
              password: { label: "Password", type: "password" }
            },
            async authorize(credentials) {
                if (!credentials || !credentials.email || !credentials.password) {
                    throw new Error("Email and password are required");
                }
                
                const { email, password } = credentials;
                const params: string[] = [email];
                const [results] = await sequelize.query(
                    'Select * From users where email = :email',
                    {
                        replacements: {email},
                    }
                );
                if(results && results.length > 0) {
                    const user : SessionUser | any = results[0]
                    if (user){
                        return {
                            id: user.id,
                            name: user.name,
                            email: user.email,
                        };
                    } else {
                        return null;
                    }
                }
                return null
            },    
        }),
        GitHubProvider({
            clientId: process.env.GITHUB_ID ?? '',
            clientSecret: process.env.GITHUB_SECRET ?? '',
        }),
    ],
    callbacks: {
        async jwt({ token, user } : JwtProps) {
          if (user) {
            token.id = user.id; 
            token.email = user.email; 
          }
          return token; 
        },
        async session({ session, token }: { session: Session; token: Token }) {
            if (token) {
              session.user.id = token.id ?? ''; 
              session.user.email = token.email ?? ''; 
            }
            return session;
          },
      },
    secret: process.env.NEXTAUTH_SECRET,
}
import { NextRequest, NextResponse } from "next/server";

// Example usage

// pages/api/protected-route.ts
import type { NextApiRequest, NextApiResponse } from 'next';
import { getSession } from 'next-auth/react';
import { getServerSession } from "next-auth";
import { authOptions } from 'pages/api/auth/[...nextauth]';
// import { Middleware } from '../../../middleware'


export const PUT = async (req: NextRequest, res: NextResponse) => {

    const session = await getServerSession(authOptions)

    const { password } = await req.json();

  return NextResponse.json(
    { message: "Password updated Successfully" },
    { status: 201 }
  );
};

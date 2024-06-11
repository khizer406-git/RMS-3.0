// middleware/authMiddleware.ts

import { NextRequest, NextResponse } from 'next/server';
import { getServerSession } from 'next-auth';
import { getToken } from 'next-auth/jwt';

export default async function authMiddleware(req: NextRequest, res: NextResponse) {
  // Perform authentication logic here
  // For example, check if the user is authenticated
  const isAuthenticated = await getToken({ req, secret: process.env.NEXTAUTH_SECRET });
  
  
//   console.log(req.headers,'awkidh')
//   const isAuthenticated = (await fetch(`${req.nextUrl.origin}/api/whoami`,{method: 'GET', headers: req.headers})).json
  

  if (!isAuthenticated) {
    const loginUrl = `${req.nextUrl.origin}/auth/signin`;
    return NextResponse.redirect(loginUrl)
  }
  if(req.url.includes('/auth'))
        console.log(req.url,'called')

  // If the user is authenticated, proceed with the request
  return NextResponse.next();
}


export const config = {
    matcher: ['/'],
  };
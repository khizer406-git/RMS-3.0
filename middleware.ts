// middleware/authMiddleware.ts

import { NextRequest, NextResponse } from 'next/server';
import { getServerSession } from 'next-auth';
import { getToken } from 'next-auth/jwt';

export default async function authMiddleware(req: NextRequest, res: NextResponse) {
  const isAuthenticated = await getToken({ req, secret: process.env.NEXTAUTH_SECRET });
  
  if (!isAuthenticated) {
    const loginUrl = `${req.nextUrl.origin}/auth/signin`;
    return NextResponse.redirect(loginUrl)
  }

  // const user = isAuthenticated;

  // if(req.url.includes('/auth')){
  //   if (userRole === 'admin' && req.nextUrl.pathname.startsWith('/admin')) {
  //     return NextResponse.next();
  //   } else if (userRole === 'user' && req.nextUrl.pathname.startsWith('/user')) {
  //     return NextResponse.next();
  //   } else {
  //     return NextResponse.redirect(new URL('/', req.url));
  //   }
  // }
  // console.log(req.url,'called')

  // If the user is authenticated, proceed with the request
  return NextResponse.next();
}


export const config = {
    matcher: ['/'],
  };
import { getServerSession } from "next-auth";
import { authOptions } from "../auth/[...nextauth]/route";
import { NextResponse } from "next/server";
import { text } from "stream/consumers";


export const GET = async () => {
    const session = await getServerSession(authOptions);
    console.log(session,'awd')
    return NextResponse.json(session)

    // return NextResponse.json('hello')
}
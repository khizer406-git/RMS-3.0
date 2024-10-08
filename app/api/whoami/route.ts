import { getServerSession } from "next-auth";
import { authOptions } from "@/utils/authOptions";
import { NextResponse } from "next/server";
import { text } from "stream/consumers";


export const GET = async () => {
    const session = await getServerSession(authOptions);
    return NextResponse.json(session)
}

import { getServerSession } from "next-auth";
import { authOptions } from "@/utils/authOptions";
import { NextResponse } from "next/server";

export const getCurrentUser = async () => {
    const session = await getServerSession(authOptions);
    return NextResponse.json(session)
}

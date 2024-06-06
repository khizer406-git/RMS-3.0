import { NextRequest, NextResponse } from "next/server";

export const POST = async (req: NextRequest, res: NextResponse) => {

    const { otp, email } = await req.json();

    // checking otp in database
    const valid = true
    return (
        NextResponse.json(
            { message: valid ? 'Otp has been confirmed' : 'Invalid Otp' },
            { status: valid ? 201 : 400 }
        )
    )
}
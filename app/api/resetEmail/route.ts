import { NextRequest, NextResponse } from "next/server";

// Function to generate OTP
const generateOTP = (length: number) => {
    const digits = '0123456789';
    let OTP = '';
    for (let i = 0; i < length; i++) {
        OTP += digits[Math.floor(Math.random() * 10)];
    }
    return OTP;
};

// Example usage 

export const POST = async (req: NextRequest, res: NextResponse) => {

    const { email } = await req.json();
    const otp = generateOTP(6);

    return (
        NextResponse.json(
            { message: 'Otp has been send successfully to email' },
            { status: 201 }
        )
    )
}
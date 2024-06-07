import { NextRequest, NextResponse } from "next/server";

// Example usage

export const PUT = async (req: NextRequest, res: NextResponse) => {
  const { password } = await req.json();

  return NextResponse.json(
    { message: "Password updated Successfully" },
    { status: 201 }
  );
};

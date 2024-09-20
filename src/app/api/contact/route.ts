import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const { name, email, message } = await req.json();

  if (!name || !email || !message) {
    return NextResponse.json(
      { error: "Fields are not filled" },
      { status: 400 }
    );
  }

  return NextResponse.json({ status: 200 });
}

import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

export async function POST(req: NextRequest) {
  const { name, email, message } = await req.json();
  const RESEND_API_KEY = process.env.RESEND_API_KEY;
  const RESEND_API_MAIL = process.env.RESEND_API_MAIL;
  const resend = new Resend(RESEND_API_KEY);

  if (!name || !email || !message) {
    return NextResponse.json(
      { error: "Fields are not filled" },
      { status: 400 }
    );
  }

  const result = await resend.emails.send({
    from: "onboarding@resend.dev",
    to: email,
    subject: "We got your information",
    html: `<strong>Hello ${name} we got your contact information! </strong>`,
  });

  if (result.data?.id) {
    return NextResponse.json(
      { message: "Mail sent succesfully" },
      { status: 200 }
    );
  } else {
    return NextResponse.json(
      { error: "Failed to send email" },
      { status: 400 }
    );
  }
}

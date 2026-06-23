import { NextResponse } from "next/server";
import { sendContactEmail } from "@/lib/email/send-contact-email";

export async function POST(req: Request) {
  try {
    const body = await req.json();

    await sendContactEmail(body);

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error(error);

    return NextResponse.json({ success: false }, { status: 500 });
  }
}

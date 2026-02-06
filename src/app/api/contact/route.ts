import { NextResponse } from "next/server";

/**
 * POST /api/contact — handle contact form.
 * For now returns success; add your email provider (Resend, SendGrid, etc.) to actually send.
 */
export async function POST(req: Request) {
  try {
    const body = await req.json();
    const name = typeof body.name === "string" ? body.name.trim() : "";
    const email = typeof body.email === "string" ? body.email.trim() : "";
    const message = typeof body.message === "string" ? body.message.trim() : "";

    if (!name || !email || !message) {
      return NextResponse.json({ error: "Name, email, and message are required" }, { status: 400 });
    }

    // TODO: send email via Resend, SendGrid, etc.
    // e.g. await resend.emails.send({ from: "...", to: process.env.CONTACT_EMAIL, subject: `Contact from ${name}`, replyTo: email, text: message });
    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ error: "Something went wrong" }, { status: 500 });
  }
}

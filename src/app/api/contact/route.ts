import { Resend } from "resend";
import { NextResponse } from "next/server";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  const { name, email, service, budget, message } = await req.json();

  const { error } = await resend.emails.send({
    from: "SanjStudio Contact <onboarding@resend.dev>",
    to: "jyesanjurjo12@gmail.com",
    subject: `New enquiry from ${name}`,
    text: [
      `Name: ${name}`,
      `Email: ${email}`,
      `Industry: ${service}`,
      `Budget: ${budget}`,
      `Message:\n${message}`,
    ].join("\n\n"),
  });

  if (error) {
    return NextResponse.json({ error }, { status: 500 });
  }

  return NextResponse.json({ ok: true });
}

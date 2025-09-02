import { EmailTemplate } from "@/app/components/EmailTemplate";
import { Resend } from "resend";

declare const test: any;

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    // get the JSON body from the contact form
    const body = await req.json();
    const { firstName, email, message } = body;

    const { data, error } = await resend.emails.send({
      from: "Portfolio Contact <onboarding@resend.dev>", // must be a verified sender in Resend
      to: ["youremail@example.com"], // change this to YOUR email
      subject: `New message from ${firstName}`,
      react: EmailTemplate({ firstName, message }), // use form data here
    });

    if (error) {
      return Response.json({ error }, { status: 500 });
    }

    return Response.json(data);
  } catch (error) {
    return Response.json({ error }, { status: 500 });
  }
}

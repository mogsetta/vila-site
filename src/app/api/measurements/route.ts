import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const formattedMeasurements = Object.entries(body)
      .map(([key, value]) => `${key}: ${value}`)
      .join("\n");

    await resend.emails.send({
      from: "Vila Cleaners <onboarding@resend.dev>",
      to: "yourauntemail@gmail.com", // change this
      subject: "New Alteration Measurement Submission",
      text: formattedMeasurements,
    });

    return Response.json({ success: true });
  } catch (error) {
    return Response.json({ error: "Something went wrong" }, { status: 500 });
  }
}
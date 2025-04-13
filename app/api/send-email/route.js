import nodemailer from "nodemailer";

export async function POST(req) {
  const { email, message } = await req.json();

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.SMTP_EMAIL, // Your Gmail
      pass: process.env.SMTP_PASS,  // App password
    },
  });

  try {
    await transporter.sendMail({
      from: email,
      to: process.env.SMTP_EMAIL,
      subject: "Message from Portfolio Contact Form",
      text: message,
    });

    return new Response(JSON.stringify({ success: true }), {
      status: 200,
    });
  } catch (error) {
    console.error(error);
    return new Response(JSON.stringify({ success: false, error }), {
      status: 500,
    });
  }
}

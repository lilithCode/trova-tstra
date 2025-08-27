import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request) {
  try {
    const body = await request.json();
    const {
      inquiryCategory,
      firstName,
      lastName,
      companyName,
      email,
      phone,
      inquiryDetails,
    } = body;

    if (!email || !firstName || !lastName || !inquiryDetails) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    const { data, error } = await resend.emails.send({
      from: "Contact Form <onboarding@resend.dev>",
      to: "hamnamubarak.contact@gmail.com", //replace this with original email
      subject: `New Inquiry: ${inquiryCategory} from ${companyName}`,
      reply_to: email,
      html: `
        <h1>New Contact Form Submission</h1>
        <p><strong>From:</strong> ${firstName} ${lastName}</p>
        <p><strong>Company:</strong> ${companyName}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <hr />
        <h2>Inquiry Details</h2>
        <p><strong>Category:</strong> ${inquiryCategory}</p>
        <p>${inquiryDetails}</p>
      `,
    });

    if (error) {
      console.error("Resend API Error:", error);
      return NextResponse.json(
        { error: "Error sending email" },
        { status: 500 }
      );
    }

    return NextResponse.json({ message: "Email sent successfully!", data });
  } catch (error) {
    console.error("Server Error:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}

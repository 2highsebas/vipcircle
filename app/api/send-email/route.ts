import { Resend } from "resend"
import { NextRequest, NextResponse } from "next/server"

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(request: NextRequest) {
  try {
    const { firstName, lastName, email, phone, eventDescription } =
      await request.json()

    // Validate required fields
    if (!firstName || !lastName || !email || !phone || !eventDescription) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      )
    }

    // Send email to your business email
    const result = await resend.emails.send({
      from: "VIP Circle Contact <noreply@resend.dev>",
      to: process.env.CONTACT_EMAIL_TO || "your-email@example.com",
      subject: `New Contact Form Submission from ${firstName} ${lastName}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${firstName} ${lastName}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <h3>Event Description:</h3>
        <p>${eventDescription.replace(/\n/g, "<br>")}</p>
      `,
    })

    // Optionally send confirmation email to the user
    if (result.data) {
      await resend.emails.send({
        from: "VIP Circle <noreply@resend.dev>",
        to: email,
        subject: "We received your inquiry - VIP Circle",
        html: `
          <h2>Thank you, ${firstName}!</h2>
          <p>We've received your event inquiry and will be in touch shortly to discuss your vision.</p>
          <p>Our team will review your event details and reach out to you as soon as possible.</p>
          <br>
          <p>Best regards,<br>The VIP Circle Team</p>
        `,
      })
    }

    return NextResponse.json(
      { message: "Email sent successfully", data: result.data },
      { status: 200 }
    )
  } catch (error) {
    console.error("Error sending email:", error)
    return NextResponse.json(
      { error: "Failed to send email" },
      { status: 500 }
    )
  }
}

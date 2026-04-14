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

    // Email template for business notification
    const businessEmailHtml = `
      <!DOCTYPE html>
      <html>
        <head>
          <style>
            body {
              font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Helvetica', 'Arial', sans-serif;
              line-height: 1.6;
              color: #333;
            }
            .container {
              max-width: 600px;
              margin: 0 auto;
              padding: 40px 20px;
              background-color: #f9f9f9;
            }
            .header {
              background: linear-gradient(135deg, #000 0%, #1a1a1a 100%);
              color: white;
              padding: 40px 20px;
              text-align: center;
              margin-bottom: 30px;
            }
            .header h1 {
              margin: 0;
              font-size: 28px;
              font-weight: 300;
              letter-spacing: 2px;
              text-transform: uppercase;
            }
            .content {
              background-color: white;
              padding: 30px;
              border: 1px solid #e0e0e0;
            }
            .section {
              margin-bottom: 25px;
            }
            .section-title {
              font-weight: 600;
              color: #d4af37;
              text-transform: uppercase;
              letter-spacing: 1px;
              font-size: 12px;
              margin-bottom: 10px;
            }
            .field {
              margin-bottom: 15px;
            }
            .field-label {
              font-weight: 600;
              color: #666;
              font-size: 13px;
              text-transform: uppercase;
              letter-spacing: 0.5px;
            }
            .field-value {
              color: #333;
              margin-top: 5px;
              padding-left: 15px;
              border-left: 3px solid #d4af37;
            }
            .event-description {
              background-color: #f5f5f5;
              padding: 15px;
              border-left: 4px solid #d4af37;
              margin-top: 5px;
              white-space: pre-wrap;
              word-wrap: break-word;
            }
            .footer {
              text-align: center;
              padding-top: 30px;
              border-top: 1px solid #e0e0e0;
              font-size: 12px;
              color: #999;
              margin-top: 30px;
            }
            .cta-section {
              background-color: #f0f0f0;
              padding: 20px;
              text-align: center;
              margin-top: 30px;
            }
            .cta-section p {
              color: #666;
              margin: 0;
            }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h1>New Event Inquiry</h1>
            </div>
            
            <div class="content">
              <div class="section">
                <div class="section-title">Contact Information</div>
                
                <div class="field">
                  <div class="field-label">Name</div>
                  <div class="field-value">${firstName} ${lastName}</div>
                </div>
                
                <div class="field">
                  <div class="field-label">Email Address</div>
                  <div class="field-value">
                    <a href="mailto:${email}" style="color: #d4af37; text-decoration: none;">${email}</a>
                  </div>
                </div>
                
                <div class="field">
                  <div class="field-label">Phone Number</div>
                  <div class="field-value">
                    <a href="tel:${phone}" style="color: #d4af37; text-decoration: none;">${phone}</a>
                  </div>
                </div>
              </div>
              
              <div class="section">
                <div class="section-title">Event Details</div>
                <div class="field">
                  <div class="field-label">Event Description</div>
                  <div class="event-description">${eventDescription}</div>
                </div>
              </div>
              
              <div class="cta-section">
                <p>This inquiry requires your attention. Please reach out to ${firstName} as soon as possible to discuss their event vision.</p>
              </div>
              
              <div class="footer">
                <p>This is an automated message from VIP CIRCLE contact form. © ${new Date().getFullYear()} VIP CIRCLE. All rights reserved.</p>
              </div>
            </div>
          </div>
        </body>
      </html>
    `

    // Email template for client confirmation
    const clientEmailHtml = `
      <!DOCTYPE html>
      <html>
        <head>
          <style>
            body {
              font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Helvetica', 'Arial', sans-serif;
              line-height: 1.6;
              color: #333;
            }
            .container {
              max-width: 600px;
              margin: 0 auto;
              padding: 40px 20px;
              background-color: #f9f9f9;
            }
            .header {
              background: linear-gradient(135deg, #000 0%, #1a1a1a 100%);
              color: white;
              padding: 40px 20px;
              text-align: center;
              margin-bottom: 30px;
            }
            .header h1 {
              margin: 0;
              font-size: 28px;
              font-weight: 300;
              letter-spacing: 2px;
              text-transform: uppercase;
            }
            .content {
              background-color: white;
              padding: 30px;
              border: 1px solid #e0e0e0;
            }
            .greeting {
              font-size: 16px;
              margin-bottom: 20px;
            }
            .message {
              margin: 20px 0;
              line-height: 1.8;
            }
            .highlight {
              color: #d4af37;
              font-weight: 600;
            }
            .footer {
              text-align: center;
              padding-top: 30px;
              border-top: 1px solid #e0e0e0;
              font-size: 12px;
              color: #999;
              margin-top: 30px;
            }
            .signature {
              margin-top: 30px;
              font-size: 14px;
            }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h1>Thank You, ${firstName}!</h1>
            </div>
            
            <div class="content">
              <p class="greeting">Dear ${firstName},</p>
              
              <div class="message">
                <p>Thank you for reaching out to <span class="highlight">VIP CIRCLE</span>. We've received your event inquiry and are excited to learn more about your vision.</p>
              </div>
              
              <div class="message">
                <p>Our team is reviewing your event details and will contact you shortly to discuss how we can bring your extraordinary event to life. We're committed to creating an experience that reflects your unique style and exceeds your expectations.</p>
              </div>
              
              <div class="message">
                <p><strong>What's Next:</strong></p>
                <p>One of our event specialists will reach out within 24-48 hours to schedule a consultation call. In the meantime, if you have any additional details or questions, feel free to reply to this email.</p>
              </div>
              
              <div class="signature">
                <p>Best regards,</p>
                <p><span class="highlight">The VIP CIRCLE Team</span></p>
                <p style="font-size: 12px; color: #999; margin-top: 10px;">Creating Extraordinary Experiences</p>
              </div>
              
              <div class="footer">
                <p>© ${new Date().getFullYear()} VIP CIRCLE. All rights reserved.</p>
              </div>
            </div>
          </div>
        </body>
      </html>
    `

    // Send email to your business email
    const businessEmailFrom = process.env.RESEND_FROM_EMAIL || "noreply@vipcircle.com"
    const clientEmailFrom = process.env.RESEND_REPLY_EMAIL || "hello@vipcircle.com"
    const contactEmailTo = process.env.CONTACT_EMAIL_TO || "vipcircle47@gmail.com"

    const result = await resend.emails.send({
      from: businessEmailFrom,
      to: contactEmailTo,
      subject: `New Event Inquiry from ${firstName} ${lastName}`,
      html: businessEmailHtml,
    })

    if (!result.data) {
      console.error("Resend API error:", result.error)
      return NextResponse.json(
        { error: "Failed to send email notification", details: result.error },
        { status: 500 }
      )
    }

    // Send confirmation email to the user
    try {
      await resend.emails.send({
        from: clientEmailFrom,
        to: email,
        subject: "We Received Your Event Inquiry - VIP CIRCLE",
        html: clientEmailHtml,
      })
    } catch (confirmationError) {
      console.error("Error sending confirmation email:", confirmationError)
      // Don't fail the request if confirmation email fails - notification was sent
    }

    return NextResponse.json(
      { message: "Email sent successfully", data: result.data },
      { status: 200 }
    )
  } catch (error) {
    console.error("Error sending email:", error)
    return NextResponse.json(
      { error: "Failed to send email", details: String(error) },
      { status: 500 }
    )
  }
}

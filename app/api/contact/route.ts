import { NextResponse } from "next/server"
import { Resend } from 'resend'
const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { name, email, message } = body

    // Validate input
    if (!name || !email || !message) {
      return NextResponse.json(
        { message: "Missing required fields" },
        { status: 400 }
      )
    }
    
    // Current date for the email
    const date = new Date().toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
    
    // Send email using Resend
    const { data, error } = await resend.emails.send({
      from: 'Contact Form <onboarding@resend.dev>',
      to: process.env.CONTACT_EMAIL || 'your@email.com',
      subject: `New contact form submission from ${name}`,
      replyTo: email,
      text: `
        Name: ${name}
        Email: ${email}

        Message:
        ${message}
        
        Sent on: ${date}
      `,
      html: `
        <!DOCTYPE html>
        <html>
          <head>
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
            <title>New Portfolio Contact</title>
            <style>
              @media only screen and (max-width: 620px) {
                table.body h1 {
                  font-size: 28px !important;
                  margin-bottom: 10px !important;
                }
                
                table.body p,
                table.body ul,
                table.body ol,
                table.body td,
                table.body span,
                table.body a {
                  font-size: 16px !important;
                }
                
                table.body .wrapper,
                table.body .article {
                  padding: 10px !important;
                }
                
                table.body .content {
                  padding: 0 !important;
                }
                
                table.body .container {
                  padding: 0 !important;
                  width: 100% !important;
                }
                
                table.body .main {
                  border-left-width: 0 !important;
                  border-radius: 0 !important;
                  border-right-width: 0 !important;
                }
              }
            </style>
          </head>
          <body style="background-color: #f6f9fc; font-family: sans-serif; -webkit-font-smoothing: antialiased; font-size: 16px; line-height: 1.4; margin: 0; padding: 0; -ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%;">
            <table role="presentation" border="0" cellpadding="0" cellspacing="0" class="body" style="border-collapse: separate; width: 100%; background-color: #f6f9fc;">
              <tr>
                <td style="font-family: sans-serif; font-size: 16px; vertical-align: top;">&nbsp;</td>
                <td class="container" style="font-family: sans-serif; font-size: 16px; vertical-align: top; max-width: 600px; padding: 20px; margin: 0 auto;">
                  <div class="content" style="box-sizing: border-box; display: block; margin: 0 auto; max-width: 600px; padding: 20px;">

                    <!-- START CENTERED WHITE CONTAINER -->
                    <table role="presentation" class="main" style="border-collapse: separate; width: 100%; background: #ffffff; border-radius: 8px; box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);">
                      <!-- START MAIN CONTENT AREA -->
                      <tr>
                        <td class="wrapper" style="font-family: sans-serif; font-size: 16px; vertical-align: top; box-sizing: border-box; padding: 30px;">
                          <div style="border-bottom: 2px solid #5000ca; margin-bottom: 20px; padding-bottom: 10px;">
                            <h1 style="color: #333333; font-family: sans-serif; font-weight: 700; margin: 0; font-size: 24px;">New Contact Form Submission</h1>
                            <p style="color: #6b7280; margin: 8px 0 0;">${date}</p>
                          </div>
                          
                          <table role="presentation" border="0" cellpadding="0" cellspacing="0" style="width: 100%;">
                            <tr>
                              <td style="font-family: sans-serif; font-size: 16px; vertical-align: top;">
                                <div style="background-color: #f9fafb; border-radius: 6px; padding: 20px; margin-bottom: 20px;">
                                  <p style="margin: 0 0 8px; font-weight: bold; color: #374151;">Contact Details:</p>
                                  <table style="width: 100%">
                                    <tr>
                                      <td style="padding: 8px 0; color: #6b7280; width: 80px;">Name:</td>
                                      <td style="padding: 8px 0; font-weight: 500;">${name}</td>
                                    </tr>
                                    <tr>
                                      <td style="padding: 8px 0; color: #6b7280; width: 80px;">Email:</td>
                                      <td style="padding: 8px 0; font-weight: 500;">
                                        <a href="mailto:${email}" style="color: #5000ca; text-decoration: none;">${email}</a>
                                      </td>
                                    </tr>
                                  </table>
                                </div>
                                
                                <div style="margin-bottom: 15px;">
                                  <p style="margin: 0 0 12px; font-weight: bold; color: #374151;">Message:</p>
                                  <div style="background-color: #f9fafb; border-left: 4px solid #5000ca; border-radius: 3px; padding: 15px; color: #4b5563; line-height: 1.6;">
                                    ${message.replace(/\n/g, '<br>')}
                                  </div>
                                </div>

                                <div style="margin-top: 30px; text-align: center;">
                                  <table role="presentation" border="0" cellpadding="0" cellspacing="0" style="width: auto; margin: 0 auto;">
                                    <tr>
                                      <td style="border-radius: 6px; background-color: #5000ca; text-align: center;">
                                        <a href="mailto:${email}" style="border-radius: 6px; box-sizing: border-box; cursor: pointer; display: inline-block; font-size: 16px; font-weight: bold; margin: 0; padding: 10px 20px; text-decoration: none; background-color: #5000ca; border-color: #5000ca; color: #ffffff;">Reply to ${name}</a>
                                      </td>
                                    </tr>
                                  </table>
                                </div>
                              </td>
                            </tr>
                          </table>
                        </td>
                      </tr>
                    </table>

                    <!-- START FOOTER -->
                    <div class="footer" style="clear: both; margin-top: 10px; text-align: center; width: 100%;">
                      <table role="presentation" border="0" cellpadding="0" cellspacing="0" style="width: 100%;">
                        <tr>
                          <td class="content-block" style="font-family: sans-serif; vertical-align: top; padding: 20px 0; color: #9ca3af; font-size: 13px; text-align: center;">
                            <span>This email was sent from your portfolio contact form.</span>
                          </td>
                        </tr>
                      </table>
                    </div>
                    <!-- END FOOTER -->

                  </div>
                </td>
                <td style="font-family: sans-serif; font-size: 16px; vertical-align: top;">&nbsp;</td>
              </tr>
            </table>
          </body>
        </html>
      `,
    });

    if (error) {
      console.error("Email sending error:", error);
      return NextResponse.json(
        { message: "Failed to send email" },
        { status: 500 }
      );
    }

    console.log("Email sent successfully:", data);
    return NextResponse.json(
      { message: "Message sent successfully" },
      { status: 200 }
    );
    
  } catch (error) {
    console.error("Contact form error:", error)
    return NextResponse.json(
      { message: "Failed to send message" },
      { status: 500 }
    )
  }
}
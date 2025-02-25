import { NextResponse } from "next/server"

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { name, email, message } = body

    // Here you would typically send the email using your preferred method
    // For example, using a service like SendGrid, AWS SES, or Resend

    // Example using console.log for demonstration
    console.log("Contact form submission:", { name, email, message })

    // You could add email sending logic here:
    // await sendEmail({
    //   to: 'your@email.com',
    //   subject: `New contact form submission from ${name}`,
    //   text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
    // })

    return NextResponse.json({ message: "Message sent successfully" }, { status: 200 })
  } catch (error) {
    console.error("Contact form error:", error)
    return NextResponse.json({ message: "Failed to send message" }, { status: 500 })
  }
}


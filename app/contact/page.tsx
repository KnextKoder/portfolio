import { Mail } from "lucide-react"
import ContactForm from "@/components/contact-form"
import Footer from "@/components/footer"

export default function Contact() {
  return (
    <main className="max-w-4xl w-full mx-auto py-20 px-4 md:px-10">
      <div className="flex items-center gap-3 mb-8">
        <Mail className="w-8 h-8" />
        <h1 className="text-4xl font-bold">Contact Me</h1>
      </div>

      <p className="text-gray-600 mb-12">
        Reach out to me over email or fill up this contact form. I will get back to you ASAP - I promise.
      </p>

      <ContactForm />
      <Footer />
    </main>
  )
}
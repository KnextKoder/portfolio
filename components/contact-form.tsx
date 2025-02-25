"use client"

import { useState } from "react"
import { Loader2 } from "lucide-react"
import { toast } from "sonner"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"

export default function ContactForm() {
  const [pending, setPending] = useState(false)

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault(); // Prevent the default form submission

    setPending(true);

    const form = event.target as HTMLFormElement;
    const formData = new FormData(form);

    try {
        const response = await fetch("/api/contact", {
            method: "POST",
            body: JSON.stringify({
              name: formData.get("name"),
              email: formData.get("email"),
              message: formData.get("message"),
            }),
          });

      if (!response.ok) {
        throw new Error("Failed to send message")
      }

      toast.success("Message sent successfully!")
      // Reset form
      const form = document.getElementById("contact-form") as HTMLFormElement
      form.reset()
    } catch (error) {
      toast.error(`Failed to send message. Please try again. ${error}`)
    } finally {
      setPending(false)
    }
  }

  return (
    <form id="contact-form" className="space-y-6" onSubmit={handleSubmit}>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Input name="name" placeholder="Your Name" required className="bg-gray-50" />
        <Input name="email" type="email" placeholder="Your email address" required className="bg-gray-50" />
      </div>
      <Textarea name="message" placeholder="Your Message" required className="min-h-[200px] bg-gray-50" />
      <Button type="submit" className="w-full" disabled={pending}>
        {pending ? (
          <>
            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            Sending...
          </>
        ) : (
          "Submit"
        )}
      </Button>
    </form>
  )
}


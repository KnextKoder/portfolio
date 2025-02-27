"use client"

import { useState } from "react"
import { Loader2, CheckCircle2, Send, AlertCircle } from "lucide-react"
import { toast } from "sonner"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"

interface FormErrors {
  name?: string;
  email?: string;
  message?: string;
  form?: string;
}

export default function ContactForm() {
  const [pending, setPending] = useState(false)
  const [success, setSuccess] = useState(false)
  const [errors, setErrors] = useState<FormErrors>({})
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
    
    // Clear error when user starts typing in a field
    if (errors[name as keyof FormErrors]) {
      setErrors(prev => ({ ...prev, [name]: undefined }))
    }
  }

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {}
    
    if (!formData.name.trim()) {
      newErrors.name = "Name is required"
    }
    
    if (!formData.email.trim()) {
      newErrors.email = "Email is required"
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address"
    }
    
    if (!formData.message.trim()) {
      newErrors.message = "Please enter a message"
    } else if (formData.message.trim().length < 10) {
      newErrors.message = "Message should be at least 10 characters"
    }
    
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    
    // Validate form before submission
    if (!validateForm()) {
      toast.error("Please fix the errors in the form")
      return
    }

    setPending(true);
    setErrors({})

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.message || "Failed to send message")
      }

      toast.success("Message sent successfully! I'll get back to you soon.")
      setSuccess(true)
      
      // Reset form
      setFormData({ name: "", email: "", message: "" })
      
      // Reset success state after a delay
      setTimeout(() => {
        setSuccess(false)
      }, 5000)
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : "Failed to send message. Please try again."
      toast.error(errorMessage)
      setErrors({ form: errorMessage })
      console.error(error)
    } finally {
      setPending(false)
    }
  }

  return (
    <form id="contact-form" className="space-y-6" onSubmit={handleSubmit}>
      {errors.form && (
        <div className="p-4 bg-red-50 border border-red-200 rounded-lg text-red-800 flex items-start">
          <AlertCircle className="w-5 h-5 mr-2 flex-shrink-0 mt-0.5" />
          <span>{errors.form}</span>
        </div>
      )}
      
      {success && (
        <div className="p-4 bg-green-50 border border-green-200 rounded-lg text-green-800 flex items-start animate-pulse">
          <CheckCircle2 className="w-5 h-5 mr-2 flex-shrink-0 mt-0.5" />
          <span>Your message has been sent successfully! I&apos;ll respond as soon as possible.</span>
        </div>
      )}

      <div className="space-y-4">
        <div>
          <Label htmlFor="name" className="text-sm font-medium mb-1.5 block text-gray-700">Name</Label>
          <Input 
            id="name"
            name="name" 
            value={formData.name}
            onChange={handleChange}
            placeholder="Your name" 
            required 
            className={`bg-gray-50 border-gray-200 focus:border-primary focus:ring-1 focus:ring-primary/20 transition-all ${
              errors.name ? 'border-red-500 focus:border-red-500 focus:ring-red-200' : ''
            }`}
            disabled={pending || success}
          />
          {errors.name && (
            <p className="mt-1 text-sm text-red-600">{errors.name}</p>
          )}
        </div>
        
        <div>
          <Label htmlFor="email" className="text-sm font-medium mb-1.5 block text-gray-700">Email</Label>
          <Input 
            id="email"
            name="email" 
            type="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="your.email@example.com" 
            required 
            className={`bg-gray-50 border-gray-200 focus:border-primary focus:ring-1 focus:ring-primary/20 transition-all ${
              errors.email ? 'border-red-500 focus:border-red-500 focus:ring-red-200' : ''
            }`}
            disabled={pending || success}
          />
          {errors.email && (
            <p className="mt-1 text-sm text-red-600">{errors.email}</p>
          )}
        </div>
      </div>
      
      <div>
        <Label htmlFor="message" className="text-sm font-medium mb-1.5 block text-gray-700">Message</Label>
        <Textarea 
          id="message"
          name="message" 
          value={formData.message}
          onChange={handleChange}
          placeholder="How can I help you?" 
          required 
          className={`min-h-[200px] bg-gray-50 border-gray-200 focus:border-primary focus:ring-1 focus:ring-primary/20 resize-none transition-all ${
            errors.message ? 'border-red-500 focus:border-red-500 focus:ring-red-200' : ''
          }`}
          disabled={pending || success}
        />
        {errors.message && (
          <p className="mt-1 text-sm text-red-600">{errors.message}</p>
        )}
      </div>
      
      <Button 
        type="submit" 
        className={`group relative overflow-hidden px-6 py-3 ${success ? 'bg-green-600 hover:bg-green-700' : ''}`}
        disabled={pending || success}
      >
        <span className="flex items-center justify-center transition-all duration-300">
          {pending ? (
            <>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              Sending...
            </>
          ) : success ? (
            <>
              <CheckCircle2 className="mr-2 h-4 w-4" />
              Sent Successfully
            </>
          ) : (
            <>
              <Send className="mr-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              Send Message
            </>
          )}
        </span>
      </Button>
      
      <p className="text-sm text-gray-500 mt-4">
        Your information is securely processed and never shared with third parties.
      </p>
    </form>
  )
}
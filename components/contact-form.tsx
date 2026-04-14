"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { getSupabaseClient } from "@/lib/supabaseClient"

export function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [errorMessage, setErrorMessage] = useState("")
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    eventDescription: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setErrorMessage("")

    const supabase = getSupabaseClient()

    if (!supabase) {
      setErrorMessage("Form is not configured yet. Please set Supabase environment variables.")
      setIsSubmitting(false)
      return
    }
    
    const { error } = await supabase.from("contact_submissions").insert([
      {
        first_name: formData.firstName,
        last_name: formData.lastName,
        email: formData.email,
        phone: formData.phone,
        event_description: formData.eventDescription,
      },
    ])

    if (error) {
      console.error("Error saving contact:", error)
      setErrorMessage("Failed to save your inquiry. Please try again.")
      setIsSubmitting(false)
      return
    }

    // Send email notification via Resend
    try {
      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          firstName: formData.firstName,
          lastName: formData.lastName,
          email: formData.email,
          phone: formData.phone,
          eventDescription: formData.eventDescription,
        }),
      })

      if (!response.ok) {
        const errorData = await response.json()
        console.error("Error sending email notification", errorData)
        setErrorMessage("Your inquiry was saved but email notification failed. Please try again.")
        setIsSubmitting(false)
        return
      }
    } catch (emailError) {
      console.error("Error sending email:", emailError)
      setErrorMessage("Your inquiry was saved but email notification failed. Please try again.")
      setIsSubmitting(false)
      return
    }

    setIsSubmitting(false)
    setIsSubmitted(true)
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        eventDescription: "",
      })
    }, 3000)
  }

  if (isSubmitted) {
    return (
      <div className="flex flex-col items-center justify-center py-12 text-center space-y-4">
        <div className="w-16 h-16 rounded-full bg-green-100 border-2 border-green-500 flex items-center justify-center animate-in">
          <svg
            className="w-8 h-8 text-green-600"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path
              fillRule="evenodd"
              d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
              clipRule="evenodd"
            />
          </svg>
        </div>
        <h3 className="text-2xl font-light tracking-tight text-green-600">Confirmed!</h3>
        <p className="text-muted-foreground max-w-sm">
          Thank you! Your inquiry has been received. Our team will be in touch shortly to discuss your event.
        </p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-8">
      {errorMessage && (
        <div className="p-4 bg-red-50 border border-red-200 rounded text-red-700 text-sm">
          {errorMessage}
        </div>
      )}
      <div className="grid sm:grid-cols-2 gap-6">
        <div className="space-y-2">
          <Label 
            htmlFor="firstName" 
            className="text-xs tracking-[0.2em] uppercase text-muted-foreground"
          >
            First Name
          </Label>
          <Input
            id="firstName"
            name="firstName"
            type="text"
            required
            value={formData.firstName}
            onChange={handleChange}
            className="bg-background border-border focus:border-primary focus:ring-primary h-12 rounded-none"
            placeholder="Enter your first name"
          />
        </div>
        
        <div className="space-y-2">
          <Label 
            htmlFor="lastName" 
            className="text-xs tracking-[0.2em] uppercase text-muted-foreground"
          >
            Last Name
          </Label>
          <Input
            id="lastName"
            name="lastName"
            type="text"
            required
            value={formData.lastName}
            onChange={handleChange}
            className="bg-background border-border focus:border-primary focus:ring-primary h-12 rounded-none"
            placeholder="Enter your last name"
          />
        </div>
      </div>
      
      <div className="space-y-2">
        <Label 
          htmlFor="email" 
          className="text-xs tracking-[0.2em] uppercase text-muted-foreground"
        >
          Email Address
        </Label>
        <Input
          id="email"
          name="email"
          type="email"
          required
          value={formData.email}
          onChange={handleChange}
          className="bg-background border-border focus:border-primary focus:ring-primary h-12 rounded-none"
          placeholder="Enter your email address"
        />
      </div>
      
      <div className="space-y-2">
        <Label 
          htmlFor="phone" 
          className="text-xs tracking-[0.2em] uppercase text-muted-foreground"
        >
          Phone Number
        </Label>
        <Input
          id="phone"
          name="phone"
          type="tel"
          required
          value={formData.phone}
          onChange={handleChange}
          className="bg-background border-border focus:border-primary focus:ring-primary h-12 rounded-none"
          placeholder="Enter your phone number"
        />
      </div>

      <div className="space-y-2">
        <Label 
          htmlFor="eventDescription" 
          className="text-xs tracking-[0.2em] uppercase text-muted-foreground"
        >
          Event Description
        </Label>
        <textarea
          id="eventDescription"
          name="eventDescription"
          required
          value={formData.eventDescription}
          onChange={handleChange}
          className="w-full p-4 bg-background border border-border focus:border-primary focus:outline-none rounded-none min-h-[120px] text-foreground placeholder:text-muted-foreground resize-none"
          placeholder="Tell us about your event... (type of event, date, guest count, vision, etc.)"
        />
      </div>
      
      <Button
        type="submit"
        disabled={isSubmitting}
        className="w-full h-14 bg-primary text-primary-foreground hover:bg-primary/90 rounded-none text-sm tracking-[0.2em] uppercase transition-all duration-300"
      >
        {isSubmitting ? (
          <span className="flex items-center gap-2">
            <svg
              className="animate-spin h-4 w-4"
              fill="none"
              viewBox="0 0 24 24"
            >
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
              />
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
              />
            </svg>
            Sending...
          </span>
        ) : (
          "Submit"
        )}
      </Button>
      
      <p className="text-xs text-muted-foreground text-center">
        By submitting this form, you agree to our privacy policy.
      </p>
    </form>
  )
}

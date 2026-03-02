"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500))
    
    setIsSubmitting(false)
    setIsSubmitted(true)
  }

  if (isSubmitted) {
    return (
      <div className="flex flex-col items-center justify-center py-12 text-center space-y-4">
        <div className="w-16 h-16 border border-primary flex items-center justify-center">
          <svg
            className="w-8 h-8 text-primary"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1.5}
              d="M5 13l4 4L19 7"
            />
          </svg>
        </div>
        <h3 className="text-2xl font-light tracking-tight">Thank You</h3>
        <p className="text-muted-foreground max-w-sm">
          Your message has been received. We will be in touch with you shortly.
        </p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-8">
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

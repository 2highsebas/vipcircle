"use client"

import { ArrowDown } from "lucide-react"
import Image from "next/image"

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero-event.jpg"
          alt="Luxury event venue"
          fill
          className="object-cover"
          priority
        />
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-background/70" />
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-transparent to-background" />
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8 pt-20">
        <div className="flex flex-col items-center text-center">
          {/* Tagline */}
          <div className="mb-8 overflow-hidden">
            <p className="text-sm md:text-base tracking-[0.3em] text-primary uppercase animate-fade-in-up">
              Extraordinary Events. Timeless Experiences.
            </p>
          </div>

          {/* Main Heading */}
          <div className="overflow-hidden mb-8">
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-light tracking-[0.1em] text-foreground uppercase animate-fade-in-up animation-delay-200">
              VIP CIRCLE
            </h1>
          </div>

          {/* Decorative Line */}
          <div className="w-24 h-px bg-primary mb-8 animate-fade-in-up animation-delay-400" />

          {/* Description */}
          <div className="max-w-2xl overflow-hidden mb-12">
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed animate-fade-in-up animation-delay-600">
              A luxury event company specializing in corporate events and sophisticated weddings, 
              delivering flawlessly curated experiences designed to inspire connection, celebration, 
              and lasting impressions.
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-up animation-delay-800">
            <a
              href="#about"
              className="inline-flex items-center justify-center px-8 py-4 text-sm tracking-[0.15em] uppercase bg-primary text-primary-foreground hover:bg-primary/90 transition-all duration-300"
            >
              Discover More
            </a>
            <a
              href="#contact"
              className="inline-flex items-center justify-center px-8 py-4 text-sm tracking-[0.15em] uppercase border border-foreground/30 text-foreground hover:border-primary hover:text-primary transition-all duration-300"
            >
              Start Your Journey
            </a>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 animate-bounce">
        <a href="#about" className="text-muted-foreground hover:text-primary transition-colors">
          <ArrowDown size={24} />
        </a>
      </div>

      {/* Side Text */}
      <div className="hidden lg:block absolute left-8 top-1/2 -translate-y-1/2 z-10">
        <p className="text-xs tracking-[0.3em] text-muted-foreground uppercase -rotate-90 whitespace-nowrap origin-center">
          Corporate Events & Luxury Weddings
        </p>
      </div>

      {/* Side Text Right */}
      <div className="hidden lg:block absolute right-8 top-1/2 -translate-y-1/2 z-10">
        <p className="text-xs tracking-[0.3em] text-muted-foreground uppercase rotate-90 whitespace-nowrap origin-center">
          Excellence in Every Detail
        </p>
      </div>
    </section>
  )
}

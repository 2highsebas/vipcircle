"use client"

import { ArrowRight } from "lucide-react"

export function AboutSection() {
  return (
    <section id="about" className="py-32 bg-background">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-20">
          <p className="text-sm tracking-[0.3em] text-primary uppercase mb-4">
            About VIP Circle
          </p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-light tracking-[0.05em] text-foreground max-w-4xl text-balance">
            More than an event company — a bridge between vision and experience
          </h2>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          {/* Left Column */}
          <div className="space-y-8">
            <p className="text-lg text-muted-foreground leading-relaxed">
              At VIP CIRCLE, we believe great events begin with the right connections. 
              We collaborate with corporations, entrepreneurs, luxury venues, and trusted 
              industry professionals to deliver flawless execution and exceptional experiences.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Every partnership is chosen with excellence, creativity, and precision in mind — 
              because extraordinary events are never created alone.
            </p>
            <div className="pt-4">
              <a
                href="#contact"
                className="inline-flex items-center gap-3 text-sm tracking-[0.15em] uppercase text-primary hover:text-foreground transition-colors group"
              >
                <span>Work With Us</span>
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>

          {/* Right Column - Stats/Values */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            <div className="p-8 border border-border hover:border-primary/50 transition-colors">
              <p className="text-4xl font-light text-primary mb-4">01</p>
              <h3 className="text-lg tracking-[0.1em] uppercase text-foreground mb-3">Vision</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Transforming ideas into extraordinary experiences that leave lasting impressions.
              </p>
            </div>
            <div className="p-8 border border-border hover:border-primary/50 transition-colors">
              <p className="text-4xl font-light text-primary mb-4">02</p>
              <h3 className="text-lg tracking-[0.1em] uppercase text-foreground mb-3">Precision</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Every detail meticulously planned and executed to perfection.
              </p>
            </div>
            <div className="p-8 border border-border hover:border-primary/50 transition-colors">
              <p className="text-4xl font-light text-primary mb-4">03</p>
              <h3 className="text-lg tracking-[0.1em] uppercase text-foreground mb-3">Connection</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Building meaningful relationships that create unforgettable moments.
              </p>
            </div>
            <div className="p-8 border border-border hover:border-primary/50 transition-colors">
              <p className="text-4xl font-light text-primary mb-4">04</p>
              <h3 className="text-lg tracking-[0.1em] uppercase text-foreground mb-3">Elegance</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Sophisticated design and timeless aesthetics in every event.
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Quote */}
        <div className="mt-24 pt-16 border-t border-border">
          <blockquote className="max-w-3xl mx-auto text-center">
            <p className="text-2xl md:text-3xl font-light text-foreground leading-relaxed italic">
              &ldquo;Because every exceptional event deserves the right team, the right partners, 
              and the right touch of elegance.&rdquo;
            </p>
          </blockquote>
        </div>
      </div>
    </section>
  )
}

import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Sparkles, Globe, Heart, Award } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export const metadata = {
  title: "Portfolio - Lorena Mor | VIP CIRCLE",
  description: "Discover the journey of Lorena Mor, Founder and Creative Director of VIP CIRCLE.",
}

export default function PortfolioPage() {
  return (
    <main className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-24 bg-background overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-primary/5 to-transparent" />
        
        <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-primary text-sm tracking-[0.3em] uppercase mb-4">
              Portfolio
            </p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-light tracking-tight mb-8">
              The Vision Behind VIP CIRCLE
            </h1>
            <div className="w-16 h-px bg-primary mb-8" />
            <p className="text-lg text-muted-foreground leading-relaxed">
              A story of passion, creativity, and the pursuit of excellence in luxury event design.
            </p>
          </div>
        </div>
      </section>

      {/* Founder Story Section */}
      <section className="py-24 bg-card/50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            
            {/* Image Column */}
            <div className="relative order-2 lg:order-1">
              <div className="relative aspect-[3/4] max-w-md mx-auto lg:mx-0">
                {/* Decorative frame */}
                <div className="absolute -inset-4 border border-primary/20" />
                <div className="absolute -inset-8 border border-muted/30 hidden lg:block" />
                
                {/* Main image */}
                <div className="relative w-full h-full overflow-hidden">
                  <Image
                    src="/images/lorena-mor.png"
                    alt="Lorena Mor - Founder and Creative Director of VIP CIRCLE"
                    fill
                    className="object-cover object-top grayscale hover:grayscale-0 transition-all duration-700"
                    sizes="(max-width: 768px) 100vw, 50vw"
                    priority
                  />
                </div>
                
                {/* Orange accent line */}
                <div className="absolute -bottom-4 -right-4 w-24 h-1 bg-primary" />
              </div>
            </div>

            {/* Content Column */}
            <div className="order-1 lg:order-2 space-y-8">
              <div>
                <p className="text-primary text-sm tracking-[0.2em] uppercase mb-2">
                  Founder & Creative Director
                </p>
                <h2 className="text-4xl md:text-5xl font-light tracking-tight text-foreground mb-4">
                  Lorena Mor
                </h2>
                <div className="w-16 h-px bg-primary" />
              </div>

              <div className="space-y-6">
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Lorena Mor is the visionary founder and creative director of VIP CIRCLE, recognized 
                  for transforming ideas into elevated experiences defined by style, precision, and distinction.
                </p>
                
                <p className="text-muted-foreground leading-relaxed">
                  With an international perspective shaped by her diverse background and a natural passion 
                  for meaningful connections, Lorena has built a reputation for creating events that feel 
                  effortless, exclusive, and unforgettable.
                </p>

                <p className="text-muted-foreground leading-relaxed">
                  Her journey into luxury event planning began with a simple belief: that every gathering—whether 
                  corporate or personal—deserves to be exceptional. This philosophy has guided VIP CIRCLE's 
                  evolution from concept to one of the most trusted names in sophisticated event design.
                </p>
              </div>

              {/* Quote */}
              <blockquote className="relative py-8">
                <div className="absolute left-0 top-0 bottom-0 w-px bg-primary" />
                <p className="pl-8 text-xl md:text-2xl font-light italic text-foreground leading-relaxed">
                  "Elevating every fresh start with a touch of wanderlust."
                </p>
                <cite className="pl-8 mt-4 block text-sm text-primary tracking-[0.2em] uppercase not-italic">
                  — Lorena Mor
                </cite>
              </blockquote>
            </div>

          </div>
        </div>
      </section>

      {/* The Journey Section */}
      <section className="py-24 bg-background">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mb-20">
            <p className="text-sm tracking-[0.3em] text-primary uppercase mb-4">
              The Journey
            </p>
            <h2 className="text-4xl md:text-5xl font-light tracking-tight max-w-3xl">
              How VIP CIRCLE Came to Life
            </h2>
          </div>

          <div className="space-y-16">
            
            {/* The Beginning */}
            <div className="grid lg:grid-cols-12 gap-12">
              <div className="lg:col-span-4">
                <div className="sticky top-32">
                  <span className="text-6xl font-light text-primary/20">01</span>
                  <h3 className="text-2xl font-light tracking-wide mt-4 mb-2">
                    The Beginning
                  </h3>
                  <p className="text-sm text-primary tracking-wider uppercase">
                    A Vision Takes Shape
                  </p>
                </div>
              </div>
              <div className="lg:col-span-8 space-y-4">
                <p className="text-lg text-muted-foreground leading-relaxed">
                  VIP CIRCLE was born from Lorena's desire to bridge the gap between ordinary events 
                  and extraordinary experiences. Growing up with a deep appreciation for art, design, 
                  and global cultures, she recognized that the most memorable moments in life are those 
                  crafted with intention and care.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  What started as planning intimate gatherings for friends and family quickly evolved 
                  into a calling. Lorena saw an opportunity to bring her unique blend of strategic thinking, 
                  refined aesthetics, and genuine connection to the world of luxury events.
                </p>
              </div>
            </div>

            {/* Building the Brand */}
            <div className="grid lg:grid-cols-12 gap-12">
              <div className="lg:col-span-4">
                <div className="sticky top-32">
                  <span className="text-6xl font-light text-primary/20">02</span>
                  <h3 className="text-2xl font-light tracking-wide mt-4 mb-2">
                    Building the Brand
                  </h3>
                  <p className="text-sm text-primary tracking-wider uppercase">
                    Establishing Excellence
                  </p>
                </div>
              </div>
              <div className="lg:col-span-8 space-y-4">
                <p className="text-lg text-muted-foreground leading-relaxed">
                  With a foundation built on trust, creativity, and meticulous attention to detail, 
                  VIP CIRCLE quickly became known for delivering flawless execution. Lorena assembled 
                  a network of the finest vendors, venues, and creative professionals, each chosen for 
                  their commitment to excellence.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Her approach was different—she didn't just plan events; she curated experiences. 
                  Every element, from the first consultation to the final send-off, was designed to 
                  reflect her clients' unique visions while maintaining the sophisticated elegance 
                  that became VIP CIRCLE's signature.
                </p>
              </div>
            </div>

            {/* Expanding Horizons */}
            <div className="grid lg:grid-cols-12 gap-12">
              <div className="lg:col-span-4">
                <div className="sticky top-32">
                  <span className="text-6xl font-light text-primary/20">03</span>
                  <h3 className="text-2xl font-light tracking-wide mt-4 mb-2">
                    Expanding Horizons
                  </h3>
                  <p className="text-sm text-primary tracking-wider uppercase">
                    Miami & Beyond
                  </p>
                </div>
              </div>
              <div className="lg:col-span-8 space-y-4">
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Based in Miami, Florida, VIP CIRCLE has grown to serve clients across the United States 
                  and internationally. Lorena's wanderlust and global perspective allow her to create 
                  destination weddings and corporate events that seamlessly blend local culture with 
                  timeless sophistication.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  From intimate beachfront ceremonies to grand ballroom galas, from executive conferences 
                  to product launches that captivate, VIP CIRCLE has become synonymous with luxury, 
                  innovation, and unforgettable experiences.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Philosophy & Values */}
      <section className="py-24 bg-card/50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mb-20 text-center">
            <p className="text-sm tracking-[0.3em] text-primary uppercase mb-4">
              Philosophy
            </p>
            <h2 className="text-4xl md:text-5xl font-light tracking-tight">
              What Drives Us
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            
            <div className="relative p-8 bg-background border border-border hover:border-primary/50 transition-all duration-500 group">
              <div className="mb-6">
                <Sparkles className="w-10 h-10 text-primary" />
              </div>
              <h3 className="text-xl font-light tracking-wide mb-3">
                Excellence
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Every detail matters. We pursue perfection in design, execution, and service, 
                ensuring each event reflects the highest standards of luxury.
              </p>
            </div>

            <div className="relative p-8 bg-background border border-border hover:border-primary/50 transition-all duration-500 group">
              <div className="mb-6">
                <Heart className="w-10 h-10 text-primary" />
              </div>
              <h3 className="text-xl font-light tracking-wide mb-3">
                Connection
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                At the heart of every event is human connection. We create spaces where relationships 
                flourish and memories are made.
              </p>
            </div>

            <div className="relative p-8 bg-background border border-border hover:border-primary/50 transition-all duration-500 group">
              <div className="mb-6">
                <Globe className="w-10 h-10 text-primary" />
              </div>
              <h3 className="text-xl font-light tracking-wide mb-3">
                Global Vision
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Drawing inspiration from cultures worldwide, we bring an international perspective 
                to every celebration, no matter the location.
              </p>
            </div>

            <div className="relative p-8 bg-background border border-border hover:border-primary/50 transition-all duration-500 group">
              <div className="mb-6">
                <Award className="w-10 h-10 text-primary" />
              </div>
              <h3 className="text-xl font-light tracking-wide mb-3">
                Authenticity
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Your story is unique. We listen, understand, and translate your vision into an 
                experience that's genuinely yours.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* Today & Future Section */}
      <section className="py-24 bg-background">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <div className="text-center space-y-8">
            <div>
              <p className="text-sm tracking-[0.3em] text-primary uppercase mb-4">
                Looking Ahead
              </p>
              <h2 className="text-3xl md:text-4xl font-light tracking-tight">
                VIP CIRCLE Today
              </h2>
            </div>

            <div className="w-16 h-px bg-primary mx-auto" />

            <div className="space-y-6">
              <p className="text-lg text-muted-foreground leading-relaxed">
                Under Lorena's guidance, VIP CIRCLE has grown into a platform that unites 
                professionals, brands, and clients through curated events and luxury experiences. 
                Today, the company stands as a testament to what happens when passion meets precision.
              </p>

              <p className="text-muted-foreground leading-relaxed">
                Whether you're a corporation seeking to inspire your team, an entrepreneur launching 
                your vision, or a couple planning your dream wedding, VIP CIRCLE brings the same level 
                of dedication, creativity, and excellence to every project.
              </p>

              <p className="text-muted-foreground leading-relaxed">
                As we continue to grow, our mission remains unchanged: to create extraordinary events 
                that leave lasting impressions and bring people together in celebration of life's most 
                important moments.
              </p>
            </div>

            <blockquote className="pt-12">
              <p className="text-2xl md:text-3xl font-light italic text-foreground leading-relaxed">
                "Because every exceptional event deserves the right team, the right partners, 
                and the right vision."
              </p>
              <cite className="mt-6 block text-sm text-primary tracking-[0.2em] uppercase not-italic">
                — Lorena Mor, Founder & Creative Director
              </cite>
            </blockquote>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-card/50">
        <div className="mx-auto max-w-4xl px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-light tracking-tight mb-6">
            Let's Create Something Extraordinary Together
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed mb-10">
            Ready to bring your vision to life? Connect with Lorena and the VIP CIRCLE team 
            to start planning your next unforgettable experience.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-3 px-8 py-4 bg-primary text-primary-foreground hover:bg-primary/90 transition-colors tracking-[0.15em] uppercase text-sm"
          >
            <span>Get in Touch</span>
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  )
}

import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { ContactForm } from "@/components/contact-form"

export const metadata = {
  title: "Get In Touch | VIP CIRCLE",
  description: "Contact VIP CIRCLE for luxury corporate events and sophisticated weddings.",
}

export default function ContactPage() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <section className="relative min-h-screen pt-32 pb-24">
        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-card" />
        
        <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">
            {/* Left Column - Text Content */}
            <div className="space-y-8">
              <div className="space-y-4">
                <p className="text-primary text-sm tracking-[0.3em] uppercase">
                  Contact
                </p>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-light tracking-tight text-balance">
                  Get In Touch
                </h1>
              </div>
              
              <div className="w-16 h-px bg-primary" />
              
              <p className="text-lg text-muted-foreground leading-relaxed max-w-md">
                Ready to create an extraordinary event? We would love to hear from you. 
                Share your details and our team will be in touch shortly.
              </p>
              
              <div className="space-y-6 pt-8">
                <div className="space-y-2">
                  <p className="text-xs tracking-[0.2em] uppercase text-muted-foreground">
                    Email
                  </p>
                  <a 
                    href="mailto:hello@vipcircle.com" 
                    className="text-foreground hover:text-primary transition-colors"
                  >
                    hello@vipcircle.com
                  </a>
                </div>
                
                <div className="space-y-2">
                  <p className="text-xs tracking-[0.2em] uppercase text-muted-foreground">
                    Follow Us
                  </p>
                  <div className="flex gap-4">
                    <a 
                      href="#" 
                      className="text-muted-foreground hover:text-primary transition-colors text-sm"
                    >
                      Instagram
                    </a>
                    <a 
                      href="#" 
                      className="text-muted-foreground hover:text-primary transition-colors text-sm"
                    >
                      LinkedIn
                    </a>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Right Column - Form */}
            <div className="relative">
              {/* Decorative frame */}
              <div className="absolute -top-4 -right-4 w-full h-full border border-primary/20 hidden lg:block" />
              
              <div className="relative bg-card p-8 md:p-12 border border-border">
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  )
}

import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { ArrowRight, Calendar, Sparkles, Users, Palette, MapPin, Music } from "lucide-react"

export const metadata = {
  title: "Our Services | VIP CIRCLE",
  description: "Comprehensive event planning and design services for corporate events and sophisticated weddings.",
}

export default function ServicesPage() {
  return (
    <main className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-24 bg-background overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-primary/5 to-transparent" />
        
        <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-primary text-sm tracking-[0.3em] uppercase mb-4">
              Services
            </p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-light tracking-tight mb-8">
              Crafting Extraordinary Experiences
            </h1>
            <div className="w-16 h-px bg-primary mb-8" />
            <p className="text-lg text-muted-foreground leading-relaxed">
              From concept to completion, VIP CIRCLE delivers comprehensive event planning 
              and design services tailored to your vision. Our expertise spans corporate 
              gatherings and sophisticated weddings, ensuring every detail reflects elegance, 
              precision, and unforgettable moments.
            </p>
          </div>
        </div>
      </section>

      {/* Main Services Grid */}
      <section className="py-24 bg-card/50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            
            {/* Corporate Events */}
            <div className="group relative p-10 lg:p-12 bg-background border border-border hover:border-primary/50 transition-all duration-500">
              <div className="absolute -top-px -left-px w-12 h-12 border-t border-l border-primary opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="absolute -bottom-px -right-px w-12 h-12 border-b border-r border-primary opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="mb-6">
                <Calendar className="w-10 h-10 text-primary" />
              </div>
              
              <h3 className="text-2xl font-light tracking-wide mb-4">
                Corporate Events
              </h3>
              
              <p className="text-muted-foreground leading-relaxed mb-6">
                Elevate your brand with meticulously planned corporate experiences. From 
                executive conferences and product launches to team-building retreats and 
                annual galas, we create professional environments that inspire connection 
                and reinforce your corporate identity.
              </p>
              
              <ul className="space-y-3 mb-8">
                <li className="flex items-start gap-3">
                  <ArrowRight className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
                  <span className="text-sm text-muted-foreground">Executive Conferences & Summits</span>
                </li>
                <li className="flex items-start gap-3">
                  <ArrowRight className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
                  <span className="text-sm text-muted-foreground">Product Launches & Brand Activations</span>
                </li>
                <li className="flex items-start gap-3">
                  <ArrowRight className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
                  <span className="text-sm text-muted-foreground">Corporate Galas & Award Ceremonies</span>
                </li>
                <li className="flex items-start gap-3">
                  <ArrowRight className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
                  <span className="text-sm text-muted-foreground">Team Building & Company Retreats</span>
                </li>
                <li className="flex items-start gap-3">
                  <ArrowRight className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
                  <span className="text-sm text-muted-foreground">Holiday Parties & Milestone Celebrations</span>
                </li>
              </ul>
            </div>

            {/* Sophisticated Weddings */}
            <div className="group relative p-10 lg:p-12 bg-background border border-border hover:border-primary/50 transition-all duration-500">
              <div className="absolute -top-px -left-px w-12 h-12 border-t border-l border-primary opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="absolute -bottom-px -right-px w-12 h-12 border-b border-r border-primary opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="mb-6">
                <Sparkles className="w-10 h-10 text-primary" />
              </div>
              
              <h3 className="text-2xl font-light tracking-wide mb-4">
                Sophisticated Weddings
              </h3>
              
              <p className="text-muted-foreground leading-relaxed mb-6">
                Your wedding day should be as timeless as your love story. We craft bespoke 
                celebrations that blend elegance, emotion, and exquisite detail. From intimate 
                ceremonies to grand affairs, every element is designed to reflect your unique 
                vision and create memories that last forever.
              </p>
              
              <ul className="space-y-3 mb-8">
                <li className="flex items-start gap-3">
                  <ArrowRight className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
                  <span className="text-sm text-muted-foreground">Full-Service Wedding Planning</span>
                </li>
                <li className="flex items-start gap-3">
                  <ArrowRight className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
                  <span className="text-sm text-muted-foreground">Destination Wedding Coordination</span>
                </li>
                <li className="flex items-start gap-3">
                  <ArrowRight className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
                  <span className="text-sm text-muted-foreground">Intimate Ceremonies & Elopements</span>
                </li>
                <li className="flex items-start gap-3">
                  <ArrowRight className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
                  <span className="text-sm text-muted-foreground">Luxury Wedding Weekends</span>
                </li>
                <li className="flex items-start gap-3">
                  <ArrowRight className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
                  <span className="text-sm text-muted-foreground">Rehearsal Dinners & Post-Wedding Brunches</span>
                </li>
              </ul>
            </div>

          </div>
        </div>
      </section>

      {/* Detailed Services Section */}
      <section className="py-24 bg-background">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mb-20">
            <p className="text-sm tracking-[0.3em] text-primary uppercase mb-4">
              Comprehensive Planning
            </p>
            <h2 className="text-4xl md:text-5xl font-light tracking-tight max-w-3xl">
              End-to-End Event Services
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            
            {/* Event Design & Production */}
            <div className="p-8 border-l-2 border-primary">
              <div className="mb-4">
                <Palette className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-light tracking-wide mb-3">
                Event Design & Production
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Conceptualization, theme development, floral design, lighting, décor, and 
                custom installations that bring your vision to life with sophistication and style.
              </p>
            </div>

            {/* Venue Selection */}
            <div className="p-8 border-l-2 border-primary">
              <div className="mb-4">
                <MapPin className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-light tracking-wide mb-3">
                Venue Selection & Management
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Access to exclusive venues, site visits, contract negotiation, and on-site 
                coordination to ensure your location perfectly matches your event's ambiance.
              </p>
            </div>

            {/* Vendor Coordination */}
            <div className="p-8 border-l-2 border-primary">
              <div className="mb-4">
                <Users className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-light tracking-wide mb-3">
                Vendor Coordination
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Curated network of trusted professionals including caterers, photographers, 
                videographers, entertainment, and technical support for seamless execution.
              </p>
            </div>

            {/* Entertainment & Experience */}
            <div className="p-8 border-l-2 border-primary">
              <div className="mb-4">
                <Music className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-light tracking-wide mb-3">
                Entertainment & Experiences
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Live music, DJs, performers, interactive experiences, and unique entertainment 
                options tailored to create memorable moments for your guests.
              </p>
            </div>

            {/* Catering & Menu Design */}
            <div className="p-8 border-l-2 border-primary">
              <div className="mb-4">
                <Sparkles className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-light tracking-wide mb-3">
                Catering & Menu Design
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Custom menu creation, beverage programs, dietary accommodations, and presentation 
                that delights the senses and complements your event aesthetic.
              </p>
            </div>

            {/* Day-of Coordination */}
            <div className="p-8 border-l-2 border-primary">
              <div className="mb-4">
                <Calendar className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-light tracking-wide mb-3">
                Day-of Coordination
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Complete event management, timeline execution, vendor oversight, and troubleshooting 
                so you can be fully present and enjoy your special day.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-24 bg-card/50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mb-20 text-center">
            <p className="text-sm tracking-[0.3em] text-primary uppercase mb-4">
              Our Process
            </p>
            <h2 className="text-4xl md:text-5xl font-light tracking-tight">
              How We Work
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            
            <div className="relative text-center">
              <div className="mb-6 inline-flex items-center justify-center w-16 h-16 border-2 border-primary text-primary text-xl font-light">
                01
              </div>
              <h3 className="text-lg tracking-wide mb-3">Discovery</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                We listen, learn about your vision, goals, and preferences to understand 
                what makes your event truly special.
              </p>
            </div>

            <div className="relative text-center">
              <div className="mb-6 inline-flex items-center justify-center w-16 h-16 border-2 border-primary text-primary text-xl font-light">
                02
              </div>
              <h3 className="text-lg tracking-wide mb-3">Design</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Our team creates a comprehensive plan with mood boards, timelines, 
                budgets, and design concepts tailored to you.
              </p>
            </div>

            <div className="relative text-center">
              <div className="mb-6 inline-flex items-center justify-center w-16 h-16 border-2 border-primary text-primary text-xl font-light">
                03
              </div>
              <h3 className="text-lg tracking-wide mb-3">Execute</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                We coordinate every detail, manage vendors, and bring your event to 
                life with precision and grace.
              </p>
            </div>

            <div className="relative text-center">
              <div className="mb-6 inline-flex items-center justify-center w-16 h-16 border-2 border-primary text-primary text-xl font-light">
                04
              </div>
              <h3 className="text-lg tracking-wide mb-3">Celebrate</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Enjoy your flawlessly executed event while we handle every behind-the-scenes 
                detail, ensuring a memorable experience.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-background">
        <div className="mx-auto max-w-4xl px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-light tracking-tight mb-6">
            Ready to Create Something Extraordinary?
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed mb-10">
            Let's collaborate to bring your vision to life. Whether it's a corporate milestone 
            or your dream wedding, VIP CIRCLE is here to craft an unforgettable experience.
          </p>
          <a
            href="/contact"
            className="inline-flex items-center gap-3 px-8 py-4 bg-primary text-primary-foreground hover:bg-primary/90 transition-colors tracking-[0.15em] uppercase text-sm group"
          >
            <span>Start Planning</span>
            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
      </section>

      <Footer />
    </main>
  )
}

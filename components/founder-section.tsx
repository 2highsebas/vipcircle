import Image from "next/image"

export function FounderSection() {
  return (
    <section className="relative py-32 bg-background overflow-hidden">
      {/* Subtle background accent */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-primary/5 to-transparent" />
      
      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        {/* Section Header */}
        <div className="mb-16">
          <span className="text-primary text-sm tracking-[0.3em] uppercase font-medium">
            Leadership
          </span>
          <div className="mt-4 w-12 h-px bg-primary" />
        </div>

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
                Founder
              </p>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-light tracking-tight text-foreground">
                Lorena Mor
              </h2>
              <p className="mt-2 text-muted-foreground tracking-wide">
                Creative Director
              </p>
            </div>

            <div className="w-16 h-px bg-border" />

            <div className="space-y-6">
              <p className="text-lg text-muted-foreground leading-relaxed">
                Lorena Mor, Founder and Creative Director of VIP CIRCLE, is recognized for 
                transforming ideas into elevated experiences defined by style, precision, 
                and distinction.
              </p>
              
              <p className="text-muted-foreground leading-relaxed">
                With an international perspective and a passion for meaningful connections, 
                Lorena blends strategic planning with refined aesthetics to produce events 
                that feel effortless, exclusive, and unforgettable.
              </p>
            </div>

            {/* Quote */}
            <blockquote className="relative py-8">
              <div className="absolute left-0 top-0 bottom-0 w-px bg-primary" />
              <p className="pl-8 text-xl md:text-2xl font-light italic text-foreground leading-relaxed">
                "Elevating every fresh start with a touch of wanderlust."
              </p>
              <cite className="pl-8 mt-4 block text-sm text-primary tracking-[0.2em] uppercase not-italic">
                — Leadership Philosophy
              </cite>
            </blockquote>

            <p className="text-muted-foreground leading-relaxed">
              Under Lorena's guidance, VIP CIRCLE has grown into a platform that unites 
              professionals, brands, and clients through curated events and luxury experiences.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

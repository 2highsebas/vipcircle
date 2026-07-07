import Link from "next/link"
import { ArrowRight, MapPin } from "lucide-react"
import { venues } from "@/lib/venues"
import { createVenueArtwork } from "@/lib/venue-artwork"

const featuredVenues = venues.slice(0, 6)

export function VenuesSection() {
  return (
    <section id="venues" className="py-32 bg-card/40 border-y border-border/60">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid gap-16 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
          <div className="max-w-2xl space-y-8">
            <div>
              <p className="text-sm tracking-[0.3em] text-primary uppercase mb-4">Venue Access</p>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-light tracking-tight text-foreground text-balance">
                We work with venues that match the experience you want to create
              </h2>
            </div>

            <div className="w-16 h-px bg-primary" />

            <p className="text-lg text-muted-foreground leading-relaxed">
              From luxury resorts and private clubs to cultural landmarks and timeless estates,
              VIP Circle partners with exceptional venues across Central Florida to host events
              with presence, elegance, and purpose.
            </p>

            <div className="grid gap-6 sm:grid-cols-2">
              <div className="border border-border p-6">
                <p className="text-3xl font-light text-primary mb-3">9+</p>
                <h3 className="text-sm tracking-[0.2em] uppercase text-foreground mb-2">Featured Venues</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Distinguished spaces for weddings, corporate gatherings, and curated celebrations.
                </p>
              </div>
              <div className="border border-border p-6">
                <p className="text-3xl font-light text-primary mb-3">Central FL</p>
                <h3 className="text-sm tracking-[0.2em] uppercase text-foreground mb-2">Regional Reach</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Relationships with venues that support meaningful guest experiences and seamless logistics.
                </p>
              </div>
            </div>

            <div className="flex flex-col gap-4 sm:flex-row">
              <Link
                href="/services"
                className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-primary text-primary-foreground hover:bg-primary/90 transition-colors tracking-[0.15em] uppercase text-sm"
              >
                <span>Explore Venues</span>
                <ArrowRight size={16} />
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-3 px-8 py-4 border border-border text-foreground hover:border-primary hover:text-primary transition-colors tracking-[0.15em] uppercase text-sm"
              >
                <span>Inquire Now</span>
              </Link>
            </div>
          </div>

          <div className="grid gap-6 sm:grid-cols-2">
            {featuredVenues.map((venue, index) => (
              <article
                key={venue.name}
                className={`group overflow-hidden border border-border bg-background/80 transition-all duration-500 hover:-translate-y-1 hover:border-primary/50 ${
                  index === 0 || index === 3 ? "sm:translate-y-10" : ""
                }`}
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <div
                    className="absolute inset-0 bg-cover bg-center grayscale transition duration-700 group-hover:scale-105 group-hover:grayscale-0"
                    style={{ backgroundImage: createVenueArtwork(venue) }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent" />
                  <div className="absolute left-4 top-4 inline-flex items-center gap-2 border border-white/20 bg-black/20 px-3 py-1 text-[10px] tracking-[0.28em] uppercase text-white/80 backdrop-blur-sm">
                    <MapPin className="h-3 w-3" />
                    <span>{venue.location}</span>
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 p-5">
                    <p className="text-[11px] tracking-[0.3em] uppercase text-primary/90 mb-2">{venue.venueType}</p>
                    <h3 className="text-2xl font-light tracking-wide text-white">{venue.name}</h3>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

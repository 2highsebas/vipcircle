export type Venue = {
  name: string
  description: string
  location: string
  monogram: string
  palette: [string, string]
  venueType: string
  bestFor: string
  atmosphere: string
  highlights: string[]
}

export const venues: Venue[] = [
  {
    name: "JW Marriott Orlando",
    description:
      "A luxury destination known for its elegant event spaces, world-class hospitality, and sophisticated atmosphere.",
    location: "Orlando, FL",
    monogram: "JW",
    palette: ["#8D6B45", "#D1A15A"],
    venueType: "Luxury resort",
    bestFor: "Black-tie galas, executive events, and elevated wedding weekends",
    atmosphere: "Polished, refined, and hospitality-driven with a grand resort feel.",
    highlights: ["Elegant event spaces", "Resort-level guest experience", "Sophisticated atmosphere"],
  },
  {
    name: "Sheraton Orlando",
    description:
      "A premier hotel offering versatile meeting and event facilities ideal for corporate and social gatherings.",
    location: "Orlando, FL",
    monogram: "SO",
    palette: ["#57697C", "#9AA8B6"],
    venueType: "Full-service hotel",
    bestFor: "Conferences, social celebrations, and multi-format gatherings",
    atmosphere: "Contemporary and flexible, designed to support both professional and social events.",
    highlights: ["Versatile event facilities", "Ideal for corporate gatherings", "Strong guest accommodations"],
  },
  {
    name: "Golden Bear Club at Keene's Pointe",
    description:
      "An exclusive golf club in Windermere featuring a refined setting, championship golf, and private event opportunities.",
    location: "Windermere, FL",
    monogram: "GB",
    palette: ["#6E5B3D", "#C7A45F"],
    venueType: "Private country club",
    bestFor: "Upscale member events, intimate celebrations, and refined receptions",
    atmosphere: "Exclusive, quiet, and elegant with a classic club ambiance.",
    highlights: ["Private event setting", "Championship golf surroundings", "Refined club environment"],
  },
  {
    name: "Lake Nona Golf & Country Club",
    description:
      "A prestigious private club recognized for its luxury amenities, scenic surroundings, and exceptional event experiences.",
    location: "Lake Nona, FL",
    monogram: "LN",
    palette: ["#355C4F", "#87A77B"],
    venueType: "Luxury private club",
    bestFor: "Luxury receptions, curated member events, and high-end private celebrations",
    atmosphere: "Lush, exclusive, and elevated with a strong sense of privacy and sophistication.",
    highlights: ["Luxury amenities", "Scenic surroundings", "Exceptional private event experiences"],
  },
  {
    name: "Orlando Museum of Art",
    description:
      "One of Central Florida's leading cultural institutions, offering a unique and inspiring environment for special events.",
    location: "Orlando, FL",
    monogram: "OMA",
    palette: ["#5A456D", "#B289D6"],
    venueType: "Cultural landmark",
    bestFor: "Art-forward receptions, donor events, and sophisticated private gatherings",
    atmosphere: "Creative, inspiring, and visually rich with a distinctive cultural backdrop.",
    highlights: ["Museum setting", "Inspiring galleries", "Distinctive guest experience"],
  },
  {
    name: "Oviedo Amphitheatre & Cultural Center",
    description:
      "A vibrant community venue designed for performances, festivals, cultural programs, and public events.",
    location: "Oviedo, FL",
    monogram: "OA",
    palette: ["#4B5E79", "#A4B7CF"],
    venueType: "Performance and community venue",
    bestFor: "Festivals, cultural programming, concerts, and large public celebrations",
    atmosphere: "Open, energetic, and community-centered with room for large-scale experiences.",
    highlights: ["Performance-ready layout", "Festival-friendly setting", "Public event versatility"],
  },
  {
    name: "Masjid Al-Hayy",
    description:
      "A respected community and cultural center that serves as a gathering place for educational, charitable, and special events.",
    location: "Central Florida",
    monogram: "MH",
    palette: ["#33534F", "#79A9A1"],
    venueType: "Community and cultural center",
    bestFor: "Educational programs, charitable gatherings, and meaningful community celebrations",
    atmosphere: "Welcoming, respectful, and purpose-driven with strong community roots.",
    highlights: ["Community-centered setting", "Educational gatherings", "Charitable and special events"],
  },
  {
    name: "The Amador Gallery",
    description:
      "A creative and contemporary art space providing an elegant backdrop for private events and community engagement.",
    location: "Central Florida",
    monogram: "AG",
    palette: ["#6C4156", "#D094B2"],
    venueType: "Contemporary gallery",
    bestFor: "Stylish private events, creative launches, and intimate receptions",
    atmosphere: "Modern, artistic, and intimate with a strong visual identity.",
    highlights: ["Creative backdrop", "Contemporary aesthetic", "Ideal for intimate events"],
  },
  {
    name: "Howey Mansion",
    description:
      "A historic Florida estate celebrated for its timeless architecture, charm, and unforgettable event experiences.",
    location: "Howey-in-the-Hills, FL",
    monogram: "HM",
    palette: ["#6A5144", "#C98A5D"],
    venueType: "Historic estate",
    bestFor: "Romantic weddings, timeless receptions, and heritage-inspired celebrations",
    atmosphere: "Historic, romantic, and full of old-Florida charm.",
    highlights: ["Timeless architecture", "Estate charm", "Memorable wedding setting"],
  },
]

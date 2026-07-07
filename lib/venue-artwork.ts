import type { Venue } from "@/lib/venues"

function escapeSvgText(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
}

export function createVenueArtwork({ name, location, monogram, palette }: Venue) {
  const [start, end] = palette

  const svg = `
    <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1200 900'>
      <defs>
        <linearGradient id='venueGradient' x1='0%' y1='0%' x2='100%' y2='100%'>
          <stop offset='0%' stop-color='${start}' />
          <stop offset='100%' stop-color='${end}' />
        </linearGradient>
        <linearGradient id='glow' x1='0%' y1='100%' x2='100%' y2='0%'>
          <stop offset='0%' stop-color='rgba(255,255,255,0.08)' />
          <stop offset='100%' stop-color='rgba(255,255,255,0.3)' />
        </linearGradient>
      </defs>
      <rect width='1200' height='900' fill='#111111' />
      <rect width='1200' height='900' fill='url(#venueGradient)' opacity='0.88' />
      <circle cx='980' cy='170' r='180' fill='white' opacity='0.08' />
      <circle cx='220' cy='240' r='120' fill='white' opacity='0.06' />
      <path d='M0 620 C180 520, 340 700, 520 610 S920 520, 1200 660 L1200 900 L0 900 Z' fill='#0F0F10' opacity='0.48' />
      <path d='M0 710 C180 620, 360 780, 560 700 S960 640, 1200 760 L1200 900 L0 900 Z' fill='#050505' opacity='0.45' />
      <g fill='url(#glow)' opacity='0.8'>
        <rect x='120' y='250' width='170' height='330' rx='8' />
        <rect x='330' y='185' width='220' height='395' rx='8' />
        <rect x='595' y='290' width='145' height='290' rx='8' />
        <rect x='775' y='210' width='255' height='370' rx='8' />
      </g>
      <g stroke='rgba(255,255,255,0.18)' stroke-width='6' fill='none'>
        <path d='M0 545 H1200' />
        <path d='M0 610 H1200' opacity='0.5' />
      </g>
      <text x='88' y='152' fill='white' fill-opacity='0.92' font-size='88' font-family='Georgia, serif' letter-spacing='10'>${escapeSvgText(monogram)}</text>
      <text x='88' y='760' fill='white' fill-opacity='0.96' font-size='50' font-family='Georgia, serif'>${escapeSvgText(name)}</text>
      <text x='88' y='814' fill='white' fill-opacity='0.7' font-size='28' font-family='Arial, sans-serif' letter-spacing='4'>${escapeSvgText(location.toUpperCase())}</text>
    </svg>
  `

  return `url("data:image/svg+xml;charset=UTF-8,${encodeURIComponent(svg)}")`
}

"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu, X } from "lucide-react"

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-background/80 backdrop-blur-md border-b border-border"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <Image
              src="/images/Vipcirle-removebg-preview.png"
              alt="VIP Circle"
              width={120}
              height={48}
              className="object-contain"
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-12">
            <Link
              href="/#about"
              className="text-sm tracking-[0.15em] text-muted-foreground hover:text-foreground transition-colors uppercase"
            >
              About
            </Link>
            <Link
              href="/services"
              className="text-sm tracking-[0.15em] text-muted-foreground hover:text-foreground transition-colors uppercase"
            >
              Services
            </Link>
            <Link
              href="/portfolio"
              className="text-sm tracking-[0.15em] text-muted-foreground hover:text-foreground transition-colors uppercase"
            >
              Portfolio
            </Link>
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-6 py-2.5 text-sm tracking-[0.1em] uppercase bg-primary text-primary-foreground hover:bg-primary/90 transition-colors"
            >
              Get in Touch
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden text-foreground p-2"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden absolute top-full left-0 right-0 bg-background/95 backdrop-blur-md border-b border-border transition-all duration-300 ${
          isMobileMenuOpen
            ? "opacity-100 translate-y-0"
            : "opacity-0 -translate-y-4 pointer-events-none"
        }`}
      >
        <div className="px-6 py-8 flex flex-col gap-6">
          <Link
            href="/#about"
            onClick={() => setIsMobileMenuOpen(false)}
            className="text-sm tracking-[0.15em] text-muted-foreground hover:text-foreground transition-colors uppercase"
          >
            About
          </Link>
          <Link
            href="/services"
            onClick={() => setIsMobileMenuOpen(false)}
            className="text-sm tracking-[0.15em] text-muted-foreground hover:text-foreground transition-colors uppercase"
          >
            Services
          </Link>
          <Link
            href="/portfolio"
            onClick={() => setIsMobileMenuOpen(false)}
            className="text-sm tracking-[0.15em] text-muted-foreground hover:text-foreground transition-colors uppercase"
          >
            Portfolio
          </Link>
          <Link
            href="/contact"
            onClick={() => setIsMobileMenuOpen(false)}
            className="inline-flex items-center justify-center px-6 py-3 text-sm tracking-[0.1em] uppercase bg-primary text-primary-foreground mt-2"
          >
            Get in Touch
          </Link>
        </div>
      </div>
    </nav>
  )
}

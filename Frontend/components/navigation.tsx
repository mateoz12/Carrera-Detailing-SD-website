"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X } from "lucide-react"
import Image from "next/image"

const navLinks = [
  { label: "Services", href: "#services" },
  { label: "Results", href: "#results" },
  { label: "Process", href: "#process" },
  { label: "Reviews", href: "#testimonials" },
]

export function Navigation() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 1.3, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-background/90 backdrop-blur-md border-b border-border"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 lg:px-6">
        <a href="#" className="flex items-center">
          <Image
            src="/images/logo.png"
            alt="Carrera Detailing Co."
            width={173}
            height={87}
            className="h-12 w-auto brightness-0 invert"
            priority
          />
        </a>

        <div className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-light uppercase tracking-widest text-muted-foreground transition-colors hover:text-foreground"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#book"
            className="bg-primary px-6 py-2.5 text-sm font-medium uppercase tracking-wider text-primary-foreground transition-opacity hover:opacity-90"
          >
            Book Now
          </a>
        </div>

        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="text-foreground md:hidden"
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
        >
          {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="overflow-hidden border-b border-border bg-background/95 backdrop-blur-md md:hidden"
          >
            <div className="flex flex-col gap-4 px-6 py-6">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="text-sm font-light uppercase tracking-widest text-muted-foreground transition-colors hover:text-foreground"
                >
                  {link.label}
                </a>
              ))}
              <a
                href="#book"
                onClick={() => setMobileOpen(false)}
                className="mt-2 bg-primary px-6 py-3 text-center text-sm font-medium uppercase tracking-wider text-primary-foreground"
              >
                Book Now
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}

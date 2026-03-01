"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X, Phone } from "lucide-react"

const navLinks = [
  { label: "Services", href: "#services" },
  { label: "Results", href: "#results" },
  { label: "Process", href: "#process" },
  { label: "Reviews", href: "#reviews" },
]

export function Navigation() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener("scroll", onScroll)
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 1.3, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-background/90 backdrop-blur-md border-b border-border"
            : "bg-transparent"
        }`}
      >
        <nav className="relative mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
          <a href="#" className="flex items-center gap-2">
            <span className="text-lg font-light tracking-[0.25em] uppercase text-foreground">
              Carrera Detailing San Diego
            </span>
          </a>

          <div className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-10 md:flex">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-light tracking-widest uppercase text-muted-foreground transition-colors duration-300 hover:text-foreground"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="hidden items-center gap-6 md:flex">
            <a
              href="tel:+1234567890"
              className="flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              <Phone className="h-4 w-4" />
              <span className="sr-only">Call us</span>
            </a>
            <a
              href="#book"
              className="border border-foreground bg-foreground px-6 py-2.5 text-xs font-medium tracking-[0.2em] uppercase text-primary-foreground transition-all duration-300 hover:bg-transparent hover:text-foreground"
            >
              Book Your Detail
            </a>
          </div>

          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="justify-self-end text-foreground md:hidden"
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </nav>
      </motion.header>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 flex flex-col items-center justify-center gap-8 bg-background/98 backdrop-blur-lg md:hidden"
          >
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="text-2xl font-light tracking-[0.2em] uppercase text-foreground"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#book"
              onClick={() => setMobileOpen(false)}
              className="mt-4 border border-foreground bg-foreground px-8 py-3 text-sm font-medium tracking-[0.2em] uppercase text-primary-foreground"
            >
              Book Your Detail
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

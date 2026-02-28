"use client"

import { motion } from "framer-motion"
import { ArrowDown } from "lucide-react"

export function Hero() {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="/images/hero-car.jpg"
          alt="Luxury vehicle interior with premium detailing"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-background/70" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/30 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-5xl px-6 text-center">
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.3, ease: [0.22, 1, 0.36, 1] }}
          className="mb-6 text-xs font-light tracking-[0.4em] uppercase text-muted-foreground"
        >
          La Jolla &middot; Del Mar &middot; Rancho Santa Fe
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.3, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          className="mb-8 font-serif text-5xl font-light leading-tight tracking-tight text-foreground text-balance md:text-7xl lg:text-8xl"
        >
          Luxury Interior Detailing
          <br />
          <span className="text-accent">{"Delivered to You"}</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.3, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="mx-auto mb-12 max-w-2xl text-lg font-light leading-relaxed text-muted-foreground md:text-xl"
        >
          Premium mobile interior detailing for San Diego&#39;s finest vehicles.
          We restore your car&#39;s interior to showroom condition — at your home or office.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.3, delay: 0.45, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col items-center justify-center gap-4 sm:flex-row"
        >
          <a
            href="#book"
            className="w-full border border-foreground bg-foreground px-10 py-4 text-sm font-medium tracking-[0.2em] uppercase text-primary-foreground transition-all duration-300 hover:bg-transparent hover:text-foreground sm:w-auto"
          >
            Book Your Detail
          </a>
          <a
            href="#results"
            className="w-full border border-border px-10 py-4 text-sm font-light tracking-[0.2em] uppercase text-foreground transition-all duration-300 hover:border-foreground sm:w-auto"
          >
            View Results
          </a>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1.3 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <ArrowDown className="h-5 w-5 text-muted-foreground" />
        </motion.div>
      </motion.div>
    </section>
  )
}

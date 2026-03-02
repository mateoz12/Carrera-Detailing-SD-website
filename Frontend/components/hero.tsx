"use client"

import { motion } from "framer-motion"
import Image from "next/image"

export function Hero() {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/images/hero-car.jpg"
          alt="Luxury vehicle in dramatic lighting"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/40 to-background" />
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-5xl px-6 text-center">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.3, delay: 0.3 }}
          className="mb-6 text-xs font-light uppercase tracking-[0.4em] text-warm-gray"
        >
          Premium Mobile Interior Detailing
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.3, delay: 0.5 }}
          className="font-serif font-light leading-none tracking-tight text-foreground"
        >
          <span className="flex items-end justify-center gap-3 sm:gap-4 md:gap-5">
            <span className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl">Carrera</span>
            <span className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-warm-gray pb-0.5 sm:pb-1">Detailing Co.</span>
          </span>
          <span className="mt-4 block text-lg font-light text-gold sm:text-xl md:text-2xl lg:text-3xl tracking-widest uppercase">
            Premium Interior Detailing
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.3, delay: 0.8 }}
          className="mx-auto mt-8 max-w-2xl text-base font-light leading-relaxed text-muted-foreground md:text-lg"
        >
          Premium mobile interior detailing for San Diego&apos;s finest vehicles.
          We restore your car&apos;s interior to showroom condition — at your home or office.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.3, delay: 1.1 }}
          className="mt-12 flex flex-col items-center justify-center gap-4 sm:flex-row"
        >
          <a
            href="#book"
            className="w-full bg-primary px-10 py-4 text-sm font-medium uppercase tracking-widest text-primary-foreground transition-opacity hover:opacity-90 sm:w-auto"
          >
            Book Your Detail
          </a>
          <a
            href="#results"
            className="w-full border border-border px-10 py-4 text-sm font-light uppercase tracking-widest text-foreground transition-colors hover:border-muted-foreground sm:w-auto"
          >
            View Results
          </a>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.3, delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
          className="h-10 w-6 rounded-full border border-muted-foreground/30 p-1"
        >
          <div className="mx-auto h-2 w-1 rounded-full bg-muted-foreground/50" />
        </motion.div>
      </motion.div>
    </section>
  )
}

"use client"

import { motion } from "framer-motion"
import { MapPin } from "lucide-react"

const areas = [
  "La Jolla",
  "Del Mar",
  "Pacific Beach",
  "Rancho Santa Fe",
  "Downtown San Diego",
  "Encinitas",
  "Solana Beach",
  "Carmel Valley",
]

export function ServiceArea() {
  return (
    <section className="border-t border-border bg-secondary py-28 lg:py-36">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.3, ease: [0.22, 1, 0.36, 1] }}
          className="mb-16 text-center"
        >
          <p className="mb-4 text-xs font-light tracking-[0.4em] uppercase text-accent">
            Service Area
          </p>
          <h2 className="font-serif text-4xl font-light tracking-tight text-foreground text-balance md:text-5xl">
            Proudly Serving
          </h2>
        </motion.div>

        <div className="flex flex-wrap items-center justify-center gap-4">
          {areas.map((area, i) => (
            <motion.div
              key={area}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{
                duration: 1.3,
                delay: i * 0.06,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="flex items-center gap-2 border border-border px-6 py-3 transition-colors duration-300 hover:border-accent"
            >
              <MapPin className="h-3.5 w-3.5 text-accent" />
              <span className="text-sm font-light tracking-wider text-foreground">
                {area}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

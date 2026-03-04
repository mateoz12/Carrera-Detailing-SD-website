"use client"

import { motion } from "framer-motion"
import { MapPin } from "lucide-react"
import dynamic from "next/dynamic"

const MapBackground = dynamic(
  () => import("./map-background").then((m) => ({ default: m.MapBackground })),
  { ssr: false }
)

const areas = [
  "La Jolla",
  "Del Mar",
  "Pacific Beach",
  "Rancho Santa Fe",
  "Downtown San Diego",
]

export function ServiceArea() {
  return (
    <section className="relative overflow-hidden border-y border-border py-24 lg:py-32 min-h-[350px]">
      {/* Dark map background */}
      <MapBackground />

      {/* Darkening overlay so text pops */}
      <div className="absolute inset-0 z-10 bg-background/78" />

      <div className="relative z-20 mx-auto max-w-6xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.3 }}
          className="text-center"
        >
          <p className="mb-4 text-xs font-light uppercase tracking-[0.3em] text-gold">
            Coverage
          </p>
          <h2 className="mb-12 font-serif text-3xl font-light text-foreground uppercase tracking-widest md:text-4xl lg:text-5xl">
            <span className="text-balance">Proudly Serving</span>
          </h2>
          <div className="flex flex-wrap items-center justify-center gap-6 md:gap-10">
            {areas.map((area, i) => (
              <motion.div
                key={area}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1.3, delay: i * 0.1 }}
                className="flex items-center gap-2"
              >
                <MapPin className="h-4 w-4 text-gold" />
                <span className="text-sm font-light uppercase tracking-widest text-foreground">
                  {area}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

"use client"

import { motion } from "framer-motion"
import { MapPin } from "lucide-react"

const areas = [
  "La Jolla",
  "Del Mar",
  "Pacific Beach",
  "Rancho Santa Fe",
  "Downtown San Diego",
]

export function ServiceArea() {
  return (
    <section className="border-y border-border bg-secondary/30 py-24 lg:py-32">
      <div className="mx-auto max-w-6xl px-6">
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
          <h2 className="mb-12 font-serif text-3xl font-light text-foreground md:text-4xl lg:text-5xl">
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

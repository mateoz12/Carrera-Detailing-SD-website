"use client"

import { motion } from "framer-motion"
import { Star, Car, SprayCan, MapPin } from "lucide-react"

const trustItems = [
  { icon: Star, label: "5-Star Rated" },
  { icon: Car, label: "Fully Mobile" },
  { icon: SprayCan, label: "Premium Products" },
  { icon: MapPin, label: "La Jolla & San Diego" },
]

export function TrustBar() {
  return (
    <section className="border-y border-border bg-secondary/50 py-8">
      <div className="mx-auto max-w-6xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.3 }}
          className="flex flex-col items-center gap-8"
        >
          <p className="text-center text-sm font-light tracking-wider text-muted-foreground">
            Trusted by San Diego vehicle owners who expect excellence.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-8 md:gap-16">
            {trustItems.map((item, i) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1.3, delay: i * 0.1 }}
                className="flex items-center gap-3"
              >
                <item.icon className="h-5 w-5 text-gold" />
                <span className="text-sm font-light uppercase tracking-widest text-foreground">
                  {item.label}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

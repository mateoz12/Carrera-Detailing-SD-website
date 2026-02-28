"use client"

import { motion } from "framer-motion"
import { Star, MapPin, Shield, Car } from "lucide-react"

const trustItems = [
  {
    icon: Star,
    label: "5-Star Rated",
  },
  {
    icon: Car,
    label: "Fully Mobile",
  },
  {
    icon: Shield,
    label: "Insured & Professional",
  },
  {
    icon: MapPin,
    label: "Serving La Jolla & Greater San Diego",
  },
]

export function TrustBar() {
  return (
    <section className="border-y border-border bg-secondary py-8">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.3 }}
          className="mb-6 text-center text-xs font-light tracking-[0.3em] uppercase text-muted-foreground"
        >
          Trusted by San Diego vehicle owners who expect excellence
        </motion.p>
        <div className="flex flex-wrap items-center justify-center gap-8 lg:gap-16">
          {trustItems.map((item, i) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 1.3,
                delay: i * 0.1,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="flex items-center gap-3"
            >
              <item.icon className="h-4 w-4 text-accent" />
              <span className="text-sm font-light tracking-wider text-secondary-foreground">
                {item.label}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

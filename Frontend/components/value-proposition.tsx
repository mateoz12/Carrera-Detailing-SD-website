"use client"

import { motion } from "framer-motion"
import { Clock, Crosshair, Sparkles, Eye } from "lucide-react"

const values = [
  {
    icon: Clock,
    title: "Convenience",
    description:
      "We come to you. No waiting rooms, no wasted time.",
  },
  {
    icon: Crosshair,
    title: "Precision Cleaning",
    description:
      "Professional-grade tools and techniques designed for luxury interiors.",
  },
  {
    icon: Sparkles,
    title: "Interior Restoration",
    description:
      "Remove stains, odors, and buildup — not just surface cleaning.",
  },
  {
    icon: Eye,
    title: "Detail-Oriented Service",
    description:
      "Every surface cleaned with intention and care.",
  },
]

export function ValueProposition() {
  return (
    <section className="bg-background py-28 lg:py-36">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.3, ease: [0.22, 1, 0.36, 1] }}
          className="mb-20 text-center"
        >
          <p className="mb-4 text-xs font-light tracking-[0.4em] uppercase text-accent">
            Why Choose Us
          </p>
          <h2 className="font-serif text-4xl font-light tracking-tight text-foreground text-balance md:text-5xl">
            A Different Standard of Care
          </h2>
        </motion.div>

        <div className="grid gap-px bg-border md:grid-cols-2 lg:grid-cols-4">
          {values.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 1.3,
                delay: i * 0.1,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="group bg-background p-10 transition-colors duration-500 hover:bg-secondary"
            >
              <div className="mb-6 flex h-12 w-12 items-center justify-center border border-border transition-colors duration-500 group-hover:border-accent">
                <item.icon className="h-5 w-5 text-muted-foreground transition-colors duration-500 group-hover:text-accent" />
              </div>
              <h3 className="mb-3 text-base font-medium tracking-wider uppercase text-foreground">
                {item.title}
              </h3>
              <p className="text-sm font-light leading-relaxed text-muted-foreground">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

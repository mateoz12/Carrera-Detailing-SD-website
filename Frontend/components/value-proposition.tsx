"use client"

import { motion } from "framer-motion"
import { Clock, Crosshair, Sparkles, Eye } from "lucide-react"

const values = [
  {
    icon: Clock,
    title: "Convenience",
    description: "We come to you. No waiting rooms, no wasted time.",
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
    description: "Every surface cleaned with intention and care.",
  },
]

export function ValueProposition() {
  return (
    <section className="py-24 lg:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.3 }}
          className="mb-16 text-center"
        >
          <p className="mb-4 text-xs font-light uppercase tracking-[0.3em] text-gold">
            Why Carrera
          </p>
          <h2 className="font-serif text-[1.7rem] font-light text-foreground uppercase tracking-widest md:text-[2rem] lg:text-[2.7rem]">
            <span className="text-balance">A Different Standard of Clean</span>
          </h2>
        </motion.div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {values.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1.3, delay: i * 0.15 }}
              className="group flex flex-col items-center text-center"
            >
              <div className="mb-6 flex h-14 w-14 items-center justify-center border border-border transition-colors group-hover:border-gold">
                <item.icon className="h-6 w-6 text-gold" />
              </div>
              <h3 className="mb-3 text-sm font-medium uppercase tracking-widest text-foreground">
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

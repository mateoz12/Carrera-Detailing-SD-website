"use client"

import { motion } from "framer-motion"
import { Check } from "lucide-react"

const features = [
  "Deep vacuum of all surfaces",
  "Carpet & seat extraction",
  "Surface restoration & conditioning",
  "Complete interior wipe-down",
  "Odor neutralization",
]

export function Services() {
  return (
    <section id="services" className="bg-background py-28 lg:py-36">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.3, ease: [0.22, 1, 0.36, 1] }}
          >
            <p className="mb-4 text-xs font-light tracking-[0.4em] uppercase text-accent">
              Signature Service
            </p>
            <h2 className="mb-6 font-serif text-4xl font-light tracking-tight text-foreground text-balance md:text-5xl">
              Interior Detail
            </h2>
            <p className="mb-10 text-lg font-light leading-relaxed text-muted-foreground">
              Our comprehensive interior detailing service goes beyond surface cleaning.
              Every component of your vehicle&#39;s cabin is meticulously restored using
              professional-grade products safe for all luxury materials.
            </p>

            <ul className="mb-10 space-y-4">
              {features.map((feature, i) => (
                <motion.li
                  key={feature}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 1.3,
                    delay: i * 0.08,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="flex items-center gap-4"
                >
                  <div className="flex h-6 w-6 items-center justify-center border border-accent">
                    <Check className="h-3.5 w-3.5 text-accent" />
                  </div>
                  <span className="text-sm font-light tracking-wide text-foreground">
                    {feature}
                  </span>
                </motion.li>
              ))}
            </ul>

            <div className="mb-8 border-t border-border pt-8">
              <p className="mb-1 text-xs font-light tracking-[0.3em] uppercase text-muted-foreground">
                Premium Add-On
              </p>
              <p className="text-sm font-light tracking-wide text-foreground">
                Protective Ceramic Coating Finish
              </p>
            </div>

            <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
              <p className="font-serif text-3xl font-light text-foreground">
                {"Starting at $90"}
              </p>
              <a
                href="#book"
                className="border border-foreground bg-foreground px-8 py-3 text-center text-xs font-medium tracking-[0.2em] uppercase text-primary-foreground transition-all duration-300 hover:bg-transparent hover:text-foreground"
              >
                Request Quote
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.3, ease: [0.22, 1, 0.36, 1] }}
            className="relative"
          >
            <div className="aspect-[3/4] overflow-hidden">
              <img
                src="/images/hero-car.jpg"
                alt="Premium interior detailing in progress"
                className="h-full w-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 border border-border bg-background p-6">
              <p className="text-3xl font-light text-foreground">100+</p>
              <p className="text-xs font-light tracking-[0.2em] uppercase text-muted-foreground">
                Vehicles Detailed
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

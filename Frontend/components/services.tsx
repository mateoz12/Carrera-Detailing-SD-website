"use client"

import { motion } from "framer-motion"
import { Check } from "lucide-react"

const services = [
  "Deep vacuum",
  "Carpet & seat extraction",
  "Surface restoration",
  "Interior wipe-down & conditioning",
  "Odor neutralization",
]

const addon = "Protective Ceramic Coating Finish"

export function Services() {
  return (
    <section id="services" className="py-24 lg:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.3 }}
          className="mb-16 text-center"
        >
          <p className="mb-4 text-xs font-light uppercase tracking-[0.3em] text-gold">
            What We Offer
          </p>
          <h2 className="font-serif text-3xl font-light text-foreground uppercase tracking-widest md:text-4xl lg:text-5xl">
            <span className="text-balance">Interior Detail — Signature Service</span>
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.3, delay: 0.2 }}
          className="mx-auto max-w-xl"
        >
          <div className="border border-border bg-card p-8 md:p-12">
            <div className="mb-8 flex flex-col gap-5">
              {services.map((service, i) => (
                <motion.div
                  key={service}
                  initial={{ opacity: 0, x: -15 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.3, delay: 0.3 + i * 0.1 }}
                  className="flex items-center gap-4"
                >
                  <Check className="h-4 w-4 shrink-0 text-gold" />
                  <span className="text-sm font-light text-foreground">{service}</span>
                </motion.div>
              ))}
            </div>

            <div className="mb-8 border-t border-border pt-6">
              <div className="flex items-center gap-4">
                <Check className="h-4 w-4 shrink-0 text-gold" />
                <span className="text-sm font-light text-muted-foreground">
                  {addon}{" "}
                  <span className="text-xs uppercase tracking-wider text-gold">
                    Premium Add-On
                  </span>
                </span>
              </div>
            </div>

            <div className="mb-8 text-center">
              <p className="text-xs font-light uppercase tracking-wider text-muted-foreground">
                Starting at
              </p>
              <p className="mt-2 font-serif text-4xl font-light text-foreground">
                $90
              </p>
            </div>

            <a
              href="#book"
              className="block w-full bg-primary py-4 text-center text-sm font-medium uppercase tracking-widest text-primary-foreground transition-opacity hover:opacity-90"
            >
              Request Quote
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

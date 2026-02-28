"use client"

import { motion } from "framer-motion"

const steps = [
  {
    number: "01",
    title: "Request a Quote",
    description: "Submit your vehicle details online. We respond promptly with a tailored quote.",
  },
  {
    number: "02",
    title: "Schedule",
    description: "We coordinate a convenient time and location that fits your schedule.",
  },
  {
    number: "03",
    title: "We Detail On-Site",
    description: "Professional mobile service performed at your home or office.",
  },
  {
    number: "04",
    title: "Enjoy a Like-New Interior",
    description: "Drive away refreshed — your cabin restored to showroom condition.",
  },
]

export function Process() {
  return (
    <section id="process" className="bg-secondary py-28 lg:py-36">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.3, ease: [0.22, 1, 0.36, 1] }}
          className="mb-20 text-center"
        >
          <p className="mb-4 text-xs font-light tracking-[0.4em] uppercase text-accent">
            How It Works
          </p>
          <h2 className="font-serif text-4xl font-light tracking-tight text-foreground text-balance md:text-5xl">
            Effortless From Start to Finish
          </h2>
        </motion.div>

        <div className="grid gap-px bg-border md:grid-cols-4">
          {steps.map((step, i) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 1.3,
                delay: i * 0.12,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="relative bg-secondary p-10"
            >
              <span className="mb-6 block font-serif text-4xl font-light text-accent/40">
                {step.number}
              </span>
              <h3 className="mb-3 text-base font-medium tracking-wider uppercase text-foreground">
                {step.title}
              </h3>
              <p className="text-sm font-light leading-relaxed text-muted-foreground">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

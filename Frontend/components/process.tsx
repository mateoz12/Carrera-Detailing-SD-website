"use client"

import { motion } from "framer-motion"

const steps = [
  {
    number: "01",
    title: "Request a Quote",
    description: "Submit vehicle details online.",
  },
  {
    number: "02",
    title: "Schedule",
    description: "We coordinate a convenient time and location.",
  },
  {
    number: "03",
    title: "We Detail On-Site",
    description: "Professional mobile service at your home or office.",
  },
  {
    number: "04",
    title: "Enjoy a Like-New Interior",
    description: "Drive away refreshed.",
  },
]

export function Process() {
  return (
    <section id="process" className="bg-secondary/30 py-24 lg:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.3 }}
          className="mb-16 text-center"
        >
          <p className="mb-4 text-xs font-light uppercase tracking-[0.3em] text-gold">
            How It Works
          </p>
          <h2 className="font-serif text-3xl font-light text-foreground md:text-4xl lg:text-5xl">
            <span className="text-balance">Effortless From Start to Finish</span>
          </h2>
        </motion.div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, i) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1.3, delay: i * 0.15 }}
              className="relative flex flex-col items-center text-center"
            >
              <span className="mb-4 font-serif text-5xl font-light text-gold/20">
                {step.number}
              </span>
              <h3 className="mb-3 text-sm font-medium uppercase tracking-widest text-foreground">
                {step.title}
              </h3>
              <p className="text-sm font-light leading-relaxed text-muted-foreground">
                {step.description}
              </p>
              {i < steps.length - 1 && (
                <div className="absolute top-8 left-full hidden h-px w-8 bg-border lg:block" style={{ transform: "translateX(-50%)" }} />
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

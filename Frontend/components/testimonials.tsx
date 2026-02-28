"use client"

import { motion } from "framer-motion"
import { Star } from "lucide-react"

const testimonials = [
  {
    quote:
      "My car honestly felt brand new again. Extremely professional and convenient.",
    author: "La Jolla Client",
    vehicle: "Porsche 911",
  },
  {
    quote:
      "I was hesitant at first, but the results were beyond anything I expected. Every detail was perfect.",
    author: "Del Mar Client",
    vehicle: "Tesla Model S",
  },
  {
    quote:
      "The convenience alone is worth it. But the quality of the detail? Unmatched.",
    author: "Rancho Santa Fe Client",
    vehicle: "Range Rover",
  },
]

export function Testimonials() {
  return (
    <section id="reviews" className="bg-background py-28 lg:py-36">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.3, ease: [0.22, 1, 0.36, 1] }}
          className="mb-20 text-center"
        >
          <p className="mb-4 text-xs font-light tracking-[0.4em] uppercase text-accent">
            Testimonials
          </p>
          <h2 className="font-serif text-4xl font-light tracking-tight text-foreground text-balance md:text-5xl">
            What Our Clients Say
          </h2>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-3">
          {testimonials.map((item, i) => (
            <motion.div
              key={item.author}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 1.3,
                delay: i * 0.12,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="border border-border bg-card p-10"
            >
              <div className="mb-6 flex gap-1">
                {Array.from({ length: 5 }).map((_, j) => (
                  <Star
                    key={j}
                    className="h-4 w-4 fill-accent text-accent"
                  />
                ))}
              </div>
              <blockquote className="mb-8 font-serif text-xl font-light leading-relaxed text-card-foreground">
                {`"${item.quote}"`}
              </blockquote>
              <div>
                <p className="text-sm font-medium tracking-wider uppercase text-foreground">
                  {"— "}
                  {item.author}
                </p>
                <p className="mt-1 text-xs font-light tracking-widest uppercase text-muted-foreground">
                  {item.vehicle}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

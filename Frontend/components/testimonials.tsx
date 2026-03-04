"use client"

import { motion } from "framer-motion"
import { Star } from "lucide-react"

const testimonials = [
  {
    quote:
      "My car honestly felt brand new again. Extremely professional and convenient.",
    author: "La Jolla Client",
    vehicle: "Porsche Cayenne",
  },
  {
    quote:
      "The level of detail is unmatched. They came to my office and my Tesla looked showroom-ready when I left work.",
    author: "Del Mar Client",
    vehicle: "Tesla Model S",
  },
  {
    quote:
      "I was skeptical about mobile detailing, but Carrera exceeded every expectation. My Range Rover interior has never looked this good.",
    author: "Rancho Santa Fe Client",
    vehicle: "Range Rover Sport",
  },
]

export function Testimonials() {
  return (
    <section id="testimonials" className="py-24 lg:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.3 }}
          className="mb-16 text-center"
        >
          <p className="mb-4 text-xs font-light uppercase tracking-[0.3em] text-gold">
            Client Experiences
          </p>
          <h2 className="font-serif text-3xl font-light text-foreground uppercase tracking-widest md:text-4xl lg:text-5xl">
            <span className="text-balance">What Our Clients Say</span>
          </h2>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-3">
          {testimonials.map((testimonial, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1.3, delay: i * 0.15 }}
              className="border border-border bg-card p-8"
            >
              <div className="mb-6 flex gap-1">
                {Array.from({ length: 5 }).map((_, starIndex) => (
                  <Star
                    key={starIndex}
                    className="h-4 w-4 fill-gold text-gold"
                  />
                ))}
              </div>
              <blockquote className="mb-6 font-serif text-lg font-light italic leading-relaxed text-foreground">
                &ldquo;{testimonial.quote}&rdquo;
              </blockquote>
              <div>
                <p className="text-sm font-light text-muted-foreground">
                  — {testimonial.author}
                </p>
                <p className="mt-1 text-xs font-light uppercase tracking-wider text-gold/60">
                  {testimonial.vehicle}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

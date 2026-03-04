"use client"

import { useState } from "react"
import { motion } from "framer-motion"

export function BookNow() {
  const [submitted, setSubmitted] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    vehicle: "",
    location: "",
    date: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <section id="book" className="py-24 lg:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.3 }}
          className="mb-16 text-center"
        >
          <p className="mb-4 text-xs font-light uppercase tracking-[0.3em] text-gold">
            Get Started
          </p>
          <h2 className="font-serif text-[1.7rem] font-light text-foreground uppercase tracking-widest md:text-[2rem] lg:text-[2.7rem]">
            <span className="text-balance">Experience Premium Mobile Detailing</span>
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-sm font-light leading-relaxed text-muted-foreground">
            Submit your details below and we will get back to you with a personalized quote.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.3, delay: 0.2 }}
          className="mx-auto max-w-xl"
        >
          {submitted ? (
            <div className="border border-border bg-card p-12 text-center">
              <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center border border-gold">
                <svg
                  className="h-8 w-8 text-gold"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={1.5}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="mb-3 font-serif text-2xl font-light text-foreground">
                Quote Requested
              </h3>
              <p className="text-sm font-light leading-relaxed text-muted-foreground">
                Thank you. We will reach out shortly with your personalized quote.
              </p>
            </div>
          ) : (
            <form
              onSubmit={handleSubmit}
              className="border border-border bg-card p-8 md:p-12"
            >
              <div className="grid gap-6 sm:grid-cols-2">
                <div className="flex flex-col gap-2">
                  <label
                    htmlFor="name"
                    className="text-xs font-light uppercase tracking-widest text-muted-foreground"
                  >
                    Name
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="border border-border bg-background px-4 py-3 text-sm font-light text-foreground placeholder:text-muted-foreground/50 focus:border-gold focus:outline-none"
                    placeholder="John Smith"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label
                    htmlFor="phone"
                    className="text-xs font-light uppercase tracking-widest text-muted-foreground"
                  >
                    Phone
                  </label>
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    className="border border-border bg-background px-4 py-3 text-sm font-light text-foreground placeholder:text-muted-foreground/50 focus:border-gold focus:outline-none"
                    placeholder="(858) 555-0123"
                  />
                </div>
                <div className="flex flex-col gap-2 sm:col-span-2">
                  <label
                    htmlFor="email"
                    className="text-xs font-light uppercase tracking-widest text-muted-foreground"
                  >
                    Email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="border border-border bg-background px-4 py-3 text-sm font-light text-foreground placeholder:text-muted-foreground/50 focus:border-gold focus:outline-none"
                    placeholder="john@example.com"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label
                    htmlFor="vehicle"
                    className="text-xs font-light uppercase tracking-widest text-muted-foreground"
                  >
                    Vehicle Make / Model
                  </label>
                  <input
                    id="vehicle"
                    name="vehicle"
                    type="text"
                    required
                    value={formData.vehicle}
                    onChange={handleChange}
                    className="border border-border bg-background px-4 py-3 text-sm font-light text-foreground placeholder:text-muted-foreground/50 focus:border-gold focus:outline-none"
                    placeholder="Porsche 911 Carrera"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label
                    htmlFor="location"
                    className="text-xs font-light uppercase tracking-widest text-muted-foreground"
                  >
                    Location
                  </label>
                  <input
                    id="location"
                    name="location"
                    type="text"
                    required
                    value={formData.location}
                    onChange={handleChange}
                    className="border border-border bg-background px-4 py-3 text-sm font-light text-foreground placeholder:text-muted-foreground/50 focus:border-gold focus:outline-none"
                    placeholder="La Jolla, CA"
                  />
                </div>
                <div className="flex flex-col gap-2 sm:col-span-2">
                  <label
                    htmlFor="date"
                    className="text-xs font-light uppercase tracking-widest text-muted-foreground"
                  >
                    Preferred Date
                  </label>
                  <input
                    id="date"
                    name="date"
                    type="date"
                    required
                    value={formData.date}
                    onChange={handleChange}
                    className="border border-border bg-background px-4 py-3 text-sm font-light text-foreground placeholder:text-muted-foreground/50 focus:border-gold focus:outline-none"
                  />
                </div>
              </div>

              <button
                type="submit"
                className="mt-8 w-full bg-primary py-4 text-sm font-medium uppercase tracking-widest text-primary-foreground transition-opacity hover:opacity-90"
              >
                Get Your Quote
              </button>
            </form>
          )}
        </motion.div>
      </div>
    </section>
  )
}

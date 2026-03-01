"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"

// Replace with your access key from https://web3forms.com
const WEB3FORMS_ACCESS_KEY = "8e066ee8-28ef-41ae-95bb-b59033b1632e"

export function BookingForm() {
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState("")

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setLoading(true)
    setError("")

    const form = e.currentTarget
    const get = (name: string) =>
      (form.elements.namedItem(name) as HTMLInputElement).value

    const data = {
      access_key: WEB3FORMS_ACCESS_KEY,
      subject: "New Booking Request - La Jolla Detail Co.",
      name: get("name"),
      phone: get("phone"),
      email: get("email"),
      vehicle: get("vehicle"),
      location: get("location"),
      date: get("date"),
    }

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      })
      const json = await res.json()
      if (json.success) {
        setSubmitted(true)
      } else {
        setError("Something went wrong. Please try again or call us directly.")
      }
    } catch {
      setError("Something went wrong. Please try again or call us directly.")
    } finally {
      setLoading(false)
    }
  }

  return (
    <section id="book" className="bg-background py-28 lg:py-36">
      <div className="mx-auto max-w-3xl px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.3, ease: [0.22, 1, 0.36, 1] }}
          className="mb-16 text-center"
        >
          <p className="mb-4 text-xs font-light tracking-[0.4em] uppercase text-accent">
            Get Started
          </p>
          <h2 className="mb-4 font-serif text-4xl font-light tracking-tight text-foreground text-balance md:text-5xl">
            Experience Premium Mobile Detailing
          </h2>
          <p className="text-lg font-light text-muted-foreground">
            Fill out the form below and we will be in touch within 24 hours.
          </p>
        </motion.div>

        {submitted ? (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="border border-accent/30 p-12 text-center"
          >
            <p className="mb-2 font-serif text-2xl font-light text-foreground">
              Thank You
            </p>
            <p className="text-sm font-light text-muted-foreground">
              We have received your request and will be in touch shortly.
            </p>
          </motion.div>
        ) : (
          <motion.form
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.3, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            onSubmit={handleSubmit}
            className="space-y-6"
          >
            <div className="grid gap-6 md:grid-cols-2">
              <div>
                <label
                  htmlFor="name"
                  className="mb-2 block text-xs font-light tracking-[0.2em] uppercase text-muted-foreground"
                >
                  Name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  className="w-full border border-border bg-transparent px-4 py-3 text-sm font-light text-foreground placeholder:text-muted-foreground/50 focus:border-accent focus:outline-none"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label
                  htmlFor="phone"
                  className="mb-2 block text-xs font-light tracking-[0.2em] uppercase text-muted-foreground"
                >
                  Phone
                </label>
                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  required
                  className="w-full border border-border bg-transparent px-4 py-3 text-sm font-light text-foreground placeholder:text-muted-foreground/50 focus:border-accent focus:outline-none"
                  placeholder="(555) 000-0000"
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="email"
                className="mb-2 block text-xs font-light tracking-[0.2em] uppercase text-muted-foreground"
              >
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                className="w-full border border-border bg-transparent px-4 py-3 text-sm font-light text-foreground placeholder:text-muted-foreground/50 focus:border-accent focus:outline-none"
                placeholder="your@email.com"
              />
            </div>

            <div className="grid gap-6 md:grid-cols-2">
              <div>
                <label
                  htmlFor="vehicle"
                  className="mb-2 block text-xs font-light tracking-[0.2em] uppercase text-muted-foreground"
                >
                  Vehicle Make / Model
                </label>
                <input
                  id="vehicle"
                  name="vehicle"
                  type="text"
                  required
                  className="w-full border border-border bg-transparent px-4 py-3 text-sm font-light text-foreground placeholder:text-muted-foreground/50 focus:border-accent focus:outline-none"
                  placeholder="e.g. Porsche 911"
                />
              </div>
              <div>
                <label
                  htmlFor="location"
                  className="mb-2 block text-xs font-light tracking-[0.2em] uppercase text-muted-foreground"
                >
                  Location
                </label>
                <input
                  id="location"
                  name="location"
                  type="text"
                  required
                  className="w-full border border-border bg-transparent px-4 py-3 text-sm font-light text-foreground placeholder:text-muted-foreground/50 focus:border-accent focus:outline-none"
                  placeholder="e.g. La Jolla"
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="date"
                className="mb-2 block text-xs font-light tracking-[0.2em] uppercase text-muted-foreground"
              >
                Preferred Date
              </label>
              <input
                id="date"
                name="date"
                type="date"
                className="w-full border border-border bg-transparent px-4 py-3 text-sm font-light text-foreground placeholder:text-muted-foreground/50 focus:border-accent focus:outline-none"
              />
            </div>

            {error && (
              <p className="text-sm font-light text-red-500">{error}</p>
            )}

            <button
              type="submit"
              disabled={loading}
              className="group flex w-full items-center justify-center gap-3 border border-foreground bg-foreground px-8 py-4 text-sm font-medium tracking-[0.2em] uppercase text-primary-foreground transition-all duration-300 hover:bg-transparent hover:text-foreground disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {loading ? "Sending..." : "Get Your Quote"}
              {!loading && (
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              )}
            </button>
          </motion.form>
        )}
      </div>
    </section>
  )
}

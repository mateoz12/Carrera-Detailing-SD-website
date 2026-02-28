"use client"

import { Instagram, Phone, Mail } from "lucide-react"

const areas = [
  "La Jolla",
  "Del Mar",
  "Pacific Beach",
  "Rancho Santa Fe",
  "Downtown San Diego",
]

export function Footer() {
  return (
    <footer className="border-t border-border bg-background py-16">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid gap-12 md:grid-cols-3">
          {/* Brand */}
          <div>
            <p className="mb-4 text-base font-light tracking-[0.25em] uppercase text-foreground">
              La Jolla Detail Co.
            </p>
            <p className="text-sm font-light leading-relaxed text-muted-foreground">
              Premium concierge mobile interior detailing for luxury vehicles
              in La Jolla and coastal San Diego.
            </p>
          </div>

          {/* Contact */}
          <div>
            <p className="mb-4 text-xs font-medium tracking-[0.2em] uppercase text-foreground">
              Contact
            </p>
            <div className="space-y-3">
              <a
                href="tel:+1234567890"
                className="flex items-center gap-3 text-sm font-light text-muted-foreground transition-colors hover:text-foreground"
              >
                <Phone className="h-4 w-4" />
                (858) 000-0000
              </a>
              <a
                href="mailto:info@lajolladetailco.com"
                className="flex items-center gap-3 text-sm font-light text-muted-foreground transition-colors hover:text-foreground"
              >
                <Mail className="h-4 w-4" />
                info@lajolladetailco.com
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-sm font-light text-muted-foreground transition-colors hover:text-foreground"
              >
                <Instagram className="h-4 w-4" />
                @lajolladetailco
              </a>
            </div>
          </div>

          {/* Service Areas */}
          <div>
            <p className="mb-4 text-xs font-medium tracking-[0.2em] uppercase text-foreground">
              Service Areas
            </p>
            <ul className="space-y-2">
              {areas.map((area) => (
                <li
                  key={area}
                  className="text-sm font-light text-muted-foreground"
                >
                  {area}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-16 border-t border-border pt-8">
          <p className="text-center text-xs font-light tracking-[0.15em] text-muted-foreground">
            {"La Jolla Detail Co. — Precision in Every Detail."}
          </p>
        </div>
      </div>
    </footer>
  )
}

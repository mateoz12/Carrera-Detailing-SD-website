"use client"

import { Instagram, Phone, Mail } from "lucide-react"

const serviceAreas = ["La Jolla", "Del Mar", "Pacific Beach", "Rancho Santa Fe", "Downtown San Diego"]

export function Footer() {
  return (
    <footer className="border-t border-border bg-background py-16">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid gap-12 md:grid-cols-3">
          {/* Brand */}
          <div>
            <div className="mb-4">
              <span className="font-serif text-xl tracking-wide text-foreground">
                CARRERA
              </span>
              <span className="ml-2 text-xs font-light uppercase tracking-[0.3em] text-muted-foreground">
                Detailing Co.
              </span>
            </div>
            <p className="text-sm font-light leading-relaxed text-muted-foreground">
              Premium mobile interior detailing for San Diego&apos;s finest vehicles.
            </p>
          </div>

          {/* Contact */}
          <div>
            <h4 className="mb-4 text-xs font-medium uppercase tracking-widest text-foreground">
              Contact
            </h4>
            <div className="flex flex-col gap-3">
              <a
                href="tel:+18585550123"
                className="flex items-center gap-3 text-sm font-light text-muted-foreground transition-colors hover:text-foreground"
              >
                <Phone className="h-4 w-4 text-gold" />
                (858) 555-0123
              </a>
              <a
                href="mailto:info@carreradetailing.com"
                className="flex items-center gap-3 text-sm font-light text-muted-foreground transition-colors hover:text-foreground"
              >
                <Mail className="h-4 w-4 text-gold" />
                info@carreradetailing.com
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-sm font-light text-muted-foreground transition-colors hover:text-foreground"
              >
                <Instagram className="h-4 w-4 text-gold" />
                @carreradetailing
              </a>
            </div>
          </div>

          {/* Service Areas */}
          <div>
            <h4 className="mb-4 text-xs font-medium uppercase tracking-widest text-foreground">
              Service Areas
            </h4>
            <div className="flex flex-col gap-2">
              {serviceAreas.map((area) => (
                <span key={area} className="text-sm font-light text-muted-foreground">
                  {area}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-border pt-8 text-center">
          <p className="text-xs font-light tracking-wider text-muted-foreground">
            &copy; {new Date().getFullYear()} Carrera Detailing Co. — Precision in Every Detail.
          </p>
        </div>
      </div>
    </footer>
  )
}

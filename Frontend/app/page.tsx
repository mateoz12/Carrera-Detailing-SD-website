import { Navigation } from "@/components/navigation"
import { Hero } from "@/components/hero"
import { TrustBar } from "@/components/trust-bar"
import { ValueProposition } from "@/components/value-proposition"
import { BeforeAfter } from "@/components/before-after"
import { Services } from "@/components/services"
import { Process } from "@/components/process"
import { Testimonials } from "@/components/testimonials"
import { ServiceArea } from "@/components/service-area"
import { BookingForm } from "@/components/booking-form"
import { Footer } from "@/components/footer"
import { StickyBookButton } from "@/components/sticky-book-button"

export default function Home() {
  return (
    <main>
      <Navigation />
      <Hero />
      <TrustBar />
      <ValueProposition />
      <BeforeAfter />
      <Services />
      <Process />
      <Testimonials />
      <ServiceArea />
      <BookingForm />
      <Footer />
      <StickyBookButton />
    </main>
  )
}

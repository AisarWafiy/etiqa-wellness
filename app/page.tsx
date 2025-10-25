import { Hero } from "@/components/hero"
import { Features } from "@/components/features"
import { Services } from "@/components/services"
import { Testimonials } from "@/components/testimonials"
import { CTA } from "@/components/cta"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export default function WellnessLanding() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <Features />
        <Services />
        <Testimonials />
        <CTA />
      </main>
      <Footer />
    </div>
  )
}

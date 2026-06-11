import { SiteHeader } from "@/components/site-header"
import { Hero } from "@/components/hero"
import { About } from "@/components/about"
import { Services } from "@/components/services"
import { Stats } from "@/components/stats"
import { Certificates } from "@/components/certificates"
import { CtaSection } from "@/components/cta-section"
import { SiteFooter } from "@/components/site-footer"

export default function Page() {
  return (
    <main className="relative">
      <SiteHeader />
      <Hero />
      <About />
      <Services />
      <Stats />
      <Certificates />
      <CtaSection />
      <SiteFooter />
    </main>
  )
}

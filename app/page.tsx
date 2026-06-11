import { SiteHeader } from "@/components/site-header"
import { Hero } from "@/components/hero"
import { Services } from "@/components/services"
import { Stats } from "@/components/stats"
import { CtaSection } from "@/components/cta-section"
import { SiteFooter } from "@/components/site-footer"

export default function Page() {
  return (
    <main className="relative">
      <SiteHeader />
      <Hero />
      <Services />
      <Stats />
      <CtaSection />
      <SiteFooter />
    </main>
  )
}

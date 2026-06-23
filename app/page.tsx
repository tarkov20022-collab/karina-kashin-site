import { Hero } from '@/components/landing/hero'
import { RecognizeSection } from '@/components/landing/recognize-section'
import { AboutBars } from '@/components/landing/about-bars'
import { ChangesSection } from '@/components/landing/changes-section'
import { JourneySection } from '@/components/landing/journey-section'
import { MissionBanner } from '@/components/landing/mission-banner'
import { TrainingSection } from '@/components/landing/training-section'
import { AudienceSection } from '@/components/landing/audience-section'
import { ContactFooter } from '@/components/landing/contact-footer'

export default function Page() {
  return (
    <main className="bg-background">
      <Hero />
      <RecognizeSection />
      <AboutBars />
      <ChangesSection />
      <JourneySection />
      <MissionBanner />
      <TrainingSection />
      <AudienceSection />
      <ContactFooter />
    </main>
  )
}

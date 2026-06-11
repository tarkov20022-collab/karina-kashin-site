import Link from "next/link"
import Image from "next/image"
import { ArrowUpRight, Clock, Shield, ShieldCheck, Target, User, Phone } from "lucide-react"
import { company, hero, features, nav } from "@/lib/content"

const featureIcons = {
  shield: Shield,
  clock: Clock,
  user: User,
  target: Target,
} as const

export function HeroSection() {
  return (
    <section
      id="hero"
      className="relative flex min-h-[calc(100svh-60px)] flex-col overflow-hidden bg-[#1a1206]"
    >
      {/* ── Background ── */}
      {/* Solid dark base */}
      <div className="absolute inset-0 z-0 bg-[#1a1206]" />
      {/* Photo on the right — responsive width */}
      <div className="absolute inset-y-0 right-0 z-0 w-full lg:w-[37%]">
        <img
          src="/images/owner.jpg"
          alt="Специалист PLN Company"
          className="h-full w-full object-cover object-[20%_22%]"
        />
        {/* Warm dark tint */}
        <div className="absolute inset-0" style={{ background: "rgba(28,18,6,0.015) lg:rgba(28,18,6,0.015)" }} />
        {/* Fade left edge into solid dark — visible on all devices for text readability */}
        <div
          className="absolute inset-0"
          style={{ background: "linear-gradient(to right, #1a1206 0%, rgba(26,18,6,0.07) 28%, rgba(26,18,6,0.02) 39%)" }}
        />
        {/* Mobile overlay — stronger on mobile for text readability */}
        <div
          className="absolute inset-0 lg:hidden"
          style={{ background: "linear-gradient(to right, #1a1206 0%, rgba(26,18,6,0.52) 50%, rgba(26,18,6,0.25) 100%)" }}
        />
        {/* Bottom fade overlay — only bottom 35% of image */}
        <div
          className="absolute bottom-0 left-0 right-0 h-[35%]"
          style={{ background: "linear-gradient(to bottom, transparent 0%, rgba(26,18,6,0.09) 100%)" }}
        />
      </div>

      {/* ── Header / Navbar ── */}
      <header className="relative z-10 w-full">
        {/* Mobile */}
        <div className="flex flex-col items-center gap-4 px-6 py-5 lg:hidden">
          <Link href="#hero" aria-label={company.name}>
            <Image
              src="/images/pln-logo.png"
              alt={company.name}
              width={220}
              height={44}
              priority
              className="h-auto w-[180px]"
            />
          </Link>
          <Link
            href={company.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 rounded-full bg-gold px-5 py-2.5 text-sm font-semibold text-gold-foreground"
          >
            <Phone className="size-4" />
            Связаться с нами
          </Link>
        </div>

        {/* Desktop */}
        <div className="mx-auto hidden max-w-[1440px] items-center justify-between px-10 pt-3 pb-1 lg:flex">
          {/* Logo */}
          <Link href="#hero" aria-label={company.name} className="shrink-0">
            <Image
              src="/images/pln-logo.png"
              alt={company.name}
              width={550}
              height={110}
              priority
              className="h-auto w-[280px]"
            />
          </Link>

          {/* Nav */}
          <nav className="flex items-center gap-7">
            {nav.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="text-sm font-medium text-white/85 transition-colors hover:text-gold"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* CTA */}
          <Link
            href={company.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 rounded-full bg-gold px-5 py-2.5 text-sm font-semibold text-gold-foreground transition-opacity hover:opacity-90"
          >
            <Phone className="size-4" />
            Связаться с нами
          </Link>
        </div>
      </header>

      {/* ── Hero content ── */}
      <div className="relative z-10 flex flex-1 flex-col justify-center">
        {/* Main text block */}
        <div className="mx-auto w-full max-w-[1440px] px-6 lg:px-10">
          <div className="max-w-[560px]">
            {/* Headline */}
            <h1 className="font-serif text-[clamp(3rem,6vw,5rem)] font-bold leading-[1.05] tracking-tight text-white">
              {hero.titleLines.map((line, i) => (
                <span
                  key={line}
                  className={`block ${i === hero.highlightLine ? "text-gold" : ""}`}
                >
                  {line}
                </span>
              ))}
            </h1>

            {/* Description */}
            <p className="mt-6 max-w-[440px] text-[15px] leading-relaxed text-white/70">
              {hero.description}
            </p>

            {/* Buttons */}
            <div className="mt-8 flex flex-wrap items-center gap-4">
              {/* Primary */}
              <Link
                href={company.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 rounded-full bg-gold px-6 py-3 text-sm font-semibold text-gold-foreground transition-opacity hover:opacity-90"
              >
                {hero.primaryCta}
                <ArrowUpRight className="size-4" />
              </Link>

              {/* Secondary */}
              <Link
                href="#services"
                className="flex items-center gap-2 rounded-full border border-white/30 px-6 py-3 text-sm font-semibold text-white transition-colors hover:border-white/60 hover:text-white"
              >
                {hero.secondaryCta}
                <ArrowUpRight className="size-4" />
              </Link>
            </div>

            {/* Contract pill */}
            <div className="mt-5 inline-flex items-center gap-2 rounded-full border border-gold/35 px-4 py-2 text-xs font-medium text-gold/90">
              <ShieldCheck className="size-3.5 shrink-0" />
              {hero.contractNote}
            </div>
          </div>
        </div>

        {/* ── Four feature blocks — bottom strip ── */}
        <div className="mx-auto w-full max-w-[1440px] px-6 pb-8 pt-4 lg:px-10 lg:pb-10">
          <div className="border-t border-white/15 pt-5">
            <div className="grid grid-cols-2 gap-x-8 gap-y-6 lg:grid-cols-4">
              {features.map((f) => {
                const Icon = featureIcons[f.icon as keyof typeof featureIcons]
                return (
                  <div key={f.title} className="flex items-start gap-3">
                    <span className="mt-0.5 flex size-9 shrink-0 items-center justify-center rounded-full border border-gold/45 text-gold">
                      <Icon className="size-[18px]" />
                    </span>
                    <div>
                      <p className="text-sm font-semibold text-white">{f.title}</p>
                      <p className="mt-0.5 text-xs leading-relaxed text-white/55">{f.text}</p>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

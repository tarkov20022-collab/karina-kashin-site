import Link from "next/link"
import { ArrowUpRight, Clock, Shield, ShieldCheck, Target, User } from "lucide-react"
import { buttonVariants } from "@/components/ui/button"
import { hero, features } from "@/lib/content"

const featureIcons = {
  shield: Shield,
  clock: Clock,
  user: User,
  target: Target,
} as const

export function Hero() {
  return (
    <section
      id="hero"
      className="relative isolate overflow-hidden bg-ink text-ink-foreground"
    >
      {/* Тёмный фон */}
      <div className="absolute inset-0 -z-20 bg-ink" />

      {/* Фоновое изображение — занимает только правую часть, как на макете */}
      <div className="absolute inset-y-0 right-0 -z-10 w-full lg:w-[49%]">
        <img
          src="/images/owner.jpg"
          alt="Специалист PLN Company за рабочим столом"
          className="h-full w-full object-cover object-[center_18%]"
        />
        {/* Горизонтальный градиент: левый край фото растворяется в тёмном фоне */}
        <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/55 to-transparent" />
        {/* Лёгкое затемнение всего фото для читаемости */}
        <div className="absolute inset-0 bg-ink/15" />
      </div>

      <div className="mx-auto max-w-7xl px-6 pb-12 pt-16 lg:px-8 lg:pb-20 lg:pt-40">
        <div className="max-w-2xl">
          <h1 className="text-balance font-serif text-5xl font-bold leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl">
            {hero.titleLines.map((line, i) => (
              <span
                key={line}
                className={`block ${i === hero.highlightLine ? "text-gold" : ""}`}
              >
                {line}
              </span>
            ))}
          </h1>

          <p className="mt-8 max-w-xl text-pretty text-base leading-relaxed text-ink-foreground/75">
            {hero.description}
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-x-8 gap-y-4">
            <Link
              href="#contacts"
              className={buttonVariants({
                size: "lg",
                className: "rounded-full bg-gold px-7 text-gold-foreground hover:bg-gold/90",
              })}
            >
              {hero.primaryCta}
              <ArrowUpRight className="size-4" />
            </Link>
            <Link
              href="#services"
              className="group flex items-center gap-2 text-sm font-medium text-ink-foreground transition-colors hover:text-gold"
            >
              {hero.secondaryCta}
              <span className="flex h-8 w-12 items-center justify-center rounded-full border border-ink-foreground/20 transition-colors group-hover:border-gold">
                <ArrowUpRight className="size-4" />
              </span>
            </Link>
          </div>

          <p className="mt-6 inline-flex items-center gap-2 rounded-full border border-gold/30 px-4 py-1.5 text-xs font-medium text-gold">
            <ShieldCheck className="size-3.5" />
            {hero.contractNote}
          </p>
        </div>

        {/* Преимущества */}
        <div className="mt-16 grid max-w-4xl grid-cols-1 gap-6 border-t border-ink-foreground/10 pt-10 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((f) => {
            const Icon = featureIcons[f.icon as keyof typeof featureIcons]
            return (
              <div key={f.title} className="flex items-start gap-3">
                <span className="mt-0.5 flex size-9 shrink-0 items-center justify-center rounded-full border border-gold/40 text-gold">
                  <Icon className="size-4" />
                </span>
                <div>
                  <p className="text-sm font-semibold text-ink-foreground">{f.title}</p>
                  <p className="mt-0.5 text-xs leading-relaxed text-ink-foreground/60">
                    {f.text}
                  </p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

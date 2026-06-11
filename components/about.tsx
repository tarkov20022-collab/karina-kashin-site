import {
  Briefcase,
  Check,
  Clock,
  ConciergeBell,
  Factory,
  Globe,
  Handshake,
  Shield,
  ShieldCheck,
  ShoppingBag,
  Stethoscope,
  TrendingUp,
} from "lucide-react"
import { about } from "@/lib/content"

const featureIcons = {
  shield: Shield,
  clock: Clock,
  "trending-up": TrendingUp,
} as const

const forIcons = {
  stethoscope: Stethoscope,
  "shopping-bag": ShoppingBag,
  "concierge-bell": ConciergeBell,
  globe: Globe,
  factory: Factory,
  briefcase: Briefcase,
} as const

const noteIcons = {
  "shield-check": ShieldCheck,
  handshake: Handshake,
} as const

export function About() {
  return (
    <section id="about" className="bg-background py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Верхний блок: текст слева, фото справа */}
        <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <p className="text-xs font-semibold tracking-[0.25em] text-gold">
              {about.eyebrow}
            </p>
            <h2 className="mt-4 text-balance font-serif text-3xl font-bold leading-[1.15] tracking-tight text-foreground sm:text-4xl lg:text-[2.75rem]">
              {about.title}
            </h2>
            <p className="mt-5 whitespace-pre-line text-pretty leading-relaxed text-muted-foreground">
              {about.lead}
            </p>

            {/* Три преимущества */}
            <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 border-t border-border pt-10 sm:grid-cols-3">
              {about.features.map((f) => {
                const Icon = featureIcons[f.icon as keyof typeof featureIcons]
                return (
                  <div key={f.title}>
                    <span className="flex size-10 items-center justify-center rounded-full border border-gold/40 text-gold">
                      <Icon className="size-5" />
                    </span>
                    <p className="mt-4 font-serif text-base font-bold text-foreground">
                      {f.title}
                    </p>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                      {f.text}
                    </p>
                  </div>
                )
              })}
            </div>
          </div>

          {/* Фото с подписью */}
          <div className="relative overflow-hidden rounded-3xl">
            <img
              src="/images/about-desk.jpg"
              alt="Рабочее место бухгалтера PLN Company"
              className="h-full min-h-14 w-full object-cover"
            />
            <div className="absolute bottom-4 left-4 max-w-xs rounded-2xl bg-ink/95 px-5 py-3 backdrop-blur-sm">
              <p className="whitespace-pre-line font-serif text-base font-semibold leading-tight text-gold">
                {about.imageCaption}
              </p>
            </div>
          </div>
        </div>

        {/* Что берем на себя + Для кого */}
        <div className="mt-12 grid grid-cols-1 gap-8 lg:grid-cols-2">
          {/* Темная карточка */}
          <div className="rounded-3xl bg-ink p-8 text-ink-foreground lg:p-10">
            <h3 className="font-serif text-2xl font-bold">{about.doTitle}</h3>
            <span className="mt-3 block h-0.5 w-12 bg-gold" />
            <ul className="mt-7 grid grid-cols-1 gap-x-8 gap-y-4 sm:grid-cols-2">
              {about.doItems.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full bg-gold/20 text-gold">
                    <Check className="size-3" />
                  </span>
                  <span className="text-sm leading-relaxed text-ink-foreground/85">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Светлая карточка */}
          <div className="rounded-3xl border border-border bg-card p-8 lg:p-10">
            <h3 className="font-serif text-2xl font-bold text-foreground">
              {about.forTitle}
            </h3>
            <span className="mt-3 block h-0.5 w-12 bg-gold" />
            <div className="mt-7 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {about.forItems.map((item) => {
                const Icon = forIcons[item.icon as keyof typeof forIcons]
                return (
                  <div
                    key={item.label}
                    className="flex items-center gap-3 rounded-2xl border border-border bg-secondary px-4 py-4"
                  >
                    <Icon className="size-5 shrink-0 text-gold" />
                    <span className="text-sm font-medium leading-tight text-foreground/80">
                      {item.label}
                    </span>
                  </div>
                )
              })}
            </div>
          </div>
        </div>

        {/* Нижние заметки */}
        <div className="mt-10 grid grid-cols-1 gap-8 border-t border-border pt-10 md:grid-cols-2 md:gap-12 md:divide-x md:divide-gold/40">
          {about.notes.map((note) => {
            const Icon = noteIcons[note.icon as keyof typeof noteIcons]
            return (
              <div key={note.text} className="flex items-start gap-4 md:px-6 first:md:pl-0 last:md:pr-0">
                <Icon className="size-8 shrink-0 text-gold/70" />
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {note.text}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

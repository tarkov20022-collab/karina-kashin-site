import { ArrowUpRight, ArrowRight, BadgeCheck, Clock, UserRound } from 'lucide-react'
import Image from 'next/image'

const stats = [
  { icon: BadgeCheck, title: 'Сертифицированный', sub: 'фасилитатор' },
  { icon: Clock, title: 'Более 5 лет', sub: 'практики' },
  { icon: UserRound, title: 'Индивидуальная', sub: 'работа и обучение' },
]

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-secondary">
      <div className="mx-auto grid max-w-7xl grid-cols-1 lg:grid-cols-2">
        {/* Text */}
        <div className="flex flex-col justify-center px-5 pb-14 pt-32 md:px-10 md:pt-40 lg:py-44">
          <h1 className="font-serif text-[2.6rem] font-medium leading-[1.05] tracking-tight text-foreground text-balance sm:text-5xl lg:text-6xl">
            Что ещё возможно для вашей жизни, если убрать шум?
          </h1>
          <p className="mt-7 max-w-md text-base leading-relaxed text-muted-foreground">
            Сертифицированный фасилитатор Access Consciousness. Помогаю
            освободиться от тревоги, внутренних ограничений и постоянного
            напряжения, чтобы жить легче, увереннее и с бо́льшим количеством
            возможностей.
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-4">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full bg-primary px-7 py-4 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
            >
              Записаться на сессию
              <ArrowUpRight className="size-4" />
            </a>
            <a
              href="#training"
              className="group inline-flex items-center gap-2 text-sm font-medium text-foreground"
            >
              Узнать про обучение
              <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
            </a>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-6 border-t border-border/70 pt-8 sm:grid-cols-3">
            {stats.map((s) => (
              <div key={s.title} className="flex items-center gap-3">
                <span className="flex size-10 shrink-0 items-center justify-center rounded-full border border-border text-foreground/70">
                  <s.icon className="size-5" strokeWidth={1.5} />
                </span>
                <span className="text-sm leading-tight text-foreground">
                  {s.title}
                  <br />
                  <span className="text-muted-foreground">{s.sub}</span>
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Image */}
        <div className="relative min-h-[420px] lg:min-h-[760px]">
          <Image
            src="/images/hero-portrait.png"
            alt="Карина Кашина — фасилитатор Access Consciousness"
            fill
            priority
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="object-cover object-top"
          />
        </div>
      </div>
    </section>
  )
}

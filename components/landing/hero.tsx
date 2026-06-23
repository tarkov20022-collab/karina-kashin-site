'use client'

import { ArrowUpRight, ArrowRight } from 'lucide-react'
import Image from 'next/image'
import { SiteHeader } from './site-header'
import { AnimatedFadeUp } from '../animated-fade-up'

const stats = [
  { label: 'Сертифицированный', subLabel: 'фасилитатор' },
  { label: 'Более 5 лет', subLabel: 'практики' },
  { label: 'Индивидуальная', subLabel: 'работа и обучение' },
]

export function Hero() {
  return (
    <section className="relative w-full">
      {/* Full-width hero container with background image and overlay */}
      <div className="relative w-full min-h-screen">
        {/* Background image */}
        <Image
          src="/images/hero-bg-new.jpg"
          alt="Карина Кашина — фасилитатор Access Consciousness"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
          quality={100}
        />
        
        {/* Semi-transparent dark overlay */}
        <div className="absolute inset-0 bg-black/50" />

        {/* Header overlay on image */}
        <SiteHeader onHero={true} />

        {/* Main hero content */}
        <div className="relative z-20 flex h-screen flex-col justify-center px-5 md:px-10 lg:px-16">
          <div className="max-w-2xl">
            
            {/* Expert Label */}
            <AnimatedFadeUp>
              <span className="text-xs uppercase tracking-[0.2em] text-white/70 font-semibold">
                Сертифицированный фасилитатор Access Consciousness
              </span>
            </AnimatedFadeUp>

            {/* Main Headline - luxury serif, 3-4 lines */}
            <AnimatedFadeUp delay={0.1}>
              <h1 className="mt-8 font-serif text-5xl md:text-6xl font-medium leading-[1.2] tracking-tight text-white">
                Что ещё возможно для вашей жизни, если убрать шум?
              </h1>
              {/* Decorative underline */}
              <div className="mt-7 h-1 w-20 bg-accent" />
            </AnimatedFadeUp>

            {/* Supporting description */}
            <AnimatedFadeUp delay={0.2}>
              <p className="mt-8 max-w-xl text-base leading-relaxed text-white/85 font-light">
                Помогаю освободиться от тревоги, внутренних ограничений и постоянного напряжения, чтобы жить легче, увереннее и с большим количеством возможностей.
              </p>
            </AnimatedFadeUp>

            {/* CTA Buttons */}
            <AnimatedFadeUp delay={0.3} className="mt-10 flex flex-wrap items-center gap-6">
              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-foreground px-9 py-4 text-sm font-medium text-background transition-opacity hover:opacity-90"
              >
                Записаться на сессию
                <ArrowUpRight className="size-4" />
              </a>
              <a
                href="#training"
                className="group inline-flex items-center gap-2 text-sm font-medium text-white/90 transition-colors hover:text-white"
              >
                Узнать про обучение
                <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
              </a>
            </AnimatedFadeUp>
          </div>
        </div>
      </div>

      {/* Floating credentials card - overlaps hero and next section */}
      <div className="relative z-30 -mt-24 px-5 md:px-10 lg:px-16">
        <div className="mx-auto max-w-2xl">
          <AnimatedFadeUp delay={0.4}>
            <div className="rounded-3xl bg-white shadow-2xl overflow-hidden">
              <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-accent/30">
                {stats.map((stat, index) => (
                  <div
                    key={index}
                    className="px-6 md:px-8 py-6 md:py-8 text-center flex flex-col justify-center"
                  >
                    <div className="text-sm font-medium text-foreground">
                      {stat.label}
                    </div>
                    <div className="mt-1 text-xs text-muted-foreground">
                      {stat.subLabel}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </AnimatedFadeUp>
        </div>
      </div>
    </section>
  )
}

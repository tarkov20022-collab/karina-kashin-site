'use client'

import { ArrowUpRight, ArrowRight, BadgeCheck, Clock, UserRound } from 'lucide-react'
import Image from 'next/image'
import { AnimatedFadeUp, AnimatedScale, AnimatedContainer, AnimatedItem } from '../animated-fade-up'

const stats = [
  { icon: BadgeCheck, title: 'Сертифицированный', sub: 'фасилитатор' },
  { icon: Clock, title: 'Более 5 лет', sub: 'практики' },
  { icon: UserRound, title: 'Индивидуальная', sub: 'работа и обучение' },
]

export function Hero() {
  return (
    <section className="relative w-full overflow-hidden">
      {/* Full-bleed background image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero-bg-new.jpg"
          alt="Карина Кашина — фасилитатор Access Consciousness"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
          quality={100}
        />
        {/* Dark overlay on left side for content readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent" />
      </div>

      {/* Content container */}
      <div className="relative z-10 min-h-screen flex flex-col justify-center lg:grid lg:grid-cols-2">
        
        {/* Left content area */}
        <div className="flex flex-col justify-center px-5 py-16 md:px-10 lg:py-32 lg:pr-8">
          
          {/* Expert Label */}
          <AnimatedFadeUp>
            <span className="text-xs uppercase tracking-widest text-white/60 font-semibold">
              Сертифицированный фасилитатор Access Consciousness
            </span>
          </AnimatedFadeUp>

          {/* Main Headline */}
          <AnimatedFadeUp delay={0.1}>
            <h1 className="mt-6 font-serif text-4xl md:text-5xl font-medium leading-[1.15] tracking-tight text-white text-balance">
              Что ещё возможно для вашей жизни, если убрать шум?
            </h1>
            <div className="mt-6 h-1 w-16 bg-accent" />
          </AnimatedFadeUp>

          {/* Supporting Text */}
          <AnimatedFadeUp delay={0.2}>
            <p className="mt-7 max-w-lg text-base leading-relaxed text-white/80">
              Помогаю освободиться от тревоги, внутренних ограничений и
              постоянного напряжения, чтобы жить легче, увереннее и с большим
              количеством возможностей.
            </p>
          </AnimatedFadeUp>

          {/* CTAs */}
          <AnimatedFadeUp delay={0.3} className="mt-9 flex flex-col gap-4 sm:flex-row sm:items-center">
            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-accent px-8 py-4 text-sm font-medium text-background transition-opacity hover:opacity-90"
            >
              Записаться на сессию
              <ArrowUpRight className="size-4" />
            </a>
            <a
              href="#training"
              className="group inline-flex items-center justify-center sm:justify-start gap-2 text-sm font-medium text-white/90 hover:text-white"
            >
              Узнать про обучение
              <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
            </a>
          </AnimatedFadeUp>
        </div>

        {/* Right side spacer on desktop */}
        <div className="hidden lg:block" />
      </div>

      {/* Benefits cards - bottom overlay */}
      <div className="relative z-20 -mt-20 px-5 md:px-10">
        <div className="mx-auto max-w-7xl">
          <AnimatedContainer className="grid grid-cols-1 gap-6 md:grid-cols-3 md:max-w-3xl" staggerDelay={0.1}>
            {stats.map((s) => (
              <AnimatedItem key={s.title}>
                <div className="flex items-start gap-4 rounded-lg bg-white px-6 py-5 shadow-lg">
                  <span className="flex size-10 shrink-0 items-center justify-center rounded-full bg-accent/20 text-accent">
                    <s.icon className="size-5" strokeWidth={1.5} />
                  </span>
                  <div className="flex-1">
                    <span className="block text-sm font-medium text-foreground">
                      {s.title}
                    </span>
                    <span className="block text-xs text-muted-foreground mt-1">
                      {s.sub}
                    </span>
                  </div>
                </div>
              </AnimatedItem>
            ))}
          </AnimatedContainer>
        </div>
      </div>
    </section>
  )
}

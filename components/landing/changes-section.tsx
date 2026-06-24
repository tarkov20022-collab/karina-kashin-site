'use client'

import { X, Check } from 'lucide-react'
import { AnimatedFadeUp, AnimatedContainer, AnimatedItem } from '../animated-fade-up'

const leaves = ['Тревога', 'Внутренний шум', 'Усталость', 'Страхи', 'Сомнения', 'Напряжение']
const arrives = [
  'Спокойствие',
  'Ясность мышления',
  'Лёгкость',
  'Энергия',
  'Уверенность',
  'Новые идеи и возможности',
]

export function ChangesSection() {
  return (
    <section id="changes" className="relative bg-background py-16 md:py-24 lg:py-32 overflow-hidden">
      {/* Decorative leaf background - top left */}
      <div className="absolute -left-24 top-40 w-40 h-40 md:w-56 md:h-56 opacity-10 md:opacity-15 pointer-events-none">
        <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M100 20Q150 60 150 120Q150 170 100 190Q50 170 50 120Q50 60 100 20Z" stroke="currentColor" strokeWidth="1" className="text-accent" opacity="0.8"/>
          <path d="M80 40Q110 70 110 120Q110 160 80 175Q50 160 50 120Q50 70 80 40Z" stroke="currentColor" strokeWidth="1" className="text-accent" opacity="0.5"/>
          <path d="M60 60Q95 85 95 120Q95 155 60 170Q25 155 25 120Q25 85 60 60Z" stroke="currentColor" strokeWidth="1" className="text-accent" opacity="0.3"/>
        </svg>
      </div>

      {/* Decorative leaf background - bottom right */}
      <div className="absolute -right-32 -bottom-16 w-56 h-56 opacity-8 pointer-events-none">
        <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M100 20Q150 60 150 120Q150 170 100 190Q50 170 50 120Q50 60 100 20Z" stroke="currentColor" strokeWidth="1" className="text-accent" opacity="0.6"/>
          <path d="M80 40Q110 70 110 120Q110 160 80 175Q50 160 50 120Q50 70 80 40Z" stroke="currentColor" strokeWidth="1" className="text-accent" opacity="0.4"/>
        </svg>
      </div>

      <div className="mx-auto max-w-5xl px-4 md:px-10">
        {/* Eyebrow text with decorative divider */}
        <AnimatedFadeUp>
          <div className="text-center mb-2 md:mb-4">
            <span className="text-[9px] md:text-xs uppercase tracking-[0.2em] md:tracking-[0.3em] text-accent font-semibold leading-relaxed">
              Результаты, которые вы чувствуете
            </span>
            <div className="mt-3 md:mt-4 flex items-center justify-center gap-2 md:gap-3">
              <div className="h-px w-6 md:w-12 bg-accent/60" />
              <div className="w-1 h-1 md:w-1.5 md:h-1.5 rounded-full bg-accent" />
              <div className="h-px w-6 md:w-12 bg-accent/60" />
            </div>
          </div>
        </AnimatedFadeUp>

        {/* Main heading */}
        <AnimatedFadeUp delay={0.1}>
          <h2 className="mt-5 md:mt-8 font-serif text-2xl md:text-5xl lg:text-6xl font-medium leading-[1.3] md:leading-[1.2] tracking-tight text-foreground text-center text-balance">
            Какие изменения замечают мои клиенты
          </h2>
        </AnimatedFadeUp>

        {/* Supporting text */}
        <AnimatedFadeUp delay={0.2}>
          <p className="mt-5 md:mt-8 max-w-xs md:max-w-2xl mx-auto text-center text-xs md:text-base text-muted-foreground leading-relaxed tracking-wide">
            Работаем с тем, что мешает жить полной жизнью. Приходим к тому, что делает её лёгкой и наполненной.
          </p>
        </AnimatedFadeUp>

        {/* Transformation comparison */}
        <AnimatedFadeUp delay={0.3} className="mt-8 md:mt-12 lg:mt-16">
          <div className="flex flex-col lg:grid lg:grid-cols-2 gap-4 md:gap-6 lg:gap-8">
            {/* Left card - What leaves */}
            <div className="mx-auto w-full md:mx-0 bg-white rounded-[24px] shadow-lg overflow-hidden">
              <div className="px-5 md:px-7 py-4 md:py-5 border-b border-border/30">
                <h3 className="text-[10px] md:text-xs uppercase tracking-[0.18em] md:tracking-[0.2em] text-muted-foreground font-semibold">
                  Что уходит
                </h3>
              </div>
              <div className="divide-y divide-border/20">
                {leaves.map((item) => (
                  <AnimatedItem key={item}>
                    <div className="px-5 md:px-7 py-4 md:py-5 flex items-center gap-3 md:gap-4 group hover:bg-secondary/10 transition-colors min-h-[60px] md:min-h-[56px]">
                      <span className="flex size-6 md:size-7 shrink-0 items-center justify-center rounded-full border border-muted-foreground/25 text-muted-foreground group-hover:border-muted-foreground/40 transition-colors">
                        <X className="size-3.5 md:size-4" strokeWidth={2.5} />
                      </span>
                      <span className="text-xs md:text-sm text-foreground font-light tracking-tight">{item}</span>
                      <span className="ml-auto hidden lg:block text-accent opacity-0 group-hover:opacity-100 transition-opacity">
                        <svg className="w-4 h-4 md:w-5 md:h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </span>
                    </div>
                  </AnimatedItem>
                ))}
              </div>
            </div>

            {/* Transition arrow - centered below on mobile */}
            <div className="flex lg:hidden justify-center py-4 md:py-5">
              <div className="flex items-center justify-center w-11 h-11 md:w-12 md:h-12 rounded-full bg-accent/30 text-accent shadow-md hover:bg-accent/40 transition-colors">
                <svg className="w-5 h-5 md:w-6 md:h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                </svg>
              </div>
            </div>

            {/* Right card - What appears */}
            <div className="mx-auto w-full md:mx-0 bg-white rounded-[24px] shadow-lg overflow-hidden">
              <div className="px-5 md:px-7 py-4 md:py-5 border-b border-border/30">
                <h3 className="text-[10px] md:text-xs uppercase tracking-[0.18em] md:tracking-[0.2em] text-muted-foreground font-semibold">
                  Что появляется
                </h3>
              </div>
              <div className="divide-y divide-border/20">
                {arrives.map((item) => (
                  <AnimatedItem key={item}>
                    <div className="px-5 md:px-7 py-4 md:py-5 flex items-center gap-3 md:gap-4 group hover:bg-secondary/10 transition-colors min-h-[60px] md:min-h-[56px]">
                      <span className="flex size-6 md:size-7 shrink-0 items-center justify-center rounded-full border border-accent/25 bg-accent/8 text-accent group-hover:bg-accent/12 transition-colors">
                        <Check className="size-3.5 md:size-4" strokeWidth={3} />
                      </span>
                      <span className="text-xs md:text-sm text-foreground font-light tracking-tight">{item}</span>
                    </div>
                  </AnimatedItem>
                ))}
              </div>
            </div>
          </div>
        </AnimatedFadeUp>

        {/* Quote section */}
        <AnimatedFadeUp delay={0.4} className="mt-8 md:mt-12 lg:mt-20 text-center">
          <div className="flex justify-center mb-3 md:mb-4">
            <span className="text-5xl md:text-6xl text-accent/35 font-serif leading-none">"</span>
          </div>
          <p className="max-w-xs md:max-w-2xl lg:max-w-3xl mx-auto text-xs md:text-base lg:text-xl text-foreground italic font-serif leading-relaxed tracking-wide">
            Я не даю готовых решений. Я помогаю вам услышать себя и создать жизнь, в которой хочется просыпаться
          </p>
          {/* Bottom decorative divider */}
          <div className="mt-6 md:mt-8 flex items-center justify-center gap-2">
            <div className="h-px w-6 md:w-8 bg-accent/40" />
            <div className="w-1 h-1 rounded-full bg-accent/50" />
            <div className="h-px w-6 md:w-8 bg-accent/40" />
          </div>
        </AnimatedFadeUp>
      </div>
    </section>
  )
}

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
    <section id="changes" className="relative bg-background py-24 md:py-32 overflow-hidden">
      {/* Decorative leaf background element */}
      <div className="absolute -left-32 top-32 w-48 h-48 opacity-15 pointer-events-none">
        <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M100 20Q150 60 150 120Q150 170 100 190Q50 170 50 120Q50 60 100 20Z" stroke="currentColor" strokeWidth="1" className="text-accent" opacity="0.6"/>
          <path d="M80 40Q110 70 110 120Q110 160 80 175Q50 160 50 120Q50 70 80 40Z" stroke="currentColor" strokeWidth="1" className="text-accent" opacity="0.4"/>
        </svg>
      </div>

      <div className="mx-auto max-w-5xl px-5 md:px-10">
        {/* Eyebrow text with decorative divider */}
        <AnimatedFadeUp>
          <div className="text-center mb-4">
            <span className="text-xs uppercase tracking-[0.3em] text-accent font-semibold">
              Результаты, которые вы чувствуете
            </span>
            <div className="mt-4 flex items-center justify-center gap-3">
              <div className="h-px w-12 bg-accent" />
              <div className="w-1.5 h-1.5 rounded-full bg-accent" />
              <div className="h-px w-12 bg-accent" />
            </div>
          </div>
        </AnimatedFadeUp>

        {/* Main heading */}
        <AnimatedFadeUp delay={0.1}>
          <h2 className="mt-8 font-serif text-5xl md:text-6xl font-medium leading-[1.2] tracking-tight text-foreground text-center text-balance">
            Какие изменения замечают мои клиенты
          </h2>
        </AnimatedFadeUp>

        {/* Supporting text */}
        <AnimatedFadeUp delay={0.2}>
          <p className="mt-8 max-w-2xl mx-auto text-center text-base text-muted-foreground leading-relaxed">
            Работаем с тем, что мешает жить полной жизнью. Приходим к тому, что делает её лёгкой и наполненной.
          </p>
        </AnimatedFadeUp>

        {/* Transformation comparison */}
        <AnimatedFadeUp delay={0.3} className="mt-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-6">
            {/* Left card - What leaves */}
            <div className="bg-white rounded-3xl shadow-lg overflow-hidden">
              <div className="px-8 py-6 border-b border-border/50">
                <h3 className="text-xs uppercase tracking-[0.2em] text-muted-foreground font-semibold">
                  Что уходит
                </h3>
              </div>
              <div className="divide-y divide-border/40">
                {leaves.map((item, index) => (
                  <AnimatedItem key={item}>
                    <div className="px-8 py-6 flex items-center gap-4 group hover:bg-secondary/20 transition-colors">
                      <span className="flex size-7 shrink-0 items-center justify-center rounded-full border border-muted-foreground/30 text-muted-foreground group-hover:border-muted-foreground/50 transition-colors">
                        <X className="size-4 strokeWidth={2.5}" />
                      </span>
                      <span className="text-base text-foreground font-light">{item}</span>
                      <span className="ml-auto hidden lg:block text-accent opacity-0 group-hover:opacity-100 transition-opacity">
                        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </span>
                    </div>
                  </AnimatedItem>
                ))}
              </div>
            </div>

            {/* Right card - What appears */}
            <div className="bg-white rounded-3xl shadow-lg overflow-hidden">
              <div className="px-8 py-6 border-b border-border/50">
                <h3 className="text-xs uppercase tracking-[0.2em] text-muted-foreground font-semibold">
                  Что появляется
                </h3>
              </div>
              <div className="divide-y divide-border/40">
                {arrives.map((item) => (
                  <AnimatedItem key={item}>
                    <div className="px-8 py-6 flex items-center gap-4 group hover:bg-secondary/20 transition-colors">
                      <span className="flex size-7 shrink-0 items-center justify-center rounded-full border border-accent/30 bg-accent/5 text-accent group-hover:bg-accent/10 transition-colors">
                        <Check className="size-4 strokeWidth={3}" />
                      </span>
                      <span className="text-base text-foreground font-light">{item}</span>
                    </div>
                  </AnimatedItem>
                ))}
              </div>
            </div>
          </div>
        </AnimatedFadeUp>

        {/* Quote section */}
        <AnimatedFadeUp delay={0.4} className="mt-20 text-center">
          <div className="flex justify-center mb-6">
            <span className="text-5xl text-accent/40 font-serif">"</span>
          </div>
          <p className="max-w-3xl mx-auto text-xl text-foreground italic font-serif leading-relaxed">
            Я не даю готовых решений. Я помогаю вам услышать себя и создать жизнь, в которой хочется просыпаться
          </p>
        </AnimatedFadeUp>
      </div>
    </section>
  )
}

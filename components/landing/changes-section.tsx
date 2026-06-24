'use client'

import { AnimatedFadeUp, AnimatedContainer, AnimatedItem } from '../animated-fade-up'

const leaveItems = [
  { label: 'Тревога', icon: 'knot' },
  { label: 'Внутренний шум', icon: 'sound' },
  { label: 'Усталость', icon: 'bed' },
  { label: 'Страхи', icon: 'cloud' },
  { label: 'Сомнения', icon: 'question' },
  { label: 'Напряжение', icon: 'lightning' },
]

const arriveItems = [
  { label: 'Спокойствие', icon: 'lotus' },
  { label: 'Ясность мышления', icon: 'sun' },
  { label: 'Лёгкость', icon: 'feather' },
  { label: 'Энергия', icon: 'star' },
  { label: 'Уверенность', icon: 'shield' },
  { label: 'Новые идеи и возможности', icon: 'sparkle' },
]

// Icon components
const LeaveIcon = ({ type }: { type: string }) => {
  switch (type) {
    case 'knot':
      return (
        <svg className="w-5 h-5 md:w-6 md:h-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M8 8C8 4 12 2 12 2C12 2 16 4 16 8M16 16C16 20 12 22 12 22C12 22 8 20 8 16M12 8V16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          <circle cx="12" cy="12" r="1.5" fill="currentColor"/>
        </svg>
      )
    case 'sound':
      return (
        <svg className="w-5 h-5 md:w-6 md:h-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M6 8V16M10 6V18M14 8V16M18 10V14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      )
    case 'bed':
      return (
        <svg className="w-5 h-5 md:w-6 md:h-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M3 10H21V19C21 20.1046 20.1046 21 19 21H5C3.89543 21 3 20.1046 3 19V10Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M3 10V7C3 5.89543 3.89543 5 5 5H19C20.1046 5 21 5.89543 21 7V10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M12 10V19" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
        </svg>
      )
    case 'cloud':
      return (
        <svg className="w-5 h-5 md:w-6 md:h-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M6 14C4 14 2 15.5 2 17.5C2 19.5 4 21 6 21M18 14C16 14 14 15.5 14 17.5C14 19.5 16 21 18 21M10 16L9 19M14 14L13 17M6 14L5 11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M7 6C9.5 3 15 3 17 6C20 6 22 8.5 22 11.5C22 14.5 20 17 17 17H7C4 17 2 15 2 12.5C2 10 4 7 7 6Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      )
    case 'question':
      return (
        <svg className="w-5 h-5 md:w-6 md:h-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.5"/>
          <path d="M9.5 10C9.5 9 10.5 8 12 8C13.5 8 14.5 9 14.5 10C14.5 11 13.5 11.5 13 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
          <circle cx="12" cy="16" r="0.5" fill="currentColor"/>
        </svg>
      )
    case 'lightning':
      return (
        <svg className="w-5 h-5 md:w-6 md:h-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M13 2L6 13H11L10 22L18 10H13L13 2Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      )
    default:
      return null
  }
}

const ArriveIcon = ({ type }: { type: string }) => {
  switch (type) {
    case 'lotus':
      return (
        <svg className="w-5 h-5 md:w-6 md:h-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 2C12 2 8 6 8 10C8 14 10 17 12 17C14 17 16 14 16 10C16 6 12 2 12 2Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M6 12C6 12 3 11 2 14C1 17 3 20 6 20" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M18 12C18 12 21 11 22 14C23 17 21 20 18 20" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          <circle cx="12" cy="18" r="2" fill="currentColor"/>
        </svg>
      )
    case 'sun':
      return (
        <svg className="w-5 h-5 md:w-6 md:h-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="1.5"/>
          <path d="M12 2V4M12 20V22M22 12H20M4 12H2M19.08 4.92L17.65 6.35M6.35 17.65L4.92 19.08M19.08 19.08L17.65 17.65M6.35 6.35L4.92 4.92" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      )
    case 'feather':
      return (
        <svg className="w-5 h-5 md:w-6 md:h-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M6 2C6 2 4 6 4 10C4 15 6 20 10 21C14 22 16 18 16 14L16 2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M8 4L12 6M8 8L14 10M8 12L12 13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
        </svg>
      )
    case 'star':
      return (
        <svg className="w-5 h-5 md:w-6 md:h-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 2L15 10H23L17 15L19 23L12 18L5 23L7 15L1 10H9L12 2Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      )
    case 'shield':
      return (
        <svg className="w-5 h-5 md:w-6 md:h-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 2L3 6V12C3 18 12 22 12 22C12 22 21 18 21 12V6L12 2Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M8 12L11 15L16 9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      )
    case 'sparkle':
      return (
        <svg className="w-5 h-5 md:w-6 md:h-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 2L14 8H20L15 12L17 18L12 14L7 18L9 12L4 8H10L12 2Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          <circle cx="3" cy="5" r="1" fill="currentColor"/>
          <circle cx="20" cy="7" r="1" fill="currentColor"/>
          <circle cx="21" cy="18" r="1" fill="currentColor"/>
        </svg>
      )
    default:
      return null
  }
}

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
                {leaveItems.map((item) => (
                  <AnimatedItem key={item.label}>
                    <div className="px-5 md:px-7 py-4 md:py-5 flex items-center gap-3 md:gap-4 group hover:bg-secondary/10 transition-colors min-h-[60px] md:min-h-[56px]">
                      <span className="flex size-7 md:size-8 shrink-0 items-center justify-center text-accent group-hover:scale-110 transition-transform">
                        <LeaveIcon type={item.icon} />
                      </span>
                      <span className="text-xs md:text-sm text-foreground font-light tracking-tight">{item.label}</span>
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
                {arriveItems.map((item) => (
                  <AnimatedItem key={item.label}>
                    <div className="px-5 md:px-7 py-4 md:py-5 flex items-center gap-3 md:gap-4 group hover:bg-secondary/10 transition-colors min-h-[60px] md:min-h-[56px]">
                      <span className="flex size-7 md:size-8 shrink-0 items-center justify-center text-accent group-hover:scale-110 transition-transform">
                        <ArriveIcon type={item.icon} />
                      </span>
                      <span className="text-xs md:text-sm text-foreground font-light tracking-tight">{item.label}</span>
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

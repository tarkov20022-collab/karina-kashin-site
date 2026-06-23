'use client'

import Image from 'next/image'
import { Heart } from 'lucide-react'
import { AnimatedFadeUp, AnimatedContainer, AnimatedItem } from '../animated-fade-up'

const points = [
  { n: '01', text: 'Постоянная усталость и отсутствие энергии', image: '/images/state-01-hourglass.png' },
  { n: '02', text: 'Тревога, стресс, бессонница', image: '/images/state-02-tangled.png' },
  { n: '03', text: 'Навязчивые мысли и невозможность «выключить голову»', image: '/images/state-03-toggle.png' },
  { n: '04', text: 'Неуверенность в себе и своих решениях', image: '/images/state-04-gift.png' },
  { n: '05', text: 'Страх перемен и будущего', image: '/images/state-05-signpost.png' },
  { n: '06', text: 'Сложности в отношениях с партнёром, родителями или детьми', image: '/images/state-06-tangled-heart.png' },
  { n: '07', text: 'Денежные ограничения и страх за финансовое будущее', image: '/images/state-07-wallet.png' },
  { n: '08', text: 'Ощущение, что жизнь идёт не так, как хочется', image: '/images/state-08-thought.png' },
  { n: '09', text: 'Желание выйти из повторяющихся сценариев', image: '/images/state-09-cycle.png' },
  { n: '10', text: 'Желание освободиться от ограничивающих убеждений', image: '/images/state-10-birdcage.png' },
]

export function RecognizeSection() {
  return (
    <section className="relative bg-background py-20 md:py-32 overflow-hidden">
      {/* Decorative leaf top-left */}
      <div className="absolute -top-12 -left-12 w-32 h-32 opacity-20 pointer-events-none">
        <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M50 10Q70 20 70 50Q70 80 50 90Q30 80 30 50Q30 20 50 10Z" stroke="currentColor" strokeWidth="2" className="text-accent"/>
        </svg>
      </div>

      <div className="mx-auto max-w-7xl px-5 md:px-10">
        {/* Header Label */}
        <AnimatedFadeUp>
          <div className="text-center mb-6">
            <span className="text-xs uppercase tracking-widest text-accent font-semibold">Давайте честно</span>
          </div>
        </AnimatedFadeUp>

        {/* Main Heading with Decorative Underline */}
        <AnimatedFadeUp delay={0.1}>
          <div className="text-center mb-4">
            <h2 className="font-serif text-4xl md:text-5xl font-medium leading-tight text-foreground text-balance relative inline-block w-full">
              Знакомо ли вам это состояние?
              <svg className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-full max-w-md h-8 mt-2 pt-px ml-[15px] -mb-[18px]" viewBox="0 0 400 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M10 15Q50 5 100 15T200 15T300 15T400 15" stroke="currentColor" strokeWidth="2" className="text-accent" strokeLinecap="round"/>
              </svg>
            </h2>
          </div>
        </AnimatedFadeUp>

        {/* Subheading */}
        <AnimatedFadeUp delay={0.2}>
          <p className="text-center max-w-2xl mx-auto text-sm md:text-base text-muted-foreground mb-12">
            Выберите то, что отклоняется. Это первый шаг к изменениям.
          </p>
        </AnimatedFadeUp>

        {/* Cards Grid */}
        <AnimatedContainer className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-5 mb-16" staggerDelay={0.06}>
          {points.map((p) => (
            <AnimatedItem key={p.n}>
              <article className="flex flex-col items-center text-center bg-secondary/50 rounded-2xl p-6 hover:bg-secondary/70 transition-colors">
                {/* Numbered Circle */}
                <div className="flex items-center justify-center w-12 h-12 rounded-full bg-accent text-background font-serif font-semibold text-lg mb-4">
                  {p.n}
                </div>

                {/* Illustration */}
                <div className="relative w-24 h-24 mb-4">
                  <Image
                    src={p.image}
                    alt={p.text}
                    fill
                    sizes="100px"
                    className="object-contain rounded-xl"
                  />
                </div>

                {/* Text */}
                <p className="text-sm leading-snug text-foreground">
                  {p.text}
                </p>
              </article>
            </AnimatedItem>
          ))}
        </AnimatedContainer>

        {/* Closing Section with Decorative Elements */}
        <AnimatedFadeUp delay={0.3} className="relative flex flex-col items-center text-center">
          {/* Decorative leaf bottom-right */}
          <div className="absolute -bottom-16 -right-12 w-32 h-32 opacity-20 pointer-events-none">
            <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M50 10Q70 20 70 50Q70 80 50 90Q30 80 30 50Q30 20 50 10Z" stroke="currentColor" strokeWidth="2" className="text-accent" transform="rotate(45 50 50)"/>
            </svg>
          </div>

          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="h-12 w-12 rounded-full bg-secondary/70 flex items-center justify-center">
              <Heart className="w-5 h-5 text-accent fill-accent" />
            </div>
          </div>

          <p className="max-w-2xl text-base leading-relaxed text-foreground text-pretty">
            Если вы узнали себя хотя бы в одном пункте — возможно,
            <br />
            <span className="font-semibold">пришло время посмотреть на ситуацию иначе.</span>
          </p>
          <div className="mt-6 h-0.5 w-16 bg-accent" />
        </AnimatedFadeUp>
      </div>
    </section>
  )
}

'use client'

import { ArrowRight } from 'lucide-react'
import Image from 'next/image'
import { SiteHeader } from './site-header'
import { AnimatedFadeUp } from '../animated-fade-up'

// Decorative 3D objects component
function DecorativeObjects() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Floating feather - top right */}
      <div className="absolute top-20 right-32 w-32 h-32 animate-float" style={{
        animationDuration: '6s',
        animationDelay: '0s'
      }}>
        <svg viewBox="0 0 100 100" className="w-full h-full opacity-60">
          <path d="M50 10 Q65 30 60 50 Q55 70 50 90 M50 10 Q48 35 50 50 M50 10 Q52 35 50 50 M50 20 Q60 35 58 50 M50 20 Q40 35 42 50" 
                stroke="#CFA15A" strokeWidth="1.5" fill="none" strokeLinecap="round"/>
        </svg>
      </div>

      {/* Lotus flower - right side, middle */}
      <div className="absolute top-1/3 right-16 w-40 h-40 animate-float" style={{
        animationDuration: '7s',
        animationDelay: '1s'
      }}>
        <svg viewBox="0 0 100 100" className="w-full h-full opacity-50">
          <circle cx="50" cy="50" r="8" fill="#CFA15A"/>
          <path d="M50 50 L60 30 Q65 20 70 25 Q68 35 60 40 Z" fill="none" stroke="#CFA15A" strokeWidth="1.5"/>
          <path d="M50 50 L40 30 Q35 20 30 25 Q32 35 40 40 Z" fill="none" stroke="#CFA15A" strokeWidth="1.5"/>
          <path d="M50 50 L65 45 Q75 42 80 48 Q73 50 65 48 Z" fill="none" stroke="#CFA15A" strokeWidth="1.5"/>
          <path d="M50 50 L35 45 Q25 42 20 48 Q27 50 35 48 Z" fill="none" stroke="#CFA15A" strokeWidth="1.5"/>
        </svg>
      </div>

      {/* Vintage key - bottom right */}
      <div className="absolute bottom-32 right-12 w-32 h-24 animate-float" style={{
        animationDuration: '8s',
        animationDelay: '0.5s'
      }}>
        <svg viewBox="0 0 100 100" className="w-full h-full opacity-55">
          <circle cx="20" cy="50" r="12" fill="none" stroke="#CFA15A" strokeWidth="2"/>
          <rect x="32" y="46" width="50" height="8" rx="2" fill="none" stroke="#CFA15A" strokeWidth="2"/>
          <rect x="75" y="43" width="6" height="14" rx="1" fill="#CFA15A"/>
          <rect x="75" y="50" width="8" height="3" fill="#CFA15A"/>
        </svg>
      </div>

      {/* Hourglass - right center */}
      <div className="absolute top-1/2 right-24 w-28 h-32 animate-float" style={{
        animationDuration: '7.5s',
        animationDelay: '1.5s'
      }}>
        <svg viewBox="0 0 100 100" className="w-full h-full opacity-50">
          <path d="M20 20 L80 20 L65 50 L80 80 L20 80 L35 50 L20 20 Z" fill="none" stroke="#CFA15A" strokeWidth="2"/>
          <circle cx="50" cy="50" r="3" fill="#CFA15A"/>
        </svg>
      </div>

      {/* Floating gold spheres */}
      <div className="absolute top-1/4 right-8 w-12 h-12 rounded-full" style={{ 
        backgroundColor: 'rgba(207, 161, 90, 0.3)',
        boxShadow: 'inset -2px -2px 5px rgba(207, 161, 90, 0.2)',
        animation: 'float 6s ease-in-out infinite',
        animationDelay: '0s'
      }} />

      <div className="absolute top-2/3 right-32 w-8 h-8 rounded-full" style={{ 
        backgroundColor: 'rgba(207, 161, 90, 0.25)',
        boxShadow: 'inset -1px -1px 3px rgba(207, 161, 90, 0.15)',
        animation: 'float 7s ease-in-out infinite',
        animationDelay: '1s'
      }} />

      <div className="absolute bottom-20 right-48 w-6 h-6 rounded-full" style={{ 
        backgroundColor: 'rgba(207, 161, 90, 0.2)',
        animation: 'float 8s ease-in-out infinite',
        animationDelay: '0.5s'
      }} />
    </div>
  )
}

export function Hero() {
  return (
    <section className="relative w-full">
      {/* Full-screen hero with gradient background */}
      <div className="relative w-full min-h-screen overflow-hidden" style={{ backgroundColor: '#F8F4EE' }}>
        {/* Decorative subtle gradient lines */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <svg className="absolute w-full h-full" viewBox="0 0 1440 900" preserveAspectRatio="none">
            <defs>
              <linearGradient id="subtleGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#CFA15A" stopOpacity="0.03" />
                <stop offset="100%" stopColor="#CFA15A" stopOpacity="0.01" />
              </linearGradient>
            </defs>
            <path d="M 0 300 Q 360 250 720 300 T 1440 300" fill="none" stroke="url(#subtleGradient)" strokeWidth="2" opacity="0.4"/>
            <path d="M 0 500 Q 360 550 720 500 T 1440 500" fill="none" stroke="url(#subtleGradient)" strokeWidth="2" opacity="0.3"/>
          </svg>
        </div>

        {/* Floating decorative objects */}
        <DecorativeObjects />

        {/* Header - light styling for cream background */}
        <SiteHeader onHero={false} />

        {/* Main hero grid layout */}
        <div className="relative z-20 min-h-screen flex items-center px-4 md:px-8 lg:px-12">
          <div className="max-w-7xl w-full mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            
            {/* Left content */}
            <div className="max-w-xl">
              {/* Eyebrow text */}
              <AnimatedFadeUp>
                <span className="text-xs uppercase tracking-[0.25em] font-semibold" style={{ color: '#CFA15A' }}>
                  Сертифицированный фасилитатор Access Consciousness
                </span>
              </AnimatedFadeUp>

              {/* Main headline */}
              <AnimatedFadeUp delay={0.1}>
                <h1 className="mt-8 font-serif text-5xl md:text-7xl lg:text-7xl font-medium leading-[1.1] tracking-tight" style={{ color: '#2A201A' }}>
                  ЧТО ЕЩЁ<br />ВОЗМОЖНО?
                </h1>
                {/* Decorative gold underline */}
                <div className="mt-8 h-1 w-16" style={{ backgroundColor: '#CFA15A' }} />
              </AnimatedFadeUp>

              {/* Supporting text lines */}
              <AnimatedFadeUp delay={0.2}>
                <div className="mt-10 max-w-xs space-y-2">
                  <p className="text-base md:text-lg leading-relaxed font-light" style={{ color: '#2A201A' }}>
                    Уберите шум.
                  </p>
                  <p className="text-base md:text-lg leading-relaxed font-light" style={{ color: '#2A201A' }}>
                    Услышьте себя.
                  </p>
                  <p className="text-base md:text-lg leading-relaxed font-light" style={{ color: '#2A201A' }}>
                    Создайте другую реальность.
                  </p>
                </div>
              </AnimatedFadeUp>

              {/* CTA Buttons */}
              <AnimatedFadeUp delay={0.3} className="mt-12 flex flex-wrap items-center gap-6">
                <a
                  href="#contact"
                  className="inline-flex items-center justify-center gap-2 rounded-full px-8 py-4 text-sm font-medium transition-all hover:shadow-lg"
                  style={{ backgroundColor: '#CFA15A', color: '#FFFFFF' }}
                >
                  Записаться на сессию
                </a>
                <a
                  href="#training"
                  className="group inline-flex items-center gap-2 text-sm font-medium transition-colors"
                  style={{ color: '#2A201A' }}
                >
                  Узнать про обучение
                  <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
                </a>
              </AnimatedFadeUp>
            </div>

            {/* Right side - Portrait with decorative objects behind */}
            <div className="relative hidden lg:flex items-center justify-end">
              <div className="relative w-full h-[500px]">
                {/* Portrait image */}
                <Image
                  src="/images/hero-bg-new.jpg"
                  alt="Карина Кашина — Access Consciousness"
                  fill
                  priority
                  sizes="(max-width: 1024px) 0, 500px"
                  className="object-cover object-center rounded-2xl"
                  quality={100}
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Statistics panel at bottom */}
      <div className="relative z-30 -mt-24 px-4 md:px-8 lg:px-12 pb-12">
        <div className="mx-auto max-w-2xl">
          <AnimatedFadeUp delay={0.4}>
            <div className="rounded-3xl overflow-hidden backdrop-blur-sm" style={{
              backgroundColor: 'rgba(255, 255, 255, 0.85)',
              boxShadow: '0 8px 32px rgba(42, 32, 26, 0.08)',
            }}>
              <div className="grid grid-cols-1 md:grid-cols-3">
                {[
                  { number: '5+', label: 'лет практики' },
                  { number: '500+', label: 'сессий' },
                  { number: '100%', label: 'индивидуальный подход' },
                ].map((stat, index) => (
                  <div key={index} className={`px-6 md:px-8 py-8 md:py-10 text-center ${index !== 2 ? 'border-b md:border-b-0 md:border-r' : ''}`} style={{ borderColor: '#EFE6DA' }}>
                    <div className="text-3xl md:text-4xl font-serif font-medium" style={{ color: '#CFA15A' }}>
                      {stat.number}
                    </div>
                    <div className="mt-3 text-xs md:text-sm uppercase tracking-wider" style={{ color: '#6F6258' }}>
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </AnimatedFadeUp>
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
      `}</style>
    </section>
  )
}

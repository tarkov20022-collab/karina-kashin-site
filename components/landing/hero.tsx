'use client'

import { ArrowRight } from 'lucide-react'
import Image from 'next/image'
import { SiteHeader } from './site-header'
import { AnimatedFadeUp } from '../animated-fade-up'

export function Hero() {
  return (
    <section className="relative w-full" style={{ backgroundColor: '#F8F4EE' }}>
      {/* ─── HEADER ─────────────────────────────────────────────── */}
      <SiteHeader onHero={true} />

      {/* ─── HERO BODY ──────────────────────────────────────────── */}
      {/*
        Structure: full-viewport-height container
        Split into two rows: main flex row (content + portrait), then stats card
      */}
      <div
        className="relative w-full overflow-hidden flex flex-col"
        style={{ minHeight: '100vh' }}
      >
        {/* Subtle curved decorative line */}
        <svg
          className="pointer-events-none absolute inset-0 w-full h-full"
          viewBox="0 0 1440 900"
          preserveAspectRatio="xMidYMid slice"
          style={{ opacity: 0.18 }}
        >
          <path
            d="M -100 700 Q 400 550 800 620 T 1600 580"
            fill="none"
            stroke="#C9A063"
            strokeWidth="1.5"
          />
          <path
            d="M -100 750 Q 500 600 900 680 T 1600 630"
            fill="none"
            stroke="#C9A063"
            strokeWidth="1"
          />
        </svg>

        {/* Inner flex row: content | portrait */}
        <div className="relative z-10 flex flex-1 items-center">

          {/* ── LEFT: text content ── */}
          <div className="flex flex-1 flex-col justify-center px-8 py-32 lg:px-16 lg:py-32 max-w-[55%]">

            {/* Eyebrow */}
            <AnimatedFadeUp>
              <p
                className="text-[11px] font-semibold uppercase tracking-[0.28em]"
                style={{ color: '#C9A063' }}
              >
                Сертифицированный фасилитатор Access Consciousness
              </p>
            </AnimatedFadeUp>

            {/* Headline */}
            <AnimatedFadeUp delay={0.1}>
              <h1
                className="mt-2 font-serif font-semibold leading-[0.95] tracking-tight"
                style={{ color: '#2A1F17', fontSize: 'clamp(60px, 7.7vw, 124px)' }}
              >
                ЧТО ЕЩЁ<br />ВОЗМОЖНО?
              </h1>
              {/* Gold divider */}
              <div
                className="mt-8"
                style={{
                  width: 64,
                  height: 3,
                  backgroundColor: '#C9A063',
                  borderRadius: 2,
                }}
              />
            </AnimatedFadeUp>

            {/* Supporting text */}
            <AnimatedFadeUp delay={0.2}>
              <div className="mt-8 space-y-1.5">
                {['Уберите шум.', 'Услышьте себя.', 'Создайте другую реальность.'].map((line) => (
                  <p
                    key={line}
                    className="text-base font-light leading-relaxed"
                    style={{ color: '#2A1F17' }}
                  >
                    {line}
                  </p>
                ))}
              </div>
            </AnimatedFadeUp>

            {/* CTA buttons */}
            <AnimatedFadeUp delay={0.3}>
              <div className="mt-10 flex flex-wrap items-center gap-6">
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 rounded-full px-7 py-4 text-sm font-medium text-white transition-opacity hover:opacity-90"
                  style={{ backgroundColor: '#C9A063' }}
                >
                  Записаться на сессию
                  <ArrowRight className="size-4" />
                </a>
                <a
                  href="#training"
                  className="group inline-flex items-center gap-2 text-sm font-medium transition-colors"
                  style={{ color: '#2A1F17' }}
                >
                  Узнать про обучение
                  <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
                </a>
              </div>
            </AnimatedFadeUp>
          </div>

          {/* ── RIGHT: portrait + 3D objects ── */}
          {/*
            Portrait container expanded to ~56% (25% increase from 45%).
            Extends beyond right edge of viewport for editorial feel.
            All 3D objects layered with z-index for depth.
          */}
          <div
            className="relative hidden lg:flex"
            style={{ width: '56%', marginRight: '-8%', alignSelf: 'stretch' }}
          >
            {/* Warm radial gradient + curved lines backdrop */}
            <div
              className="absolute inset-0 pointer-events-none"
              style={{
                zIndex: 0,
                background: 'radial-gradient(ellipse at 30% 40%, rgba(201, 160, 99, 0.08) 0%, rgba(201, 160, 99, 0.02) 40%, transparent 70%)',
              }}
            />

            {/* Elegant curved lines behind portrait */}
            <svg
              className="absolute inset-0 w-full h-full pointer-events-none"
              viewBox="0 0 600 900"
              preserveAspectRatio="none"
              style={{ zIndex: 0 }}
            >
              <defs>
                <linearGradient id="goldGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#C9A063" stopOpacity="0.15" />
                  <stop offset="100%" stopColor="#C9A063" stopOpacity="0" />
                </linearGradient>
              </defs>
              <path d="M 100 200 Q 200 300 150 500" stroke="url(#goldGradient)" strokeWidth="1.5" fill="none" />
              <path d="M 80 100 Q 250 400 200 800" stroke="url(#goldGradient)" strokeWidth="1" fill="none" />
            </svg>

            {/* Portrait */}
            <Image
              src="/images/hero-portrait.png"
              alt="Карина Кашина — Access Consciousness"
              fill
              priority
              quality={100}
              sizes="56vw"
              className="object-contain object-left"
              style={{ zIndex: 5 }}
            />

            {/* ── 3D OBJECTS over portrait ── */}

            {/* Feather — near head (overlapping portrait, in front) */}
            <div
              className="absolute pointer-events-none animate-float"
              style={{ top: '12%', left: '35%', width: 220, height: 220, zIndex: 15, animationDuration: '6s', animationDelay: '0s' }}
            >
              <Image
                src="/images/3d-feather.png"
                alt=""
                fill
                sizes="220px"
                className="object-contain"
                priority
              />
            </div>

            {/* Lotus — over lower torso (reduced by 30%, overlapping) */}
            <div
              className="absolute pointer-events-none animate-float"
              style={{ top: '42%', left: '-20px', width: 168, height: 168, zIndex: 12, animationDuration: '7s', animationDelay: '1s' }}
            >
              <Image
                src="/images/3d-lotus.png"
                alt=""
                fill
                sizes="168px"
                className="object-contain"
                priority
              />
            </div>

            {/* Key — near hand/lap area (overlapping) */}
            <div
              className="absolute pointer-events-none animate-float"
              style={{ bottom: '18%', left: '8%', width: 200, height: 160, zIndex: 14, animationDuration: '8s', animationDelay: '0.5s' }}
            >
              <Image
                src="/images/3d-key.png"
                alt=""
                fill
                sizes="200px"
                className="object-contain"
                priority
              />
            </div>

            {/* Hourglass — near chair arm (overlapping, in front) */}
            <div
              className="absolute pointer-events-none animate-float"
              style={{ bottom: '12%', right: '-30px', width: 220, height: 260, zIndex: 16, animationDuration: '7.5s', animationDelay: '1.5s' }}
            >
              <Image
                src="/images/3d-hourglass.png"
                alt=""
                fill
                sizes="220px"
                className="object-contain"
                priority
              />
            </div>

            {/* Small floating spheres — fill empty space */}
            <div
              className="absolute pointer-events-none animate-float"
              style={{ top: '22%', left: '22%', width: 50, height: 50, zIndex: 13, animationDuration: '6s', animationDelay: '0s' }}
            >
              <Image
                src="/images/3d-spheres.png"
                alt=""
                fill
                sizes="50px"
                className="object-contain"
                priority
              />
            </div>

            <div
              className="absolute pointer-events-none animate-float"
              style={{ top: '35%', right: '15%', width: 40, height: 40, zIndex: 13, animationDuration: '7.5s', animationDelay: '1s' }}
            >
              <Image
                src="/images/3d-spheres.png"
                alt=""
                fill
                sizes="40px"
                className="object-contain"
                priority
              />
            </div>

            <div
              className="absolute pointer-events-none animate-float"
              style={{ bottom: '35%', left: '12%', width: 60, height: 60, zIndex: 11, animationDuration: '8s', animationDelay: '0.5s' }}
            >
              <Image
                src="/images/3d-spheres.png"
                alt=""
                fill
                sizes="60px"
                className="object-contain"
                priority
              />
            </div>

            <div
              className="absolute pointer-events-none animate-float"
              style={{ top: '55%', left: '28%', width: 35, height: 35, zIndex: 13, animationDuration: '7s', animationDelay: '1.5s' }}
            >
              <Image
                src="/images/3d-spheres.png"
                alt=""
                fill
                sizes="35px"
                className="object-contain"
                priority
              />
            </div>

            <div
              className="absolute pointer-events-none animate-float"
              style={{ bottom: '22%', right: '8%', width: 45, height: 45, zIndex: 13, animationDuration: '6.5s', animationDelay: '1.2s' }}
            >
              <Image
                src="/images/3d-spheres.png"
                alt=""
                fill
                sizes="45px"
                className="object-contain"
                priority
              />
            </div>
          </div>
        </div>
      </div>

      {/* ─── STATS CARD — anchored to the bottom of the hero ── */}
      <div className="relative z-30 w-full px-4 pb-10">
        <div className="mx-auto max-w-3xl">
          <div
            className="grid grid-cols-3 overflow-hidden rounded-3xl"
            style={{
              backgroundColor: '#FFFFFF',
              boxShadow: '0 12px 48px rgba(42, 31, 23, 0.09)',
            }}
          >
            {[
              { number: '5+', label: 'лет практики' },
              { number: '500+', label: 'сессий' },
              { number: '100%', label: 'индивидуальный подход' },
            ].map((stat, i) => (
              <div
                key={stat.number}
                className="flex flex-col items-center justify-center px-6 py-10 text-center"
                style={{
                  borderRight: i < 2 ? '1px solid #EFE6DA' : undefined,
                }}
              >
                <span
                  className="font-serif text-4xl font-light"
                  style={{ color: '#C9A063' }}
                >
                  {stat.number}
                </span>
                <span
                  className="my-2 block text-[10px]"
                  style={{ color: '#C9A063', opacity: 0.5 }}
                >
                  ✦
                </span>
                <span
                  className="text-xs uppercase tracking-widest"
                  style={{ color: '#7A6860' }}
                >
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-24px);
          }
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
      `}</style>
    </section>
  )
}

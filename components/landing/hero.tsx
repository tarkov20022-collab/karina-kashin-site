'use client'

import { ArrowRight } from 'lucide-react'
import Image from 'next/image'
import { SiteHeader } from './site-header'
import { AnimatedFadeUp } from '../animated-fade-up'

// Gold feather SVG — upper right near head
function Feather({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 80 160" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M40 10 C55 30 62 55 58 80 C54 105 46 130 40 150" stroke="#C9A063" strokeWidth="1.8" fill="none" strokeLinecap="round"/>
      <path d="M40 25 C52 35 60 50 56 68" stroke="#C9A063" strokeWidth="1.2" fill="none" strokeLinecap="round" opacity="0.85"/>
      <path d="M40 25 C28 35 22 50 26 68" stroke="#C9A063" strokeWidth="1.2" fill="none" strokeLinecap="round" opacity="0.85"/>
      <path d="M40 40 C51 50 57 64 54 80" stroke="#C9A063" strokeWidth="1.1" fill="none" strokeLinecap="round" opacity="0.7"/>
      <path d="M40 40 C29 50 25 64 28 80" stroke="#C9A063" strokeWidth="1.1" fill="none" strokeLinecap="round" opacity="0.7"/>
      <path d="M40 55 C49 64 54 76 52 90" stroke="#C9A063" strokeWidth="1" fill="none" strokeLinecap="round" opacity="0.6"/>
      <path d="M40 55 C31 64 28 76 30 90" stroke="#C9A063" strokeWidth="1" fill="none" strokeLinecap="round" opacity="0.6"/>
      <path d="M40 70 C47 78 51 88 49 100" stroke="#C9A063" strokeWidth="0.9" fill="none" strokeLinecap="round" opacity="0.5"/>
      <path d="M40 70 C33 78 31 88 33 100" stroke="#C9A063" strokeWidth="0.9" fill="none" strokeLinecap="round" opacity="0.5"/>
      <path d="M40 85 C45 92 48 101 46 112" stroke="#C9A063" strokeWidth="0.8" fill="none" strokeLinecap="round" opacity="0.4"/>
      <path d="M40 85 C35 92 33 101 35 112" stroke="#C9A063" strokeWidth="0.8" fill="none" strokeLinecap="round" opacity="0.4"/>
    </svg>
  )
}

// Gold lotus SVG — lower center over torso
function Lotus({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 120 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Center petals */}
      <path d="M60 70 C60 50 50 30 45 15 C55 25 65 45 60 70 Z" fill="#C9A063" opacity="0.9"/>
      <path d="M60 70 C60 50 70 30 75 15 C65 25 55 45 60 70 Z" fill="#C9A063" opacity="0.85"/>
      {/* Left petals */}
      <path d="M60 70 C45 60 25 58 12 50 C25 55 45 65 60 70 Z" fill="#C9A063" opacity="0.8"/>
      <path d="M60 70 C42 55 28 40 18 25 C32 38 50 58 60 70 Z" fill="#C9A063" opacity="0.7"/>
      {/* Right petals */}
      <path d="M60 70 C75 60 95 58 108 50 C95 55 75 65 60 70 Z" fill="#C9A063" opacity="0.8"/>
      <path d="M60 70 C78 55 92 40 102 25 C88 38 70 58 60 70 Z" fill="#C9A063" opacity="0.7"/>
      {/* Base leaves */}
      <path d="M45 75 C40 80 30 82 20 80 C30 78 42 76 45 75 Z" fill="#C9A063" opacity="0.5"/>
      <path d="M75 75 C80 80 90 82 100 80 C90 78 78 76 75 75 Z" fill="#C9A063" opacity="0.5"/>
      {/* Stem */}
      <path d="M60 70 L60 90" stroke="#C9A063" strokeWidth="2" strokeLinecap="round" opacity="0.6"/>
      {/* Center orb */}
      <circle cx="60" cy="68" r="5" fill="#C9A063" opacity="0.95"/>
      <circle cx="60" cy="68" r="2.5" fill="#E8C27A" opacity="0.8"/>
    </svg>
  )
}

// Vintage ornate key SVG — lower center-right
function Key({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 180 80" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Key ring / head */}
      <circle cx="28" cy="40" r="22" stroke="#C9A063" strokeWidth="3" fill="none"/>
      <circle cx="28" cy="40" r="14" stroke="#C9A063" strokeWidth="1.5" fill="none" opacity="0.6"/>
      {/* Decorative notch in ring */}
      <circle cx="28" cy="24" r="5" fill="#C9A063" opacity="0.8"/>
      <circle cx="28" cy="24" r="2.5" fill="#E8C27A"/>
      {/* Key shaft */}
      <rect x="50" y="36.5" width="100" height="7" rx="3.5" fill="#C9A063"/>
      {/* Key teeth */}
      <rect x="115" y="30" width="10" height="7" rx="2" fill="#C9A063"/>
      <rect x="135" y="30" width="10" height="7" rx="2" fill="#C9A063"/>
      <rect x="155" y="30" width="10" height="7" rx="2" fill="#C9A063"/>
      {/* Shaft detail lines */}
      <line x1="80" y1="37" x2="80" y2="44" stroke="#E8C27A" strokeWidth="1" opacity="0.6"/>
      <line x1="95" y1="37" x2="95" y2="44" stroke="#E8C27A" strokeWidth="1" opacity="0.6"/>
    </svg>
  )
}

// Hourglass SVG — bottom right
function Hourglass({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 80 140" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Top cap */}
      <rect x="8" y="6" width="64" height="10" rx="4" fill="#C9A063"/>
      {/* Bottom cap */}
      <rect x="8" y="124" width="64" height="10" rx="4" fill="#C9A063"/>
      {/* Top glass panel */}
      <path d="M14 16 L66 16 L46 70 L34 70 Z" fill="#C9A063" opacity="0.25"/>
      <path d="M14 16 L66 16 L46 70 L34 70 Z" stroke="#C9A063" strokeWidth="2"/>
      {/* Bottom glass panel */}
      <path d="M34 70 L46 70 L66 124 L14 124 Z" fill="#C9A063" opacity="0.15"/>
      <path d="M34 70 L46 70 L66 124 L14 124 Z" stroke="#C9A063" strokeWidth="2"/>
      {/* Sand in bottom */}
      <path d="M20 114 L60 114 L55 90 L25 90 Z" fill="#C9A063" opacity="0.45"/>
      {/* Sand stream */}
      <line x1="40" y1="70" x2="40" y2="90" stroke="#C9A063" strokeWidth="2" strokeDasharray="2 2" opacity="0.6"/>
      {/* Neck detail */}
      <circle cx="40" cy="70" r="3" fill="#C9A063" opacity="0.8"/>
      {/* Stand legs */}
      <line x1="16" y1="16" x2="8" y2="6" stroke="#C9A063" strokeWidth="2.5" strokeLinecap="round"/>
      <line x1="64" y1="16" x2="72" y2="6" stroke="#C9A063" strokeWidth="2.5" strokeLinecap="round"/>
      <line x1="16" y1="124" x2="8" y2="134" stroke="#C9A063" strokeWidth="2.5" strokeLinecap="round"/>
      <line x1="64" y1="124" x2="72" y2="134" stroke="#C9A063" strokeWidth="2.5" strokeLinecap="round"/>
    </svg>
  )
}

// Gold sphere
function Sphere({ className, size = 20, opacity = 0.7 }: { className?: string; size?: number; opacity?: number }) {
  return (
    <div
      className={className}
      style={{
        width: size,
        height: size,
        borderRadius: '50%',
        background: `radial-gradient(circle at 35% 35%, #E8C27A ${opacity * 100 * 0.4}%, #C9A063 60%, #A07840 100%)`,
        boxShadow: `0 ${size * 0.15}px ${size * 0.5}px rgba(201,160,99,0.35), inset 0 -${size * 0.1}px ${size * 0.2}px rgba(120,80,20,0.25)`,
        opacity,
      }}
    />
  )
}

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
                className="mt-6 font-serif font-semibold leading-[1.0] tracking-tight"
                style={{ color: '#2A1F17', fontSize: 'clamp(56px, 7vw, 112px)' }}
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
            This container is 45% wide, full height of the hero.
            The portrait fills it entirely.
            All 3D objects are absolutely positioned ON TOP of the portrait.
          */}
          <div
            className="relative hidden lg:block"
            style={{ width: '45%', alignSelf: 'stretch' }}
          >
            {/* Portrait */}
            <Image
              src="/images/hero-bg-new.jpg"
              alt="Карина Кашина — Access Consciousness"
              fill
              priority
              quality={100}
              sizes="45vw"
              className="object-cover object-top"
              style={{ zIndex: 1 }}
            />

            {/* ── 3D OBJECTS over portrait ── */}

            {/* Feather — upper right, near head */}
            <div
              className="absolute pointer-events-none"
              style={{ top: '8%', right: '12%', width: 80, height: 160, zIndex: 20, opacity: 0.88 }}
            >
              <Feather className="w-full h-full" />
            </div>

            {/* Gold sphere — upper area left of feather */}
            <Sphere
              className="absolute pointer-events-none"
              style={{ top: '18%', right: '38%', zIndex: 22 } as React.CSSProperties}
              size={28}
              opacity={0.82}
            />

            {/* Gold sphere — far upper right */}
            <Sphere
              className="absolute pointer-events-none"
              style={{ top: '14%', right: '4%', zIndex: 22 } as React.CSSProperties}
              size={22}
              opacity={0.7}
            />

            {/* Lotus — lower center, over torso */}
            <div
              className="absolute pointer-events-none"
              style={{ bottom: '28%', left: '12%', width: 140, height: 116, zIndex: 20, opacity: 0.92 }}
            >
              <Lotus className="w-full h-full" />
            </div>

            {/* Key — lower center-right, over body */}
            <div
              className="absolute pointer-events-none"
              style={{ bottom: '24%', left: '22%', width: 190, height: 85, zIndex: 21, opacity: 0.9 }}
            >
              <Key className="w-full h-full" />
            </div>

            {/* Hourglass — bottom right, over arm area */}
            <div
              className="absolute pointer-events-none"
              style={{ bottom: '8%', right: '6%', width: 80, height: 140, zIndex: 20, opacity: 0.88 }}
            >
              <Hourglass className="w-full h-full" />
            </div>

            {/* Gold sphere — near hourglass */}
            <Sphere
              className="absolute pointer-events-none"
              style={{ bottom: '36%', left: '6%', zIndex: 22 } as React.CSSProperties}
              size={36}
              opacity={0.75}
            />
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
    </section>
  )
}

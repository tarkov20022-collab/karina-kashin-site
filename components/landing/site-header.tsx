'use client'

import { useState } from 'react'
import { Menu, X } from 'lucide-react'

const navLinks = [
  { label: 'Обо мне', href: '#about' },
  { label: 'Сессии', href: '#bars' },
  { label: 'Обучение', href: '#training' },
  { label: 'Отзывы', href: '#changes' },
  { label: 'Контакты', href: '#contact' },
]

export function SiteHeader({ onHero = false }: { onHero?: boolean }) {
  const [open, setOpen] = useState(false)

  const textColorClass = 'text-foreground'
  const linkColorClass = 'text-foreground/70 hover:text-foreground'
  const subtextColorClass = 'text-muted-foreground'
  const ctaClass = 'bg-primary text-primary-foreground'
  const menuBgClass = 'bg-card/95 border-border'
  const heroCtaStyle = onHero ? { backgroundColor: '#C9A063', color: '#FFFFFF' } : undefined

  return (
    <header className="absolute inset-x-0 top-0 z-50">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-5 md:px-10 md:py-7">
        <a href="#" className="flex flex-col leading-none">
          <span className={`font-serif text-xl font-semibold tracking-tight ${textColorClass} md:text-2xl`}>
            Карина Кашина
          </span>
          <span className={`mt-0.5 text-[11px] uppercase tracking-[0.22em] ${subtextColorClass}`}>
            Access Consciousness
          </span>
        </a>

        <nav className="hidden items-center gap-8 lg:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`text-sm transition-colors ${linkColorClass}`}
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href="#contact"
            className={`hidden rounded-full px-6 py-3 text-sm font-medium md:inline-block ${onHero ? '' : ctaClass}`}
            style={heroCtaStyle}
          >
            Записаться на сессию
          </a>
          <button
            type="button"
            aria-label="Меню"
            onClick={() => setOpen((v) => !v)}
            className="rounded-full p-2.5 backdrop-blur lg:hidden border-border bg-card/70 text-foreground"
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </div>

      {open && (
        <div className={`mx-4 rounded-2xl p-4 shadow-lg backdrop-blur lg:hidden ${menuBgClass} border-border`}>
          <nav className="flex flex-col">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="rounded-lg px-3 py-3 text-sm text-foreground/90 hover:bg-secondary"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className={`mt-2 rounded-full px-6 py-3 text-center text-sm font-medium ${ctaClass}`}
            >
              Записаться на сессию
            </a>
          </nav>
        </div>
      )}
    </header>
  )
}

import Image from "next/image"
import Link from "next/link"
import { Phone } from "lucide-react"
import { buttonVariants } from "@/components/ui/button"
import { company, nav } from "@/lib/content"

function Logo({ className, imgClassName }: { className?: string; imgClassName?: string }) {
  return (
    <Link href="#hero" className={className} aria-label={company.name}>
      <Image
        src="/images/pln-logo.png"
        alt={`${company.name} — ${company.tagline}`}
        width={300}
        height={60}
        priority
        className={imgClassName ?? "h-10 w-auto lg:h-12"}
      />
    </Link>
  )
}

export function SiteHeader() {
  return (
    <header className="relative z-50 lg:absolute lg:inset-x-0 lg:top-0">
      {/* Мобильная версия: в потоке, логотип во всю ширину сверху, кнопка по центру ниже */}
      <div className="flex flex-col items-center gap-4 bg-ink px-6 py-6 lg:hidden">
        <Logo className="block w-full max-w-[300px]" imgClassName="h-auto w-full" />
        <Link
          href={company.whatsapp}
          target="_blank"
          rel="noopener noreferrer"
          className={buttonVariants({
            size: "lg",
            className: "rounded-full bg-gold px-6 text-gold-foreground hover:bg-gold/90",
          })}
        >
          <Phone className="size-4" />
          Связаться с нами
        </Link>
      </div>

      {/* Десктоп версия */}
      <div className="mx-auto hidden max-w-7xl items-center justify-between px-6 py-5 lg:flex lg:px-8">
        <Logo className="flex items-center" />

        <nav className="flex items-center gap-8">
          {nav.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="text-sm text-ink-foreground/80 transition-colors hover:text-gold"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <Link
          href={company.whatsapp}
          target="_blank"
          rel="noopener noreferrer"
          className={buttonVariants({
            size: "lg",
            className: "rounded-full bg-gold px-5 text-gold-foreground hover:bg-gold/90 lg:translate-x-3",
          })}
        >
          <Phone className="size-4" />
          Связаться с нами
        </Link>
      </div>
    </header>
  )
}

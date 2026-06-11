import Image from "next/image"
import Link from "next/link"
import { Phone } from "lucide-react"
import { buttonVariants } from "@/components/ui/button"
import { company, nav } from "@/lib/content"

function Logo() {
  return (
    <Link href="#hero" className="flex items-center" aria-label={company.name}>
      <Image
        src="/images/pln-logo.png"
        alt={`${company.name} — ${company.tagline}`}
        width={300}
        height={60}
        priority
        className="h-10 w-auto lg:h-12"
      />
    </Link>
  )
}

export function SiteHeader() {
  return (
    <header className="absolute inset-x-0 top-0 z-50">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 lg:px-8">
        <Logo />

        <nav className="hidden items-center gap-8 lg:flex">
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
            className: "rounded-full bg-gold px-5 text-gold-foreground hover:bg-gold/90",
          })}
        >
          <Phone className="size-4" />
          Связаться с нами
        </Link>
      </div>
    </header>
  )
}

import Image from "next/image"
import Link from "next/link"
import { Mail, MapPin, Phone } from "lucide-react"
import { buttonVariants } from "@/components/ui/button"
import { company, footer } from "@/lib/content"

function FacebookIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M14 13.5h2.5l1-4H14v-2c0-1.03 0-2 2-2h1.5V2.14c-.326-.043-1.557-.14-2.857-.14C11.928 2 10 3.657 10 6.7v2.8H7v4h3V22h4v-8.5Z" />
    </svg>
  )
}

function LinkedinIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M6.94 5a2 2 0 1 1-4-.002 2 2 0 0 1 4 .002ZM7 8.48H3V21h4V8.48Zm6.32 0H9.34V21h3.94v-6.57c0-3.66 4.77-4 4.77 0V21H22v-7.93c0-6.17-7.06-5.94-8.72-2.91l.04-1.68Z" />
    </svg>
  )
}

function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
      <rect x="2" y="2" width="20" height="20" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <line x1="17.5" y1="6.5" x2="17.5" y2="6.5" />
    </svg>
  )
}

export function SiteFooter() {
  return (
    <footer id="contacts" className="bg-ink text-ink-foreground">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
          {/* Бренд */}
          <div className="lg:col-span-4">
            <Image
              src="/images/pln-logo.png"
              alt={`${company.name} — ${company.tagline}`}
              width={300}
              height={60}
              className="h-11 w-auto"
            />
            <p className="mt-5 max-w-xs whitespace-pre-line text-sm leading-relaxed text-ink-foreground/55">
              {company.taglineFull}
            </p>
          </div>

          {/* Навигация */}
          <div className="lg:col-span-2">
            <h3 className="text-sm font-semibold text-gold">{footer.navTitle}</h3>
            <ul className="mt-4 space-y-3 text-sm text-ink-foreground/65">
              {footer.nav.map((item) => (
                <li key={item}>
                  <Link href="#hero" className="transition-colors hover:text-gold">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Услуги */}
          <div className="lg:col-span-2">
            <h3 className="text-sm font-semibold text-gold">{footer.servicesTitle}</h3>
            <ul className="mt-4 space-y-3 text-sm text-ink-foreground/65">
              {footer.services.map((item) => (
                <li key={item}>
                  <Link href="#services" className="transition-colors hover:text-gold">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Контакты */}
          <div className="lg:col-span-4">
            <h3 className="text-sm font-semibold text-gold">{footer.contactsTitle}</h3>
            <ul className="mt-4 space-y-4 text-sm text-ink-foreground/65">
              <li className="flex items-center gap-3">
                <Phone className="size-4 text-gold" />
                <a href={`tel:${company.phone.replace(/\s/g, "")}`} className="hover:text-gold">
                  {company.phone}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="size-4 text-gold" />
                <a href={`mailto:${company.email}`} className="hover:text-gold">
                  {company.email}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <MapPin className="size-4 text-gold" />
                {company.location}
              </li>
            </ul>

            <div className="mt-6 flex items-center justify-between gap-4">
              <Link
                href={company.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className={buttonVariants({
                  className: "rounded-full bg-gold px-5 text-gold-foreground hover:bg-gold/90",
                })}
              >
                {footer.ctaTitle}
              </Link>
              <div className="flex items-center gap-3">
                {[FacebookIcon, LinkedinIcon, InstagramIcon].map((Icon, i) => (
                  <Link
                    key={i}
                    href="#"
                    aria-label="Социальная сеть"
                    className="flex size-9 items-center justify-center rounded-full border border-ink-foreground/20 text-ink-foreground/70 transition-colors hover:border-gold hover:text-gold"
                  >
                    <Icon className="size-4" />
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="mt-14 border-t border-ink-foreground/10 pt-6 text-center text-xs text-ink-foreground/40">
          © {new Date().getFullYear()} {company.name}. Все права защищены.
        </div>
      </div>
    </footer>
  )
}

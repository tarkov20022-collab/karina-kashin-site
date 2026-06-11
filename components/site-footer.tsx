import Image from "next/image"
import Link from "next/link"
import { Mail, MapPin, Phone } from "lucide-react"
import { buttonVariants } from "@/components/ui/button"
import { company, footer } from "@/lib/content"

function WhatsappIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21h.01c5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.82 9.82 0 0 0 12.04 2Zm0 18.15h-.01c-1.48 0-2.93-.4-4.2-1.15l-.3-.18-3.12.82.83-3.04-.2-.31a8.23 8.23 0 0 1-1.26-4.38c0-4.54 3.7-8.24 8.25-8.24 2.2 0 4.27.86 5.83 2.42a8.2 8.2 0 0 1 2.41 5.83c0 4.54-3.7 8.24-8.24 8.24Zm4.52-6.16c-.25-.12-1.47-.72-1.69-.81-.23-.08-.39-.12-.56.13-.16.25-.64.81-.79.97-.14.17-.29.19-.54.06-.25-.12-1.05-.39-1.99-1.23-.74-.66-1.23-1.47-1.38-1.72-.14-.25-.01-.38.11-.51.11-.11.25-.29.37-.43.13-.14.17-.25.25-.41.08-.17.04-.31-.02-.43-.06-.12-.56-1.34-.76-1.84-.2-.48-.4-.42-.56-.43h-.48c-.17 0-.43.06-.66.31-.22.25-.86.85-.86 2.07 0 1.22.89 2.4 1.01 2.56.12.17 1.75 2.67 4.23 3.74.59.26 1.05.41 1.41.52.59.19 1.13.16 1.56.1.48-.07 1.47-.6 1.67-1.18.21-.58.21-1.07.15-1.18-.06-.1-.22-.16-.47-.28Z" />
    </svg>
  )
}

function TwoGisIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M12 2C7.86 2 4.5 5.36 4.5 9.5c0 5.06 6.5 11.96 6.78 12.25.39.4 1.05.4 1.44 0C13 21.46 19.5 14.56 19.5 9.5 19.5 5.36 16.14 2 12 2Zm0 10.25a2.75 2.75 0 1 1 0-5.5 2.75 2.75 0 0 1 0 5.5Z" />
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

const socials = [
  { Icon: InstagramIcon, href: company.instagram, label: "Instagram" },
  { Icon: WhatsappIcon, href: company.whatsapp, label: "WhatsApp" },
  { Icon: TwoGisIcon, href: company.twogis, label: "2ГИС" },
]

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
              width={2100}
              height={420}
              className="h-auto w-full max-w-[420px]"
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
                {socials.map(({ Icon, href, label }) => (
                  <Link
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    className="flex size-9 items-center justify-center rounded-full border border-ink-foreground/20 text-ink-foreground/70 transition-colors hover:border-gold hover:text-gold"
                  >
                    <Icon className="size-4" />
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-center gap-2 border-t border-ink-foreground/10 pt-6 text-center text-xs text-ink-foreground/40">
          <p className="text-gold/70">{company.contractNote}</p>
          <p>© {new Date().getFullYear()} {company.name}. Все права защищены.</p>
        </div>
      </div>
    </footer>
  )
}

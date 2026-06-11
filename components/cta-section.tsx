import Link from "next/link"
import { ArrowUpRight } from "lucide-react"
import { buttonVariants } from "@/components/ui/button"
import { company, cta } from "@/lib/content"

export function CtaSection() {
  return (
    <section id="blog" className="bg-secondary py-16 lg:py-20">
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-6 lg:grid-cols-2 lg:px-8">
        <div>
          <p className="text-base font-medium text-foreground/70">{cta.eyebrow}</p>
          <h2 className="mt-2 text-balance font-serif text-3xl font-bold tracking-tight text-gold sm:text-4xl">
            {cta.title}
          </h2>
          <p className="mt-6 max-w-md text-pretty leading-relaxed text-muted-foreground">
            {cta.description}
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-x-8 gap-y-4">
            <Link
              href={company.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className={buttonVariants({
                size: "lg",
                className: "rounded-full bg-gold px-7 text-gold-foreground hover:bg-gold/90",
              })}
            >
              {cta.primaryCta}
              <ArrowUpRight className="size-4" />
            </Link>
            <Link
              href="#services"
              className="group flex items-center gap-2 text-sm font-medium text-foreground transition-colors hover:text-gold"
            >
              {cta.secondaryCta}
              <span className="flex h-8 w-12 items-center justify-center rounded-full border border-border transition-colors group-hover:border-gold">
                <ArrowUpRight className="size-4" />
              </span>
            </Link>
          </div>
        </div>

        <div className="overflow-hidden rounded-2xl">
          <img
            src="/images/team.jpg"
            alt="Команда PLN Company за работой"
            className="h-72 w-full object-cover object-[center_25%] lg:h-96"
          />
        </div>
      </div>
    </section>
  )
}

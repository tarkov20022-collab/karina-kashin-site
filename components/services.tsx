import {
  BarChart3,
  Briefcase,
  Building2,
  FileText,
  Globe,
  MessageCircle,
} from "lucide-react"
import { services } from "@/lib/content"

const serviceIcons = {
  "bar-chart": BarChart3,
  building: Building2,
  globe: Globe,
  "file-text": FileText,
  briefcase: Briefcase,
  "message-circle": MessageCircle,
} as const

export function Services() {
  return (
    <section id="services" className="bg-background py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-semibold tracking-[0.2em] text-gold">
            {services.eyebrow}
          </p>
          <h2 className="mt-2 text-balance font-serif text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            {services.title}
          </h2>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.items.map((item) => {
            const Icon = serviceIcons[item.icon as keyof typeof serviceIcons]
            return (
              <article
                key={item.title}
                className="group rounded-xl border border-border bg-card p-7 shadow-sm transition-all hover:-translate-y-1 hover:border-gold/40 hover:shadow-md"
              >
                <span className="flex size-14 items-center justify-center rounded-lg bg-secondary text-gold transition-colors group-hover:bg-gold group-hover:text-gold-foreground">
                  <Icon className="size-7" />
                </span>
                <h3 className="mt-6 text-lg font-semibold text-foreground">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {item.text}
                </p>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}

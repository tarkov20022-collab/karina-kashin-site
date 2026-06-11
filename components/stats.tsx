import { ClipboardCheck, Clock, ShieldCheck, Users } from "lucide-react"
import { stats } from "@/lib/content"

const statIcons = {
  users: Users,
  clock: Clock,
  "clipboard-check": ClipboardCheck,
  "shield-check": ShieldCheck,
} as const

export function Stats() {
  return (
    <section
      id="stats"
      className="relative isolate overflow-hidden bg-ink py-16 text-ink-foreground lg:py-20"
    >
      <div className="absolute inset-0 -z-10">
        <img
          src="/images/marble-dark.png"
          alt=""
          aria-hidden="true"
          className="h-full w-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-ink/70" />
      </div>

      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-x-8 gap-y-12 px-6 sm:grid-cols-2 lg:grid-cols-4 lg:divide-x lg:divide-ink-foreground/10 lg:px-8">
        {stats.map((s) => {
          const Icon = statIcons[s.icon as keyof typeof statIcons]
          return (
            <div key={s.label} className="px-2 text-center lg:px-6">
              <div className="flex items-center justify-center gap-3">
                <Icon className="size-7 text-gold" />
                <span className="font-serif text-4xl font-bold text-gold lg:text-5xl">
                  {s.value}
                </span>
              </div>
              <p className="mt-3 text-sm font-semibold text-ink-foreground">
                {s.label}
              </p>
              <p className="mt-1 text-xs text-ink-foreground/55">{s.sub}</p>
            </div>
          )
        })}
      </div>
    </section>
  )
}

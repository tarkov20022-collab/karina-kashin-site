import { Check } from "lucide-react"
import { about } from "@/lib/content"

export function About() {
  return (
    <section id="about" className="bg-background py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Заголовок */}
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-xs font-semibold tracking-[0.2em] text-gold">
            {about.eyebrow}
          </p>
          <h2 className="mt-3 text-balance font-serif text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            {about.title}
          </h2>
          <p className="mt-5 text-pretty text-lg font-medium text-foreground/80">
            {about.lead}
          </p>
          <div className="mt-6 space-y-4">
            {about.paragraphs.map((p) => (
              <p key={p} className="text-pretty leading-relaxed text-muted-foreground">
                {p}
              </p>
            ))}
          </div>
        </div>

        {/* Что берем на себя + Для кого */}
        <div className="mt-16 grid grid-cols-1 gap-8 lg:grid-cols-2">
          <div className="rounded-2xl border border-border bg-card p-8 shadow-sm">
            <h3 className="font-serif text-2xl font-bold text-foreground">
              {about.doTitle}
            </h3>
            <ul className="mt-6 space-y-3">
              {about.doItems.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full bg-gold/15 text-gold">
                    <Check className="size-3.5" />
                  </span>
                  <span className="text-sm leading-relaxed text-foreground/85">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex flex-col gap-8">
            <div className="rounded-2xl border border-border bg-card p-8 shadow-sm">
              <h3 className="font-serif text-2xl font-bold text-foreground">
                {about.forTitle}
              </h3>
              <div className="mt-6 flex flex-wrap gap-3">
                {about.forItems.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-border bg-secondary px-4 py-1.5 text-sm text-foreground/80"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>

            <div className="rounded-2xl border border-gold/30 bg-ink p-8 text-ink-foreground shadow-sm">
              <h3 className="font-serif text-2xl font-bold text-gold">
                {about.trustTitle}
              </h3>
              <div className="mt-5 space-y-4">
                {about.trustParagraphs.map((p) => (
                  <p key={p} className="text-sm leading-relaxed text-ink-foreground/75">
                    {p}
                  </p>
                ))}
              </div>
            </div>
          </div>
        </div>

        <p className="mx-auto mt-14 max-w-3xl text-balance text-center text-base leading-relaxed text-muted-foreground">
          {about.closing}
        </p>
      </div>
    </section>
  )
}

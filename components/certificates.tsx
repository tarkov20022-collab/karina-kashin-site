import Image from "next/image"
import { certificates } from "@/lib/content"

export function Certificates() {
  return (
    <section id="certificates" className="bg-secondary py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-semibold tracking-[0.2em] text-gold">
            {certificates.eyebrow}
          </p>
          <h2 className="mt-3 text-balance font-serif text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            {certificates.title}
          </h2>
          <p className="mt-5 text-pretty leading-relaxed text-muted-foreground">
            {certificates.description}
          </p>
        </div>

        <div className="mx-auto mt-14 grid max-w-4xl grid-cols-1 gap-8 sm:grid-cols-2">
          {certificates.items.map((cert) => (
            <figure
              key={cert.title}
              className="group overflow-hidden rounded-2xl border border-border bg-card shadow-sm transition-all hover:-translate-y-1 hover:border-gold/40 hover:shadow-md"
            >
              <div className="relative aspect-[3/4] overflow-hidden bg-muted">
                <Image
                  src={cert.image || "/placeholder.svg"}
                  alt={`Сертификат — ${cert.title}`}
                  fill
                  sizes="(min-width: 640px) 50vw, 100vw"
                  className="object-contain p-3 transition-transform duration-300 group-hover:scale-[1.02]"
                />
              </div>
              <figcaption className="border-t border-border p-6">
                <h3 className="text-lg font-semibold text-foreground">{cert.title}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{cert.issuer}</p>
                <p className="mt-2 text-xs font-medium tracking-wide text-gold">
                  {cert.year}
                </p>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}

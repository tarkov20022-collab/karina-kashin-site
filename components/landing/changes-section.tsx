import { X, Check, ArrowRight } from 'lucide-react'

const leaves = ['Тревога', 'Внутренний шум', 'Усталость', 'Страхи', 'Сомнения', 'Напряжение']
const arrives = [
  'Спокойствие',
  'Ясность мышления',
  'Лёгкость',
  'Энергия',
  'Уверенность',
  'Новые идеи и возможности',
]

export function ChangesSection() {
  return (
    <section id="changes" className="bg-secondary py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-5 md:px-10">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[1fr_1.4fr]">
          <h2 className="font-serif text-3xl font-medium leading-tight text-foreground md:text-4xl text-balance">
            Какие изменения замечают мои клиенты
          </h2>

          <div className="grid grid-cols-1 gap-10 sm:grid-cols-2">
            <div>
              <span className="text-[11px] uppercase tracking-[0.24em] text-muted-foreground">
                Что уходит
              </span>
              <ul className="mt-6 space-y-4">
                {leaves.map((item) => (
                  <li key={item} className="flex items-center gap-3 text-[15px] text-foreground/90">
                    <span className="flex size-6 items-center justify-center rounded-full border border-border text-muted-foreground">
                      <X className="size-3.5" />
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="relative">
              <span className="absolute -left-5 top-1/2 hidden -translate-y-1/2 text-accent sm:block">
                <ArrowRight className="size-5" />
              </span>
              <span className="text-[11px] uppercase tracking-[0.24em] text-muted-foreground">
                Что появляется
              </span>
              <ul className="mt-6 space-y-4">
                {arrives.map((item) => (
                  <li key={item} className="flex items-center gap-3 text-[15px] font-medium text-foreground">
                    <span className="flex size-6 items-center justify-center rounded-full bg-accent text-accent-foreground">
                      <Check className="size-3.5" />
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

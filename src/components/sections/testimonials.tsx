import { Star, Quote } from "lucide-react";
import { SectionHeading } from "@/components/section-heading";
import { testimonials } from "@/lib/data";

export function Testimonials() {
  return (
    <section
      id="testimonials"
      aria-labelledby="testimonials-title"
      className="py-16 md:py-24"
    >
      <div className="container-site">
        <SectionHeading
          eyebrow="Отзывы"
          title={
            <>
              Что говорят <span className="accent">клиенты</span>
            </>
          }
        />

        <ul
          role="list"
          className="mt-12 grid gap-6 md:grid-cols-3"
        >
          {testimonials.map((t) => (
            <li key={t.id}>
              <figure className="flex h-full flex-col gap-4 rounded-2xl border border-border/60 bg-card p-6 shadow-sm">
                <div className="flex items-center justify-between">
                  <div
                    className="flex gap-0.5"
                    role="img"
                    aria-label={`Оценка ${t.rating} из 5`}
                  >
                    {Array.from({ length: t.rating }).map((_, i) => (
                      <Star
                        key={i}
                        className="size-4 fill-primary text-primary"
                        aria-hidden
                      />
                    ))}
                  </div>
                  <Quote
                    className="size-6 text-primary/30"
                    aria-hidden
                  />
                </div>
                <blockquote className="flex-1 text-sm leading-relaxed text-foreground/85 text-pretty md:text-base">
                  {t.quote}
                </blockquote>
                <figcaption className="flex items-center gap-3 border-t border-border/60 pt-4">
                  <div className="grid size-11 place-items-center rounded-full bg-primary/10 font-serif text-lg font-semibold text-primary">
                    {t.initials}
                  </div>
                  <div className="flex flex-col">
                    <span className="text-sm font-semibold">{t.name}</span>
                    <span className="text-xs text-muted-foreground">
                      {t.category}
                    </span>
                  </div>
                </figcaption>
              </figure>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

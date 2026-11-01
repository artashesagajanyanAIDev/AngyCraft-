import Image from "next/image";
import { Check } from "lucide-react";

const advantages = [
  "Натуральный гипс премиум-качества",
  "Экологичные и безопасные материалы",
  "Индивидуальный подход к каждому",
];

export function About() {
  return (
    <section
      id="about"
      aria-labelledby="about-title"
      className="py-16 md:py-24"
    >
      <div className="container-site grid items-center gap-10 md:gap-14 lg:grid-cols-2">
        {/* Visual */}
        <div className="relative">
          <div className="relative mx-auto aspect-[6/6] w-full max-w-md overflow-hidden rounded-[2rem] border border-border/60 bg-card shadow-[0_30px_60px_-30px_oklch(0.68_0.118_12/0.35)] ">
            <Image
              src="/images/about1.jpg"
              alt="Процесс создания гипсовых изделий ручной работы в мастерской ЭнджиКрафт"
              fill
              loading="lazy"
              quality={70}
              sizes="(min-width: 1024px) 45vw, (min-width: 768px) 70vw, 90vw"
              className="object-cover"
            />
            <div
              aria-hidden
              className="pointer-events-none absolute inset-0 bg-gradient-to-t from-foreground/15 via-transparent to-transparent"
            />
          </div>
          <div className="absolute -bottom-5 left-6 rounded-full border border-border/60 bg-background px-5 py-2 text-sm font-medium shadow-md">
            с 2021 года
          </div>
          <div
            aria-hidden
            className="pointer-events-none absolute -right-4 -top-4 size-24 rounded-full bg-rose-soft blur-2xl"
          />
        </div>

        {/* Content */}
        <div className="flex flex-col items-start gap-5">
          <span className="inline-flex items-center gap-2 rounded-full bg-accent/70 px-3.5 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-accent-foreground">
            <span className="size-1.5 rounded-full bg-primary" aria-hidden />
            О бренде
          </span>
          <h2
            id="about-title"
            className="font-serif text-3xl font-semibold leading-[1.1] text-balance sm:text-4xl md:text-5xl"
          >
            История бренда <span className="accent">ЭнджиКрафт</span>
          </h2>
          <div className="space-y-4 text-base leading-relaxed text-muted-foreground text-pretty md:text-lg">
            <p>
              ЭнджиКрафт родился из любви к творчеству и нежным деталям. Мы
              создаём гипсовые изделия, которые становятся тёплым акцентом в
              интерьере и душевным подарком для близких.
            </p>
            <p>
              Каждый мастер-класс — это возможность прикоснуться к искусству,
              создать свою уникальную вещь и провести время в атмосфере уюта и
              вдохновения.
            </p>
          </div>
          <ul className="mt-2 w-full space-y-3">
            {advantages.map((item) => (
              <li
                key={item}
                className="flex items-center gap-3 text-sm font-medium text-foreground sm:text-base"
              >
                <span className="grid size-6 shrink-0 place-items-center rounded-full bg-primary/10 text-primary">
                  <Check className="size-3.5" aria-hidden />
                </span>
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

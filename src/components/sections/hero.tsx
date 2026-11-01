import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";

const stats = [
  { num: "500+", label: "изделий создано" },
  { num: "120+", label: "счастливых учеников" },
  { num: "100%", label: "ручная работа" },
];

export function Hero() {
  return (
    <section
      id="hero"
      aria-labelledby="hero-title"
      className="relative overflow-hidden bg-soft-gradient"
    >
      {/* Decorative blurs */}
      <div
        aria-hidden
        className="pointer-events-none absolute -top-24 -right-24 hidden size-72 rounded-full bg-primary/15 blur-3xl md:block md:size-96"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute top-40 -left-32 hidden size-72 rounded-full bg-rose-soft blur-3xl md:block md:size-96"
      />

      <div className="container-site relative py-14 md:py-20 lg:py-24">
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-12">
          {/* Content */}
          <div className="order-2 lg:order-1">
            <span className="inline-flex items-center gap-2 rounded-full border border-border/70 bg-background/70 px-3.5 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-foreground/70 backdrop-blur">
              <Heart className="size-3.5 text-primary" aria-hidden />
              Свечи  · Гипсовые Изделия · Мастер-Классы
            </span>

            <h1
              id="hero-title"
              className="mt-5 font-serif text-4xl font-semibold leading-[1.05] text-balance sm:text-5xl md:text-6xl lg:text-[4.25rem]"
            >
              Гипсовая нежность,
              <br className="hidden sm:block" /> созданная{" "}
              <span className="accent">вручную</span>
            </h1>

            <p className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground text-pretty md:text-lg">
              ЭнджиКрафт — место, где рождаются идеи, вдохновение превращается в красоту, 
              а каждый момент становится особенным! Создаём с любовью, вкладываем душу в каждое изделие.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
              <Button asChild size="lg" className="rounded-full">
                <Link href="#products">
                  Смотреть каталог
                  <ArrowRight className="size-4" />
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="rounded-full border-primary/30 bg-background/60 hover:bg-accent/60"
              >
                <Link href="#masterclass">Записаться на МК</Link>
              </Button>
            </div>

            {/* Stats */}
            <dl className="mt-10 grid max-w-md grid-cols-3 gap-4 border-t border-border/60 pt-6">
              {stats.map((s) => (
                <div key={s.label} className="flex flex-col gap-1">
                  <dt className="sr-only">{s.label}</dt>
                  <dd className="font-serif text-2xl font-semibold text-primary sm:text-3xl">
                    {s.num}
                  </dd>
                  <dd className="text-xs leading-tight text-muted-foreground sm:text-sm">
                    {s.label}
                  </dd>
                </div>
              ))}
            </dl>
          </div>

          {/* Visual */}
          <div className="order-1 lg:order-2">
            <div className="relative mx-auto flex w-full max-w-[280px] gap-3 sm:max-w-lg sm:gap-6 lg:max-w-none">
              <div className="relative min-w-0 flex-1 aspect-[4/3] overflow-hidden rounded-2xl rounded-tr-[2rem] border border-border/60 bg-card shadow-[0_30px_60px_-30px_oklch(0.68_0.118_12/0.4)] sm:aspect-[3/4]">
                <Image
                  src="/images/hero-main1.jpg"
                  alt="Гипсовые изделия ЭнджиКрафт — нежный декор ручной работы"
                  fill
                  preload
                  quality={75}
                  sizes="(min-width: 1280px) 300px, (min-width: 1024px) 24vw, (min-width: 640px) 256px, 280px"
                  className="object-cover"
                />
              </div>
              <div className="relative hidden min-w-0 flex-1 aspect-[3/4] overflow-hidden rounded-2xl rounded-tr-[2rem] border border-border/60 bg-card shadow-[0_30px_60px_-30px_oklch(0.68_0.118_12/0.4)] sm:block">
                <Image
                  src="/images/hero-sub1.jpg"
                  alt="Декор ручной работы — крупный план гипсового изделия"
                  fill
                  loading="lazy"
                  quality={75}
                  sizes="(min-width: 1280px) 300px, (min-width: 1024px) 24vw, 256px"
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Wave divider */}
      <div className="hero-wave" aria-hidden />
    </section>
  );
}

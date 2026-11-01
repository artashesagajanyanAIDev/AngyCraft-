import Image from "next/image";
import Link from "next/link";
import { Clock, Palette, Gift, ArrowRight, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { masterclassFeatures, masterclassPlans } from "@/lib/data";
import { cn } from "@/lib/utils";
import type { LucideIcon } from "lucide-react";

const ICONS: Record<string, LucideIcon> = {
  Clock,
  Palette,
  Gift,
};

function formatPrice(n: number) {
  return new Intl.NumberFormat("ru-RU", {
    useGrouping: true,
    maximumFractionDigits: 0,
  }).format(n);
}

export function Masterclass() {
  return (
    <section
      id="masterclass"
      aria-labelledby="mc-title"
      className="py-16 md:py-24"
    >
      <div className="container-site grid items-start gap-12 lg:grid-cols-2 lg:gap-16">
        {/* Content */}
        <div className="order-2 lg:order-1">
          <span className="inline-flex items-center gap-2 rounded-full bg-accent/70 px-3.5 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-accent-foreground">
            <span className="size-1.5 rounded-full bg-primary" aria-hidden />
            Мастер-классы
          </span>
          <h2
            id="mc-title"
            className="mt-5 font-serif text-3xl font-semibold leading-[1.1] text-balance sm:text-4xl md:text-5xl"
          >
            Создайте красоту <br />
            <span className="accent">своими руками</span>
          </h2>
          <p className="mt-5 max-w-xl whitespace-pre-line text-base leading-relaxed text-muted-foreground text-pretty md:text-md">
            Приглашаем вас погрузиться в атмосферу творчества, уюта и вдохновения!
            Многие думают, что гипс - это просто белый и хрупкий материал...  <br/>          
            На наших мастер-классах мы доказываем, как своими руками превратить его в стильный, прочный и эстетичный декор!
          </p>

          {/* Features */}
          <ul role="list" className="mt-8 grid gap-4 sm:grid-cols-3">
            {masterclassFeatures.map((f) => {
              const Icon = ICONS[f.icon] ?? Star;
              return (
                <li
                  key={f.title}
                  className="flex flex-col gap-3 rounded-2xl border border-border/60 bg-card p-4"
                >
                  <span className="grid size-10 place-items-center rounded-xl bg-primary/10 text-primary">
                    <Icon className="size-5" aria-hidden />
                  </span>
                  <div>
                    <h3 className="font-serif text-base font-semibold">
                      {f.title}
                    </h3>
                    <p className="text-xs text-muted-foreground">
                      {f.description}
                    </p>
                  </div>
                </li>
              );
            })}
          </ul>

          {/* Pricing */}
          <div className="mt-8 grid gap-4 sm:grid-cols-3">
            {masterclassPlans.map((plan) => (
              <div
                key={plan.id}
                className={cn(
                  "relative flex flex-col gap-1 rounded-2xl border p-5 transition-colors",
                  plan.featured
                    ? "border-primary/40 bg-primary/[0.04] shadow-[0_20px_40px_-25px_oklch(0.68_0.118_12/0.5)]"
                    : "border-border/60 bg-card"
                )}
              >
                {plan.badge && (
                  <span className="absolute -top-3 left-5 rounded-full bg-primary px-3 py-1 text-xs font-semibold text-primary-foreground shadow-md">
                    {plan.badge}
                  </span>
                )}
                <h3 className="font-serif text-lg font-semibold">
                  {plan.name}
                </h3>
                <div className="mt-1 font-serif text-2xl font-semibold text-primary">
                  {formatPrice(plan.price)} ₽
                </div>
                <p className="mt-1 text-sm text-muted-foreground">
                  {plan.description}
                </p>
              </div>
            ))}
          </div>

          <Button asChild size="lg" className="mt-8 rounded-full">
            <Link href="#contacts">
              Записаться на мастер-класс
              <ArrowRight className="size-4" />
            </Link>
          </Button>
        </div>

        {/* Visual */}
        <div className="order-1 lg:order-2 -mt-0 lg:mt-5">
          <div className="relative mx-auto grid w-full max-w-md gap-4 lg:max-w-none lg:grid-cols-2">
            <div className="relative aspect-[4/6] overflow-hidden rounded-[2rem] rounded-tr-[2rem] border border-border/60 bg-card shadow-[0_30px_60px_-30px_oklch(0.68_0.118_12/0.4)]">
              <Image
                src="/images/masterclassMain.jpg"
                alt="Мастер-класс по гипсу — творческая атмосфера студии ЭнджиКрафт"
                fill
                loading="lazy"
                quality={70}
                sizes="(min-width: 1024px) 25vw, (min-width: 768px) 60vw, 90vw"
                className="object-cover"
              />
            </div>
            <div className="relative aspect-[4/6] overflow-hidden rounded-[2rem] rounded-bl-[2rem] border border-border/60 bg-card shadow-lg">
              <Image
                src="/images/masterclassSub.jpg"
                alt="Процесс создания гипсового изделия — крупный план"
                fill
                loading="lazy"
                quality={70}
                sizes="(min-width: 1024px) 25vw, (min-width: 768px) 60vw, 90vw"
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

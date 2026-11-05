import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export function CtaBand() {
  return (
    <section
      aria-labelledby="cta-title"
      className="bg-rose-veil py-16 md:py-20"
    >
      <div className="container-site">
        <div className="mx-auto flex max-w-3xl flex-col items-center gap-5 rounded-3xl border border-border/60 bg-card/70 px-6 py-10 text-center shadow-sm backdrop-blur-sm md:px-12 md:py-14">
          <h2
            id="cta-title"
            className="font-serif text-3xl font-semibold leading-[1.1] text-balance sm:text-4xl md:text-5xl"
          >
            Готовы создать что-то{" "}
            <span className="accent">особенное</span>?
          </h2>
          <p className="max-w-xl text-base leading-relaxed text-muted-foreground text-pretty md:text-lg">
            Закажите изделие или запишитесь на мастер-класс уже сегодня.
          </p>
          <Button asChild size="lg" className="mt-3 rounded-full px-8 py-6 text-base">
            <Link href="#contacts">
              Связаться с нами
              <ArrowRight className="size-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}

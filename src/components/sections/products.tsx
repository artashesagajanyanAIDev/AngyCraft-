import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { SectionHeading } from "@/components/section-heading";
import { products, formatPriceFrom } from "@/lib/data";
import { cn } from "@/lib/utils";

const tagLabel: Record<string, string> = {
  hit: "Хит продаж",
  new: "Новинка",
};

type Product = (typeof products)[number];

function getPrimaryImage(product: Product): string {
  const raw = (
    product as {
      images?: Array<string | { src: string; alt?: string }>;
    }
  ).images;

  const first = Array.isArray(raw)
    ? raw.find((item) =>
        typeof item === "string" ? Boolean(item) : Boolean(item?.src)
      )
    : undefined;

  if (first) return typeof first === "string" ? first : first.src;
  return product.image;
}

export function Products() {
  // Показываем первые 5 товаров на главной странице.
  const featuredProducts = products.slice(0, 5);

  return (
    <section
      id="products"
      aria-labelledby="products-title"
      className="bg-secondary/40 py-12 md:py-16"
    >
      <div className="container-site">
        <SectionHeading
          eyebrow="Каталог"
          title={
            <>
              Наши <span className="accent">изделия</span>
            </>
          }
          subtitle="Авторские гипсовые работы, доступные к заказу"
        />

        {/* На мобильных — слайдер, на компьютере — сетка */}
        <ul
          role="list"
          aria-label="Товары каталога"
          className="mt-8 flex snap-x snap-mandatory gap-4 overflow-x-auto pb-4 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden md:grid md:grid-cols-3 md:overflow-visible md:pb-0 lg:grid-cols-4 xl:grid-cols-5"
        >
          {featuredProducts.map((p) => (
            <li
              key={p.id}
              className="group relative flex w-full min-w-0 flex-none snap-start flex-col overflow-hidden rounded-2xl border border-border/60 bg-card shadow-sm transition-shadow duration-300 hover:shadow-lg sm:w-[48%] md:w-auto"
            >
              <div className="relative aspect-[4/5] overflow-hidden bg-secondary/50">
                <Image
                  src={getPrimaryImage(p)}
                  alt={p.alt}
                  fill
                  loading="lazy"
                  quality={75}
                  sizes="(min-width: 1280px) 20vw, (min-width: 1024px) 25vw, (min-width: 768px) 33vw, (min-width: 640px) 48vw, 88vw"
                  className="object-cover"
                />

                {p.tag && (
                  <Badge
                    className={cn(
                      "absolute left-2 top-2 z-20 rounded-full px-2 py-0.5 text-[10px] font-semibold shadow-md sm:text-xs",
                      p.tag === "new"
                        ? "bg-foreground/85 text-background hover:bg-foreground/85"
                        : "bg-primary text-primary-foreground hover:bg-primary"
                    )}
                  >
                    {tagLabel[p.tag] ?? p.tag}
                  </Badge>
                )}
              </div>

              <div className="flex flex-1 flex-col gap-2 p-4">
                <h3 className="line-clamp-2 min-h-10 font-serif text-base font-semibold leading-tight uppercase lg:text-[15px]">
                  {p.name}
                </h3>

                <p className="line-clamp-2 min-h-8 text-sm text-muted-foreground">
                  {p.description}
                </p>

                <div className="mt-auto flex flex-col gap-2 border-t border-border/60 pt-3">
                  <span className="text-base font-semibold text-primary">
                    {formatPriceFrom(p.priceFrom)}
                  </span>

                  <Button
                    asChild
                    size="sm"
                    variant="outline"
                    className="h-9 w-full rounded-full px-3 text-sm"
                  >
                    <Link
                      href="#contacts"
                      aria-label={`Заказать: ${p.name}`}
                    >
                      Заказать
                      <ArrowUpRight className="size-3.5" />
                    </Link>
                  </Button>
                </div>
              </div>
            </li>
          ))}
        </ul>

        <div className="mt-8 flex justify-center">
          <Button asChild size="lg" className="rounded-full">
            <Link href="/catalog">
              Посмотреть полный каталог
              <ArrowUpRight className="size-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}

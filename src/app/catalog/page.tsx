
import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, ArrowUpRight } from "lucide-react";

import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { ProductGallery } from "@/components/sections/product-gallery";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { products, formatPriceFrom } from "@/lib/data";
import { cn } from "@/lib/utils";

const tagLabel: Record<string, string> = {
  hit: "Хит продаж",
  new: "Новинка",
};

export const metadata: Metadata = {
  title: "Полный каталог",
  description:
    "Полный каталог гипсового декора и изделий ручной работы ЭнджиКрафт.",
};

export default function CatalogPage() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <SiteHeader />

      <main id="main" className="flex-1">
        <section className="bg-secondary/40 py-12 md:py-20">
          <div className="container-site">
            <Button
              asChild
              variant="ghost"
              className="mb-8 rounded-full px-0 hover:bg-transparent hover:text-primary"
            >
              <Link href="/">
                <ArrowLeft className="size-4" />
                На главную
              </Link>
            </Button>

            <div className="max-w-2xl">
              <span className="inline-flex items-center rounded-full bg-accent/70 px-3.5 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-accent-foreground">
                Каталог
              </span>

              <h1 className="mt-5 font-serif text-4xl font-semibold leading-tight sm:text-5xl md:text-6xl">
                Полный <span className="accent">каталог</span>
              </h1>

              <p className="mt-5 text-base leading-relaxed text-muted-foreground md:text-lg">
                Выберите изделие, которое наполнит ваш дом теплом и уютом.
              </p>

              <p className="mt-4 text-sm text-muted-foreground">
                Всего товаров: {products.length}
              </p>
            </div>

            <ul
              role="list"
              aria-label="Все товары каталога"
              className="mt-10 grid grid-cols-2 gap-3 sm:gap-5 lg:grid-cols-3 xl:grid-cols-4"
            >
              {products.map((p) => (
                <li
                  key={p.id}
                  className="group flex min-w-0 flex-col overflow-hidden rounded-2xl border border-border/60 bg-card shadow-sm transition-shadow duration-300 hover:shadow-lg"
                >
                  <div className="relative">
                    <ProductGallery
                      images={
                        p.images?.length
                          ? p.images
                          : [p.image]
                      }
                      alt={p.alt}
                      productName={p.name}
                    />

                    {p.tag && (
                      <Badge
                        className={cn(
                          "absolute left-2 top-2 z-20 rounded-full px-2 py-1 text-[10px] font-semibold shadow-md sm:left-3 sm:top-3 sm:text-xs",
                          p.tag === "new"
                            ? "bg-foreground/85 text-background"
                            : "bg-primary text-primary-foreground"
                        )}
                      >
                        {tagLabel[p.tag] ?? p.tag}
                      </Badge>
                    )}
                  </div>

                  <div className="flex flex-1 flex-col gap-2 p-3 sm:gap-3 sm:p-5">
                    {/* Названия товаров: одинаковая высота */}
                    <h2 className="line-clamp-2 min-h-10 font-serif lining-nums text-base font-semibold leading-5 sm:min-h-[50px] sm:text-xl sm:leading-[1.25]">
                      {p.name}
                    </h2>

                    {/* Описания товаров: одинаковая высота */}
                    <p className="line-clamp-2 min-h-10 text-xs leading-5 text-muted-foreground sm:text-sm">
                      {p.description}
                    </p>

                    {/* Цена и кнопка всегда внизу карточки */}
                    <div className="mt-auto flex flex-col gap-2 border-t border-border/60 pt-3 sm:flex-row sm:flex-wrap sm:items-center sm:justify-between sm:gap-3 sm:pt-4">
                      <span className="text-sm font-semibold text-primary sm:text-base">
                        {formatPriceFrom(p.priceFrom)}
                      </span>

                      <Button
                        asChild
                        size="sm"
                        variant="outline"
                        className="w-full rounded-full border-primary/30 px-2 text-xs sm:w-auto sm:px-3 sm:text-sm"
                      >
                        <Link
                          href="/#contacts"
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
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}

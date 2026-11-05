"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Heart, Menu, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetTitle,
  SheetDescription,
  SheetClose,
} from "@/components/ui/sheet";
import { NAV_LINKS } from "@/lib/site-config";
import { cn } from "@/lib/utils";

export function SiteHeader() {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const homeHref = (anchor: string) => (isHome ? anchor : `/${anchor}`);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState<string>("#hero");
  const [mobileOpen, setMobileOpen] = useState(false);

  // Header shadow on scroll
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [pathname]);

  // Active section highlighting via IntersectionObserver
  useEffect(() => {
    const sections = NAV_LINKS.map((l) => document.querySelector(l.href))
      .filter(Boolean) as HTMLElement[];
    if (sections.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        if (visible[0]) setActive(`#${visible[0].target.id}`);
      },
      {
        rootMargin: "-45% 0px -45% 0px",
        threshold: [0, 0.25, 0.5, 1],
      }
    );

    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  // Lock body scroll when sheet open is handled by Sheet internally
  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full border-b border-border/60 bg-background/95 backdrop-blur-md transition-all duration-300",
        scrolled
          ? "shadow-[0_8px_30px_-12px_oklch(0.68_0.118_12/0.25)]"
          : "shadow-sm"
      )}
    >
      <div className="container-site flex h-16 items-center justify-between gap-4 md:h-20">
        {/* Logo */}
        <Link
          href={homeHref("#hero")}
          className="group flex items-center gap-2 text-lg font-semibold tracking-[0.18em] text-foreground"
          aria-label="ЭнджиКрафт — на главную"
        >
          <span className="grid size-8 place-items-center rounded-full bg-primary text-primary-foreground shadow-sm transition-transform group-hover:rotate-6">
            <Heart className="size-4" />
          </span>
          <span className="font-serif text-xl font-semibold">ЭНДЖИКРАФТ</span>
        </Link>

        {/* Desktop nav */}
        <nav
          aria-label="Основная навигация"
          className="hidden items-center gap-1 lg:flex"
        >
          {NAV_LINKS.map((link) => {
            const isActive = active === link.href;
            const href = homeHref(link.href);
            return (
              <Link
                key={link.href}
                href={href}
                aria-current={isActive ? "true" : undefined}
                className={cn(
                  "relative rounded-full px-3.5 py-2 text-sm font-medium transition-colors",
                  isActive
                    ? "text-primary"
                    : "text-foreground/70 hover:text-foreground"
                )}
              >
                {link.label}
                {isActive && (
                  <span className="absolute inset-x-3 -bottom-0.5 h-0.5 rounded-full bg-primary/70" />
                )}
              </Link>
            );
          })}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden items-center gap-3 lg:flex">
          <Button asChild size="sm" className="rounded-full">
            <Link href={homeHref("#contacts")}>Связаться</Link>
          </Button>
        </div>

        {/* Mobile burger */}
        <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
          <SheetTrigger asChild>
            <Button
              variant="ghost"
              size="icon"
              className="lg:hidden"
              aria-label="Открыть меню"
            >
              <Menu className="size-5" />
            </Button>
          </SheetTrigger>
          <SheetContent
            side="right"
            className="w-[88%] max-w-sm border-l border-border/60 bg-background"
          >
            <SheetTitle className="sr-only">Меню навигации</SheetTitle>
            <SheetDescription className="sr-only">
              Выберите раздел сайта, чтобы перейти к нему.
            </SheetDescription>
            <nav
              aria-label="Мобильная навигация"
              className="flex h-full flex-col gap-1 px-6 pt-20 pb-8"
            >
              {NAV_LINKS.map((link) => (
                <SheetClose asChild key={link.href}>
                  <Link
                    href={homeHref(link.href)}
                    className={cn(
                      "rounded-lg px-3 py-3 text-base font-medium transition-colors",
                      active === link.href
                        ? "bg-accent text-accent-foreground"
                        : "text-foreground/80 hover:bg-accent/60 hover:text-foreground"
                    )}
                  >
                    {link.label}
                  </Link>
                </SheetClose>
              ))}
              <SheetClose asChild>
                <Button asChild className="mt-auto rounded-full">
                  <Link href={homeHref("#contacts")}>Связаться</Link>
                </Button>
              </SheetClose>
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}

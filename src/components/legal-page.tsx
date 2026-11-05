import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { Button } from "@/components/ui/button";

export type LegalSection = { title: string; text: string };

export function LegalPage({ title, description, sections }: { title: string; description: string; sections: LegalSection[] }) {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <SiteHeader />
      <main id="main" className="flex-1">
        <article className="container-site max-w-4xl py-16 md:py-24">
          <Button asChild variant="ghost" className="mb-8 rounded-full px-0 hover:bg-transparent hover:text-primary">
            <Link href="/"><ArrowLeft className="size-4" /> На главную</Link>
          </Button>
          <h1 className="font-serif text-4xl font-semibold sm:text-5xl">{title}</h1>
          <p className="mt-5 text-base leading-relaxed text-muted-foreground">{description}</p>
          <p className="mt-4 rounded-xl border border-primary/20 bg-primary/[0.04] p-4 text-sm leading-relaxed text-muted-foreground">
            Документ является информационным шаблоном. Перед публикацией проверьте реквизиты оператора, состав обрабатываемых данных, сроки хранения и фактические процессы сайта с юристом.
          </p>
          <div className="mt-10 space-y-8 text-base leading-relaxed text-foreground/85">
            {sections.map((section) => (
              <section key={section.title}>
                <h2 className="font-serif text-2xl font-semibold">{section.title}</h2>
                <p className="mt-3">{section.text}</p>
              </section>
            ))}
          </div>
        </article>
      </main>
      <SiteFooter />
    </div>
  );
}

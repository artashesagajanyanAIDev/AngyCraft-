import Image from "next/image";
import { SectionHeading } from "@/components/section-heading";
import { galleryItems } from "@/lib/data";

export function Gallery() {
  return (
    <section
      id="gallery"
      aria-labelledby="gallery-title"
      className="bg-secondary/40 py-16 md:py-24"
    >
      <div className="container-site">
        <SectionHeading
          eyebrow="Галерея"
          title={
            <>
              Наши <span className="accent">работы</span>
            </>
          }
          subtitle="Вдохновение и результаты нашего творчества"
        />

        <ul
          role="list"
          className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3"
        >
          {galleryItems.map((item, idx) => (
            <li
              key={item.src + idx}
              className="group relative aspect-[4/3] overflow-hidden rounded-2xl border border-border/60 bg-card shadow-sm"
            >
              <Image
                src={item.src}
                alt={item.alt}
                fill
                loading="lazy"
                quality={70}
                sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 90vw"
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div
                aria-hidden
                className="pointer-events-none absolute inset-0 bg-gradient-to-t from-foreground/30 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"
              />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

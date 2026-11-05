"use client";

import { useEffect, useMemo, useState } from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";

type ProductGalleryProps = {
  images: string[];
  alt: string;
  productName: string;
  preload?: boolean;
  sizes?: string;
};

const DEFAULT_SIZES =
  "(min-width: 1280px) 24vw, (min-width: 1024px) 32vw, 48vw";

const AUTOPLAY_INTERVAL = 2300;

export function ProductGallery({
  images,
  alt,
  productName,
  preload = false,
  sizes = DEFAULT_SIZES,
}: ProductGalleryProps) {
  const galleryImages = useMemo(
    () => images.filter(Boolean),
    [images]
  );

  const [index, setIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  // Автопролистывание с паузой при наведении
  useEffect(() => {
    if (galleryImages.length <= 1 || isHovered) return;

    const interval = setInterval(() => {
      setIndex((current) => (current + 1) % galleryImages.length);
    }, AUTOPLAY_INTERVAL);

    return () => clearInterval(interval);
  }, [galleryImages.length, isHovered]);

  if (galleryImages.length === 0) {
    return <div className="aspect-[4/5] bg-secondary/50" />;
  }

  const activeIndex = index % galleryImages.length;
  const isLCP = preload && activeIndex === 0;

  return (
    <div
      className="relative aspect-[4/5] overflow-hidden bg-secondary/50"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Image
        src={galleryImages[activeIndex]}
        alt={
          activeIndex === 0
            ? alt
            : `${productName} — фото ${activeIndex + 1}`
        }
        fill
        sizes={sizes}
        {...(isLCP ? { preload: true } : { loading: "lazy" as const })}
        quality={75}
        className="object-cover"
      />

      {galleryImages.length > 1 && (
        <div className="absolute inset-x-0 bottom-2 z-10 flex justify-center gap-1.5">
          {galleryImages.map((_, i) => (
            <button
              key={i}
              type="button"
              onClick={() => setIndex(i)}
              aria-label={`Показать фото ${i + 1}: ${productName}`}
              aria-current={i === activeIndex ? "true" : undefined}
              className={cn(
                "h-1.5 cursor-pointer rounded-full transition-all duration-300",
                i === activeIndex
                  ? "w-4 bg-white"
                  : "w-1.5 bg-white/60 hover:bg-white"
              )}
            />
          ))}
        </div>
      )}
    </div>
  );
}
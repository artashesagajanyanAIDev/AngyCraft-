import type { Metadata, Viewport } from "next";
import { Cormorant_Garamond, Manrope } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/sonner";
import { StructuredData } from "@/components/structured-data";
import { SITE_CONFIG } from "@/lib/site-config";
import { CookieBanner } from "@/components/cookie-banner";

// Для основного сайта оставляем только реально используемые веса заголовков.
// Не предварительно загружаем все serif-файлы: приоритет на первом экране у hero-изображения.
const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin", "cyrillic"],
  weight: ["400", "600"],
  display: "swap",
  preload: false,
});

// Manrope — вариативный шрифт: один файл на все веса, без массива weight
const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin", "cyrillic"],
  display: "swap",
  preload: true,
});

const siteUrl = SITE_CONFIG.url;

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "ЭнджиКрафт — Гипсовые изделия ручной работы и мастер-классы",
    template: "%s · ЭнджиКрафт",
  },
  description:
    "ЭнджиКрафт — авторские гипсовые изделия ручной работы и творческие мастер-классы. Свечи, декор, фигурки и подарочные наборы в нежной розово-белой палитре.",
  applicationName: "ЭнджиКрафт",
  keywords: [
    "гипсовые изделия",
    "ручная работа",
    "мастер-класс по гипсу",
    "гипсовые свечи",
    "гипсовый декор",
    "подарки ручной работы",
    "авторский декор",
    "ЭнджиКрафт",
  ],
  authors: [{ name: "Студия ЭнджиКрафт" }],
  creator: "Студия ЭнджиКрафт",
  publisher: "Студия ЭнджиКрафт",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "ru_RU",
    url: siteUrl,
    siteName: "ЭнджиКрафт",
    title: "ЭнджиКрафт — Гипсовые изделия ручной работы и мастер-классы",
    description:
      "Авторские гипсовые изделия и творческие мастер-классы в нежной розово-белой палитре. Свечи, декор, фигурки, подарочные наборы.",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "ЭнджиКрафт — гипсовые изделия ручной работы",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "ЭнджиКрафт — Гипсовые изделия ручной работы",
    description:
      "Авторские гипсовые изделия и мастер-классы. Свечи, декор, фигурки в нежной розово-белой палитре.",
    images: ["/opengraph-image"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  category: "shopping",
  manifest: "/manifest.webmanifest",
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#fbeae6" },
    { media: "(prefers-color-scheme: dark)", color: "#2a2230" },
  ],
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru" suppressHydrationWarning>
      <body
        className={`${cormorant.variable} ${manrope.variable} antialiased`}
      >
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-md focus:bg-primary focus:px-4 focus:py-2 focus:text-primary-foreground"
        >
          Перейти к основному содержанию
        </a>
        <StructuredData />
        {children}
        <CookieBanner />
        <Toaster position="top-center" richColors closeButton />
      </body>
    </html>
  );
}
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { Hero } from "@/components/sections/hero";
import { About } from "@/components/sections/about";
import { Products } from "@/components/sections/products";
import { Masterclass } from "@/components/sections/masterclass";
import { Gallery } from "@/components/sections/gallery";
import { Testimonials } from "@/components/sections/testimonials";
import { CtaBand } from "@/components/sections/cta-band";
import { Contacts } from "@/components/sections/contacts";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <SiteHeader />
      <main id="main" className="flex-1">
        <Hero />
        <About />
        <Products />
        <Masterclass />
        <Gallery />
        <Testimonials />
        <CtaBand />
        <Contacts />
      </main>
      <SiteFooter />
    </div>
  );
}

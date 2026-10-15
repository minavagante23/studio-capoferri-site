import type { Metadata } from "next";
import { preload } from "react-dom";
import { HeroHome } from "@/components/HeroHome";
import { LocalizedHomeSections } from "@/components/pages/LocalizedHomeSections";
import type { Locale } from "@/lib/i18n";
import { buildPageMetadata } from "@/lib/seo";

export const metadata: Metadata = buildPageMetadata({
  title: "Ingegnere strutturista a Brescia",
  description:
    "Ingegnere strutturista a Brescia e in provincia: strutture in acciaio, capannoni e sopraelevazioni. Sede ad Adro (BS). Oltre 40 anni di esperienza.",
  path: "/",
});

const HERO_FULL = "/assets/hero-struttura-new.webp";
const HERO_MOBILE = "/assets/hero-struttura-new-960.webp";

export default function HomePage({ locale = "it" }: { locale?: Locale }) {
  // LCP hint: mobile gets the 960 plate, desktop the full plate (static export = no Next optimizer).
  preload(HERO_MOBILE, {
    as: "image",
    type: "image/webp",
    fetchPriority: "high",
    media: "(max-width: 639px)",
  });
  preload(HERO_FULL, {
    as: "image",
    type: "image/webp",
    fetchPriority: "high",
    media: "(min-width: 640px)",
  });

  return (
    <main id="main-content">
      <HeroHome />
      <LocalizedHomeSections locale={locale} />
    </main>
  );
}

import type { Metadata } from "next";
import { HeroHome } from "@/components/HeroHome";
import { LocalizedHomeSections } from "@/components/pages/LocalizedHomeSections";
import type { Locale } from "@/lib/i18n";
import { heroFirstImageSrc } from "@/lib/images";
import { buildPageMetadata } from "@/lib/seo";

export const metadata: Metadata = buildPageMetadata({
  title: "Studio di ingegneria a Brescia e provincia",
  description:
    "Studio di ingegneria e progettazione a Brescia e provincia: strutture in acciaio, architettura e consulenza strutturale da Adro (BS). Oltre 40 anni di esperienza.",
  path: "/",
});

export default function HomePage({ locale = "it" }: { locale?: Locale }) {
  return (
    <>
      <link rel="preload" as="image" href={heroFirstImageSrc} fetchPriority="high" />
      <main id="main-content">
        <HeroHome />
        <LocalizedHomeSections locale={locale} />
      </main>
    </>
  );
}

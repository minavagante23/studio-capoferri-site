import type { Metadata } from "next";
import { LocalizedAboutPageContent } from "@/components/pages/LocalizedAboutPage";
import { buildPageMetadata } from "@/lib/seo";

export const metadata: Metadata = buildPageMetadata({
  title: "Chi siamo",
  description:
    "Studio di ingegneria civile ad Adro (BS): strutture in acciaio, cemento armato e muratura, disegni d'officina, direzione lavori.",
  path: "/chi-siamo",
});

export default function ChiSiamoPage() {
  return <LocalizedAboutPageContent />;
}

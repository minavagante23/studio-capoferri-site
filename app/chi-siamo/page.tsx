import type { Metadata } from "next";
import { LocalizedAboutPageContent } from "@/components/pages/LocalizedAboutPage";
import { buildPageMetadata } from "@/lib/seo";

export const metadata: Metadata = buildPageMetadata({
  title: "Chi siamo",
  description:
    "Scopri lo Studio Capoferri, il nostro team di professionisti, la storia e la filosofia che ci guida nella progettazione ingegneristica e architettonica con sede ad Adro (BS).",
  path: "/chi-siamo",
});

export default function ChiSiamoPage() {
  return <LocalizedAboutPageContent />;
}

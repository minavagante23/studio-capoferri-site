import type { Metadata } from "next";
import { LocalizedContactsPageContent } from "@/components/pages/LocalizedContactsPage";
import { buildPageMetadata } from "@/lib/seo";

export const metadata: Metadata = buildPageMetadata({
  title: "Contatti",
  description:
    "Contatta lo Studio Capoferri per richiedere un preventivo o fissare un appuntamento. Recapiti, indirizzo e orari della sede ad Adro (BS).",
  path: "/contatti",
});

export default function ContattiPage() {
  return <LocalizedContactsPageContent />;
}

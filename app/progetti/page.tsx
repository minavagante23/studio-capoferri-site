import type { Metadata } from "next";
import { LocalizedProjectsPageContent } from "@/components/pages/LocalizedProjectsIndexPage";
import { buildPageMetadata } from "@/lib/seo";

export const metadata: Metadata = buildPageMetadata({
  title: "Progetti",
  description:
    "Una galleria dei progetti realizzati dallo Studio Capoferri: strutture residenziali, industriali e ricettive, con sede ad Adro (BS).",
  path: "/progetti",
});

export default function ProgettiPage() {
  return <LocalizedProjectsPageContent />;
}

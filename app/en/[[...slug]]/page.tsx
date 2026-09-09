import type { Metadata } from "next";
import { notFound } from "next/navigation";
import HomePage from "@/app/page";
import ChiSiamoPage from "@/app/chi-siamo/page";
import ContattiPage from "@/app/contatti/page";
import PrivacyPolicyPage from "@/app/privacy-policy/page";
import ProgettiPage from "@/app/progetti/page";
import ProjectAreaPage from "@/app/progetti/[area]/page";
import ProjectCasePage from "@/app/progetti/[area]/[slug]/page";
import ProgettazioneStruttureAcciaioBergamoPage from "@/app/progettazione-strutture-acciaio-bergamo/page";
import ProgettazioneStruttureAcciaioBresciaPage from "@/app/progettazione-strutture-acciaio-brescia/page";
import ProgettazioneStruttureAcciaioMilanoPage from "@/app/progettazione-strutture-acciaio-milano/page";
import ServiziPage from "@/app/servizi/page";
import { englishStaticParams, resolveEnglishSlug } from "@/lib/locale-paths";
import { getEnglishMetadataForSlug } from "@/lib/seo";

type Props = { params: Promise<{ slug?: string[] }> };

export const dynamicParams = false;

export function generateStaticParams() {
  return englishStaticParams();
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug = [] } = await params;
  return getEnglishMetadataForSlug(slug);
}

export default async function EnglishMirrorPage({ params }: Props) {
  const { slug = [] } = await params;
  const route = resolveEnglishSlug(slug);
  if (!route) notFound();

  switch (route.kind) {
    case "home":
      return <HomePage locale="en" />;
    case "static":
      switch (route.key) {
        case "chi-siamo":
          return <ChiSiamoPage />;
        case "servizi":
          return <ServiziPage />;
        case "contatti":
          return <ContattiPage />;
        case "privacy-policy":
          return <PrivacyPolicyPage />;
        default:
          notFound();
      }
    case "projects":
      return <ProgettiPage />;
    case "steel":
      if (route.city === "brescia") return <ProgettazioneStruttureAcciaioBresciaPage />;
      if (route.city === "bergamo") return <ProgettazioneStruttureAcciaioBergamoPage />;
      return <ProgettazioneStruttureAcciaioMilanoPage />;
    case "project-area":
      return <ProjectAreaPage params={Promise.resolve({ area: route.area })} />;
    case "project-case":
      return <ProjectCasePage params={Promise.resolve({ area: route.area, slug: route.slug })} />;
    default:
      notFound();
  }
}

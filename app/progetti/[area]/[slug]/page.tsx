import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { LocalizedProjectCasePage } from "@/components/pages/LocalizedProjectCasePage";
import {
  getCaseStudyKey,
  isProjectArea,
  projectCaseStudies,
  projectCategories,
  projectAreas,
} from "@/lib/projects";
import { buildPageMetadata } from "@/lib/seo";

type Props = { params: Promise<{ area: string; slug: string }> };

export async function generateStaticParams() {
  const out: { area: string; slug: string }[] = [];
  for (const area of projectAreas) {
    for (const c of projectCategories[area].cases) {
      out.push({ area, slug: c.slug });
    }
  }
  return out;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { area, slug } = await params;
  if (!isProjectArea(area)) return {};
  const key = getCaseStudyKey(area, slug);
  if (!key || !projectCaseStudies[key]) return {};
  const cs = projectCaseStudies[key];
  return buildPageMetadata({
    title: cs.metaTitle,
    description: cs.metaDescription,
    path: `/progetti/${area}/${slug}`,
    image: cs.gallery[0]?.src,
  });
}

export default async function ProjectCasePage({ params }: Props) {
  const { area, slug } = await params;
  if (!isProjectArea(area)) notFound();

  const key = getCaseStudyKey(area, slug);
  if (!key || !projectCaseStudies[key]) notFound();

  return <LocalizedProjectCasePage area={area} slug={slug} />;
}

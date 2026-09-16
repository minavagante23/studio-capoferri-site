import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { LocalizedProjectAreaPage } from "@/components/pages/LocalizedProjectAreaPage";
import { isProjectArea, projectCategories, projectAreas } from "@/lib/projects";
import { buildPageMetadata } from "@/lib/seo";

type Props = { params: Promise<{ area: string }> };

export function generateStaticParams() {
  return projectAreas.map((area) => ({ area }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { area } = await params;
  if (!isProjectArea(area)) return {};
  const c = projectCategories[area];
  return buildPageMetadata({
    title: c.metaTitle,
    description: c.metaDescription,
    path: `/progetti/${area}`,
    image: c.cases[0]?.cover,
  });
}

export default async function ProjectAreaPage({ params }: Props) {
  const { area } = await params;
  if (!isProjectArea(area)) notFound();
  return <LocalizedProjectAreaPage area={area} />;
}

import type { ReactNode } from "react";

export const projectAreas = ["residenziali", "industriali", "ricettivi"] as const;
export type ProjectArea = (typeof projectAreas)[number];

export function isProjectArea(s: string): s is ProjectArea {
  return (projectAreas as readonly string[]).includes(s);
}

export type ProjectCasePreview = {
  slug: string;
  title: string;
  caption: string;
  cover: string;
  alt: string;
  href: string;
};

export type CaseStudyKey = `${ProjectArea}/${string}`;

export type ProjectCaseStudy = {
  metaTitle: string;
  metaDescription: string;
  heading: string;
  body: ReactNode;
  gallery: { src: string; alt: string }[];
  externalBrand?: { href: string; imageSrc: string; imageAlt: string };
};

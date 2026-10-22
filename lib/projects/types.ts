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

/** English case copy co-located with the IT case study (one place to update). */
export type CaseStudyEnCopy = {
  heading: string;
  metaDescription: string;
  body: string[];
  bullets: [string, string][];
};

export type ProjectCaseStudy = {
  metaTitle: string;
  metaDescription: string;
  heading: string;
  /** EN page body + SEO description (IT JSX stays in `body`). */
  en: CaseStudyEnCopy;
  body: ReactNode;
  gallery: { src: string; alt: string }[];
  externalBrand?: { href: string; imageSrc: string; imageAlt: string };
};

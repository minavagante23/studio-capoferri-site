"use client";

import Image from "next/image";
import Link from "next/link";
import { useLocale } from "@/components/LocaleProvider";
import { fontDisplay } from "@/lib/fonts";
import { linkTitles } from "@/lib/link-seo";
import { ui } from "@/lib/ui";

type Props = {
  href: string;
  title: string;
  caption: string;
  image: string;
  alt: string;
  variant?: "light" | "dark";
  className?: string;
};

export function ProjectPreviewCard({
  href,
  title,
  caption,
  image,
  alt,
  variant = "light",
  className = "",
}: Props) {
  const locale = useLocale();

  return (
    <Link
      href={href}
      title={linkTitles.progetto(title, locale)}
      className={`${variant === "dark" ? ui.projectCardDark : ui.projectCardLight} ${className}`}
    >
      <div className="relative aspect-[4/3]">
        <Image
          src={image}
          alt={alt}
          fill
          className="object-cover transition duration-500 group-hover:scale-[1.03]"
          sizes="(min-width:1024px) 33vw, 100vw"
        />
        <div className="image-unify-overlay" aria-hidden />
        <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#1f2e3d]/95 to-transparent px-4 py-3 sm:py-4">
          <span className={`${fontDisplay.className} ${ui.projectCardCaption}`}>{caption}</span>
        </div>
      </div>
    </Link>
  );
}

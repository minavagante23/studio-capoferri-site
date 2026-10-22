"use client";

import Image from "next/image";
import Link from "next/link";
import { useLocale } from "@/components/LocaleProvider";
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

function captionsDiffer(title: string, caption: string) {
  const norm = (s: string) => s.toLowerCase().replace(/[-–—]/g, "-").replace(/\s+/g, " ").trim();
  return norm(title) !== norm(caption);
}

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
  const showCaption = captionsDiffer(title, caption);
  const dark = variant === "dark";

  return (
    <Link
      href={href}
      title={linkTitles.progetto(title, locale)}
      className={`group ${dark ? ui.projectCardDark : ui.projectCardLight} ${className}`}
    >
      <div className="relative aspect-[4/3] overflow-hidden">
        <Image
          src={image}
          alt={alt}
          fill
          className="photo-alive object-cover transition-[filter] duration-400 ease-out group-hover:[filter:brightness(1.03)_contrast(1.04)] motion-reduce:transition-none motion-reduce:group-hover:[filter:none]"
          sizes="(min-width:1024px) 33vw, 100vw"
        />
      </div>
      <div className="pt-3">
        <span
          className={`font-display block text-base font-medium tracking-tight transition-colors duration-200 sm:text-lg ${
            dark
              ? "text-white group-hover:text-[#f0b4b4]"
              : "text-[#1c1e21] group-hover:text-[#b01010]"
          }`}
        >
          {title}
        </span>
        {showCaption ? (
          <span className={`mt-1 block text-sm ${dark ? "text-white/65" : "text-[#666]"}`}>{caption}</span>
        ) : null}
      </div>
    </Link>
  );
}

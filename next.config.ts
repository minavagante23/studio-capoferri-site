import type { NextConfig } from "next";
import { readFileSync } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const isStaticExport = process.env.STATIC_EXPORT === "1";

const legacyRedirectMap = JSON.parse(
  readFileSync(path.join(__dirname, "lib/legacy-redirects.json"), "utf8")
) as Record<string, string>;

const nextConfig: NextConfig = {
  turbopack: {
    root: __dirname,
  },
};

if (isStaticExport) {
  nextConfig.output = "export";
  nextConfig.images = { unoptimized: true };
  nextConfig.trailingSlash = true;
  const raw = process.env.NEXT_PUBLIC_BASE_PATH?.trim() ?? "";
  if (raw && raw !== "/") {
    nextConfig.basePath = raw.startsWith("/") ? raw : `/${raw}`;
  }
} else {
  nextConfig.headers = async () => [
    {
      source: "/:path*",
      headers: [
        { key: "X-Content-Type-Options", value: "nosniff" },
        { key: "X-Frame-Options", value: "SAMEORIGIN" },
        { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
        {
          key: "Permissions-Policy",
          value:
            "camera=(), microphone=(), geolocation=(), payment=(), usb=(), browsing-topics=(), interest-cohort=()",
        },
        { key: "Cross-Origin-Opener-Policy", value: "same-origin-allow-popups" },
        { key: "Cross-Origin-Resource-Policy", value: "same-site" },
        {
          key: "Content-Security-Policy",
          value: [
            "default-src 'self'",
            "base-uri 'self'",
            "frame-ancestors 'self'",
            "form-action 'self' https://formspree.io",
            "img-src 'self' data: https://www.studiocapoferri.eu https://*.googleapis.com https://*.gstatic.com https://www.google-analytics.com https://www.googletagmanager.com",
            "font-src 'self' data: https://fonts.gstatic.com",
            "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com",
            "script-src 'self' 'unsafe-inline' https://www.googletagmanager.com https://www.google-analytics.com",
            "connect-src 'self' https://formspree.io https://www.google-analytics.com https://analytics.google.com https://region1.google-analytics.com https://www.googletagmanager.com",
            "frame-src 'self' https://maps.google.com https://www.google.com https://*.google.com",
            "upgrade-insecure-requests",
          ].join("; "),
        },
      ],
    },
    {
      source: "/:path*",
      headers: [{ key: "Strict-Transport-Security", value: "max-age=63072000; includeSubDomains; preload" }],
    },
  ];

  nextConfig.redirects = async () => [
    { source: "/index.html", destination: "/", permanent: true },
    ...Object.entries(legacyRedirectMap).map(([source, destination]) => ({
      source: `/${source}`,
      destination,
      permanent: true,
    })),
  ];
}

export default nextConfig;

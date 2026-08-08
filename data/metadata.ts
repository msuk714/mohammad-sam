import type { Metadata } from "next";
import { site } from "@/data/site";

export function pageMetadata({
  title,
  description,
  path,
  image = "/og-image.png",
}: {
  title: string;
  description: string;
  path: string;
  image?: string;
}): Metadata {
  const canonical = path === "/" ? "/" : path;
  const fullTitle = path === "/" ? `${site.name} — ${site.title}` : `${title} | ${site.name}`;

  const ogImage = image === "/og-image.png"
    ? { url: image, width: 1200, height: 630, alt: `${site.name} — ${title}` }
    : { url: image, alt: `${title} performance evidence` };

  return {
    title: path === "/" ? { absolute: fullTitle } : title,
    description,
    alternates: { canonical },
    openGraph: {
      type: "website",
      url: canonical,
      title: fullTitle,
      description,
      siteName: site.name,
      images: [ogImage],
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      images: [image],
    },
  };
}

import type { MetadataRoute } from "next";
import { projects } from "@/data/projects";
import { getSiteUrl } from "@/data/url";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = getSiteUrl();
  const pages = ["", "/about", "/services", "/case-studies", "/resume", "/contact"];
  return [
    ...pages.map((path) => ({ url: `${base}${path}`, lastModified: new Date(), changeFrequency: path === "" ? "monthly" as const : "yearly" as const, priority: path === "" ? 1 : 0.7 })),
    ...projects.map((project) => ({ url: `${base}/case-studies/${project.slug}`, lastModified: new Date(), changeFrequency: "yearly" as const, priority: 0.8 })),
  ];
}

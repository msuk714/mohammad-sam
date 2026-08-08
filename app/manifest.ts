import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Mohammad Sami — SEO Portfolio",
    short_name: "Sami SEO",
    description: "Senior SEO Strategist & Organic Growth Consultant portfolio.",
    start_url: "/",
    display: "standalone",
    background_color: "#f7f9fc",
    theme_color: "#07111f",
    icons: [
      { src: "/icon.svg", sizes: "any", type: "image/svg+xml" },
    ],
  };
}

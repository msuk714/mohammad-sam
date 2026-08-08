import type { Metadata } from "next";
import "./globals.css";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { site } from "@/data/site";
import { getSiteUrl } from "@/data/url";

const siteUrl = getSiteUrl();

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: `${site.name} — ${site.title}`,
    template: `%s | ${site.name}`,
  },
  description: site.description,
  keywords: [
    "SEO strategist",
    "technical SEO consultant",
    "organic growth consultant",
    "local SEO",
    "e-commerce SEO",
    "SEO migration",
    "GEO",
    "AEO",
  ],
  authors: [{ name: site.name }],
  creator: site.name,
  icons: { icon: "/icon.svg" },
  manifest: "/manifest.webmanifest",
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const personLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: site.name,
    jobTitle: site.title,
    email: `mailto:${site.email}`,
    telephone: site.phoneE164,
    address: { "@type": "PostalAddress", addressLocality: "Islamabad", addressCountry: "PK" },
    url: siteUrl,
    knowsAbout: ["Technical SEO", "Local SEO", "E-commerce SEO", "Content Strategy", "SEO Migrations", "GEO", "AEO"],
  };
  const websiteLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: `${site.name} SEO Portfolio`,
    url: siteUrl,
    description: site.description,
  };

  return (
    <html lang="en">
      <body>
        <a className="skip-link" href="#main-content">Skip to content</a>
        <Header />
        <main id="main-content">{children}</main>
        <Footer />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(personLd).replace(/</g, "\\u003c") }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteLd).replace(/</g, "\\u003c") }} />
      </body>
    </html>
  );
}

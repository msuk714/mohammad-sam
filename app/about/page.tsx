import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "@/components/icons";
import { PageCta } from "@/components/page-cta";
import { SectionHeading } from "@/components/section-heading";
import { expertise, site } from "@/data/site";
import { pageMetadata } from "@/data/metadata";

export const metadata: Metadata = pageMetadata({
  title: "About",
  description: "About Mohammad Sami, Senior SEO Strategist and Organic Growth Consultant with 6+ years of experience across 50+ projects and 15+ markets.",
  path: "/about",
});

export default function AboutPage() {
  return (
    <>
      <section className="page-hero section-pad">
        <div className="container narrow">
          <span className="eyebrow">About</span>
          <h1>I build organic growth systems, not isolated rankings.</h1>
          <p>Across 6+ years, 50+ projects and 15+ markets, my work has focused on technical SEO, search architecture, content strategy, local search and commercially relevant organic growth.</p>
          <div className="page-hero-actions">
            <Link className="button" href={site.primaryCta.href}>{site.primaryCta.label} <ArrowUpRight className="button-icon" /></Link>
            <Link className="button button-secondary" href="/case-studies">View Case Studies <ArrowUpRight className="button-icon" /></Link>
          </div>
        </div>
      </section>

      <section className="section-pad">
        <div className="container split-content">
          <div>
            <SectionHeading eyebrow="My approach" title="Technical precision. Commercial intent." />
            <p className="body-large">My work combines technical SEO, search architecture, content strategy and intent analysis. The objective is to build a search asset that attracts the right audience and compounds over time.</p>
            <p>That means treating crawlability, internal structure, content quality, local relevance, migration risk and conversion intent as parts of one system rather than separate checklists.</p>
          </div>
          <div className="profile-facts" aria-label="Professional experience statistics">
            <div><strong>{site.years}</strong><span>Years Experience</span></div>
            <div><strong>{site.projects}</strong><span>Projects Delivered</span></div>
            <div><strong>{site.markets}</strong><span>Global Markets</span></div>
            <div><strong>{site.peakGrowth}</strong><span>Peak Project Growth</span></div>
          </div>
        </div>
      </section>

      <section className="section-pad soft-section">
        <div className="container">
          <SectionHeading eyebrow="Expertise" title="What I work across." />
          <div className="expertise-cloud">{expertise.map((item) => <span key={item}>{item}</span>)}</div>
        </div>
      </section>

      <section className="section-pad">
        <div className="container">
          <SectionHeading eyebrow="Industries" title="Experience across different search environments." copy="The search problem changes by category, but the operating principle stays the same: evidence first, priorities second, execution third." />
          <div className="industry-grid">{["Home Services","FinTech","E-commerce","Fashion","Hospitality & Travel","Furniture & Interiors","Healthcare / Wellness","Education"].map((item) => <div key={item}>{item}</div>)}</div>
        </div>
      </section>

      <PageCta title="Need senior-level ownership of an SEO problem?" copy="Share the site, market and challenge. The fastest way to see fit is to start with the actual search problem." />
    </>
  );
}

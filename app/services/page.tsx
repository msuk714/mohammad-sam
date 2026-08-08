import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "@/components/icons";
import { PageCta } from "@/components/page-cta";
import { services, site } from "@/data/site";
import { pageMetadata } from "@/data/metadata";

export const metadata: Metadata = pageMetadata({
  title: "SEO Services",
  description: "SEO strategy, technical SEO, local SEO, e-commerce SEO, migration SEO, content strategy and GEO/AEO consulting from Mohammad Sami.",
  path: "/services",
});

const outcomes = [
  "Find the highest-impact search opportunities before spending effort on low-value tasks.",
  "Remove technical barriers that limit crawling, indexing and organic performance.",
  "Build content architecture that expands topical relevance and commercial reach.",
  "Create a repeatable measurement loop for traffic, rankings, visibility and growth.",
];

export default function ServicesPage() {
  return (
    <>
      <section className="page-hero section-pad">
        <div className="container narrow">
          <span className="eyebrow">SEO Services</span>
          <h1>SEO built around the problem your business actually needs to solve.</h1>
          <p>From technical foundations and content systems to local demand, e-commerce, migrations and AI-search visibility, the work is prioritized around impact—not a generic checklist.</p>
          <div className="page-hero-actions">
            <Link className="button" href={site.primaryCta.href}>{site.primaryCta.label} <ArrowUpRight className="button-icon" /></Link>
            <Link className="button button-secondary" href="/case-studies">View Case Studies <ArrowUpRight className="button-icon" /></Link>
          </div>
        </div>
      </section>

      <section className="section-pad">
        <div className="container service-list">
          {services.map((service) => (
            <article key={service.number}>
              <span>{service.number}</span>
              <div><h2>{service.title}</h2><p>{service.description}</p></div>
              <ArrowUpRight aria-hidden="true" />
            </article>
          ))}
        </div>
      </section>

      <section className="section-pad dark-section">
        <div className="container split-content">
          <div><span className="eyebrow light">What this solves</span><h2>Less SEO noise. More strategic clarity.</h2></div>
          <div className="outcome-list">{outcomes.map((item, index) => <div key={item}><span>0{index + 1}</span><p>{item}</p></div>)}</div>
        </div>
      </section>

      <PageCta eyebrow="Have a specific SEO challenge?" title="Bring the problem. We’ll find the search opportunity behind it." />
    </>
  );
}

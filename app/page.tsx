import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "@/components/icons";
import { HomeGrowthCard } from "@/components/home-growth-card";
import { ProjectCard } from "@/components/project-card";
import { SectionHeading } from "@/components/section-heading";
import { projects } from "@/data/projects";
import { expertise, services, site } from "@/data/site";
import { pageMetadata } from "@/data/metadata";

export const metadata: Metadata = pageMetadata({
  title: site.title,
  description: site.description,
  path: "/",
});

const homeProjectSlugs = ["p2ezpay", "roman-electric", "milwaukee-signarama", "two-guys-home-furnishing"];
const homeProjects = homeProjectSlugs.flatMap((slug) => {
  const project = projects.find((item) => item.slug === slug);
  return project ? [project] : [];
});

const resultCards = [
  { value: "+954%", label: "Organic Impressions", project: "P2EzPay" },
  { value: "+800%", label: "Organic Clicks", project: "P2EzPay" },
  { value: "+183.5%", label: "Search Impressions", project: "Two Guys" },
  { value: "+105.3%", label: "Organic Impressions", project: "Roman Electric" },
];

export default function Home() {
  return (
    <>
      <section className="hero" aria-labelledby="home-hero-title">
        <div className="container hero-grid">
          <div className="hero-copy">
            <span className="eyebrow">Senior SEO Strategist · Organic Growth Consultant</span>
            <h1 id="home-hero-title">SEO systems built for <em>sustainable organic growth.</em></h1>
            <p className="hero-lead">
              I help service businesses, e-commerce brands and international teams grow qualified search visibility through technical SEO, content strategy, local SEO, migrations and GEO/AEO.
            </p>
            <div className="hero-actions">
              <Link href={site.primaryCta.href} className="button">
                {site.primaryCta.label} <ArrowUpRight className="button-icon" />
              </Link>
              <Link href={site.secondaryCta.href} className="button button-secondary">
                {site.secondaryCta.label} <ArrowUpRight className="button-icon" />
              </Link>
            </div>
            <div className="hero-trust" aria-label="Professional credibility">
              <div><strong>{site.years}</strong><span>Years experience</span></div>
              <div><strong>{site.projects}</strong><span>Projects</span></div>
              <div><strong>{site.markets}</strong><span>Markets</span></div>
            </div>
          </div>
          <div className="hero-proof-visual" aria-label="Documented SEO growth proof">
            <HomeGrowthCard />
          </div>
        </div>
      </section>

      <section className="section-pad results-section">
        <div className="container">
          <SectionHeading
            eyebrow="Proof over promises"
            title="Growth you can measure."
            copy="Documented search outcomes from real case studies, supported by the GSC and traffic evidence in my portfolio."
          />
          <div className="results-grid">
            {resultCards.map((result) => (
              <div className="result-card" key={`${result.project}-${result.label}`}>
                <span>{result.project}</span>
                <strong>{result.value}</strong>
                <p>{result.label}</p>
                <div className="result-line" aria-hidden="true" />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad work-section">
        <div className="container">
          <SectionHeading
            eyebrow="Selected work"
            title="SEO strategy grounded in real business challenges."
            copy="Technical recovery, local expansion, commercial search growth and migration work across different markets and business models."
            action={<Link href="/case-studies" className="text-link">View all case studies <ArrowUpRight /></Link>}
          />
          <div className="featured-projects">
            {homeProjects.map((project) => <ProjectCard project={project} large key={project.slug} />)}
          </div>
        </div>
      </section>

      <section className="section-pad services-preview">
        <div className="container">
          <SectionHeading
            eyebrow="Capabilities"
            title="Organic growth, built from every angle."
            copy="Strategy, technical foundations, content systems and search architecture working together—not isolated SEO tasks."
            action={<Link href="/services" className="text-link">Explore services <ArrowUpRight /></Link>}
          />
          <div className="services-grid">
            {services.map((service) => (
              <article className="service-card" key={service.number}>
                <span>{service.number}</span>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="about-preview section-pad dark-section">
        <div className="container about-preview-grid">
          <div>
            <span className="eyebrow light">About Sami</span>
            <h2>6+ years turning search data into growth strategy.</h2>
            <p>I work at the intersection of technical SEO, content architecture, search intent and commercial growth—building organic systems designed to compound over time.</p>
            <Link href="/about" className="button button-light">More About Me <ArrowUpRight className="button-icon" /></Link>
          </div>
          <div className="market-panel">
            <span className="panel-label">Experience across markets</span>
            <div className="market-list">
              {['USA','UK','UAE','Australia','Pakistan','Germany','+ More'].map((market) => <span key={market}>{market}</span>)}
            </div>
          </div>
        </div>
      </section>

      <section className="expertise-strip" aria-label="SEO expertise">
        <div className="container expertise-strip-inner">
          {expertise.map((item) => <span key={item}>{item}</span>)}
        </div>
      </section>

      <section className="section-pad process-section">
        <div className="container">
          <SectionHeading
            eyebrow="Method"
            title="How I approach SEO."
            copy="Understand the opportunity, diagnose the constraints, prioritize by impact, execute with precision and scale what the data supports."
          />
          <div className="process-grid">
            {[
              ["01", "Discover", "Business goals, target markets, current performance and search opportunity."],
              ["02", "Diagnose", "Technical, content, authority, architecture and competitor gaps."],
              ["03", "Strategize", "A prioritized roadmap based on expected impact and execution effort."],
              ["04", "Execute", "Technical implementation, content systems and search architecture."],
              ["05", "Measure & Scale", "Performance analysis, iteration and expansion into new opportunities."],
            ].map(([number, title, copy]) => (
              <article key={number}><span>{number}</span><h3>{title}</h3><p>{copy}</p></article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

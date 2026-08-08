import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowUpRight } from "@/components/icons";
import { getProject, projects } from "@/data/projects";
import { pageMetadata } from "@/data/metadata";
import { site } from "@/data/site";
import { imageDimensions } from "@/data/image-dimensions";
import { getSiteUrl } from "@/data/url";

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) return {};
  return pageMetadata({
    title: `${project.name} SEO Case Study`,
    description: project.summary,
    path: `/case-studies/${project.slug}`,
    image: project.image || "/og-image.png",
  });
}

export default async function CaseStudyPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();

  const currentIndex = projects.findIndex((item) => item.slug === project.slug);
  const nextProject = projects[(currentIndex + 1) % projects.length];
  const siteUrl = getSiteUrl();
  const dimensions = project.image ? imageDimensions[project.image] : undefined;
  const breadcrumbLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: siteUrl },
      { "@type": "ListItem", position: 2, name: "Case Studies", item: `${siteUrl}/case-studies` },
      { "@type": "ListItem", position: 3, name: project.name, item: `${siteUrl}/case-studies/${project.slug}` },
    ],
  };

  return (
    <>
      <section className="case-hero section-pad">
        <div className="container">
          <Link className="back-link" href="/case-studies">← All Case Studies</Link>
          <div className="case-hero-grid">
            <div>
              <div className="project-meta"><span>{project.industry}</span>{project.market && <span>{project.market}</span>}</div>
              <h1>{project.name}</h1>
              <p>{project.summary}</p>
              <div className="case-detail-row">
                <div><span>Duration</span><strong>{project.duration}</strong></div>
                {project.role && <div><span>My Role</span><strong>{project.role}</strong></div>}
                <div><span>Website</span><a href={project.website} target="_blank" rel="noreferrer">Visit website ↗</a></div>
              </div>
              <div className="case-hero-actions">
                <Link href={site.primaryCta.href} className="button button-light">{site.primaryCta.label} <ArrowUpRight className="button-icon" /></Link>
              </div>
            </div>
            <div className="case-metric-stack" aria-label="Case study results">
              {project.metrics.map((metric) => (
                <div key={metric.label}><strong>{metric.value}</strong><span>{metric.label}</span>{metric.detail && <small>{metric.detail}</small>}</div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {project.image && dimensions && (
        <section className="case-image-section" aria-labelledby="evidence-heading">
          <div className="container">
            <div className="case-image-frame">
              <div className="browser-bar"><i /><i /><i /><span id="evidence-heading">{project.imageLabel || "Performance Evidence"}</span></div>
              <Image
                src={project.image}
                alt={`${project.name} ${project.imageLabel || "SEO performance"} screenshot showing the source performance data used in this case study`}
                width={dimensions.width}
                height={dimensions.height}
                sizes="(max-width: 768px) calc(100vw - 28px), (max-width: 1200px) calc(100vw - 48px), 1320px"
              />
            </div>
            <p className="evidence-note">Genuine performance evidence supplied in the portfolio. Analytics data is shown without cosmetic manipulation.</p>
          </div>
        </section>
      )}

      <section className="section-pad">
        <div className="container case-body">
          <div className="case-facts" aria-label="Project facts">
            <div><span>Client / Project</span><strong>{project.name}</strong></div>
            <div><span>Industry</span><strong>{project.industry}</strong></div>
            {project.market && <div><span>Market</span><strong>{project.market}</strong></div>}
            <div><span>Duration</span><strong>{project.duration}</strong></div>
          </div>

          {project.challenge && (
            <div className="case-block">
              <span className="eyebrow">Challenge</span>
              <h2>What needed to change.</h2>
              <p className="body-large">{project.challenge}</p>
            </div>
          )}

          {project.owned && (
            <div className="case-block">
              <span className="eyebrow">What I owned</span>
              <h2>My responsibility in the work.</h2>
              <ul className="ownership-list">{project.owned.map((item) => <li key={item}>{item}</li>)}</ul>
            </div>
          )}

          {project.strategy && (
            <div className="case-block">
              <span className="eyebrow">Strategy</span>
              <h2>How the work was structured.</h2>
              <div className="strategy-grid">
                {project.strategy.map((item, index) => <article key={item.title}><span>0{index + 1}</span><h3>{item.title}</h3><p>{item.body}</p></article>)}
              </div>
            </div>
          )}

          {project.decisions && (
            <div className="case-block">
              <span className="eyebrow">Important decisions</span>
              <h2>Why the strategy was shaped this way.</h2>
              <div className="analysis-list">{project.decisions.map((item) => <p key={item}>{item}</p>)}</div>
            </div>
          )}

          <div className="case-block">
            <span className="eyebrow">Results</span>
            <h2>What the evidence supports.</h2>
            <div className="case-results-grid">
              {project.metrics.map((metric) => <div key={metric.label}><strong>{metric.value}</strong><span>{metric.label}</span>{metric.detail && <small>{metric.detail}</small>}</div>)}
            </div>
            {project.analysis && <div className="analysis-list">{project.analysis.map((item) => <p key={item}>{item}</p>)}</div>}
          </div>

          {project.keywords && (
            <div className="case-block">
              <span className="eyebrow">Ranking highlights</span>
              <h2>Selected keyword positions.</h2>
              <div className="keyword-table" role="table" aria-label={`${project.name} keyword ranking highlights`}>
                <div className="keyword-head" role="row"><span role="columnheader">Keyword</span><span role="columnheader">Position</span></div>
                {project.keywords.map((item) => <div key={item.keyword} role="row"><span role="cell">{item.keyword}</span><strong role="cell">#{item.position}</strong></div>)}
              </div>
            </div>
          )}

          <div className="case-block">
            <span className="eyebrow">Business impact</span>
            <h2>What I can responsibly claim.</h2>
            <p className="body-large">{project.businessImpact || "The supplied evidence verifies organic search visibility, rankings and traffic performance. Verified enquiry, lead, booking or revenue attribution was not provided for this project, so none is claimed here."}</p>
          </div>

          <div className="case-block">
            <span className="eyebrow">Scope</span>
            <h2>Areas involved.</h2>
            <div className="expertise-cloud">{project.services.map((service) => <span key={service}>{service}</span>)}</div>
          </div>
        </div>
      </section>

      <section className="next-case">
        <div className="container">
          <span>Next case study</span>
          <Link href={`/case-studies/${nextProject.slug}`}><strong>{nextProject.name}</strong><ArrowUpRight /></Link>
        </div>
      </section>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd).replace(/</g, "\\u003c") }} />
    </>
  );
}

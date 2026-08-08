import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "@/components/icons";
import { PageCta } from "@/components/page-cta";
import { experience, expertise, site } from "@/data/site";
import { pageMetadata } from "@/data/metadata";

export const metadata: Metadata = pageMetadata({
  title: "Resume",
  description: "Professional experience, education and SEO expertise of Mohammad Sami, Senior SEO Strategist and Organic Growth Consultant.",
  path: "/resume",
});

export default function ResumePage() {
  return (
    <>
      <section className="page-hero section-pad">
        <div className="container resume-hero">
          <div>
            <span className="eyebrow">Resume</span>
            <h1>{site.name}</h1>
            <p>{site.title}</p>
            <div className="page-hero-actions">
              <a href="/documents/mohammad-sami-resume.pdf" className="button" download>
                Download Resume <ArrowUpRight className="button-icon" />
              </a>
              <Link href={site.primaryCta.href} className="button button-secondary">
                {site.primaryCta.label} <ArrowUpRight className="button-icon" />
              </Link>
            </div>
          </div>
          <div className="resume-profile-card">
            <Image
              src="/mohammad-sami-profile.webp"
              alt="Mohammad Sami, Senior SEO Strategist"
              width={560}
              height={700}
              sizes="(max-width: 720px) 96px, (max-width: 1024px) 120px, 148px"
              className="resume-profile-photo"
              priority
            />
            <div className="resume-contact">
              <span className="resume-contact-label">Contact</span>
              <a href={`mailto:${site.email}`}>{site.email}</a>
              <a href={site.whatsappUrl} target="_blank" rel="noreferrer">{site.phoneDisplay}</a>
              <span>{site.location}</span>
            </div>
          </div>
        </div>
      </section>

      <section className="section-pad">
        <div className="container resume-layout">
          <aside>
            <section aria-labelledby="professional-summary">
              <h2 id="professional-summary" className="resume-section-title">Professional Summary</h2>
              <p>I&apos;m a Senior SEO Strategist focused on technical SEO, content architecture, local search and organic growth. My portfolio documents 6+ years of experience across 50+ projects and 15+ global markets.</p>
            </section>

            <section aria-labelledby="core-expertise">
              <h2 id="core-expertise" className="resume-section-title resume-side-label">Core Expertise</h2>
              <div className="resume-skills">{expertise.map((item) => <span key={item}>{item}</span>)}</div>
            </section>

            <section aria-labelledby="education">
              <h2 id="education" className="resume-section-title resume-side-label">Education</h2>
              <div className="education">
                <strong>Master of Science in Computer Science</strong>
                <span>University of South Asia</span>
                <span>Post Graduated in 2017</span>
              </div>
            </section>
          </aside>

          <section aria-labelledby="professional-experience">
            <h2 id="professional-experience" className="resume-section-title">Professional Experience</h2>
            <div className="timeline">
              {experience.map((item) => (
                <article key={`${item.company}-${item.period}`}>
                  <div className="timeline-dot" aria-hidden="true" />
                  <div className="timeline-head">
                    <div><h3>{item.role}</h3><p>{item.company} · {item.location}</p></div>
                    <span>{item.period}</span>
                  </div>
                  <p>{item.description}</p>
                </article>
              ))}
            </div>
          </section>
        </div>
      </section>

      <section className="section-pad soft-section">
        <div className="container cta-panel document-panel">
          <div>
            <span className="eyebrow">Documents</span>
            <h2>Resume & detailed project proof.</h2>
            <p>Download the updated resume or open the detailed 2026 SEO portfolio with genuine project screenshots, rankings and performance context.</p>
          </div>
          <div className="document-actions">
            <a href="/documents/mohammad-sami-resume.pdf" className="button" download>Download Resume <ArrowUpRight className="button-icon" /></a>
            <a href="/documents/mohammad-sami-seo-portfolio-2026.pdf" className="button button-secondary" target="_blank" rel="noreferrer">Open Detailed Portfolio <ArrowUpRight className="button-icon" /></a>
          </div>
        </div>
      </section>

      <PageCta eyebrow="Discuss your next SEO project" title="Need strategy, technical ownership or migration support?" />
    </>
  );
}

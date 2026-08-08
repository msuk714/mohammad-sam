import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "@/components/icons";
import { ProjectCard } from "@/components/project-card";
import { projectGroups, projects } from "@/data/projects";
import { pageMetadata } from "@/data/metadata";
import { site } from "@/data/site";

export const metadata: Metadata = pageMetadata({
  title: "SEO Case Studies",
  description: "Documented SEO case studies across FinTech, local services, e-commerce, hospitality, technical migrations and international markets.",
  path: "/case-studies",
});

const groupCopy = {
  Featured: "Selected high-signal case studies with detailed performance context and supporting evidence.",
  Recent: "Recent growth work across e-commerce, hospitality, interiors and local search.",
  Previous: "Earlier international SEO projects and ranking evidence.",
};

export default function CaseStudiesPage() {
  return (
    <>
      <section className="page-hero section-pad">
        <div className="container narrow">
          <span className="eyebrow">Case Studies</span>
          <h1>Real search growth across markets and business models.</h1>
          <p>Performance data, ranking evidence and project context structured from the latest 2026 SEO portfolio. No revenue or lead metrics are claimed unless they are genuinely verified.</p>
          <div className="page-hero-actions">
            <Link className="button" href={site.primaryCta.href}>{site.primaryCta.label} <ArrowUpRight className="button-icon" /></Link>
          </div>
        </div>
      </section>

      <section className="section-pad case-archive-section">
        <div className="container">
          {projectGroups.map((group) => {
            const items = projects.filter((project) => project.group === group);
            const heading = group === "Featured" ? "Featured projects." : group === "Recent" ? "Recent search work." : "Previous international work.";
            return (
              <section className="archive-group" key={group} aria-labelledby={`group-${group.toLowerCase()}`}>
                <div className="archive-group-head">
                  <div>
                    <span className="eyebrow">{group} Projects</span>
                    <h2 id={`group-${group.toLowerCase()}`}>{heading}</h2>
                  </div>
                  <p>{groupCopy[group]}</p>
                </div>
                <div className="project-archive">
                  {items.map((project) => <ProjectCard project={project} key={project.slug} />)}
                </div>
              </section>
            );
          })}
        </div>
      </section>
    </>
  );
}

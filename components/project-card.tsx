import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "@/components/icons";
import type { Project } from "@/data/projects";
import { imageDimensions } from "@/data/image-dimensions";

export function ProjectCard({ project, large = false }: { project: Project; large?: boolean }) {
  const dimensions = project.image ? imageDimensions[project.image] : undefined;
  return (
    <article className={large ? "project-card project-card-large" : "project-card"}>
      <div className="project-card-copy">
        <div className="project-meta">
          <span>{project.industry}</span>
          {project.market && <span>{project.market}</span>}
        </div>
        <h3>{project.name}</h3>
        <p>{project.summary}</p>
        <div className="project-metrics">
          {project.metrics.slice(0, large ? 3 : 2).map((metric) => (
            <div key={`${project.slug}-${metric.label}`}>
              <strong>{metric.value}</strong>
              <span>{metric.label}</span>
            </div>
          ))}
        </div>
        <div className="project-tags">
          {project.services.slice(0, 3).map((service) => <span key={service}>{service}</span>)}
        </div>
        <Link href={`/case-studies/${project.slug}`} className="text-link">
          View Case Study <ArrowUpRight />
        </Link>
      </div>
      {project.image && dimensions && (
        <Link href={`/case-studies/${project.slug}`} className="project-visual" aria-label={`View ${project.name} case study`}>
          <div className="browser-bar"><i /><i /><i /><span>{project.imageLabel || "Performance Evidence"}</span></div>
          <Image
            src={project.image}
            alt={`${project.name} ${project.imageLabel || "SEO performance"} evidence screenshot`}
            width={dimensions.width}
            height={dimensions.height}
            sizes={large ? "(max-width: 1080px) calc(100vw - 76px), 50vw" : "(max-width: 820px) calc(100vw - 52px), 50vw"}
          />
        </Link>
      )}
    </article>
  );
}

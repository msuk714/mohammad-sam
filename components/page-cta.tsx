import Link from "next/link";
import { ArrowUpRight } from "@/components/icons";
import { site } from "@/data/site";

export function PageCta({
  eyebrow = "Have an SEO challenge?",
  title = "Let’s find the search opportunity behind it.",
  copy = "Share your website, market and growth goal. I’ll use that context to understand where SEO can create the most value.",
}: {
  eyebrow?: string;
  title?: string;
  copy?: string;
}) {
  return (
    <section className="section-pad cta-section" aria-labelledby="page-cta-title">
      <div className="container cta-panel">
        <div>
          <span className="eyebrow">{eyebrow}</span>
          <h2 id="page-cta-title">{title}</h2>
          <p>{copy}</p>
        </div>
        <Link href={site.primaryCta.href} className="button">
          {site.primaryCta.label} <ArrowUpRight className="button-icon" />
        </Link>
      </div>
    </section>
  );
}

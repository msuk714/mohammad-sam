import Link from "next/link";
import { ArrowUpRight } from "@/components/icons";
import { navItems, site } from "@/data/site";

export function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-main">
          <div>
            <span className="eyebrow light">Have an SEO challenge?</span>
            <h2>Let&apos;s find your next organic growth opportunity.</h2>
          </div>
          <Link href={site.primaryCta.href} className="button button-light">
            {site.primaryCta.label} <ArrowUpRight className="button-icon" />
          </Link>
        </div>
        <div className="footer-grid">
          <div>
            <Link href="/" className="footer-brand">{site.name}</Link>
            <p>{site.title}</p>
          </div>
          <div>
            <span className="footer-label">Navigate</span>
            {navItems.map((item) => <Link href={item.href} key={item.href}>{item.label}</Link>)}
          </div>
          <div>
            <span className="footer-label">Contact</span>
            <a href={`mailto:${site.email}`}>{site.email}</a>
            <a href={site.whatsappUrl} target="_blank" rel="noreferrer">WhatsApp {site.phoneDisplay}</a>
            <span>{site.location}</span>
          </div>
        </div>
        <div className="footer-bottom">
          <span>© {new Date().getFullYear()} Mohammad Sami.</span>
          <span>Senior SEO strategy · Technical SEO · Organic growth</span>
        </div>
      </div>
    </footer>
  );
}

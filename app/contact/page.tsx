import type { Metadata } from "next";
import { ContactForm } from "@/components/contact-form";
import { site } from "@/data/site";
import { pageMetadata } from "@/data/metadata";

export const metadata: Metadata = pageMetadata({
  title: "Contact",
  description: "Discuss an SEO strategy, technical SEO, local SEO, e-commerce SEO, migration or GEO/AEO project with Mohammad Sami.",
  path: "/contact",
});

export default function ContactPage() {
  return (
    <section className="contact-page section-pad">
      <div className="container contact-grid">
        <div className="contact-copy">
          <span className="eyebrow">Let&apos;s talk growth</span>
          <h1>Have a website or SEO challenge?</h1>
          <p>Share the site, target market and what you want organic search to achieve. I&apos;ll use that context to understand whether I can help.</p>
          <div className="contact-methods">
            <div><span>Email</span><a href={`mailto:${site.email}`}>{site.email}</a></div>
            <div><span>WhatsApp</span><a href={site.whatsappUrl} target="_blank" rel="noreferrer">{site.phoneDisplay}</a><small>Opens with a pre-filled SEO project message.</small></div>
            <div><span>Based in</span><strong>{site.location}</strong></div>
          </div>
        </div>
        <ContactForm />
      </div>
    </section>
  );
}

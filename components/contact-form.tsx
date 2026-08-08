"use client";

import { FormEvent, useRef, useState } from "react";

const services = [
  "SEO Strategy & Consulting",
  "Technical SEO",
  "Local SEO",
  "E-commerce SEO",
  "SEO Migration",
  "GEO & AEO",
];

type Errors = Partial<Record<"name" | "email" | "website" | "message", string>>;

function validate(formData: FormData): Errors {
  const errors: Errors = {};
  const name = String(formData.get("name") || "").trim();
  const email = String(formData.get("email") || "").trim();
  const website = String(formData.get("website") || "").trim();
  const message = String(formData.get("message") || "").trim();

  if (!name) errors.name = "Please enter your name.";
  if (!email) errors.email = "Please enter your work email.";
  else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) errors.email = "Enter a valid email address.";

  if (website) {
    try {
      const parsed = new URL(website);
      if (!/^https?:$/.test(parsed.protocol)) throw new Error("Invalid protocol");
    } catch {
      errors.website = "Use a complete URL such as https://example.com.";
    }
  }

  if (!message) errors.message = "Tell me what you want organic search to achieve.";
  else if (message.length < 20) errors.message = "Please add a little more detail so I can understand the project.";

  return errors;
}

export function ContactForm() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [message, setMessage] = useState("");
  const [errors, setErrors] = useState<Errors>({});
  const submittingRef = useRef(false);

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (submittingRef.current) return;

    const form = event.currentTarget;
    const formData = new FormData(form);
    const nextErrors = validate(formData);
    setErrors(nextErrors);
    setMessage("");

    if (Object.keys(nextErrors).length) {
      setStatus("error");
      const firstKey = Object.keys(nextErrors)[0];
      const firstInvalid = firstKey ? form.elements.namedItem(firstKey) : null;
      if (firstInvalid instanceof HTMLElement) firstInvalid.focus();
      return;
    }

    submittingRef.current = true;
    setStatus("loading");

    const data = Object.fromEntries(formData.entries());

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      const result = await response.json();
      if (!response.ok) throw new Error(result.error || "Unable to send message.");
      form.reset();
      setErrors({});
      setStatus("success");
      setMessage("Thanks — your project details have been sent. I’ll reply using the contact details you provided.");
    } catch (error) {
      setStatus("error");
      setMessage(error instanceof Error ? error.message : "Unable to send message. Please use WhatsApp or email instead.");
    } finally {
      submittingRef.current = false;
    }
  }

  return (
    <form className="contact-form" onSubmit={onSubmit} noValidate aria-describedby="form-status">
      <div className="form-row">
        <div className="field-group">
          <label htmlFor="name">Name <span aria-hidden="true">*</span></label>
          <input id="name" name="name" required autoComplete="name" aria-invalid={Boolean(errors.name)} aria-describedby={errors.name ? "name-error" : undefined} />
          {errors.name && <span className="field-error" id="name-error">{errors.name}</span>}
        </div>
        <div className="field-group">
          <label htmlFor="email">Work Email <span aria-hidden="true">*</span></label>
          <input id="email" name="email" required type="email" autoComplete="email" inputMode="email" aria-invalid={Boolean(errors.email)} aria-describedby={errors.email ? "email-error" : undefined} />
          {errors.email && <span className="field-error" id="email-error">{errors.email}</span>}
        </div>
      </div>

      <div className="form-row">
        <div className="field-group">
          <label htmlFor="website">Website / Company URL</label>
          <input id="website" name="website" type="url" inputMode="url" placeholder="https://example.com" aria-invalid={Boolean(errors.website)} aria-describedby={errors.website ? "website-error" : undefined} />
          {errors.website && <span className="field-error" id="website-error">{errors.website}</span>}
        </div>
        <div className="field-group">
          <label htmlFor="service">Service Required</label>
          <select id="service" name="service" defaultValue={services[0]}>
            {services.map((service) => <option key={service}>{service}</option>)}
          </select>
        </div>
      </div>

      <div className="field-group">
        <label htmlFor="message">Project Goals <span aria-hidden="true">*</span></label>
        <textarea id="message" name="message" rows={6} required placeholder="Tell me about the website, current challenge, target market and what you want SEO to achieve." aria-invalid={Boolean(errors.message)} aria-describedby={errors.message ? "message-error" : undefined} />
        {errors.message && <span className="field-error" id="message-error">{errors.message}</span>}
      </div>

      <div className="honeypot" aria-hidden="true">
        <label htmlFor="companyUrl">Company URL</label>
        <input id="companyUrl" name="companyUrl" tabIndex={-1} autoComplete="off" />
      </div>

      <button className="button" type="submit" disabled={status === "loading"} aria-disabled={status === "loading"}>
        {status === "loading" ? "Sending…" : "Send Project Details"}
      </button>
      <p id="form-status" className={`form-status ${status}`} role="status" aria-live="polite">
        {message}
      </p>
    </form>
  );
}

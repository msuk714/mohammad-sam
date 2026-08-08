import { NextResponse } from "next/server";

const allowedServices = new Set([
  "SEO Strategy & Consulting",
  "Technical SEO",
  "Local SEO",
  "E-commerce SEO",
  "SEO Migration",
  "GEO & AEO",
]);

function clean(value: unknown, max = 2000) {
  return typeof value === "string" ? value.trim().slice(0, max) : "";
}

function validUrl(value: string) {
  if (!value) return true;
  try {
    const url = new URL(value);
    return url.protocol === "http:" || url.protocol === "https:";
  } catch {
    return false;
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    if (clean(body.companyUrl)) return NextResponse.json({ ok: true });

    const name = clean(body.name, 120);
    const email = clean(body.email, 180);
    const website = clean(body.website, 300);
    const rawService = clean(body.service, 120);
    const service = allowedServices.has(rawService) ? rawService : "SEO Strategy & Consulting";
    const message = clean(body.message, 4000);

    if (!name || !email || !message || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json({ error: "Please complete the required fields with a valid email." }, { status: 400 });
    }
    if (message.length < 20) {
      return NextResponse.json({ error: "Please add a little more detail about the project." }, { status: 400 });
    }
    if (!validUrl(website)) {
      return NextResponse.json({ error: "Please provide a valid website URL beginning with http:// or https://." }, { status: 400 });
    }

    const apiKey = process.env.RESEND_API_KEY;
    const from = process.env.RESEND_FROM_EMAIL;
    const to = process.env.CONTACT_TO_EMAIL;
    if (!apiKey || !from || !to) {
      return NextResponse.json({ error: "The email form is not configured yet. Please contact me by WhatsApp or email." }, { status: 503 });
    }

    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: { Authorization: `Bearer ${apiKey}`, "Content-Type": "application/json" },
      body: JSON.stringify({
        from,
        to: [to],
        reply_to: email,
        subject: `Portfolio lead: ${name} — ${service}`,
        text: [
          `Name: ${name}`,
          `Email: ${email}`,
          `Website: ${website || "Not supplied"}`,
          `Service: ${service}`,
          "",
          message,
        ].join("\n"),
      }),
    });

    if (!response.ok) {
      return NextResponse.json({ error: "Unable to deliver the message right now. Please use WhatsApp or email instead." }, { status: 502 });
    }
    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ error: "Invalid request." }, { status: 400 });
  }
}

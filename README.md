# Mohammad Sami — SEO Portfolio Website

Production-ready personal SEO consultant portfolio built for **GitHub → Vercel** deployment.

## Stack

- Next.js App Router
- React + TypeScript
- Dependency-light responsive CSS design system
- Next/Image for project evidence
- Route-specific metadata, canonical URLs, Open Graph, sitemap, robots.txt, Person/WebSite schema and case-study breadcrumbs
- Vercel-compatible contact route with optional Resend email delivery

## Main routes

- `/`
- `/about`
- `/services`
- `/case-studies`
- `/resume`
- `/contact`
- `/case-studies/[slug]` for all existing case studies

## Responsive targets

The CSS system is intentionally designed for the requested viewports rather than only shrinking desktop layouts.

Mobile:
- 320 × 568
- 375 × 667
- 390 × 844
- 412 × 915

Tablet / iPad:
- 768 × 1024
- 820 × 1180
- 1024 × 1366

Desktop:
- 1280 × 720
- 1366 × 768
- 1440 × 900
- 1536 × 864
- 1920 × 1080

## Run locally

```bash
npm install
cp .env.example .env.local
npm run dev
```

Open `http://localhost:3000`.

## Quality checks

```bash
npm run lint
npm run build
```

## Deploy on Vercel

1. Upload this folder to a GitHub repository.
2. In Vercel choose **Add New → Project**.
3. Import the GitHub repository.
4. Add `NEXT_PUBLIC_SITE_URL` in Vercel Environment Variables.
5. Deploy.

## Contact form email delivery

The contact form includes client/server validation, loading/error/success states, duplicate-submit guarding and a honeypot. To deliver submissions by email, add:

```env
NEXT_PUBLIC_SITE_URL=https://mohammad-sam.vercel.app
RESEND_API_KEY=re_xxxxxxxxx
RESEND_FROM_EMAIL=Portfolio <hello@your-domain.com>
CONTACT_TO_EMAIL=iammsuk204@gmail.com
```

If Resend is not configured, visitors still have direct email and WhatsApp contact options.

## Content editing

- Personal details, CTAs, services and experience: `data/site.ts`
- Case-study data: `data/projects.ts`
- Image intrinsic dimensions: `data/image-dimensions.ts`
- Route metadata helper: `data/metadata.ts`
- Main page structure: `app/`
- Responsive design system: `app/globals.css`
- Evidence screenshots: `public/projects/`
- Resume and detailed portfolio: `public/documents/`

## Accuracy notes

- The case-study archive uses the evergreen **Featured Projects** label for completed 2026 work.
- Two Guys Home Furnishing retains its corrected Search Console metrics only.
- The downloadable resume consistently uses **6+ years** and **Multiple Companies**.
- The detailed portfolio PDF includes the corrected **Featured Projects** heading and **Roman Electric Co. Inc.** name.

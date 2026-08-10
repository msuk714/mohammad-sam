# Mohammad Sami — SEO Portfolio 2026

A dependency-free, Vercel-ready static portfolio built from Mohammad Sami's supplied 2026 resume and SEO portfolio evidence.

## Structure
- `index.html` — recruiter/client-first homepage
- `projects.html` — searchable archive of 15 projects
- `case-studies/` — individual SEO case study pages
- `data/projects.json` — single source of truth for project content
- `scripts/generate.py` — regenerates the static project pages
- `assets/` — CSS, JavaScript, profile image, Search Console evidence and downloadable PDFs
- `vercel.json` — static deployment/security headers
- `robots.txt` / `sitemap.xml` — SEO publishing files

## Local preview
```bash
python -m http.server 8000
```
Open `http://localhost:8000`.

## Edit project content
Update `data/projects.json`, then run:
```bash
python scripts/generate.py
```

## Deploy to Vercel
Import the GitHub repository into Vercel. No framework preset or build command is required; deploy the repository root as a static project.

## Important before custom-domain launch
Update the hostname in `sitemap.xml` if the production domain differs from `https://mohammad-sam.vercel.app`.


## Evidence image zoom
All Search Console screenshots inside `.gsc-figure` open in a full-screen modal on click/tap. The page is scroll-locked while the preview is open. Close via the × button, backdrop click/tap, or Escape. Keyboard Enter/Space also opens the focused image.

## Download files
The `/assets/docs/` folder contains the exact latest Resume 2026 and SEO Portfolio 2026 PDFs supplied for this build.

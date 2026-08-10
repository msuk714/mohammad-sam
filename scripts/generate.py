from pathlib import Path
import json, html
from urllib.parse import urlparse

ROOT=Path(__file__).resolve().parents[1]
projects=json.loads((ROOT/'data/projects.json').read_text())
projects=sorted(projects,key=lambda x:x['order'])

NAME='Mohammad Sami'
TITLE='Senior SEO Strategist & Growth Consultant'
DESC='Senior SEO Strategist with 6+ years of experience in technical SEO, content architecture, local SEO, e-commerce SEO, website migrations, GEO and AEO.'
EMAIL='iammsuk204@gmail.com'
PHONE='+92 312 654 0714'
WA='https://wa.me/923126540714'

def e(s): return html.escape(str(s), quote=True)

def header(current=''):
    def nav(label, href, key, extra=''):
        cur=' aria-current="page"' if current==key else ''
        return f'<a href="{href}"{cur} class="{extra}">{label}</a>'
    return f'''<a class="skip-link" href="#main">Skip to content</a>
<header class="site-header">
  <div class="container nav-shell">
    <a class="brand" href="/"><span class="brand-mark">MS</span><span>Mohammad Sami<small>SEO Strategy & Growth</small></span></a>
    <button class="menu-toggle" data-menu-toggle aria-controls="primary-nav" aria-expanded="false" aria-label="Toggle navigation">☰</button>
    <nav class="nav-links" id="primary-nav" data-nav aria-label="Primary navigation">
      {nav('Home','/','home')}
      <a href="/#expertise">Expertise</a>
      {nav('Case Studies','/case-studies','projects')}
      <a href="/#experience">Experience</a>
      <a href="/assets/docs/Mohammad-Sami-SEO-Resume-2026.pdf" target="_blank" rel="noopener">Resume</a>
      <a class="nav-cta" href="mailto:{EMAIL}">Contact</a>
    </nav>
  </div>
</header>'''

def footer():
    return f'''<footer class="site-footer"><div class="container footer-shell">
      <div>© <span data-current-year>2026</span> {NAME}. Built around verified project evidence.</div>
      <div class="footer-links"><a href="mailto:{EMAIL}">Email</a><a href="{WA}" target="_blank" rel="noopener">WhatsApp</a><a href="/case-studies">Case Studies</a><a href="/assets/docs/Mohammad-Sami-SEO-Resume-2026.pdf">Resume PDF</a></div>
    </div></footer>
    <script src="/assets/js/site.js" defer></script>'''

def doc(title, body, current='', description=DESC, extra_scripts='', schema=''):
    schema_tag=f'<script type="application/ld+json">{schema}</script>' if schema else ''
    return f'''<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width,initial-scale=1">
  <title>{e(title)}</title>
  <meta name="description" content="{e(description)}">
  <meta name="theme-color" content="#0b2742">
  <meta property="og:type" content="website">
  <meta property="og:title" content="{e(title)}">
  <meta property="og:description" content="{e(description)}">
  <meta property="og:image" content="/assets/images/mohammad-sami.png">
  <meta name="twitter:card" content="summary_large_image">
  <link rel="icon" href="/assets/images/favicon.svg" type="image/svg+xml">
  <link rel="manifest" href="/site.webmanifest">
  <link rel="stylesheet" href="/assets/css/styles.css">
  {schema_tag}
</head>
<body>
{header(current)}
{body}
{footer()}
{extra_scripts}
</body>
</html>'''

def project_metric_card(p):
    slug=p['slug']
    mapping={
      'roman-electric':('+105.3%','Impressions'),
      'milwaukee-signarama':('+83.8%','Clicks'),
      'p2ezpay':('+954%','Impressions'),
      'two-guys-home-furnishing-dubai':('+183.5%','Impressions'),
      'blinds-and-curtains-dubai':('1.09M','Impressions'),
      'khanabadosh-glamps':('#4','Khanabadosh pods'),
      'latitude-resort':('#1','Destination rankings')
    }
    return mapping.get(slug,('Case','Study'))

def case_card(p):
    metric, label=project_metric_card(p)
    image=p.get('image')
    visual=f'<div class="case-visual"><img src="/assets/images/gsc/{e(image)}" alt="Google Search Console performance snapshot for {e(p["name"])}" loading="lazy" width="960" height="360"></div>' if image else ''
    return f'''<article class="case-card">
      {visual}
      <div class="case-body">
        <div class="case-meta"><span class="chip">{e(p['label'])}</span><span class="chip chip-muted">{e(p['sector'])}</span></div>
        <h3>{e(p['name'])}</h3>
        <p>{e(p['overview'])}</p>
        <div class="metric-row"><div class="metric"><strong>{e(metric)}</strong><span>{e(label)}</span></div><div class="metric"><strong>{e(p['engagement'].split(' - ')[0])}</strong><span>Engagement start</span></div></div>
        <a class="case-link" href="/case-studies/{e(p['slug'])}">Read case study</a>
      </div>
    </article>'''

experiences=[
 ('Senior SEO Expert','AtOptimize, Islamabad','Jun 2025 - Present','Driving organic traffic and rankings through SEO strategy, execution, technical optimization and current search practices.'),
 ('SEO Team Lead','Qull Tech, Islamabad','Jul 2024 - Jun 2025','Led SEO strategies and a team to improve website optimization, search rankings and organic traffic.'),
 ('Senior SEO Specialist','JK Technology, Lahore / USA (Remote)','Feb 2024 - Jun 2024','Optimized content, researched keywords and executed SEO strategies for a US-focused remote engagement.'),
 ('SEO Expert','Digital Marketing Firms, Islamabad (Remote)','Dec 2022 - Jan 2024','Executed SEO strategy, keyword research and content optimization across agency-led client work.'),
 ('SEO Team Lead','OpenBitz, Attock, Punjab','Mar 2022 - Nov 2022','Developed and executed SEO strategies focused on rankings, organic traffic and measurable search performance.'),
 ('SEO Expert','Multiple Companies (Remote)','Feb 2019 - Feb 2022','Led remote SEO work across multiple companies, supporting traffic, rankings and site performance.')
]

featured=[p for p in projects if p.get('featured')][:6]

home=f'''<main id="main">
<section class="hero">
  <div class="container hero-shell">
    <div>
      <div class="eyebrow">Search strategy for measurable business growth</div>
      <h1>Mohammad Sami<span class="hero-title-accent">Senior SEO Strategist & Growth Consultant</span></h1>
      <p class="hero-copy">I build search systems that connect technical foundations, content strategy and commercial intent to qualified traffic, stronger visibility and sustainable organic growth.</p>
      <div class="hero-actions">
        <a class="btn btn-primary" href="#featured">View Case Studies <span aria-hidden="true">→</span></a>
        <a class="btn btn-secondary" href="/assets/docs/Mohammad-Sami-SEO-Resume-2026.pdf" target="_blank" rel="noopener">Download Resume</a>
        <a class="btn btn-ghost" href="mailto:{EMAIL}">Start a Conversation</a>
      </div>
      <div class="hero-proof" aria-label="Experience highlights">
        <div class="proof-item"><strong>6+</strong><span>Years in SEO</span></div>
        <div class="proof-item"><strong>50+</strong><span>Projects delivered</span></div>
        <div class="proof-item"><strong>15+</strong><span>Global markets</span></div>
        <div class="proof-item"><strong>+954%</strong><span>Peak impression growth</span></div>
      </div>
    </div>
    <div class="hero-media">
      <div class="portrait-card"><img src="/assets/images/mohammad-sami.png" alt="Portrait of Mohammad Sami" width="410" height="512"></div>
      <div class="availability"><b>Available for selected engagements</b><span>Consulting · Agency collaboration · SEO leadership</span></div>
    </div>
  </div>
</section>

<section class="section" id="expertise">
  <div class="container">
    <div class="section-head"><div><p class="section-kicker">Core expertise</p><h2 class="section-title">Search growth, built as a system.</h2><p class="section-lead">Strategy, technical execution, content architecture and performance analysis working together instead of as isolated SEO tasks.</p></div></div>
    <div class="expertise-grid">
      <article class="expertise-card"><span class="expertise-number">01 / TECHNICAL</span><h3>Technical SEO & Migrations</h3><p>Crawlability, indexation, Core Web Vitals, schema, URL continuity, redirect mapping and post-launch recovery across CMS and custom-platform migrations.</p></article>
      <article class="expertise-card"><span class="expertise-number">02 / CONTENT</span><h3>Content Architecture & Intent</h3><p>Keyword research, content clusters, service silos, internal linking and page architecture aligned with search intent and commercial relevance.</p></article>
      <article class="expertise-card"><span class="expertise-number">03 / GROWTH</span><h3>Local, E-commerce & GEO/AEO</h3><p>Local discovery, e-commerce categories, branded and non-brand visibility, GEO/AEO considerations and search strategy across multiple international markets.</p></article>
    </div>
  </div>
</section>

<section class="section section-soft" id="featured">
  <div class="container">
    <div class="section-head"><div><p class="section-kicker">Selected case studies</p><h2 class="section-title">Evidence over adjectives.</h2><p class="section-lead">Recorded Search Console comparisons, ranking captures and migration outcomes from the supplied 2026 portfolio.</p></div><a class="text-link" href="/case-studies">View all 15 projects →</a></div>
    <div class="case-grid">{''.join(case_card(p) for p in featured)}</div>
  </div>
</section>

<section class="section">
  <div class="container evidence-wrap">
    <div class="evidence-panel">
      <p class="section-kicker">How I work</p><h2 class="section-title" style="font-size:38px">From search problem to measurable outcome.</h2>
      <div class="evidence-list">
        <div class="evidence-item"><div class="evidence-icon">01</div><div><h3>Diagnose the constraint</h3><p>Technical foundations, query footprint, information architecture and current organic performance are evaluated before priorities are set.</p></div></div>
        <div class="evidence-item"><div class="evidence-icon">02</div><div><h3>Align SEO with commercial intent</h3><p>Service pages, product categories, location pages and content clusters are structured around how qualified users actually search.</p></div></div>
        <div class="evidence-item"><div class="evidence-icon">03</div><div><h3>Execute and interpret</h3><p>Changes are measured in context — clicks, impressions, position, CTR, rankings and migration stability rather than one isolated metric.</p></div></div>
      </div>
    </div>
    <aside class="principles-panel"><p class="section-kicker" style="color:#77d4d5">Working principles</p><h3>SEO that can survive scrutiny.</h3><div class="principle"><strong>Measured claims</strong><span>Performance statements stay tied to recorded project evidence and the period being compared.</span></div><div class="principle"><strong>Context matters</strong><span>CTR and blended position are interpreted alongside changes in query coverage and absolute traffic.</span></div><div class="principle"><strong>Build SEO into the product</strong><span>For redesigns and migrations, SEO is planned into structure and launch continuity rather than patched in afterward.</span></div></aside>
  </div>
</section>

<section class="section section-soft" id="experience">
  <div class="container">
    <div class="section-head"><div><p class="section-kicker">Professional experience</p><h2 class="section-title">6+ years across agency, remote and lead roles.</h2></div><a class="text-link" href="/assets/docs/Mohammad-Sami-SEO-Resume-2026.pdf">Open full resume →</a></div>
    <div class="timeline">{''.join(f'<article class="timeline-item"><span class="timeline-dot" aria-hidden="true"></span><div class="timeline-card"><header><div><h3>{e(t)}</h3><div class="company">{e(c)}</div></div><time>{e(d)}</time></header><p>{e(x)}</p></div></article>' for t,c,d,x in experiences)}</div>
    <div class="market-strip" aria-label="Global market experience"><span>USA</span><span>UK</span><span>UAE</span><span>Pakistan</span><span>Australia</span><span>Germany</span><span>Italy</span><span>Mexico</span></div>
  </div>
</section>

<section class="cta-section" id="contact"><div class="container"><div class="cta-card"><div><h2>Need SEO leadership with execution behind it?</h2><p>Available for consulting, agency collaboration and SEO leadership opportunities. Reach out directly by email or WhatsApp.</p></div><div class="cta-actions"><a class="btn btn-primary" href="mailto:{EMAIL}">Email Mohammad</a><a class="btn btn-secondary" href="{WA}" target="_blank" rel="noopener">WhatsApp</a></div></div></div></section>
</main>'''

person_schema=json.dumps({
  "@context":"https://schema.org","@type":"Person","name":NAME,"jobTitle":TITLE,
  "email":EMAIL,"telephone":PHONE,"address":{"@type":"PostalAddress","addressLocality":"Islamabad","addressCountry":"PK"},
  "knowsAbout":["Technical SEO","Content Strategy","Local SEO","E-commerce SEO","GEO","AEO","Website Migrations","WordPress"]
},ensure_ascii=False)
(ROOT/'index.html').write_text(doc(f'{NAME} | {TITLE}',home,'home',DESC,schema=person_schema))

# Projects archive
sectors=[]
for p in projects:
    if p['sector'] not in sectors: sectors.append(p['sector'])
archive_cards=[]
for p in projects:
    search=' '.join([p['name'],p['sector'],*p.get('markets',[]),p.get('overview','')]).lower()
    archive_cards.append(f'''<article class="archive-card" data-project-card data-sector="{e(p['sector'])}" data-search="{e(search)}">
      <span class="chip">{e(p['label'])}</span><h2><a href="/case-studies/{e(p['slug'])}">{e(p['name'])}</a></h2><p>{e(p['overview'])}</p><div class="archive-footer"><span>{e(p['sector'])}</span><span>{e(p['engagement'])}</span></div>
    </article>''')
projects_body=f'''<main id="main">
<section class="page-hero"><div class="container"><div class="breadcrumbs"><a href="/">Home</a> / Case Studies</div><p class="section-kicker" style="margin-top:18px">Portfolio archive</p><h1>SEO case studies & project evidence.</h1><p>15 recorded projects across service businesses, e-commerce, FinTech, hospitality, health, education and platform migrations. Historical rankings can vary by date, device and location.</p></div></section>
<section class="section" style="padding-top:48px"><div class="container">
  <div class="filters"><input class="filter-input" type="search" placeholder="Search projects, sector or market" aria-label="Search projects" data-project-search><button class="filter-btn" data-filter="All" aria-pressed="true">All</button>{''.join(f'<button class="filter-btn" data-filter="{e(s)}" aria-pressed="false">{e(s)}</button>' for s in sectors)}</div>
  <div class="project-archive" data-project-grid>{''.join(archive_cards)}<div class="empty-state" data-empty hidden>No matching projects found.</div></div>
</div></section>
<section class="cta-section"><div class="container"><div class="cta-card"><div><h2>Prefer a concise version?</h2><p>Download the ATS-friendly 2026 resume, or open the original detailed SEO portfolio PDF.</p></div><div class="cta-actions"><a class="btn btn-primary" href="/assets/docs/Mohammad-Sami-SEO-Resume-2026.pdf">Resume PDF</a><a class="btn btn-secondary" href="/assets/docs/Mohammad-Sami-SEO-Portfolio-2026.pdf">Portfolio PDF</a></div></div></div></section>
</main>'''
(ROOT/'projects.html').write_text(doc(f'Case Studies | {NAME}',projects_body,'projects','SEO case studies and project evidence from Mohammad Sami, Senior SEO Strategist.',extra_scripts='<script src="/assets/js/projects.js" defer></script>'))

# case-study pages
for i,p in enumerate(projects):
    facts=[('Website',f'<a href="{e(p["website"])}" target="_blank" rel="noopener">{e(urlparse(p["website"]).netloc)}</a>'),('Engagement',e(p['engagement'])),('Role',e(p['role'])),('Sector',e(p['sector']))]
    if p.get('milestone'): facts.append(('Milestone',e(p['milestone'])))
    facts_html=''.join(f'<div class="fact"><strong>{label}</strong><span>{value}</span></div>' for label,value in facts)
    scope=''
    if p.get('scope'):
        scope='<h2>Strategy / Scope</h2><ul class="scope-list">'+''.join(f'<li>{e(x)}</li>' for x in p['scope'])+'</ul>'
    metrics=''
    if p.get('metrics'):
        has_prev=any('previous' in m for m in p['metrics'])
        if has_prev:
            rows=''.join(f'<tr><td>{e(m["label"])}</td><td>{e(m.get("previous","-"))}</td><td>{e(m.get("current","-"))}</td><td>{e(m.get("change","-"))}</td></tr>' for m in p['metrics'])
            metrics=f'<h2>Performance Metrics</h2><div style="overflow-x:auto"><table class="metric-table"><thead><tr><th>Metric</th><th>Previous</th><th>Current</th><th>Change</th></tr></thead><tbody>{rows}</tbody></table></div>'
        else:
            rows=''.join(f'<tr><td>{e(m["label"])}</td><td>{e(m.get("current","-"))}</td></tr>' for m in p['metrics'])
            metrics=f'<h2>Performance Metrics</h2><div style="overflow-x:auto"><table class="metric-table"><thead><tr><th>Metric</th><th>Performance</th></tr></thead><tbody>{rows}</tbody></table></div>'
    rankings=''
    if p.get('rankings'):
        rows=''.join(f'<tr><td>{j}</td><td>{e(k)}</td><td>{e(r)}</td></tr>' for j,(k,r) in enumerate(p['rankings'],1))
        rankings=f'<h2>Ranking Highlights</h2><div style="overflow-x:auto"><table class="metric-table"><thead><tr><th>#</th><th>Keyword / Search Query</th><th>Captured Rank</th></tr></thead><tbody>{rows}</tbody></table></div>'
    image=''
    if p.get('image'):
        image=f'<h2>Search Console Evidence</h2><figure class="gsc-figure"><img src="/assets/images/gsc/{e(p["image"])}" alt="Google Search Console evidence for {e(p["name"])}" width="960" height="360"><figcaption>Historical Google Search Console snapshot reproduced from the supplied 2026 SEO portfolio.</figcaption></figure>'
    prev=projects[i-1] if i>0 else None
    nxt=projects[i+1] if i<len(projects)-1 else None
    np=''
    if prev or nxt:
        left=f'<a href="/case-studies/{e(prev["slug"])}"><span>Previous</span><strong>← {e(prev["name"])}</strong></a>' if prev else '<div></div>'
        right=f'<a href="/case-studies/{e(nxt["slug"])}"><span>Next</span><strong>{e(nxt["name"])} →</strong></a>' if nxt else '<div></div>'
        np=f'<nav class="next-prev" aria-label="Case study navigation">{left}{right}</nav>'
    body=f'''<main id="main">
<section class="case-hero"><div class="container"><div class="breadcrumbs"><a href="/">Home</a> / <a href="/case-studies">Case Studies</a> / {e(p['name'])}</div><div class="case-hero-grid"><div><p class="section-kicker" style="margin-top:20px">{e(p['label'])} · {p['order']:02d}</p><h1>{e(p['name'])}</h1><p class="case-sub">{e(p['overview'])}</p></div><div class="case-facts">{facts_html}</div></div></div></section>
<section class="case-content"><div class="container content-grid"><article class="prose"><h2>Project Overview</h2><p>{e(p['overview'])}</p>{scope}{metrics}{rankings}<div class="interpretation"><strong>What the data shows</strong>{e(p['interpretation'])}</div>{image}{np}</article><aside><div class="sidebar-card"><h3>Explore the evidence</h3><p>This case study uses the project data and historical captures supplied in the 2026 portfolio. Ranking positions can vary by time, device and location.</p><div class="sidebar-actions"><a class="btn btn-primary" href="{e(p['website'])}" target="_blank" rel="noopener">Visit Project Site</a><a class="btn btn-secondary" href="/case-studies">All Case Studies</a><a class="btn btn-ghost" href="/assets/docs/Mohammad-Sami-SEO-Resume-2026.pdf">Download Resume</a></div></div></aside></div></section>
</main>'''
    desc=f'{p["name"]} SEO case study by Mohammad Sami. {p["overview"]}'
    (ROOT/'case-studies'/f'{p["slug"]}.html').write_text(doc(f'{p["name"]} SEO Case Study | {NAME}',body,'projects',desc[:300]))

# 404
body404=f'''<main id="main"><section class="page-hero"><div class="container"><p class="section-kicker">404</p><h1>That page is not in the index.</h1><p>The URL may have changed. Use the case study archive or return to the homepage.</p><div class="hero-actions" style="margin-top:26px"><a class="btn btn-primary" href="/">Back Home</a><a class="btn btn-secondary" href="/case-studies">Browse Case Studies</a></div></div></section></main>'''
(ROOT/'404.html').write_text(doc(f'Page Not Found | {NAME}',body404))

# sitemap without absolute domain: useful template; domain should be replaced after deployment
paths=['/','/case-studies']+[f'/case-studies/{p["slug"]}' for p in projects]
(ROOT/'sitemap.xml').write_text('<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n'+''.join(f'  <url><loc>https://mohammad-sam.vercel.app{path}</loc></url>\n' for path in paths)+'</urlset>\n')
print('Generated', len(projects), 'case study pages')

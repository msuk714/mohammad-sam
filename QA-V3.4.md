# V3.4 QA Notes

- 19 HTML pages parsed successfully.
- 0 missing local links/assets detected.
- `site.js` passes `node --check`.
- Latest supplied Resume PDF and Portfolio PDF are byte-for-byte identical to the user uploads (SHA-256 verified).
- Ranking evidence added from the connected Google Doc:
  - Natural Motion Myopractics: 9 keywords, 9 SERP proof screenshots.
  - Formazione Online e Università Telematica: 10 keywords, ranked URLs only (no screenshot source supplied).
  - Rogu Group: 5 keywords, ranked URLs only (no screenshot source supplied).
  - Paws & Relax: 12 keywords, 12 SERP proof screenshots.
- Ranking screenshots use the historical Imgur URLs recorded in the source Google Doc and open in the existing scroll-locked lightbox.
- Ranking tables switch to stacked cards below 700px to preserve all columns without cramped horizontal scrolling.
- A visible Portfolio PDF CTA is included on all content pages; `/projects` remains a redirect to `/case-studies`.

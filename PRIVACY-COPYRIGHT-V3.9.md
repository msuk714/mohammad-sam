# V3.9 Privacy + Copyright Mode

- Only `/seo-resume` is intentionally indexable.
- Homepage, case-study archive, and case-study detail pages use `noindex`.
- GSC images and PDF documents receive `X-Robots-Tag` noindex headers.
- Case-study pages include a third-party rights / historical evidence disclaimer.
- GSC screenshots are watermarked in the distributed build.
- Portfolio PDF is watermarked.
- `robots.txt` intentionally allows crawling so search engines can read `noindex`.

Important: noindex reduces search visibility; it does not make a public URL private. Use authentication/password protection if confidential client material must not be publicly accessible.

# David Gordon Storyboards — Netlify staging build v0.3

This is the first production-shaped static build of the new site. It is ready to preview locally or upload to Netlify Drop.

## Included

- `index.html` — Human Storyboards homepage
- `campaigns/sketchy-storyboards.html` — alternate campaign landing page
- `campaigns/funny-art-directors.html` — second campaign proof-of-concept
- `projects/fisher-price.html` — reusable project/case-study pattern
- `assets/css/site.css` — shared responsive design system
- `assets/js/site.js` — navigation, portfolio filters, campaign-tag persistence
- `netlify.toml` — clean URLs, security headers, asset caching
- `404.html`, `robots.txt`, `sitemap.xml`

## Preview locally

From this folder:

```bash
python3 -m http.server 8080
```

Open `http://localhost:8080`.

## Publish a free staging site

1. Sign in to Netlify.
2. Open Netlify Drop.
3. Drag this entire folder into the upload area.
4. Netlify assigns a temporary `*.netlify.app` address.
5. Do not connect the live domain yet.

## Important staging notes

- Images are temporarily loaded from David's existing Wix media URLs. This makes the build immediately reviewable but is not the final asset setup.
- Before launch, download and optimize the selected originals into `assets/images/`, then replace the URLs in the HTML.
- The email buttons temporarily point to the existing Wix contact page because the exact public email address still needs to be supplied.
- Client/agency captions are provisional and should be checked against final credits.
- Analytics and the editing dashboard are deliberately not installed yet. First approve the visual and content system.

## Next technical pass

1. Final image curation and local image optimization (`avif` + `webp` fallbacks).
2. Exact email address and social links.
3. Convert repeated content into structured project records.
4. Add the CMS/admin workflow after design approval.
5. Add GA4 and campaign UTM validation.

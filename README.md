## SEO & production readiness

This project is configured for search-engine indexing and a production launch on Vercel at `www.primeagroexportsltd.com`. Here's what's in place and what you need to do manually.

### What's already configured

- **Per-page metadata** — every of the route sets its own `<title>`, meta description, canonical URL, and Open Graph/Twitter tags via `src/components/SEO.jsx` (uses React 19's native title/meta/link hoisting, no extra library).
- **Structured data (JSON-LD)** — sitewide `Organization` schema (`src/components/OrganizationSchema.jsx`), plus page-specific schema on the Contact page and an `ItemList` on each product category page.
- **`public/robots.txt`** — allows crawling, points to the sitemap.
- **`public/sitemap.xml`** — auto-regenerated from `src/data/seoRoutes.js` by `scripts/generate-sitemap.js`, which runs automatically before every `npm run build` (see `prebuild` in `package.json`). Add a new page? Add its route to `seoRoutes.js` and the sitemap updates itself on the next build.
- **Favicons & app icons** — full set generated from `public/logo.png` (favicon.ico, 16/32px PNGs, apple-touch-icon, android-chrome icons) plus `site.webmanifest`.
- **Open Graph share image** — `public/og-image.jpg`, shown when links are shared on social/messaging apps.
- **`vercel.json`**:
  - SPA rewrite so deep links (e.g. `/our-products/flowers`) serve the app instead of 404ing.
  - Redirects the bare apex domain to `https://www.primeagroexportsltd.com` (matches your "www is Production" domain setup).
  - Long-lived cache headers for images/assets, short cache for `robots.txt`/`sitemap.xml`.
  - Basic security headers (`X-Content-Type-Options`, `X-Frame-Options`, `Referrer-Policy`, `Permissions-Policy`).
- **Proper 404 handling** — unknown routes render `NotFoundPage` (noindexed) instead of silently redirecting to the homepage, which avoids soft-404 issues in Search Console.
- **Image performance** — hero image marked `fetchpriority="high"`, all below-the-fold images use `loading="lazy"`, and alt text is descriptive throughout.

### What you need to do manually

1. **Deploy this code to Vercel.** Once live, confirm `https://www.primeagroexportsltd.com/robots.txt` and `/sitemap.xml` both load, and that a deep link like `https://www.primeagroexportsltd.com/our-products/flowers` loads the app instead of a 404 (this checks that `vercel.json`'s rewrite is active).
2. **Verify ownership in Google Search Console** (search.google.com/search-console):
   - Add the property as a **Domain property** for `primeagroexportsltd.com` (covers both www and non-www, and all subdomains) via DNS TXT record — this is the recommended method, or
   - Use the **URL prefix** method for `https://www.primeagroexportsltd.com` and verify via the HTML tag: paste the code Search Console gives you into the commented-out `<meta name="google-site-verification" ...>` line in `index.html`.
3. **Submit the sitemap** in Search Console → Sitemaps → enter `sitemap.xml` (resolves to `https://www.primeagroexportsltd.com/sitemap.xml`).
4. **Request indexing** for the homepage and a few key pages via the URL Inspection tool, to nudge Google into crawling sooner rather than waiting for discovery.
5. **Register with Bing Webmaster Tools** too (bing.com/webmasters) — it also powers Yahoo and DuckDuckGo, and you can import your Search Console verification directly.
6. **Add your social profile URLs** (LinkedIn, Facebook, etc.) to the `sameAs` array in `src/components/OrganizationSchema.jsx` once they exist — this strengthens the Organization schema and knowledge-panel eligibility.
7. **Check Core Web Vitals** after launch using [PageSpeed Insights](https://pagespeed.web.dev) on the live URL.
8. **Consider adding real backlinks** (industry directories, trade associations, partner sites) — technical SEO gets you indexed and eligible to rank; backlinks and content are what actually drive rankings over time. No amount of technical configuration substitutes for that.

### Regenerating the sitemap manually

```bash
npm run build   # regenerates sitemap.xml automatically via the prebuild hook
# or, without a full build:
node scripts/generate-sitemap.js
```

---

## Contact form (Web3Forms)

The Contact page form (`src/pages/ContactPage.jsx`) submits to [Web3Forms](https://web3forms.com), a free form-backend service — no server code needed. Submissions are delivered by email to whatever address you register with them.

**Setup:**

1. Go to [web3forms.com](https://web3forms.com) and create an access key using `info@primeagroexportsltd.com` (or whichever inbox should receive inquiries).
2. Copy the access key from the dashboard.
3. For local dev: `cp .env.example .env` and paste the key into `VITE_WEB3FORMS_ACCESS_KEY`.
4. For production on Vercel: Project Settings → Environment Variables → add `VITE_WEB3FORMS_ACCESS_KEY` with the same value, then redeploy.

Without a valid key, the form will show a clear error to visitors instead of silently failing — but it won't actually deliver messages, so this step isn't optional before launch.

The form includes:
- Client-side + native HTML5 validation on all required fields (name, email format, message length)
- A hidden honeypot field (`botcheck`) that silently discards bot submissions
- Loading and error states so a failed submission never falsely tells the visitor it succeeded

---

## Local images setup

All image references in the code now point to local files under `public/images/` instead of Unsplash URLs. To fetch the actual images, run once:

```bash
npm run images:download
```

This downloads all 28 images (see `scripts/image-map.json` for the URL → filename mapping) into `public/images/`. Re-run it any time to re-fetch or retry failed downloads.

---

# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

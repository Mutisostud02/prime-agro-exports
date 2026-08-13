// Per-page SEO tags: title, meta description, canonical URL, Open Graph, Twitter Card.
//
// React 19 automatically hoists <title>, <meta>, and <link> tags rendered by any
// component into the document <head>, and de-duplicates them by default (later
// tags in the tree override earlier ones with the same name/property/rel). That
// means each page can simply render <SEO ... /> and it "just works" — no
// react-helmet or other head-management library required.
export const SITE_URL = "https://www.primeagroexportsltd.com";
export const DEFAULT_OG_IMAGE = `${SITE_URL}/og-image.jpg`;

export default function SEO({
  title,
  description,
  path = "/",
  image = DEFAULT_OG_IMAGE,
  type = "website",
  noindex = false,
  jsonLd = null,
}) {
  const canonical = `${SITE_URL}${path === "/" ? "/" : path}`;

  return (
    <>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={canonical} />
      <meta name="robots" content={noindex ? "noindex, nofollow" : "index, follow"} />

      {/* Open Graph */}
      <meta property="og:type" content={type} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={canonical} />
      <meta property="og:image" content={image} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:site_name" content="Prime Agro Exports" />
      <meta property="og:locale" content="en_KE" />

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />

      {/* Optional page-specific structured data (JSON-LD) */}
      {jsonLd && (
        <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
      )}
    </>
  );
}

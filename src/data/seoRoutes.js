// Central registry of every indexable, crawlable route on the site.
// Used by scripts/generate-sitemap.js to build public/sitemap.xml.
// Keep this in sync with the <Route> list in src/App.jsx whenever pages are added or removed.

export const SEO_ROUTES = [
  { path: "/", changefreq: "weekly", priority: 1.0 },
  { path: "/about-us/who-we-are", changefreq: "monthly", priority: 0.8 },
  { path: "/about-us/compliance-accreditation", changefreq: "monthly", priority: 0.7 },
  { path: "/about-us/freight-logistics", changefreq: "monthly", priority: 0.7 },
  { path: "/about-us/customers", changefreq: "monthly", priority: 0.6 },
  { path: "/about-us/our-team-careers", changefreq: "weekly", priority: 0.6 },
  { path: "/growing-base/our-farms-packhouses", changefreq: "monthly", priority: 0.8 },
  { path: "/growing-base/out-grower-farming", changefreq: "monthly", priority: 0.7 },
  { path: "/our-products", changefreq: "weekly", priority: 0.9 },
  { path: "/our-products/flowers", changefreq: "weekly", priority: 0.9 },
  { path: "/our-products/fruits", changefreq: "weekly", priority: 0.9 },
  { path: "/our-products/vegetables", changefreq: "weekly", priority: 0.9 },
  { path: "/our-products/frozen-iqf", changefreq: "weekly", priority: 0.9 },
  { path: "/sustainability/farming-practice", changefreq: "monthly", priority: 0.6 },
  { path: "/sustainability/conservation", changefreq: "monthly", priority: 0.6 },
  { path: "/sustainability/corporate-social-initiative-responsibilities", changefreq: "monthly", priority: 0.6 },
  { path: "/contact-us", changefreq: "yearly", priority: 0.8 },
];

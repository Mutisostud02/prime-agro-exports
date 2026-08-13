import { COMPANY } from "../data/companyData";
import { SITE_URL } from "./SEO";

// Site-wide Organization / LocalBusiness structured data, rendered once from App.jsx.
// This helps Google understand who Prime Agro Exports is, and can power
// knowledge-panel and rich-result eligibility (business name, logo, address, phone).
export default function OrganizationSchema() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${SITE_URL}/#organization`,
    name: COMPANY.name,
    alternateName: COMPANY.shortName,
    url: SITE_URL,
    logo: `${SITE_URL}/logo.png`,
    image: `${SITE_URL}/og-image.jpg`,
    description: COMPANY.tagline,
    email: COMPANY.email,
    telephone: COMPANY.phone,
    address: {
      "@type": "PostalAddress",
      streetAddress: `${COMPANY.address.line1}, ${COMPANY.address.line2}`,
      addressLocality: "Nairobi",
      addressCountry: "KE",
    },
    // Add your social profile URLs here once they exist, e.g.:
    // sameAs: ["https://www.linkedin.com/company/...", "https://www.facebook.com/..."],
  };

  return <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>;
}

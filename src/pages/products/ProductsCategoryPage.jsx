import React, { useState, useEffect } from "react";
import { useParams, Link, useSearchParams } from "react-router-dom";
import { PRODUCTS_DATA } from "../../data/productsData";
import SEO, { SITE_URL } from "../../components/SEO";

const CATEGORY_SEO = {
  flowers: {
    title: "Kenyan Cut Flowers & Roses | Prime Agro Exports Limited",
    description: "Export-grade Kenyan cut roses, summer flowers and fillers, MPS-ABC and Kenya Flower Council certified, air-freighted fresh from Naivasha to global auctions and wholesalers.",
  },
  fruits: {
    title: "Kenyan Avocados, Mangoes & Passion Fruit | Prime Agro Exports Limited",
    description: "Fresh Hass and Fuerte avocados, Apple and Kent mangoes, and purple passion fruit — Fairtrade and GLOBALG.A.P certified, grown and exported from Kenya.",
  },
  vegetables: {
    title: "Kenyan Fine Beans, Snow Peas & Baby Vegetables | Prime Agro Exports Limited",
    description: "Fine and extra fine green beans, snow peas, sugar snaps, baby vegetables and tenderstem broccoli — export-grade, BRCGS certified, from Kenyan farms.",
  },
  "frozen-iqf": {
    title: "IQF Frozen Avocado, Mango & Vegetables | Prime Agro Exports Limited",
    description: "Individually Quick Frozen avocado dices, mango chunks and mixed cut vegetables — bulk export-grade IQF produce from Prime Agro Exports Limited, Kenya.",
  },
};

export default function ProductsCategoryPage() {
  const { categoryId } = useParams();
  const [searchParams, setSearchParams] = useSearchParams();
  const [selectedProduct, setSelectedProduct] = useState(null);

  const categories = [
    { id: "flowers", label: "Flowers", icon: "🌹", banner: "/images/category-banner-flowers.jpg" },
    { id: "fruits", label: "Fruits", icon: "🥑", banner: "/images/avocado-hass.jpg" },
    { id: "vegetables", label: "Vegetables", icon: "🫛", banner: "/images/fine-beans-extra-fine.jpg" },
    { id: "frozen-iqf", label: "Frozen – IQF", icon: "❄️", banner: "/images/iqf-avocado-dices-halves.jpg" }
  ];

  useEffect(() => {
    const prodId = searchParams.get("product");
    if (prodId) {
      const prod = PRODUCTS_DATA.find((p) => p.id === prodId);
      if (prod) {
        setSelectedProduct(prod);
      }
    } else {
      setSelectedProduct(null);
    }
  }, [searchParams]);

  const handleOpenProduct = (prod) => {
    setSearchParams({ product: prod.id });
  };

  const handleCloseProduct = () => {
    setSearchParams({});
  };

  // --- LANDING HUB (No category selected) ---
  if (!categoryId) {
    return (
      <div style={{ backgroundColor: "#F3EEE1", color: "#241F18", minHeight: "100vh", padding: "4rem 1rem" }}>
        <SEO
          title="Our Products | Prime Agro Exports Limited"
          description="Browse Prime Agro Exports' full range of export-grade Kenyan flowers, avocados, mangoes, passion fruit, fine beans and IQF frozen produce."
          path="/our-products"
        />
        <div style={{ maxWidth: "64rem", marginLeft: "auto", marginRight: "auto" }}>
          <div style={{ borderBottom: "1px solid rgba(36, 31, 24, 0.15)", paddingBottom: "2rem", marginBottom: "3rem" }}>
            <span style={{ fontFamily: "'Jost', sans-serif", fontSize: "0.75rem", textTransform: "uppercase", color: "#2563EB", letterSpacing: "0.1em", fontWeight: "bold" }}>Consignments & Portfolios</span>
            <h1 style={{ fontFamily: "'Jost', sans-serif", fontSize: "2.5rem", fontWeight: "bold", color: "#16302A", marginTop: "0.5rem" }}>Our Products</h1>
            <p style={{ color: "rgba(36, 31, 24, 0.7)", fontSize: "0.875rem", fontFamily: "'Jost', sans-serif", marginTop: "1rem" }}>FOUR CERTIFIED EXPORT PRODUCT LINES GRADED TO CONSERVED COLD-CHAIN STANDARD</p>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "2rem" }}>
            {categories.map((cat) => (
              <Link 
                key={cat.id} 
                to={`/our-products/${cat.id}`}
                style={{ position: "relative", height: "16rem", borderRadius: "0.25rem", overflow: "hidden", boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1)", border: "1px solid rgba(36, 31, 24, 0.15)", display: "block", textDecoration: "none" }}
              >
                <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(22, 48, 42, 0.95), rgba(22, 48, 42, 0.6), transparent)", zIndex: 10 }} />
                <img src={cat.banner} alt={`Kenyan ${cat.label.toLowerCase()} export category`} loading="lazy" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                <div style={{ position: "absolute", bottom: "1.5rem", left: "1.5rem", right: "1.5rem", zIndex: 20, color: "white", fontFamily: "'Jost', sans-serif" }}>
                  <div style={{ fontSize: "1.875rem", marginBottom: "0.25rem" }}>{cat.icon}</div>
                  <h3 style={{ fontFamily: "'Jost', sans-serif", fontWeight: "bold", fontSize: "1.25rem", color: "#F3EEE1", margin: 0 }}>{cat.label}</h3>
                  <p style={{ fontSize: "10px", color: "#C99A3D", textTransform: "uppercase", letterSpacing: "0.05em", fontWeight: "bold", marginTop: "0.25rem" }}>Explore Full Catalog & Specs →</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    );
  }

  const activeCategory = categories.find((c) => c.id === categoryId);
  const products = PRODUCTS_DATA.filter((p) => p.category === categoryId);
  const seoInfo = CATEGORY_SEO[categoryId] || {
    title: "Our Products | Prime Agro Exports Limited",
    description: "Browse Prime Agro Exports' full range of export-grade Kenyan flowers, avocados, mangoes, passion fruit, fine beans and IQF frozen produce.",
  };
  const itemListJsonLd = products.length
    ? {
        "@context": "https://schema.org",
        "@type": "ItemList",
        itemListElement: products.map((p, i) => ({
          "@type": "ListItem",
          position: i + 1,
          name: p.name,
          url: `${SITE_URL}/our-products/${categoryId}?product=${p.id}`,
        })),
      }
    : null;

  return (
    <div style={{ backgroundColor: "#F3EEE1", color: "#241F18", minHeight: "100vh", padding: "4rem 1rem" }}>
      <SEO
        title={seoInfo.title}
        description={seoInfo.description}
        path={`/our-products/${categoryId}`}
        jsonLd={itemListJsonLd}
      />
      <div style={{ maxWidth: "64rem", marginLeft: "auto", marginRight: "auto" }}>
        
        <Link to="/our-products" style={{ fontFamily: "'Jost', sans-serif", fontSize: "0.75rem", fontWeight: "bold", color: "#2563EB", textDecoration: "none", marginBottom: "1.5rem", display: "inline-block" }}>
          ← Back to All Product Portfolios
        </Link>

        {activeCategory ? (
          <div style={{ borderBottom: "1px solid rgba(36, 31, 24, 0.15)", paddingBottom: "2rem", marginBottom: "3rem" }}>
            <span style={{ fontFamily: "'Jost', sans-serif", fontSize: "1.875rem", marginBottom: "0.5rem", display: "block" }}>{activeCategory.icon}</span>
            <h1 style={{ fontFamily: "'Jost', sans-serif", fontSize: "2.5rem", fontWeight: "bold", color: "#16302A", lineHeight: "1" }}>{activeCategory.label} Portfolio</h1>
            <p style={{ color: "rgba(36, 31, 24, 0.7)", fontSize: "0.875rem", fontFamily: "'Jost', sans-serif", marginTop: "1rem" }}>PRIME EXPORT GRADE 1 SPECS · BRCGS CERTIFIED</p>
          </div>
        ) : (
          <div style={{ textAlign: "center", padding: "3rem 0" }}>Category not found.</div>
        )}

        {/* Products Grid */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "1.5rem", marginBottom: "3rem" }}>
          {products.map((prod) => (
            <div 
              key={prod.id} 
              onClick={() => handleOpenProduct(prod)}
              style={{ backgroundColor: "white", borderRadius: "0.25rem", border: "1px solid rgba(36, 31, 24, 0.1)", overflow: "hidden", boxShadow: "0 1px 3px rgba(0,0,0,0.1)", cursor: "pointer", display: "flex", flexDirection: "column", height: "100%" }}
            >
              <div style={{ height: "12rem", overflow: "hidden", position: "relative" }}>
                <img src={prod.image} alt={`${prod.name} — Kenyan export produce`} loading="lazy" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                {prod.isPopular && (
                  <span style={{ position: "absolute", top: "0.75rem", left: "0.75rem", backgroundColor: "#2563EB", color: "white", fontFamily: "'Jost', sans-serif", fontSize: "9px", fontWeight: "bold", padding: "0.125rem 0.5rem", borderRadius: "0.25rem", textTransform: "uppercase", letterSpacing: "0.05em" }}>
                    High Volume Demand
                  </span>
                )}
              </div>
              <div style={{ padding: "1rem", flex: 1, display: "flex", flexDirection: "column", justifyContent: "space-between", fontFamily: "'Jost', sans-serif" }}>
                <div>
                  <span style={{ fontSize: "10px", color: "#C99A3D", fontWeight: "bold", display: "block", marginBottom: "0.25rem", textTransform: "uppercase" }}>{prod.subcategory}</span>
                  <h3 style={{ fontFamily: "'Jost', sans-serif", fontWeight: "bold", fontSize: "0.875rem", color: "#16302A", lineHeight: "1.2" }}>{prod.name}</h3>
                  <p style={{ fontSize: "11px", color: "rgba(36, 31, 24, 0.8)", marginTop: "0.5rem", lineHeight: "1.625", height: "3rem", overflow: "hidden" }}>{prod.shortDesc}</p>
                </div>
                <div style={{ fontSize: "10px", fontWeight: "bold", color: "#16302A", borderTop: "1px solid rgba(36, 31, 24, 0.1)", paddingTop: "0.75rem", marginTop: "1rem", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                  <span>SPECIFICATION SHEETS</span>
                  <span style={{ color: "#2563EB" }}>Inspect →</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* --- PRODUCT DETAIL MODAL --- */}
        {selectedProduct && (
          <div style={{ position: "fixed", inset: 0, backgroundColor: "rgba(0,0,0,0.75)", backdropFilter: "blur(4px)", display: "flex", alignItems: "center", justifyContent: "center", padding: "1rem", zIndex: 50 }}>
            <div style={{ backgroundColor: "#F3EEE1", border: "1px solid rgba(36, 31, 24, 0.25)", borderRadius: "0.25rem", maxWidth: "42rem", width: "100%", padding: "1.5rem", position: "relative", fontFamily: "'Jost', sans-serif", fontSize: "0.75rem", maxHeight: "90vh", overflowY: "auto" }}>
              <button 
                onClick={handleCloseProduct}
                style={{ position: "absolute", right: "1rem", top: "1rem", fontSize: "1rem", color: "rgba(36, 31, 24, 0.6)", border: "none", background: "none", cursor: "pointer" }}
              >
                ✕
              </button>

              <span style={{ fontSize: "10px", color: "#2563EB", textTransform: "uppercase", letterSpacing: "0.05em", fontWeight: "bold", display: "block", marginBottom: "0.25rem" }}>
                Prime Export Technical Specification Sheet
              </span>
              <h2 style={{ fontFamily: "'Jost', sans-serif", fontSize: "1.75rem", fontWeight: "bold", color: "#16302A", marginBottom: "0.75rem", lineHeight: "1.2", borderBottom: "1px solid rgba(36, 31, 24, 0.15)", paddingBottom: "0.5rem" }}>
                {selectedProduct.name}
              </h2>

              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))", gap: "1.5rem", marginBottom: "1.5rem" }}>
                <div>
                  <img src={selectedProduct.image} alt={selectedProduct.name} style={{ width: "100%", height: "11rem", objectFit: "cover", borderRadius: "0.25rem", border: "1px solid rgba(36, 31, 24, 0.1)" }} />
                  <div style={{ backgroundColor: "#16302A", color: "#F3EEE1", textAlign: "center", fontSize: "9px", fontWeight: "bold", padding: "0.375rem 0", marginTop: "0.5rem", borderRadius: "0.25rem", textTransform: "uppercase", letterSpacing: "0.05em" }}>
                    Cold Chain Sealed: {selectedProduct.freightType}
                  </div>
                </div>

                <div style={{ display: "flex", flexDirection: "column", gap: "0.375rem", backgroundColor: "rgba(234, 226, 206, 0.6)", padding: "0.75rem", borderRadius: "0.25rem", border: "1px solid rgba(36, 31, 24, 0.1)", fontSize: "10.5px" }}>
                  <div>📊 <strong style={{ color: "#16302A" }}>Subcategory:</strong> {selectedProduct.subcategory}</div>
                  <div>📐 <strong style={{ color: "#16302A" }}>Export Calibration:</strong> {selectedProduct.headSize}</div>
                  <div>🌿 <strong style={{ color: "#16302A" }}>Stem/Cut Target:</strong> {selectedProduct.stemLength}</div>
                  <div>⏳ <strong style={{ color: "#16302A" }}>Cold Chain Shelf Life:</strong> {selectedProduct.vaseLife}</div>
                  <div>🏔️ <strong style={{ color: "#16302A" }}>Growing Altitude:</strong> {selectedProduct.growingAlt}</div>
                  <div>📅 <strong style={{ color: "#16302A" }}>Peak Season:</strong> {selectedProduct.harvestSeason}</div>
                </div>
              </div>

              <div style={{ display: "flex", flexDirection: "column", gap: "1rem", fontSize: "0.75rem", lineHeight: "1.625", borderTop: "1px solid rgba(36, 31, 24, 0.1)", paddingTop: "1rem" }}>
                <div>
                  <h4 style={{ fontFamily: "'Jost', sans-serif", fontWeight: "bold", fontSize: "0.875rem", color: "#16302A", marginBottom: "0.25rem" }}>Botanical / Crop Summary:</h4>
                  <p style={{ color: "rgba(36, 31, 24, 0.85)", margin: 0 }}>{selectedProduct.description}</p>
                </div>

                {selectedProduct.varieties && selectedProduct.varieties.length > 0 && (
                  <div>
                    <h4 style={{ fontFamily: "'Jost', sans-serif", fontWeight: "bold", fontSize: "0.875rem", color: "#16302A", marginBottom: "0.25rem" }}>Certified Cultivars / Export Varieties:</h4>
                    <div style={{ display: "flex", flexWrap: "wrap", gap: "0.375rem", marginTop: "0.25rem" }}>
                      {selectedProduct.varieties.map((v, i) => (
                        <span key={i} style={{ backgroundColor: "rgba(31, 61, 51, 0.1)", color: "#16302A", fontSize: "9.5px", padding: "0.125rem 0.5rem", borderRadius: "0.25rem", border: "1px solid rgba(22, 48, 42, 0.1)" }}>
                          {v}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "1rem" }}>
                  <div style={{ backgroundColor: "white", padding: "0.75rem", borderRadius: "0.25rem", border: "1px solid rgba(36, 31, 24, 0.1)" }}>
                    <h5 style={{ fontFamily: "'Jost', sans-serif", fontWeight: "bold", color: "#16302A", marginBottom: "0.25rem", margin: 0 }}>📦 Carton Packaging specs:</h5>
                    <p style={{ fontSize: "10px", color: "rgba(36, 31, 24, 0.8)", lineHeight: "1.4", margin: 0 }}>{selectedProduct.packaging}</p>
                  </div>
                  <div style={{ backgroundColor: "white", padding: "0.75rem", borderRadius: "0.25rem", border: "1px solid rgba(36, 31, 24, 0.1)" }}>
                    <h5 style={{ fontFamily: "'Jost', sans-serif", fontWeight: "bold", color: "#16302A", marginBottom: "0.25rem", margin: 0 }}>🛡️ Compliance Credentials:</h5>
                    <p style={{ fontSize: "10px", color: "#2563EB", fontWeight: "bold", lineHeight: "1.4", margin: 0 }}>{selectedProduct.certifications ? selectedProduct.certifications.join(" • ") : "GLOBALG.A.P"}</p>
                  </div>
                </div>
              </div>

              <div style={{ marginTop: "1.5rem", borderTop: "1px solid rgba(36, 31, 24, 0.15)", paddingTop: "1rem", display: "flex", flexWrap: "wrap", justifyContent: "space-between", alignItems: "center", gap: "1rem" }}>
                <span style={{ fontSize: "10px", color: "rgba(36, 31, 24, 0.6)" }}>Document ID: Sec-PAE-{selectedProduct.id}-2026</span>
                <Link 
                  to="/contact-us"
                  style={{ backgroundColor: "#2563EB", color: "white", fontWeight: "bold", fontSize: "10px", padding: "0.5rem 1rem", borderRadius: "0.25rem", textTransform: "uppercase", letterSpacing: "0.05em", textDecoration: "none" }}
                >
                  Request Secure Contract Quote for {selectedProduct.name}
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
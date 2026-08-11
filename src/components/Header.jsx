import { useState, useEffect } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { PRODUCTS_DATA } from "../data/productsData";
import { COMPANY } from "../data/companyData";

export default function Header() {
  const [searchQuery, setSearchQuery] = useState("");
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    setIsMobileMenuOpen(false);
    setIsSearchOpen(false);
    setActiveDropdown(null);
  }, [location]);

  const filteredProducts = searchQuery.trim() === ""
    ? []
    : PRODUCTS_DATA.filter((p) => {
        const q = searchQuery.toLowerCase();
        return (
          p.name.toLowerCase().includes(q) ||
          p.categoryLabel.toLowerCase().includes(q) ||
          p.subcategory?.toLowerCase().includes(q) ||
          p.shortDesc.toLowerCase().includes(q) ||
          p.varieties?.some((v) => v.toLowerCase().includes(q))
        );
      });

  const handleProductClick = (prod) => {
    setIsSearchOpen(false);
    setSearchQuery("");
    navigate(`/our-products/${prod.category}?product=${prod.id}`);
  };

  return (
    <header style={{ 
      position: "sticky", 
      top: 0, 
      zIndex: 50, 
      backgroundColor: "rgba(243, 238, 225, 0.95)", 
      borderBottom: "1px solid rgba(36, 31, 24, 0.15)", 
      backdropFilter: "blur(8px)" 
    }}>
      {/* Top Bar */}
      <div style={{ 
        backgroundColor: "#16302A", 
        color: "#F3EEE1", 
        fontSize: "10px", 
        fontFamily: "monospace", 
        padding: "0.25rem 1rem", 
        display: "flex", 
        justifyContent: "space-between" 
      }}>
        <span className="hidden md:inline">📍 {COMPANY.address.line1.toUpperCase()}, JKIA CARGO VILLAGE • IN-HOUSE LOGISTICS</span>
        <span style={{ color: "#C99A3D" }}>FAIRTRADE & BRCGS AA CERTIFIED</span>
      </div>

      <div style={{ 
        maxWidth: "80rem", 
        marginLeft: "auto", 
        marginRight: "auto", 
        padding: "0 1rem", 
        height: "4rem", 
        display: "flex", 
        alignItems: "center", 
        justifyContent: "space-between" 
      }}>
<Link to="/" style={{ display: "flex", alignItems: "center", gap: "0.5rem", color: "#16302A", textDecoration: "none" }}>
  <img 
    src="/dist/assets/logo.jpeg" // Put your source here later
    alt="Prime Agro Exports Logo"
    style={{ 
      width: "2rem", 
      height: "2rem", 
      borderRadius: "0.25rem", 
      objectFit: "contain",
      display: "block"
    }} 
  />
  <div>
    <div style={{ fontFamily: "serif", fontWeight: "bold", fontSize: "0.875rem", lineHeight: "1", color: "#16302A" }}>PRIME AGRO EXPORTS</div>
    <span style={{ fontSize: "8px", fontFamily: "monospace", letterSpacing: "0.1em", color: "#E1672B", display: "block" }}>KENYAN EXPORTERS</span>
  </div>
</Link>

        <nav className="hidden lg:flex" style={{ alignItems: "center", gap: "1rem", fontSize: "10px", fontFamily: "monospace", textTransform: "uppercase", fontWeight: "bold", letterSpacing: "0.05em" }}>
          {/* About Dropdown */}
          <div style={{ position: "relative" }} onMouseEnter={() => setActiveDropdown("about")} onMouseLeave={() => setActiveDropdown(null)}>
            <button style={{ color: "#16302A", border: "none", background: "none", cursor: "pointer", padding: "0.5rem 0", fontWeight: "bold", fontFamily: "monospace", fontSize: "10px", textTransform: "uppercase" }}>About Us ▾</button>
            {activeDropdown === "about" && (
              <div style={{ position: "absolute", top: "100%", left: 0, width: "11rem", backgroundColor: "#F3EEE1", border: "1px solid rgba(36, 31, 24, 0.15)", borderRadius: "0.25rem", boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1)", padding: "0.25rem 0" }}>
                <Link to="/about-us/who-we-are" style={{ display: "block", padding: "0.375rem 0.75rem", textDecoration: "none", color: "inherit" }}>Who We Are</Link>
                <Link to="/about-us/compliance-accreditation" style={{ display: "block", padding: "0.375rem 0.75rem", textDecoration: "none", color: "inherit" }}>Accreditation</Link>
                <Link to="/about-us/freight-logistics" style={{ display: "block", padding: "0.375rem 0.75rem", textDecoration: "none", color: "inherit" }}>Logistics</Link>
                <Link to="/about-us/customers" style={{ display: "block", padding: "0.375rem 0.75rem", textDecoration: "none", color: "inherit" }}>Our Customers</Link>
                <Link to="/about-us/our-team-careers" style={{ display: "block", padding: "0.375rem 0.75rem", textDecoration: "none", color: "inherit" }}>Careers</Link>
              </div>
            )}
          </div>

          {/* Growing Dropdown */}
          <div style={{ position: "relative" }} onMouseEnter={() => setActiveDropdown("growing")} onMouseLeave={() => setActiveDropdown(null)}>
            <button style={{ color: "#16302A", border: "none", background: "none", cursor: "pointer", padding: "0.5rem 0", fontWeight: "bold", fontFamily: "monospace", fontSize: "10px", textTransform: "uppercase" }}>Growing ▾</button>
            {activeDropdown === "growing" && (
              <div style={{ position: "absolute", top: "100%", left: 0, width: "12rem", backgroundColor: "#F3EEE1", border: "1px solid rgba(36, 31, 24, 0.15)", borderRadius: "0.25rem", boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1)", padding: "0.25rem 0" }}>
                <Link to="/growing-base/our-farms-packhouses" style={{ display: "block", padding: "0.375rem 0.75rem", textDecoration: "none", color: "inherit" }}>Farms & Packhouses</Link>
                <Link to="/growing-base/out-grower-farming" style={{ display: "block", padding: "0.375rem 0.75rem", textDecoration: "none", color: "inherit" }}>Out-Growers</Link>
              </div>
            )}
          </div>

          {/* Products Link */}
          <div style={{ position: "relative" }} onMouseEnter={() => setActiveDropdown("products")} onMouseLeave={() => setActiveDropdown(null)}>
            <Link to="/our-products" style={{ textDecoration: "none", color: "#16302A", padding: "0.5rem 0" }}>Products ▾</Link>
            {activeDropdown === "products" && (
              <div style={{ position: "absolute", top: "100%", left: 0, width: "10rem", backgroundColor: "#F3EEE1", border: "1px solid rgba(36, 31, 24, 0.15)", borderRadius: "0.25rem", boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1)", padding: "0.25rem 0" }}>
                <Link to="/our-products/flowers" style={{ display: "block", padding: "0.375rem 0.75rem", textDecoration: "none", color: "inherit" }}>🌹 Flowers</Link>
                <Link to="/our-products/fruits" style={{ display: "block", padding: "0.375rem 0.75rem", textDecoration: "none", color: "inherit" }}>🥑 Fruits</Link>
                <Link to="/our-products/vegetables" style={{ display: "block", padding: "0.375rem 0.75rem", textDecoration: "none", color: "inherit" }}>🫛 Vegetables</Link>
                <Link to="/our-products/frozen-iqf" style={{ display: "block", padding: "0.375rem 0.75rem", textDecoration: "none", color: "inherit" }}>❄️ Frozen IQF</Link>
              </div>
            )}
          </div>

          {/* Sustainability Dropdown */}
          <div style={{ position: "relative" }} onMouseEnter={() => setActiveDropdown("sustainability")} onMouseLeave={() => setActiveDropdown(null)}>
            <button style={{ color: "#16302A", border: "none", background: "none", cursor: "pointer", padding: "0.5rem 0", fontWeight: "bold", fontFamily: "monospace", fontSize: "10px", textTransform: "uppercase" }}>Sustainability ▾</button>
            {activeDropdown === "sustainability" && (
              <div style={{ position: "absolute", top: "100%", left: 0, width: "12rem", backgroundColor: "#F3EEE1", border: "1px solid rgba(36, 31, 24, 0.15)", borderRadius: "0.25rem", boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1)", padding: "0.25rem 0" }}>
                <Link to="/sustainability/farming-practice" style={{ display: "block", padding: "0.375rem 0.75rem", textDecoration: "none", color: "inherit" }}>Farming Practice</Link>
                <Link to="/sustainability/conservation" style={{ display: "block", padding: "0.375rem 0.75rem", textDecoration: "none", color: "inherit" }}>Conservation</Link>
                <Link to="/sustainability/corporate-social-initiative-responsibilities" style={{ display: "block", padding: "0.375rem 0.75rem", textDecoration: "none", color: "inherit" }}>CSR / CSI</Link>
              </div>
            )}
          </div>

          <Link to="/contact-us" style={{ 
            border: "1px solid #16302A", 
            color: "#16302A", 
            padding: "0.25rem 0.75rem", 
            borderRadius: "0.25rem", 
            textDecoration: "none" 
          }}>Contact</Link>
        </nav>

        <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
          <div style={{ position: "relative" }}>
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search products..."
              aria-label="Search products"
              onFocus={() => setIsSearchOpen(true)}
              style={{ 
                backgroundColor: "rgba(234, 226, 206, 0.8)", 
                color: "#241F18", 
                fontSize: "10px", 
                fontFamily: "monospace", 
                padding: "0.25rem 1.25rem 0.25rem 1.75rem", 
                borderRadius: "0.25rem", 
                outline: "none", 
                border: "1px solid rgba(36, 31, 24, 0.1)",
                width: "12rem"
              }}
            />
            <span style={{ position: "absolute", left: "0.625rem", top: "0.375rem", fontSize: "9px" }}>🔍</span>
            {searchQuery && isSearchOpen && (
              <div style={{ 
                position: "absolute", 
                right: 0, 
                top: "100%", 
                marginTop: "0.25rem", 
                width: "18rem", 
                backgroundColor: "#F3EEE1", 
                border: "1px solid rgba(36, 31, 24, 0.15)", 
                borderRadius: "0.25rem", 
                boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1)", 
                maxHeight: "16rem", 
                overflowY: "auto", 
                zIndex: 50 
              }}>
                {filteredProducts.length > 0 ? (
                  <>
                    <div style={{ padding: "0.375rem 0.5rem", fontSize: "9px", fontFamily: "monospace", color: "rgba(36, 31, 24, 0.5)", borderBottom: "1px solid rgba(36, 31, 24, 0.1)" }}>
                      {filteredProducts.length} product{filteredProducts.length !== 1 ? "s" : ""} found
                    </div>
                    {filteredProducts.map((p) => (
                      <div key={p.id} onClick={() => handleProductClick(p)} style={{ padding: "0.5rem", display: "flex", gap: "0.5rem", alignItems: "center", cursor: "pointer", fontSize: "10px", textAlign: "left", borderBottom: "1px solid rgba(36, 31, 24, 0.05)" }}>
                        <img src={p.image} alt={p.name} style={{ width: "2rem", height: "2rem", objectFit: "cover", borderRadius: "0.125rem" }} />
                        <div style={{ minWidth: 0, flex: 1 }}>
                          <div style={{ fontWeight: "bold", color: "#16302A", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>{p.name}</div>
                          <div style={{ fontSize: "8px", fontFamily: "monospace", color: "#E1672B" }}>{p.categoryLabel}</div>
                        </div>
                      </div>
                    ))}
                  </>
                ) : (
                  <div style={{ padding: "0.75rem", textAlign: "center", fontSize: "10px", fontFamily: "monospace", color: "rgba(36, 31, 24, 0.7)" }}>No products match &quot;{searchQuery}&quot;</div>
                )}
              </div>
            )}
          </div>
          <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} style={{ background: "none", border: "none", color: "#16302A", fontSize: "1.25rem", cursor: "pointer" }} className="lg:hidden">☰</button>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div style={{ 
          backgroundColor: "#F3EEE1", 
          borderBottom: "1px solid rgba(36, 31, 24, 0.15)", 
          padding: "1rem", 
          fontSize: "10px", 
          fontFamily: "monospace", 
          textTransform: "uppercase", 
          display: "flex", 
          flexDirection: "column", 
          gap: "0.75rem" 
        }} className="lg:hidden">
          <div>
            <div style={{ fontWeight: "bold", color: "#E1672B", marginBottom: "0.25rem" }}>About Us:</div>
            <div style={{ paddingLeft: "0.5rem", display: "flex", flexDirection: "column", gap: "0.25rem" }}>
              <Link to="/about-us/who-we-are" style={{ textDecoration: "none", color: "#16302A" }}>Who We Are</Link>
              <Link to="/about-us/compliance-accreditation" style={{ textDecoration: "none", color: "#16302A" }}>Accreditation</Link>
              <Link to="/about-us/freight-logistics" style={{ textDecoration: "none", color: "#16302A" }}>Logistics</Link>
              <Link to="/about-us/customers" style={{ textDecoration: "none", color: "#16302A" }}>Customers</Link>
              <Link to="/about-us/our-team-careers" style={{ textDecoration: "none", color: "#16302A" }}>Careers</Link>
            </div>
          </div>
          <div>
            <div style={{ fontWeight: "bold", color: "#E1672B", marginBottom: "0.25rem" }}>Products:</div>
            <div style={{ paddingLeft: "0.5rem", display: "flex", flexDirection: "column", gap: "0.25rem" }}>
              <Link to="/our-products/flowers" style={{ textDecoration: "none", color: "#16302A" }}>🌹 Flowers</Link>
              <Link to="/our-products/fruits" style={{ textDecoration: "none", color: "#16302A" }}>🥑 Fruits</Link>
              <Link to="/our-products/vegetables" style={{ textDecoration: "none", color: "#16302A" }}>🫛 Vegetables</Link>
              <Link to="/our-products/frozen-iqf" style={{ textDecoration: "none", color: "#16302A" }}>❄️ Frozen IQF</Link>
            </div>
          </div>
          <Link to="/contact-us" style={{ 
            display: "block", 
            textAlign: "center", 
            backgroundColor: "#16302A", 
            color: "#F3EEE1", 
            padding: "0.375rem 0", 
            borderRadius: "0.25rem", 
            textDecoration: "none" 
          }}>Contact Us</Link>
        </div>
      )}
    </header>
  );
}
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
    <header className="sticky top-0 z-50 bg-[#F3EEE1]/95 border-b border-[#241F18]/15 backdrop-blur-md">
      <div className="bg-[#16302A] text-[#F3EEE1] text-[10px] font-mono py-1 px-4 hidden md:flex justify-between">
        <span>📍 {COMPANY.address.line1.toUpperCase()}, JKIA CARGO VILLAGE • IN-HOUSE LOGISTICS</span>
        <span className="text-[#C99A3D]">FAIRTRADE & BRCGS AA CERTIFIED</span>
      </div>

      <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2 text-[#16302A]">
          <span className="w-8 h-8 rounded bg-[#16302A] text-[#F3EEE1] flex items-center justify-center font-serif text-lg font-bold">P</span>
          <div>
            <div className="font-serif font-bold text-sm leading-none text-[#16302A]">PRIME AGRO EXPORTS</div>
            <span className="text-[8px] font-mono tracking-widest text-[#E1672B] block">KENYAN EXPORTERS</span>
          </div>
        </Link>

        <nav className="hidden lg:flex items-center gap-4 text-[10px] font-mono uppercase font-bold tracking-wider">
          <div className="relative" onMouseEnter={() => setActiveDropdown("about")} onMouseLeave={() => setActiveDropdown(null)}>
            <button className="text-[#16302A] hover:text-[#E1672B] py-2">About Us ▾</button>
            {activeDropdown === "about" && (
              <div className="absolute top-full left-0 w-44 bg-[#F3EEE1] border border-[#241F18]/15 rounded shadow-lg py-1">
                <Link to="/about-us/who-we-are" className="block px-3 py-1.5 hover:bg-[#EAE2CE]">Who We Are</Link>
                <Link to="/about-us/compliance-accreditation" className="block px-3 py-1.5 hover:bg-[#EAE2CE]">Accreditation</Link>
                <Link to="/about-us/freight-logistics" className="block px-3 py-1.5 hover:bg-[#EAE2CE]">Logistics</Link>
                <Link to="/about-us/customers" className="block px-3 py-1.5 hover:bg-[#EAE2CE]">Our Customers</Link>
                <Link to="/about-us/our-team-careers" className="block px-3 py-1.5 hover:bg-[#EAE2CE]">Careers</Link>
              </div>
            )}
          </div>

          <div className="relative" onMouseEnter={() => setActiveDropdown("growing")} onMouseLeave={() => setActiveDropdown(null)}>
            <button className="text-[#16302A] hover:text-[#E1672B] py-2">Growing ▾</button>
            {activeDropdown === "growing" && (
              <div className="absolute top-full left-0 w-48 bg-[#F3EEE1] border border-[#241F18]/15 rounded shadow-lg py-1">
                <Link to="/growing-base/our-farms-packhouses" className="block px-3 py-1.5 hover:bg-[#EAE2CE]">Farms & Packhouses</Link>
                <Link to="/growing-base/out-grower-farming" className="block px-3 py-1.5 hover:bg-[#EAE2CE]">Out-Growers</Link>
              </div>
            )}
          </div>

          <div className="relative" onMouseEnter={() => setActiveDropdown("products")} onMouseLeave={() => setActiveDropdown(null)}>
            <Link to="/our-products" className="text-[#16302A] hover:text-[#E1672B] py-2">Products ▾</Link>
            {activeDropdown === "products" && (
              <div className="absolute top-full left-0 w-40 bg-[#F3EEE1] border border-[#241F18]/15 rounded shadow-lg py-1">
                <Link to="/our-products/flowers" className="block px-3 py-1.5 hover:bg-[#EAE2CE]">🌹 Flowers</Link>
                <Link to="/our-products/fruits" className="block px-3 py-1.5 hover:bg-[#EAE2CE]">🥑 Fruits</Link>
                <Link to="/our-products/vegetables" className="block px-3 py-1.5 hover:bg-[#EAE2CE]">🫛 Vegetables</Link>
                <Link to="/our-products/frozen-iqf" className="block px-3 py-1.5 hover:bg-[#EAE2CE]">❄️ Frozen IQF</Link>
              </div>
            )}
          </div>

          <div className="relative" onMouseEnter={() => setActiveDropdown("sustainability")} onMouseLeave={() => setActiveDropdown(null)}>
            <button className="text-[#16302A] hover:text-[#E1672B] py-2">Sustainability ▾</button>
            {activeDropdown === "sustainability" && (
              <div className="absolute top-full left-0 w-48 bg-[#F3EEE1] border border-[#241F18]/15 rounded shadow-lg py-1">
                <Link to="/sustainability/farming-practice" className="block px-3 py-1.5 hover:bg-[#EAE2CE]">Farming Practice</Link>
                <Link to="/sustainability/conservation" className="block px-3 py-1.5 hover:bg-[#EAE2CE]">Conservation</Link>
                <Link to="/sustainability/corporate-social-initiative-responsibilities" className="block px-3 py-1.5 hover:bg-[#EAE2CE]">CSR / CSI</Link>
              </div>
            )}
          </div>

          <Link to="/contact-us" className="border border-[#16302A] text-[#16302A] hover:bg-[#E1672B] hover:text-white px-3 py-1 rounded">Contact</Link>
        </nav>

        <div className="flex items-center gap-3">
          <div className="relative">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search products..."
              aria-label="Search products"
              onFocus={() => setIsSearchOpen(true)}
              className="bg-[#EAE2CE]/80 text-[#241F18] text-[10px] font-mono py-1 px-5 pl-7 rounded focus:outline-none focus:ring-1 focus:ring-[#E1672B] w-32 md:w-48 border border-[#241F18]/10"
            />
            <span className="absolute left-2.5 top-1.5 text-[9px]">🔍</span>
            {searchQuery && isSearchOpen && (
              <div className="absolute right-0 top-full mt-1 w-72 bg-[#F3EEE1] border border-[#241F18]/15 rounded shadow-xl max-h-64 overflow-y-auto z-50">
                {filteredProducts.length > 0 ? (
                  <>
                    <div className="px-2 py-1.5 text-[9px] font-mono text-[#241F18]/50 border-b border-[#241F18]/10">
                      {filteredProducts.length} product{filteredProducts.length !== 1 ? "s" : ""} found
                    </div>
                    {filteredProducts.map((p) => (
                      <div key={p.id} onClick={() => handleProductClick(p)} className="p-2 hover:bg-[#EAE2CE] cursor-pointer flex gap-2 items-center text-[10px] text-left">
                        <img src={p.image} alt={p.name} className="w-8 h-8 object-cover rounded" />
                        <div className="min-w-0">
                          <div className="font-bold text-[#16302A] truncate">{p.name}</div>
                          <div className="text-[8px] font-mono text-[#E1672B]">{p.categoryLabel}</div>
                        </div>
                      </div>
                    ))}
                  </>
                ) : (
                  <div className="p-3 text-center text-[10px] font-mono text-[#241F18]/70">No products match &quot;{searchQuery}&quot;</div>
                )}
              </div>
            )}
          </div>
          <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="lg:hidden text-[#16302A]">☰</button>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="lg:hidden bg-[#F3EEE1] border-b border-[#241F18]/15 p-4 text-[10px] font-mono uppercase space-y-3">
          <div>
            <div className="font-bold text-[#E1672B]">About Us:</div>
            <div className="pl-2 space-y-1 flex flex-col text-[#16302A]">
              <Link to="/about-us/who-we-are">Who We Are</Link>
              <Link to="/about-us/compliance-accreditation">Accreditation</Link>
              <Link to="/about-us/freight-logistics">Logistics</Link>
              <Link to="/about-us/customers">Customers</Link>
              <Link to="/about-us/our-team-careers">Careers</Link>
            </div>
          </div>
          <div>
            <div className="font-bold text-[#E1672B]">Products:</div>
            <div className="pl-2 space-y-1 flex flex-col text-[#16302A]">
              <Link to="/our-products/flowers">🌹 Flowers</Link>
              <Link to="/our-products/fruits">🥑 Fruits</Link>
              <Link to="/our-products/vegetables">🫛 Vegetables</Link>
              <Link to="/our-products/frozen-iqf">❄️ Frozen IQF</Link>
            </div>
          </div>
          <Link to="/contact-us" className="block text-center bg-[#16302A] text-[#F3EEE1] py-1.5 rounded">Contact Us</Link>
        </div>
      )}
    </header>
  );
}

import React, { useState, useEffect } from "react";
import { useParams, Link, useSearchParams } from "react-router-dom";
import { PRODUCTS_DATA } from "../../data/productsData";

export default function ProductsCategoryPage() {
  const { categoryId } = useParams();
  const [searchParams, setSearchParams] = useSearchParams();
  const [selectedProduct, setSelectedProduct] = useState(null);

  const categories = [
    { id: "flowers", label: "Flowers", icon: "🌹", banner: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?fm=jpg&q=80&w=1200&auto=format&fit=crop" },
    { id: "fruits", label: "Fruits", icon: "🥑", banner: "https://images.unsplash.com/photo-1523049673857-eb18f1d7b578?fm=jpg&q=80&w=1200&auto=format&fit=crop" },
    { id: "vegetables", label: "Vegetables", icon: "🫛", banner: "https://images.unsplash.com/photo-1567375698348-5d9d5ae99de0?fm=jpg&q=80&w=1200&auto=format&fit=crop" },
    { id: "frozen-iqf", label: "Frozen – IQF", icon: "❄️", banner: "https://images.unsplash.com/photo-1543339308-43e59d6b73a6?fm=jpg&q=80&w=1200&auto=format&fit=crop" }
  ];

  // Sync state with product query parameter (from live header search clicks!)
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

  // If no categoryId is specified, render the general Products Landing Hub!
  if (!categoryId) {
    return (
      <div className="bg-[#F3EEE1] text-[#241F18] min-h-screen py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <div className="border-b border-[#241F18]/15 pb-8 mb-12 text-center md:text-left">
            <span className="font-mono text-xs uppercase text-[#E1672B] tracking-widest font-bold">Consignments & Portfolios</span>
            <h1 className="font-serif text-4xl sm:text-5xl font-bold text-[#16302A] mt-2">Our Products</h1>
            <p className="text-[#241F18]/70 text-sm font-mono mt-4">FOUR CERTIFIED EXPORT PRODUCT LINES GRADED TO CONSERVED COLD-CHAIN STANDARD</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {categories.map((cat) => (
              <Link 
                key={cat.id} 
                to={`/our-products/${cat.id}`}
                className="group relative h-64 rounded overflow-hidden shadow-md border border-[#241F18]/15 hover:border-[#E1672B] transition-all"
              >
                <div className="absolute inset-0 bg-gradient-to-t from-[#16302A]/95 via-[#16302A]/60 to-transparent z-10" />
                <img src={cat.banner} alt={cat.label} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                <div className="absolute bottom-6 left-6 right-6 z-20 text-white font-mono">
                  <div className="text-3xl mb-1">{cat.icon}</div>
                  <h3 className="font-serif font-bold text-xl text-[#F3EEE1]">{cat.label}</h3>
                  <p className="text-[10px] text-[#C99A3D] uppercase tracking-wider font-bold mt-1">Explore Full Catalog & Specs →</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    );
  }

  // Filter products by active category
  const activeCategory = categories.find((c) => c.id === categoryId);
  const products = PRODUCTS_DATA.filter((p) => p.category === categoryId);

  return (
    <div className="bg-[#F3EEE1] text-[#241F18] min-h-screen py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        {/* Back Link */}
        <Link to="/our-products" className="font-mono text-xs font-bold text-[#E1672B] hover:text-[#16302A] mb-6 inline-block">
          ← Back to All Product Portfolios
        </Link>

        {activeCategory ? (
          <div className="border-b border-[#241F18]/15 pb-8 mb-12">
            <span className="font-mono text-3xl mb-2 block">{activeCategory.icon}</span>
            <h1 className="font-serif text-4xl sm:text-5xl font-bold text-[#16302A] leading-none">{activeCategory.label} Portfolio</h1>
            <p className="text-[#241F18]/70 text-sm font-mono mt-4">PRIME EXPORT GRADE 1 SPECS · BRCGS CERTIFIED</p>
          </div>
        ) : (
          <div className="text-center py-12">Category not found.</div>
        )}

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {products.map((prod) => (
            <div 
              key={prod.id} 
              onClick={() => handleOpenProduct(prod)}
              className="bg-white rounded border border-[#241F18]/10 overflow-hidden shadow-sm hover:shadow-md cursor-pointer group hover:border-[#E1672B] transition-all flex flex-col h-full"
            >
              <div className="h-48 overflow-hidden relative">
                <img src={prod.image} alt={prod.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
                {prod.isPopular && (
                  <span className="absolute top-3 left-3 bg-[#E1672B] text-white font-mono text-[9px] font-bold px-2 py-0.5 rounded uppercase tracking-wider">
                    High Volume Demand
                  </span>
                )}
              </div>
              <div className="p-4 flex-1 flex flex-col justify-between font-mono">
                <div>
                  <span className="text-[10px] text-[#C99A3D] font-bold block mb-1 uppercase">{prod.subcategory}</span>
                  <h3 className="font-serif font-bold text-sm text-[#16302A] leading-tight group-hover:text-[#E1672B] transition-colors">{prod.name}</h3>
                  <p className="text-[11px] text-[#241F18]/80 mt-2 leading-relaxed h-12 overflow-hidden text-ellipsis line-clamp-3">{prod.shortDesc}</p>
                </div>
                <div className="text-[10px] font-bold text-[#16302A] border-t border-[#241F18]/10 pt-3 mt-4 flex justify-between items-center">
                  <span>SPECIFICATION SHEETS</span>
                  <span className="text-[#E1672B] group-hover:translate-x-1 transition-transform">Inspect →</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* SECURE TECHNICAL SPECS DIALOG / MODAL (The Thorough Product Details!) */}
        {selectedProduct && (
          <div className="fixed inset-0 bg-black/75 backdrop-blur-sm flex items-center justify-center p-4 z-50 overflow-y-auto">
            <div className="bg-[#F3EEE1] border border-[#241F18]/25 rounded max-w-2xl w-full p-6 relative font-mono text-xs max-h-[90vh] overflow-y-auto">
              {/* Close Button */}
              <button 
                onClick={handleCloseProduct}
                className="absolute right-4 top-4 text-base text-[#241F18]/60 hover:text-[#E1672B]"
              >
                ✕
              </button>

              <span className="text-[10px] text-[#E1672B] uppercase tracking-wider font-bold block mb-1">
                Prime Export Technical Specification Sheet
              </span>
              <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#16302A] mb-3 leading-tight border-b border-[#241F18]/15 pb-2">
                {selectedProduct.name}
              </h2>

              {/* Grid with Image & Technical Specs */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <img src={selectedProduct.image} alt={selectedProduct.name} className="w-full h-44 object-cover rounded border border-[#241F18]/10" />
                  <div className="bg-[#16302A] text-[#F3EEE1] text-center text-[9px] font-bold py-1.5 mt-2 rounded uppercase tracking-wider">
                    Cold Chain Sealed: {selectedProduct.freightType}
                  </div>
                </div>

                <div className="space-y-1.5 bg-[#EAE2CE]/60 p-3 rounded border border-[#241F18]/10 text-[10.5px]">
                  <div>📊 <strong className="text-[#16302A]">Subcategory:</strong> {selectedProduct.subcategory}</div>
                  <div>📐 <strong className="text-[#16302A]">Export Calibration:</strong> {selectedProduct.headSize}</div>
                  <div>🌿 <strong className="text-[#16302A]">Stem/Cut Target:</strong> {selectedProduct.stemLength}</div>
                  <div>⏳ <strong className="text-[#16302A]">Cold Chain Shelf Life:</strong> {selectedProduct.vaseLife}</div>
                  <div>🏔️ <strong className="text-[#16302A]">Growing Altitude:</strong> {selectedProduct.growingAlt}</div>
                  <div>📅 <strong className="text-[#16302A]">Peak Season:</strong> {selectedProduct.harvestSeason}</div>
                </div>
              </div>

              {/* Detailed Description */}
              <div className="space-y-4 text-xs leading-relaxed border-t border-[#241F18]/10 pt-4">
                <div>
                  <h4 className="font-serif font-bold text-sm text-[#16302A] mb-1">Botanical / Crop Summary:</h4>
                  <p className="text-[#241F18]/85">{selectedProduct.description}</p>
                </div>

                {selectedProduct.varieties && selectedProduct.varieties.length > 0 && (
                  <div>
                    <h4 className="font-serif font-bold text-sm text-[#16302A] mb-1">Certified Cultivars / Export Varieties:</h4>
                    <div className="flex flex-wrap gap-1.5 mt-1">
                      {selectedProduct.varieties.map((v, i) => (
                        <span key={i} className="bg-[#1F3D33]/10 text-[#16302A] text-[9.5px] px-2 py-0.5 rounded border border-[#16302A]/10">
                          {v}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-white p-3 rounded border border-[#241F18]/10">
                    <h5 className="font-serif font-bold text-[#16302A] mb-1">📦 Carton Packaging specs:</h5>
                    <p className="text-[10px] text-[#241F18]/80 leading-snug">{selectedProduct.packaging}</p>
                  </div>
                  <div className="bg-white p-3 rounded border border-[#241F18]/10">
                    <h5 className="font-serif font-bold text-[#16302A] mb-1">🛡️ Compliance Credentials:</h5>
                    <p className="text-[10px] text-[#E1672B] font-bold leading-snug">{selectedProduct.certifications ? selectedProduct.certifications.join(" • ") : "GLOBALG.A.P"}</p>
                  </div>
                </div>
              </div>

              {/* Inquiry CTA */}
              <div className="mt-6 border-t border-[#241F18]/15 pt-4 flex flex-col md:flex-row justify-between items-center gap-4">
                <span className="text-[10px] text-[#241F18]/60">Document ID: Sec-PAE-{selectedProduct.id}-2026</span>
                <Link 
                  to="/contact-us"
                  className="bg-[#E1672B] text-white hover:bg-[#C4551F] font-bold text-[10px] px-4 py-2 rounded uppercase tracking-wider"
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

import React from "react";
import { Link } from "react-router-dom";
import { PRODUCTS_DATA, CERTIFICATIONS_LIST } from "../data/productsData";
import { COMPANY } from "../data/companyData";

export default function HomePage() {
  const popularProducts = PRODUCTS_DATA.filter((p) => p.isPopular);

  return (
    <div className="bg-[#F3EEE1] text-[#241F18] font-sans">
      
      {/* Hero Section */}
      <section className="relative min-h-[85vh] flex items-center justify-center text-center px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/80 z-10" />
        <img 
          src="https://images.unsplash.com/photo-1500382017468-9049fed747ef?fm=jpg&q=80&w=2400&auto=format&fit=crop" 
          alt="Lush tea and produce farms in Naivasha Kenya" 
          className="absolute inset-0 w-full h-full object-cover"
        />
        
        <div className="relative z-20 max-w-4xl mx-auto text-[#F3EEE1] space-y-6">
          <span className="font-mono text-xs uppercase text-[#C99A3D] tracking-[0.2em] font-bold block">
            JKIA CARGO VILLAGE · NAIROBI, KENYA
          </span>
          <h1 className="font-serif text-4xl sm:text-6xl font-bold leading-none tracking-tight">
            A grower first,<br />
            <span className="text-[#E1672B]">an exporter by trade.</span>
          </h1>
          <p className="text-sm sm:text-base font-mono text-[#F3EEE1]/80 max-w-2xl mx-auto leading-relaxed">
            Every stem, pod, and fruit that leaves our packhouse has been raised, graded, and cooled by people who know exactly where it came from — our own equatorial highland farms and out-grower network.
          </p>
          <div className="flex flex-wrap gap-4 justify-center pt-4">
            <Link 
              to="/our-products" 
              className="bg-[#E1672B] hover:bg-[#C4551F] text-[#F3EEE1] font-mono text-xs uppercase tracking-wider font-bold px-6 py-3 rounded transition-colors"
            >
              See What We Ship
            </Link>
            <Link 
              to="/about-us/who-we-are" 
              className="border border-[#F3EEE1] text-[#F3EEE1] hover:bg-[#F3EEE1] hover:text-[#16302A] font-mono text-xs uppercase tracking-wider font-bold px-6 py-3 rounded transition-all"
            >
              Who We Are
            </Link>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-[#16302A] text-[#F3EEE1] py-12 px-4 sm:px-6 lg:px-8 border-y border-[#F3EEE1]/10">
        <div className="max-w-7xl mx-auto grid grid-cols-2 lg:grid-cols-4 gap-8 text-center font-mono">
          <div className="space-y-1">
            <div className="text-3xl sm:text-4xl font-bold text-[#C99A3D]">15+</div>
            <div className="text-[10px] uppercase text-[#F3EEE1]/70 tracking-wider">Years Export Experience</div>
          </div>
          <div className="space-y-1">
            <div className="text-3xl sm:text-4xl font-bold text-[#E1672B]">1,125+</div>
            <div className="text-[10px] uppercase text-[#F3EEE1]/70 tracking-wider">Acres Proprietary Farms</div>
          </div>
          <div className="space-y-1">
            <div className="text-3xl sm:text-4xl font-bold text-[#C99A3D]">40+</div>
            <div className="text-[10px] uppercase text-[#F3EEE1]/70 tracking-wider">Global Destinations</div>
          </div>
          <div className="space-y-1">
            <div className="text-3xl sm:text-4xl font-bold text-[#E1672B]">2,500+</div>
            <div className="text-[10px] uppercase text-[#F3EEE1]/70 tracking-wider">Dedicated Employees</div>
          </div>
        </div>
      </section>

      {/* Core Message / Integration */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div className="space-y-6">
          <span className="font-mono text-xs uppercase text-[#E1672B] tracking-wider font-bold">Uncompromised Quality Control</span>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold leading-tight" style={{ color: 'black' }}>
  Fewer hands, shorter chain, fresher landing.
</h2>
          <p className="text-sm text-[#241F18]/80 leading-relaxed">
            What sets us apart is what happens after harvest. Our in-house logistics division, {COMPANY.logisticsDivision}, based at JKIA Cargo Village, moves produce from Naivasha or Thika cold rooms straight to airline cargo holds — fewer handovers, shorter delays, and an unbroken cooling pipeline.
          </p>
          <div className="border-l-4 border-[#C99A3D] pl-4 italic text-xs text-[#241F18]/70 font-mono">
            "Your consignment remains under our direct, certified supervision until wheels are up at Nairobi."
          </div>
        </div>
        <div>
          <img 
            src="https://images.unsplash.com/photo-1540420773420-3366772f4999?fm=jpg&q=80&w=1200&auto=format&fit=crop" 
            alt="Cold chain packing house team" 
            className="w-full h-80 object-cover rounded shadow-md border border-[#241F18]/10"
          />
        </div>
      </section>

      {/* Product Categories */}
      <section className="bg-[#EAE2CE]/40 py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <span className="font-mono text-xs uppercase text-[#E1672B] tracking-wider font-bold">Our Crop Basket</span>
<h2 className="font-serif text-3xl font-bold mt-2" style={{ color: 'black' }}>Export Categories</h2>

          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { id: "flowers", name: "🌹 Cut Flowers", desc: "Hydroponic Intermediate & T-Hybrid Premium Roses." },
              { id: "fruits", name: "🥑 Creamy Fruits", desc: "Hass & Fuerte Avocados, Kent Mangoes, Purple Passion Fruit." },
              { id: "vegetables", name: "🫛 Fine Vegetables", desc: "Green Beans, Snow Peas, Sugar Snaps, Tenderstem Broccoli." },
              { id: "frozen-iqf", name: "❄️ Frozen – IQF", desc: "Nitrogen Flash Frozen Avocado halves/dices, mango chunks." }
            ].map((cat) => (
              <div key={cat.id} className="bg-white p-6 rounded border border-[#241F18]/10 flex flex-col justify-between font-mono shadow-sm">
                <div>
                  <h3 className="font-serif font-bold text-base mb-2" style={{ color: 'black' }}>{cat.name}</h3>
                  <p className="text-[11px] text-[#241F18]/70 leading-relaxed mb-4">{cat.desc}</p>
                </div>
                <Link to={`/our-products/${cat.id}`} className="text-[#E1672B] text-xs font-bold hover:text-[#16302A] mt-auto">
                  View Portfolios →
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Popular/Featured Products Slider */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <span className="font-mono text-xs uppercase tracking-wider font-bold" style={{ color: '#E1672B' }}>Consignment Focus</span>
          <h2 className="font-serif text-3xl font-bold mt-2" style={{ color: 'black' }}>Featured Products</h2>
        </div>

 <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
  {popularProducts.slice(0, 4).map((prod) => (
    <Link 
      key={prod.id} 
      to={`/our-products/${prod.category}?product=${prod.id}`}
      className="bg-white rounded border overflow-hidden shadow-sm transition-colors flex flex-col h-full group"
      style={{ borderColor: 'rgba(0, 0, 0, 0.1)' }}
    >
      <div className="h-44 overflow-hidden">
        <img 
          src={prod.image} 
          alt={prod.name} 
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" 
        />
      </div>
      <div className="p-4 flex-1 flex flex-col justify-between font-mono">
        <div>
          <span 
            className="text-[9px] font-bold block uppercase mb-1" 
            style={{ color: '#E1672B' }}
          >
            {prod.categoryLabel}
          </span>
          <h3 
            className="font-serif font-bold text-xs leading-tight transition-colors" 
            style={{ color: 'grey' }}
          >
            {prod.name}
          </h3>
        </div>
        <span 
          className="text-[10px] font-bold mt-4 block" 
          style={{ color: 'black' }}
        >
          See Specifications →
        </span>
      </div>
    </Link>
  ))}
</div>

      </section>

      {/* Certifications strip */}
      <section className="bg-[#16302A] py-16 px-4 sm:px-6 lg:px-8 text-center text-[#F3EEE1] border-t border-[#F3EEE1]/10">
        <div className="max-w-7xl mx-auto">
          <span className="font-mono text-xs uppercase text-[#C99A3D] tracking-wider font-bold">Uncompromising Benchmarks</span>
          <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#F3EEE1] mt-2 mb-8">Export Grade Accreditation</h2>
          <div className="flex flex-wrap justify-center gap-4 text-xs font-mono">
            {CERTIFICATIONS_LIST.map((cert) => (
              <span key={cert.id} className="bg-[#1F3D33] border border-[#F3EEE1]/10 px-4 py-2 rounded text-[#F3EEE1]/80 hover:text-[#C99A3D] transition-colors">
                {cert.name.split(" & ")[0].split(" — ")[0]}
              </span>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}

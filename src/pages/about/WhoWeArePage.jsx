import React from "react";

export default function WhoWeArePage() {
  const STATS = [
    { value: "8+", label: "Years Export Experience", color: "#C99A3D" },
    { value: "120+", label: "Acres Proprietary Farms", color: "#2563EB" },
    { value: "15+", label: "Global Destinations", color: "#C99A3D" },
    { value: "150+", label: "Dedicated Employees", color: "#2563EB" },
  ];

  return (
    <div className="bg-[#F3EEE1] text-[#241F18] min-h-screen">
      {/* Stats Section (moved here from Home) */}
      <section className="bg-[#16302A] text-[#F3EEE1] py-12 px-4 sm:px-6 lg:px-8 border-b border-[#F3EEE1]/10">
        <div className="max-w-4xl mx-auto grid grid-cols-2 lg:grid-cols-4 gap-8 text-center font-mono">
          {STATS.map((stat) => (
            <div className="space-y-1" key={stat.label}>
              <div className="text-3xl sm:text-4xl font-bold" style={{ color: stat.color }}>{stat.value}</div>
              <div className="text-[10px] uppercase text-[#F3EEE1]/70 tracking-wider">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      <div className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="border-b border-[#241F18]/15 pb-8 mb-12">
          <span className="font-mono text-xs uppercase text-[#2563EB] tracking-widest font-bold">About Us</span>
          <h1 className="font-serif text-4xl sm:text-5xl font-bold mt-2 leading-none" style={{ color: 'black' }}>Who We Are</h1>
          <p className="text-[#241F18]/70 text-sm font-mono mt-4">PRIME AGRO EXPORTS LIMITED · NAIROBI, KENYA</p>
        </div>

        <div className="mb-12 rounded overflow-hidden shadow-md">
          <img 
            src="/images/farm-naivasha-lakeview.jpg" 
            alt="Kenyan highland farms" 
            className="w-full h-80 object-cover"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="md:col-span-2 space-y-6 text-sm leading-relaxed">
<h2 className="font-serif text-2xl font-bold" style={{ color: 'black' }}>Kenya&apos;s Horticultural Experts</h2>
            <p>
              Welcome to <strong>Prime Agro Exports Limited</strong>. We grow, sort, pack, and export Kenya&apos;s finest flowers, vegetables, and fresh fruits — from our own farms and a trusted out-grower network spanning the Rift Valley, Central Kenya, Western Kenya, and the Coast.
            </p>
            <p>
              Based at JKIA Cargo Village in Nairobi, we run an integrated supply chain: field harvest, BRC-certified packhouses, cold storage, and in-house air and sea freight coordination. Our produce reaches buyers across East Africa, East Asia, the Middle East, and Europe.
            </p>
            <p>
              Our operations span three core divisions:
            </p>
            <ul className="list-disc pl-5 space-y-2 font-mono text-xs text-[#241F18]/80">
              <li><strong className="text-[#16302A]">Prime Floriculture:</strong> Hydroponic and high-altitude floriculture — intermediate and hybrid roses, summer flowers, and fillers.</li>
              <li><strong className="text-[#16302A]">Prime Fresh Produce:</strong> Hand-graded vegetables and fruits harvested daily and packed under BRCGS Grade AA standards.</li>
              <li><strong className="text-[#16302A]">Prime Agro Logistics:</strong> In-house cold-chain and cargo handling at JKIA, plus sea reefer coordination via Mombasa.</li>
            </ul>

            <h2 className="font-serif text-2xl font-bold pt-4" style={{ color: 'black' }}>Our Story</h2>
            <p>
              It began in 2020 with four people who believed Kenya&apos;s highlands deserved a seat at the world&apos;s table. <strong>Robert Mayeku Namonyo, Edith Wanjiru Njenga, Patrick Kimani Kuria,</strong> and <strong>Jacquelyne Ayesa Kidula</strong> pooled their expertise in agronomy, logistics, and trade to found Prime Agro Exports Limited — starting with a handful of contracted acres and a single freight route out of JKIA. What they built together has since grown into an integrated export house serving buyers across three continents, without ever losing sight of the founders&apos; original promise: quality grown honestly, and delivered on time.
            </p>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-2">
              {[
                { name: "Robert Mayeku Namonyo", role: "Director / Shareholder" },
                { name: "Edith Wanjiru Njenga", role: "Director / Shareholder" },
                { name: "Patrick Kimani Kuria", role: "Director / Shareholder" },
                { name: "Jacquelyne Ayesa Kidula", role: "Director / Shareholder" },
              ].map((founder) => (
                <div key={founder.name} className="bg-[#EAE2CE] border border-[#241F18]/10 rounded p-3 text-center">
                  <div className="font-serif font-bold text-xs leading-tight" style={{ color: '#16302A' }}>{founder.name}</div>
                  <div className="font-mono text-[10px] uppercase tracking-wider text-[#2563EB] mt-1">{founder.role}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-[#EAE2CE] p-6 rounded border border-[#241F18]/10 h-fit space-y-6">
            <div>
<h3 className="font-serif font-bold text-lg mb-2" style={{ color: 'black' }}>Our Mission</h3>

              <p className="text-xs text-[#241F18]/80 leading-relaxed font-mono">
                To consistently deliver the freshest, highest-quality Kenyan produce — adapting to modern technology while staying ethical and sustainable.
              </p>
            </div>
            <hr className="border-[#241F18]/10" />
            <div>
<h3 className="font-serif font-bold text-lg mb-2" style={{ color: 'black' }}>Core Values</h3>

              <ul className="text-xs font-mono space-y-3">
                <li><strong className="text-[#2563EB]">TRANSPARENCY:</strong> Farm-to-flight traceability on every carton.</li>
                <li><strong className="text-[#2563EB]">INTEGRITY:</strong> Fair trade, social welfare, and environmental stewardship.</li>
                <li><strong className="text-[#2563EB]">EXCELLENCE:</strong> Meeting global standards (BRC, GLOBALG.A.P, MPS).</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      </div>
    </div>
  );
}

import React from "react";

export default function ConservationPage() {
  return (
    <div className="bg-[#F3EEE1] text-[#241F18] min-h-screen py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="border-b border-[#241F18]/15 pb-8 mb-12">
          <span className="font-mono text-xs uppercase text-[#E1672B] tracking-widest font-bold">Ecological Preservation</span>
          <h1 className="font-serif text-4xl sm:text-5xl font-bold text-[#16302A] mt-2 leading-none">Conservation & Biodiversity</h1>
          <p className="text-[#241F18]/70 text-sm font-mono mt-4">WETLAND RESTORATION, REWILDING CORRIDORS & SOLAR POWER ENERGY ARRAYS</p>
        </div>

        {/* Content Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12 items-center">
          <div className="space-y-4 text-sm leading-relaxed">
            <h2 className="font-serif text-2xl font-bold text-[#16302A]">Protecting Kenya’s Flora & Fauna</h2>
            <p>
              Agriculture does not exist in isolation. At Prime Agro Exports, we deliberately allocate up to 15% of our private estate acreage as non-productive rewilding zones, wetlands, and buffer areas.
            </p>
            <p>
              On our Thika Highlands farm, natural forest corridors have been preserved to protect native avian species and beneficial insects. Water harvested from seasonal rains is routed through artificial reed lagoons, filtering farm runoff before it is slowly returned to regional river networks.
            </p>
            <p>
              To reduce our carbon footprint, we have installed over 1.2 Megawatts of grid-connected solar power generation on the rooftops of our four farm packhouses, and we operate highly automated, low-volume drip irrigation systems.
            </p>
          </div>
          <div>
            <img 
              src="https://images.unsplash.com/photo-1526047932273-341f2a7631f9?fm=jpg&q=80&w=1200&auto=format&fit=crop" 
              alt="Conservation and wetlands" 
              className="w-full h-80 object-cover rounded shadow-md border border-[#241F18]/10"
            />
          </div>
        </div>

        {/* Action List */}
        <h2 className="font-serif text-2xl font-bold text-[#16302A] mb-6">Our Conservation Metrics</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-[#EAE2CE]/60 p-5 rounded border border-[#241F18]/15 font-mono text-xs">
            <span className="text-xl block mb-2">☀️</span>
            <h3 className="font-serif font-bold text-sm text-[#16302A] mb-1">1.2 MW Solar Power</h3>
            <p className="text-[#241F18]/80 leading-relaxed mt-1">Four proprietary packhouses are partially powered by clean, off-grid rooftop solar panels.</p>
          </div>
          <div className="bg-[#EAE2CE]/60 p-5 rounded border border-[#241F18]/15 font-mono text-xs">
            <span className="text-xl block mb-2">🦆</span>
            <h3 className="font-serif font-bold text-sm text-[#16302A] mb-1">Wetlands Reserve</h3>
            <p className="text-[#241F18]/80 leading-relaxed mt-1">Subsidized reed lagoons filter farm runoff, hosting over 50 native bird species.</p>
          </div>
          <div className="bg-[#EAE2CE]/60 p-5 rounded border border-[#241F18]/15 font-mono text-xs">
            <span className="text-xl block mb-2">💧</span>
            <h3 className="font-serif font-bold text-sm text-[#16302A] mb-1">Drip Micro-Irrigation</h3>
            <p className="text-[#241F18]/80 leading-relaxed mt-1">Computerized water delivery reduces water usage by 40% compared to traditional sprayers.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

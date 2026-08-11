import React, { useState } from "react";
import { FARMS_LIST } from "../../data/productsData";

export default function FarmsPackhousesPage() {
  const [selectedFarm, setSelectedFarm] = useState(FARMS_LIST[0]);

  return (
    <div className="bg-[#F3EEE1] text-[#241F18] min-h-screen py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="border-b border-[#241F18]/15 pb-8 mb-12">
          <span className="font-mono text-xs uppercase text-[#E1672B] tracking-widest font-bold">Equatorial Cultivation Hubs</span>
          <h1 className="font-serif text-4xl sm:text-5xl font-bold text-[#16302A] mt-2 leading-none">Our Farms & Packhouses</h1>
          <p className="text-[#241F18]/70 text-sm font-mono mt-4">FOUR HIGHT-ALTITUDE AGRICULTURAL GEMS STRADDLING THE EQUATOR</p>
        </div>

        {/* Introduction */}
        <div className="text-sm leading-relaxed mb-12 space-y-4">
          <p>
            Prime Agro Exports operates four proprietary farms across Kenya. Each site is deliberately located to capture unique microclimates, high-altitude cooling, and rich volcanic soil profiles. This strategic diversification ensures year-round product consistency and crop security.
          </p>
        </div>

        {/* Interactive Selector Tabs */}
        <div className="flex flex-wrap gap-2 border-b border-[#241F18]/15 pb-4 mb-8">
          {FARMS_LIST.map((farm) => (
            <button
              key={farm.id}
              onClick={() => setSelectedFarm(farm)}
              className={`px-4 py-2 font-mono text-xs font-bold rounded transition-all ${
                selectedFarm.id === farm.id 
                  ? "bg-[#16302A] text-white" 
                  : "bg-[#EAE2CE]/60 hover:bg-[#EAE2CE] text-[#16302A]"
              }`}
            >
              {farm.name.split(" — ")[0]}
            </button>
          ))}
        </div>

        {/* Selected Farm Detail Panel */}
        {selectedFarm && (
          <div className="bg-white rounded border border-[#241F18]/10 p-6 shadow-sm grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div className="space-y-4">
              <span className="font-mono text-[10px] text-[#E1672B] font-bold uppercase tracking-wider">SECURE EXP_FARM MANIFEST</span>
              <h2 className="font-serif text-2xl font-bold text-[#16302A] leading-tight">{selectedFarm.name}</h2>
              
              <div className="font-mono text-xs text-[#241F18]/80 space-y-2 border-y border-[#241F18]/10 py-3">
                <div>�� <strong className="text-[#16302A]">Location:</strong> {selectedFarm.location}</div>
                <div>⛰️ <strong className="text-[#16302A]">Altitude:</strong> {selectedFarm.altitude}</div>
                <div>📐 <strong className="text-[#16302A]">Total Area:</strong> {selectedFarm.area}</div>
              </div>

              <div>
                <h3 className="font-serif font-bold text-sm text-[#16302A] mb-2">Sustainable Infrastructure Features:</h3>
                <ul className="list-disc pl-5 font-mono text-xs text-[#241F18]/80 space-y-1.5">
                  {selectedFarm.highlights.map((h, i) => (
                    <li key={i}>{h}</li>
                  ))}
                </ul>
              </div>
            </div>

            <div>
              <img 
                src={selectedFarm.image} 
                alt={selectedFarm.name} 
                className="w-full h-80 object-cover rounded shadow-inner"
              />
              <div className="bg-[#16302A] text-[#F3EEE1] text-center font-mono text-[10px] py-2 mt-2 rounded">
                🛡️ GLOBALG.A.P, BRCGS, KFC COLD CHAIN SEALED
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

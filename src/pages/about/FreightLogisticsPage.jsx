import React, { useState } from "react";
import { COMPANY } from "../../data/companyData";

export default function FreightLogisticsPage() {
  const [formData, setFormData] = useState({ origin: "Nairobi (JKIA)", destination: "", weight: "", cropType: "Flowers" });
  const [estimate, setEstimate] = useState(null);

  const handleCalc = (e) => {
    e.preventDefault();
    const estDays = formData.destination.toLowerCase().includes("london") || formData.destination.toLowerCase().includes("amsterdam") ? "24-36 Hours" : "2-3 Days";
    setEstimate({
      tempHold: formData.cropType === "Flowers" ? "2°C - 4°C" : formData.cropType === "IQF" ? "-18°C" : "6°C - 8°C",
      time: estDays,
      route: `JKIA (Nairobi) Direct Cargo to ${formData.destination || "Global Destination"}`
    });
  };

  return (
    <div className="bg-[#F3EEE1] text-[#241F18] min-h-screen py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="border-b border-[#241F18]/15 pb-8 mb-12">
          <span className="font-mono text-xs uppercase text-[#E1672B] tracking-widest font-bold">{COMPANY.logisticsDivision}</span>
          <h1 className="font-serif text-4xl sm:text-5xl font-bold text-[#16302A] mt-2 leading-none">Freight & Logistics</h1>
          <p className="text-[#241F18]/70 text-sm font-mono mt-4">NURTURED IN KENYA, COOLED IN NAIROBI, DELIVERED FRESH WORLDWIDE</p>
        </div>

        {/* Info Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div className="space-y-4 text-sm leading-relaxed">
            <h2 className="font-serif text-2xl font-bold text-[#16302A]">In-House Cold Chain Mastery</h2>
            <p>
              Unlike many exporters who transfer sensitive produce to third-party handlers, Prime Agro Exports operates <strong>{COMPANY.logisticsDivision}</strong>, our fully integrated logistics division based inside JKIA Cargo Village, {COMPANY.address.line1}, Nairobi.
            </p>
            <p>
              Our flagship facility features a state-of-the-art 75-tonne capacity cold room with advanced vacuum and forced-air blast chillers. This allows us to drop harvest temperatures to optimal dormancy levels within hours, preserving peak texture and vase life before air palettes are built.
            </p>
            <ul className="list-disc pl-5 font-mono text-xs text-[#241F18]/80 space-y-1.5">
              <li><strong>RA3 Certified Agent:</strong> Pre-cleared security status for direct flights into European Union airports.</li>
              <li><strong>IATA Accredited cargo division:</strong> Preferred booking rates with British Airways, Qatar Cargo, and Emirates SkyCargo.</li>
              <li><strong>Customs Clearing Agent:</strong> Direct electronic processing of KEPHIS phytosanitary certificates, eliminating airport tarmac delays.</li>
            </ul>
          </div>

          <div className="bg-[#16302A] text-[#F3EEE1] p-6 rounded shadow-md">
            <h3 className="font-serif font-bold text-lg text-[#C99A3D] mb-4">Logistics Credentials</h3>
            <div className="font-mono text-xs space-y-3">
              <div className="border-b border-[#F3EEE1]/10 pb-2">
                <span className="text-[#E1672B] block">AIR FREIGHT BASE:</span>
                JKIA Cargo Village, {COMPANY.address.line1}, Nairobi
              </div>
              <div className="border-b border-[#F3EEE1]/10 pb-2">
                <span className="text-[#E1672B] block">SEA REEFER CORRIDOR:</span>
                Mombasa Port Cold-Storage Depot to CA Sea Containers
              </div>
              <div className="border-b border-[#F3EEE1]/10 pb-2">
                <span className="text-[#E1672B] block">CAPACITY LIMITS:</span>
                75-tonne static cold-room hold & blast chilling array
              </div>
              <div>
                <span className="text-[#E1672B] block">CERTIFICATIONS:</span>
                RA3 (Regulated Agent EU Third Country), KRA Customs, KIFWA Member
              </div>
            </div>
          </div>
        </div>

        {/* Cool interactive feature: Cargo cold hold / delivery duration calculator */}
        <div className="bg-[#EAE2CE] p-8 rounded border border-[#241F18]/15">
          <h2 className="font-serif text-2xl font-bold text-[#16302A] mb-2">Simulate a Cold Chain Booking</h2>
          <p className="text-xs font-mono text-[#241F18]/70 mb-6">Estimate shipping parameters and optimal cold room storage temperatures based on crop category.</p>

          <form onSubmit={handleCalc} className="grid grid-cols-1 md:grid-cols-4 gap-4 items-end">
            <div>
              <label className="block text-[10px] font-mono font-bold uppercase text-[#16302A] mb-1">Crop Type</label>
              <select 
                value={formData.cropType} 
                onChange={(e) => setFormData({...formData, cropType: e.target.value})}
                className="w-full bg-[#F3EEE1] border border-[#241F18]/20 p-2 rounded text-xs font-mono"
              >
                <option value="Flowers">🌹 Flowers / Roses</option>
                <option value="Fruits">🥑 Avocados / Fruits</option>
                <option value="Vegetables">🫛 Fresh Vegetables</option>
                <option value="IQF">❄️ Frozen IQF</option>
              </select>
            </div>
            <div>
              <label className="block text-[10px] font-mono font-bold uppercase text-[#16302A] mb-1">Destination</label>
              <input 
                type="text" 
                required
                placeholder="e.g. London Heathrow" 
                value={formData.destination} 
                onChange={(e) => setFormData({...formData, destination: e.target.value})}
                className="w-full bg-[#F3EEE1] border border-[#241F18]/20 p-2 rounded text-xs font-mono"
              />
            </div>
            <div>
              <label className="block text-[10px] font-mono font-bold uppercase text-[#16302A] mb-1">Weight (KG)</label>
              <input 
                type="number" 
                required
                placeholder="e.g. 5000" 
                value={formData.weight} 
                onChange={(e) => setFormData({...formData, weight: e.target.value})}
                className="w-full bg-[#F3EEE1] border border-[#241F18]/20 p-2 rounded text-xs font-mono"
              />
            </div>
            <button className="bg-[#E1672B] text-white p-2.5 rounded font-mono font-bold hover:bg-[#C4551F] text-xs uppercase tracking-wider">
              Calculate Plan
            </button>
          </form>

          {estimate && (
            <div className="mt-8 bg-[#F3EEE1] border-l-4 border-[#16302A] p-4 rounded-r font-mono text-xs text-[#241F18] space-y-2">
              <h4 className="font-serif font-bold text-sm text-[#16302A]">Optimal Cargo Cooling Manifest</h4>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-2">
                <div>
                  <span className="text-[#E1672B] text-[10px] font-bold block">COLD STORAGE PROFILE:</span>
                  <span className="text-base font-bold">{estimate.tempHold}</span>
                </div>
                <div>
                  <span className="text-[#E1672B] text-[10px] font-bold block">ESTIMATED TRANSIT TIME:</span>
                  <span className="text-base font-bold">{estimate.time}</span>
                </div>
                <div>
                  <span className="text-[#E1672B] text-[10px] font-bold block">ROUTING SYSTEM:</span>
                  <span>{estimate.route}</span>
                </div>
              </div>
              <p className="text-[10px] text-[#241F18]/70 mt-2">
                *Note: Manifest plans are synced with HCD and KEPHIS health certification databases. Cargo remains in airtight cool rooms until air pallet building inside our RA3 certified facility.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

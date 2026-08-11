import React from "react";

export default function FarmingPracticePage() {
  return (
    <div className="bg-[#F3EEE1] text-[#241F18] min-h-screen py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="border-b border-[#241F18]/15 pb-8 mb-12">
          <span className="font-mono text-xs uppercase text-[#E1672B] tracking-widest font-bold">Integrated Agriculture</span>
          <h1 className="font-serif text-4xl sm:text-5xl font-bold text-[#16302A] mt-2 leading-none">Farming Practice</h1>
          <p className="text-[#241F18]/70 text-sm font-mono mt-4">SEED TO SPOON TRACEABILITY & INTEGRATED PEST MANAGEMENT</p>
        </div>

        {/* Content Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div className="md:col-span-2 space-y-6 text-sm leading-relaxed">
            <h2 className="font-serif text-2xl font-bold text-[#16302A]">IPM & Natural Soil Solutions</h2>
            <p>
              At Prime Agro Exports, we practice <strong>Integrated Farming</strong>. We believe that sustained high-quality yields are only possible when we nurture the physical and biological integrity of the soil and ecosystem.
            </p>
            <p>
              To combat crop pests while meeting the strictest chemical residue limitations of EU supermarkets, our Naivasha and Thika agricultural centers operate dedicated <strong>IPM (Integrated Pest Management)</strong> breeding facilities. Here, we rear biological beneficial bugs (such as phytoseiid predatory mites) and introduce them to crops prior to any pesticide usage.
            </p>
            <p>
              In addition, we maintain one of Kenya's largest proprietary worm hatcheries. Earthworm castings (vermicompost) and tea are circulated via our automated drip-irrigation networks, dramatically increasing natural humus content, soil biology, and crop disease resistance.
            </p>
          </div>

          <div className="bg-[#EAE2CE] p-6 rounded border border-[#241F18]/10 h-fit space-y-4 font-mono text-xs">
            <h3 className="font-serif font-bold text-sm text-[#16302A]">Agricultural Audits</h3>
            <div className="border-b border-[#241F18]/10 pb-2">
              <span className="text-[#E1672B] block">FERTILIZATION:</span>
              Drip-irrigation vermiculture & organic plant-extract sprays.
            </div>
            <div className="border-b border-[#241F18]/10 pb-2">
              <span className="text-[#E1672B] block">PEST CONTROLS:</span>
              Predatory biological beneficial insect release (IPM focus).
            </div>
            <div>
              <span className="text-[#E1672B] block">TRACE STATUS:</span>
              100% individual crop carton barcoding (Seed to Flight).
            </div>
          </div>
        </div>

        {/* Traceability Info banner */}
        <div className="bg-[#16302A] text-[#F3EEE1] p-8 rounded shadow-md font-mono text-xs">
          <h3 className="font-serif font-bold text-lg text-[#C99A3D] mb-3">Complete Transparency Barcoding</h3>
          <p className="leading-relaxed text-[#F3EEE1]/80 max-w-xl">
            Traceability is the cornerstone of modern horticulture. Every box of fine beans, cut roses, or frozen diced avocados that leaves our packing facility is barcoded with a secure batch code. Buyers can immediately inspect the sowing date, proprietary estate block or contract outgrower code, cooling timestamp, and airport cargo village dispatch manifest.
          </p>
        </div>
      </div>
    </div>
  );
}

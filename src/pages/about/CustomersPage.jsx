import React from "react";

export default function CustomersPage() {
  const segments = [
    { name: "Supermarket Retailers", requirements: "BRCGS Grade AA compliance, 100% trace code, pre-packed retail sleeve barcodes, strict Maximum Residue Level (MRL) chemical test passes.", marketShare: "45%" },
    { name: "Floriculture Wholesalers & Auctions", requirements: "Consistent stem sizes (50cm-80cm), standard moisture containment sleeves, direct delivery to Royal FloraHolland / Aalsmeer.", marketShare: "30%" },
    { name: "IQF Processors & Food Service", requirements: "Bulk 10kg poly-lined box deliveries, calibrated avocado halve weights, Halal/Kosher certificate alignment.", marketShare: "25%" }
  ];

  return (
    <div className="bg-[#F3EEE1] text-[#241F18] min-h-screen py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="border-b border-[#241F18]/15 pb-8 mb-12">
          <span className="font-mono text-xs uppercase text-[#E1672B] tracking-widest font-bold">Global Footprint & Standards</span>
          <h1 className="font-serif text-4xl sm:text-5xl font-bold text-[#16302A] mt-2 leading-none">Our Customers</h1>
          <p className="text-[#241F18]/70 text-sm font-mono mt-4">TRUSTED COLD-CHAIN SUPPLIERS TO MORE THAN 40 COUNTRIES</p>
        </div>

        {/* Footprint text */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div className="md:col-span-2 space-y-4 text-sm leading-relaxed">
            <h2 className="font-serif text-2xl font-bold text-[#16302A]">A Global Network Built on Traceability</h2>
            <p>
              Prime Agro Exports has built a reputation as a supplier-of-choice for some of the world&apos;s most demanding buyers. We do not simply ship produce; we align our harvesting, packhouse, and logistics standards to match the specific, granular protocols of our destinations.
            </p>
            <p>
              Whether it is the UK's high-street supermarkets requiring detailed ethical audits (SMETA) or global baby food processors demanding pesticide-free IQF dicing, we adapt to deliver complete compliance.
            </p>
          </div>
          <div className="bg-[#EAE2CE] p-6 rounded border border-[#241F18]/10 h-fit text-center font-mono">
            <div className="text-[#E1672B] text-4xl font-bold">40+</div>
            <div className="text-xs uppercase tracking-wider font-bold text-[#16302A] mt-2">Export Destinations</div>
            <p className="text-[10px] text-[#241F18]/70 mt-2">Connecting Nairobi Cargo direct with Europe, Middle East, UK, and East Asia.</p>
          </div>
        </div>

        {/* Customer Segments Table */}
        <h2 className="font-serif text-2xl font-bold text-[#16302A] mb-6">Markets We Serve & Specifications</h2>
        <div className="space-y-4 mb-12">
          {segments.map((seg) => (
            <div key={seg.name} className="bg-white p-5 rounded border border-[#241F18]/10 font-mono text-xs shadow-sm">
              <div className="flex justify-between items-center border-b border-[#241F18]/10 pb-2 mb-3">
                <span className="font-serif font-bold text-sm text-[#16302A]">{seg.name}</span>
                <span className="bg-[#16302A] text-[#F3EEE1] px-2 py-0.5 rounded text-[10px]">Volume: {seg.marketShare}</span>
              </div>
              <p className="text-[#241F18]/80 leading-relaxed">
                <span className="text-[#E1672B] font-bold">Strict Compliance Protocols:</span> {seg.requirements}
              </p>
            </div>
          ))}
        </div>

        {/* World Map Teaser */}
        <div className="bg-[#16302A] text-[#F3EEE1] p-8 rounded text-center">
          <h3 className="font-serif font-bold text-xl text-[#C99A3D] mb-2">Establish a Direct Import Contract</h3>
          <p className="text-xs font-mono text-[#F3EEE1]/70 mb-4 max-w-xl mx-auto">
            We establish custom farming schedules, proprietary carton branding, and secured cold hold allocations for long-term partners. Contact our international export desk for seasonal availability.
          </p>
          <button 
            onClick={() => window.location.href="/contact-us"}
            className="bg-[#E1672B] text-white px-6 py-2.5 rounded font-mono text-xs font-bold hover:bg-[#C4551F] transition-colors"
          >
            Inquire For Secure Contract Allocation
          </button>
        </div>
      </div>
    </div>
  );
}

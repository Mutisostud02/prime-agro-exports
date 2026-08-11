import React, { useState } from "react";
import { CERTIFICATIONS_LIST } from "../../data/productsData";

export default function CompliancePage() {
  const [activeCert, setActiveCert] = useState(null);

  const policies = [
    { title: "Ethical Trade Policy", code: "PAE-ET-2026", desc: "Guarantees fair wages, maximum working hours, safe working conditions, and the absolute prohibition of child labor." },
    { title: "Human Rights & Environmental Due Diligence (HREDD)", code: "PAE-HREDD-2026", desc: "Assesses and mitigates direct social and ecological impacts across all four farming centers and supply routes." },
    { title: "Modern Slavery Declaration", code: "PAE-MSD-2026", desc: "Rigorous standards ensuring zero tolerance for forced, bonded, or involuntary labor within our farms, packhouses, or logistics partners." },
    { title: "Traceability & Food Safety Policy", code: "PAE-FS-2026", desc: "Integrated HACCP and sanitation guidelines ensuring physical, biological, and chemical crop purity from seed to cold hold." }
  ];

  return (
    <div className="bg-[#F3EEE1] text-[#241F18] min-h-screen py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="border-b border-[#241F18]/15 pb-8 mb-12">
          <span className="font-mono text-xs uppercase text-[#E1672B] tracking-widest font-bold">Traceability & Social Standards</span>
<h1 className="font-serif text-4xl sm:text-5xl font-bold mt-2 leading-none" style={{ color: 'black' }}>Compliance & Accreditation</h1>
          <p className="text-[#241F18]/70 text-sm font-mono mt-4">UNCOMPROMISING QUALITY BENCHMARKS ACROSS GLOBAL FOOD CHAINS</p>
        </div>

        {/* Introduction */}
        <div className="text-sm leading-relaxed mb-12 space-y-4">
          <p>
            To deliver confidence to international supermarkets, wholesalers, and food-service buyers, Prime Agro Exports maintains a rigorous, continuous compliance schedule. We believe that horticultural quality is inseparable from social justice and environmental restoration.
          </p>
          <p>
            Every processing step at our Lake Naivasha high-care facility and Thika IQF freezing lines is subjected to international independent third-party audits.
          </p>
        </div>

        {/* Downloadable Corporate Policies */}
<h2 className="font-serif text-2xl font-bold mb-6" style={{ color: 'black' }}>Corporate Governance & Ethics Policies</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-12">
          {policies.map((policy) => (
            <div key={policy.code} className="bg-[#EAE2CE]/60 border border-[#241F18]/15 p-5 rounded hover:border-[#E1672B] transition-colors">
              <span className="font-mono text-[10px] text-[#E1672B] font-bold block">{policy.code}</span>
              <h3 className="font-serif font-bold text-base mt-1" style={{ color: 'black' }}>{policy.title}</h3>
              <p className="text-xs text-[#241F18]/80 font-mono mt-2 leading-relaxed">{policy.desc}</p>
            </div>
          ))}
        </div>

        {/* Interactive Certifications Accordion */}
        <h2 className="font-serif text-2xl font-bold text-[#16302A] mb-6">Global Certifications & Frameworks</h2>
        <p className="text-xs font-mono text-[#241F18]/70 mb-4">Click on any standard to explore its audit parameters, scope, and certifying organization.</p>
        
        <div className="space-y-3">
          {CERTIFICATIONS_LIST.map((cert) => (
            <div 
              key={cert.id} 
              className="border border-[#241F18]/15 rounded overflow-hidden"
            >
              <button
                onClick={() => setActiveCert(activeCert === cert.id ? null : cert.id)}
                className="w-full flex justify-between items-center p-4 bg-[#EAE2CE]/40 hover:bg-[#EAE2CE] transition-colors text-left"
              >
                <div>
                  <h3 className="font-serif font-bold text-sm text-[#16302A]">{cert.name}</h3>
                  <span className="text-[10px] font-mono text-[#241F18]/60 mt-0.5 block">{cert.short}</span>
                </div>
                <span className="text-[#E1672B] font-mono text-xs">{activeCert === cert.id ? "Close ▲" : "Inspect ▼"}</span>
              </button>
              
              {activeCert === cert.id && (
                <div className="p-4 bg-[#F3EEE1] border-t border-[#241F18]/10 text-xs font-mono text-[#241F18]/80 leading-relaxed space-y-2">
                  <p>{cert.desc}</p>
                  <div className="text-[10px] text-[#16302A] font-bold">
                    🛡️ Status: Active • Annual Audit Recertified for 2026 Season
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

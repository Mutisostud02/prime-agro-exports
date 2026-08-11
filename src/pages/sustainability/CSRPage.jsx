import React from "react";

export default function CSRPage() {
  return (
    <div className="bg-[#F3EEE1] text-[#241F18] min-h-screen py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="border-b border-[#241F18]/15 pb-8 mb-12">
          <span className="font-mono text-xs uppercase text-[#E1672B] tracking-widest font-bold">Community Social Initiatives</span>
          <h1 className="font-serif text-4xl sm:text-5xl font-bold text-[#16302A] mt-2 leading-none">CSI & CSR Responsibilities</h1>
          <p className="text-[#241F18]/70 text-sm font-mono mt-4">DISPENSARIES, FREE PRIMARY SCHOOLS & SOCIAL WELFARE ENHANCEMENT</p>
        </div>

        {/* Content Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12 items-center">
          <div>
            <img 
              src="https://images.unsplash.com/photo-1540420773420-3366772f4999?fm=jpg&q=80&w=1200&auto=format&fit=crop" 
              alt="Community Clinic and School" 
              className="w-full h-80 object-cover rounded shadow-md border border-[#241F18]/10"
            />
          </div>
          <div className="space-y-4 text-sm leading-relaxed">
            <h2 className="font-serif text-2xl font-bold text-[#16302A]">Ethical Citizenship</h2>
            <p>
              We firmly believe that horticultural business is a collaborative covenant with the local communities who make our growing operations possible.
            </p>
            <p>
              Under our <strong>Fairtrade</strong> program and <strong>ETI (Ethical Trading Initiative)</strong> certifications, Prime Agro Exports allocates fairtrade pricing premiums directly to community-elected assemblies.
            </p>
            <p>
              These funds have financed the construction and operational budgets of four fully staffed, fully subsidized on-site medical clinics, providing clean healthcare access to over 2,500 staff members and their families.
            </p>
            <p>
              In addition, our Naivasha estate hosts a comprehensive primary school and nursery, supporting the education of hundreds of children of our field workforce.
            </p>
          </div>
        </div>

        {/* Initiatives List */}
        <h2 className="font-serif text-2xl font-bold text-[#16302A] mb-6">Our Impact Commitments</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-[#EAE2CE]/60 p-5 rounded border border-[#241F18]/15 font-mono text-xs">
            <span className="text-xl block mb-2">🏥</span>
            <h3 className="font-serif font-bold text-sm text-[#16302A] mb-1">On-Site Dispensaries</h3>
            <p className="text-[#241F18]/80 leading-relaxed mt-1">Free clinical consults, vaccines, and maternal care for all permanent field labor families.</p>
          </div>
          <div className="bg-[#EAE2CE]/60 p-5 rounded border border-[#241F18]/15 font-mono text-xs">
            <span className="text-xl block mb-2">🏫</span>
            <h3 className="font-serif font-bold text-sm text-[#16302A] mb-1">Primary Schools</h3>
            <p className="text-[#241F18]/80 leading-relaxed mt-1">Fully financed nursery and primary school inside Naivasha, including curriculum materials.</p>
          </div>
          <div className="bg-[#EAE2CE]/60 p-5 rounded border border-[#241F18]/15 font-mono text-xs">
            <span className="text-xl block mb-2">💧</span>
            <h3 className="font-serif font-bold text-sm text-[#16302A] mb-1">Clean Water Access</h3>
            <p className="text-[#241F18]/80 leading-relaxed mt-1">Subsidized clean reverse-osmosis water tap access points for surrounding residential zones.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

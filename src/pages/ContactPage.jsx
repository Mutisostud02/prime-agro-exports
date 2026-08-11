import React, { useState } from "react";
import { COMPANY } from "../data/companyData";

export default function ContactPage() {
  const [formData, setFormData] = useState({ name: "", email: "", category: "Export Wholesale Quote", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="bg-[#F3EEE1] text-[#241F18] min-h-screen py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="border-b border-[#241F18]/15 pb-8 mb-12">
          <span className="font-mono text-xs uppercase text-[#E1672B] tracking-widest font-bold">Secure Global Comms Portal</span>
          <h1 className="font-serif text-4xl sm:text-5xl font-bold text-[#16302A] mt-2 leading-none">Contact Us</h1>
          <p className="text-[#241F18]/70 text-sm font-mono mt-4">DIRECT CHANNELS TO OUR NAIROBI EXPORT DESK & REGIONAL FARMS</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start mb-12">
          {/* Form Panel */}
          <div className="bg-white p-6 rounded border border-[#241F18]/10 shadow-sm font-mono text-xs">
            <h2 className="font-serif text-xl font-bold text-[#16302A] mb-4">Submit securing wholesale inquiry</h2>
            
            {submitted ? (
              <div className="text-center py-12 space-y-4">
                <span className="text-4xl block">📬</span>
                <h3 className="font-serif font-bold text-base text-[#16302A]">Inquiry Transmitted</h3>
                <p className="text-[#241F18]/80 leading-relaxed">
                  Thank you! Your cold-chain procurement request has been safely logged in our central database. Our Nairobi export desk agent will follow up via email within 12 hours.
                </p>
                <button 
                  onClick={() => { setSubmitted(false); setFormData({ name: "", email: "", category: "Export Wholesale Quote", message: "" }); }}
                  className="bg-[#16302A] text-white px-4 py-2 rounded font-bold hover:bg-[#E1672B] transition-colors"
                >
                  New Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-[10px] text-[#E1672B] font-bold uppercase mb-1">Company / Buyer Name</label>
                  <input 
                    required 
                    type="text" 
                    value={formData.name} 
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    className="w-full bg-[#EAE2CE]/40 border border-[#241F18]/15 p-2.5 rounded text-xs focus:outline-none focus:border-[#E1672B]" 
                  />
                </div>
                <div>
                  <label className="block text-[10px] text-[#E1672B] font-bold uppercase mb-1">Business Email</label>
                  <input 
                    required 
                    type="email" 
                    value={formData.email} 
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    className="w-full bg-[#EAE2CE]/40 border border-[#241F18]/15 p-2.5 rounded text-xs focus:outline-none focus:border-[#E1672B]" 
                  />
                </div>
                <div>
                  <label className="block text-[10px] text-[#E1672B] font-bold uppercase mb-1">Inquiry Category</label>
                  <select 
                    value={formData.category} 
                    onChange={(e) => setFormData({...formData, category: e.target.value})}
                    className="w-full bg-[#EAE2CE]/40 border border-[#241F18]/15 p-2.5 rounded text-xs focus:outline-none"
                  >
                    <option>Export Wholesale Quote</option>
                    <option>Out-Grower Partnership Inquiry</option>
                    <option>Career / Professional Application</option>
                    <option>General Corporate Question</option>
                  </select>
                </div>
                <div>
                  <label className="block text-[10px] text-[#E1672B] font-bold uppercase mb-1">Message Detail</label>
                  <textarea 
                    required 
                    placeholder="Specify stem counts, varieties, required shipment arrival airports, or seasonal volume expectations..."
                    value={formData.message} 
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    className="w-full bg-[#EAE2CE]/40 border border-[#241F18]/15 p-2.5 rounded text-xs h-28 focus:outline-none focus:border-[#E1672B]" 
                  />
                </div>
                <button type="submit" className="w-full bg-[#E1672B] hover:bg-[#C4551F] text-white py-3 rounded font-bold uppercase tracking-wider text-xs transition-colors">
                  Submit Direct Inquiry
                </button>
              </form>
            )}
          </div>

          {/* Location Panel */}
          <div className="space-y-6 text-sm">
            <div className="bg-[#EAE2CE]/60 p-6 rounded border border-[#241F18]/15 font-mono text-xs space-y-3">
              <h3 className="font-serif font-bold text-base text-[#16302A]">Headquarters Office</h3>
              <p className="text-[#241F18]/80 leading-relaxed">
                📍 {COMPANY.address.full}
              </p>
              <div className="text-[10px] text-[#E1672B] font-bold space-y-1">
                <div>📞 {COMPANY.phoneDisplay}</div>
                <div>✉️ Email: {COMPANY.email}</div>
              </div>
            </div>

            <div className="bg-[#EAE2CE]/60 p-6 rounded border border-[#241F18]/15 font-mono text-xs space-y-3">
              <h3 className="font-serif font-bold text-base text-[#16302A]">Regional Operations Centers</h3>
              <div className="space-y-2 text-[11px] text-[#241F18]/80">
                <div>🌳 <strong className="text-[#16302A]">Naivasha Farm Office:</strong> Lake Naivasha Highland Depot (140 km from Nairobi)</div>
                <div>🏭 <strong className="text-[#16302A]">Thika Processing Plant:</strong> Thika Industrial Highway Complex</div>
                <div>✈️ <strong className="text-[#16302A]">{COMPANY.logisticsDivision}:</strong> JKIA Cargo Build-up Hub, Warehouse 3</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

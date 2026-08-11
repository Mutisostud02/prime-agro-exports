import React, { useState } from "react";

export default function OutGrowerPage() {
  const [inquired, setInquired] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setInquired(true);
  };

  return (
    <div className="bg-[#F3EEE1] text-[#241F18] min-h-screen py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="border-b border-[#241F18]/15 pb-8 mb-12">
          <span className="font-mono text-xs uppercase text-[#E1672B] tracking-widest font-bold">Smallholder Collaboration</span>
          <h1 className="font-serif text-4xl sm:text-5xl font-bold text-[#16302A] mt-2 leading-none">Out-Grower Farming</h1>
          <p className="text-[#241F18]/70 text-sm font-mono mt-4">8,000+ CONTRACTED SMALLHOLDERS SUPPORTING REGIONAL SUSTAINABILITY</p>
        </div>

        {/* Introduction */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12 items-center">
          <div className="space-y-4 text-sm leading-relaxed">
            <h2 className="font-serif text-2xl font-bold text-[#16302A]">Nurturing Local Communities</h2>
            <p>
              We owe our incredible success to our locally contracted smallholder farmers. To augment our own estate production, Prime Agro Exports operates a highly structured out-grower contract farming program.
            </p>
            <p>
              By providing contract partners with certified high-yield seeds, government-approved organic composts, solar-powered cold hold boxes, and continuous weekly training by our team of agronomists, we secure both their income and our export quality.
            </p>
            <p>
              This mutual value cycle creates over 8,000 secondary jobs with a healthy ratio of 60% women and 40% men across Kenya's highlands.
            </p>
          </div>
          <div>
            <img 
              src="https://images.unsplash.com/photo-1592417817098-8f3d6eb19655?fm=jpg&q=80&w=1200&auto=format&fit=crop" 
              alt="Outgrower picking fine beans" 
              className="w-full h-80 object-cover rounded shadow-md border border-[#241F18]/10"
            />
          </div>
        </div>

        {/* Partnership Benefits */}
        <h2 className="font-serif text-2xl font-bold text-[#16302A] mb-6">Our Support Protocol</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <div className="bg-[#EAE2CE]/60 p-5 rounded border border-[#241F18]/15 font-mono text-xs">
            <span className="text-xl block mb-2">🌱</span>
            <h3 className="font-serif font-bold text-sm text-[#16302A] mb-2">High Quality Inputs</h3>
            <p className="text-[#241F18]/80 leading-relaxed">Subsidized distribution of certified seeds, natural bio-beneficials for pest controls, and organic fertilizers.</p>
          </div>
          <div className="bg-[#EAE2CE]/60 p-5 rounded border border-[#241F18]/15 font-mono text-xs">
            <span className="text-xl block mb-2">📊</span>
            <h3 className="font-serif font-bold text-sm text-[#16302A] mb-2">Technical Guidance</h3>
            <p className="text-[#241F18]/80 leading-relaxed">Weekly soil pH audits, rain calendar scheduling, and GlobalG.A.P criteria audits by certified field managers.</p>
          </div>
          <div className="bg-[#EAE2CE]/60 p-5 rounded border border-[#241F18]/15 font-mono text-xs">
            <span className="text-xl block mb-2">❄️</span>
            <h3 className="font-serif font-bold text-sm text-[#16302A] mb-2">Solar Cooling Storage</h3>
            <p className="text-[#241F18]/80 leading-relaxed">Decentralized, off-grid solar-powered cold boxes to secure crop dormancy within 30 minutes of farm harvest.</p>
          </div>
        </div>

        {/* Interactive Application Form */}
        <div className="bg-[#16302A] text-[#F3EEE1] p-8 rounded shadow-lg font-mono text-xs">
          <h2 className="font-serif text-2xl font-bold text-[#C99A3D] mb-2">Apply for Out-Grower Contract</h2>
          <p className="text-xs text-[#F3EEE1]/70 mb-6 leading-relaxed">Are you a Kenyan landholder seeking stable, Fairtrade-aligned international export contracts? Submit your details to request an inspection.</p>

          {inquired ? (
            <div className="text-center py-6 space-y-3">
              <span className="text-3xl block">🌽</span>
              <h3 className="font-serif font-bold text-base text-[#C99A3D]">Inspection Request Safely Queued</h3>
              <p className="text-[#F3EEE1]/80 max-w-md mx-auto">Thank you for your trust. Our Rift Valley or Mt. Kenya field agronomist office will coordinate a direct soil-grade inspection call within 5-7 business days.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4 max-w-xl">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[10px] text-[#E1672B] font-bold uppercase mb-1">Land Owner Name</label>
                  <input required type="text" className="w-full bg-[#1F3D33] text-[#F3EEE1] border border-[#F3EEE1]/10 p-2.5 rounded text-xs focus:outline-none" />
                </div>
                <div>
                  <label className="block text-[10px] text-[#E1672B] font-bold uppercase mb-1">Mobile (M-Pesa registered)</label>
                  <input required type="text" className="w-full bg-[#1F3D33] text-[#F3EEE1] border border-[#F3EEE1]/10 p-2.5 rounded text-xs focus:outline-none" />
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[10px] text-[#E1672B] font-bold uppercase mb-1">Acreage & Region</label>
                  <input required placeholder="e.g. 5 Acres, Meru/Nanyuki" type="text" className="w-full bg-[#1F3D33] text-[#F3EEE1] border border-[#F3EEE1]/10 p-2.5 rounded text-xs focus:outline-none" />
                </div>
                <div>
                  <label className="block text-[10px] text-[#E1672B] font-bold uppercase mb-1">Main Crop Target</label>
                  <select className="w-full bg-[#1F3D33] text-[#F3EEE1] border border-[#F3EEE1]/10 p-2.5 rounded text-xs focus:outline-none">
                    <option>Hass Avocados</option>
                    <option>Fine Green Beans</option>
                    <option>Sugar Snaps / Snow Peas</option>
                    <option>Purple Passion Fruits</option>
                    <option>Culinary Herbs</option>
                  </select>
                </div>
              </div>
              <button type="submit" className="bg-[#E1672B] hover:bg-[#C4551F] text-white px-6 py-3 rounded font-bold uppercase tracking-wider text-xs transition-colors">
                Submit Agricultural Intake Form
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}

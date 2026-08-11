import React, { useState } from "react";

export default function TeamCareersPage() {
  const [activeJob, setActiveJob] = useState(null);
  const [applied, setApplied] = useState(false);

  const jobs = [
    { id: "agronomist", title: "Senior Agronomist (Avocado Orchards)", location: "Naivasha & Rumuruti Farm Base", desc: "Oversee tree pruning, soil micro-nutrition balance, drip irrigation fertigation charts, and global compliance checklists." },
    { id: "tech", title: "Cold Chain Logistics Technician", location: "JKIA Cargo Village Office, Nairobi", desc: "Manage vacuum pre-coolers, compile automatic temperature charts for airline handovers, and oversee RA3 security protocols." },
    { id: "export", title: "International Export Account Executive", location: "JKIA Headquarters, Nairobi", desc: "Negotiate wholesale contracts with EU supermarket chains, schedule CA sea reefer sea container lanes, and manage customs clearance." }
  ];

  const handleApply = (e) => {
    e.preventDefault();
    setApplied(true);
  };

  return (
    <div className="bg-[#F3EEE1] text-[#241F18] min-h-screen py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="border-b border-[#241F18]/15 pb-8 mb-12">
          <span className="font-mono text-xs uppercase text-[#E1672B] tracking-widest font-bold">Diversity & Social Responsibility</span>
          <h1 className="font-serif text-4xl sm:text-5xl font-bold text-[#16302A] mt-2 leading-none">Our Team & Careers</h1>
          <p className="text-[#241F18]/70 text-sm font-mono mt-4">2,500+ EMPLOYEES DRIVING AGRICULTURAL INNOVATION IN EAST AFRICA</p>
        </div>

        {/* Team intro */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12 items-center">
          <div className="space-y-4 text-sm leading-relaxed">
            <h2 className="font-serif text-2xl font-bold text-[#16302A]">Empowerment in the Field</h2>
            <p>
              Horticulture is a people-first business. From the careful hand-harvesting of snow peas to the precise grading of cut roses, the quality of our exports is defined by the skill, wellness, and dedication of our workforce.
            </p>
            <p>
              We are exceptionally proud that <strong>52% of our farm and packhouse workers are women</strong>. To support their professional growth and community safety, we maintain strict safety protections, equal-pay guarantees, fully subsidized on-site medical dispensaries, and childcare/primary school support centers.
            </p>
          </div>
          <div>
            <img 
              src="https://images.unsplash.com/photo-1540420773420-3366772f4999?fm=jpg&q=80&w=1200&auto=format&fit=crop" 
              alt="Team at Naivasha Packhouse" 
              className="w-full h-64 object-cover rounded shadow-md"
            />
          </div>
        </div>

        {/* Stats strip */}
        <div className="bg-[#EAE2CE] grid grid-cols-2 md:grid-cols-4 gap-6 p-6 rounded border border-[#241F18]/10 text-center font-mono mb-12">
          <div>
            <div className="text-2xl font-bold text-[#16302A]">2,500+</div>
            <div className="text-[9px] uppercase text-[#241F18]/60 mt-1">Direct Staff</div>
          </div>
          <div>
            <div className="text-2xl font-bold text-[#E1672B]">52%</div>
            <div className="text-[9px] uppercase text-[#241F18]/60 mt-1">Female Workforce</div>
          </div>
          <div>
            <div className="text-2xl font-bold text-[#16302A]">4</div>
            <div className="text-[9px] uppercase text-[#241F18]/60 mt-1">On-Site Clinics</div>
          </div>
          <div>
            <div className="text-2xl font-bold text-[#E1672B]">8,000+</div>
            <div className="text-[9px] uppercase text-[#241F18]/60 mt-1">Contract Farmers</div>
          </div>
        </div>

        {/* Careers Accordion */}
        <h2 className="font-serif text-2xl font-bold text-[#16302A] mb-4">Join Our Growing Enterprise</h2>
        <p className="text-xs font-mono text-[#241F18]/70 mb-6">Explore professional, technical, and logistical roles within our farms, packhouses, and head office.</p>

        <div className="space-y-4 mb-12">
          {jobs.map((job) => (
            <div key={job.id} className="bg-white rounded border border-[#241F18]/10 p-5 font-mono text-xs shadow-sm">
              <div className="flex justify-between items-start gap-4">
                <div>
                  <h3 className="font-serif font-bold text-sm text-[#16302A]">{job.title}</h3>
                  <span className="text-[#E1672B] text-[10px] block mt-0.5">{job.location}</span>
                </div>
                <button 
                  onClick={() => { setActiveJob(job); setApplied(false); }}
                  className="bg-[#16302A] text-[#F3EEE1] hover:bg-[#E1672B] px-3 py-1.5 rounded transition-colors text-[10px] uppercase font-bold"
                >
                  Apply Now
                </button>
              </div>
              <p className="text-[#241F18]/80 mt-3 leading-relaxed">{job.desc}</p>
            </div>
          ))}
        </div>

        {/* Application Modal simulated */}
        {activeJob && (
          <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4 z-50">
            <div className="bg-[#F3EEE1] border border-[#241F18]/20 rounded max-w-md w-full p-6 relative font-mono text-xs">
              <button 
                onClick={() => setActiveJob(null)} 
                className="absolute right-4 top-4 text-base text-[#241F18]/60 hover:text-[#E1672B]"
              >
                ✕
              </button>
              
              <h3 className="font-serif font-bold text-lg text-[#16302A] mb-1">Export Career Portal</h3>
              <p className="text-[10px] text-[#E1672B] uppercase mb-4">Applying for: {activeJob.title}</p>
              
              {applied ? (
                <div className="text-center py-8 space-y-4">
                  <div className="text-3xl">🌿</div>
                  <h4 className="font-serif font-bold text-base text-[#16302A]">Application Securely Transmitted</h4>
                  <p className="text-[#241F18]/70">
                    Thank you! Your agronomy / logistical credentials have been safely queued for our Nairobi Human Resources desk.
                  </p>
                  <button 
                    onClick={() => setActiveJob(null)}
                    className="bg-[#16302A] text-white px-4 py-2 rounded font-bold hover:bg-[#E1672B]"
                  >
                    Back to Listings
                  </button>
                </div>
              ) : (
                <form onSubmit={handleApply} className="space-y-4">
                  <div>
                    <label className="block text-[10px] uppercase font-bold text-[#16302A] mb-1">Full Name</label>
                    <input required type="text" className="w-full bg-white border border-[#241F18]/20 p-2 rounded text-xs" />
                  </div>
                  <div>
                    <label className="block text-[10px] uppercase font-bold text-[#16302A] mb-1">Email Address</label>
                    <input required type="email" className="w-full bg-white border border-[#241F18]/20 p-2 rounded text-xs" />
                  </div>
                  <div>
                    <label className="block text-[10px] uppercase font-bold text-[#16302A] mb-1">Phone Number</label>
                    <input required type="text" className="w-full bg-white border border-[#241F18]/20 p-2 rounded text-xs" />
                  </div>
                  <div>
                    <label className="block text-[10px] uppercase font-bold text-[#16302A] mb-1">Resume / Cover Cover Letter Text</label>
                    <textarea required placeholder="Paste qualifications here..." className="w-full bg-white border border-[#241F18]/20 p-2 rounded text-xs h-24" />
                  </div>
                  <button type="submit" className="w-full bg-[#E1672B] hover:bg-[#C4551F] text-white py-2.5 rounded font-bold text-xs uppercase tracking-wider">
                    Submit Secure Application
                  </button>
                </form>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

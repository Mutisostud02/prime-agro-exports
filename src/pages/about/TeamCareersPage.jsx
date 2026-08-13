import React, { useState } from "react";
import SEO from "../../components/SEO";

export default function TeamCareersPage() {
  const [activeJob, setActiveJob] = useState(null);
  const [applied, setApplied] = useState(false);

  const jobs = [
    { id: "agronomist", title: "Senior Agronomist (Avocado Orchards)", location: "Muranga Farm Base", desc: "Oversee tree pruning, soil micro-nutrition balance, drip irrigation fertigation charts, and global compliance checklists." },
    { id: "tech", title: "Cold Chain Logistics Technician", location: "JKIA Cargo Village Office, Nairobi", desc: "Manage vacuum pre-coolers, compile automatic temperature charts for airline handovers, and oversee RA3 security protocols." },
    { id: "export", title: "International Export Account Executive", location: "JKIA Headquarters, Nairobi", desc: "Negotiate wholesale contracts with EU supermarket chains, schedule CA sea reefer sea container lanes, and manage customs clearance." }
  ];

  const handleApply = (e) => {
    e.preventDefault();
    setApplied(true);
  };

  return (
    <>
      <SEO
        title="Team & Careers | Prime Agro Exports Limited"
        description="Meet the team behind Prime Agro Exports and explore current openings in agronomy, cold-chain logistics and international export sales in Kenya."
        path="/about-us/our-team-careers"
      />
    <div style={{ backgroundColor: "#F3EEE1", color: "#241F18", minHeight: "100vh", padding: "4rem 1rem" }}>
      <div style={{ maxWidth: "56rem", marginLeft: "auto", marginRight: "auto" }}>
        
        {/* Header Section */}
        <div style={{ borderBottom: "1px solid rgba(36, 31, 24, 0.15)", paddingBottom: "2rem", marginBottom: "3rem" }}>
          <span style={{ fontFamily: "'Jost', sans-serif", fontSize: "0.75rem", textTransform: "uppercase", color: "#2563EB", letterSpacing: "0.1em", fontWeight: "bold" }}>
            Diversity & Social Responsibility
          </span>
          <h1 style={{ fontFamily: "'Jost', sans-serif", fontSize: "2.5rem", fontWeight: "bold", color: "#16302A", marginTop: "0.5rem", lineHeight: "1" }}>
            Our Team & Careers
          </h1>
          <p style={{ color: "rgba(36, 31, 24, 0.7)", fontSize: "0.875rem", fontFamily: "'Jost', sans-serif", marginTop: "1rem" }}>
            150+ EMPLOYEES DRIVING AGRICULTURAL INNOVATION IN EAST AFRICA
          </p>
        </div>

        {/* Team Intro Grid */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "2rem", marginBottom: "3rem", alignItems: "center" }}>
          <div style={{ display: "flex", flexDirection: "column", gap: "1rem", fontSize: "0.875rem", lineHeight: "1.625" }}>
            <h2 style={{ fontFamily: "'Jost', sans-serif", fontSize: "1.5rem", fontWeight: "bold", color: "#16302A" }}>Empowerment in the Field</h2>
            <p>
              Horticulture is a people-first business. From the careful hand-harvesting of snow peas to the precise grading of cut roses, the quality of our exports is defined by the skill, wellness, and dedication of our workforce.
            </p>
            <p>
              We are exceptionally proud that <strong>52% of our farm and packhouse workers are women</strong>. To support their professional growth and community safety, we maintain strict safety protections, equal-pay guarantees, fully subsidized on-site medical dispensaries, and childcare/primary school support centers.
            </p>
          </div>
          <div>
            <img 
              src="/images/baby-vegetables-tenderstem.jpg" 
              alt="Team at Naivasha Packhouse" 
              loading="lazy"
              style={{ width: "100%", height: "16rem", objectFit: "cover", borderRadius: "0.25rem", boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1)" }}
            />
          </div>
        </div>

        {/* Stats Strip */}
        <div style={{ backgroundColor: "#EAE2CE", display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: "1.5rem", padding: "1.5rem", borderRadius: "0.25rem", border: "1px solid rgba(36, 31, 24, 0.1)", textAlign: "center", fontFamily: "'Jost', sans-serif", marginBottom: "3rem" }}>
          {/* Workaround for responsive: grid-cols-2 md:grid-cols-4 is handled by CSS, but inline we use repeat(auto-fit) or base value */}
          <div style={{ minWidth: "120px" }}>
            <div style={{ fontSize: "1.5rem", fontWeight: "bold", color: "#16302A" }}>150+</div>
            <div style={{ fontSize: "9px", textTransform: "uppercase", color: "rgba(36, 31, 24, 0.6)", marginTop: "0.25rem" }}>Direct Staff</div>
          </div>
          <div style={{ minWidth: "120px" }}>
            <div style={{ fontSize: "1.5rem", fontWeight: "bold", color: "#2563EB" }}>52%</div>
            <div style={{ fontSize: "9px", textTransform: "uppercase", color: "rgba(36, 31, 24, 0.6)", marginTop: "0.25rem" }}>Female Workforce</div>
          </div>
          <div style={{ minWidth: "120px" }}>
            <div style={{ fontSize: "1.5rem", fontWeight: "bold", color: "#16302A" }}>4</div>
            <div style={{ fontSize: "9px", textTransform: "uppercase", color: "rgba(36, 31, 24, 0.6)", marginTop: "0.25rem" }}>On-Site Clinics</div>
          </div>
          <div style={{ minWidth: "120px" }}>
            <div style={{ fontSize: "1.5rem", fontWeight: "bold", color: "#2563EB" }}>2,000+</div>
            <div style={{ fontSize: "9px", textTransform: "uppercase", color: "rgba(36, 31, 24, 0.6)", marginTop: "0.25rem" }}>Contract Farmers</div>
          </div>
        </div>

        {/* Careers Section */}
        <h2 style={{ fontFamily: "'Jost', sans-serif", fontSize: "1.5rem", fontWeight: "bold", color: "#16302A", marginBottom: "1rem" }}>Join Our Growing Enterprise</h2>
        <p style={{ fontSize: "0.75rem", fontFamily: "'Jost', sans-serif", color: "rgba(36, 31, 24, 0.7)", marginBottom: "1.5rem" }}>
          Explore professional, technical, and logistical roles within our farms, packhouses, and head office.
        </p>

        <div style={{ display: "flex", flexDirection: "column", gap: "1rem", marginBottom: "3rem" }}>
          {jobs.map((job) => (
            <div key={job.id} style={{ backgroundColor: "white", borderRadius: "0.25rem", border: "1px solid rgba(36, 31, 24, 0.1)", padding: "1.25rem", fontFamily: "'Jost', sans-serif", fontSize: "0.75rem", boxShadow: "0 1px 2px 0 rgba(0, 0, 0, 0.05)" }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: "1rem" }}>
                <div>
                  <h3 style={{ fontFamily: "'Jost', sans-serif", fontWeight: "bold", fontSize: "0.875rem", color: "#16302A" }}>{job.title}</h3>
                  <span style={{ color: "#2563EB", fontSize: "10px", display: "block", marginTop: "0.125rem" }}>{job.location}</span>
                </div>
                <button 
                  onClick={() => { setActiveJob(job); setApplied(false); }}
                  style={{ backgroundColor: "#16302A", color: "#F3EEE1", padding: "0.375rem 0.75rem", borderRadius: "0.25rem", fontSize: "10px", textTransform: "uppercase", fontWeight: "bold", border: "none", cursor: "pointer" }}
                >
                  Apply Now
                </button>
              </div>
              <p style={{ color: "rgba(36, 31, 24, 0.8)", marginTop: "0.75rem", lineHeight: "1.625" }}>{job.desc}</p>
            </div>
          ))}
        </div>

        {/* Application Modal */}
        {activeJob && (
          <div style={{ position: "fixed", inset: 0, backgroundColor: "rgba(0, 0, 0, 0.6)", backdropFilter: "blur(4px)", display: "flex", alignItems: "center", justifyContent: "center", padding: "1rem", zIndex: 50 }}>
            <div style={{ backgroundColor: "#F3EEE1", border: "1px solid rgba(36, 31, 24, 0.2)", borderRadius: "0.25rem", maxWidth: "28rem", width: "100%", padding: "1.5rem", position: "relative", fontFamily: "'Jost', sans-serif", fontSize: "0.75rem" }}>
              <button 
                onClick={() => setActiveJob(null)} 
                style={{ position: "absolute", right: "1rem", top: "1rem", fontSize: "1rem", color: "rgba(36, 31, 24, 0.6)", border: "none", background: "none", cursor: "pointer" }}
              >
                ✕
              </button>
              
              <h3 style={{ fontFamily: "'Jost', sans-serif", fontWeight: "bold", fontSize: "1.125rem", color: "#16302A", marginBottom: "0.25rem" }}>Export Career Portal</h3>
              <p style={{ fontSize: "10px", color: "#2563EB", textTransform: "uppercase", marginBottom: "1rem" }}>Applying for: {activeJob.title}</p>
              
              {applied ? (
                <div style={{ textAlign: "center", padding: "2rem 0", display: "flex", flexDirection: "column", gap: "1rem" }}>
                  <div style={{ fontSize: "1.875rem" }}>🌿</div>
                  <h4 style={{ fontFamily: "'Jost', sans-serif", fontWeight: "bold", fontSize: "1rem", color: "#16302A" }}>Application Securely Transmitted</h4>
                  <p style={{ color: "rgba(36, 31, 24, 0.7)" }}>
                    Thank you! Your agronomy / logistical credentials have been safely queued for our Nairobi Human Resources desk.
                  </p>
                  <button 
                    onClick={() => setActiveJob(null)}
                    style={{ backgroundColor: "#16302A", color: "white", padding: "0.5rem 1rem", borderRadius: "0.25rem", fontWeight: "bold", border: "none", cursor: "pointer" }}
                  >
                    Back to Listings
                  </button>
                </div>
              ) : (
                <form onSubmit={handleApply} style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
                  <div>
                    <label style={{ display: "block", fontSize: "10px", textTransform: "uppercase", fontWeight: "bold", color: "#16302A", marginBottom: "0.25rem" }}>Full Name</label>
                    <input required type="text" style={{ width: "100%", backgroundColor: "white", border: "1px solid rgba(36, 31, 24, 0.2)", padding: "0.5rem", borderRadius: "0.25rem", fontSize: "0.75rem" }} />
                  </div>
                  <div>
                    <label style={{ display: "block", fontSize: "10px", textTransform: "uppercase", fontWeight: "bold", color: "#16302A", marginBottom: "0.25rem" }}>Email Address</label>
                    <input required type="email" style={{ width: "100%", backgroundColor: "white", border: "1px solid rgba(36, 31, 24, 0.2)", padding: "0.5rem", borderRadius: "0.25rem", fontSize: "0.75rem" }} />
                  </div>
                  <div>
                    <label style={{ display: "block", fontSize: "10px", textTransform: "uppercase", fontWeight: "bold", color: "#16302A", marginBottom: "0.25rem" }}>Phone Number</label>
                    <input required type="text" style={{ width: "100%", backgroundColor: "white", border: "1px solid rgba(36, 31, 24, 0.2)", padding: "0.5rem", borderRadius: "0.25rem", fontSize: "0.75rem" }} />
                  </div>
                  <div>
                    <label style={{ display: "block", fontSize: "10px", textTransform: "uppercase", fontWeight: "bold", color: "#16302A", marginBottom: "0.25rem" }}>Resume / Cover Letter Text</label>
                    <textarea required placeholder="Paste qualifications here..." style={{ width: "100%", backgroundColor: "white", border: "1px solid rgba(36, 31, 24, 0.2)", padding: "0.5rem", borderRadius: "0.25rem", fontSize: "0.75rem", height: "6rem", resize: "vertical" }} />
                  </div>
                  <button type="submit" style={{ width: "100%", backgroundColor: "#2563EB", color: "white", padding: "0.625rem", borderRadius: "0.25rem", fontWeight: "bold", fontSize: "0.75rem", textTransform: "uppercase", letterSpacing: "0.05em", border: "none", cursor: "pointer" }}>
                    Submit Secure Application
                  </button>
                </form>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
    </>
  );
}
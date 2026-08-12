import React, { useState } from "react";

export default function OutGrowerPage() {
  const [inquired, setInquired] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setInquired(true);
  };

  return (
    <div style={{ backgroundColor: "#F3EEE1", color: "#241F18", minHeight: "100vh", padding: "4rem 1rem" }}>
      <div style={{ maxWidth: "56rem", marginLeft: "auto", marginRight: "auto" }}>
        
        {/* Header Section */}
        <div style={{ borderBottom: "1px solid rgba(36, 31, 24, 0.15)", paddingBottom: "2rem", marginBottom: "3rem" }}>
          <span style={{ fontFamily: "monospace", fontSize: "0.75rem", textTransform: "uppercase", color: "#E1672B", letterSpacing: "0.1em", fontWeight: "bold" }}>
            Smallholder Collaboration
          </span>
          <h1 style={{ fontFamily: "serif", fontSize: "2.5rem", fontWeight: "bold", color: "#16302A", marginTop: "0.5rem", lineHeight: "1" }}>
            Out-Grower Farming
          </h1>
          <p style={{ color: "rgba(36, 31, 24, 0.7)", fontSize: "0.875rem", fontFamily: "monospace", marginTop: "1rem" }}>
            2,000+ CONTRACTED SMALLHOLDERS SUPPORTING REGIONAL SUSTAINABILITY
          </p>
        </div>

        {/* Introduction Grid */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "2rem", marginBottom: "3rem", alignItems: "center" }}>
          <div style={{ display: "flex", flexDirection: "column", gap: "1rem", fontSize: "0.875rem", lineHeight: "1.625" }}>
            <h2 style={{ fontFamily: "serif", fontSize: "1.5rem", fontWeight: "bold", color: "#16302A" }}>Nurturing Local Communities</h2>
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
              src="https://images.unsplash.com/photo-1626906722163-bd4c03cb3b9b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8YmVhbiUyMGZhcm1pbmd8ZW58MHx8MHx8fDA%3D" 
              alt="Outgrower picking fine beans" 
              style={{ width: "100%", height: "20rem", objectFit: "cover", borderRadius: "0.25rem", boxShadow: "0 4px 6px -1px rgba(0,0,0,0.1)", border: "1px solid rgba(36, 31, 24, 0.1)" }}
            />
          </div>
        </div>

        {/* Partnership Benefits Grid */}
        <h2 style={{ fontFamily: "serif", fontSize: "1.5rem", fontWeight: "bold", color: "#16302A", marginBottom: "1.5rem" }}>
          Our Support Protocol
        </h2>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: "1.5rem", marginBottom: "3rem" }}>
          <div style={{ backgroundColor: "rgba(234, 226, 206, 0.6)", padding: "1.25rem", borderRadius: "0.25rem", border: "1px solid rgba(36, 31, 24, 0.15)", fontFamily: "monospace", fontSize: "0.75rem" }}>
            <span style={{ fontSize: "1.25rem", display: "block", marginBottom: "0.5rem" }}>🌱</span>
            <h3 style={{ fontFamily: "serif", fontWeight: "bold", fontSize: "0.875rem", color: "#16302A", marginBottom: "0.5rem" }}>High Quality Inputs</h3>
            <p style={{ color: "rgba(36, 31, 24, 0.8)", lineHeight: "1.625" }}>Subsidized distribution of certified seeds, natural bio-beneficials for pest controls, and organic fertilizers.</p>
          </div>
          <div style={{ backgroundColor: "rgba(234, 226, 206, 0.6)", padding: "1.25rem", borderRadius: "0.25rem", border: "1px solid rgba(36, 31, 24, 0.15)", fontFamily: "monospace", fontSize: "0.75rem" }}>
            <span style={{ fontSize: "1.25rem", display: "block", marginBottom: "0.5rem" }}>📊</span>
            <h3 style={{ fontFamily: "serif", fontWeight: "bold", fontSize: "0.875rem", color: "#16302A", marginBottom: "0.5rem" }}>Technical Guidance</h3>
            <p style={{ color: "rgba(36, 31, 24, 0.8)", lineHeight: "1.625" }}>Weekly soil pH audits, rain calendar scheduling, and GlobalG.A.P criteria audits by certified field managers.</p>
          </div>
          <div style={{ backgroundColor: "rgba(234, 226, 206, 0.6)", padding: "1.25rem", borderRadius: "0.25rem", border: "1px solid rgba(36, 31, 24, 0.15)", fontFamily: "monospace", fontSize: "0.75rem" }}>
            <span style={{ fontSize: "1.25rem", display: "block", marginBottom: "0.5rem" }}>❄️</span>
            <h3 style={{ fontFamily: "serif", fontWeight: "bold", fontSize: "0.875rem", color: "#16302A", marginBottom: "0.5rem" }}>Solar Cooling Storage</h3>
            <p style={{ color: "rgba(36, 31, 24, 0.8)", lineHeight: "1.625" }}>Decentralized, off-grid solar-powered cold boxes to secure crop dormancy within 30 minutes of farm harvest.</p>
          </div>
        </div>

        {/* Form Container */}
        <div style={{ backgroundColor: "#16302A", color: "#F3EEE1", padding: "2rem", borderRadius: "0.5rem", boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1)", fontFamily: "monospace", fontSize: "0.75rem" }}>
          <h2 style={{ fontFamily: "serif", fontSize: "1.5rem", fontWeight: "bold", color: "#C99A3D", marginBottom: "0.5rem" }}>Apply for Out-Grower Contract</h2>
          <p style={{ fontSize: "0.75rem", color: "rgba(243, 238, 225, 0.7)", marginBottom: "1.5rem", lineHeight: "1.625" }}>Are you a Kenyan landholder seeking stable, Fairtrade-aligned international export contracts? Submit your details to request an inspection.</p>

          {inquired ? (
            <div style={{ textAlign: "center", padding: "1.5rem 0", display: "flex", flexDirection: "column", gap: "0.75rem" }}>
              <span style={{ fontSize: "1.875rem", display: "block" }}>🌽</span>
              <h3 style={{ fontFamily: "serif", fontWeight: "bold", fontSize: "1rem", color: "#C99A3D" }}>Inspection Request Safely Queued</h3>
              <p style={{ color: "rgba(243, 238, 225, 0.8)", maxWidth: "28rem", marginLeft: "auto", marginRight: "auto" }}>Thank you for your trust. Our Rift Valley or Mt. Kenya field agronomist office will coordinate a direct soil-grade inspection call within 5-7 business days.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "1rem", maxWidth: "36rem" }}>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "1rem" }}>
                <div>
                  <label style={{ display: "block", fontSize: "10px", color: "#E1672B", fontWeight: "bold", textTransform: "uppercase", marginBottom: "0.25rem" }}>Land Owner Name</label>
                  <input required type="text" style={{ width: "100%", backgroundColor: "#1F3D33", color: "#F3EEE1", border: "1px solid rgba(243, 238, 225, 0.1)", padding: "0.625rem", borderRadius: "0.25rem", fontSize: "0.75rem", outline: "none" }} />
                </div>
                <div>
                  <label style={{ display: "block", fontSize: "10px", color: "#E1672B", fontWeight: "bold", textTransform: "uppercase", marginBottom: "0.25rem" }}>Mobile (M-Pesa registered)</label>
                  <input required type="text" style={{ width: "100%", backgroundColor: "#1F3D33", color: "#F3EEE1", border: "1px solid rgba(243, 238, 225, 0.1)", padding: "0.625rem", borderRadius: "0.25rem", fontSize: "0.75rem", outline: "none" }} />
                </div>
              </div>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "1rem" }}>
                <div>
                  <label style={{ display: "block", fontSize: "10px", color: "#E1672B", fontWeight: "bold", textTransform: "uppercase", marginBottom: "0.25rem" }}>Acreage & Region</label>
                  <input required placeholder="e.g. 5 Acres, Meru/Nanyuki" type="text" style={{ width: "100%", backgroundColor: "#1F3D33", color: "#F3EEE1", border: "1px solid rgba(243, 238, 225, 0.1)", padding: "0.625rem", borderRadius: "0.25rem", fontSize: "0.75rem", outline: "none" }} />
                </div>
                <div>
                  <label style={{ display: "block", fontSize: "10px", color: "#E1672B", fontWeight: "bold", textTransform: "uppercase", marginBottom: "0.25rem" }}>Main Crop Target</label>
                  <select style={{ width: "100%", backgroundColor: "#1F3D33", color: "#F3EEE1", border: "1px solid rgba(243, 238, 225, 0.1)", padding: "0.625rem", borderRadius: "0.25rem", fontSize: "0.75rem", outline: "none" }}>
                    <option>Hass Avocados</option>
                    <option>Fine Green Beans</option>
                    <option>Sugar Snaps / Snow Peas</option>
                    <option>Purple Passion Fruits</option>
                    <option>Culinary Herbs</option>
                  </select>
                </div>
              </div>
              <button type="submit" style={{ alignSelf: "flex-start", backgroundColor: "#E1672B", color: "white", padding: "0.75rem 1.5rem", borderRadius: "0.25rem", fontWeight: "bold", textTransform: "uppercase", letterSpacing: "0.05em", fontSize: "0.75rem", border: "none", cursor: "pointer", marginTop: "0.5rem" }}>
                Submit Agricultural Intake Form
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
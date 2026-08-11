import React from "react";

export default function ConservationPage() {
  return (
    <div style={{ backgroundColor: "#F3EEE1", color: "#241F18", minHeight: "100vh", padding: "4rem 1rem" }}>
      <div style={{ maxWidth: "56rem", marginLeft: "auto", marginRight: "auto" }}>
        
        {/* Header Section */}
        <div style={{ borderBottom: "1px solid rgba(36, 31, 24, 0.15)", paddingBottom: "2rem", marginBottom: "3rem" }}>
          <span style={{ fontFamily: "monospace", fontSize: "0.75rem", textTransform: "uppercase", color: "#E1672B", letterSpacing: "0.1em", fontWeight: "bold" }}>
            Ecological Preservation
          </span>
          <h1 style={{ fontFamily: "serif", fontSize: "2.5rem", fontWeight: "bold", color: "#16302A", marginTop: "0.5rem", lineHeight: "1" }}>
            Conservation & Biodiversity
          </h1>
          <p style={{ color: "rgba(36, 31, 24, 0.7)", fontSize: "0.875rem", fontFamily: "monospace", marginTop: "1rem" }}>
            WETLAND RESTORATION, REWILDING CORRIDORS & SOLAR POWER ENERGY ARRAYS
          </p>
        </div>

        {/* Content Section Grid */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "2rem", marginBottom: "3rem", alignItems: "center" }}>
          <div style={{ display: "flex", flexDirection: "column", gap: "1rem", fontSize: "0.875rem", lineHeight: "1.625" }}>
            <h2 style={{ fontFamily: "serif", fontSize: "1.5rem", fontWeight: "bold", color: "#16302A" }}>Protecting Kenya’s Flora & Fauna</h2>
            <p>
              Agriculture does not exist in isolation. At Prime Agro Exports, we deliberately allocate up to 15% of our private estate acreage as non-productive rewilding zones, wetlands, and buffer areas.
            </p>
            <p>
              On our Thika Highlands farm, natural forest corridors have been preserved to protect native avian species and beneficial insects. Water harvested from seasonal rains is routed through artificial reed lagoons, filtering farm runoff before it is slowly returned to regional river networks.
            </p>
            <p>
              To reduce our carbon footprint, we have installed over 1.2 Megawatts of grid-connected solar power generation on the rooftops of our four farm packhouses, and we operate highly automated, low-volume drip irrigation systems.
            </p>
          </div>
          <div>
            <img 
              src="https://images.unsplash.com/photo-1526047932273-341f2a7631f9?fm=jpg&q=80&w=1200&auto=format&fit=crop" 
              alt="Conservation and wetlands" 
              style={{ width: "100%", height: "20rem", objectFit: "cover", borderRadius: "0.25rem", boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1)", border: "1px solid rgba(36, 31, 24, 0.1)" }}
            />
          </div>
        </div>

        {/* Action List Grid */}
        <h2 style={{ fontFamily: "serif", fontSize: "1.5rem", fontWeight: "bold", color: "#16302A", marginBottom: "1.5rem" }}>Our Conservation Metrics</h2>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: "1.5rem" }}>
          
          <div style={{ backgroundColor: "rgba(234, 226, 206, 0.6)", padding: "1.25rem", borderRadius: "0.25rem", border: "1px solid rgba(36, 31, 24, 0.15)", fontFamily: "monospace", fontSize: "0.75rem" }}>
            <span style={{ fontSize: "1.25rem", display: "block", marginBottom: "0.5rem" }}>☀️</span>
            <h3 style={{ fontFamily: "serif", fontWeight: "bold", fontSize: "0.875rem", color: "#16302A", marginBottom: "0.25rem" }}>1.2 MW Solar Power</h3>
            <p style={{ color: "rgba(36, 31, 24, 0.8)", lineHeight: "1.625", marginTop: "0.25rem" }}>Four proprietary packhouses are partially powered by clean, off-grid rooftop solar panels.</p>
          </div>

          <div style={{ backgroundColor: "rgba(234, 226, 206, 0.6)", padding: "1.25rem", borderRadius: "0.25rem", border: "1px solid rgba(36, 31, 24, 0.15)", fontFamily: "monospace", fontSize: "0.75rem" }}>
            <span style={{ fontSize: "1.25rem", display: "block", marginBottom: "0.5rem" }}>🦆</span>
            <h3 style={{ fontFamily: "serif", fontWeight: "bold", fontSize: "0.875rem", color: "#16302A", marginBottom: "0.25rem" }}>Wetlands Reserve</h3>
            <p style={{ color: "rgba(36, 31, 24, 0.8)", lineHeight: "1.625", marginTop: "0.25rem" }}>Subsidized reed lagoons filter farm runoff, hosting over 50 native bird species.</p>
          </div>

          <div style={{ backgroundColor: "rgba(234, 226, 206, 0.6)", padding: "1.25rem", borderRadius: "0.25rem", border: "1px solid rgba(36, 31, 24, 0.15)", fontFamily: "monospace", fontSize: "0.75rem" }}>
            <span style={{ fontSize: "1.25rem", display: "block", marginBottom: "0.5rem" }}>💧</span>
            <h3 style={{ fontFamily: "serif", fontWeight: "bold", fontSize: "0.875rem", color: "#16302A", marginBottom: "0.25rem" }}>Drip Micro-Irrigation</h3>
            <p style={{ color: "rgba(36, 31, 24, 0.8)", lineHeight: "1.625", marginTop: "0.25rem" }}>Computerized water delivery reduces water usage by 40% compared to traditional sprayers.</p>
          </div>

        </div>
      </div>
    </div>
  );
}
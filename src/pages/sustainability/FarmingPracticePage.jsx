import React from "react";
import SEO from "../../components/SEO";

export default function FarmingPracticePage() {
  return (
    <>
      <SEO
        title="Sustainable Farming Practices | Prime Agro Exports Limited"
        description="Discover the sustainable, low-impact farming practices behind our GLOBALG.A.P and organic-certified Kenyan flower, fruit and vegetable production."
        path="/sustainability/farming-practice"
      />
    <div style={{ backgroundColor: "#F3EEE1", color: "#241F18", minHeight: "100vh", padding: "4rem 1rem" }}>
      <div style={{ maxWidth: "56rem", marginLeft: "auto", marginRight: "auto" }}>
        
        {/* Header Section */}
        <div style={{ borderBottom: "1px solid rgba(36, 31, 24, 0.15)", paddingBottom: "2rem", marginBottom: "3rem" }}>
          <span style={{ fontFamily: "'Jost', sans-serif", fontSize: "0.75rem", textTransform: "uppercase", color: "#2563EB", letterSpacing: "0.1em", fontWeight: "bold" }}>
            Integrated Agriculture
          </span>
          <h1 style={{ fontFamily: "'Jost', sans-serif", fontSize: "2.25rem", fontWeight: "bold", color: "#16302A", marginTop: "0.5rem", lineHeight: "1" }}>
            Farming Practice
          </h1>
          <p style={{ color: "rgba(36, 31, 24, 0.7)", fontSize: "0.875rem", fontFamily: "'Jost', sans-serif", marginTop: "1rem" }}>
            SEED TO SPOON TRACEABILITY & INTEGRATED PEST MANAGEMENT
          </p>
        </div>

        {/* Content Section Grid */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "2rem", marginBottom: "3rem" }}>
          
          <div style={{ gridColumn: "span 2", display: "flex", flexDirection: "column", gap: "1.5rem", fontSize: "0.875rem", lineHeight: "1.625" }}>
            <h2 style={{ fontFamily: "'Jost', sans-serif", fontSize: "1.5rem", fontWeight: "bold", color: "#16302A" }}>IPM & Natural Soil Solutions</h2>
            <p>
              At Prime Agro Exports, we practice <strong>Integrated Farming</strong>. We believe that sustained high-quality yields are only possible when we nurture the physical and biological integrity of the soil and ecosystem.
            </p>
            <p>
              To combat crop pests while meeting the strictest chemical residue limitations of EU supermarkets, our Naivasha and Narok agricultural centers operate dedicated <strong>IPM (Integrated Pest Management)</strong> breeding facilities. Here, we rear biological beneficial bugs (such as phytoseiid predatory mites) and introduce them to crops prior to any pesticide usage.
            </p>
            <p>
              In addition, we maintain one of Kenya's largest proprietary worm hatcheries. Earthworm castings (vermicompost) and tea are circulated via our automated drip-irrigation networks, dramatically increasing natural humus content, soil biology, and crop disease resistance.
            </p>
          </div>

          <div style={{ backgroundColor: "#EAE2CE", padding: "1.5rem", borderRadius: "0.25rem", border: "1px solid rgba(36, 31, 24, 0.1)", height: "fit-content", display: "flex", flexDirection: "column", gap: "1rem", fontFamily: "'Jost', sans-serif", fontSize: "0.75rem" }}>
            <h3 style={{ fontFamily: "'Jost', sans-serif", fontWeight: "bold", fontSize: "0.875rem", color: "#16302A" }}>Agricultural Audits</h3>
            <div style={{ borderBottom: "1px solid rgba(36, 31, 24, 0.1)", paddingBottom: "0.5rem" }}>
              <span style={{ color: "#2563EB", display: "block" }}>FERTILIZATION:</span>
              Drip-irrigation vermiculture & organic plant-extract sprays.
            </div>
            <div style={{ borderBottom: "1px solid rgba(36, 31, 24, 0.1)", paddingBottom: "0.5rem" }}>
              <span style={{ color: "#2563EB", display: "block" }}>PEST CONTROLS:</span>
              Predatory biological beneficial insect release (IPM focus).
            </div>
            <div>
              <span style={{ color: "#2563EB", display: "block" }}>TRACE STATUS:</span>
              100% individual crop carton barcoding (Seed to Flight).
            </div>
          </div>
        </div>

        {/* Traceability Info Banner */}
        <div style={{ backgroundColor: "#16302A", color: "#F3EEE1", padding: "2rem", borderRadius: "0.25rem", boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1)", fontFamily: "'Jost', sans-serif", fontSize: "0.75rem" }}>
          <h3 style={{ fontFamily: "'Jost', sans-serif", fontWeight: "bold", fontSize: "1.125rem", color: "#C99A3D", marginBottom: "0.75rem" }}>Complete Transparency Barcoding</h3>
          <p style={{ lineHeight: "1.625", color: "rgba(243, 238, 225, 0.8)", maxWidth: "36rem" }}>
            Traceability is the cornerstone of modern horticulture. Every box of fine beans, cut roses, or frozen diced avocados that leaves our packing facility is barcoded with a secure batch code. Buyers can immediately inspect the sowing date, proprietary estate block or contract outgrower code, cooling timestamp, and airport cargo village dispatch manifest.
          </p>
        </div>

      </div>
    </div>
    </>
  );
}
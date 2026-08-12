import React, { useState } from "react";
import { COMPANY } from "../../data/companyData";

export default function FreightLogisticsPage() {
  const [formData, setFormData] = useState({ origin: "Nairobi (JKIA)", destination: "", weight: "", cropType: "Flowers" });
  const [estimate, setEstimate] = useState(null);

  const handleCalc = (e) => {
    e.preventDefault();
    const estDays = formData.destination.toLowerCase().includes("london") || formData.destination.toLowerCase().includes("amsterdam") ? "24-36 Hours" : "2-3 Days";
    setEstimate({
      tempHold: formData.cropType === "Flowers" ? "2°C - 4°C" : formData.cropType === "IQF" ? "-18°C" : "6°C - 8°C",
      time: estDays,
      route: `JKIA (Nairobi) Direct Cargo to ${formData.destination || "Global Destination"}`
    });
  };

  return (
    <div style={{ backgroundColor: "#F3EEE1", color: "#241F18", minHeight: "100vh", padding: "4rem 1rem" }}>
      <div style={{ maxWidth: "56rem", marginLeft: "auto", marginRight: "auto" }}>
        
        {/* Header Section */}
        <div style={{ borderBottom: "1px solid rgba(36, 31, 24, 0.15)", paddingBottom: "2rem", marginBottom: "3rem" }}>
          <span style={{ fontFamily: "'Jost', sans-serif", fontSize: "0.75rem", textTransform: "uppercase", color: "#2563EB", trackingWidest: "0.1em", fontWeight: "bold" }}>
            {COMPANY.logisticsDivision}
          </span>
          <h1 style={{ fontFamily: "'Jost', sans-serif", fontSize: "2.5rem", fontWeight: "bold", color: "#16302A", marginTop: "0.5rem", lineHeight: "1" }}>
            Freight & Logistics
          </h1>
          <p style={{ color: "rgba(36, 31, 24, 0.7)", fontSize: "0.875rem", fontFamily: "'Jost', sans-serif", marginTop: "1rem" }}>
            NURTURED IN KENYA, COOLED IN NAIROBI, DELIVERED FRESH WORLDWIDE
          </p>
        </div>

        {/* Info Grid */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "2rem", marginBottom: "3rem" }}>
          <div style={{ display: "flex", flexDirection: "column", gap: "1rem", fontSize: "0.875rem", lineHeight: "1.625" }}>
            <h2 style={{ fontFamily: "'Jost', sans-serif", fontSize: "1.5rem", fontWeight: "bold", color: "#16302A" }}>In-House Cold Chain Mastery</h2>
            <p>
              Unlike many exporters who transfer sensitive produce to third-party handlers, Prime Agro Exports operates <strong>{COMPANY.logisticsDivision}</strong>, our fully integrated logistics division based inside JKIA Cargo Village, Nairobi.
            </p>
            <p>
              Our flagship facility features a state-of-the-art 75-tonne capacity cold room with advanced vacuum and forced-air blast chillers. This allows us to drop harvest temperatures to optimal dormancy levels within hours, preserving peak texture and vase life before air palettes are built.
            </p>
            <ul style={{ listStyleType: "disc", paddingLeft: "1.25rem", fontFamily: "'Jost', sans-serif", fontSize: "0.75rem", color: "rgba(36, 31, 24, 0.8)", display: "flex", flexDirection: "column", gap: "0.375rem" }}>
              <li><strong>RA3 Certified Agent:</strong> Pre-cleared security status for direct flights into European Union airports.</li>
              <li><strong>IATA Accredited cargo division:</strong> Preferred booking rates with British Airways, Qatar Cargo, and Emirates SkyCargo.</li>
              <li><strong>Customs Clearing Agent:</strong> Direct electronic processing of KEPHIS phytosanitary certificates, eliminating airport tarmac delays.</li>
            </ul>
          </div>

          <div style={{ backgroundColor: "#16302A", color: "#F3EEE1", padding: "1.5rem", borderRadius: "0.25rem", boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1)" }}>
            <h3 style={{ fontFamily: "'Jost', sans-serif", fontWeight: "bold", fontSize: "1.125rem", color: "#C99A3D", marginBottom: "1rem" }}>Logistics Credentials</h3>
            <div style={{ fontFamily: "'Jost', sans-serif", fontSize: "0.75rem", display: "flex", flexDirection: "column", gap: "0.75rem" }}>
              <div style={{ borderBottom: "1px solid rgba(243, 238, 225, 0.1)", paddingBottom: "0.5rem" }}>
                <span style={{ color: "#2563EB", display: "block" }}>AIR FREIGHT BASE:</span>
                JKIA Cargo Village, Nairobi
              </div>
              <div style={{ borderBottom: "1px solid rgba(243, 238, 225, 0.1)", paddingBottom: "0.5rem" }}>
                <span style={{ color: "#2563EB", display: "block" }}>SEA REEFER CORRIDOR:</span>
                Mombasa Port Cold-Storage Depot to CA Sea Containers
              </div>
              <div style={{ borderBottom: "1px solid rgba(243, 238, 225, 0.1)", paddingBottom: "0.5rem" }}>
                <span style={{ color: "#2563EB", display: "block" }}>CAPACITY LIMITS:</span>
                75-tonne static cold-room hold & blast chilling array
              </div>
              <div>
                <span style={{ color: "#2563EB", display: "block" }}>CERTIFICATIONS:</span>
                RA3 (Regulated Agent EU Third Country), KRA Customs, KIFWA Member
              </div>
            </div>
          </div>
        </div>

        {/* Form Section */}
        <div style={{ backgroundColor: "#EAE2CE", padding: "2rem", borderRadius: "0.25rem", border: "1px solid rgba(36, 31, 24, 0.15)" }}>
          <h2 style={{ fontFamily: "'Jost', sans-serif", fontSize: "1.5rem", fontWeight: "bold", color: "#16302A", marginBottom: "0.5rem" }}>Simulate a Cold Chain Booking</h2>
          <p style={{ fontSize: "0.75rem", fontFamily: "'Jost', sans-serif", color: "rgba(36, 31, 24, 0.7)", marginBottom: "1.5rem" }}>Estimate shipping parameters and optimal cold room storage temperatures based on crop category.</p>

          <form onSubmit={handleCalc} style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))", gap: "1rem", alignItems: "end" }}>
            <div>
              <label style={{ display: "block", fontSize: "10px", fontFamily: "'Jost', sans-serif", fontWeight: "bold", textTransform: "uppercase", color: "#16302A", marginBottom: "0.25rem" }}>Crop Type</label>
              <select 
                value={formData.cropType} 
                onChange={(e) => setFormData({...formData, cropType: e.target.value})}
                style={{ width: "100%", backgroundColor: "#F3EEE1", border: "1px solid rgba(36, 31, 24, 0.2)", padding: "0.5rem", borderRadius: "0.25rem", fontSize: "0.75rem", fontFamily: "'Jost', sans-serif" }}
              >
                <option value="Flowers">🌹 Flowers / Roses</option>
                <option value="Fruits">🥑 Avocados / Fruits</option>
                <option value="Vegetables">🫛 Fresh Vegetables</option>
                <option value="IQF">❄️ Frozen IQF</option>
              </select>
            </div>
            <div>
              <label style={{ display: "block", fontSize: "10px", fontFamily: "'Jost', sans-serif", fontWeight: "bold", textTransform: "uppercase", color: "#16302A", marginBottom: "0.25rem" }}>Destination</label>
              <input 
                type="text" 
                required
                placeholder="e.g. London Heathrow" 
                value={formData.destination} 
                onChange={(e) => setFormData({...formData, destination: e.target.value})}
                style={{ width: "100%", backgroundColor: "#F3EEE1", border: "1px solid rgba(36, 31, 24, 0.2)", padding: "0.5rem", borderRadius: "0.25rem", fontSize: "0.75rem", fontFamily: "'Jost', sans-serif" }}
              />
            </div>
            <div>
              <label style={{ display: "block", fontSize: "10px", fontFamily: "'Jost', sans-serif", fontWeight: "bold", textTransform: "uppercase", color: "#16302A", marginBottom: "0.25rem" }}>Weight (KG)</label>
              <input 
                type="number" 
                required
                placeholder="e.g. 5000" 
                value={formData.weight} 
                onChange={(e) => setFormData({...formData, weight: e.target.value})}
                style={{ width: "100%", backgroundColor: "#F3EEE1", border: "1px solid rgba(36, 31, 24, 0.2)", padding: "0.5rem", borderRadius: "0.25rem", fontSize: "0.75rem", fontFamily: "'Jost', sans-serif" }}
              />
            </div>
            <button style={{ backgroundColor: "#2563EB", color: "white", padding: "0.625rem", borderRadius: "0.25rem", fontFamily: "'Jost', sans-serif", fontWeight: "bold", fontSize: "0.75rem", textTransform: "uppercase", letterSpacing: "0.05em", border: "none", cursor: "pointer" }}>
              Calculate Plan
            </button>
          </form>

          {estimate && (
            <div style={{ marginTop: "2rem", backgroundColor: "#F3EEE1", borderLeft: "4px solid #16302A", padding: "1rem", borderRadius: "0 0.25rem 0.25rem 0", fontFamily: "'Jost', sans-serif", fontSize: "0.75rem", color: "#241F18", display: "flex", flexDirection: "column", gap: "0.5rem" }}>
              <h4 style={{ fontFamily: "'Jost', sans-serif", fontWeight: "bold", fontSize: "0.875rem", color: "#16302A" }}>Optimal Cargo Cooling Manifest</h4>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(150px, 1fr))", gap: "1rem", marginTop: "0.5rem" }}>
                <div>
                  <span style={{ color: "#2563EB", fontSize: "10px", fontWeight: "bold", display: "block" }}>COLD STORAGE PROFILE:</span>
                  <span style={{ fontSize: "1rem", fontWeight: "bold" }}>{estimate.tempHold}</span>
                </div>
                <div>
                  <span style={{ color: "#2563EB", fontSize: "10px", fontWeight: "bold", display: "block" }}>ESTIMATED TRANSIT TIME:</span>
                  <span style={{ fontSize: "1rem", fontWeight: "bold" }}>{estimate.time}</span>
                </div>
                <div>
                  <span style={{ color: "#2563EB", fontSize: "10px", fontWeight: "bold", display: "block" }}>ROUTING SYSTEM:</span>
                  <span>{estimate.route}</span>
                </div>
              </div>
              <p style={{ fontSize: "10px", color: "rgba(36, 31, 24, 0.7)", marginTop: "0.5rem" }}>
                *Note: Manifest plans are synced with HCD and KEPHIS health certification databases. Cargo remains in airtight cool rooms until air pallet building inside our RA3 certified facility.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
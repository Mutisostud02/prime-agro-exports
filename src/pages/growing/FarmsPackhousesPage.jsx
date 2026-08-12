import React, { useState } from "react";
import { FARMS_LIST } from "../../data/productsData";

export default function FarmsPackhousesPage() {
  const [selectedFarm, setSelectedFarm] = useState(FARMS_LIST[0]);

  return (
    <div style={{ backgroundColor: "#F3EEE1", color: "#241F18", minHeight: "100vh", padding: "4rem 1rem" }}>
      <div style={{ maxWidth: "56rem", marginLeft: "auto", marginRight: "auto" }}>
        
        {/* Header Section */}
        <div style={{ borderBottom: "1px solid rgba(36, 31, 24, 0.15)", paddingBottom: "2rem", marginBottom: "3rem" }}>
          <span style={{ fontFamily: "'Jost', sans-serif", fontSize: "0.75rem", textTransform: "uppercase", color: "#2563EB", letterSpacing: "0.1em", fontWeight: "bold" }}>
            Equatorial Cultivation Hubs
          </span>
          <h1 style={{ fontFamily: "'Jost', sans-serif", fontSize: "2.5rem", fontWeight: "bold", color: "#16302A", marginTop: "0.5rem", lineHeight: "1" }}>
            Our Farms & Packhouses
          </h1>
          <p style={{ color: "rgba(36, 31, 24, 0.7)", fontSize: "0.875rem", fontFamily: "'Jost', sans-serif", marginTop: "1rem" }}>
            SEVEN HIGH-ALTITUDE AGRICULTURAL GEMS STRADDLING THE EQUATOR
          </p>
        </div>

        {/* Introduction */}
        <div style={{ fontSize: "0.875rem", lineHeight: "1.625", marginBottom: "3rem", display: "flex", flexDirection: "column", gap: "1rem" }}>
          <p>
            Prime Agro Exports operates seven proprietary farms across Kenya — spanning Naivasha, Thika, Rumuruti, Ol Kalou, Muranga, Narok, and Western Kenya. Each site is deliberately located to capture unique microclimates, high-altitude cooling, and rich volcanic soil profiles. This strategic diversification ensures year-round product consistency and crop security.
          </p>
        </div>

        {/* Interactive Selector Tabs */}
        <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem", borderBottom: "1px solid rgba(36, 31, 24, 0.15)", paddingBottom: "1rem", marginBottom: "2rem" }}>
          {FARMS_LIST.map((farm) => (
            <button
              key={farm.id}
              onClick={() => setSelectedFarm(farm)}
              style={{
                padding: "0.5rem 1rem",
                fontFamily: "'Jost', sans-serif",
                fontSize: "0.75rem",
                fontWeight: "bold",
                borderRadius: "0.25rem",
                transition: "all 0.2s",
                border: "none",
                cursor: "pointer",
                backgroundColor: selectedFarm.id === farm.id ? "#16302A" : "rgba(234, 226, 206, 0.6)",
                color: selectedFarm.id === farm.id ? "white" : "#16302A"
              }}
            >
              {farm.name.split(" — ")[0]}
            </button>
          ))}
        </div>

        {/* Selected Farm Detail Panel */}
        {selectedFarm && (
          <div style={{ 
            backgroundColor: "white", 
            borderRadius: "0.25rem", 
            border: "1px solid rgba(36, 31, 24, 0.1)", 
            padding: "1.5rem", 
            boxShadow: "0 1px 2px 0 rgba(0, 0, 0, 0.05)", 
            display: "grid", 
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", 
            gap: "2rem", 
            marginBottom: "3rem" 
          }}>
            <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
              <span style={{ fontFamily: "'Jost', sans-serif", fontSize: "10px", color: "#2563EB", fontWeight: "bold", textTransform: "uppercase", letterSpacing: "0.05em" }}>
                SECURE EXP_FARM MANIFEST
              </span>
              <h2 style={{ fontFamily: "'Jost', sans-serif", fontSize: "1.5rem", fontWeight: "bold", color: "#16302A", lineHeight: "1.2" }}>
                {selectedFarm.name}
              </h2>
              
              <div style={{ fontFamily: "'Jost', sans-serif", fontSize: "0.75rem", color: "rgba(36, 31, 24, 0.8)", display: "flex", flexDirection: "column", gap: "0.5rem", borderTop: "1px solid rgba(36, 31, 24, 0.1)", borderBottom: "1px solid rgba(36, 31, 24, 0.1)", padding: "0.75rem 0" }}>
                <div>📍 <strong style={{ color: "#16302A" }}>Location:</strong> {selectedFarm.location}</div>
                <div>⛰️ <strong style={{ color: "#16302A" }}>Altitude:</strong> {selectedFarm.altitude}</div>
                <div>📐 <strong style={{ color: "#16302A" }}>Total Area:</strong> {selectedFarm.area}</div>
              </div>

              <div>
                <h3 style={{ fontFamily: "'Jost', sans-serif", fontWeight: "bold", fontSize: "0.875rem", color: "#16302A", marginBottom: "0.5rem" }}>
                  Sustainable Infrastructure Features:
                </h3>
                <ul style={{ listStyleType: "disc", paddingLeft: "1.25rem", fontFamily: "'Jost', sans-serif", fontSize: "0.75rem", color: "rgba(36, 31, 24, 0.8)", display: "flex", flexDirection: "column", gap: "0.375rem" }}>
                  {selectedFarm.highlights.map((h, i) => (
                    <li key={i}>{h}</li>
                  ))}
                </ul>
              </div>
            </div>

            <div>
              <img 
                src={selectedFarm.image} 
                alt={selectedFarm.name} 
                style={{ width: "100%", height: "20rem", objectFit: "cover", borderRadius: "0.25rem", boxShadow: "inset 0 2px 4px 0 rgba(0, 0, 0, 0.06)" }}
              />
              <div style={{ backgroundColor: "#16302A", color: "#F3EEE1", textAlign: "center", fontFamily: "'Jost', sans-serif", fontSize: "10px", padding: "0.5rem 0", marginTop: "0.5rem", borderRadius: "0.25rem" }}>
                🛡️ GLOBALG.A.P, BRCGS, KFC COLD CHAIN SEALED
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
import React from "react";

export default function CSRPage() {
  return (
    <div style={{ backgroundColor: "#F3EEE1", color: "#241F18", minHeight: "100vh", padding: "4rem 1rem" }}>
      <div style={{ maxWidth: "56rem", marginLeft: "auto", marginRight: "auto" }}>
        
        {/* Header Section */}
        <div style={{ borderBottom: "1px solid rgba(36, 31, 24, 0.15)", paddingBottom: "2rem", marginBottom: "3rem" }}>
          <span style={{ fontFamily: "'Jost', sans-serif", fontSize: "0.75rem", textTransform: "uppercase", color: "#2563EB", letterSpacing: "0.1em", fontWeight: "bold" }}>
            Community Social Initiatives
          </span>
          <h1 style={{ fontFamily: "'Jost', sans-serif", fontSize: "2.5rem", fontWeight: "bold", color: "#16302A", marginTop: "0.5rem", lineHeight: "1" }}>
            CSI & CSR Responsibilities
          </h1>
          <p style={{ color: "rgba(36, 31, 24, 0.7)", fontSize: "0.875rem", fontFamily: "'Jost', sans-serif", marginTop: "1rem" }}>
            DISPENSARIES, FREE PRIMARY SCHOOLS & SOCIAL WELFARE ENHANCEMENT
          </p>
        </div>

        {/* Content Section Grid */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "2rem", marginBottom: "3rem", alignItems: "center" }}>
          <div>
            <img 
              src="https://images.unsplash.com/photo-1540420773420-3366772f4999?fm=jpg&q=80&w=1200&auto=format&fit=crop" 
              alt="Community Clinic and School" 
              style={{ width: "100%", height: "20rem", objectFit: "cover", borderRadius: "0.25rem", boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1)", border: "1px solid rgba(36, 31, 24, 0.1)" }}
            />
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: "1rem", fontSize: "0.875rem", lineHeight: "1.625" }}>
            <h2 style={{ fontFamily: "'Jost', sans-serif", fontSize: "1.5rem", fontWeight: "bold", color: "#16302A" }}>Ethical Citizenship</h2>
            <p>
              We firmly believe that horticultural business is a collaborative covenant with the local communities who make our growing operations possible.
            </p>
            <p>
              Under our <strong>Fairtrade</strong> program and <strong>ETI (Ethical Trading Initiative)</strong> certifications, Prime Agro Exports allocates fairtrade pricing premiums directly to community-elected assemblies.
            </p>
            <p>
              These funds have financed the construction and operational budgets of several fully staffed, fully subsidized on-site medical clinics, providing clean healthcare access to over 3,100 staff members and their families.
            </p>
            <p>
              In addition, our Naivasha estate hosts a comprehensive primary school and nursery, supporting the education of hundreds of children of our field workforce.
            </p>
          </div>
        </div>

        {/* Initiatives List Grid */}
        <h2 style={{ fontFamily: "'Jost', sans-serif", fontSize: "1.5rem", fontWeight: "bold", color: "#16302A", marginBottom: "1.5rem" }}>
          Our Impact Commitments
        </h2>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: "1.5rem" }}>
          
          <div style={{ backgroundColor: "rgba(234, 226, 206, 0.6)", padding: "1.25rem", borderRadius: "0.25rem", border: "1px solid rgba(36, 31, 24, 0.15)", fontFamily: "'Jost', sans-serif", fontSize: "0.75rem" }}>
            <span style={{ fontSize: "1.25rem", display: "block", marginBottom: "0.5rem" }}>🏥</span>
            <h3 style={{ fontFamily: "'Jost', sans-serif", fontWeight: "bold", fontSize: "0.875rem", color: "#16302A", marginBottom: "0.25rem" }}>On-Site Dispensaries</h3>
            <p style={{ color: "rgba(36, 31, 24, 0.8)", lineHeight: "1.625", marginTop: "0.25rem" }}>
              Free clinical consults, vaccines, and maternal care for all permanent field labor families.
            </p>
          </div>

          <div style={{ backgroundColor: "rgba(234, 226, 206, 0.6)", padding: "1.25rem", borderRadius: "0.25rem", border: "1px solid rgba(36, 31, 24, 0.15)", fontFamily: "'Jost', sans-serif", fontSize: "0.75rem" }}>
            <span style={{ fontSize: "1.25rem", display: "block", marginBottom: "0.5rem" }}>🏫</span>
            <h3 style={{ fontFamily: "'Jost', sans-serif", fontWeight: "bold", fontSize: "0.875rem", color: "#16302A", marginBottom: "0.25rem" }}>Primary Schools</h3>
            <p style={{ color: "rgba(36, 31, 24, 0.8)", lineHeight: "1.625", marginTop: "0.25rem" }}>
              Fully financed nursery and primary school inside Naivasha, including curriculum materials.
            </p>
          </div>

          <div style={{ backgroundColor: "rgba(234, 226, 206, 0.6)", padding: "1.25rem", borderRadius: "0.25rem", border: "1px solid rgba(36, 31, 24, 0.15)", fontFamily: "'Jost', sans-serif", fontSize: "0.75rem" }}>
            <span style={{ fontSize: "1.25rem", display: "block", marginBottom: "0.5rem" }}>💧</span>
            <h3 style={{ fontFamily: "'Jost', sans-serif", fontWeight: "bold", fontSize: "0.875rem", color: "#16302A", marginBottom: "0.25rem" }}>Clean Water Access</h3>
            <p style={{ color: "rgba(36, 31, 24, 0.8)", lineHeight: "1.625", marginTop: "0.25rem" }}>
              Subsidized clean reverse-osmosis water tap access points for surrounding residential zones.
            </p>
          </div>

        </div>
      </div>
    </div>
  );
}
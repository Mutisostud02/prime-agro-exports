import React from "react";

export default function CustomersPage() {
  const segments = [
    { name: "Supermarket Retailers", requirements: "BRCGS Grade AA compliance, 100% trace code, pre-packed retail sleeve barcodes, strict Maximum Residue Level (MRL) chemical test passes.", marketShare: "45%" },
    { name: "Floriculture Wholesalers & Auctions", requirements: "Consistent stem sizes (50cm-80cm), standard moisture containment sleeves, direct delivery to Royal FloraHolland / Aalsmeer.", marketShare: "30%" },
    { name: "IQF Processors & Food Service", requirements: "Bulk 10kg poly-lined box deliveries, calibrated avocado halve weights, Halal/Kosher certificate alignment.", marketShare: "25%" }
  ];

  return (
    <div style={{ backgroundColor: "#F3EEE1", color: "#241F18", minHeight: "100vh", padding: "4rem 1rem" }}>
      <div style={{ maxWidth: "56rem", marginLeft: "auto", marginRight: "auto" }}>
        
        {/* Header Section */}
        <div style={{ borderBottom: "1px solid rgba(36, 31, 24, 0.15)", paddingBottom: "2rem", marginBottom: "3rem" }}>
          <span style={{ fontFamily: "monospace", fontSize: "0.75rem", textTransform: "uppercase", color: "#E1672B", letterSpacing: "0.1em", fontWeight: "bold" }}>
            Global Footprint & Standards
          </span>
          <h1 style={{ fontFamily: "serif", fontSize: "2.5rem", fontWeight: "bold", color: "#16302A", marginTop: "0.5rem", lineHeight: "1" }}>
            Our Customers
          </h1>
          <p style={{ color: "rgba(36, 31, 24, 0.7)", fontSize: "0.875rem", fontFamily: "monospace", marginTop: "1rem" }}>
            TRUSTED COLD-CHAIN SUPPLIERS TO MORE THAN 15 COUNTRIES
          </p>
        </div>

        {/* Footprint Grid */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "2rem", marginBottom: "3rem" }}>
          <div style={{ gridColumn: "span 2", display: "flex", flexDirection: "column", gap: "1rem", fontSize: "0.875rem", lineHeight: "1.625" }}>
            <h2 style={{ fontFamily: "serif", fontSize: "1.5rem", fontWeight: "bold", color: "#16302A" }}>A Global Network Built on Traceability</h2>
            <p>
              Prime Agro Exports has built a reputation as a supplier-of-choice for some of the world&apos;s most demanding buyers. We do not simply ship produce; we align our harvesting, packhouse, and logistics standards to match the specific, granular protocols of our destinations.
            </p>
            <p>
              Whether it is Europe's high-street supermarkets requiring detailed ethical audits (SMETA) or global baby food processors demanding pesticide-free IQF dicing, we adapt to deliver complete compliance.
            </p>
          </div>
          
          <div style={{ backgroundColor: "#EAE2CE", padding: "1.5rem", borderRadius: "0.25rem", border: "1px solid rgba(36, 31, 24, 0.1)", height: "fit-content", textAlign: "center", fontFamily: "monospace" }}>
            <div style={{ color: "#E1672B", fontSize: "2.25rem", fontWeight: "bold" }}>15+</div>
            <div style={{ fontSize: "0.75rem", textTransform: "uppercase", letterSpacing: "0.05em", fontWeight: "bold", color: "#16302A", marginTop: "0.5rem" }}>
              Export Destinations
            </div>
            <p style={{ fontSize: "10px", color: "rgba(36, 31, 24, 0.7)", marginTop: "0.5rem" }}>
              Connecting Nairobi Cargo direct with East Africa, East Asia, Middle East, and Europe.
            </p>
          </div>
        </div>

        {/* Customer Segments Table */}
        <h2 style={{ fontFamily: "serif", fontSize: "1.5rem", fontWeight: "bold", color: "#16302A", marginBottom: "1.5rem" }}>
          Markets We Serve & Specifications
        </h2>
        <div style={{ display: "flex", flexDirection: "column", gap: "1rem", marginBottom: "3rem" }}>
          {segments.map((seg) => (
            <div key={seg.name} style={{ backgroundColor: "white", padding: "1.25rem", borderRadius: "0.25rem", border: "1px solid rgba(36, 31, 24, 0.1)", fontFamily: "monospace", fontSize: "0.75rem", boxShadow: "0 1px 2px 0 rgba(0, 0, 0, 0.05)" }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", borderBottom: "1px solid rgba(36, 31, 24, 0.1)", paddingBottom: "0.5rem", marginBottom: "0.75rem" }}>
                <span style={{ fontFamily: "serif", fontWeight: "bold", fontSize: "0.875rem", color: "#16302A" }}>{seg.name}</span>
                <span style={{ backgroundColor: "#16302A", color: "#F3EEE1", padding: "0.125rem 0.5rem", borderRadius: "0.25rem", fontSize: "10px" }}>
                  Volume: {seg.marketShare}
                </span>
              </div>
              <p style={{ color: "rgba(36, 31, 24, 0.8)", lineHeight: "1.625" }}>
                <span style={{ color: "#E1672B", fontWeight: "bold" }}>Strict Compliance Protocols:</span> {seg.requirements}
              </p>
            </div>
          ))}
        </div>

        {/* Bottom CTA Section */}
        <div style={{ backgroundColor: "#16302A", color: "#F3EEE1", padding: "2rem", borderRadius: "0.25rem", textAlign: "center" }}>
          <h3 style={{ fontFamily: "serif", fontWeight: "bold", fontSize: "1.25rem", color: "#C99A3D", marginBottom: "0.5rem" }}>
            Establish a Direct Import Contract
          </h3>
          <p style={{ fontSize: "0.75rem", fontFamily: "monospace", color: "rgba(243, 238, 225, 0.7)", marginBottom: "1rem", maxWidth: "36rem", marginLeft: "auto", marginRight: "auto" }}>
            We establish custom farming schedules, proprietary carton branding, and secured cold hold allocations for long-term partners. Contact our international export desk for seasonal availability.
          </p>
          <button 
            onClick={() => window.location.href="/contact-us"}
            style={{ 
              backgroundColor: "#E1672B", 
              color: "white", 
              padding: "0.625rem 1.5rem", 
              borderRadius: "0.25rem", 
              fontFamily: "monospace", 
              fontSize: "0.75rem", 
              fontWeight: "bold", 
              border: "none", 
              cursor: "pointer",
              transition: "background-color 0.2s" 
            }}
          >
            Inquire For Secure Contract Allocation
          </button>
        </div>

      </div>
    </div>
  );
}
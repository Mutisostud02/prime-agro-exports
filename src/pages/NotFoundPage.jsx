import React from "react";
import { Link } from "react-router-dom";
import SEO from "../components/SEO";

export default function NotFoundPage() {
  return (
    <div style={{ backgroundColor: "#F3EEE1", color: "#241F18", minHeight: "70vh", padding: "6rem 1rem", display: "flex", alignItems: "center", justifyContent: "center" }}>
      <SEO
        title="Page Not Found | Prime Agro Exports Limited"
        description="The page you're looking for doesn't exist or may have moved."
        path="/404"
        noindex
      />
      <div style={{ maxWidth: "32rem", textAlign: "center" }}>
        <span style={{ fontFamily: "'Jost', sans-serif", fontSize: "0.75rem", textTransform: "uppercase", color: "#2563EB", letterSpacing: "0.1em", fontWeight: "bold" }}>
          Error 404
        </span>
        <h1 style={{ fontFamily: "'Jost', sans-serif", fontSize: "2.5rem", fontWeight: "bold", color: "#16302A", marginTop: "0.5rem", lineHeight: "1.1" }}>
          Page Not Found
        </h1>
        <p style={{ color: "rgba(36, 31, 24, 0.7)", fontFamily: "'Jost', sans-serif", marginTop: "1rem", marginBottom: "2rem" }}>
          The page you're looking for doesn't exist or may have moved. Try one of the links below.
        </p>
        <div style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}>
          <Link to="/" style={{ backgroundColor: "#16302A", color: "#F3EEE1", padding: "0.75rem 1.5rem", borderRadius: "0.25rem", textDecoration: "none", fontFamily: "'Jost', sans-serif", fontWeight: "bold", fontSize: "0.875rem" }}>
            Back to Home
          </Link>
          <Link to="/our-products" style={{ border: "1px solid #16302A", color: "#16302A", padding: "0.75rem 1.5rem", borderRadius: "0.25rem", textDecoration: "none", fontFamily: "'Jost', sans-serif", fontWeight: "bold", fontSize: "0.875rem" }}>
            View Our Products
          </Link>
        </div>
      </div>
    </div>
  );
}

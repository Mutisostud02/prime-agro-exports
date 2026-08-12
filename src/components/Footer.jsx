import React from "react";
import { Link } from "react-router-dom";
import { COMPANY } from "../data/companyData";

const COMPANY_LINKS = [
  { label: "Who We Are", to: "/about-us/who-we-are" },
  { label: "Compliance & Accreditation", to: "/about-us/compliance-accreditation" },
  { label: "Freight & Logistics", to: "/about-us/freight-logistics" },
  { label: "Customers", to: "/about-us/customers" },
  { label: "Our Team & Careers", to: "/about-us/our-team-careers" },
  { label: "CSI / CSR", to: "/sustainability/corporate-social-initiative-responsibilities" },
  { label: "Contact Us", to: "/contact-us" },
];

const PRODUCTS_LINKS = [
  { label: "Our Farms & Packhouses", to: "/growing-base/our-farms-packhouses" },
  { label: "Out Grower Farming", to: "/growing-base/out-grower-farming" },
  { label: "Farming Practice", to: "/sustainability/farming-practice" },
  { label: "Flowers", to: "/our-products/flowers" },
  { label: "Fruits", to: "/our-products/fruits" },
  { label: "Vegetables", to: "/our-products/vegetables" },
  { label: "Frozen – IQF", to: "/our-products/frozen-iqf" },
];

export default function Footer() {
  return (
    <footer
      style={{
        backgroundColor: "#16302A",
        color: "#F3EEE1",
        borderTop: "1px solid rgba(243, 238, 225, 0.1)",
        paddingTop: "4rem",
        paddingBottom: "3rem",
      }}
    >
      <div
        style={{
          maxWidth: "95rem",
          marginLeft: "auto",
          marginRight: "auto",
          paddingLeft: "1rem",
          paddingRight: "1rem",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
          gap: "3rem",
          borderBottom: "1px solid rgba(243, 238, 225, 0.1)",
          paddingBottom: "3rem",
        }}
      >
        {/* A Bit About Us */}
        <div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "0.5rem",
              marginBottom: "1rem",
            }}
          >
            <img
              src="/logo.png"
              alt="Prime Agro Exports Logo"
              style={{
                width: "2rem",
                height: "2rem",
                objectFit: "contain",
              }}
            />
            <span
              style={{
                fontFamily: "serif",
                fontWeight: "bold",
                fontSize: "1.125rem",
                letterSpacing: "-0.025em",
              }}
            >
              PRIME AGRO EXPORTS
            </span>
          </div>
          <h4
            style={{
              fontWeight: "bold",
              color: "#E1672B",
              textTransform: "uppercase",
              marginBottom: "0.75rem",
              letterSpacing: "0.05em",
              fontFamily: "monospace",
              fontSize: "0.75rem",
            }}
          >
            A Bit About Us
          </h4>
          <p
            style={{
              fontSize: "0.75rem",
              color: "rgba(243, 238, 225, 0.7)",
              fontFamily: "monospace",
              marginBottom: "1rem",
              lineHeight: "1.625",
            }}
          >
            {COMPANY.tagline} Connecting Kenya&apos;s volcanic highlands with
            global markets daily.
          </p>
          <Link
            to="/about-us/who-we-are"
            style={{
              color: "#C99A3D",
              textDecoration: "none",
              fontFamily: "monospace",
              fontSize: "0.75rem",
              fontWeight: "bold",
              textTransform: "uppercase",
              letterSpacing: "0.05em",
            }}
          >
            Learn More →
          </Link>
        </div>

        {/* The Company */}
        <div style={{ fontSize: "0.75rem", fontFamily: "monospace" }}>
          <h4
            style={{
              fontWeight: "bold",
              color: "#E1672B",
              textTransform: "uppercase",
              marginBottom: "1rem",
              letterSpacing: "0.05em",
            }}
          >
            The Company
          </h4>
          <ul
            style={{
              listStyle: "none",
              padding: 0,
              margin: 0,
              display: "flex",
              flexDirection: "column",
              gap: "0.5rem",
            }}
          >
            {COMPANY_LINKS.map((link) => (
              <li key={link.label}>
                <Link
                  to={link.to}
                  style={{ color: "inherit", textDecoration: "none" }}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Our Products */}
        <div style={{ fontSize: "0.75rem", fontFamily: "monospace" }}>
          <h4
            style={{
              fontWeight: "bold",
              color: "#E1672B",
              textTransform: "uppercase",
              marginBottom: "1rem",
              letterSpacing: "0.05em",
            }}
          >
            Our Products
          </h4>
          <ul
            style={{
              listStyle: "none",
              padding: 0,
              margin: 0,
              display: "flex",
              flexDirection: "column",
              gap: "0.5rem",
            }}
          >
            {PRODUCTS_LINKS.map((link) => (
              <li key={link.label}>
                <Link
                  to={link.to}
                  style={{ color: "inherit", textDecoration: "none" }}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Head Office */}
        <div style={{ fontSize: "0.75rem", fontFamily: "monospace" }}>
          <h4
            style={{
              fontWeight: "bold",
              color: "#E1672B",
              textTransform: "uppercase",
              marginBottom: "1rem",
              letterSpacing: "0.05em",
            }}
          >
            Head Office
          </h4>
          <div
            style={{
              color: "rgba(243, 238, 225, 0.7)",
              lineHeight: "1.8",
              marginBottom: "1rem",
            }}
          >
            <div>{COMPANY.address.line1}</div>
            <div>{COMPANY.address.line2}</div>
            <div>{COMPANY.address.poBox}</div>
            <div>{COMPANY.address.city}</div>
          </div>
          <div
            style={{
              color: "#C99A3D",
              display: "flex",
              flexDirection: "column",
              gap: "0.35rem",
            }}
          >
            <div>📞 {COMPANY.phoneDisplay}</div>
            <div>✉️ {COMPANY.email}</div>
          </div>
        </div>
      </div>

      <div
        style={{
          maxWidth: "80rem",
          marginLeft: "auto",
          marginRight: "auto",
          paddingLeft: "1rem",
          paddingRight: "1rem",
          marginTop: "3rem",
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-between",
          alignItems: "center",
          fontSize: "10px",
          fontFamily: "monospace",
          color: "rgba(243, 238, 225, 0.5)",
          gap: "1rem",
        }}
      >
        <div>
          © 2020 {COMPANY.name}. All Rights Reserved.
        </div>
        <div style={{ display: "flex", gap: "1rem" }}>
          <span>
            {COMPANY.address.line1}, {COMPANY.address.city}
          </span>
          <span>•</span>
          <Link
            to="/contact-us"
            style={{ color: "inherit", textDecoration: "none" }}
          >
            Inquire Export Pack
          </Link>
        </div>
      </div>
    </footer>
  );
}
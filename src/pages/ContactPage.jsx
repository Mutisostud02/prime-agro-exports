import React, { useState } from "react";
import { COMPANY } from "../data/companyData";
import SEO, { SITE_URL } from "../components/SEO";

// Web3Forms delivers submissions to whatever email address was used to
// generate the access key at https://web3forms.com — it is NOT set here.
// Create a free account with info@primeagroexportsltd.com, grab the access
// key from the dashboard, and set it as VITE_WEB3FORMS_ACCESS_KEY in your
// .env file (see .env.example). Without a real key, submissions will fail.
const WEB3FORMS_ACCESS_KEY = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY || "";
const WEB3FORMS_ENDPOINT = "https://api.web3forms.com/submit";

const initialFormData = { name: "", email: "", category: "Export Wholesale Quote", message: "" };

export default function ContactPage() {
  const [formData, setFormData] = useState(initialFormData);
  // status: "idle" | "submitting" | "success" | "error"
  const [status, setStatus] = useState("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const validate = () => {
    if (!formData.name.trim()) return "Please enter your company or buyer name.";
    if (!formData.email.trim()) return "Please enter your business email.";
    // Simple, permissive email shape check — the browser's type="email" already
    // catches most issues, this is a second guard since we submit via fetch.
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(formData.email.trim())) return "Please enter a valid email address.";
    if (!formData.message.trim()) return "Please add a message describing your inquiry.";
    if (formData.message.trim().length < 10) return "Please provide a bit more detail in your message.";
    return null;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const validationError = validate();
    if (validationError) {
      setStatus("error");
      setErrorMessage(validationError);
      return;
    }

    if (!WEB3FORMS_ACCESS_KEY) {
      setStatus("error");
      setErrorMessage(
        "This form isn't fully configured yet (missing Web3Forms access key). Please email us directly instead."
      );
      return;
    }

    setStatus("submitting");
    setErrorMessage("");

    try {
      const response = await fetch(WEB3FORMS_ENDPOINT, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: WEB3FORMS_ACCESS_KEY,
          subject: `New ${formData.category} inquiry — ${formData.name}`,
          from_name: formData.name,
          name: formData.name,
          email: formData.email,
          category: formData.category,
          message: formData.message,
          // Honeypot field — Web3Forms silently discards submissions where
          // this is filled in, since real users never see or fill it.
          botcheck: formData.botcheck || "",
        }),
      });

      const result = await response.json();

      if (response.ok && result.success) {
        setStatus("success");
        setFormData(initialFormData);
      } else {
        setStatus("error");
        setErrorMessage(result.message || "Something went wrong sending your message. Please try again.");
      }
    } catch (err) {
      setStatus("error");
      setErrorMessage("Network error — please check your connection and try again.");
    }
  };

  const contactJsonLd = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    name: "Contact Prime Agro Exports Limited",
    url: `${SITE_URL}/contact-us`,
    about: {
      "@type": "Organization",
      name: COMPANY.name,
      telephone: COMPANY.phone,
      email: COMPANY.email,
      address: {
        "@type": "PostalAddress",
        streetAddress: `${COMPANY.address.line1}, ${COMPANY.address.line2}`,
        addressLocality: "Nairobi",
        addressCountry: "KE",
      },
    },
  };

  return (
    <>
      <SEO
        title="Contact Us | Prime Agro Exports Limited"
        description="Get in touch with Prime Agro Exports Limited at JKIA Cargo Village, Nairobi. Call, email or send an enquiry about Kenyan flower, fruit and vegetable exports."
        path="/contact-us"
        jsonLd={contactJsonLd}
      />
    <div style={{ backgroundColor: "#F3EEE1", color: "#241F18", minHeight: "100vh", padding: "4rem 1rem" }}>
      <div style={{ maxWidth: "56rem", marginLeft: "auto", marginRight: "auto" }}>
        
        {/* Header Section */}
        <div style={{ borderBottom: "1px solid rgba(36, 31, 24, 0.15)", paddingBottom: "2rem", marginBottom: "3rem" }}>
          <span style={{ fontFamily: "'Jost', sans-serif", fontSize: "0.75rem", textTransform: "uppercase", color: "#2563EB", letterSpacing: "0.1em", fontWeight: "bold" }}>
            Secure Global Comms Portal
          </span>
          <h1 style={{ fontFamily: "'Jost', sans-serif", fontSize: "2.5rem", fontWeight: "bold", color: "#16302A", marginTop: "0.5rem", lineHeight: "1" }}>
            Contact Us
          </h1>
          <p style={{ color: "rgba(36, 31, 24, 0.7)", fontSize: "0.875rem", fontFamily: "'Jost', sans-serif", marginTop: "1rem" }}>
            DIRECT CHANNELS TO OUR NAIROBI EXPORT DESK & REGIONAL FARMS
          </p>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "2rem", alignItems: "start", marginBottom: "3rem" }}>
          
          {/* Form Panel */}
          <div style={{ backgroundColor: "white", padding: "1.5rem", borderRadius: "0.25rem", border: "1px solid rgba(36, 31, 24, 0.1)", boxShadow: "0 1px 2px 0 rgba(0, 0, 0, 0.05)", fontFamily: "'Jost', sans-serif", fontSize: "0.75rem" }}>
            <h2 style={{ fontFamily: "'Jost', sans-serif", fontSize: "1.25rem", fontWeight: "bold", color: "#16302A", marginBottom: "1rem" }}>
              Submit securing wholesale inquiry
            </h2>
            
            {status === "success" ? (
              <div style={{ textAlign: "center", padding: "3rem 0", display: "flex", flexDirection: "column", gap: "1rem" }}>
                <span style={{ fontSize: "2.25rem", display: "block" }}>📬</span>
                <h3 style={{ fontFamily: "'Jost', sans-serif", fontWeight: "bold", fontSize: "1rem", color: "#16302A" }}>Inquiry Sent</h3>
                <p style={{ color: "rgba(36, 31, 24, 0.8)", lineHeight: "1.625" }}>
                  Thank you! Your inquiry has been sent to our Nairobi export desk. An agent will follow up via email within 12 hours.
                </p>
                <button 
                  onClick={() => { setStatus("idle"); setFormData(initialFormData); }}
                  style={{ backgroundColor: "#16302A", color: "white", padding: "0.5rem 1rem", borderRadius: "0.25rem", fontWeight: "bold", border: "none", cursor: "pointer" }}
                >
                  New Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
                {/* Honeypot field — hidden from real users via CSS, bots that auto-fill every
                    field will trip it, causing Web3Forms to silently drop the submission. */}
                <input
                  type="text"
                  name="botcheck"
                  value={formData.botcheck || ""}
                  onChange={(e) => setFormData({ ...formData, botcheck: e.target.value })}
                  tabIndex={-1}
                  autoComplete="off"
                  aria-hidden="true"
                  style={{ position: "absolute", left: "-9999px", width: "1px", height: "1px", opacity: 0 }}
                />

                {status === "error" && errorMessage && (
                  <div role="alert" style={{ backgroundColor: "rgba(220, 38, 38, 0.08)", border: "1px solid rgba(220, 38, 38, 0.3)", color: "#B91C1C", padding: "0.625rem 0.75rem", borderRadius: "0.25rem", fontSize: "0.75rem", lineHeight: "1.4" }}>
                    {errorMessage}
                  </div>
                )}

                <div>
                  <label style={{ display: "block", fontSize: "0.8rem", color: "#2563EB", fontWeight: "bold", textTransform: "uppercase", marginBottom: "0.25rem" }}>Company / Buyer Name</label>
                  <input 
                    required 
                    type="text" 
                    name="name"
                    autoComplete="name"
                    value={formData.name} 
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    style={{ width: "100%", backgroundColor: "rgba(234, 226, 206, 0.4)", border: "1px solid rgba(36, 31, 24, 0.15)", padding: "0.625rem", borderRadius: "0.25rem", fontSize: "0.75rem", outline: "none" }} 
                  />
                </div>
                <div>
                  <label style={{ display: "block", fontSize: "0.8rem", color: "#2563EB", fontWeight: "bold", textTransform: "uppercase", marginBottom: "0.25rem" }}>Business Email</label>
                  <input 
                    required 
                    type="email" 
                    name="email"
                    autoComplete="email"
                    value={formData.email} 
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    style={{ width: "100%", backgroundColor: "rgba(234, 226, 206, 0.4)", border: "1px solid rgba(36, 31, 24, 0.15)", padding: "0.625rem", borderRadius: "0.25rem", fontSize: "0.75rem", outline: "none" }} 
                  />
                </div>
                <div>
                  <label style={{ display: "block", fontSize: "0.8rem", color: "#2563EB", fontWeight: "bold", textTransform: "uppercase", marginBottom: "0.25rem" }}>Inquiry Category</label>
                  <select 
                    name="category"
                    value={formData.category} 
                    onChange={(e) => setFormData({...formData, category: e.target.value})}
                    style={{ width: "100%", backgroundColor: "rgba(234, 226, 206, 0.4)", border: "1px solid rgba(36, 31, 24, 0.15)", padding: "0.625rem", borderRadius: "0.25rem", fontSize: "0.75rem", outline: "none" }}
                  >
                    <option>Export Wholesale Quote</option>
                    <option>Out-Grower Partnership Inquiry</option>
                    <option>Career / Professional Application</option>
                    <option>General Corporate Question</option>
                  </select>
                </div>
                <div>
                  <label style={{ display: "block", fontSize: "0.8rem", color: "#2563EB", fontWeight: "bold", textTransform: "uppercase", marginBottom: "0.25rem" }}>Message Detail</label>
                  <textarea 
                    required 
                    name="message"
                    placeholder="Specify stem counts, varieties, required shipment arrival airports, or seasonal volume expectations..."
                    value={formData.message} 
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    style={{ width: "100%", backgroundColor: "rgba(234, 226, 206, 0.4)", border: "1px solid rgba(36, 31, 24, 0.15)", padding: "0.625rem", borderRadius: "0.25rem", fontSize: "0.75rem", height: "7rem", outline: "none", resize: "vertical" }} 
                  />
                </div>
                <button 
                  type="submit" 
                  disabled={status === "submitting"}
                  style={{ width: "100%", backgroundColor: status === "submitting" ? "rgba(37, 99, 235, 0.6)" : "#2563EB", color: "white", padding: "0.75rem", borderRadius: "0.25rem", fontWeight: "bold", textTransform: "uppercase", letterSpacing: "0.05em", fontSize: "0.75rem", border: "none", cursor: status === "submitting" ? "not-allowed" : "pointer" }}
                >
                  {status === "submitting" ? "Sending…" : "Submit Direct Inquiry"}
                </button>
              </form>
            )}
          </div>

          {/* Location Panel */}
          <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem", fontSize: "0.875rem" }}>
            <div style={{ backgroundColor: "rgba(234, 226, 206, 0.6)", padding: "1.5rem", borderRadius: "0.25rem", border: "1px solid rgba(36, 31, 24, 0.15)", fontFamily: "'Jost', sans-serif", fontSize: "0.75rem", display: "flex", flexDirection: "column", gap: "0.75rem" }}>
              <h3 style={{ fontFamily: "'Jost', sans-serif", fontWeight: "bold", fontSize: "1rem", color: "#16302A" }}>Headquarters Office</h3>
              <p style={{ color: "rgba(36, 31, 24, 0.8)", lineHeight: "1.625", fontSize: "0.9rem"}}>
                📍 {COMPANY.address.full}
              </p>
              <div style={{ fontSize: "0.8rem", color: "#2563EB", fontWeight: "bold", display: "flex", flexDirection: "column", gap: "0.25rem" }}>
                <div>📞 {COMPANY.phoneDisplay}</div>
                <div>📱 {COMPANY.mobileDisplay}</div>
                <div>✉️ Email: {COMPANY.email}</div>
              </div>
            </div>

            <div style={{ backgroundColor: "rgba(234, 226, 206, 0.6)", padding: "1.5rem", borderRadius: "0.25rem", border: "1px solid rgba(36, 31, 24, 0.15)", fontFamily: "'Jost', sans-serif", fontSize: "0.75rem", display: "flex", flexDirection: "column", gap: "0.75rem" }}>
              <h3 style={{ fontFamily: "'Jost', sans-serif", fontWeight: "bold", fontSize: "1.2rem", color: "#16302A" }}>Regional Operations Centers</h3>
              <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem", fontSize: "1rem", color: "rgba(36, 31, 24, 0.8)" }}>
                <div>🌳 <strong style={{ color: "#16302A" }}>Naivasha Farm Office:</strong> Lake Naivasha Highland Depot (140 km from Nairobi)</div>
                <div>🏭 <strong style={{ color: "#16302A" }}>Thika Processing Plant:</strong> Thika Industrial Highway Complex</div>
                <div>✈️ <strong style={{ color: "#16302A" }}>{COMPANY.logisticsDivision}:</strong> JKIA Cargo Build-up Hub, Warehouse 3</div>
                <div>🌸 <strong style={{ color: "#16302A" }}>Naivasha Flower Fields:</strong> Lake Naivasha Highland Basin, 50-acre satellite flower site</div>
                <div>🥑 <strong style={{ color: "#16302A" }}>Muranga Avocado Estate:</strong> Murang'a County, Central Kenya (85 km from Nairobi)</div>
                <div>🧅 <strong style={{ color: "#16302A" }}>Narok Valley Farm:</strong> Narok County, Great Rift Valley — onions & tomatoes (230 km from Nairobi)</div>
                <div>🥦 <strong style={{ color: "#16302A" }}>Western Vegetable Gardens:</strong> Western Region, Kenya (350 km from Nairobi)</div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
    </>
  );
}
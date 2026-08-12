import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { CERTIFICATIONS_LIST } from "../data/productsData";
import { COMPANY } from "../data/companyData";

const HERO_SLIDES = [
  {
    eyebrow: "JKIA CARGO VILLAGE · NAIROBI, KENYA",
    heading: "A grower first,",
    highlight: "An exporter by trade.",
    text: "Every stem, pod, and fruit that leaves our packhouse has been raised, graded, and cooled by people who know exactly where it came from — our own equatorial highland farms and out-grower network.",
    image:
      "https://images.unsplash.com/photo-1734036871909-906fb9b3d474?fm=jpg&q=80&w=2400&auto=format&fit=crop",
    ctaLabel: "See What We Ship",
    ctaTo: "/our-products",
  },
  {
    eyebrow: "PRIME SELECT & PRIME ELITE LINES",
    heading: "Discover the beauty",
    highlight: "of our flowers.",
    text: "Grown at altitude in Naivasha, Ol Kalou, and Rumuruti, our roses and summer flowers are harvested and cold-chained for exceptional vase life around the world.",
    image:
      "https://images.unsplash.com/photo-1526047932273-341f2a7631f9?fm=jpg&q=80&w=2400&auto=format&fit=crop",
    ctaLabel: "View Our Flowers",
    ctaTo: "/our-products/flowers",
  },
  {
    eyebrow: "FRESH & FROZEN — FIELD TO FLIGHT",
    heading: "Fresh and nutritious,",
    highlight: "bringing you abundant living.",
    text: "From Hass avocados in Muranga to onions and tomatoes in Narok, our fruit and vegetable lines are hand-graded and quick-frozen to lock in quality.",
    image:
      "https://images.unsplash.com/photo-1523049673857-eb18f1d7b578?fm=jpg&q=80&w=2400&auto=format&fit=crop",
    ctaLabel: "View Our Fruits",
    ctaTo: "/our-products/fruits",
  },
  {
    eyebrow: "PRIME AGRO LOGISTICS",
    heading: "Specializing in",
    highlight: "logistical solutions.",
    text: "Our in-house freight division moves produce from farm cold rooms to airline cargo holds at JKIA — shipping to destinations across East Africa, East Asia, the Middle East, and Europe.",
    image:
      "https://images.unsplash.com/photo-1540420773420-3366772f4999?fm=jpg&q=80&w=2400&auto=format&fit=crop",
    ctaLabel: "Find Out More",
    ctaTo: "/about-us/freight-logistics",
  },
];

const QUICK_LINKS = [
  { label: "Our Farms", to: "/growing-base/our-farms-packhouses", icon: "🌱", src: "https://images.unsplash.com/photo-1626906722163-bd4c03cb3b9b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8YmVhbiUyMGZhcm1pbmd8ZW58MHx8MHx8fDA%3D" },
  { label: "Our Products", to: "/our-products", icon: "📦", src: "https://images.unsplash.com/photo-1490750967868-88aa4486c946?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Zmxvd2Vyc3xlbnwwfHwwfHx8MA%3D%3D" },
  { label: "Social Responsibility", to: "/sustainability/corporate-social-initiative-responsibilities", icon: "🤝", src: "https://images.unsplash.com/photo-1509099342178-e323b1717dba?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGFmcmljYW4lMjBjb21tdW5pdHl8ZW58MHx8MHx8fDA%3D" },
  { label: "Freight & Logistics", to: "/about-us/freight-logistics", icon: "✈️", src: "https://images.unsplash.com/photo-1494412651409-8963ce7935a7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGxvZ2lzdGljc3xlbnwwfHwwfHx8MA%3D%3D" },
];

export default function HomePage() {
  const [activeSlide, setActiveSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % HERO_SLIDES.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  const slide = HERO_SLIDES[activeSlide];

  return (
    <div
      style={{
        backgroundColor: "#F3EEE1",
        color: "#241F18",
        fontFamily: "sans-serif",
      }}
    >
      {/* Hero Section — rotating slider */}
      <section
        style={{
          position: "relative",
          minHeight: "85vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
          paddingLeft: "1rem",
          paddingRight: "1rem",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(to bottom, rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.6))",
            zIndex: 10,
          }}
        />
        <img
          src={slide.image}
          alt={slide.heading}
          style={{
            position: "absolute",
            inset: 0,
            width: "100%",
            height: "100%",
            objectFit: "cover",
            transition: "opacity 0.6s ease-in-out",
          }}
        />

        <div
          style={{
            position: "relative",
            zIndex: 20,
            maxWidth: "56rem",
            marginLeft: "auto",
            marginRight: "auto",
            color: "#F3EEE1",
            display: "flex",
            flexDirection: "column",
            gap: "1.5rem",
          }}
        >
          <span
            style={{
              fontFamily: "monospace",
              fontSize: "0.75rem",
              lineHeight: "1rem",
              textTransform: "uppercase",
              color: "#C99A3D",
              letterSpacing: "0.2em",
              fontWeight: "bold",
              display: "block",
            }}
          >
            {slide.eyebrow}
          </span>
          <h1
            style={{
              fontFamily: "serif",
              fontSize: "clamp(2.25rem, 5vw, 3.75rem)",
              fontWeight: "bold",
              lineHeight: 1,
              letterSpacing: "-0.025em",
            }}
          >
            {slide.heading}
            <br />
            <span style={{ color: "#E1672B" }}>{slide.highlight}</span>
          </h1>
          <p
            style={{
              fontSize: "clamp(0.875rem, 1.5vw, 1rem)",
              fontFamily: "monospace",
              color: "rgba(243, 238, 225, 0.8)",
              maxWidth: "42rem",
              marginLeft: "auto",
              marginRight: "auto",
              lineHeight: "1.625",
            }}
          >
            {slide.text}
          </p>
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "1rem",
              justifyContent: "center",
              paddingTop: "1rem",
            }}
          >
            <Link
              to={slide.ctaTo}
              style={{
                backgroundColor: "#E1672B",
                color: "#F3EEE1",
                fontFamily: "monospace",
                fontSize: "0.75rem",
                textTransform: "uppercase",
                letterSpacing: "0.05em",
                fontWeight: "bold",
                paddingLeft: "1.5rem",
                paddingRight: "1.5rem",
                paddingTop: "0.75rem",
                paddingBottom: "0.75rem",
                borderRadius: "0.25rem",
                textDecoration: "none",
                display: "inline-block",
              }}
            >
              {slide.ctaLabel}
            </Link>
            <Link
              to="/about-us/who-we-are"
              style={{
                border: "1px solid #F3EEE1",
                color: "#F3EEE1",
                fontFamily: "monospace",
                fontSize: "0.75rem",
                textTransform: "uppercase",
                letterSpacing: "0.05em",
                fontWeight: "bold",
                paddingLeft: "1.5rem",
                paddingRight: "1.5rem",
                paddingTop: "0.75rem",
                paddingBottom: "0.75rem",
                borderRadius: "0.25rem",
                textDecoration: "none",
                display: "inline-block",
              }}
            >
              Who We Are
            </Link>
          </div>

          {/* Slide indicators */}
          <div
            style={{
              display: "flex",
              gap: "0.5rem",
              justifyContent: "center",
              paddingTop: "0.5rem",
            }}
          >
            {HERO_SLIDES.map((s, i) => (
              <button
                key={s.heading}
                onClick={() => setActiveSlide(i)}
                aria-label={`Show slide ${i + 1}`}
                style={{
                  width: i === activeSlide ? "1.5rem" : "0.5rem",
                  height: "0.375rem",
                  borderRadius: "9999px",
                  border: "none",
                  cursor: "pointer",
                  backgroundColor:
                    i === activeSlide ? "#E1672B" : "rgba(243, 238, 225, 0.4)",
                  transition: "all 0.3s ease",
                }}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Welcome Section — intro + quick links (mirrors industry layout) */}
      <section
        style={{
          paddingTop: "5rem",
          paddingBottom: "5rem",
          paddingLeft: "1rem",
          paddingRight: "1rem",
        }}
      >
        <div
          style={{
            maxWidth: "72rem",
            marginLeft: "auto",
            marginRight: "auto",
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: "3rem",
            alignItems: "center",
          }}
        >
          <div>
            <img
              src="https://images.unsplash.com/photo-1500382017468-9049fed747ef?fm=jpg&q=80&w=1200&auto=format&fit=crop"
              alt="Prime Agro Exports highland farms"
              style={{
                width: "100%",
                height: "22rem",
                objectFit: "cover",
                borderRadius: "0.25rem",
                boxShadow:
                  "0 4px 6px -1px rgba(0,0,0,0.1), 0 2px 4px -1px rgba(0,0,0,0.06)",
                border: "1px solid rgba(36, 31, 24, 0.1)",
              }}
            />
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
            <span
              style={{
                fontFamily: "monospace",
                fontSize: "0.75rem",
                textTransform: "uppercase",
                color: "#E1672B",
                letterSpacing: "0.05em",
                fontWeight: "bold",
              }}
            >
              Welcome to Prime Agro Exports
            </span>
            <h2
              style={{
                fontFamily: "serif",
                fontSize: "clamp(1.875rem, 4vw, 2.25rem)",
                fontWeight: "bold",
                color: "black",
                lineHeight: "1.25",
              }}
            >
              Kenyan-grown, globally shipped.
            </h2>
            <p
              style={{
                fontSize: "clamp(0.875rem, 1.5vw, 1rem)",
                color: "rgba(36, 31, 24, 0.8)",
                lineHeight: "1.625",
              }}
            >
              Prime Agro Exports Limited is a grower, processor, and exporter
              of fresh flowers, fruits, and vegetables — raised across seven
              proprietary farms in Naivasha, Thika, Rumuruti, Ol Kalou,
              Muranga, Narok, and Western Kenya, and through a trusted
              out-grower network. Everything is hand-graded in our
              BRCGS-certified packhouses and, for select lines, individually
              quick-frozen to lock in quality. We also run our own in-house
              logistics division, moving produce from farm to airline cargo
              hold.
            </p>
            <Link
              to="/about-us/who-we-are"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "0.375rem",
                color: "#E1672B",
                fontFamily: "monospace",
                fontSize: "0.75rem",
                textTransform: "uppercase",
                letterSpacing: "0.05em",
                fontWeight: "bold",
                textDecoration: "none",
                width: "fit-content",
              }}
            >
              Learn More →
            </Link>
          </div>
        </div>
      </section>

      {/* Quick Links Band */}
      <section
        style={{
          backgroundColor: "rgba(234, 226, 206, 0.6)",
          borderTop: "1px solid rgba(36, 31, 24, 0.1)",
          borderBottom: "1px solid rgba(36, 31, 24, 0.1)",
          paddingTop: "2.5rem",
          paddingBottom: "2.5rem",
          paddingLeft: "1rem",
          paddingRight: "1rem",
        }}
      >
        <div
          style={{
            maxWidth: "72rem",
            marginLeft: "auto",
            marginRight: "auto",
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
            gap: "1rem",
          }}
        >
          {QUICK_LINKS.map((link) => (
            <Link
              key={link.label}
              to={link.to}
              style={{
                backgroundColor: "#ffffff",
                border: "1px solid rgba(36, 31, 24, 0.1)",
                borderRadius: "0.25rem",
                padding: "1.25rem 1rem",
                textDecoration: "none",
                color: "#16302A",
                fontFamily: "monospace",
                fontSize: "0.75rem",
                fontWeight: "bold",
                textTransform: "uppercase",
                letterSpacing: "0.03em",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                textAlign: "center",
                gap: "0.5rem",
                boxShadow: "0 1px 2px 0 rgba(0, 0, 0, 0.05)",
              }}
            ><img src={link.src}/>
              <span style={{ fontSize: "1.5rem" }}>{link.icon}</span>
              {link.label}
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
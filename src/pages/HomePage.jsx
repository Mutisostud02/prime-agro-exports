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
      "/images/hero-slide-agriculture.jpg",
    ctaLabel: "See What We Ship",
    ctaTo: "/our-products",
  },
  {
    eyebrow: "PRIME SELECT & PRIME ELITE LINES",
    heading: "Discover the beauty",
    highlight: "of our flowers.",
    text: "Grown at altitude in Naivasha, Ol Kalou, and Rumuruti, our roses and summer flowers are harvested and cold-chained for exceptional vase life around the world.",
    image:
      "/images/summer-flowers-hypericum-hero.jpg",
    ctaLabel: "View Our Flowers",
    ctaTo: "/our-products/flowers",
  },
  {
    eyebrow: "FRESH & FROZEN — FIELD TO FLIGHT",
    heading: "Fresh and nutritious,",
    highlight: "bringing you abundant living.",
    text: "From Hass avocados in Muranga to onions and tomatoes in Narok, our fruit and vegetable lines are hand-graded and quick-frozen to lock in quality.",
    image:
      "/images/avocado-hass-hero.jpg",
    ctaLabel: "View Our Fruits",
    ctaTo: "/our-products/fruits",
  },
  {
    eyebrow: "PRIME AGRO LOGISTICS",
    heading: "Specializing in",
    highlight: "logistical solutions.",
    text: "Our in-house freight division moves produce from farm cold rooms to airline cargo holds at JKIA — shipping to destinations across East Africa, East Asia, the Middle East, and Europe.",
    image:
      "/images/baby-vegetables-tenderstem-hero.jpg",
    ctaLabel: "Find Out More",
    ctaTo: "/about-us/freight-logistics",
  },
];

const QUICK_LINKS = [
  { label: "Our Farms", to: "/growing-base/our-farms-packhouses", icon: "🌱", src: "/images/quicklink-our-farms.jpg" },
  { label: "Our Products", to: "/our-products", icon: "📦", src: "/images/quicklink-our-products.jpg" },
  { label: "Social Responsibility", to: "/sustainability/corporate-social-initiative-responsibilities", icon: "🤝", src: "/images/quicklink-social-responsibility.jpg" },
  { label: "Freight & Logistics", to: "/about-us/freight-logistics", icon: "✈️", src: "/images/quicklink-freight-logistics.jpg" },
];

export default function HomePage() {
  const [activeSlide, setActiveSlide] = useState(0);
  const [hoveredLink, setHoveredLink] = useState(null);
  const [hoveredCta, setHoveredCta] = useState(null);

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
        fontFamily: "'Jost', sans-serif",
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
              fontFamily: "'Jost', sans-serif",
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
              fontFamily: "'Jost', sans-serif",
              fontSize: "clamp(2.25rem, 5vw, 3.75rem)",
              fontWeight: "bold",
              lineHeight: 1,
              letterSpacing: "-0.025em",
            }}
          >
            {slide.heading}
            <br />
            <span style={{ color: "white" }}>{slide.highlight}</span>
          </h1>
          <p
            style={{
              fontSize: "clamp(0.875rem, 1.5vw, 1rem)",
              fontFamily: "'Jost', sans-serif",
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
              onMouseEnter={() => setHoveredCta("primary")}
              onMouseLeave={() => setHoveredCta(null)}
              onFocus={() => setHoveredCta("primary")}
              onBlur={() => setHoveredCta(null)}
              style={{
                backgroundColor:
                  hoveredCta === "primary" ? "#c2551f" : "#2563EB",
                color: "#F3EEE1",
                fontFamily: "'Jost', sans-serif",
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
                boxShadow:
                  hoveredCta === "primary"
                    ? "0 6px 12px -2px rgba(0, 0, 0, 0.3)"
                    : "none",
                transform:
                  hoveredCta === "primary" ? "translateY(-2px)" : "translateY(0)",
                transition:
                  "background-color 0.2s ease, box-shadow 0.2s ease, transform 0.2s ease",
              }}
            >
              {slide.ctaLabel}
            </Link>
            <Link
              to="/about-us/who-we-are"
              onMouseEnter={() => setHoveredCta("secondary")}
              onMouseLeave={() => setHoveredCta(null)}
              onFocus={() => setHoveredCta("secondary")}
              onBlur={() => setHoveredCta(null)}
              style={{
                border: "1px solid #F3EEE1",
                backgroundColor:
                  hoveredCta === "secondary" ? "#F3EEE1" : "transparent",
                color: hoveredCta === "secondary" ? "#241F18" : "#F3EEE1",
                fontFamily: "'Jost', sans-serif",
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
                transform:
                  hoveredCta === "secondary" ? "translateY(-2px)" : "translateY(0)",
                transition:
                  "background-color 0.2s ease, color 0.2s ease, transform 0.2s ease",
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
                    i === activeSlide ? "#2563EB" : "rgba(243, 238, 225, 0.4)",
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
              src="/images/farm-naivasha-lakeview.jpg"
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
                fontFamily: "'Jost', sans-serif",
                fontSize: "0.75rem",
                textTransform: "uppercase",
                color: "blue",
                letterSpacing: "0.05em",
                fontWeight: "bold",
              }}
            >
              Welcome to Prime Agro Exports
            </span>
            <h2
              style={{
                fontFamily: "'Jost', sans-serif",
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
              logistics division, moving produce from farm cold rooms to
              airline cargo hold.
            </p>
            <Link
              to="/about-us/who-we-are"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "0.375rem",
                color: "blue",
                fontFamily: "'Jost', sans-serif",
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
          {QUICK_LINKS.map((link, index) => {
            const isHovered = hoveredLink === index;
            return (
              <Link
                key={link.label}
                to={link.to}
                onMouseEnter={() => setHoveredLink(index)}
                onMouseLeave={() => setHoveredLink(null)}
                onFocus={() => setHoveredLink(index)}
                onBlur={() => setHoveredLink(null)}
                style={{
                  backgroundColor: isHovered ? "#16302A" : "#ffffff",
                  border: isHovered
                    ? "1px solid #16302A"
                    : "1px solid rgba(36, 31, 24, 0.1)",
                  borderRadius: "0.25rem",
                  padding: "1.25rem 1rem",
                  textDecoration: "none",
                  color: isHovered ? "#F3EEE1" : "#16302A",
                  fontFamily: "'Jost', sans-serif",
                  fontSize: "0.75rem",
                  fontWeight: "bold",
                  textTransform: "uppercase",
                  letterSpacing: "0.03em",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  textAlign: "center",
                  gap: "0.5rem",
                  boxShadow: isHovered
                    ? "0 10px 15px -3px rgba(0, 0, 0, 0.15), 0 4px 6px -2px rgba(0, 0, 0, 0.08)"
                    : "0 1px 2px 0 rgba(0, 0, 0, 0.05)",
                  transform: isHovered ? "translateY(-4px)" : "translateY(0)",
                  transition:
                    "background-color 0.2s ease, color 0.2s ease, box-shadow 0.2s ease, transform 0.2s ease, border-color 0.2s ease",
                  cursor: "pointer",
                }}
              >
                <img
                  src={link.src}
                  alt=""
                  style={{
                    width: "100%",
                    height: "6rem",
                    objectFit: "cover",
                    borderRadius: "0.25rem",
                    opacity: isHovered ? 0.85 : 1,
                    transition: "opacity 0.2s ease",
                  }}
                />
                <span
                  style={{
                    fontSize: "1.5rem",
                    transform: isHovered ? "scale(1.1)" : "scale(1)",
                    transition: "transform 0.2s ease",
                  }}
                >
                  {link.icon}
                </span>
                {link.label}
              </Link>
            );
          })}
        </div>
      </section>
    </div>
  );
}
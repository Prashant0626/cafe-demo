import { useState } from "react";
import { menuItems } from "../data/cafeData";

// ─── MenuTab ──────────────────────────────────────────────────────────────────
function MenuTab({ category, emoji, isActive, onClick }) {
  return (
    <button onClick={onClick} style={{
      background: isActive ? "var(--gold)" : "transparent",
      color: isActive ? "var(--dark)" : "var(--cream)",
      border: `1px solid ${isActive ? "var(--gold)" : "rgba(245,240,232,0.2)"}`,
      padding: "12px 32px",
      fontFamily: "'Jost', sans-serif",
      fontSize: "12px", letterSpacing: "2px", textTransform: "uppercase",
      cursor: "pointer", transition: "all 0.3s",
    }}
      onMouseEnter={e => { if (!isActive) { e.currentTarget.style.borderColor = "var(--gold)"; e.currentTarget.style.color = "var(--gold)"; } }}
      onMouseLeave={e => { if (!isActive) { e.currentTarget.style.borderColor = "rgba(245,240,232,0.2)"; e.currentTarget.style.color = "var(--cream)"; } }}
    >
      {emoji} {category}
    </button>
  );
}

// ─── MenuCard ─────────────────────────────────────────────────────────────────
function MenuCard({ name, desc, price }) {
  const [hovered, setHovered] = useState(false);
  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        background: hovered ? "rgba(42,31,20,0.9)" : "rgba(42,31,20,0.6)",
        border: `1px solid ${hovered ? "rgba(201,169,110,0.4)" : "var(--border)"}`,
        padding: "24px",
        transform: hovered ? "translateY(-4px)" : "none",
        transition: "all 0.3s",
      }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "12px" }}>
        <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: "20px", fontWeight: 600, lineHeight: 1.2 }}>
          {name}
        </h3>
        <span style={{ fontFamily: "'Jost', sans-serif", fontSize: "18px", color: "var(--gold)", fontWeight: 500, whiteSpace: "nowrap", marginLeft: "16px" }}>
          {price}
        </span>
      </div>
      <p style={{ fontFamily: "'Jost', sans-serif", fontSize: "14px", color: "rgba(245,240,232,0.55)", lineHeight: 1.7, fontWeight: 300 }}>
        {desc}
      </p>
    </div>
  );
}

// ─── Menu ─────────────────────────────────────────────────────────────────────
export default function Menu({ isVisible }) {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section id="menu" style={{ padding: "120px 48px", background: "rgba(26,15,8,0.5)" }}>
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>

        {/* Header */}
        <div className={`fade-up ${isVisible ? "visible" : ""}`} style={{ textAlign: "center", marginBottom: "80px" }}>
          <p className="label">What We Serve</p>
          <h2 className="display-heading">
            Our <em style={{ color: "var(--gold)" }}>Menu</em>
          </h2>
          <div className="divider" />
        </div>

        {/* Tabs */}
        <div className={`fade-up delay-1 ${isVisible ? "visible" : ""}`} style={{ display: "flex", justifyContent: "center", gap: "8px", marginBottom: "60px", flexWrap: "wrap" }}>
          {menuItems.map((cat, i) => (
            <MenuTab
              key={i}
              {...cat}
              isActive={activeTab === i}
              onClick={() => setActiveTab(i)}
            />
          ))}
        </div>

        {/* Cards Grid */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "24px" }}>
          {menuItems[activeTab].items.map((item, i) => (
            <MenuCard key={i} {...item} />
          ))}
        </div>
      </div>
    </section>
  );
}

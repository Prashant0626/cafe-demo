import { useState } from "react";
import { navLinks } from "../data/cafeData";
import { useScrollTo } from "../hooks/useScroll";

// ─── HamburgerIcon ────────────────────────────────────────────────────────────
function HamburgerIcon({ isOpen }) {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
      {[
        { width: "28px", transform: isOpen ? "rotate(45deg) translate(5px,5px)" : "none" },
        { width: "18px", opacity: isOpen ? 0 : 1 },
        { width: "28px", transform: isOpen ? "rotate(-45deg) translate(5px,-5px)" : "none" },
      ].map((bar, i) => (
        <span key={i} style={{
          width: bar.width,
          height: "1px",
          background: isOpen ? "var(--gold)" : "var(--cream)",
          display: "block",
          transition: "all 0.3s",
          transform: bar.transform || "none",
          opacity: bar.opacity ?? 1,
        }} />
      ))}
    </div>
  );
}

// ─── MobileMenu ───────────────────────────────────────────────────────────────
function MobileMenu({ isOpen, onNavigate }) {
  return (
    <div style={{
      position: "fixed",
      top: 0, left: 0, right: 0, bottom: 0,
      background: "#0c0a08",
      zIndex: 999,
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      gap: "48px",
      transform: isOpen ? "translateX(0)" : "translateX(100%)",
      transition: "transform 0.4s cubic-bezier(0.77,0,0.175,1)",
    }}>
      {navLinks.map((link) => (
        <button key={link} onClick={() => onNavigate(link)} style={{
          color: "var(--cream)",
          background: "none",
          border: "none",
          fontFamily: "'Jost', sans-serif",
          fontSize: "18px",
          letterSpacing: "4px",
          textTransform: "uppercase",
          cursor: "pointer",
          opacity: 0.8,
          transition: "all 0.3s",
        }}
          onMouseEnter={e => e.target.style.color = "var(--gold)"}
          onMouseLeave={e => e.target.style.color = "var(--cream)"}
        >
          {link}
        </button>
      ))}
      <button className="btn-primary" onClick={() => onNavigate("contact")}>
        Reserve a Table
      </button>
    </div>
  );
}

// ─── Navbar ───────────────────────────────────────────────────────────────────
export default function Navbar({ scrollY }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const scrollTo = useScrollTo();

  const handleNavigate = (id) => {
    scrollTo(id);
    setIsMenuOpen(false);
  };

  const isScrolled = scrollY > 80;

  return (
    <>
      <nav style={{
        position: "fixed", top: 0, left: 0, right: 0, zIndex: 100,
        padding: "24px 48px",
        background: isScrolled ? "rgba(12,10,8,0.95)" : "transparent",
        borderBottom: isScrolled ? "1px solid rgba(201,169,110,0.1)" : "none",
        backdropFilter: isScrolled ? "blur(12px)" : "none",
        transition: "all 0.4s",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
      }}>
        {/* Logo */}
        <div style={{ fontFamily: "'Playfair Display', serif", fontSize: "22px", letterSpacing: "1px", color: "var(--gold)" }}>
          Café<em style={{ color: "var(--cream)" }}> Noir</em>
        </div>

        {/* Desktop Nav Links */}
        <div style={{ display: "flex", gap: "40px", alignItems: "center" }}>
          {navLinks.map((link) => (
            <button key={link} onClick={() => handleNavigate(link)} style={{
              color: "var(--cream)",
              background: "none",
              border: "none",
              fontFamily: "'Jost', sans-serif",
              fontSize: "13px",
              letterSpacing: "2px",
              textTransform: "uppercase",
              cursor: "pointer",
              opacity: 0.8,
              transition: "all 0.3s",
            }}
              onMouseEnter={e => { e.target.style.opacity = 1; e.target.style.color = "var(--gold)"; }}
              onMouseLeave={e => { e.target.style.opacity = 0.8; e.target.style.color = "var(--cream)"; }}
            >
              {link}
            </button>
          ))}
          <button className="btn-primary" style={{ padding: "12px 28px", fontSize: "11px" }} onClick={() => handleNavigate("contact")}>
            Reserve
          </button>

          {/* Hamburger */}
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} style={{
            background: "none", border: "none", cursor: "pointer",
          }}>
            <HamburgerIcon isOpen={isMenuOpen} />
          </button>
        </div>
      </nav>

      <MobileMenu isOpen={isMenuOpen} onNavigate={handleNavigate} />
    </>
  );
}

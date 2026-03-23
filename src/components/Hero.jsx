import { useScrollTo } from "../hooks/useScroll";

// ─── ScrollIndicator ──────────────────────────────────────────────────────────
function ScrollIndicator({ visible }) {
  return (
    <div style={{
      position: "absolute", bottom: "40px", left: "50%",
      transform: "translateX(-50%)",
      display: "flex", flexDirection: "column", alignItems: "center", gap: "8px",
      opacity: visible ? 0.5 : 0, transition: "opacity 0.3s",
    }}>
      <span style={{ fontFamily: "'Jost', sans-serif", fontSize: "10px", letterSpacing: "3px", textTransform: "uppercase" }}>
        Scroll
      </span>
      <div style={{
        width: "1px", height: "40px",
        background: "linear-gradient(to bottom, var(--gold), transparent)",
        animation: "pulse 2s infinite",
      }} />
    </div>
  );
}

// ─── HeroBackground ───────────────────────────────────────────────────────────
function HeroBackground({ scrollY }) {
  return (
    <>
      {/* Gradient backdrop */}
      <div style={{
        position: "absolute", inset: 0,
        background: `
          radial-gradient(ellipse 80% 60% at 50% 100%, rgba(107,76,53,0.4) 0%, transparent 60%),
          radial-gradient(ellipse 60% 40% at 20% 50%, rgba(201,169,110,0.08) 0%, transparent 50%),
          linear-gradient(180deg, #0c0a08 0%, #1a1008 50%, #0c0a08 100%)
        `,
      }} />

      {/* Decorative rings */}
      {[600, 400].map((size, i) => (
        <div key={i} style={{
          position: "absolute", right: `${-200 + i * 100}px`, top: "50%",
          transform: "translateY(-50%)",
          width: `${size}px`, height: `${size}px`, borderRadius: "50%",
          border: `1px solid rgba(201,169,110,${0.08 + i * 0.04})`,
          pointerEvents: "none",
        }} />
      ))}

      {/* Floating coffee cup (parallax) */}
      <div style={{
        position: "absolute", right: "8%", top: "50%",
        transform: `translateY(calc(-50% + ${scrollY * 0.2}px))`,
        fontSize: "180px", opacity: 0.06,
        userSelect: "none", pointerEvents: "none",
        transition: "transform 0.05s linear",
      }}>
        ☕
      </div>
    </>
  );
}

// ─── Hero ─────────────────────────────────────────────────────────────────────
export default function Hero({ scrollY }) {
  const scrollTo = useScrollTo();

  return (
    <section style={{
      minHeight: "100vh",
      position: "relative",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      overflow: "hidden",
    }}>
      <HeroBackground scrollY={scrollY} />

      {/* Main content */}
      <div style={{
        position: "relative", zIndex: 1,
        textAlign: "center", padding: "0 24px", maxWidth: "900px",
        animation: "fadeIn 1.2s ease forwards",
      }}>
        <p className="label" style={{ marginBottom: "32px" }}>
          Est. 2024 · Specialty Coffee · Ahmedabad
        </p>

        <h1 style={{
          fontFamily: "'Playfair Display', serif",
          fontSize: "clamp(56px, 10vw, 120px)",
          lineHeight: 0.9,
          fontWeight: 900,
          marginBottom: "40px",
          letterSpacing: "-2px",
        }}>
          Where Every<br />
          <em style={{ color: "var(--gold)", fontStyle: "italic" }}>Cup Tells</em><br />
          a Story.
        </h1>

        <p style={{
          fontFamily: "'Jost', sans-serif",
          fontSize: "18px", lineHeight: 1.7,
          color: "var(--muted)", maxWidth: "500px",
          margin: "0 auto 56px",
          fontWeight: 300,
        }}>
          Handcrafted coffee, artisan food, and a space<br />
          where mornings feel worth waking up for.
        </p>

        <div style={{ display: "flex", gap: "16px", justifyContent: "center", flexWrap: "wrap" }}>
          <button className="btn-primary" onClick={() => scrollTo("menu")}>Explore Menu</button>
          <button className="btn-outline" onClick={() => scrollTo("about")}>Our Story</button>
        </div>
      </div>

      <ScrollIndicator visible={scrollY <= 50} />
    </section>
  );
}

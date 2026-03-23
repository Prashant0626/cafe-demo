import { stats } from "../data/cafeData";

// ─── StatItem ─────────────────────────────────────────────────────────────────
function StatItem({ value, label }) {
  return (
    <div style={{ textAlign: "center" }}>
      <div style={{ fontFamily: "'Playfair Display', serif", fontSize: "36px", color: "var(--gold)", marginBottom: "4px" }}>
        {value}
      </div>
      <div style={{ fontFamily: "'Jost', sans-serif", fontSize: "11px", letterSpacing: "2px", textTransform: "uppercase", opacity: 0.5 }}>
        {label}
      </div>
    </div>
  );
}

// ─── QuoteCard ────────────────────────────────────────────────────────────────
function QuoteCard() {
  return (
    <div style={{ position: "relative" }}>
      <div style={{
        width: "100%", paddingBottom: "120%",
        background: "linear-gradient(145deg, #2a1f14, #1a0f08)",
        border: "1px solid var(--border)",
        position: "relative", overflow: "hidden",
      }}>
        {/* Background icon */}
        <div style={{
          position: "absolute", inset: 0,
          display: "flex", alignItems: "center", justifyContent: "center",
          fontSize: "120px", opacity: 0.12,
        }}>
          ☕
        </div>

        {/* Quote text */}
        <div style={{
          position: "absolute", bottom: 0, left: 0, right: 0,
          padding: "40px",
          background: "linear-gradient(to top, rgba(12,10,8,0.9), transparent)",
        }}>
          <p style={{ fontFamily: "'Playfair Display', serif", fontSize: "20px", fontStyle: "italic", color: "var(--warm)", lineHeight: 1.6 }}>
            "Coffee is not just a drink. It's the pause between two great thoughts."
          </p>
          <p style={{ fontFamily: "'Jost', sans-serif", fontSize: "12px", letterSpacing: "2px", color: "var(--gold)", marginTop: "16px", textTransform: "uppercase" }}>
            — The Founders
          </p>
        </div>
      </div>

      {/* Decorative corner box */}
      <div style={{
        position: "absolute", top: "-20px", right: "-20px",
        width: "100px", height: "100px",
        border: "1px solid var(--gold)", opacity: 0.3,
        pointerEvents: "none",
      }} />
    </div>
  );
}

// ─── About ────────────────────────────────────────────────────────────────────
export default function About({ isVisible }) {
  return (
    <section id="about" style={{ padding: "140px 48px" }}>
      <div style={{ maxWidth: "1200px", margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: "100px", alignItems: "center" }}>

        {/* Left — text */}
        <div className={`fade-up ${isVisible ? "visible" : ""}`}>
          <p className="label">About Us</p>
          <h2 className="display-heading" style={{ marginBottom: "32px" }}>
            Crafted with<br />
            <em style={{ color: "var(--gold)" }}>obsession.</em>
          </h2>
          <p style={{ fontFamily: "'Jost', sans-serif", fontSize: "16px", lineHeight: 1.9, color: "rgba(245,240,232,0.65)", marginBottom: "20px", fontWeight: 300 }}>
            We started Café Noir because we believed Ahmedabad deserved a coffee shop that took beans as seriously as wine. Every origin is chosen. Every brew is dialed. Every cup is intentional.
          </p>
          <p style={{ fontFamily: "'Jost', sans-serif", fontSize: "16px", lineHeight: 1.9, color: "rgba(245,240,232,0.65)", fontWeight: 300 }}>
            Our food menu follows the same philosophy — real ingredients, zero shortcuts, made fresh every morning before the doors open.
          </p>

          {/* Divider */}
          <div style={{ width: "60px", height: "1px", background: "var(--gold)", margin: "40px 0" }} />

          {/* Stats */}
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: "24px" }}>
            {stats.map((s) => <StatItem key={s.label} {...s} />)}
          </div>
        </div>

        {/* Right — quote card */}
        <div className={`fade-up delay-2 ${isVisible ? "visible" : ""}`}>
          <QuoteCard />
        </div>
      </div>
    </section>
  );
}

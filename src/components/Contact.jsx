import { contactInfo } from "../data/cafeData";

// ─── ContactInfoItem ──────────────────────────────────────────────────────────
function ContactInfoItem({ icon, title, info }) {
  return (
    <div style={{ textAlign: "center" }}>
      <div style={{ fontSize: "28px", marginBottom: "16px" }}>{icon}</div>
      <p style={{ fontFamily: "'Jost', sans-serif", fontSize: "11px", letterSpacing: "3px", textTransform: "uppercase", color: "var(--gold)", marginBottom: "12px" }}>
        {title}
      </p>
      <p style={{ fontFamily: "'Jost', sans-serif", fontSize: "14px", color: "rgba(245,240,232,0.6)", lineHeight: 1.8, whiteSpace: "pre-line" }}>
        {info}
      </p>
    </div>
  );
}

// ─── Contact ──────────────────────────────────────────────────────────────────
export default function Contact({ isVisible }) {
  return (
    <section id="contact" style={{ padding: "140px 48px" }}>
      <div style={{ maxWidth: "800px", margin: "0 auto", textAlign: "center" }}>

        <div className={`fade-up ${isVisible ? "visible" : ""}`}>
          <p className="label">Find Us</p>
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(36px, 6vw, 64px)", fontWeight: 700, marginBottom: "40px", lineHeight: 1.1 }}>
            Come visit.<br />
            <em style={{ color: "var(--gold)" }}>We'll have a cup ready.</em>
          </h2>

          {/* Divider */}
          <div style={{ width: "60px", height: "1px", background: "var(--gold)", margin: "0 auto 60px" }} />

          {/* Info Grid */}
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: "40px", marginBottom: "60px" }}>
            {contactInfo.map((item, i) => <ContactInfoItem key={i} {...item} />)}
          </div>

          {/* CTA Buttons */}
          <div style={{ display: "flex", gap: "16px", justifyContent: "center", flexWrap: "wrap" }}>
            <button className="btn-primary">Reserve a Table</button>
            <button className="btn-outline">Get Directions</button>
          </div>
        </div>
      </div>
    </section>
  );
}

import { galleryItems } from "../data/cafeData";

// ─── GalleryCell ──────────────────────────────────────────────────────────────
function GalleryCell({ emoji, label, spanRow }) {
  return (
    <div style={{
      background: "linear-gradient(145deg, #2a1f14, #1a0f08)",
      border: "1px solid var(--border)",
      display: "flex", flexDirection: "column",
      alignItems: "center", justifyContent: "center", gap: "16px",
      gridRow: spanRow ? "span 2" : undefined,
      transition: "border-color 0.3s",
      cursor: "default",
    }}
      onMouseEnter={e => e.currentTarget.style.borderColor = "rgba(201,169,110,0.4)"}
      onMouseLeave={e => e.currentTarget.style.borderColor = "var(--border)"}
    >
      <div style={{ fontSize: spanRow ? "80px" : "48px", opacity: 0.4 }}>{emoji}</div>
      <p style={{ fontFamily: "'Jost', sans-serif", fontSize: "12px", letterSpacing: "2px", textTransform: "uppercase", opacity: 0.5 }}>
        {label}
      </p>
    </div>
  );
}

// ─── Gallery ──────────────────────────────────────────────────────────────────
export default function Gallery({ isVisible }) {
  return (
    <section id="gallery" style={{ padding: "140px 48px" }}>
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>

        {/* Header */}
        <div className={`fade-up ${isVisible ? "visible" : ""}`} style={{ textAlign: "center", marginBottom: "80px" }}>
          <p className="label">The Space</p>
          <h2 className="display-heading">
            Come for the coffee.<br />
            <em style={{ color: "var(--gold)" }}>Stay for the feeling.</em>
          </h2>
        </div>

        {/* Grid */}
        <div className={`fade-up delay-1 ${isVisible ? "visible" : ""}`} style={{
          display: "grid",
          gridTemplateColumns: "2fr 1fr 1fr",
          gridTemplateRows: "300px 300px",
          gap: "16px",
        }}>
          {galleryItems.map((item, i) => (
            <GalleryCell key={i} {...item} />
          ))}
        </div>
      </div>
    </section>
  );
}

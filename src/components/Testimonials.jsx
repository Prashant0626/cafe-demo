import { testimonials } from "../data/cafeData";

// ─── TestimonialCard ──────────────────────────────────────────────────────────
function TestimonialCard({ name, text, stars }) {
  return (
    <div style={{
      background: "rgba(42,31,20,0.4)",
      border: "1px solid rgba(201,169,110,0.1)",
      padding: "36px",
    }}>
      <div style={{ color: "var(--gold)", fontSize: "20px", marginBottom: "20px", letterSpacing: "2px" }}>
        {"★".repeat(stars)}
      </div>
      <p style={{ fontFamily: "'Playfair Display', serif", fontSize: "18px", lineHeight: 1.7, fontStyle: "italic", color: "var(--warm)", marginBottom: "24px" }}>
        "{text}"
      </p>
      <p style={{ fontFamily: "'Jost', sans-serif", fontSize: "12px", letterSpacing: "2px", textTransform: "uppercase", color: "var(--gold)", opacity: 0.8 }}>
        — {name}
      </p>
    </div>
  );
}

// ─── Testimonials ─────────────────────────────────────────────────────────────
export default function Testimonials() {
  return (
    <section style={{ padding: "100px 48px", background: "rgba(26,15,8,0.5)" }}>
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>

        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: "64px" }}>
          <p className="label">Love Notes</p>
          <h2 className="display-heading">
            What They're <em style={{ color: "var(--gold)" }}>Saying</em>
          </h2>
        </div>

        {/* Cards */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "24px" }}>
          {testimonials.map((t, i) => <TestimonialCard key={i} {...t} />)}
        </div>
      </div>
    </section>
  );
}

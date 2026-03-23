// ─── Footer ───────────────────────────────────────────────────────────────────
const socialLinks = ["Instagram", "Google Maps", "WhatsApp"];

export default function Footer() {
  return (
    <footer style={{
      padding: "48px",
      borderTop: "1px solid rgba(201,169,110,0.1)",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      flexWrap: "wrap",
      gap: "24px",
    }}>
      {/* Logo */}
      <div style={{ fontFamily: "'Playfair Display', serif", fontSize: "20px", color: "var(--gold)" }}>
        Café <em style={{ color: "var(--cream)" }}>Noir</em>
      </div>

      {/* Copyright */}
      <p style={{ fontFamily: "'Jost', sans-serif", fontSize: "12px", color: "rgba(245,240,232,0.35)", letterSpacing: "1px" }}>
        © 2024 Café Noir. All rights reserved.
      </p>

      {/* Social Links */}
      <div style={{ display: "flex", gap: "24px" }}>
        {socialLinks.map((link) => (
          <a key={link} href="#" style={{
            fontFamily: "'Jost', sans-serif",
            fontSize: "12px",
            color: "rgba(245,240,232,0.4)",
            textDecoration: "none",
            letterSpacing: "1px",
            transition: "color 0.3s",
          }}
            onMouseEnter={e => e.target.style.color = "var(--gold)"}
            onMouseLeave={e => e.target.style.color = "rgba(245,240,232,0.4)"}
          >
            {link}
          </a>
        ))}
      </div>
    </footer>
  );
}

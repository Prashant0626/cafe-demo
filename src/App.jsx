import { useScrollY, useSectionVisibility } from "./hooks/useScroll";
import { globalStyles } from "./styles/globalStyles";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Menu from "./components/Menu";
import Gallery from "./components/Gallery";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

// ─── App ──────────────────────────────────────────────────────────────────────
 function App() {
  const scrollY = useScrollY();
  const visible = useSectionVisibility();

  return (
    <>
      {/* Inject global CSS */}
      <style>{globalStyles}</style>

      {/* Grain texture overlay */}
      <div className="grain" />

      {/* Layout */}
      <Navbar scrollY={scrollY} />

      <main>
        <Hero scrollY={scrollY} />
        <About isVisible={visible.about} />
        <Menu isVisible={visible.menu} />
        <Gallery isVisible={visible.gallery} />
        <Testimonials />
        <Contact isVisible={visible.contact} />
      </main>

      <Footer />
    </>
  );
}
import { useState, useEffect, useRef } from "react";

const menuItems = [
  {
    category: "Coffee",
    emoji: "☕",
    items: [
      {
        name: "Signature Espresso",
        desc: "Double shot, velvety crema, dark chocolate finish",
        price: "₹180",
      },
      {
        name: "Cardamom Latte",
        desc: "Steamed milk, house espresso, fresh cardamom",
        price: "₹220",
      },
      {
        name: "Cold Brew Noir",
        desc: "18-hour steeped, served over black ice",
        price: "₹250",
      },
      {
        name: "Filter Kaapi",
        desc: "South Indian drip, chicory blend, fresh dairy",
        price: "₹120",
      },
    ],
  },
  {
    category: "Food",
    emoji: "🥐",
    items: [
      {
        name: "Masala Toast",
        desc: "Toasted sourdough, spiced potato, coriander chutney",
        price: "₹180",
      },
      {
        name: "Almond Croissant",
        desc: "Imported butter, twice-baked, almond cream",
        price: "₹220",
      },
      {
        name: "Avocado Bowl",
        desc: "Smashed avo, poached egg, chili flakes, seeded toast",
        price: "₹320",
      },
      {
        name: "Banana Bread",
        desc: "Walnut-studded, served warm with honey butter",
        price: "₹160",
      },
    ],
  },
  {
    category: "Specials",
    emoji: "✨",
    items: [
      {
        name: "Rose Iced Latte",
        desc: "House rose syrup, oat milk, topped with dried petals",
        price: "₹280",
      },
      {
        name: "Matcha Ritual",
        desc: "Ceremonial grade, whisked, served hot or iced",
        price: "₹260",
      },
      {
        name: "Mango Lassi Shake",
        desc: "Alphonso mango, yogurt, saffron threads",
        price: "₹240",
      },
      {
        name: "Affogato",
        desc: "Vanilla gelato drowned in double espresso shot",
        price: "₹290",
      },
    ],
  },
];

const testimonials = [
  {
    name: "Priya S.",
    text: "Best coffee in the city, hands down. The cardamom latte is life-changing.",
    stars: 5,
  },
  {
    name: "Rohan M.",
    text: "Perfect ambience for working. I come here every single morning.",
    stars: 5,
  },
  {
    name: "Ananya K.",
    text: "The rose iced latte is Instagram-worthy AND delicious. Perfection.",
    stars: 5,
  },
];

function CafeWebsite() {
  const [activeMenu, setActiveMenu] = useState(0);
  const [scrollY, setScrollY] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [visibleSections, setVisibleSections] = useState({});
  const heroRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleSections((prev) => ({
              ...prev,
              [entry.target.id]: true,
            }));
          }
        });
      },
      { threshold: 0.1 },
    );
    document.querySelectorAll("[id]").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setIsMenuOpen(false);
  };

  return (
    <div
      style={{
        fontFamily: "'Georgia', serif",
        background: "#0c0a08",
        color: "#f5f0e8",
        overflowX: "hidden",
      }}
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,700;0,900;1,400;1,700&family=Jost:wght@300;400;500&display=swap');
 
        * { margin: 0; padding: 0; box-sizing: border-box; }
        :root {
          --cream: #f5f0e8;
          --gold: #c9a96e;
          --dark: #0c0a08;
          --brown: #2a1f14;
          --mocha: #6b4c35;
          --warm: #e8d5b7;
        }
 
        html { scroll-behavior: smooth; }
 
        .nav-link {
          color: var(--cream);
          text-decoration: none;
          font-family: 'Jost', sans-serif;
          font-size: 13px;
          letter-spacing: 2px;
          text-transform: uppercase;
          opacity: 0.8;
          transition: all 0.3s;
          cursor: pointer;
          background: none;
          border: none;
        }
        .nav-link:hover { opacity: 1; color: var(--gold); }
 
        .btn-primary {
          background: var(--gold);
          color: var(--dark);
          border: none;
          padding: 16px 40px;
          font-family: 'Jost', sans-serif;
          font-size: 12px;
          letter-spacing: 3px;
          text-transform: uppercase;
          cursor: pointer;
          transition: all 0.3s;
          font-weight: 500;
        }
        .btn-primary:hover { background: var(--cream); transform: translateY(-2px); }
 
        .btn-outline {
          background: transparent;
          color: var(--cream);
          border: 1px solid rgba(245,240,232,0.4);
          padding: 14px 36px;
          font-family: 'Jost', sans-serif;
          font-size: 12px;
          letter-spacing: 3px;
          text-transform: uppercase;
          cursor: pointer;
          transition: all 0.3s;
        }
        .btn-outline:hover { border-color: var(--gold); color: var(--gold); }
 
        .fade-up {
          opacity: 0;
          transform: translateY(40px);
          transition: opacity 0.8s ease, transform 0.8s ease;
        }
        .fade-up.visible {
          opacity: 1;
          transform: translateY(0);
        }
 
        .menu-card {
          background: rgba(42,31,20,0.6);
          border: 1px solid rgba(201,169,110,0.15);
          padding: 24px;
          transition: all 0.3s;
          cursor: default;
        }
        .menu-card:hover {
          border-color: rgba(201,169,110,0.4);
          background: rgba(42,31,20,0.9);
          transform: translateY(-4px);
        }
 
        .testimonial-card {
          background: rgba(42,31,20,0.4);
          border: 1px solid rgba(201,169,110,0.1);
          padding: 36px;
          position: relative;
        }
 
        .grain {
          position: fixed;
          top: 0; left: 0; right: 0; bottom: 0;
          pointer-events: none;
          z-index: 1000;
          opacity: 0.03;
          background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E");
          background-size: 200px 200px;
        }
 
        .divider {
          width: 60px;
          height: 1px;
          background: var(--gold);
          margin: 24px auto;
        }
 
        .mobile-menu {
          position: fixed;
          top: 0; left: 0; right: 0; bottom: 0;
          background: #0c0a08;
          z-index: 999;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 48px;
          transform: translateX(100%);
          transition: transform 0.4s cubic-bezier(0.77,0,0.175,1);
        }
        .mobile-menu.open { transform: translateX(0); }
        .mobile-menu .nav-link { font-size: 18px; letter-spacing: 4px; }
      `}</style>

      {/* Grain overlay */}
      <div className="grain" />

      {/* NAVBAR */}
      <nav
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 100,
          padding: "24px 48px",
          background: scrollY > 80 ? "rgba(12,10,8,0.95)" : "transparent",
          borderBottom:
            scrollY > 80 ? "1px solid rgba(201,169,110,0.1)" : "none",
          transition: "all 0.4s",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          backdropFilter: scrollY > 80 ? "blur(12px)" : "none",
        }}
      >
        <div
          style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: "22px",
            letterSpacing: "1px",
            color: "var(--gold)",
          }}
        >
          Café<em style={{ color: "var(--cream)" }}> Noir</em>
        </div>
        <div style={{ display: "flex", gap: "40px", alignItems: "center" }}>
          {["about", "menu", "gallery", "contact"].map((s) => (
            <button
              key={s}
              className="nav-link"
              onClick={() => scrollTo(s)}
              style={{ display: window.innerWidth < 768 ? "none" : undefined }}
            >
              {s}
            </button>
          ))}
          <button
            className="btn-primary"
            style={{ padding: "12px 28px", fontSize: "11px" }}
            onClick={() => scrollTo("contact")}
          >
            Reserve
          </button>
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            style={{
              background: "none",
              border: "none",
              cursor: "pointer",
              color: "var(--cream)",
              fontSize: "24px",
              display: "flex",
              flexDirection: "column",
              gap: "6px",
            }}
          >
            <span
              style={{
                width: "28px",
                height: "1px",
                background: isMenuOpen ? "var(--gold)" : "var(--cream)",
                display: "block",
                transition: "all 0.3s",
                transform: isMenuOpen
                  ? "rotate(45deg) translate(5px,5px)"
                  : "none",
              }}
            />
            <span
              style={{
                width: "18px",
                height: "1px",
                background: "var(--cream)",
                display: "block",
                opacity: isMenuOpen ? 0 : 1,
                transition: "opacity 0.3s",
              }}
            />
            <span
              style={{
                width: "28px",
                height: "1px",
                background: isMenuOpen ? "var(--gold)" : "var(--cream)",
                display: "block",
                transition: "all 0.3s",
                transform: isMenuOpen
                  ? "rotate(-45deg) translate(5px,-5px)"
                  : "none",
              }}
            />
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div className={`mobile-menu ${isMenuOpen ? "open" : ""}`}>
        {["about", "menu", "gallery", "contact"].map((s) => (
          <button key={s} className="nav-link" onClick={() => scrollTo(s)}>
            {s}
          </button>
        ))}
        <button className="btn-primary" onClick={() => scrollTo("contact")}>
          Reserve a Table
        </button>
      </div>

      {/* HERO */}
      <section
        style={{
          minHeight: "100vh",
          position: "relative",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          overflow: "hidden",
        }}
      >
        {/* Background */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            background: `
            radial-gradient(ellipse 80% 60% at 50% 100%, rgba(107,76,53,0.4) 0%, transparent 60%),
            radial-gradient(ellipse 60% 40% at 20% 50%, rgba(201,169,110,0.08) 0%, transparent 50%),
            linear-gradient(180deg, #0c0a08 0%, #1a1008 50%, #0c0a08 100%)
          `,
          }}
        />

        {/* Decorative circles */}
        <div
          style={{
            position: "absolute",
            right: "-200px",
            top: "50%",
            transform: "translateY(-50%)",
            width: "600px",
            height: "600px",
            borderRadius: "50%",
            border: "1px solid rgba(201,169,110,0.08)",
          }}
        />
        <div
          style={{
            position: "absolute",
            right: "-100px",
            top: "50%",
            transform: "translateY(-50%)",
            width: "400px",
            height: "400px",
            borderRadius: "50%",
            border: "1px solid rgba(201,169,110,0.12)",
          }}
        />

        {/* Floating coffee cup illustration */}
        <div
          style={{
            position: "absolute",
            right: "8%",
            top: "50%",
            transform: `translateY(-50%) translateY(${scrollY * 0.2}px)`,
            fontSize: "180px",
            opacity: 0.06,
            userSelect: "none",
            transition: "transform 0.1s",
          }}
        >
          ☕
        </div>

        <div
          style={{
            position: "relative",
            zIndex: 1,
            textAlign: "center",
            padding: "0 24px",
            maxWidth: "900px",
            animation: "fadeIn 1.2s ease forwards",
          }}
        >
          <p
            style={{
              fontFamily: "'Jost', sans-serif",
              fontSize: "11px",
              letterSpacing: "5px",
              textTransform: "uppercase",
              color: "var(--gold)",
              marginBottom: "32px",
              opacity: 0.9,
            }}
          >
            Est. 2024 · Specialty Coffee · Ahmedabad
          </p>

          <h1
            style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: "clamp(56px, 10vw, 120px)",
              lineHeight: 0.9,
              fontWeight: 900,
              marginBottom: "40px",
              letterSpacing: "-2px",
            }}
          >
            Where Every
            <br />
            <em style={{ color: "var(--gold)", fontStyle: "italic" }}>
              Cup Tells
            </em>
            <br />a Story.
          </h1>

          <p
            style={{
              fontFamily: "'Jost', sans-serif",
              fontSize: "18px",
              lineHeight: 1.7,
              color: "rgba(245,240,232,0.6)",
              maxWidth: "500px",
              margin: "0 auto 56px",
              fontWeight: 300,
            }}
          >
            Handcrafted coffee, artisan food, and a space
            <br />
            where mornings feel worth waking up for.
          </p>

          <div
            style={{
              display: "flex",
              gap: "16px",
              justifyContent: "center",
              flexWrap: "wrap",
            }}
          >
            <button className="btn-primary" onClick={() => scrollTo("menu")}>
              Explore Menu
            </button>
            <button className="btn-outline" onClick={() => scrollTo("about")}>
              Our Story
            </button>
          </div>
        </div>

        {/* Scroll indicator */}
        <div
          style={{
            position: "absolute",
            bottom: "40px",
            left: "50%",
            transform: "translateX(-50%)",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "8px",
            opacity: scrollY > 50 ? 0 : 0.5,
            transition: "opacity 0.3s",
          }}
        >
          <span
            style={{
              fontFamily: "'Jost', sans-serif",
              fontSize: "10px",
              letterSpacing: "3px",
              textTransform: "uppercase",
            }}
          >
            Scroll
          </span>
          <div
            style={{
              width: "1px",
              height: "40px",
              background:
                "linear-gradient(to bottom, var(--gold), transparent)",
              animation: "pulse 2s infinite",
            }}
          />
        </div>
      </section>

      {/* ABOUT */}
      <section
        id="about"
        style={{ padding: "140px 48px", maxWidth: "1200px", margin: "0 auto" }}
      >
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "100px",
            alignItems: "center",
          }}
        >
          <div className={`fade-up ${visibleSections.about ? "visible" : ""}`}>
            <p
              style={{
                fontFamily: "'Jost', sans-serif",
                fontSize: "11px",
                letterSpacing: "4px",
                color: "var(--gold)",
                textTransform: "uppercase",
                marginBottom: "24px",
              }}
            >
              About Us
            </p>
            <h2
              style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: "clamp(36px, 5vw, 56px)",
                lineHeight: 1.15,
                marginBottom: "32px",
                fontWeight: 700,
              }}
            >
              Crafted with
              <br />
              <em style={{ color: "var(--gold)" }}>obsession.</em>
            </h2>
            <p
              style={{
                fontFamily: "'Jost', sans-serif",
                fontSize: "16px",
                lineHeight: 1.9,
                color: "rgba(245,240,232,0.65)",
                marginBottom: "20px",
                fontWeight: 300,
              }}
            >
              We started Café Noir because we believed Ahmedabad deserved a
              coffee shop that took beans as seriously as wine. Every origin is
              chosen. Every brew is dialed. Every cup is intentional.
            </p>
            <p
              style={{
                fontFamily: "'Jost', sans-serif",
                fontSize: "16px",
                lineHeight: 1.9,
                color: "rgba(245,240,232,0.65)",
                fontWeight: 300,
              }}
            >
              Our food menu follows the same philosophy — real ingredients, zero
              shortcuts, made fresh every morning before the doors open.
            </p>
            <div className="divider" style={{ margin: "40px 0" }} />
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr 1fr",
                gap: "24px",
                textAlign: "center",
              }}
            >
              {[
                ["12+", "Origins"],
                ["50+", "Menu Items"],
                ["4.9★", "Avg Rating"],
              ].map(([n, l]) => (
                <div key={l}>
                  <div
                    style={{
                      fontFamily: "'Playfair Display', serif",
                      fontSize: "36px",
                      color: "var(--gold)",
                      marginBottom: "4px",
                    }}
                  >
                    {n}
                  </div>
                  <div
                    style={{
                      fontFamily: "'Jost', sans-serif",
                      fontSize: "11px",
                      letterSpacing: "2px",
                      textTransform: "uppercase",
                      opacity: 0.5,
                    }}
                  >
                    {l}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div
            className={`fade-up ${visibleSections.about ? "visible" : ""}`}
            style={{ transitionDelay: "0.2s" }}
          >
            {/* Visual card */}
            <div style={{ position: "relative" }}>
              <div
                style={{
                  width: "100%",
                  paddingBottom: "120%",
                  background: "linear-gradient(145deg, #2a1f14, #1a0f08)",
                  border: "1px solid rgba(201,169,110,0.15)",
                  position: "relative",
                  overflow: "hidden",
                }}
              >
                <div
                  style={{
                    position: "absolute",
                    inset: 0,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "120px",
                    opacity: 0.15,
                  }}
                >
                  ☕
                </div>
                <div
                  style={{
                    position: "absolute",
                    bottom: 0,
                    left: 0,
                    right: 0,
                    padding: "40px",
                    background:
                      "linear-gradient(to top, rgba(12,10,8,0.9), transparent)",
                  }}
                >
                  <p
                    style={{
                      fontFamily: "'Playfair Display', serif",
                      fontSize: "20px",
                      fontStyle: "italic",
                      color: "var(--warm)",
                      lineHeight: 1.6,
                    }}
                  >
                    "Coffee is not just a drink. It's the pause between two
                    great thoughts."
                  </p>
                  <p
                    style={{
                      fontFamily: "'Jost', sans-serif",
                      fontSize: "12px",
                      letterSpacing: "2px",
                      color: "var(--gold)",
                      marginTop: "16px",
                      textTransform: "uppercase",
                    }}
                  >
                    — The Founders
                  </p>
                </div>
              </div>
              {/* Accent box */}
              <div
                style={{
                  position: "absolute",
                  top: "-20px",
                  right: "-20px",
                  width: "100px",
                  height: "100px",
                  border: "1px solid var(--gold)",
                  opacity: 0.3,
                }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* MENU */}
      <section
        id="menu"
        style={{ padding: "120px 48px", background: "rgba(26,15,8,0.5)" }}
      >
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <div
            className={`fade-up ${visibleSections.menu ? "visible" : ""}`}
            style={{ textAlign: "center", marginBottom: "80px" }}
          >
            <p
              style={{
                fontFamily: "'Jost', sans-serif",
                fontSize: "11px",
                letterSpacing: "4px",
                color: "var(--gold)",
                textTransform: "uppercase",
                marginBottom: "16px",
              }}
            >
              What We Serve
            </p>
            <h2
              style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: "clamp(36px, 5vw, 56px)",
                fontWeight: 700,
              }}
            >
              Our <em style={{ color: "var(--gold)" }}>Menu</em>
            </h2>
            <div className="divider" />
          </div>

          {/* Tabs */}
          <div
            className={`fade-up ${visibleSections.menu ? "visible" : ""}`}
            style={{
              display: "flex",
              justifyContent: "center",
              gap: "8px",
              marginBottom: "60px",
              flexWrap: "wrap",
            }}
          >
            {menuItems.map((cat, i) => (
              <button
                key={i}
                onClick={() => setActiveMenu(i)}
                style={{
                  background: activeMenu === i ? "var(--gold)" : "transparent",
                  color: activeMenu === i ? "var(--dark)" : "var(--cream)",
                  border: `1px solid ${activeMenu === i ? "var(--gold)" : "rgba(245,240,232,0.2)"}`,
                  padding: "12px 32px",
                  fontFamily: "'Jost', sans-serif",
                  fontSize: "12px",
                  letterSpacing: "2px",
                  textTransform: "uppercase",
                  cursor: "pointer",
                  transition: "all 0.3s",
                }}
              >
                {cat.emoji} {cat.category}
              </button>
            ))}
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
              gap: "24px",
            }}
          >
            {menuItems[activeMenu].items.map((item, i) => (
              <div key={i} className="menu-card">
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "flex-start",
                    marginBottom: "12px",
                  }}
                >
                  <h3
                    style={{
                      fontFamily: "'Playfair Display', serif",
                      fontSize: "20px",
                      fontWeight: 600,
                      lineHeight: 1.2,
                    }}
                  >
                    {item.name}
                  </h3>
                  <span
                    style={{
                      fontFamily: "'Jost', sans-serif",
                      fontSize: "18px",
                      color: "var(--gold)",
                      fontWeight: 500,
                      whiteSpace: "nowrap",
                      marginLeft: "16px",
                    }}
                  >
                    {item.price}
                  </span>
                </div>
                <p
                  style={{
                    fontFamily: "'Jost', sans-serif",
                    fontSize: "14px",
                    color: "rgba(245,240,232,0.55)",
                    lineHeight: 1.7,
                    fontWeight: 300,
                  }}
                >
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* GALLERY / AMBIENCE */}
      <section id="gallery" style={{ padding: "140px 48px" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <div
            className={`fade-up ${visibleSections.gallery ? "visible" : ""}`}
            style={{ textAlign: "center", marginBottom: "80px" }}
          >
            <p
              style={{
                fontFamily: "'Jost', sans-serif",
                fontSize: "11px",
                letterSpacing: "4px",
                color: "var(--gold)",
                textTransform: "uppercase",
                marginBottom: "16px",
              }}
            >
              The Space
            </p>
            <h2
              style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: "clamp(36px, 5vw, 56px)",
                fontWeight: 700,
              }}
            >
              Come for the coffee.
              <br />
              <em style={{ color: "var(--gold)" }}>Stay for the feeling.</em>
            </h2>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "2fr 1fr 1fr",
              gridTemplateRows: "300px 300px",
              gap: "16px",
            }}
          >
            {[
              { emoji: "☕", label: "The Perfect Pour", row: "span 2" },
              { emoji: "🌿", label: "Fresh Ingredients" },
              { emoji: "📚", label: "Work & Relax" },
              { emoji: "🕯️", label: "Evening Vibes" },
              { emoji: "🥐", label: "Baked Daily" },
            ].map((item, i) => (
              <div
                key={i}
                style={{
                  background: `linear-gradient(145deg, #2a1f14, #1a0f08)`,
                  border: "1px solid rgba(201,169,110,0.1)",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "16px",
                  gridRow: item.row,
                  transition: "all 0.3s",
                  cursor: "default",
                  position: "relative",
                  overflow: "hidden",
                }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.borderColor = "rgba(201,169,110,0.4)")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.borderColor = "rgba(201,169,110,0.1)")
                }
              >
                <div
                  style={{ fontSize: i === 0 ? "80px" : "48px", opacity: 0.4 }}
                >
                  {item.emoji}
                </div>
                <p
                  style={{
                    fontFamily: "'Jost', sans-serif",
                    fontSize: "12px",
                    letterSpacing: "2px",
                    textTransform: "uppercase",
                    opacity: 0.5,
                  }}
                >
                  {item.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section
        style={{ padding: "100px 48px", background: "rgba(26,15,8,0.5)" }}
      >
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: "64px" }}>
            <p
              style={{
                fontFamily: "'Jost', sans-serif",
                fontSize: "11px",
                letterSpacing: "4px",
                color: "var(--gold)",
                textTransform: "uppercase",
                marginBottom: "16px",
              }}
            >
              Love Notes
            </p>
            <h2
              style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: "48px",
                fontWeight: 700,
              }}
            >
              What They're <em style={{ color: "var(--gold)" }}>Saying</em>
            </h2>
          </div>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
              gap: "24px",
            }}
          >
            {testimonials.map((t, i) => (
              <div key={i} className="testimonial-card">
                <div
                  style={{
                    color: "var(--gold)",
                    fontSize: "20px",
                    marginBottom: "20px",
                    letterSpacing: "2px",
                  }}
                >
                  {"★".repeat(t.stars)}
                </div>
                <p
                  style={{
                    fontFamily: "'Playfair Display', serif",
                    fontSize: "18px",
                    lineHeight: 1.7,
                    fontStyle: "italic",
                    color: "var(--warm)",
                    marginBottom: "24px",
                  }}
                >
                  "{t.text}"
                </p>
                <p
                  style={{
                    fontFamily: "'Jost', sans-serif",
                    fontSize: "12px",
                    letterSpacing: "2px",
                    textTransform: "uppercase",
                    color: "var(--gold)",
                    opacity: 0.8,
                  }}
                >
                  — {t.name}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT / RESERVE */}
      <section
        id="contact"
        style={{
          padding: "140px 48px",
          maxWidth: "800px",
          margin: "0 auto",
          textAlign: "center",
        }}
      >
        <div className={`fade-up ${visibleSections.contact ? "visible" : ""}`}>
          <p
            style={{
              fontFamily: "'Jost', sans-serif",
              fontSize: "11px",
              letterSpacing: "4px",
              color: "var(--gold)",
              textTransform: "uppercase",
              marginBottom: "16px",
            }}
          >
            Find Us
          </p>
          <h2
            style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: "clamp(36px, 6vw, 64px)",
              fontWeight: 700,
              marginBottom: "40px",
              lineHeight: 1.1,
            }}
          >
            Come visit.
            <br />
            <em style={{ color: "var(--gold)" }}>We'll have a cup ready.</em>
          </h2>
          <div className="divider" />
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr 1fr",
              gap: "40px",
              margin: "60px 0",
              textAlign: "center",
            }}
          >
            {[
              {
                icon: "📍",
                title: "Location",
                info: "Law Garden Road,\nAhmedabad, Gujarat",
              },
              {
                icon: "🕐",
                title: "Hours",
                info: "Mon–Fri: 7am – 10pm\nWeekends: 8am – 11pm",
              },
              {
                icon: "📞",
                title: "Contact",
                info: "+91 98765 43210\nhello@cafenoir.in",
              },
            ].map((item, i) => (
              <div key={i}>
                <div style={{ fontSize: "28px", marginBottom: "16px" }}>
                  {item.icon}
                </div>
                <p
                  style={{
                    fontFamily: "'Jost', sans-serif",
                    fontSize: "11px",
                    letterSpacing: "3px",
                    textTransform: "uppercase",
                    color: "var(--gold)",
                    marginBottom: "12px",
                  }}
                >
                  {item.title}
                </p>
                <p
                  style={{
                    fontFamily: "'Jost', sans-serif",
                    fontSize: "14px",
                    color: "rgba(245,240,232,0.6)",
                    lineHeight: 1.8,
                    whiteSpace: "pre-line",
                  }}
                >
                  {item.info}
                </p>
              </div>
            ))}
          </div>

          <div
            style={{
              display: "flex",
              gap: "16px",
              justifyContent: "center",
              flexWrap: "wrap",
            }}
          >
            <button className="btn-primary">Reserve a Table</button>
            <button className="btn-outline">Get Directions</button>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer
        style={{
          padding: "48px",
          borderTop: "1px solid rgba(201,169,110,0.1)",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexWrap: "wrap",
          gap: "24px",
        }}
      >
        <div
          style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: "20px",
            color: "var(--gold)",
          }}
        >
          Café <em style={{ color: "var(--cream)" }}>Noir</em>
        </div>
        <p
          style={{
            fontFamily: "'Jost', sans-serif",
            fontSize: "12px",
            color: "rgba(245,240,232,0.35)",
            letterSpacing: "1px",
          }}
        >
          © 2024 Café Noir. All rights reserved.
        </p>
        <div style={{ display: "flex", gap: "24px" }}>
          {["Instagram", "Google Maps", "WhatsApp"].map((s) => (
            <a
              key={s}
              href="#"
              style={{
                fontFamily: "'Jost', sans-serif",
                fontSize: "12px",
                color: "rgba(245,240,232,0.4)",
                textDecoration: "none",
                letterSpacing: "1px",
                transition: "color 0.3s",
              }}
              onMouseEnter={(e) => (e.target.style.color = "var(--gold)")}
              onMouseLeave={(e) =>
                (e.target.style.color = "rgba(245,240,232,0.4)")
              }
            >
              {s}
            </a>
          ))}
        </div>
      </footer>

      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes pulse {
          0%, 100% { opacity: 0.5; }
          50% { opacity: 1; }
        }
      `}</style>
    </div>
  );
}

export default CafeWebsite;

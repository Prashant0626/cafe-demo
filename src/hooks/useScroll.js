import { useState, useEffect } from "react";

// ─── useScrollY ────────────────────────────────────────────────────────────────
// Tracks window.scrollY and returns the current value
export function useScrollY() {
  const [scrollY, setScrollY] = useState(0);
  useEffect(() => {
    const onScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return scrollY;
}

// ─── useSectionVisibility ─────────────────────────────────────────────────────
// Tracks which sections (by id) have entered the viewport
export function useSectionVisibility(threshold = 0.1) {
  const [visible, setVisible] = useState({});
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible((prev) => ({ ...prev, [entry.target.id]: true }));
          }
        });
      },
      { threshold }
    );
    document.querySelectorAll("[id]").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);
  return visible;
}

// ─── useScrollTo ──────────────────────────────────────────────────────────────
// Returns a helper to smoothly scroll to a section by id
export function useScrollTo() {
  return (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };
}

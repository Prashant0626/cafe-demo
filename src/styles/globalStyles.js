export const globalStyles = `
  @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,700;0,900;1,400;1,700&family=Jost:wght@300;400;500&display=swap');

  *, *::before, *::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  :root {
    --cream:  #f5f0e8;
    --gold:   #c9a96e;
    --dark:   #0c0a08;
    --brown:  #2a1f14;
    --mocha:  #6b4c35;
    --warm:   #e8d5b7;
    --muted:  rgba(245, 240, 232, 0.6);
    --border: rgba(201, 169, 110, 0.15);
  }

  html { scroll-behavior: smooth; }

  body {
    font-family: 'Jost', sans-serif;
    background: var(--dark);
    color: var(--cream);
    overflow-x: hidden;
  }

  /* ── Utility Classes ── */
  .label {
    font-family: 'Jost', sans-serif;
    font-size: 11px;
    letter-spacing: 4px;
    color: var(--gold);
    text-transform: uppercase;
    margin-bottom: 16px;
  }

  .display-heading {
    font-family: 'Playfair Display', serif;
    font-size: clamp(36px, 5vw, 56px);
    font-weight: 700;
    line-height: 1.15;
  }

  .divider {
    width: 60px;
    height: 1px;
    background: var(--gold);
    margin: 24px auto;
  }

  /* ── Buttons ── */
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
  .btn-primary:hover {
    background: var(--cream);
    transform: translateY(-2px);
  }

  .btn-outline {
    background: transparent;
    color: var(--cream);
    border: 1px solid rgba(245, 240, 232, 0.35);
    padding: 14px 36px;
    font-family: 'Jost', sans-serif;
    font-size: 12px;
    letter-spacing: 3px;
    text-transform: uppercase;
    cursor: pointer;
    transition: all 0.3s;
  }
  .btn-outline:hover {
    border-color: var(--gold);
    color: var(--gold);
  }

  /* ── Fade-up animation ── */
  .fade-up {
    opacity: 0;
    transform: translateY(40px);
    transition: opacity 0.8s ease, transform 0.8s ease;
  }
  .fade-up.visible {
    opacity: 1;
    transform: translateY(0);
  }
  .fade-up.delay-1 { transition-delay: 0.15s; }
  .fade-up.delay-2 { transition-delay: 0.30s; }
  .fade-up.delay-3 { transition-delay: 0.45s; }

  /* ── Grain overlay ── */
  .grain {
    position: fixed;
    top: 0; left: 0; right: 0; bottom: 0;
    pointer-events: none;
    z-index: 1000;
    opacity: 0.03;
    background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E");
    background-size: 200px 200px;
  }

  /* ── Keyframes ── */
  @keyframes fadeIn {
    from { opacity: 0; transform: translateY(30px); }
    to   { opacity: 1; transform: translateY(0); }
  }
  @keyframes pulse {
    0%, 100% { opacity: 0.5; }
    50%       { opacity: 1; }
  }
  @keyframes scrollLine {
    0%   { transform: scaleY(0); transform-origin: top; }
    50%  { transform: scaleY(1); transform-origin: top; }
    51%  { transform-origin: bottom; }
    100% { transform: scaleY(0); transform-origin: bottom; }
  }
`;

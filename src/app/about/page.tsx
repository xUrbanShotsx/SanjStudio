import { Nav } from "@/components/Nav";

const values = [
  {
    name: "Keep it simple.",
    desc: "No bloated proposals, no jargon, no unnecessary complexity. You tell me what you need — I scope it clearly, build it cleanly.",
  },
  {
    name: "Move fast.",
    desc: "Most agencies take months. I take two weeks. Every project is scoped properly so there are no surprises and no delays.",
  },
  {
    name: "Own your craft.",
    desc: "I come from a marketing and production background. I understand how a site needs to look, feel, and perform — commercially, not just technically.",
  },
  {
    name: "No middlemen.",
    desc: "You work directly with me. I design, I code, I launch. One person accountable for everything — start to finish.",
  },
];

export default function AboutPage() {
  return (
    <>
      <Nav />

      {/* ── Hero ─────────────────────────────────────────────── */}
      <section className="about-page-hero">
        <div className="about-page-hero-inner">
          <span className="about-page-hero-label">About</span>
          <h1 className="about-page-hero-h1">
            One person.<br />All the work.
          </h1>
          <p className="about-page-hero-desc">
            I&apos;m Jye Sanjurjo — 22, based in Wollongong. I build websites and brand
            identities for businesses that want something real.
          </p>
        </div>
      </section>

      {/* ── Story ────────────────────────────────────────────── */}
      <section className="about-page-story">
        <div className="container">
          <div className="about-page-story-grid">
            <div className="about-page-story-left">
              <span className="about-page-story-label">Background</span>
              <h2 className="about-page-story-h2">
                Marketing,<br />production,<br />and code.
              </h2>
            </div>
            <div className="about-page-story-right">
              <p>
                SanjStudio started because I kept watching local businesses settle for
                cookie-cutter websites that didn&apos;t do them justice. A Squarespace template
                with a logo slapped on it isn&apos;t a brand. It&apos;s a placeholder.
              </p>
              <p>
                My background sits across marketing and production — which means I don&apos;t
                just build sites that function. I build sites that communicate. I think about
                what your customer sees first, what makes them trust you, and what makes
                them pick up the phone.
              </p>
              <p>
                Every project I take on is custom-coded from the ground up. No builders,
                no Webflow, no Wix. Real HTML, CSS and JavaScript, deployed to Vercel,
                built to last. And because it&apos;s just me, you always know who to call.
              </p>
              <div className="about-page-stats">
                <div className="about-page-stat">
                  <span className="about-page-stat-num">2wk</span>
                  <span className="about-page-stat-label">Average delivery</span>
                </div>
                <div className="about-page-stat">
                  <span className="about-page-stat-num">7yr</span>
                  <span className="about-page-stat-label">In Wollongong</span>
                </div>
                <div className="about-page-stat">
                  <span className="about-page-stat-num">0</span>
                  <span className="about-page-stat-label">Templates used</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Values ───────────────────────────────────────────── */}
      <section className="about-page-values">
        <div className="container">
          <div className="about-page-values-header">
            <h2 className="about-page-values-h2">How I work.</h2>
          </div>
          <div className="about-page-values-list">
            {values.map(({ name, desc }, i) => (
              <div key={name} className="about-page-value">
                <span className="about-page-value-num">{String(i + 1).padStart(2, "0")}</span>
                <div className="about-page-value-name">{name}</div>
                <p className="about-page-value-desc">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────────────────── */}
      <section className="page-cta">
        <div className="container">
          <div className="page-cta-inner">
            <span className="section-label">Work together</span>
            <h2 className="page-cta-h2">Ready to get started?</h2>
            <p className="page-cta-sub">
              Tell me what you need. I&apos;ll get back to you within 24 hours — no pitch deck, no obligation.
            </p>
            <div className="page-cta-links">
              <a href="mailto:jyesanjurjo12@gmail.com" className="page-cta-link">
                jyesanjurjo12@gmail.com
              </a>
              <a href="tel:+61402803830" className="page-cta-link">
                0402 803 830
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── Footer ───────────────────────────────────────────── */}
      <footer className="site-footer">
        <div className="site-footer-inner">
          <span className="site-footer-logo">SanjStudio</span>
          <nav className="site-footer-nav">
            <a href="/">Home</a>
            <a href="/services">Services</a>
            <a href="/#contact">Contact</a>
          </nav>
          <span className="site-footer-copy">© 2026 SanjStudio · Wollongong</span>
        </div>
      </footer>
    </>
  );
}

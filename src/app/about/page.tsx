import { Nav } from "@/components/Nav";

const values = [
  {
    name: "Keep it simple.",
    desc: "No bloated proposals, no jargon, no unnecessary complexity. You tell me what you need — I build it, clearly.",
  },
  {
    name: "Move fast.",
    desc: "Most agencies take months. I take two weeks. Every project is scoped properly so there are no surprises and no delays.",
  },
  {
    name: "Own your craft.",
    desc: "I come from a marketing and production background. I understand how a site needs to look, feel and perform — not just technically, but commercially.",
  },
  {
    name: "No middlemen.",
    desc: "You work directly with me. I write the code, I design the pages, I handle the launch. One person accountable for everything.",
  },
];

export default function AboutPage() {
  return (
    <>
      <Nav />

      {/* ── Hero ─────────────────────────────────────────── */}
      <section className="ap-hero">
        <div className="container">
          <div className="ap-hero-inner">
            <div className="ap-hero-meta">
              <span className="ap-hero-tag">Jye Sanjurjo</span>
              <span className="ap-hero-tag ap-hero-tag--dim">22 · Wollongong, NSW</span>
            </div>
            <h1 className="ap-hero-h1">
              One person.<br />
              <em>All the work.</em>
            </h1>
            <p className="ap-hero-sub">
              I build websites for businesses that want something real — not a template,
              not a drag-and-drop job, not a site that looks like everyone else&apos;s.
            </p>
          </div>
        </div>
      </section>

      {/* ── Story ────────────────────────────────────────── */}
      <section className="ap-story">
        <div className="container ap-story-grid">
          <div className="ap-story-left">
            <div className="ap-story-label">Background</div>
            <h2 className="ap-story-h2">
              Marketing,<br />production,<br />and code.
            </h2>
          </div>
          <div className="ap-story-right">
            <p>
              I&apos;m Jye — a 22-year-old from Wollongong with a passion for marketing,
              production and the way things look online. SanjStudio started because I was
              frustrated watching local businesses settle for cookie-cutter websites that
              didn&apos;t do them justice.
            </p>
            <p>
              My background sits across marketing and production — which means I don&apos;t
              just build sites that function. I build sites that communicate. I think about
              what your customer sees first, what makes them trust you, and what makes them
              pick up the phone.
            </p>
            <p>
              Every project I take on is custom-coded from the ground up — no builders,
              no Webflow, no Wix. Real HTML, CSS and JavaScript, deployed to Vercel,
              built to last. And because it&apos;s just me, you always know who to call.
            </p>
            <div className="ap-story-stats">
              <div className="ap-story-stat">
                <span className="ap-story-stat-num">2wk</span>
                <span className="ap-story-stat-label">Average delivery</span>
              </div>
              <div className="ap-story-stat">
                <span className="ap-story-stat-num">7yr</span>
                <span className="ap-story-stat-label">Serving Wollongong</span>
              </div>
              <div className="ap-story-stat">
                <span className="ap-story-stat-num">0</span>
                <span className="ap-story-stat-label">Templates used</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Values ───────────────────────────────────────── */}
      <section className="ap-values">
        <div className="container">
          <div className="ap-values-header">
            <h2 className="ap-values-h2">How I work.</h2>
          </div>
          <div className="ap-values-list">
            {values.map(({ name, desc }, i) => (
              <div key={name} className="ap-value">
                <span className="ap-value-num">{String(i + 1).padStart(2, "0")}</span>
                <div className="ap-value-name">{name}</div>
                <p className="ap-value-desc">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────────────── */}
      <section className="sp-cta">
        <div className="container">
          <h2 className="sp-cta-h2">Ready to get started?</h2>
          <p className="sp-cta-sub">
            Tell me what you need. I&apos;ll get back to you within 24 hours — no pitch deck, no obligation.
          </p>
          <div className="sp-cta-links">
            <a href="mailto:jyesanjurjo12@gmail.com" className="btn btn-dark">jyesanjurjo12@gmail.com</a>
            <a href="tel:+61402803830" className="sp-cta-phone">0402 803 830</a>
          </div>
        </div>
      </section>

      {/* ── Footer ───────────────────────────────────────── */}
      <footer className="footer">
        <div className="container">
          <div className="footer-grid">
            <div>
              <div className="footer-logo">SanjStudio</div>
              <div className="footer-logo-sub">Wollongong Studio</div>
              <p className="footer-tagline">
                Custom websites for Wollongong<br />
                businesses. Built right, every time.
              </p>
            </div>
            <div>
              <div className="footer-col-title">Navigation</div>
              <ul className="footer-links">
                <li><a href="/">Home</a></li>
                <li><a href="/services">Services</a></li>
                <li><a href="/about">About</a></li>
                <li><a href="/#contact">Contact</a></li>
              </ul>
            </div>
            <div>
              <div className="footer-col-title">Contact</div>
              <ul className="footer-links">
                <li><a href="mailto:jyesanjurjo12@gmail.com">jyesanjurjo12@gmail.com</a></li>
                <li><a href="tel:+61402803830">0402 803 830</a></li>
                <li>Wollongong, NSW</li>
              </ul>
            </div>
          </div>
          <div className="footer-bottom">
            <p className="footer-copy">© 2026 SanjStudio Pty Ltd. All rights reserved.</p>
            <p className="footer-copy">Wollongong-built · Custom code · No templates</p>
          </div>
        </div>
      </footer>
    </>
  );
}

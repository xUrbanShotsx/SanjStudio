import { Nav } from "@/components/Nav";

const services = [
  {
    num: "01",
    name: "Design",
    theme: "light",
    desc: "We conceive the visual direction — layout, hierarchy, colour, and experience. Everything about how your site should look and feel, mapped out before a line of code is written. No guesswork, no revisions after the fact.",
    tags: ["Visual direction", "Layout", "UX & flow", "Wireframes"],
  },
  {
    num: "02",
    name: "Brand",
    theme: "orange",
    desc: "Your identity before the website. We create the colour palette, typography system, logo, and overall feel that makes your business recognisable and memorable — built to work across every surface, physical and digital.",
    tags: ["Logo design", "Colour palette", "Typography", "Brand guidelines"],
  },
  {
    num: "03",
    name: "Create",
    theme: "dark",
    desc: "We build everything we design. Custom-coded websites, logos, and brand assets — deployed to Vercel, tested on every screen, ready to launch. No templates, no builders. Every project complete in two weeks.",
    tags: ["Custom code", "Vercel deploy", "2-week delivery", "Full handover"],
  },
];

const marqueeUnit = "Design — Brand — Create — Wollongong — Est. 2019 — ";

export default function Home() {
  return (
    <>
      <Nav />

      {/* ── Hero ─────────────────────────────────────────────── */}
      <section className="home-hero">
        <div className="home-hero-text">
          <span className="home-hero-label">Wollongong · Est. 2019</span>
          <h1 className="home-hero-h1">
            <span>Design,</span>
            <em className="hero-h1-accent">brand,</em>
            <span>and create.</span>
          </h1>
          <div className="home-hero-footer">
            <p className="home-hero-desc">
              A Wollongong studio building brand identities and websites for businesses
              that want to stand out. Custom-coded, no templates, complete in two weeks.
            </p>
            <a href="#contact" className="home-hero-cta">Start a project ↗</a>
          </div>
        </div>

        {/* Abstract art frame — vivid orange */}
        <div className="home-hero-frame" aria-hidden="true">
          <span className="hero-frame-glyph">S</span>
          <div className="hero-frame-hline hero-frame-hline--top" />
          <div className="hero-frame-hline hero-frame-hline--mid" />
          <div className="hero-frame-hline hero-frame-hline--low" />
          <div className="hero-frame-vline" />
          <div className="hero-frame-ring hero-frame-ring--lg" />
          <div className="hero-frame-ring hero-frame-ring--sm" />
          <div className="hero-frame-dot" />
          <span className="hero-frame-caption">SanjStudio — Est. 2019</span>
        </div>
      </section>

      {/* ── Marquee strip ────────────────────────────────────── */}
      <div className="home-marquee" aria-hidden="true">
        <div className="marquee-track">
          <span>{marqueeUnit.repeat(8)}</span>
          <span aria-hidden="true">{marqueeUnit.repeat(8)}</span>
        </div>
      </div>

      {/* ── Services — 3 colour panels ───────────────────────── */}
      <div className="home-panels" id="services">
        {services.map(({ num, name, theme, desc, tags }, i) => (
          <div key={num} className={`svc-panel svc-panel--${theme}`}>
            <div className="svc-panel-inner">
              <div className="svc-panel-header">
                <span className="svc-panel-num">{num}</span>
                <h2 className="svc-panel-name">{name}</h2>
              </div>
              <div className="svc-panel-body">
                <p className="svc-panel-desc">{desc}</p>
                <ul className="svc-panel-tags">
                  {tags.map(t => <li key={t}>{t}</li>)}
                </ul>
              </div>
              {i === services.length - 1 && (
                <div className="svc-panel-footer">
                  <a href="/services" className="svc-panel-link">Full service breakdown →</a>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* ── About ────────────────────────────────────────────── */}
      <section className="home-about" id="about">
        <div className="container">
          <div className="home-about-grid">
            <div className="home-about-left">
              <div className="home-about-frame" aria-hidden="true">
                <span className="about-frame-glyph">J</span>
                <div className="about-frame-hline" />
                <div className="about-frame-dot" />
                <span className="about-frame-label">Jye Sanjurjo / 22</span>
              </div>
              <h2 className="home-about-h2">
                One person.<br />All the work.
              </h2>
              <div className="home-about-stats">
                <div>
                  <span className="stat-n">2wk</span>
                  <span className="stat-l">Average delivery</span>
                </div>
                <div>
                  <span className="stat-n">0</span>
                  <span className="stat-l">Templates used</span>
                </div>
                <div>
                  <span className="stat-n">100%</span>
                  <span className="stat-l">Custom code</span>
                </div>
              </div>
            </div>
            <div className="home-about-right">
              <p>
                I&apos;m Jye — 22, from Wollongong, with a background in marketing and
                production. SanjStudio exists because local businesses deserve more than
                adapted templates and drag-and-drop builders.
              </p>
              <p>
                My background means I think commercially first. I understand what your
                customer sees when they land on your site, what builds trust, and what
                makes them pick up the phone.
              </p>
              <p>
                Every project is custom-coded from the ground up. You work directly with me —
                no account managers, no outsourcing, no middlemen.
              </p>
              <a href="/about" className="home-about-link">More about me →</a>
            </div>
          </div>
        </div>
      </section>

      {/* ── Contact ──────────────────────────────────────────── */}
      <section className="home-contact" id="contact">
        <div className="container">
          <div className="home-contact-inner">
            <span className="home-contact-label">Get in touch</span>
            <h2 className="home-contact-h2">Let&apos;s work<br />together.</h2>
            <p className="home-contact-sub">
              Tell me about your project. I respond within 24 hours — no obligation.
            </p>
            <div className="home-contact-links">
              <a href="mailto:jyesanjurjo12@gmail.com" className="home-contact-link">
                jyesanjurjo12@gmail.com
              </a>
              <a href="tel:+61402803830" className="home-contact-link">
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
            <a href="/services">Services</a>
            <a href="/about">About</a>
            <a href="#contact">Contact</a>
          </nav>
          <span className="site-footer-copy">© 2026 SanjStudio · Wollongong</span>
        </div>
      </footer>
    </>
  );
}

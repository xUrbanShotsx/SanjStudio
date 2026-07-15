import Nav from "@/components/Nav";

const services = [
  {
    num: "01",
    name: "Design",
    tagline: "How it looks before it's built.",
    desc: "Good design isn't decoration — it's the difference between a site people trust and one they leave immediately. We map the full experience before anything goes on screen: user flow, layout logic, visual hierarchy, and how each page moves visitors toward what matters. When you see the first design, nothing is guesswork.",
    includes: [
      "Discovery & brief",
      "User flow mapping",
      "Wireframes & layout concepts",
      "Visual direction — typography, colour, spacing",
      "Desktop & mobile design files",
      "Revision rounds until it's right",
    ],
  },
  {
    num: "02",
    name: "Brand",
    tagline: "Your identity, built from scratch.",
    desc: "Before anyone reads a word on your website, they've already formed an impression. Brand is what controls that impression — the colours, the typefaces, the logo, the feel. We build identities that are cohesive, confident, and built to last across every surface your business touches.",
    includes: [
      "Logo design (primary + variations)",
      "Colour palette with usage guidelines",
      "Typography system",
      "Brand guidelines document",
      "Business card & stationery concepts",
      "Social media kit",
    ],
  },
  {
    num: "03",
    name: "Create",
    tagline: "Design and brand, built into reality.",
    desc: "We build everything we design. Custom-coded websites using real HTML, CSS, and JavaScript — no Webflow, no Wix, no builders. Deployed to Vercel, fast, tested on every device, and handed over completely. You own the code. Every project is live within two weeks of sign-off.",
    includes: [
      "Custom-coded website (Next.js / HTML)",
      "Mobile-first, fully responsive",
      "SEO foundations built in",
      "Vercel deployment — live in 2 weeks",
      "Full code handover — you own it",
      "12-month warranty on all builds",
    ],
  },
];

export default function ServicesPage() {
  return (
    <>
      <Nav />

      {/* ── Hero ─────────────────────────────────────────────── */}
      <section className="svc-page-hero">
        <div className="svc-page-hero-inner">
          <span className="svc-page-hero-label">Services</span>
          <h1 className="svc-page-hero-h1">
            Design, brand,<br />and create.
          </h1>
          <p className="svc-page-hero-desc">
            Three disciplines, one studio. Each project is scoped to what you actually need —
            whether that&apos;s all three or just one.
          </p>
        </div>
      </section>

      {/* ── Service detail ───────────────────────────────────── */}
      <section className="svc-page-detail">
        <div className="container">
          {services.map(({ num, name, tagline, desc, includes }) => (
            <div key={num} className="svc-detail-item">
              <div className="svc-detail-left">
                <span className="svc-detail-num">{num}</span>
                <h2 className="svc-detail-name">{name}</h2>
                <p className="svc-detail-tagline">{tagline}</p>
              </div>
              <div className="svc-detail-right">
                <p className="svc-detail-desc">{desc}</p>
                <div>
                  <p className="svc-detail-includes-label">What&apos;s included</p>
                  <ul className="svc-detail-includes">
                    {includes.map(item => <li key={item}>{item}</li>)}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────────────────── */}
      <section className="page-cta">
        <div className="container">
          <div className="page-cta-inner">
            <span className="section-label">Get started</span>
            <h2 className="page-cta-h2">Not sure where to start?</h2>
            <p className="page-cta-sub">
              Tell me about your business and what you need. I&apos;ll come back with a clear scope and a straightforward price.
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
            <a href="/about">About</a>
            <a href="/#contact">Contact</a>
          </nav>
          <span className="site-footer-copy">© 2026 SanjStudio · Wollongong</span>
        </div>
      </footer>
    </>
  );
}

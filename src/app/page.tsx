import { Nav } from "@/components/Nav";
import { ScrollReveal } from "@/components/ScrollReveal";
import { Marquee } from "@/components/Marquee";

export default function Home() {
  return (
    <>
      <Nav />

      {/* ── Hero ─────────────────────────────────────────── */}
      <section className="hero">
        <video
          className="hero-video"
          autoPlay
          muted
          loop
          playsInline
          aria-hidden="true"
        >
          <source src="/Herobackdrop.mp4" type="video/mp4" />
        </video>
        <div className="hero-video-overlay" />
        <div className="hero-inner">
          <div className="hero-text">
            <div className="hero-context fade-up delay-1">
              <span className="hero-context-rule" />
              <span className="hero-context-label">Wollongong · Est. 2019 · Custom Websites</span>
            </div>
            <h1 className="hero-h1 fade-up delay-2">
              <span className="hero-h1-line">Websites</span>
              <span className="hero-h1-line">built</span>
              <span className="hero-h1-line">right.</span>
            </h1>
            <div className="hero-actions fade-up delay-3">
              <a href="#contact" className="btn btn-primary">Start your project</a>
              <a href="#services" className="hero-text-link">Explore our work ↓</a>
            </div>
          </div>
        </div>

        <div className="scroll-indicator">
          <span className="scroll-indicator-label">Scroll</span>
          <span className="scroll-indicator-line" />
        </div>
      </section>

      {/* ── Marquee ──────────────────────────────────────── */}
      <Marquee />

      {/* ── Services ─────────────────────────────────────── */}
      <section className="section services-light" id="services">
        <div className="container">
          <div className="services-header">
            <span className="services-label" style={{ marginBottom: 0 }}>Our Services</span>
            <p className="services-intro">Three focused offerings. Each built from scratch, to spec.</p>
          </div>
          <div className="service-frames">
            {[
              {
                index: "01",
                name: "Informational Websites",
                desc: "Clean, fast, purpose-built sites that tell your story and convert visitors into customers. Designed around your brand — no generic layouts, no page builders.",
                tags: ["Brand identity", "Contact & enquiry", "SEO-ready"],
              },
              {
                index: "02",
                name: "Tradies & Builders",
                desc: "Purpose-built sites for trades and construction. Showcase your work, generate local leads, and stand out from the directory listings.",
                tags: ["Project galleries", "Local SEO", "Lead capture"],
              },
              {
                index: "03",
                name: "Boutique Real Estate",
                desc: "Custom property sites with CRM integration. Listing feeds, enquiry management, and agent profiles — built for agencies that want something beyond the template portals.",
                tags: ["CRM integration", "Live listings", "Enquiry management"],
              },
            ].map(({ index, name, desc, tags }, i) => (
              <ScrollReveal key={name} delay={i * 80}>
                <div className="service-frame">
                  <div className="service-frame-index">{index}</div>
                  <div className="service-frame-body">
                    <h3 className="service-frame-name">{name}</h3>
                    <p className="service-frame-desc">{desc}</p>
                    <div className="service-frame-tags">
                      {tags.map(t => <span key={t} className="service-frame-tag">{t}</span>)}
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Statement ─────────────────────────────────────── */}
      <section className="statement-section">
        <video
          className="statement-video"
          autoPlay
          muted
          loop
          playsInline
          aria-hidden="true"
        >
          <source src="/Secondvid.mp4" type="video/mp4" />
        </video>
        <div className="statement-video-overlay" />
        <div className="statement-inner">
          <span className="gold-line" />
          <h2 className="statement-h2" data-reveal>
            <span className="thin">Templates are</span><br />
            <span className="accent">a shortcut</span><br />
            <span className="thin">you&apos;ll regret.</span>
          </h2>
          <p style={{ fontSize: "1.0625rem", fontWeight: 300, color: "rgba(255,255,255,0.4)", maxWidth: "48ch", lineHeight: 1.75 }}>
            Every template-built site looks like every other template-built site.
            We write real code for real businesses — because your customers can tell the difference.
          </p>
          <div className="statement-meta">
            <div className="statement-meta-line" />
            <span className="statement-meta-text">Custom code · Wollongong studio · Since 2019</span>
          </div>
        </div>
      </section>

      {/* ── Studio / About ───────────────────────────────── */}
      <section className="studio-section" id="about">

        <div className="container studio-container">

          {/* Meta row */}
          <div className="studio-meta-row" data-reveal-group>
            <span className="studio-meta-tag" data-reveal-child>Wollongong, NSW</span>
            <div className="studio-meta-rule" data-line />
            <span className="studio-meta-tag studio-meta-tag--dim" data-reveal-child>Est. 2019</span>
          </div>

          {/* Massive headline */}
          <h2 className="studio-editorial-h2">
            <span className="studio-h2-line" data-reveal>The Illawarra&apos;s</span>
            <span className="studio-h2-line studio-h2-line--push" data-reveal>studio for</span>
            <span className="studio-h2-line studio-h2-line--serif" data-reveal>serious websites.</span>
          </h2>

          {/* Process steps */}
          <div className="studio-steps-row" data-reveal-group>
            {[
              {
                num: "01",
                name: "Discover.",
                desc: "Your goals, your customers, your competitors — understood before a single pixel is designed.",
              },
              {
                num: "02",
                name: "Design & Build.",
                desc: "Every element crafted for your brand. Real code, tested on every screen size.",
              },
              {
                num: "03",
                name: "Launch.",
                desc: "Full handover, walk-through training, and we stay available long after go-live.",
              },
            ].map(({ num, name, desc }) => (
              <div key={num} className="studio-step" data-reveal-child>
                <span className="studio-step-num">{num}</span>
                <div className="studio-step-name">{name}</div>
                <p className="studio-step-desc">{desc}</p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ── Deliverables ─────────────────────────────────── */}
      <section className="deliverables-section" id="deliverables">
        <div className="container">
          <div className="deliverables-header-row">
            <h2 className="deliverables-heading" data-reveal>Every project<br /><em>includes.</em></h2>
            <p className="deliverables-sub">Eight things in every build — no add-ons, no negotiation.</p>
          </div>
          <div className="deliverables-list" data-reveal-group>
            {[
              { name: "Custom design",     desc: "Built around your brand identity — not adapted from a theme." },
              { name: "Hand-coded",        desc: "Real HTML, CSS and JavaScript. No Webflow, no Wix, no builders." },
              { name: "Mobile-first",      desc: "Designed for phones first. Every layout tested on every screen size." },
              { name: "SEO foundations",   desc: "Structured for search from day one. Fast, semantic, crawlable." },
              { name: "Speed optimised",   desc: "Sub-2-second load targets. Performance is part of the build, not an afterthought." },
              { name: "You own it",        desc: "Full code handover. No lock-in, no ongoing platform fees to us." },
              { name: "Launch support",    desc: "We go live together. Walk-through, training, and a full handover session." },
              { name: "12-month warranty", desc: "We fix anything that breaks in the first year. No caveats." },
            ].map(({ name, desc }, i) => (
              <div key={name} className="deliverable-item" data-reveal-child>
                <span className="deliverable-index">{String(i + 1).padStart(2, "0")}</span>
                <div className="deliverable-name">{name}</div>
                <p className="deliverable-desc">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* ── Contact ──────────────────────────────────────── */}
      <section className="contact-section" id="contact">
        <div className="container">
          <div className="contact-solo">

            <h2 className="contact-heading" data-reveal>
              Let&apos;s build<br />something<br />real.
            </h2>
            <p className="contact-sub" data-reveal>
              Tell us what you need. We respond within 24 hours — no obligation, no pitch deck.
            </p>
            <div className="contact-links" data-reveal>
              <a href="mailto:jyesanjurjo12@gmail.com" className="contact-email">
                jyesanjurjo12@gmail.com
              </a>
              <a href="tel:+61402803830" className="contact-email">
                0402 803 830
              </a>
            </div>

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
                <li><a href="#services">Services</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#contact">Contact</a></li>
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

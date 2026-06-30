import { Nav } from "@/components/Nav";
import { ScrollReveal } from "@/components/ScrollReveal";
import { ContactForm } from "@/components/ContactForm";
import { Marquee } from "@/components/Marquee";
import { HeroCanvas } from "@/components/HeroCanvas";

export default function Home() {
  return (
    <>
      <Nav />

      {/* ── Hero ─────────────────────────────────────────── */}
      <section className="hero">
        <HeroCanvas />
        <div className="hero-inner">
          <div className="hero-text">
            <h1 className="hero-h1 fade-up delay-1">
              <span className="hero-h1-line">Websites</span>
              <span className="hero-h1-line">built</span>
              <span className="hero-h1-line">right.</span>
            </h1>
            <p className="hero-sub fade-up delay-2">
              Custom-built for small businesses across Wollongong
              and the Illawarra. No templates, no shortcuts.
            </p>
            <div className="hero-actions fade-up delay-3">
              <a href="#contact" className="btn btn-primary">Start your project</a>
              <a href="#process" className="btn btn-outline-dark">How we work</a>
            </div>
          </div>

          <div className="hero-visual fade-up delay-4">
            <div className="browser-frame">
              <div className="browser-chrome">
                <span className="b-dot b-dot-r" /><span className="b-dot b-dot-y" /><span className="b-dot b-dot-g" />
                <div className="browser-url" />
              </div>
              <div className="browser-screen">
                <div className="mini-nav-bar">
                  <div className="mini-logo-pill" />
                  <div className="mini-nav-dots">
                    <div className="mini-nav-dot" /><div className="mini-nav-dot" /><div className="mini-nav-dot" />
                  </div>
                </div>
                <div className="mini-hero-band">
                  <div className="mini-h" /><div className="mini-h2" /><div className="mini-cta-bar" />
                </div>
                <div className="mini-content">
                  {[0, 1, 2].map(i => (
                    <div key={i} className="mini-card">
                      <div className="mini-card-h" /><div className="mini-card-t" /><div className="mini-card-t2" />
                    </div>
                  ))}
                </div>
                <div className="mini-footer" />
              </div>
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
      <section className="section" id="services">
        <div className="container">
          <div className="services-label">Services</div>
          {[
            {
              name: "Custom Website Design",
              desc: "Designed ground-up for your brand. Every layout, typeface, and detail built to work — not borrowed from a template.",
            },
            {
              name: "E-Commerce",
              desc: "WooCommerce and Shopify stores engineered to convert. Fast, intuitive, built for how people actually shop.",
            },
            {
              name: "Care & Maintenance",
              desc: "We stay on after launch. Monthly care keeps your site fast, secure, and current.",
            },
          ].map(({ name, desc }, i) => (
            <ScrollReveal key={name} delay={i * 60}>
              <div className="service-row">
                <div className="service-name">{name}</div>
                <p className="service-desc">{desc}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* ── Statement ─────────────────────────────────────── */}
      <section className="statement-section">
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
      <section className="section" id="about">
        <div className="container">
          <div className="studio-grid">
            <div className="studio-left">
              <ScrollReveal>
                <p className="studio-location">Wollongong, NSW</p>
                <h2 className="studio-headline" data-reveal>
                  The Illawarra&apos;s studio for businesses that take their
                  website seriously.
                </h2>
                <p className="studio-body">
                  We&apos;ve been building custom websites from Wollongong since 2019.
                  Not page-builders, not drag-and-drop — real code, built to perform,
                  owned by you. Every project is handled personally. Every site is built
                  from scratch.
                </p>
              </ScrollReveal>
            </div>
            <div className="studio-right">
              <ScrollReveal delay={80}>
                {[
                  { stat: "50+",    detail: "websites launched" },
                  { stat: "2019",   detail: "founded in Wollongong" },
                  { stat: "2–4wk",  detail: "average from brief to live" },
                  { stat: "100%",   detail: "custom — no templates, ever" },
                  { stat: "Local",  detail: "same-timezone, same-city support" },
                ].map(({ stat, detail }) => (
                  <div key={stat} className="studio-fact">
                    <span className="studio-fact-stat">{stat}</span>
                    <span className="studio-fact-detail">{detail}</span>
                  </div>
                ))}
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      {/* ── Deliverables ─────────────────────────────────── */}
      <section className="section-soft" id="deliverables">
        <div className="container">
          <div className="deliverables-header">
            <span className="services-label" style={{ marginBottom: 0 }}>Every project includes</span>
          </div>
          <div className="deliverables-grid">
            {[
              { name: "Custom design",       desc: "Built around your brand identity — not adapted from a theme." },
              { name: "Hand-coded",          desc: "Real HTML, CSS and JavaScript. No Webflow, no Wix, no builders." },
              { name: "Mobile-first",        desc: "Designed for phones first. Every layout tested on every screen size." },
              { name: "SEO foundations",     desc: "Structured for search from day one. Fast, semantic, crawlable." },
              { name: "Speed optimised",     desc: "Sub-2-second load targets. Performance is part of the build, not an afterthought." },
              { name: "You own it",          desc: "Full code handover. No lock-in, no ongoing platform fees to us." },
              { name: "Launch support",      desc: "We go live together. Walk-through, training, and a full handover session." },
              { name: "12-month warranty",   desc: "We fix anything that breaks in the first year. No caveats." },
            ].map(({ name, desc }, i) => (
              <ScrollReveal key={name} delay={i * 40}>
                <div className="deliverable-row">
                  <div className="deliverable-name">{name}</div>
                  <p className="deliverable-desc">{desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Process ──────────────────────────────────────── */}
      <section className="section-dark" id="process">
        <div className="container">
          <div className="process-editorial" data-reveal-group>
            {[
              {
                name: "Discover.",
                desc: "We start by listening. Your customers, your goals, your competitors — understood before a single pixel is designed.",
              },
              {
                name: "Design & Build.",
                desc: "Every element crafted specifically for your brand. Real code, tested on every screen, not shipped until it's right.",
              },
              {
                name: "Launch.",
                desc: "Go-live is a handshake, not a drop-off. Full handover, training, and we stay available after delivery day.",
              },
            ].map(({ name, desc }) => (
              <div key={name} className="process-editorial-row" data-reveal-child>
                <div className="process-editorial-name">{name}</div>
                <p className="process-editorial-desc">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Contact ──────────────────────────────────────── */}
      <section className="section-dark" id="contact" style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}>
        <div className="container">
          <div className="contact-grid">
            <ScrollReveal>
              <h2 className="contact-heading" data-reveal>
                Let&apos;s build<br />something real.
              </h2>
              <p className="contact-sub">
                Tell us what you need. We&apos;ll respond within 24 hours —
                no obligation, no pitch deck.
              </p>
              <div className="contact-details">
                {[
                  { label: "Email",   value: "hello@sanjstudio.com.au" },
                  { label: "Phone",   value: "+61 4XX XXX XXX" },
                  { label: "Studio",  value: "Wollongong, NSW" },
                ].map(({ label, value }) => (
                  <div key={label} className="contact-info-block">
                    <div className="contact-info-label">{label}</div>
                    <div className="contact-info-value">{value}</div>
                  </div>
                ))}
              </div>
            </ScrollReveal>

            <ScrollReveal delay={100}>
              <ContactForm />
            </ScrollReveal>
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
                <li><a href="#process">Process</a></li>
                <li><a href="#contact">Contact</a></li>
              </ul>
            </div>
            <div>
              <div className="footer-col-title">Contact</div>
              <ul className="footer-links">
                <li><a href="mailto:hello@sanjstudio.com.au">hello@sanjstudio.com.au</a></li>
                <li><a href="tel:+61400000000">+61 4XX XXX XXX</a></li>
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

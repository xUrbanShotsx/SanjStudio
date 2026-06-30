import { Nav } from "@/components/Nav";

const packs = [
  {
    index: "01",
    name: "Tradie & Builder Pack",
    tagline: "Built to win local jobs.",
    who: "Plumbers, electricians, builders, landscapers, concreters, roofers.",
    desc: "Your customers Google before they call. This site makes sure you're the one they find — and the one they trust when they do.",
    includes: [
      "Custom homepage with project gallery",
      "Services & coverage area pages",
      "Google Maps & local SEO setup",
      "Click-to-call & enquiry capture",
      "Before/after photo showcase",
      "Deployed to Vercel — live in 2 weeks",
    ],
  },
  {
    index: "02",
    name: "Beauty & Wellness Pack",
    tagline: "A site as polished as your work.",
    who: "Salons, lash techs, skin clinics, brow bars, beauty therapists, spas.",
    desc: "Your clients book on feel. A premium website signals the quality of your service before they've walked through the door.",
    includes: [
      "Brand-matched design with your palette",
      "Service menu & pricing pages",
      "Online booking integration",
      "Instagram feed or portfolio gallery",
      "Team & about section",
      "Deployed to Vercel — live in 2 weeks",
    ],
  },
  {
    index: "03",
    name: "Real Estate Pack",
    tagline: "Stand out from the portals.",
    who: "Boutique agencies, property developers, buyer's agents, strata managers.",
    desc: "Listing portals commoditise agents. A custom site gives you a presence that's entirely yours — and converts visitors into genuine enquiries.",
    includes: [
      "Custom agency or personal brand site",
      "Live listing feed (REA / Domain integration)",
      "Agent & team profile pages",
      "Suburb & property type landing pages",
      "Appraisal & enquiry capture forms",
      "Deployed to Vercel — live in 2 weeks",
    ],
  },
  {
    index: "04",
    name: "Hospitality Pack",
    tagline: "Fill more seats.",
    who: "Cafés, restaurants, bars, catering companies, food trucks, event venues.",
    desc: "People decide where to eat before they leave the house. This site makes the decision easy — and makes your venue look the part.",
    includes: [
      "Full menu display (PDF or live pages)",
      "Reservation & event enquiry forms",
      "Story, team & atmosphere pages",
      "Google Reviews integration",
      "Location, hours & map embed",
      "Deployed to Vercel — live in 2 weeks",
    ],
  },
  {
    index: "05",
    name: "Health & Allied Health Pack",
    tagline: "Build trust before the first appointment.",
    who: "Physiotherapists, chiropractors, psychologists, yoga studios, nutritionists.",
    desc: "Health decisions are personal. A site that communicates warmth, expertise and clarity turns browsers into bookings.",
    includes: [
      "Condition & treatment service pages",
      "Practitioner bios & credentials",
      "Online booking or calendar link",
      "Patient FAQs & what to expect",
      "Health fund & rebate information",
      "Deployed to Vercel — live in 2 weeks",
    ],
  },
  {
    index: "06",
    name: "Professional Services Pack",
    tagline: "Credibility at a glance.",
    who: "Lawyers, accountants, financial advisers, mortgage brokers, consultants.",
    desc: "Your clients are trusting you with serious decisions. Your website should match that weight — clear, authoritative and reassuring.",
    includes: [
      "Practice area or service breakdown pages",
      "Team & credentials section",
      "Case study or outcome highlights",
      "Compliance-friendly contact forms",
      "Privacy policy & disclaimer pages",
      "Deployed to Vercel — live in 2 weeks",
    ],
  },
];

export default function ServicesPage() {
  return (
    <>
      <Nav />

      {/* ── Page Hero ─────────────────────────────────────── */}
      <section className="sp-hero">
        <div className="container">
          <div className="sp-hero-inner">
            <span className="sp-hero-label">Service Packs</span>
            <h1 className="sp-hero-h1">
              Every industry.<br />
              <em>One standard.</em>
            </h1>
            <p className="sp-hero-sub">
              Six focused packages — each built from scratch, custom-coded, and
              deployed to Vercel. Every site is complete and live within 2 weeks.
            </p>
          </div>
        </div>
      </section>

      {/* ── Packs ─────────────────────────────────────────── */}
      <section className="sp-packs">
        <div className="container">
          {packs.map(({ index, name, tagline, who, desc, includes }) => (
            <div key={index} className="sp-pack">
              <div className="sp-pack-header">
                <span className="sp-pack-index">{index}</span>
                <div className="sp-pack-title-group">
                  <h2 className="sp-pack-name">{name}</h2>
                  <span className="sp-pack-tagline">{tagline}</span>
                </div>
              </div>
              <div className="sp-pack-body">
                <div className="sp-pack-left">
                  <p className="sp-pack-who"><strong>Who it&apos;s for:</strong> {who}</p>
                  <p className="sp-pack-desc">{desc}</p>
                </div>
                <ul className="sp-pack-includes">
                  {includes.map((item) => (
                    <li key={item} className="sp-pack-item">
                      <span className="sp-pack-tick">→</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── CTA ───────────────────────────────────────────── */}
      <section className="sp-cta">
        <div className="container">
          <h2 className="sp-cta-h2">Not sure which pack fits?</h2>
          <p className="sp-cta-sub">
            Tell us about your business and we&apos;ll recommend the right starting point.
            No obligation — we respond within 24 hours.
          </p>
          <div className="sp-cta-links">
            <a href="mailto:jyesanjurjo12@gmail.com" className="btn btn-dark">jyesanjurjo12@gmail.com</a>
            <a href="tel:+61402803830" className="sp-cta-phone">0402 803 830</a>
          </div>
        </div>
      </section>

      {/* ── Footer ────────────────────────────────────────── */}
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
                <li><a href="/#about">About</a></li>
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

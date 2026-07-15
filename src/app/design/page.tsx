"use client";
import { useState } from "react";

const pillars = [
  { num: "01", title: "Research", desc: "Your audience, competitors, and goals — understood before a single pixel is placed." },
  { num: "02", title: "Layout", desc: "Every element placed with intention. Hierarchy that guides visitors, not confuses them." },
  { num: "03", title: "Visual", desc: "Type, colour, spacing — built around your brand, not pulled from someone else's preset." },
  { num: "04", title: "Motion", desc: "Animation that feels natural and purposeful. Nothing that distracts from the message." },
];

export default function DesignPage() {
  const [active, setActive] = useState<number | null>(null);

  return (
    <div className="service-page">
      <header className="landing-nav" style={{ background: "#fff", borderBottomColor: "rgba(10,10,10,0.08)" }}>
        <a href="/"><img src="/Sanjlogo.png" alt="Sanj Studio" className="landing-logo-img" style={{ height: "60px", filter: "invert(1)" }} /></a>
        <a href="/contact" className="landing-quote landing-quote--dark">FREE QUOTE</a>
      </header>

      <main className="sp-main">
        <div className="sp-left">
          <span className="sp-num">01</span>
          <h1 className="sp-h1">Design.</h1>
          <p className="sp-lead">Every site starts with a design made for your business — not a template someone else already used.</p>
          <ul className="sp-includes">
            <li>Discovery & brief</li>
            <li>Wireframes & layouts</li>
            <li>Visual direction — type, colour, spacing</li>
            <li>Desktop & mobile files</li>
            <li>Revision rounds until it's right</li>
          </ul>
          <div className="sp-footer-nav">
            <a href="/" className="service-back">← Home</a>
            <a href="/scale" className="service-next">Scale →</a>
          </div>
        </div>

        <div className="sp-right">
          <p className="sp-right-label">The process</p>
          <div className="sp-pillars">
            {pillars.map((p, i) => (
              <div
                key={i}
                className={`sp-pillar${active === i ? " sp-pillar--active" : ""}`}
                onMouseEnter={() => setActive(i)}
                onMouseLeave={() => setActive(null)}
              >
                <div className="sp-pillar-row">
                  <span className="sp-pillar-num">{p.num}</span>
                  <span className="sp-pillar-title">{p.title}</span>
                  <span className="sp-pillar-arrow">↗</span>
                </div>
                <p className="sp-pillar-desc">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}

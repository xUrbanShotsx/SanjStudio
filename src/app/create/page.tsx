"use client";
import { useEffect, useState } from "react";

const lines = [
  { text: "$ git push origin main", type: "cmd" },
  { text: "Enumerating objects: done.", type: "out" },
  { text: "→  Deploying to Vercel...", type: "info" },
  { text: "✓  Build completed in 8.4s", type: "success" },
  { text: "✓  Edge Network deployed", type: "success" },
  { text: "✓  Live at yoursite.com", type: "success" },
  { text: "_", type: "cursor" },
];

export default function CreatePage() {
  const [visible, setVisible] = useState(0);

  useEffect(() => {
    if (visible < lines.length) {
      const delay = lines[visible].type === "cmd" ? 600 : 500;
      const t = setTimeout(() => setVisible((v) => v + 1), delay);
      return () => clearTimeout(t);
    }
  }, [visible]);

  return (
    <div className="service-page">
      <header className="landing-nav" style={{ background: "#fff", borderBottomColor: "rgba(10,10,10,0.08)" }}>
        <a href="/"><img src="/Sanjlogo.png" alt="Sanj Studio" className="landing-logo-img" style={{ height: "60px", filter: "invert(1)" }} /></a>
        <a href="/contact" className="landing-quote landing-quote--dark">FREE QUOTE</a>
      </header>

      <main className="sp-main">
        <div className="sp-left">
          <div className="sp-left-content">
            <span className="sp-num sp-reveal sp-reveal-1">03</span>
            <h1 className="sp-h1 sp-reveal sp-reveal-2">Create.</h1>
            <p className="sp-callout sp-reveal sp-reveal-3">Live in 14 days.</p>
            <p className="sp-lead sp-reveal sp-reveal-4">
              Everything I design, I build. Custom code, no page builders — deployed to Vercel within two weeks of sign-off.
            </p>
            <ul className="sp-includes sp-reveal sp-reveal-5">
              <li>Custom-coded in Next.js</li>
              <li>Mobile-first, fully responsive</li>
              <li>Deployed to Vercel in 14 days</li>
              <li>Fast global CDN &amp; HTTPS</li>
              <li>Full code handover — you own it</li>
            </ul>
            <div className="sp-footer-nav sp-reveal sp-reveal-6">
              <a href="/scale" className="service-back">← Scale</a>
              <a href="/contact" className="service-next">Get a quote →</a>
            </div>
          </div>
          <span className="sp-bg-num" aria-hidden="true">03</span>
        </div>

        <div className="sp-right">
          <p className="sp-right-label">Every project, same process</p>
          <div className="sp-terminal">
            <div className="sp-terminal-bar">
              <span className="sp-terminal-dot" style={{ background: "#ff5f57" }} />
              <span className="sp-terminal-dot" style={{ background: "#febc2e" }} />
              <span className="sp-terminal-dot" style={{ background: "#28c840" }} />
              <span className="sp-terminal-title">deploy.sh</span>
            </div>
            <div className="sp-terminal-body">
              {lines.slice(0, visible).map((l, i) => (
                <div key={i} className={`sp-terminal-line sp-terminal-line--${l.type}`}>
                  {l.type === "cursor" ? <span className="sp-cursor" /> : l.text}
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

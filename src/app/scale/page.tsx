"use client";
import { useEffect, useState } from "react";

const metrics = [
  { label: "Performance", score: 98 },
  { label: "SEO", score: 100 },
  { label: "Accessibility", score: 95 },
  { label: "Best Practices", score: 100 },
];

export default function ScalePage() {
  const [animated, setAnimated] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setAnimated(true), 200);
    return () => clearTimeout(t);
  }, []);

  return (
    <div className="service-page">
      <header className="landing-nav" style={{ background: "#fff", borderBottomColor: "rgba(10,10,10,0.08)" }}>
        <a href="/"><img src="/Sanjlogo.png" alt="Sanj Studio" className="landing-logo-img" style={{ height: "60px", filter: "invert(1)" }} /></a>
        <a href="/contact" className="landing-quote landing-quote--dark">FREE QUOTE</a>
      </header>

      <main className="sp-main">
        <div className="sp-left">
          <span className="sp-num">02</span>
          <h1 className="sp-h1">Scale.</h1>
          <p className="sp-lead">A good site doesn't just look right — it gets found, loads fast, and grows with your business.</p>
          <ul className="sp-includes">
            <li>On-page SEO foundations</li>
            <li>Meta, Open Graph & structured data</li>
            <li>Optimised images & fast load times</li>
            <li>Mobile-first performance</li>
            <li>Google Search Console setup</li>
          </ul>
          <div className="sp-footer-nav">
            <a href="/design" className="service-back">← Design</a>
            <a href="/create" className="service-next">Create →</a>
          </div>
        </div>

        <div className="sp-right">
          <p className="sp-right-label">Typical Lighthouse scores</p>
          <div className="sp-metrics">
            {metrics.map((m) => (
              <div key={m.label} className="sp-metric">
                <div className="sp-metric-header">
                  <span className="sp-metric-name">{m.label}</span>
                  <span className="sp-metric-score">{m.score}</span>
                </div>
                <div className="sp-metric-track">
                  <div
                    className="sp-metric-bar"
                    style={{ width: animated ? `${m.score}%` : "0%" }}
                  />
                </div>
              </div>
            ))}
          </div>
          <p className="sp-metrics-note">Scores measured on real client builds via Google PageSpeed Insights.</p>
        </div>
      </main>
    </div>
  );
}

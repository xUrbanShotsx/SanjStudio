"use client";

const ITEMS = [
  "PRECISION BUILT",
  "NO TEMPLATES",
  "WOLLONGONG STUDIO",
  "CUSTOM CODE",
  "BUILT TO CONVERT",
  "ZERO SHORTCUTS",
  "CRAFTED FOR RESULTS",
  "100% CUSTOM",
];

export function Marquee() {
  const doubled = [...ITEMS, ...ITEMS];
  return (
    <div className="marquee-strip">
      <div className="marquee-track" aria-hidden="true">
        {doubled.map((item, i) => (
          <span key={i} className="marquee-item">
            {item}
            <span className="marquee-dot">·</span>
          </span>
        ))}
      </div>
    </div>
  );
}

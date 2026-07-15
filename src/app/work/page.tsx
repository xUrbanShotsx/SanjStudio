"use client";

const projects = [
  { num: "01", href: "https://www.healthyearth.com.au/", label: "HEALTHYEARTH BIO CARE", bg: "#2D5A27", color: "rgba(255,255,255,0.9)" },
  { num: "02", href: "https://www.spinellirealestate.com.au/", label: "SPINELLI REAL ESTATE", bg: "#5bc2e7", color: "rgba(255,255,255,0.9)" },
  { num: "03", href: "https://innovate-property.vercel.app", label: "INNOVATE PROPERTY GROUP", bg: "#0a0a0a", color: "rgba(255,255,255,0.9)" },
  { num: "04", href: "https://dustpro.vercel.app", label: "DUST PRO PTY LTD", bg: "#C0392B", color: "rgba(255,255,255,0.9)" },
  { num: "05", href: null, label: "ETERNAL SAFETY SOLUTIONS", bg: "#1b1f24", color: "rgba(255,255,255,0.9)" },
  { num: "06", href: null, label: "THE COASTAL BERRY", bg: "#f4f1e8", color: "rgba(10,10,10,0.85)" },
];

function WorkFrame({ href, label, bg, color }: { href: string; label: string; bg: string; color: string }) {
  return (
    <div className="work-frame">
      <div className="work-frame-bar" style={{ background: bg }}>
        <a href="/" className="work-frame-back">← Back</a>
        <span className="work-frame-dot" style={{ background: "#ff5f57" }} />
        <span className="work-frame-dot" style={{ background: "#febc2e" }} />
        <span className="work-frame-dot" style={{ background: "#28c840" }} />
        <span className="work-frame-url">{href.replace(/^https?:\/\//, "").replace(/\/$/, "")}</span>
      </div>
      <div className="work-frame-viewport" style={{ background: bg }}>
        {/* Fallback label sits behind iframe — visible if site blocks embedding */}
        <div className="work-frame-blocked" style={{ color }}>
          <span className="work-frame-blocked-label">{label}</span>
          <a href={href} target="_blank" rel="noopener noreferrer" className="work-frame-blocked-link" style={{ borderColor: color, color }}>
            Visit site ↗
          </a>
        </div>
        <iframe
          src={href}
          title={label}
          className="work-frame-iframe"
          scrolling="no"
          tabIndex={-1}
        />
      </div>
    </div>
  );
}

export default function WorkPage() {
  return (
    <div className="work-page">
      <a href="/" className="work-back">← Back</a>
      <div className="work-grid">
        {projects.map(({ num, href, label, bg, color }) => {
          const Tag = href ? "a" : "div";
          const linkProps = href
            ? { href, target: "_blank", rel: "noopener noreferrer" }
            : {};
          return (
            <Tag
              key={num}
              {...linkProps}
              className={`work-item${!href ? " work-item--inert" : ""}`}
              style={bg ? { background: bg, borderColor: bg } : undefined}
            >
              {href && (
                <WorkFrame href={href} label={label} bg={bg} color={color} />
              )}
              {label && (
                <span className="work-item-label" style={{ color: color ?? undefined }}>
                  {label}
                </span>
              )}
              <span className="work-item-num" style={color ? { color: color.replace('0.9', '0.45') } : undefined}>
                {num}
              </span>
            </Tag>
          );
        })}
      </div>
    </div>
  );
}

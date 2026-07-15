const projects = [
  { num: "01", href: "https://www.healthyearth.com.au/", label: "HEALTHYEARTH BIO CARE", bg: "#2D5A27", color: "rgba(255,255,255,0.9)" },
  { num: "02", href: "https://www.spinellirealestate.com.au/", label: "SPINELLI REAL ESTATE", bg: "#5bc2e7", color: "rgba(255,255,255,0.9)" },
  { num: "03", href: "https://innovate-property.vercel.app", label: "INNOVATE PROPERTY GROUP", bg: "#0a0a0a", color: "rgba(255,255,255,0.9)" },
  { num: "04", href: "https://dustpro.vercel.app", label: "DUST PRO PTY LTD", bg: "#C0392B", color: "rgba(255,255,255,0.9)" },
  { num: "05", href: "#", label: null, bg: null, color: null },
  { num: "06", href: "#", label: null, bg: null, color: null },
];

export default function WorkPage() {
  return (
    <div className="work-page">
      <a href="/" className="work-back">← Back</a>
      <div className="work-grid">
        {projects.map(({ num, href, label, bg, color }) => (
          <a
            key={num}
            href={href}
            className="work-item"
            target="_blank"
            rel="noopener noreferrer"
            style={bg ? { background: bg, borderColor: bg } : undefined}
          >
            {label && (
              <span className="work-item-label" style={{ color: color ?? undefined }}>
                {label}
              </span>
            )}
            <span className="work-item-num" style={color ? { color: color.replace('0.9', '0.45') } : undefined}>
              {num}
            </span>
          </a>
        ))}
      </div>
    </div>
  );
}

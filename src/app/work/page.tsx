const projects = [
  { num: "01", href: "#" },
  { num: "02", href: "#" },
  { num: "03", href: "#" },
  { num: "04", href: "#" },
  { num: "05", href: "#" },
  { num: "06", href: "#" },
];

export default function WorkPage() {
  return (
    <div className="work-page">
      <a href="/" className="work-back">← Back</a>
      <div className="work-grid">
        {projects.map(({ num, href }) => (
          <a
            key={num}
            href={href}
            className="work-item"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="work-item-num">{num}</span>
          </a>
        ))}
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <div className="contact-page">
      <header className="home-nav" style={{ height: "72px" }}>
        <span
          className="home-nav-logo"
          style={{ fontSize: "1.125rem", fontWeight: 600, letterSpacing: "0.22em" }}
        >
          SANJ STUDIO
        </span>
        <a
          href="mailto:jyesanjurjo12@gmail.com"
          style={{
            position: "absolute",
            right: "var(--px)",
            fontSize: "0.75rem",
            fontWeight: 600,
            letterSpacing: "0.08em",
            color: "#fff",
            background: "#0a0a0a",
            textDecoration: "none",
            padding: "10px 20px",
          }}
        >
          FREE QUOTE
        </a>
      </header>
      <div className="contact-content">
        <p className="contact-heading">Contact Me For a Website</p>
        <a href="mailto:jyesanjurjo12@gmail.com" className="contact-detail">
          jyesanjurjo12@gmail.com
        </a>
        <a href="tel:+61402803830" className="contact-detail">
          0402 803 830
        </a>
        <a href="/work" className="contact-work">View my work</a>
      </div>
    </div>
  );
}

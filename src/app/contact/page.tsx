export default function ContactPage() {
  return (
    <div className="contact-page">
      <header className="landing-nav" style={{ background: "#fff", borderBottomColor: "rgba(10,10,10,0.08)" }}>
        <a href="/"><img src="/Sanjlogo.png" alt="Sanj Studio" className="landing-logo-img" style={{ filter: "invert(1)" }} /></a>
        <a href="/contact" className="landing-quote landing-quote--active">FREE QUOTE</a>
      </header>

      <main className="contact-main">
        <div className="contact-inner">
          <span className="contact-kicker">Let&apos;s talk</span>
          <h1 className="contact-h1">Get a free quote</h1>
          <p className="contact-sub">
            Tell me what you need. I&apos;ll get back to you within 24 hours.
          </p>

          <div className="contact-links">
            <a href="mailto:jyesanjurjo12@gmail.com" className="contact-link">
              <span className="contact-link-label">Email</span>
              <span className="contact-link-value">
                jyesanjurjo12@gmail.com
                <svg width="14" height="14" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                  <path d="M3 13L13 3M13 3H6M13 3V10" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </span>
            </a>
            <a href="tel:+61402803830" className="contact-link">
              <span className="contact-link-label">Phone</span>
              <span className="contact-link-value">
                0402 803 830
                <svg width="14" height="14" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                  <path d="M3 13L13 3M13 3H6M13 3V10" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </span>
            </a>
          </div>

          <a href="/work" className="contact-work-link">
            ← View my work
          </a>
        </div>
      </main>
    </div>
  );
}

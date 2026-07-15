export default function Home() {
  return (
    <div className="landing-page">
      {/* Video background */}
      <video
        className="landing-video"
        src="/drone-hero.mp4"
        autoPlay
        muted
        loop
        playsInline
        aria-hidden="true"
      />
      <div className="landing-overlay" aria-hidden="true" />

      {/* Nav */}
      <header className="landing-nav">
        <img src="/Sanjlogo.png" alt="Sanj Studio" className="landing-logo-img" style={{ height: "60px" }} />
        <a href="/contact" className="landing-quote">FREE QUOTE</a>
      </header>

      {/* Main content */}
      <main className="landing-main">
        {/* Centre headline */}
        <div className="landing-headline">
          <h1 className="landing-h1">
            <span className="landing-h1-word">Design.</span><br />
            <span className="landing-h1-word">Scale.</span><br />
            <span className="landing-h1-word">Create.</span>
          </h1>
        </div>

        {/* Bottom row */}
        <div className="landing-bottom">
          <p className="landing-desc">
            Custom websites &amp; brand identities.<br />
            No templates. Two-week delivery.
          </p>
          <a href="/work" className="landing-work-link">
            View my work
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
              <path d="M3 13L13 3M13 3H6M13 3V10" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>
        </div>
      </main>

      {/* Decorative rule */}
      <div className="landing-rule" aria-hidden="true" />
    </div>
  );
}

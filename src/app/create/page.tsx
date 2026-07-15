export default function CreatePage() {
  return (
    <div className="service-page">
      <header className="landing-nav" style={{ background: "#fff", borderBottomColor: "rgba(10,10,10,0.08)" }}>
        <a href="/"><img src="/Sanjlogo.png" alt="Sanj Studio" className="landing-logo-img" style={{ height: "60px", filter: "invert(1)" }} /></a>
        <a href="/contact" className="landing-quote landing-quote--dark">FREE QUOTE</a>
      </header>

      <main className="service-main">
        <div className="service-inner">
          <span className="service-num">03</span>
          <h1 className="service-h1">Create.</h1>
          <p className="service-lead">
            Everything I design, I build. Custom code, no builders — deployed live within two weeks of sign-off.
          </p>
          <div className="service-body">
            <div className="service-col">
              <h2 className="service-col-heading">How it's built</h2>
              <p>I write everything in Next.js — clean, hand-coded components that load fast and work on every device. No Webflow, no Wix, no page builders.</p>
              <p>Once it's ready, I deploy to Vercel. You get a live URL, a fast global CDN, and automatic HTTPS — the same infrastructure used by some of the world's biggest sites.</p>
            </div>
            <div className="service-col">
              <h2 className="service-col-heading">What's included</h2>
              <ul className="service-list">
                <li>Custom-coded in Next.js</li>
                <li>Mobile-first, fully responsive</li>
                <li>Deployed to Vercel — live in 2 weeks</li>
                <li>Fast global CDN & automatic HTTPS</li>
                <li>Full code handover — you own it</li>
                <li>12-month warranty on all builds</li>
              </ul>
            </div>
          </div>
          <div className="service-nav-links">
            <a href="/scale" className="service-back">← Scale</a>
            <a href="/contact" className="service-next">Get a quote →</a>
          </div>
        </div>
      </main>
    </div>
  );
}

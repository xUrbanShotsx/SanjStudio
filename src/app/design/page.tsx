export default function DesignPage() {
  return (
    <div className="service-page">
      <header className="landing-nav" style={{ background: "#fff", borderBottomColor: "rgba(10,10,10,0.08)" }}>
        <a href="/"><img src="/Sanjlogo.png" alt="Sanj Studio" className="landing-logo-img" style={{ height: "60px", filter: "invert(1)" }} /></a>
        <a href="/contact" className="landing-quote landing-quote--dark">FREE QUOTE</a>
      </header>

      <main className="service-main">
        <div className="service-inner">
          <span className="service-num">01</span>
          <h1 className="service-h1">Design.</h1>
          <p className="service-lead">
            Every site I build starts with a design that's made for your business — not a template someone else already used.
          </p>
          <div className="service-body">
            <div className="service-col">
              <h2 className="service-col-heading">What it means</h2>
              <p>Before any code is written, I map out the full experience: how visitors move through your site, what they see first, and what makes them act. Every layout decision has a reason behind it.</p>
              <p>Typography, colour, spacing, motion — all chosen to match your brand and your audience, not a default theme.</p>
            </div>
            <div className="service-col">
              <h2 className="service-col-heading">What's included</h2>
              <ul className="service-list">
                <li>Discovery & brief</li>
                <li>User flow mapping</li>
                <li>Wireframes & layout concepts</li>
                <li>Visual direction — typography, colour, spacing</li>
                <li>Desktop & mobile design files</li>
                <li>Revision rounds until it's right</li>
              </ul>
            </div>
          </div>
          <div className="service-nav-links">
            <a href="/" className="service-back">← Back</a>
            <a href="/scale" className="service-next">Scale →</a>
          </div>
        </div>
      </main>
    </div>
  );
}

export default function ScalePage() {
  return (
    <div className="service-page">
      <header className="landing-nav" style={{ background: "#fff", borderBottomColor: "rgba(10,10,10,0.08)" }}>
        <a href="/"><img src="/Sanjlogo.png" alt="Sanj Studio" className="landing-logo-img" style={{ height: "60px", filter: "invert(1)" }} /></a>
        <a href="/contact" className="landing-quote landing-quote--dark">FREE QUOTE</a>
      </header>

      <main className="service-main">
        <div className="service-inner">
          <span className="service-num">02</span>
          <h1 className="service-h1">Scale.</h1>
          <p className="service-lead">
            A good website doesn't just look right — it gets found, loads fast, and grows with your business.
          </p>
          <div className="service-body">
            <div className="service-col">
              <h2 className="service-col-heading">What it means</h2>
              <p>Every site I build has SEO foundations baked in from day one — clean structure, fast load times, proper metadata, and content Google can actually read.</p>
              <p>Whether you're a local trade or a national brand, your site will be set up to rank and convert — not just sit there.</p>
            </div>
            <div className="service-col">
              <h2 className="service-col-heading">What's included</h2>
              <ul className="service-list">
                <li>On-page SEO foundations</li>
                <li>Meta titles, descriptions & Open Graph</li>
                <li>Fast load times — optimised images & code</li>
                <li>Mobile-first performance</li>
                <li>Google Search Console setup</li>
                <li>Structured data where relevant</li>
              </ul>
            </div>
          </div>
          <div className="service-nav-links">
            <a href="/design" className="service-back">← Design</a>
            <a href="/create" className="service-next">Create →</a>
          </div>
        </div>
      </main>
    </div>
  );
}

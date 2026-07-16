import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { cities } from "./cities";

type Props = { params: Promise<{ city: string }> };

export async function generateStaticParams() {
  return Object.keys(cities).map((city) => ({ city }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { city } = await params;
  const data = cities[city];
  if (!data) return {};
  return {
    title: `Website Design ${data.name} | SanjStudio`,
    description: `Custom website design in ${data.name}, ${data.state}. SanjStudio builds hand-coded, no-template websites for ${data.name} businesses. Two-week delivery. Get a free quote today.`,
    alternates: { canonical: `/locations/${city}` },
  };
}

export default async function CityPage({ params }: Props) {
  const { city } = await params;
  const data = cities[city];
  if (!data) notFound();

  const schema = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: "SanjStudio",
    description: `Custom website design for businesses in ${data.name}, ${data.state}.`,
    areaServed: {
      "@type": "City",
      name: data.name,
      addressRegion: data.state,
      addressCountry: "AU",
    },
    serviceType: "Web Design",
    url: `https://sanjstudio.vercel.app/locations/${city}`,
    priceRange: "$$",
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <div className="loc-page">
        <header className="landing-nav" style={{ background: "#fff", borderBottomColor: "rgba(10,10,10,0.08)" }}>
          <a href="/"><img src="/Sanjlogo.png" alt="SanjStudio" className="landing-logo-img" style={{ height: "60px", filter: "invert(1)" }} /></a>
          <a href="/contact" className="landing-quote landing-quote--dark">FREE QUOTE</a>
        </header>

        <main className="loc-main">
          <div className="loc-inner">
            <p className="loc-kicker">Web Design · {data.name}, {data.state}</p>
            <h1 className="loc-h1">{data.headline}</h1>
            <p className="loc-lead">{data.blurb}</p>

            <ul className="loc-services">
              {data.services.map((s) => (
                <li key={s}>{s}</li>
              ))}
            </ul>

            <div className="loc-cta">
              <a href="/contact" className="loc-btn-primary">Get a free quote</a>
              <a href="/work" className="loc-btn-secondary">View our work</a>
            </div>

            <section className="loc-why">
              <h2 className="loc-h2">Why SanjStudio?</h2>
              <div className="loc-grid">
                <div className="loc-card">
                  <span className="loc-card-num">01</span>
                  <h3>No templates. Ever.</h3>
                  <p>Every site is built from scratch in Next.js. Your business is unique — your website should be too.</p>
                </div>
                <div className="loc-card">
                  <span className="loc-card-num">02</span>
                  <h3>Live in 14 days.</h3>
                  <p>From brief to launch in two weeks. Fast without cutting corners.</p>
                </div>
                <div className="loc-card">
                  <span className="loc-card-num">03</span>
                  <h3>Built to rank.</h3>
                  <p>On-page SEO, fast load times, and structured data baked in from day one.</p>
                </div>
                <div className="loc-card">
                  <span className="loc-card-num">04</span>
                  <h3>You own it.</h3>
                  <p>Full code handover. No lock-in, no monthly platform fees. Hosted on Vercel's global CDN.</p>
                </div>
              </div>
            </section>

            <section className="loc-faq">
              <h2 className="loc-h2">Frequently Asked Questions</h2>
              <div className="loc-faq-list">
                <details className="loc-faq-item">
                  <summary>How much does a website cost in {data.name}?</summary>
                  <p>SanjStudio websites typically start from $1,500 for a single-page site and $3,000–$6,000 for a full multi-page build. Every quote is tailored to your needs — fill in the form for a free, no-obligation estimate.</p>
                </details>
                <details className="loc-faq-item">
                  <summary>Do you work with clients remotely in {data.name}?</summary>
                  <p>Yes — all projects are run fully remotely via email and video call. We work with clients across Australia and the process is smooth regardless of location.</p>
                </details>
                <details className="loc-faq-item">
                  <summary>How long does it take to build a website?</summary>
                  <p>Our standard turnaround is two weeks from brief sign-off to launch. Larger or more complex projects are scoped individually.</p>
                </details>
                <details className="loc-faq-item">
                  <summary>What platform do you build on?</summary>
                  <p>We build with Next.js and deploy to Vercel — the fastest hosting infrastructure available, with a global CDN and automatic HTTPS included at no extra cost.</p>
                </details>
              </div>
            </section>

            <div className="loc-final-cta">
              <h2>Ready to get started in {data.name}?</h2>
              <p>Tell us about your business and we&apos;ll get back within 24 hours.</p>
              <a href="/contact" className="loc-btn-primary">Get a free quote →</a>
            </div>
          </div>
        </main>
      </div>
    </>
  );
}

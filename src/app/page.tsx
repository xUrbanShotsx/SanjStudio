export default function Home() {
  return (
    <div className="contact-page">
      <header className="home-nav">
        <span className="home-nav-logo">SANJ STUDIO</span>
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

"use client";
import { useEffect, useState } from "react";

export function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav className={`nav ${scrolled ? "scrolled" : ""}`}>
      <div className="nav-inner">
        {/* Left: links */}
        <ul className="nav-links">
          <li><a href="#services">Services</a></li>
          <li><a href="#about">About</a></li>
        </ul>

        {/* Centre: logo */}
        <a href="#" className="nav-logo">
          <span className="nav-logo-main">SanjStudio</span>
          <span className="nav-logo-sub">Wollongong, NSW</span>
        </a>

        {/* Right: CTA */}
        <div className="nav-right">
          <a href="#contact" className="nav-cta">
            Start a project
          </a>
        </div>
      </div>
    </nav>
  );
}

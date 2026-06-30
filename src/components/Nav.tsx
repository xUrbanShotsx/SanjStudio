"use client";
import { useEffect, useState } from "react";

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const close = () => setOpen(false);

  return (
    <nav className={`nav ${scrolled ? "scrolled" : ""} ${open ? "nav-open" : ""}`}>
      <div className="nav-inner">

        {/* Left: hamburger */}
        <button
          className="nav-hamburger"
          onClick={() => setOpen(o => !o)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
        >
          <span className="nav-hamburger-line" />
          <span className="nav-hamburger-line" />
          <span className="nav-hamburger-line" />
        </button>

        {/* Centre: logo */}
        <a href="#" className="nav-logo" onClick={close}>
          <span className="nav-logo-main">SanjStudio</span>
        </a>

        {/* Right: CTA */}
        <div className="nav-right">
          <a href="#contact" className="nav-cta" onClick={close}>
            Start a project
          </a>
        </div>

      </div>

      {/* Full-screen overlay menu */}
      <div className={`nav-dropdown ${open ? "nav-dropdown--open" : ""}`}>
        <button className="nav-dropdown-close" onClick={close} aria-label="Close menu">
          <span className="nav-dropdown-close-line" />
          <span className="nav-dropdown-close-line" />
        </button>
        <a href="/services" className="nav-dropdown-link" onClick={close}>Services</a>
        <a href="/about" className="nav-dropdown-link" onClick={close}>About</a>
      </div>
    </nav>
  );
}

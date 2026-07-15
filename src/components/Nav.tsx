"use client";
import { useEffect, useState } from "react";

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const close = () => setOpen(false);

  return (
    <nav className={`nav ${scrolled ? "nav--scrolled" : ""} ${open ? "nav--open" : ""}`}>
      <div className="nav-inner">
        <a href="/" className="nav-logo" onClick={close}>SanjStudio</a>
        <div className="nav-links">
          <a href="/services" className="nav-link">Services</a>
          <a href="/about" className="nav-link">About</a>
          <a href="/#contact" className="nav-link">Contact</a>
        </div>
        <button
          className="nav-menu-btn"
          onClick={() => setOpen(o => !o)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
        >
          <span className="nav-menu-line" />
          <span className="nav-menu-line" />
        </button>
      </div>

      <div className={`nav-overlay ${open ? "nav-overlay--open" : ""}`}>
        <button className="nav-overlay-close" onClick={close} aria-label="Close menu">
          <span className="nav-overlay-close-line" />
          <span className="nav-overlay-close-line" />
        </button>
        <div className="nav-overlay-links">
          <a href="/services" className="nav-overlay-link" onClick={close}>Services</a>
          <a href="/about" className="nav-overlay-link" onClick={close}>About</a>
          <a href="/#contact" className="nav-overlay-link" onClick={close}>Contact</a>
        </div>
      </div>
    </nav>
  );
}

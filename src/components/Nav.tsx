"use client";
import { useEffect, useState, useRef } from "react";

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [open, setOpen] = useState(false);
  const lastY = useRef(0);

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      setScrolled(y > 20);
      if (y > 120) {
        setHidden(y > lastY.current);
      } else {
        setHidden(false);
      }
      lastY.current = y;
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const close = () => setOpen(false);

  return (
    <nav className={`nav ${scrolled ? "scrolled" : ""} ${open ? "nav-open" : ""} ${hidden && !open ? "nav-hidden" : ""}`}>
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
          <span className="nav-logo-sub">Wollongong, NSW</span>
        </a>

        {/* Right: CTA */}
        <div className="nav-right">
          <a href="#contact" className="nav-cta" onClick={close}>
            Start a project
          </a>
        </div>

      </div>

      {/* Dropdown menu */}
      <div className={`nav-dropdown ${open ? "nav-dropdown--open" : ""}`}>
        <a href="#services" className="nav-dropdown-link" onClick={close}>Services</a>
        <a href="#about" className="nav-dropdown-link" onClick={close}>About</a>
      </div>
    </nav>
  );
}

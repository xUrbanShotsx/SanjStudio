"use client";

import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

const links = [
  { label: "Work", href: "/work" },
  { label: "Services", href: "#services" },
  { label: "About", href: "#about" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const lastY = useRef(0);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 48);
      lastY.current = window.scrollY;
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  const handleAnchor = (href: string) => {
    setMenuOpen(false);
    if (href.startsWith("#")) {
      const el = document.querySelector(href);
      el?.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <motion.header
        className="fixed top-0 left-0 right-0 z-50 px-6 md:px-10"
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      >
        <nav
          className="mx-auto max-w-7xl flex items-center justify-between py-5 transition-all duration-300"
          style={{
            borderBottom: scrolled
              ? "1px solid rgba(255,255,255,0.07)"
              : "1px solid transparent",
          }}
        >
          {/* Logo */}
          <Link
            href="/"
            className="font-semibold text-[0.9375rem] tracking-[0.18em] text-[#F0EEE9] hover:text-[#C5FF2B] transition-colors duration-200 uppercase"
            style={{ fontFamily: "var(--font-syne)" }}
            aria-label="SanjStudio — home"
          >
            SANJ STUDIO
          </Link>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-8">
            {links.map(({ label, href }) =>
              href.startsWith("#") ? (
                <button
                  key={label}
                  onClick={() => handleAnchor(href)}
                  className="text-[0.8125rem] text-[rgba(240,238,233,0.55)] hover:text-[#F0EEE9] transition-colors duration-200 tracking-wide"
                >
                  {label}
                </button>
              ) : (
                <Link
                  key={label}
                  href={href}
                  className="text-[0.8125rem] text-[rgba(240,238,233,0.55)] hover:text-[#F0EEE9] transition-colors duration-200 tracking-wide"
                >
                  {label}
                </Link>
              )
            )}
            <a
              href="mailto:jyesanjurjo12@gmail.com"
              className="text-[0.8125rem] font-semibold bg-[#C5FF2B] text-[#0B0B0B] px-5 py-2.5 hover:bg-white transition-colors duration-200 tracking-wide"
            >
              Get in touch
            </a>
          </div>

          {/* Mobile hamburger */}
          <button
            className="md:hidden flex flex-col gap-[5px] p-2"
            onClick={() => setMenuOpen((v) => !v)}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
          >
            <motion.span
              className="block w-6 h-px bg-[#F0EEE9] origin-center"
              animate={menuOpen ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
              transition={{ duration: 0.25 }}
            />
            <motion.span
              className="block w-6 h-px bg-[#F0EEE9] origin-center"
              animate={menuOpen ? { opacity: 0 } : { opacity: 1 }}
              transition={{ duration: 0.15 }}
            />
            <motion.span
              className="block w-6 h-px bg-[#F0EEE9] origin-center"
              animate={menuOpen ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
              transition={{ duration: 0.25 }}
            />
          </button>
        </nav>
      </motion.header>

      {/* Mobile overlay menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="fixed inset-0 z-40 bg-[#0B0B0B] flex flex-col justify-center px-8"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
          >
            <nav className="flex flex-col gap-8 mt-16">
              {links.map(({ label, href }, i) =>
                href.startsWith("#") ? (
                  <motion.button
                    key={label}
                    onClick={() => handleAnchor(href)}
                    className="text-left text-4xl font-semibold text-[#F0EEE9] hover:text-[#C5FF2B] transition-colors duration-200"
                    style={{ fontFamily: "var(--font-syne)" }}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.05 * i, duration: 0.35 }}
                  >
                    {label}
                  </motion.button>
                ) : (
                  <motion.div
                    key={label}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.05 * i, duration: 0.35 }}
                  >
                    <Link
                      href={href}
                      onClick={() => setMenuOpen(false)}
                      className="text-4xl font-semibold text-[#F0EEE9] hover:text-[#C5FF2B] transition-colors duration-200"
                      style={{ fontFamily: "var(--font-syne)" }}
                    >
                      {label}
                    </Link>
                  </motion.div>
                )
              )}
              <motion.a
                href="mailto:jyesanjurjo12@gmail.com"
                className="text-4xl font-semibold text-[#C5FF2B] hover:text-white transition-colors duration-200"
                style={{ fontFamily: "var(--font-syne)" }}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.15, duration: 0.35 }}
                onClick={() => setMenuOpen(false)}
              >
                Contact
              </motion.a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

"use client";

import { motion } from "framer-motion";

const year = new Date().getFullYear();

export default function Footer() {
  return (
    <footer className="border-t border-[rgba(255,255,255,0.07)] bg-[#0B0B0B] px-6 md:px-10 py-12">
      <div className="mx-auto max-w-7xl flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
        {/* Brand */}
        <div className="flex flex-col gap-1">
          <span
            className="text-sm font-semibold tracking-[0.18em] uppercase text-[#F0EEE9]"
            style={{ fontFamily: "var(--font-syne)" }}
          >
            SANJ STUDIO
          </span>
          <span className="text-xs text-[rgba(240,238,233,0.38)]">
            Design. Brand. Create.
          </span>
        </div>

        {/* Links */}
        <div className="flex items-center gap-6 flex-wrap">
          <a href="/work" className="text-xs text-[rgba(240,238,233,0.45)] hover:text-[#F0EEE9] transition-colors duration-200">
            Work
          </a>
          <a href="#services" className="text-xs text-[rgba(240,238,233,0.45)] hover:text-[#F0EEE9] transition-colors duration-200">
            Services
          </a>
          <a href="#about" className="text-xs text-[rgba(240,238,233,0.45)] hover:text-[#F0EEE9] transition-colors duration-200">
            About
          </a>
          <a
            href="mailto:jyesanjurjo12@gmail.com"
            className="text-xs text-[rgba(240,238,233,0.45)] hover:text-[#C5FF2B] transition-colors duration-200"
          >
            jyesanjurjo12@gmail.com
          </a>
        </div>

        {/* Copyright */}
        <p className="text-xs text-[rgba(240,238,233,0.28)]">
          © {year} SanjStudio
        </p>
      </div>
    </footer>
  );
}

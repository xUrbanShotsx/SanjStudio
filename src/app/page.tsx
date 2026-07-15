"use client";

import { useEffect, useRef, useState } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useMotionValue,
  useSpring,
  AnimatePresence,
} from "framer-motion";

const EASE: [number, number, number, number] = EASE;
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import { Badge } from "@/components/ui/badge";

/* ─── Constants ────────────────────────────────────────────── */
const MARQUEE_ITEMS = [
  "Web Design",
  "Brand Identity",
  "Custom Code",
  "Wollongong",
  "No Templates",
  "Two-Week Delivery",
  "Web Design",
  "Brand Identity",
  "Custom Code",
  "Wollongong",
  "No Templates",
  "Two-Week Delivery",
];

const SERVICES = [
  {
    num: "01",
    title: "Web Design",
    desc: "Pixel-perfect, hand-coded websites that load fast, convert visitors, and actually reflect your brand — not a theme someone else bought.",
    tags: ["Next.js", "Tailwind", "Framer Motion"],
  },
  {
    num: "02",
    title: "Brand Identity",
    desc: "Logo, colour palette, typography, and brand guidelines that make you look like you belong among the best in your industry.",
    tags: ["Logo", "Palette", "Guidelines"],
  },
  {
    num: "03",
    title: "SEO & Performance",
    desc: "Sites built with Core Web Vitals baked in from day one. Technical SEO, meta structure, and image optimisation so Google notices.",
    tags: ["Core Web Vitals", "Meta SEO", "Speed"],
  },
];

const STATS = [
  { value: 6, suffix: "+", label: "Sites launched" },
  { value: 2, suffix: "wk", label: "Avg. delivery" },
  { value: 100, suffix: "%", label: "Custom code" },
];

const WORK_PREVIEW = [
  { label: "HealthyEarth Bio Care", bg: "#2D5A27", href: "https://www.healthyearth.com.au/", color: "rgba(255,255,255,0.9)" },
  { label: "Spinelli Real Estate", bg: "#5bc2e7", href: "https://www.spinellirealestate.com.au/", color: "rgba(255,255,255,0.9)" },
  { label: "Innovate Property Group", bg: "#0a0a0a", href: "https://innovate-property.vercel.app", color: "rgba(255,255,255,0.9)", border: "rgba(255,255,255,0.1)" },
];

/* ─── Helpers ───────────────────────────────────────────────── */
function useCounter(target: number, trigger: boolean) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!trigger) return;
    let start = 0;
    const step = target / 40;
    const timer = setInterval(() => {
      start = Math.min(start + step, target);
      setCount(Math.round(start));
      if (start >= target) clearInterval(timer);
    }, 30);
    return () => clearInterval(timer);
  }, [trigger, target]);
  return count;
}

/* ─── Marquee ─────────────────────────────────────────────── */
function Marquee() {
  return (
    <div
      className="relative overflow-hidden border-y border-[rgba(255,255,255,0.07)] py-4"
      aria-hidden="true"
    >
      <motion.div
        className="flex gap-10 whitespace-nowrap will-change-transform"
        animate={{ x: ["0%", "-50%"] }}
        transition={{ repeat: Infinity, duration: 24, ease: "linear" }}
      >
        {MARQUEE_ITEMS.map((item, i) => (
          <span
            key={i}
            className="text-[0.8125rem] tracking-[0.12em] uppercase text-[rgba(240,238,233,0.38)] flex items-center gap-10"
          >
            {item}
            <span className="text-[#C5FF2B]">✦</span>
          </span>
        ))}
      </motion.div>
    </div>
  );
}

/* ─── Stat card ───────────────────────────────────────────── */
function StatCard({ value, suffix, label, index }: { value: number; suffix: string; label: string; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const [triggered, setTriggered] = useState(false);
  const count = useCounter(value, triggered);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setTriggered(true); },
      { threshold: 0.5 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <motion.div
      ref={ref}
      className="flex flex-col gap-2 py-10 px-8 border border-[rgba(255,255,255,0.07)] bg-[#111111]"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, delay: index * 0.1, ease: EASE }}
    >
      <p
        className="text-5xl font-semibold text-[#C5FF2B] tabular-nums leading-none"
        style={{ fontFamily: "var(--font-syne)" }}
      >
        {count}
        {suffix}
      </p>
      <p className="text-[0.8125rem] text-[rgba(240,238,233,0.5)]">{label}</p>
    </motion.div>
  );
}

/* ─── Service row ─────────────────────────────────────────── */
function ServiceRow({ num, title, desc, tags, index }: (typeof SERVICES)[0] & { index: number }) {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      className="group relative flex flex-col md:flex-row md:items-start gap-6 md:gap-16 py-8 md:py-10 border-b border-[rgba(255,255,255,0.07)] cursor-default"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.5, delay: index * 0.08, ease: EASE }}
    >
      {/* Accent line */}
      <motion.div
        className="absolute left-0 top-0 bottom-0 w-px bg-[#C5FF2B] origin-top"
        animate={{ scaleY: hovered ? 1 : 0 }}
        transition={{ duration: 0.3 }}
      />

      <span
        className="text-[0.75rem] text-[rgba(240,238,233,0.3)] font-mono pt-1 shrink-0"
        aria-hidden="true"
      >
        {num}
      </span>

      <div className="flex-1 flex flex-col gap-3">
        <h3
          className="text-2xl md:text-3xl font-semibold text-[#F0EEE9] transition-colors duration-300 group-hover:text-[#C5FF2B]"
          style={{ fontFamily: "var(--font-syne)" }}
        >
          {title}
        </h3>
        <p className="text-[0.9375rem] text-[rgba(240,238,233,0.55)] leading-relaxed max-w-[56ch]">
          {desc}
        </p>
        <div className="flex flex-wrap gap-2 pt-1">
          {tags.map((t) => (
            <Badge key={t} variant="outline">{t}</Badge>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

/* ─── Work preview card ─────────────────────────────────────── */
function WorkCard({
  label,
  bg,
  href,
  color,
  border,
  index,
}: {
  label: string;
  bg: string;
  href: string;
  color: string;
  border?: string;
  index: number;
}) {
  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="relative flex items-center justify-center aspect-[4/3] overflow-hidden group"
      style={{ background: bg, border: `1px solid ${border ?? "transparent"}` }}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.5, delay: index * 0.1, ease: EASE }}
    >
      {/* Hover overlay */}
      <motion.div
        className="absolute inset-0 bg-[rgba(197,255,43,0.06)]"
        initial={{ opacity: 0 }}
        whileHover={{ opacity: 1 }}
        transition={{ duration: 0.25 }}
      />
      <span
        className="text-center text-xs font-semibold tracking-[0.1em] uppercase px-6 relative z-10"
        style={{ color }}
      >
        {label}
      </span>
      <motion.span
        className="absolute bottom-4 right-4 text-xs tracking-wider opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        style={{ color, fontFamily: "var(--font-inter)" }}
        aria-hidden="true"
      >
        ↗
      </motion.span>
    </motion.a>
  );
}

/* ─── Page ───────────────────────────────────────────────── */
export default function Home() {
  const heroRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const heroY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  const fadeUp = (delay = 0) => ({
    initial: { opacity: 0, y: 32 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.65, delay, ease: EASE },
  });

  return (
    <div className="bg-[#0B0B0B] text-[#F0EEE9] min-h-screen">
      <Nav />

      {/* ── HERO ────────────────────────────────────────────── */}
      <section
        ref={heroRef}
        className="relative min-h-screen flex flex-col justify-end pb-16 md:pb-24 px-6 md:px-10 pt-32 overflow-hidden"
        aria-label="Hero"
      >
        {/* Background grid */}
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.025) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.025) 1px, transparent 1px)",
            backgroundSize: "72px 72px",
          }}
          aria-hidden="true"
        />

        {/* Accent glow */}
        <div
          className="pointer-events-none absolute top-1/3 left-1/4 w-[560px] h-[560px] rounded-full opacity-[0.06] blur-[120px]"
          style={{ background: "#C5FF2B" }}
          aria-hidden="true"
        />

        <motion.div
          className="relative z-10 mx-auto max-w-7xl w-full"
          style={{ y: heroY, opacity: heroOpacity }}
        >
          <motion.div {...fadeUp(0.05)} className="mb-6">
            <Badge variant="subtle">Wollongong · Australia</Badge>
          </motion.div>

          <motion.h1
            {...fadeUp(0.15)}
            className="text-[clamp(2.75rem,8vw,6rem)] font-semibold leading-[0.95] tracking-[-0.04em] mb-8 max-w-[14ch]"
            style={{ fontFamily: "var(--font-syne)" }}
          >
            Design.{" "}
            <span className="text-[#C5FF2B]">Brand.</span>
            {" "}Create.
          </motion.h1>

          <div className="flex flex-col md:flex-row md:items-end gap-8 md:gap-0 md:justify-between">
            <motion.p
              {...fadeUp(0.25)}
              className="text-[1rem] md:text-[1.0625rem] text-[rgba(240,238,233,0.55)] leading-relaxed max-w-[48ch]"
            >
              One person. Custom-coded websites and brand identities built from scratch.
              No templates. No agencies. Just sharp design and clean code, delivered in two weeks.
            </motion.p>

            <motion.div {...fadeUp(0.35)} className="flex items-center gap-4 shrink-0">
              <a
                href="mailto:jyesanjurjo12@gmail.com"
                className="inline-flex items-center gap-2 text-[0.875rem] font-semibold bg-[#C5FF2B] text-[#0B0B0B] px-6 py-3.5 hover:bg-white transition-colors duration-200"
              >
                Start a project
              </a>
              <a
                href="/work"
                className="inline-flex items-center gap-2 text-[0.875rem] text-[rgba(240,238,233,0.55)] border border-[rgba(255,255,255,0.14)] px-6 py-3.5 hover:text-[#F0EEE9] hover:border-[rgba(255,255,255,0.3)] transition-all duration-200"
              >
                View work
              </a>
            </motion.div>
          </div>
        </motion.div>

        {/* Scroll cue */}
        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.6 }}
          aria-hidden="true"
        >
          <motion.div
            className="w-px h-10 bg-[rgba(255,255,255,0.18)] origin-top"
            animate={{ scaleY: [0, 1, 0] }}
            transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
          />
        </motion.div>
      </section>

      {/* ── MARQUEE ────────────────────────────────────────── */}
      <Marquee />

      {/* ── SERVICES ───────────────────────────────────────── */}
      <section
        id="services"
        className="px-6 md:px-10 py-24 md:py-36"
        aria-labelledby="services-heading"
      >
        <div className="mx-auto max-w-7xl">
          <motion.div
            className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, ease: EASE }}
          >
            <h2
              id="services-heading"
              className="text-[clamp(2rem,4vw,3.5rem)] font-semibold tracking-[-0.03em]"
              style={{ fontFamily: "var(--font-syne)" }}
            >
              What I build
            </h2>
            <p className="text-[0.875rem] text-[rgba(240,238,233,0.4)] max-w-[36ch] md:text-right">
              Everything from a single landing page to a complete brand system.
            </p>
          </motion.div>

          {/* Border top of first row */}
          <div className="border-t border-[rgba(255,255,255,0.07)]" />

          {SERVICES.map((s, i) => (
            <ServiceRow key={s.num} {...s} index={i} />
          ))}
        </div>
      </section>

      {/* ── STATS ──────────────────────────────────────────── */}
      <section className="px-6 md:px-10 py-0 pb-24 md:pb-36" aria-label="Studio stats">
        <div className="mx-auto max-w-7xl grid grid-cols-1 sm:grid-cols-3 gap-px bg-[rgba(255,255,255,0.07)]">
          {STATS.map((s, i) => (
            <StatCard key={s.label} {...s} index={i} />
          ))}
        </div>
      </section>

      {/* ── ABOUT ──────────────────────────────────────────── */}
      <section
        id="about"
        className="px-6 md:px-10 py-24 md:py-36 border-t border-[rgba(255,255,255,0.07)]"
        aria-labelledby="about-heading"
      >
        <div className="mx-auto max-w-7xl grid md:grid-cols-2 gap-16 md:gap-24 items-center">
          {/* Text */}
          <motion.div
            className="flex flex-col gap-6"
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, ease: EASE }}
          >
            <h2
              id="about-heading"
              className="text-[clamp(2rem,4vw,3.5rem)] font-semibold tracking-[-0.03em]"
              style={{ fontFamily: "var(--font-syne)" }}
            >
              One person.<br />Full focus.
            </h2>
            <p className="text-[0.9375rem] text-[rgba(240,238,233,0.55)] leading-relaxed max-w-[48ch]">
              I'm Jye — a 22-year-old designer and developer from Wollongong. I work with
              local businesses that are serious about their online presence and want
              something built properly from the ground up.
            </p>
            <p className="text-[0.9375rem] text-[rgba(240,238,233,0.55)] leading-relaxed max-w-[48ch]">
              Every project gets my full attention. No account managers, no hand-offs, no templates.
              Just considered design and clean, performant code.
            </p>
            <div className="flex items-center gap-4 pt-2">
              <a
                href="mailto:jyesanjurjo12@gmail.com"
                className="text-[0.875rem] font-semibold text-[#C5FF2B] hover:text-white transition-colors duration-200 underline underline-offset-4 decoration-[rgba(197,255,43,0.4)]"
              >
                Get in touch →
              </a>
            </div>
          </motion.div>

          {/* Visual block */}
          <motion.div
            className="relative h-72 md:h-[420px] bg-[#111111] border border-[rgba(255,255,255,0.07)] overflow-hidden"
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, ease: EASE }}
          >
            {/* Abstract composition */}
            <div
              className="absolute inset-0 opacity-20"
              style={{
                backgroundImage: "linear-gradient(135deg, #C5FF2B 0%, transparent 60%)",
              }}
            />
            <div className="absolute bottom-8 left-8 flex flex-col gap-1">
              <span
                className="text-[3.5rem] font-semibold text-[#C5FF2B] leading-none"
                style={{ fontFamily: "var(--font-syne)" }}
                aria-hidden="true"
              >
                SJ
              </span>
              <span className="text-[0.75rem] text-[rgba(240,238,233,0.35)] tracking-widest uppercase">
                Wollongong, NSW
              </span>
            </div>
            <div
              className="absolute top-8 right-8 w-20 h-20 border border-[#C5FF2B] opacity-30"
              aria-hidden="true"
            />
          </motion.div>
        </div>
      </section>

      {/* ── WORK PREVIEW ───────────────────────────────────── */}
      <section
        className="px-6 md:px-10 py-0 pb-24 md:pb-36 border-t border-[rgba(255,255,255,0.07)]"
        aria-labelledby="work-heading"
      >
        <div className="mx-auto max-w-7xl">
          <motion.div
            className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 py-16"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.5, ease: EASE }}
          >
            <h2
              id="work-heading"
              className="text-[clamp(2rem,4vw,3.5rem)] font-semibold tracking-[-0.03em]"
              style={{ fontFamily: "var(--font-syne)" }}
            >
              Selected work
            </h2>
            <a
              href="/work"
              className="text-[0.875rem] text-[rgba(240,238,233,0.45)] hover:text-[#C5FF2B] transition-colors duration-200 self-start md:self-auto"
            >
              View all →
            </a>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-[rgba(255,255,255,0.07)]">
            {WORK_PREVIEW.map((p, i) => (
              <WorkCard key={p.label} {...p} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* ── CONTACT CTA ────────────────────────────────────── */}
      <section
        className="relative overflow-hidden px-6 md:px-10 py-28 md:py-40 bg-[#C5FF2B]"
        aria-labelledby="cta-heading"
      >
        {/* Background texture */}
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.07]"
          style={{
            backgroundImage:
              "linear-gradient(#0B0B0B 1px, transparent 1px), linear-gradient(90deg, #0B0B0B 1px, transparent 1px)",
            backgroundSize: "48px 48px",
          }}
          aria-hidden="true"
        />

        <div className="relative mx-auto max-w-7xl flex flex-col md:flex-row md:items-center md:justify-between gap-10">
          <motion.div
            className="flex flex-col gap-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, ease: EASE }}
          >
            <h2
              id="cta-heading"
              className="text-[clamp(2rem,5vw,4rem)] font-semibold tracking-[-0.04em] text-[#0B0B0B] leading-[0.95]"
              style={{ fontFamily: "var(--font-syne)" }}
            >
              Ready to build<br />something real?
            </h2>
            <p className="text-[0.9375rem] text-[rgba(10,10,10,0.6)] max-w-[44ch]">
              No templates. No agencies. Just sharp design and clean code — ready in two weeks.
            </p>
          </motion.div>

          <motion.div
            className="flex flex-col gap-3"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, delay: 0.1, ease: EASE }}
          >
            <a
              href="mailto:jyesanjurjo12@gmail.com"
              className="inline-flex items-center justify-center text-[0.9375rem] font-semibold bg-[#0B0B0B] text-[#C5FF2B] px-8 py-4 hover:bg-[#1a1a1a] transition-colors duration-200"
            >
              jyesanjurjo12@gmail.com
            </a>
            <a
              href="tel:+61402803830"
              className="inline-flex items-center justify-center text-[0.875rem] font-medium text-[rgba(10,10,10,0.6)] hover:text-[#0B0B0B] transition-colors duration-200"
            >
              0402 803 830
            </a>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

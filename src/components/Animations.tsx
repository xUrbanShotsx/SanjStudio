"use client";
import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function Animations() {
  useEffect(() => {
    // ── Clip-path reveals on headings/subtext ────────────────
    const reveals = gsap.utils.toArray<HTMLElement>("[data-reveal]");
    reveals.forEach((el) => {
      gsap.fromTo(
        el,
        { clipPath: "inset(0 0 100% 0)", y: 32 },
        {
          clipPath: "inset(0 0 0% 0)",
          y: 0,
          duration: 1.0,
          ease: "expo.out",
          scrollTrigger: {
            trigger: el,
            start: "top 88%",
          },
        }
      );
    });

    // ── Staggered reveal groups ──────────────────────────────
    const groups = gsap.utils.toArray<HTMLElement>("[data-reveal-group]");
    groups.forEach((group) => {
      const children = group.querySelectorAll<HTMLElement>("[data-reveal-child]");
      gsap.fromTo(
        children,
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 0.75,
          ease: "power3.out",
          stagger: 0.12,
          scrollTrigger: {
            trigger: group,
            start: "top 82%",
          },
        }
      );
    });

    // ── Counter animations ───────────────────────────────────
    const counters = document.querySelectorAll<HTMLElement>("[data-count]");
    counters.forEach((el) => {
      const target = parseFloat(el.getAttribute("data-count") || "0");
      const suffix = el.getAttribute("data-suffix") || "";
      const prefix = el.getAttribute("data-prefix") || "";
      const isFloat = el.getAttribute("data-float") === "true";
      const obj = { val: 0 };

      gsap.to(obj, {
        val: target,
        duration: 2,
        ease: "power2.out",
        scrollTrigger: {
          trigger: el,
          start: "top 85%",
          once: true,
        },
        onUpdate() {
          el.textContent =
            prefix + (isFloat ? obj.val.toFixed(1) : Math.round(obj.val)) + suffix;
        },
        onComplete() {
          el.textContent = prefix + (isFloat ? target.toFixed(1) : target) + suffix;
        },
      });
    });

    // ── Parallax on hero browser mockup ─────────────────────
    const mockup = document.querySelector<HTMLElement>(".browser-frame");
    if (mockup) {
      gsap.to(mockup, {
        y: 80,
        ease: "none",
        scrollTrigger: {
          trigger: ".hero",
          start: "top top",
          end: "bottom top",
          scrub: 1.2,
        },
      });
    }

    // ── Parallax on hero headline ────────────────────────────
    const heroText = document.querySelector<HTMLElement>(".hero-text");
    if (heroText) {
      gsap.to(heroText, {
        y: -60,
        ease: "none",
        scrollTrigger: {
          trigger: ".hero",
          start: "top top",
          end: "bottom top",
          scrub: 0.8,
        },
      });
    }

    // ── Line draw on hairlines ───────────────────────────────
    const lines = gsap.utils.toArray<HTMLElement>("[data-line]");
    lines.forEach((line) => {
      gsap.fromTo(
        line,
        { scaleX: 0, transformOrigin: "left center" },
        {
          scaleX: 1,
          duration: 1.2,
          ease: "expo.inOut",
          scrollTrigger: {
            trigger: line,
            start: "top 85%",
          },
        }
      );
    });

    // ── Horizontal drag-scroll on work track ─────────────────
    const track = document.querySelector<HTMLElement>(".work-track-h");
    if (track) {
      let isDown = false;
      let startX = 0;
      let scrollLeft = 0;

      track.addEventListener("mousedown", (e) => {
        isDown = true;
        track.style.cursor = "grabbing";
        startX = e.pageX - track.offsetLeft;
        scrollLeft = track.scrollLeft;
      });
      track.addEventListener("mouseleave", () => {
        isDown = false;
        track.style.cursor = "grab";
      });
      track.addEventListener("mouseup", () => {
        isDown = false;
        track.style.cursor = "grab";
      });
      track.addEventListener("mousemove", (e) => {
        if (!isDown) return;
        e.preventDefault();
        const x = e.pageX - track.offsetLeft;
        const walk = (x - startX) * 1.8;
        track.scrollLeft = scrollLeft - walk;
      });
    }

    // ── Spec cells stagger ───────────────────────────────────
    const specCells = gsap.utils.toArray<HTMLElement>(".spec-cell");
    gsap.fromTo(
      specCells,
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 0.7,
        ease: "power3.out",
        stagger: 0.1,
        scrollTrigger: {
          trigger: ".spec-grid",
          start: "top 80%",
        },
      }
    );

    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);

  return null;
}

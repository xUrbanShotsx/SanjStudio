"use client";
import { useEffect, useRef } from "react";

export function Cursor() {
  const dotRef  = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const dot  = dotRef.current;
    const ring = ringRef.current;
    if (!dot || !ring) return;

    // hide native cursor site-wide
    document.documentElement.style.cursor = "none";

    let mx = -100, my = -100;
    let rx = -100, ry = -100;
    let raf: number;
    let hovering = false;

    const onMove = (e: MouseEvent) => {
      mx = e.clientX;
      my = e.clientY;
      dot.style.transform = `translate(${mx}px,${my}px)`;
    };

    const onEnter = () => { hovering = true;  ring.classList.add("cur-hover"); };
    const onLeave = () => { hovering = false; ring.classList.remove("cur-hover"); };

    // attach to every interactive element present + future (use event delegation)
    const onOver = (e: MouseEvent) => {
      const t = e.target as Element;
      if (t.closest("a,button,[data-cursor]")) onEnter();
      else if (hovering) onLeave();
    };
    document.addEventListener("mousemove", onMove);
    document.addEventListener("mouseover", onOver);

    const tick = () => {
      raf = requestAnimationFrame(tick);
      rx += (mx - rx) * 0.1;
      ry += (my - ry) * 0.1;
      ring.style.transform = `translate(${rx}px,${ry}px)`;
    };
    tick();

    return () => {
      cancelAnimationFrame(raf);
      document.removeEventListener("mousemove", onMove);
      document.removeEventListener("mouseover", onOver);
      document.documentElement.style.cursor = "";
    };
  }, []);

  return (
    <>
      <div ref={dotRef}  className="cur-dot"  aria-hidden />
      <div ref={ringRef} className="cur-ring" aria-hidden />
    </>
  );
}

"use client";

import { useEffect } from "react";

// Ports the design's setupSmoothScroll — a lerp/inertia wheel scroll.
export default function SmoothScroll() {
  useEffect(() => {
    if (typeof window === "undefined") return;
    if ("ontouchstart" in window) return; // native inertia on touch devices

    let target = window.scrollY;
    let current = window.scrollY;
    let active = false;
    let programmatic = false;

    const maxY = () => Math.max(0, document.documentElement.scrollHeight - window.innerHeight);

    const tick = () => {
      const diff = target - current;
      if (Math.abs(diff) < 0.5) {
        current = target;
        active = false;
        programmatic = true;
        window.scrollTo(0, target);
        return;
      }
      current += diff * 0.115;
      programmatic = true;
      window.scrollTo(0, current);
      requestAnimationFrame(tick);
    };

    const onWheel = (e: WheelEvent) => {
      if (e.ctrlKey || e.metaKey || e.defaultPrevented) return;
      e.preventDefault();
      let d = e.deltaY;
      if (e.deltaMode === 1) d *= 32;
      else if (e.deltaMode === 2) d *= window.innerHeight;
      target = Math.max(0, Math.min(maxY(), target + d));
      if (!active) {
        active = true;
        requestAnimationFrame(tick);
      }
    };

    const onScroll = () => {
      if (programmatic) {
        programmatic = false;
        return;
      }
      target = window.scrollY;
      current = window.scrollY;
    };

    window.addEventListener("wheel", onWheel, { passive: false });
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("wheel", onWheel);
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return null;
}

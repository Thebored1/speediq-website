"use client";

import { useEffect, useRef } from "react";

export default function RawPage({ html }: { html: string }) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const root = ref.current;
    if (!root) return;

    // --- scroll reveal (ports the design's setupReveal) ---
    const els = Array.from(root.querySelectorAll<HTMLElement>(".rv"));
    let io: IntersectionObserver | undefined;
    if (typeof IntersectionObserver !== "undefined" && els.length) {
      els.forEach((el) => el.setAttribute("data-rv", "hide"));
      io = new IntersectionObserver(
        (entries) => {
          entries.forEach((e, i) => {
            if (!e.isIntersecting) return;
            (e.target as HTMLElement).style.transitionDelay = Math.min(i * 90, 360) + "ms";
            e.target.removeAttribute("data-rv");
            io!.unobserve(e.target);
          });
        },
        { threshold: 0.12, rootMargin: "0px 0px -6% 0px" }
      );
      els.forEach((el) => io!.observe(el));
    }

    // --- FAQ accordion ---
    const toggles = Array.from(root.querySelectorAll<HTMLElement>("[data-faq-toggle]"));
    const open = (item: HTMLElement, isOpen: boolean) => {
      const body = item.querySelector<HTMLElement>("[data-faq-body]");
      const icon = item.querySelector<HTMLElement>("[data-faq-icon]");
      if (body) body.style.gridTemplateRows = isOpen ? "1fr" : "0fr";
      if (icon) icon.textContent = isOpen ? "−" : "+";
    };
    const handlers = toggles.map((item, idx) => {
      if (idx === 0) open(item, true); // first item open by default
      const h = () => {
        const body = item.querySelector<HTMLElement>("[data-faq-body]");
        const isOpen = body?.style.gridTemplateRows === "1fr";
        toggles.forEach((t) => open(t, false));
        if (!isOpen) open(item, true);
      };
      item.addEventListener("click", h);
      return { item, h };
    });

    return () => {
      io?.disconnect();
      handlers.forEach(({ item, h }) => item.removeEventListener("click", h));
    };
  }, [html]);

  return <div ref={ref} dangerouslySetInnerHTML={{ __html: html }} />;
}

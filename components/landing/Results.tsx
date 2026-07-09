"use client";

import { useEffect, useRef, useState } from "react";
import { BRANDS } from "./brands";

export default function Results() {
  const sectionRef = useRef<HTMLElement>(null);
  const [active, setActive] = useState(0);
  const [live, setLive] = useState(false);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el || typeof IntersectionObserver === "undefined") {
      setLive(true);
      return;
    }
    const io = new IntersectionObserver(
      (entries) => setLive(entries[0].isIntersecting),
      { threshold: 0.3 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  useEffect(() => {
    if (!live || paused) return;
    const t = setTimeout(() => setActive((a) => (a + 1) % BRANDS.length), 6000);
    return () => clearTimeout(t);
  }, [live, paused, active]);

  const b = BRANDS[active];

  return (
    <section id="casework" ref={sectionRef} style={{ padding: "0 clamp(24px, 8vw, 128px) clamp(64px, 9vw, 110px)" }}>
      <div
        style={{
          maxWidth: 1240,
          margin: "0 auto",
          background: "#0526D9",
          borderRadius: 24,
          padding: "clamp(32px, 4.5vw, 56px)",
          color: "#FFFFFF",
        }}
      >
        <div
          className="mono"
          style={{ fontSize: 12, letterSpacing: "0.14em", color: "#B7C4FF", display: "flex", alignItems: "center", gap: 10 }}
        >
          <span style={{ width: 7, height: 7, background: "#B7C4FF", display: "inline-block" }} />
          <span>CLIENT RESULTS</span>
        </div>
        <h2
          style={{
            margin: "16px 0 0",
            maxWidth: 520,
            fontSize: "clamp(30px, 3vw, 42px)",
            lineHeight: 1.1,
            letterSpacing: "-0.025em",
            fontWeight: 500,
            color: "#FFFFFF",
            textWrap: "balance",
          }}
        >
          Transform your digital presence
        </h2>

        <div
          className="results-grid2"
          style={{
            display: "grid",
            gridTemplateColumns: "minmax(0, 5.5fr) minmax(0, 6.5fr)",
            gap: "clamp(28px, 3.5vw, 52px)",
            marginTop: "clamp(28px, 3.5vw, 44px)",
          }}
        >
          {/* list */}
          <div onMouseEnter={() => setPaused(true)} onMouseLeave={() => setPaused(false)}>
            {BRANDS.map((item, i) => (
              <div
                key={i}
                onClick={() => setActive(i)}
                style={{
                  display: "flex",
                  alignItems: "baseline",
                  gap: 14,
                  borderTop: "1px solid rgba(255,255,255,0.28)",
                  borderBottom: i === BRANDS.length - 1 ? "1px solid rgba(255,255,255,0.28)" : undefined,
                  padding: "21px 2px",
                  cursor: "pointer",
                  position: "relative",
                }}
              >
                {live && active === i && (
                  <span
                    key={active}
                    style={{
                      position: "absolute",
                      left: 0,
                      top: -1,
                      height: 2,
                      width: 0,
                      background: "#FFFFFF",
                      animation: paused ? "none" : "brandFill 6s linear forwards",
                    }}
                  />
                )}
                <span
                  className="mono"
                  style={{
                    fontSize: 10,
                    color: active === i ? "#B7C4FF" : "rgba(183,196,255,0.5)",
                    flex: "none",
                    transition: "color 0.25s ease",
                  }}
                >
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span style={{ display: "flex", flexDirection: "column", gap: 6, minWidth: 0 }}>
                  <span
                    style={{
                      fontSize: 17,
                      fontWeight: 550,
                      letterSpacing: "-0.01em",
                      color: active === i ? "#FFFFFF" : "rgba(255,255,255,0.55)",
                      transition: "color 0.25s ease",
                    }}
                  >
                    {item.name}
                  </span>
                  <span style={{ fontSize: 12.5, lineHeight: 1.45, color: "rgba(255,255,255,0.5)" }}>{item.sub}</span>
                </span>
                <span
                  className="mono"
                  style={{
                    marginLeft: "auto",
                    fontSize: 9,
                    letterSpacing: "0.1em",
                    color: "rgba(183,196,255,0.7)",
                    flex: "none",
                  }}
                >
                  {item.listTag}
                </span>
              </div>
            ))}
          </div>

          {/* detail */}
          <div
            className="results-list-detail"
            style={{
              borderLeft: "1px solid rgba(255,255,255,0.28)",
              paddingLeft: "clamp(28px, 3vw, 44px)",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <div style={{ display: "flex", alignItems: "baseline", justifyContent: "space-between", gap: 16 }}>
              <span className="mono" style={{ fontSize: 11, color: "#B7C4FF" }}>
                {String(active + 1).padStart(2, "0")} / 09
              </span>
              <span className="mono" style={{ fontSize: 9.5, letterSpacing: "0.1em", color: "#B7C4FF" }}>
                {b.detailTag}
              </span>
            </div>
            <div
              style={{
                marginTop: 14,
                fontSize: "clamp(22px, 2.2vw, 30px)",
                fontWeight: 600,
                letterSpacing: "-0.015em",
                color: "#FFFFFF",
              }}
            >
              {b.name}
            </div>
            <p style={{ margin: "14px 0 0", fontSize: 14.5, lineHeight: 1.7, color: "rgba(255,255,255,0.8)", textWrap: "pretty" }}>
              {b.desc}
            </p>
            <p style={{ margin: "12px 0 0", fontSize: 14, lineHeight: 1.7, color: "rgba(255,255,255,0.66)", textWrap: "pretty" }}>
              {b.desc2}
            </p>

            <div
              style={{
                marginTop: 26,
                background: "#FFFFFF",
                borderRadius: 14,
                overflow: "hidden",
                width: "fit-content",
                maxWidth: "100%",
                padding: b.logoPad,
              }}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={b.logo}
                alt={`${b.name} logo`}
                style={{ display: "block", height: b.logoHeight, maxWidth: "100%", objectFit: "contain" }}
              />
            </div>

            <div style={{ marginTop: 30 }}>
              <div className="mono" style={{ fontSize: 9.5, letterSpacing: "0.12em", color: "#B7C4FF" }}>
                HIGHLIGHTS
              </div>
              <div style={{ marginTop: 8 }}>
                {b.facts.map((f, j) => (
                  <div
                    key={j}
                    style={{
                      display: "flex",
                      gap: 14,
                      borderTop: "1px solid rgba(255,255,255,0.22)",
                      padding: "12px 2px",
                      fontSize: 13.5,
                      lineHeight: 1.55,
                      color: "rgba(255,255,255,0.85)",
                    }}
                  >
                    <span className="mono" style={{ fontSize: 10, color: "#B7C4FF", flex: "none", paddingTop: 3 }}>
                      {String(j + 1).padStart(2, "0")}
                    </span>
                    <span style={{ textWrap: "pretty" }}>{f}</span>
                  </div>
                ))}
              </div>
            </div>

            <div style={{ marginTop: "auto", paddingTop: 26 }}>
              <div className="mono" style={{ fontSize: 9.5, letterSpacing: "0.12em", color: "#B7C4FF" }}>
                SCOPE
              </div>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 6, marginTop: 10 }}>
                {b.scope.map((s) => (
                  <span
                    key={s}
                    className="mono"
                    style={{
                      fontSize: 9.5,
                      letterSpacing: "0.06em",
                      color: "#FFFFFF",
                      border: "1px solid rgba(255,255,255,0.4)",
                      borderRadius: 999,
                      padding: "5px 11px",
                    }}
                  >
                    {s}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

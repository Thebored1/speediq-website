"use client";

import { useEffect, useRef, useState } from "react";
import { MOCKUPS } from "./mockups";

export default function Services() {
  const trackRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);
  const [hdrHidden, setHdrHidden] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const track = trackRef.current;
      if (!track) return;
      const r = track.getBoundingClientRect();
      const span = r.height - window.innerHeight;
      if (span <= 0) return;
      const p = Math.min(1, Math.max(0, -r.top / span));
      const idx = Math.min(6, Math.max(0, Math.floor(p * 7)));
      const hid = p > 0.07;
      setActive((a) => (a !== idx ? idx : a));
      setHdrHidden((h) => (h !== hid ? hid : h));
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll, { passive: true });
    onScroll();
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  return (
    <section
      id="services"
      data-screen-label="Services"
      style={{ margin: "20px 20px 0", background: "#EEF2FB", borderRadius: 28 }}
    >
      <div ref={trackRef} style={{ position: "relative", height: "400vh" }}>
        <div
          style={{
            position: "sticky",
            top: 0,
            minHeight: "100svh",
            display: "flex",
            alignItems: "center",
            padding: "40px clamp(20px, calc(8vw - 20px), 108px)",
            boxSizing: "border-box",
            overflow: "hidden",
          }}
        >
          <div
            className="svc-ind"
            style={{
              position: "absolute",
              left: "clamp(14px, 2vw, 34px)",
              top: "50%",
              transform: "translateY(-50%)",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: 10,
              zIndex: 5,
            }}
          >
            {[0, 1, 2, 3, 4, 5, 6].map((i) => (
              <div
                key={i}
                style={{
                  width: 6,
                  height: active === i ? 34 : 6,
                  background: active === i ? "#0526D9" : "#C3C8DA",
                  borderRadius: 999,
                  transition: "height 0.4s ease, background 0.4s ease",
                }}
              />
            ))}
          </div>

          <div style={{ maxWidth: 1240, margin: "0 auto", width: "100%" }}>
            <div
              style={{
                display: "grid",
                gridTemplateRows: hdrHidden ? "0fr" : "1fr",
                transition: "grid-template-rows 0.5s ease",
              }}
            >
              <div style={{ overflow: "hidden", minHeight: 0 }}>
                <div
                  style={{
                    opacity: hdrHidden ? 0 : 1,
                    transform: hdrHidden ? "translateY(-44px)" : "translateY(0px)",
                    transition: "opacity 0.5s ease, transform 0.5s ease",
                  }}
                >
                  <div
                    className="mono"
                    style={{
                      fontSize: 12,
                      letterSpacing: "0.14em",
                      color: "#0526D9",
                      display: "flex",
                      alignItems: "center",
                      gap: 10,
                    }}
                  >
                    <span style={{ width: 7, height: 7, background: "#0526D9", display: "inline-block" }} />
                    <span>FULL-STACK SERVICES</span>
                  </div>
                  <h2
                    style={{
                      margin: "18px 0 0",
                      maxWidth: 640,
                      fontSize: "clamp(36px, 3.6vw, 52px)",
                      lineHeight: 1.1,
                      letterSpacing: "-0.025em",
                      fontWeight: 500,
                      color: "#0A0E2A",
                      textWrap: "balance",
                    }}
                  >
                    Everything you need to scale, under one roof
                  </h2>
                </div>
              </div>
            </div>

            <div
              className="svc-layerbox"
              style={{
                position: "relative",
                minHeight: "clamp(360px, 46vh, 450px)",
                marginTop: "clamp(24px, 3vw, 36px)",
              }}
            >
              {MOCKUPS.map((node, i) => (
                <div
                  key={i}
                  style={{
                    position: "absolute",
                    inset: 0,
                    zIndex: active === i ? 2 : 1,
                    opacity: active === i ? 1 : 0,
                    transform: active === i ? "translateY(0px) scale(1)" : "translateY(24px) scale(0.96)",
                    filter: active === i ? "blur(0px)" : "blur(8px)",
                    transition: "opacity 0.6s cubic-bezier(0.22, 1, 0.36, 1), transform 0.6s cubic-bezier(0.22, 1, 0.36, 1), filter 0.6s cubic-bezier(0.22, 1, 0.36, 1)",
                    pointerEvents: active === i ? "auto" : "none",
                  }}
                >
                  {node}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

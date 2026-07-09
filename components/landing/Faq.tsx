"use client";

import { useState } from "react";
import Reveal from "../Reveal";
import { MonoLabel } from "../common";

const items: [string, string][] = [
  [
    "What services does SpeedIQ offer?",
    "Everything a growing brand needs, end to end: corporate identity, web & app development, advertising & growth, 3D exterior & interior modeling, events & exhibitions, and print production — as one engagement or à la carte.",
  ],
  [
    "How do you measure success?",
    "We baseline before we start, agree on targets up front, and report against them in a live dashboard — traffic, conversion, and brand awareness, not vanity metrics.",
  ],
  [
    "How long does a typical project take?",
    "An identity lands in 3–4 weeks; a full site plus growth engine in 6–10. Work ships in phases, so value starts landing before the engagement ends.",
  ],
  [
    "Do you work with startups or established brands?",
    "Both. Most of our clients are growth-stage, but the process scales — from first identity to a rebrand across dozens of markets.",
  ],
  [
    "What happens after launch?",
    "Every project includes post-launch support. Most clients move to an optimization retainer — the same team keeps iterating so results compound.",
  ],
  [
    "How does pricing work?",
    "Fixed-scope projects or a monthly retainer — your choice. Every engagement starts with a free audit and a quote before any work begins.",
  ],
];

export default function Faq() {
  const [open, setOpen] = useState(0);

  return (
    <section id="insights" style={{ padding: "clamp(64px, 9vw, 110px) clamp(24px, 8vw, 128px)" }}>
      <Reveal
        className="faq-grid"
        style={{
          maxWidth: 1240,
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "5fr 7fr",
          gap: 64,
          alignItems: "start",
        }}
      >
        <div>
          <MonoLabel text="FAQ" />
          <h2
            style={{
              margin: "18px 0 0",
              fontSize: "clamp(36px, 3.6vw, 52px)",
              lineHeight: 1.1,
              letterSpacing: "-0.025em",
              fontWeight: 500,
              color: "#0A0E2A",
            }}
          >
            Your questions, answered
          </h2>
          <p style={{ margin: "20px 0 0", fontSize: 15, lineHeight: 1.6, color: "#565B72", maxWidth: 380 }}>
            Still have questions?{" "}
            <a href="#" className="link-blue" style={{ fontWeight: 500 }}>
              Talk to a human →
            </a>
          </p>
        </div>
        <div>
          {items.map(([q, a], i) => {
            const isOpen = open === i;
            return (
              <div
                key={i}
                onClick={() => setOpen(isOpen ? -1 : i)}
                style={{
                  borderTop: "1px solid #E7E7E1",
                  borderBottom: i === items.length - 1 ? "1px solid #E7E7E1" : undefined,
                  padding: "24px 4px",
                  cursor: "pointer",
                }}
              >
                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: 24 }}>
                  <div style={{ fontSize: 17, fontWeight: 600, color: "#0A0E2A" }}>{q}</div>
                  <div style={{ fontSize: 22, fontWeight: 400, color: "#0526D9", width: 24, textAlign: "center", flex: "none" }}>
                    {isOpen ? "−" : "+"}
                  </div>
                </div>
                <div
                  style={{
                    display: "grid",
                    gridTemplateRows: isOpen ? "1fr" : "0fr",
                    transition: "grid-template-rows 0.3s ease",
                  }}
                >
                  <div style={{ overflow: "hidden", minHeight: 0 }}>
                    <p style={{ margin: "14px 0 2px", fontSize: 15, lineHeight: 1.6, color: "#565B72", maxWidth: 600 }}>
                      {a}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </Reveal>
    </section>
  );
}

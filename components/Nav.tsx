"use client";

import Link from "next/link";
import { useState } from "react";
import { Logo } from "./common";

const SERVICES: [string, string, string][] = [
  ["Brand & Corporate Identity", "/services/brand-identity", "Logos, identities, guidelines"],
  ["Web & App Development", "/services/web-development", "Sites, web & mobile apps"],
  ["Advertising & Growth", "/services/advertising-growth", "Campaigns, media, SEO"],
  ["3D Modeling", "/services/3d-modeling", "Exterior & interior renders"],
  ["Events & Exhibitions", "/services/events-exhibitions", "Stands & event branding"],
  ["Print & Production", "/services/print-production", "Packaging, signage, print"],
  ["CRM", "https://app.speediq.ai", "Customer relationship management"],
];

const OTHER: [string, string][] = [
  ["Casework", "/casework"],
  ["About", "#about"],
  ["Insights", "#insights"],
];

export default function Nav({ prefix = "" }: { prefix?: string }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav
      style={{
        position: "relative",
        zIndex: 10,
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "26px clamp(24px, 8vw, 128px)",
        gap: 24,
      }}
    >
      <a href={prefix || "/"} style={{ display: "flex", alignItems: "center", gap: 10, color: "#FFFFFF" }}>
        <Logo color="#FFFFFF" size={27} />
        <span style={{ fontSize: 19, fontWeight: 700, letterSpacing: "-0.02em", lineHeight: 1 }}>SpeedIQ</span>
      </a>

      <div
        className="nav-links"
        style={{ display: "flex", alignItems: "center", gap: 36, fontSize: 16.5, fontWeight: 500 }}
      >
        <div className="svc-nav-group" style={{ position: "relative" }}>
          <a href={prefix + "#services"} className="nav-link" style={{ display: "inline-flex", alignItems: "center", gap: 6 }}>
            Services
            <span className="svc-caret" aria-hidden>
              ▾
            </span>
          </a>

          <div className="svc-drop-panel" style={{ position: "absolute", top: "100%", left: -16, paddingTop: 14 }}>
            <div
              style={{
                width: 320,
                background: "#FFFFFF",
                borderRadius: 4,
                boxShadow: "0 24px 60px -20px rgba(2,10,60,0.45)",
                border: "1px solid #E7EAF5",
                padding: 8,
              }}
            >
              {SERVICES.map(([label, href, blurb]) => (
                <Link key={label} href={href} className="svc-drop-item">
                  <span
                    className="svc-drop-title"
                    style={{ display: "block", fontSize: 14.5, fontWeight: 600, color: "#0A0E2A" }}
                  >
                    {label}
                  </span>
                  <span style={{ display: "block", fontSize: 12.5, color: "#8A8FA3", marginTop: 2 }}>{blurb}</span>
                </Link>
              ))}
            </div>
          </div>
        </div>

        {OTHER.map(([label, href]) => (
          <Link key={label} href={href} className="nav-link">
            {label}
          </Link>
        ))}
      </div>

      <a
        href="#"
        className="btn-ghost-sm desktop-only"
        style={{ borderRadius: 999, padding: "9px 18px", fontSize: 14, fontWeight: 500 }}
      >
        Book intro call
      </a>

      <button
        className="mobile-menu-btn"
        onClick={() => setMobileMenuOpen(true)}
        aria-label="Open menu"
      >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <line x1="3" y1="12" x2="21" y2="12"></line>
          <line x1="3" y1="6" x2="21" y2="6"></line>
          <line x1="3" y1="18" x2="21" y2="18"></line>
        </svg>
      </button>

      {mobileMenuOpen && (
        <div style={{
          position: "fixed",
          inset: 0,
          background: "#0A0E2A",
          zIndex: 100,
          display: "flex",
          flexDirection: "column",
          padding: "26px 24px",
          color: "#FFFFFF",
          overflowY: "auto"
        }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 40 }}>
            <a href={prefix || "/"} style={{ display: "flex", alignItems: "center", gap: 10, color: "#FFFFFF" }} onClick={() => setMobileMenuOpen(false)}>
              <Logo color="#FFFFFF" size={27} />
              <span style={{ fontSize: 19, fontWeight: 700, letterSpacing: "-0.02em", lineHeight: 1 }}>SpeedIQ</span>
            </a>
            <button
              onClick={() => setMobileMenuOpen(false)}
              style={{ background: "transparent", border: "none", color: "#FFFFFF", cursor: "pointer", padding: 8 }}
              aria-label="Close menu"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            </button>
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: 24, fontSize: 20, fontWeight: 500 }}>
            <div style={{ borderBottom: "1px solid rgba(255,255,255,0.1)", paddingBottom: 24, display: "flex", flexDirection: "column", gap: 16 }}>
              <div style={{ fontSize: 14, color: "#8A8FA3", textTransform: "uppercase", letterSpacing: "0.1em" }}>Services</div>
              {SERVICES.map(([label, href]) => (
                <Link key={label} href={href} onClick={() => setMobileMenuOpen(false)} style={{ color: "#FFFFFF" }}>
                  {label}
                </Link>
              ))}
            </div>
            
            <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
              {OTHER.map(([label, href]) => (
                <Link key={label} href={href} onClick={() => setMobileMenuOpen(false)} style={{ color: "#FFFFFF" }}>
                  {label}
                </Link>
              ))}
            </div>

            <a
              href="#"
              className="btn-blue"
              style={{ borderRadius: 999, padding: "14px 24px", fontSize: 16, fontWeight: 500, textAlign: "center", marginTop: 20 }}
            >
              Book intro call
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}

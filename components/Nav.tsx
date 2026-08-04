import Link from "next/link";
import { Logo } from "./common";

const SERVICES: [string, string, string][] = [
  ["Brand & Corporate Identity", "/services/brand-identity", "Logos, identities, guidelines"],
  ["Web & App Development", "/services/web-development", "Sites, web & mobile apps"],
  ["Advertising & Growth", "/services/advertising-growth", "Campaigns, media, SEO"],
  ["3D Modeling", "/services/3d-modeling", "Exterior & interior renders"],
  ["Events & Exhibitions", "/services/events-exhibitions", "Stands & event branding"],
  ["Print & Production", "/services/print-production", "Packaging, signage, print"],
  ["CRM & Marketing Automation", "https://app.speediq.ai/", "Inbox, pipeline, automation"],
];

const OTHER: [string, string][] = [
  ["Casework", "/casework"],
  ["About", "/about"],
  ["Contact", "/contact"],
];

export default function Nav({ prefix = "" }: { prefix?: string }) {
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
          <span
            className="nav-link"
            style={{ display: "inline-flex", alignItems: "center", gap: 6, cursor: "default" }}
            tabIndex={0}
            aria-haspopup="true"
          >
            Services
            <span className="svc-caret" aria-hidden>
              ▾
            </span>
          </span>

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
          <a key={label} href={href.startsWith("#") ? prefix + href : href} className="nav-link">
            {label}
          </a>
        ))}
      </div>

      <a
        href="#"
        className="btn-ghost-sm"
        style={{ borderRadius: 999, padding: "9px 18px", fontSize: 14, fontWeight: 500 }}
      >
        Book intro call
      </a>
    </nav>
  );
}

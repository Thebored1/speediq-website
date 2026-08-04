import Link from "next/link";
import Reveal from "./Reveal";
import { Logo } from "./common";

const services: [string, string][] = [
  ["Brand & Corporate Identity", "/services/brand-identity"],
  ["Web & App Development", "/services/web-development"],
  ["Advertising & Growth", "/services/advertising-growth"],
  ["3D Modeling", "/services/3d-modeling"],
  ["Events & Exhibitions", "/services/events-exhibitions"],
  ["Print & Production", "/services/print-production"],
  ["CRM & Marketing Automation", "https://app.speediq.ai/"],
];
const caseStudies: [string, string][] = [
  ["Ethmar", "/casework/ethmar"],
  ["Jaroudi Media", "/casework/jaroudi"],
  ["Maceen Capital", "/casework/maceen"],
  ["Villate", "/casework/villate"],
  ["Leil Nhar", "/casework/leilnhar"],
  ["Amesys Bull", "/casework/amesys"],
];
const company: [string, string][] = [
  ["About", "/about"],
  ["Casework", "/casework"],
  ["Contact", "/contact"],
];
const bottom: [string, string][] = [
  ["Home", "/"],
  ["Casework", "/casework"],
  ["About", "/about"],
  ["Contact", "/contact"],
];

const colHead: React.CSSProperties = {
  fontSize: 11.5,
  letterSpacing: "0.12em",
  color: "var(--muted)",
};
const colWrap: React.CSSProperties = {
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
  gap: 13,
  marginTop: 20,
};

function Column({ head, items }: { head: string; items: [string, string][] }) {
  return (
    <div>
      <div className="mono" style={colHead}>
        {head}
      </div>
      <div style={colWrap}>
        {items.map(([label, href]) => (
          <Link key={label} href={href} className="footer-link" style={{ fontSize: 15 }}>
            {label}
          </Link>
        ))}
      </div>
    </div>
  );
}

export default function Footer() {
  return (
    <footer style={{ padding: "clamp(56px, 8vw, 88px) clamp(24px, 8vw, 128px) 36px" }}>
      <div style={{ maxWidth: 1240, margin: "0 auto" }}>
        <Reveal
          style={{
            display: "flex",
            alignItems: "flex-start",
            justifyContent: "space-between",
            gap: 48,
            flexWrap: "wrap",
          }}
        >
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
              <Logo color="#0526D9" size={28} />
              <span style={{ fontSize: 20, fontWeight: 700, letterSpacing: "-0.02em", color: "var(--ink)" }}>
                SpeedIQ
              </span>
            </div>
            <p style={{ margin: "12px 0 0", fontSize: 14.5, lineHeight: 1.6, color: "var(--body)", maxWidth: 280 }}>
              The full-stack digital agency for brands that want to climb, quarter after quarter.
            </p>
            <a
              href="mailto:hello@speediq.ai"
              className="link-blue"
              style={{ display: "inline-block", marginTop: 16, fontSize: 15.5, fontWeight: 600 }}
            >
              hello@speediq.ai
            </a>
            <div>
              <Link
                href="/contact"
                className="btn-blue"
                style={{
                  display: "inline-block",
                  marginTop: 20,
                  padding: "12px 24px",
                  borderRadius: 999,
                  fontWeight: 600,
                  fontSize: 14.5,
                }}
              >
                Book an intro call
              </Link>
            </div>
          </div>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 160px), 1fr))",
              gap: 32,
              flex: "1 1 480px",
            }}
          >
            <Column head="SERVICES" items={services} />
            <Column head="CASE STUDIES" items={caseStudies} />
            <Column head="COMPANY" items={company} />
          </div>
        </Reveal>

        <div
          style={{
            borderTop: "1px solid #ECECE6",
            marginTop: 72,
            paddingTop: 26,
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: 24,
            flexWrap: "wrap",
          }}
        >
          <div style={{ fontSize: 13.5, color: "var(--muted)" }}>© 2026 SpeedIQ. All rights reserved.</div>
          <div style={{ display: "flex", gap: 24, flexWrap: "wrap" }}>
            {bottom.map(([label, href]) => (
              <Link key={label} href={href} className="footer-link-sm" style={{ fontSize: 13.5 }}>
                {label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}

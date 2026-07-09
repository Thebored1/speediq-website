import Link from "next/link";
import Reveal from "./Reveal";
import { Logo } from "./common";

const services = [
  ["Brand & Corporate Identity", "/services/brand-identity"],
  ["Web & App Development", "/services/web-development"],
  ["Advertising & Growth", "/services/advertising-growth"],
  ["3D Modeling", "/services/3d-modeling"],
  ["Events & Exhibitions", "/services/events-exhibitions"],
  ["Print & Production", "/services/print-production"],
];
const company = [
  ["About", "#about"],
  ["Casework", "/casework"],
  ["Blog", "#"],
  ["Careers", "#"],
  ["Contact", "#"],
];
const resources = ["Free Audit", "Pricing", "Newsletter", "Brand Assets"];
const legal = ["Privacy Policy", "Terms of Service", "Cookie Policy"];

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
          </div>
          <div>
            <div className="mono" style={colHead}>
              SUBSCRIBE TO OUR NEWSLETTER
            </div>
            <div style={{ display: "flex", gap: 10, marginTop: 14, flexWrap: "wrap" }}>
              <input
                type="email"
                placeholder="Enter your email"
                style={{
                  border: "1px solid #D8D8D0",
                  borderRadius: 999,
                  padding: "12px 20px",
                  fontSize: 14.5,
                  fontFamily: "var(--font-instrument), sans-serif",
                  color: "var(--ink)",
                  width: "min(250px, 100%)",
                  outline: "none",
                  background: "#FFFFFF",
                }}
              />
              <a
                href="#"
                className="btn-blue"
                style={{ padding: "12px 24px", borderRadius: 999, fontWeight: 600, fontSize: 14.5, flex: "none" }}
              >
                Subscribe
              </a>
            </div>
          </div>
        </Reveal>

        <Reveal
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 160px), 1fr))",
            gap: 32,
            marginTop: 72,
          }}
        >
          <div>
            <div className="mono" style={colHead}>SERVICES</div>
            <div style={colWrap}>
              {services.map(([label, href]) => (
                <Link key={label} href={href} className="footer-link" style={{ fontSize: 15 }}>
                  {label}
                </Link>
              ))}
            </div>
          </div>
          <div>
            <div className="mono" style={colHead}>COMPANY</div>
            <div style={colWrap}>
              {company.map(([label, href]) => (
                <Link key={label} href={href} className="footer-link" style={{ fontSize: 15 }}>
                  {label}
                </Link>
              ))}
            </div>
          </div>
          <div>
            <div className="mono" style={colHead}>RESOURCES</div>
            <div style={colWrap}>
              {resources.map((label) => (
                <a key={label} href="#" className="footer-link" style={{ fontSize: 15 }}>
                  {label}
                </a>
              ))}
            </div>
          </div>
          <div>
            <div className="mono" style={colHead}>LEGAL</div>
            <div style={colWrap}>
              {legal.map((label) => (
                <a key={label} href="#" className="footer-link" style={{ fontSize: 15 }}>
                  {label}
                </a>
              ))}
            </div>
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
          <div style={{ fontSize: 13.5, color: "var(--muted)" }}>© 2026 SpeedIQ Inc. All rights reserved.</div>
          <div style={{ display: "flex", gap: 24 }}>
            {["Home", "Services", "Blog", "Contact"].map((l) => (
              <a key={l} href="#" className="footer-link-sm" style={{ fontSize: 13.5 }}>
                {l}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}

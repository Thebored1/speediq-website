import Reveal from "../Reveal";
import { MonoLabel } from "../common";

function art(src: string, alt: string, rotate = 0) {
  return (
    <img
      src={src}
      alt={alt}
      style={{
        width: "100%",
        height: "100%",
        objectFit: "contain",
        display: "block",
        transform: rotate ? `rotate(${rotate}deg)` : undefined,
      }}
    />
  );
}

const steps = [
  ["STEP 1", "Audit your brand & channels", "We map your positioning, site performance, and funnel to find the gaps worth closing first.", art("/photos/Audit%20your%20brand.png", "Audit your brand & channels", 9)],
  ["STEP 2", "Build the strategy", "Positioning, messaging, and a channel roadmap with clear targets — agreed before any pixels ship.", art("/photos/Build%20the%20strategy-Photoroom.png", "Build the strategy")],
  ["STEP 3", "Launch across every touchpoint", "Identity, website, content, and campaigns shipped by one team — in weeks, not quarters.", art("/photos/Launch%20across%20every%20touchpoint-Photoroom.png", "Launch across every touchpoint")],
  ["STEP 4", "Optimize with real-time insights", "Live dashboards track what's working; we iterate weekly so results compound.", art("/photos/Optimize%20with%20real-time%20insights-Photoroom.png", "Optimize with real-time insights")],
] as const;

export default function Process() {
  return (
    <section
      style={{
        margin: "0 20px",
        background: "#EEF2FB",
        borderRadius: 28,
        padding: "clamp(64px, 8vw, 100px) clamp(20px, calc(8vw - 20px), 108px)",
      }}
    >
      <div style={{ maxWidth: 1240, margin: "0 auto" }}>
        <Reveal>
          <MonoLabel text="HOW WE WORK" center />
        </Reveal>
        <Reveal>
          <h2
            style={{
              margin: "20px auto 0",
              maxWidth: 820,
              textAlign: "center",
              fontSize: "clamp(36px, 3.6vw, 52px)",
              lineHeight: 1.1,
              letterSpacing: "-0.025em",
              fontWeight: 500,
              color: "#0A0E2A",
            }}
          >
            Audit, build, launch &amp; optimize
            <br />— in a single engagement
          </h2>
        </Reveal>
        <div
          className="process-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(2, minmax(0, 1fr))",
            gap: "56px 24px",
            marginTop: 64,
          }}
        >
          {steps.map(([label, title, body, art]) => (
            <Reveal key={label} style={{ display: "flex", flexDirection: "column", gap: 22 }}>
              <div>
                <div className="mono" style={{ fontSize: 12, letterSpacing: "0.14em", color: "#8A8FA3" }}>
                  {label}
                </div>
                <div style={{ marginTop: 10, fontSize: 21, fontWeight: 600, color: "#0A0E2A", letterSpacing: "-0.01em" }}>
                  {title}
                </div>
                <p style={{ margin: "10px 0 0", fontSize: 15, lineHeight: 1.6, color: "#565B72", maxWidth: 460 }}>
                  {body}
                </p>
              </div>
              <div
                style={{
                  height: 280,
                  borderRadius: 18,
                  overflow: "hidden",
                  background: "#0526D9",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                {art}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

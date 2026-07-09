import Reveal from "../Reveal";

const pillars = [
  ["Creative", "01", "Identity, campaigns, web & apps, photography and film — the work your audience actually sees."],
  ["Consultation", "02", "Media strategy, planning, and straight marketing advice — thinking done before anything ships."],
  ["Production", "03", "Signage, packaging, printing, and exhibition builds that survive contact with the real world."],
];

export default function Studio() {
  return (
    <section id="about" style={{ padding: "clamp(72px, 10vw, 130px) clamp(24px, 8vw, 128px) clamp(56px, 8vw, 100px)" }}>
      <div style={{ maxWidth: 1240, margin: "0 auto" }}>
        <Reveal style={{ display: "flex", alignItems: "center", gap: 14 }}>
          <span style={{ display: "flex", alignItems: "flex-end", gap: 3 }}>
            <span style={{ display: "block", width: 5, height: 9, background: "#0526D9" }} />
            <span style={{ display: "block", width: 5, height: 14, background: "#0526D9" }} />
            <span style={{ display: "block", width: 5, height: 19, background: "#0526D9" }} />
          </span>
          <span className="mono" style={{ fontSize: 12, letterSpacing: "0.14em", color: "#0526D9" }}>
            THE STUDIO
          </span>
        </Reveal>
        <Reveal>
          <h2
            style={{
              margin: "26px 0 0",
              maxWidth: 1020,
              fontSize: "clamp(26px, 2.8vw, 42px)",
              lineHeight: 1.22,
              letterSpacing: "-0.022em",
              fontWeight: 500,
              color: "#0A0E2A",
              textWrap: "balance",
            }}
          >
            SpeedIQ is a creative studio — <span style={{ color: "#99A0B8" }}>strategy, design, and production,</span>{" "}
            compounding every quarter.
          </h2>
        </Reveal>
        <Reveal
          className="pillar-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, minmax(0, 1fr))",
            gap: "clamp(24px, 3vw, 48px)",
            marginTop: "clamp(48px, 6vw, 72px)",
          }}
        >
          {pillars.map(([title, num, body]) => (
            <div key={num} style={{ borderTop: "2px solid #0526D9", paddingTop: 22 }}>
              <div style={{ display: "flex", alignItems: "baseline", justifyContent: "space-between", gap: 12 }}>
                <span style={{ fontSize: 18, fontWeight: 650, letterSpacing: "-0.01em", color: "#0A0E2A" }}>
                  {title}
                </span>
                <span className="mono" style={{ fontSize: 12, color: "#8A8FA3" }}>
                  {num}
                </span>
              </div>
              <p style={{ margin: "12px 0 0", fontSize: 14.5, lineHeight: 1.6, color: "#565B72", textWrap: "pretty" }}>
                {body}
              </p>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  );
}

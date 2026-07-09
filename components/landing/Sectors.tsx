import Reveal from "../Reveal";
import { MonoLabel } from "../common";

const sectors = [
  ["01", "Food & FMCG", "Ethmar"],
  ["02", "Media production", "Jaroudi Media"],
  ["03", "Investment & banking", "Maceen Capital"],
  ["04", "Real estate", "Villate"],
  ["05", "Retail", "Retail Projects"],
  ["06", "Defence & aerospace", "EADS Defence & Security"],
  ["07", "Technology", "Amesys · Bull Group"],
  ["08", "Power systems", "HBL Power Systems"],
  ["09", "Food & beverage", "Leil Nhar"],
];

export default function Sectors() {
  return (
    <section style={{ padding: "clamp(64px, 9vw, 110px) clamp(24px, 8vw, 128px)" }}>
      <div style={{ maxWidth: 1240, margin: "0 auto" }}>
        <Reveal>
          <MonoLabel text="SECTORS" />
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
            Nine sectors, one approach
          </h2>
          <p
            style={{
              margin: "18px 0 0",
              maxWidth: 560,
              fontSize: 16,
              lineHeight: 1.6,
              color: "#565B72",
              textWrap: "pretty",
            }}
          >
            From supermarket shelves to defence expos — the same audit-to-launch engagement, tuned to each floor.
          </p>
        </Reveal>
        <Reveal
          className="sector-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, minmax(0, 1fr))",
            gap: "0 clamp(28px, 3vw, 48px)",
            marginTop: "clamp(32px, 4vw, 48px)",
          }}
        >
          {sectors.map(([num, title, client]) => (
            <div key={num} style={{ borderTop: "1px solid #E7E7E1", padding: "18px 2px 22px" }}>
              <div className="mono" style={{ fontSize: 10, color: "#8A8FA3" }}>
                {num}
              </div>
              <div style={{ marginTop: 8, fontSize: 18, fontWeight: 600, letterSpacing: "-0.01em", color: "#0A0E2A" }}>
                {title}
              </div>
              <div style={{ marginTop: 4, fontSize: 13.5, color: "#8A8FA3" }}>{client}</div>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  );
}

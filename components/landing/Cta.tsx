import Reveal from "../Reveal";
import { MonoLabel } from "../common";

const ctaBars = Array.from({ length: 22 }, (_, i) => {
  const t = i / 21;
  return {
    h: (8 + 92 * t).toFixed(1) + "%",
    bg: `rgba(255,255,255,${(0.12 + 0.34 * t).toFixed(3)})`,
  };
});

export default function Cta() {
  return (
    <section
      style={{
        margin: "0 20px",
        background: "#0526D9",
        borderRadius: 28,
        overflow: "hidden",
        position: "relative",
        textAlign: "center",
        padding: "clamp(72px, 10vw, 110px) clamp(20px, calc(8vw - 20px), 108px) 0",
      }}
    >
      <Reveal style={{ position: "relative", zIndex: 2 }}>
        <MonoLabel text="START THE CLIMB" color="#B7C4FF" center />
        <h2
          style={{
            margin: "22px auto 0",
            maxWidth: 760,
            fontSize: "clamp(40px, 4.4vw, 64px)",
            lineHeight: 1.08,
            letterSpacing: "-0.025em",
            fontWeight: 500,
            color: "#FFFFFF",
            textWrap: "balance",
          }}
        >
          Turn your brand into a competitive advantage.
        </h2>
        <p
          style={{
            margin: "20px auto 0",
            maxWidth: 480,
            fontSize: 17,
            lineHeight: 1.55,
            color: "rgba(255,255,255,0.82)",
          }}
        >
          One senior team across identity, web, and growth — with results you can chart.
        </p>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 14, marginTop: 36, flexWrap: "wrap" }}>
          <a href="#" className="btn-white" style={{ padding: "14px 26px", borderRadius: 999, fontWeight: 600, fontSize: 15.5 }}>
            Book an intro call
          </a>
          <a href="#" className="btn-ghost" style={{ padding: "13px 24px", borderRadius: 999, fontWeight: 500, fontSize: 15.5 }}>
            Get a free audit
          </a>
        </div>
      </Reveal>
      <div
        style={{
          marginTop: "clamp(56px, 8vw, 84px)",
          marginLeft: "calc(-1 * clamp(20px, calc(8vw - 20px), 108px))",
          marginRight: "calc(-1 * clamp(20px, calc(8vw - 20px), 108px))",
          height: "clamp(90px, 12vw, 150px)",
          display: "flex",
          alignItems: "flex-end",
          gap: 4,
        }}
      >
        {ctaBars.map((bar, i) => (
          <div key={i} style={{ flex: 1, height: bar.h, background: bar.bg, borderRadius: "5px 5px 0 0" }} />
        ))}
      </div>
    </section>
  );
}

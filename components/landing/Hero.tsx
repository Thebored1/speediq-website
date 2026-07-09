import Nav from "../Nav";

function makeBars(count: number, maxH: number) {
  const minH = Math.max(3, maxH * 0.06);
  return Array.from({ length: count }, (_, i) => {
    const t = count === 1 ? 1 : i / (count - 1);
    const h = minH + (maxH - minH) * t;
    return {
      h: h.toFixed(2) + "%",
      bg: `rgba(255,255,255,${(0.1 + 0.36 * t).toFixed(3)})`,
      delay: (0.2 + i * 0.05).toFixed(2) + "s",
    };
  });
}

export default function Hero() {
  const bars = makeBars(12, 64);

  return (
    <div
      style={{
        position: "relative",
        minHeight: "clamp(600px, 92svh, 880px)",
        background: "#0526D9",
        color: "#FFFFFF",
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Nav />

      <main
        style={{
          position: "relative",
          zIndex: 3,
          padding: "clamp(36px, 8vh, 88px) clamp(24px, 4vw, 56px) 0 clamp(24px, 8vw, 128px)",
          maxWidth: 860,
        }}
      >
        <div
          className="mono"
          style={{
            fontSize: 12.5,
            letterSpacing: "0.14em",
            color: "#B7C4FF",
            display: "flex",
            alignItems: "center",
            gap: 10,
            animation: "riseIn 0.7s cubic-bezier(0.22, 0.8, 0.36, 1) 0.05s backwards",
          }}
        >
          <span style={{ width: 7, height: 7, background: "#B7C4FF", display: "inline-block" }} />
          <span>CREATIVE · CONSULTATION · PRODUCTION</span>
        </div>
        <h1
          className="hero-h1"
          style={{
            margin: "20px 0 0",
            fontFamily: "'Instrument Sans', Helvetica, sans-serif",
            fontSize: 104,
            lineHeight: 1.06,
            letterSpacing: "-0.028em",
            fontWeight: 100,
            textWrap: "balance",
            animation: "riseIn 0.7s cubic-bezier(0.22, 0.8, 0.36, 1) 0.14s backwards",
          }}
        >
          Every quarter, a&nbsp;little higher.
        </h1>
        <p
          className="hero-p"
          style={{
            margin: "24px 0 0",
            fontSize: 18,
            lineHeight: 1.55,
            color: "rgba(255,255,255,0.82)",
            maxWidth: 560,
            textWrap: "pretty",
            animation: "riseIn 0.7s cubic-bezier(0.22, 0.8, 0.36, 1) 0.24s backwards",
            width: 612,
            height: 85,
          }}
        >
          SpeedIQ runs your brand, digital, and production work end to end — senior strategists, creatives, and makers,
          with results you can chart.
        </p>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 14,
            marginTop: 36,
            flexWrap: "wrap",
            animation: "riseIn 0.7s cubic-bezier(0.22, 0.8, 0.36, 1) 0.34s backwards",
          }}
        >
          <a
            href="#"
            className="btn-white"
            style={{ padding: "14px 26px", borderRadius: 999, fontWeight: 600, fontSize: 15.5 }}
          >
            Book an intro call
          </a>
          <a
            href="#services"
            className="btn-ghost"
            style={{ padding: "13px 24px", borderRadius: 999, fontWeight: 500, fontSize: 15.5 }}
          >
            Explore services →
          </a>
        </div>
        <div
          className="mono"
          style={{
            marginTop: 28,
            fontSize: 11.5,
            letterSpacing: "0.12em",
            color: "rgba(255,255,255,0.58)",
            animation: "riseIn 0.7s cubic-bezier(0.22, 0.8, 0.36, 1) 0.44s backwards",
          }}
        >
          ETHMAR · JAROUDI MEDIA · MACEEN CAPITAL · VILLATE · EADS · H2L
        </div>
      </main>

      <div style={{ position: "absolute", inset: 0, display: "flex", alignItems: "flex-end", gap: 5, zIndex: 2 }}>
        {bars.map((bar, i) => (
          <div
            key={i}
            className="bar"
            style={{
              flex: 1,
              height: bar.h,
              background: bar.bg,
              borderRadius: "6px 6px 0 0",
              transformOrigin: "bottom",
              animation: `barGrow 0.7s cubic-bezier(0.22, 0.8, 0.36, 1) ${bar.delay} backwards`,
            }}
          />
        ))}
      </div>

    </div>
  );
}

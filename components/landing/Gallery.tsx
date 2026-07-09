import Reveal from "../Reveal";

const imgs: { src: string; alt: string; span?: number }[] = [
  { src: "/photos/leilnhar-storefront.png", alt: "Leil Nhar storefront", span: 2 },
  { src: "/photos/ethmar-packaging.png", alt: "Ethmar tuna packaging" },
  { src: "/photos/jaroudi-photography.png", alt: "Jaroudi Media photography direction", span: 2 },
  { src: "/photos/maceen-booth.png", alt: "Maceen Capital exhibition booth" },
  { src: "/photos/leilnhar-signage.png", alt: "Leil Nhar restaurant interior" },
  { src: "/photos/villa-render.png", alt: "Spanish-style villa render" },
  { src: "/photos/amesys-stand.png", alt: "Amesys Bull exhibition stand" },
];

export default function Gallery() {
  return (
    <section
      style={{
        margin: "0 20px",
        background: "#EEF2FB",
        borderRadius: 28,
        padding: "clamp(64px, 8vw, 100px) clamp(20px, calc(8vw - 20px), 108px)",
      }}
    >
      <Reveal
        className="gal-grid"
        style={{
          maxWidth: 1240,
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "minmax(0, 4.4fr) repeat(3, minmax(0, 2.7fr))",
          gridAutoRows: "clamp(150px, 15vw, 205px)",
          gap: 10,
        }}
      >
        <div
          className="gal-panel"
          style={{
            gridRow: "span 3",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            padding: "clamp(24px, 3vw, 44px) clamp(24px, 3vw, 48px) clamp(24px, 3vw, 44px) 0",
          }}
        >
          <div
            className="mono"
            style={{ fontSize: 10.5, letterSpacing: "0.14em", color: "#0526D9", display: "flex", alignItems: "center", gap: 9 }}
          >
            <span style={{ width: 6, height: 6, background: "#0526D9", display: "inline-block" }} />
            <span>THE ARCHIVE</span>
          </div>
          <div>
            <div style={{ fontSize: "clamp(40px, 4.6vw, 72px)", fontWeight: 650, letterSpacing: "-0.035em", lineHeight: 1, color: "#0A0E2A" }}>
              SpeedIQ<span style={{ color: "#0526D9" }}>.</span>
            </div>
            <p style={{ margin: "18px 0 0", fontSize: 14.5, lineHeight: 1.6, color: "#565B72", maxWidth: 300, textWrap: "pretty" }}>
              Frames from shipped jobs — packaging, villas, booths, and brand worlds. The full story behind each lives in
              the case studies.
            </p>
            <div style={{ marginTop: 28 }}>
              <a
                href="#"
                className="btn-blue"
                style={{
                  padding: "13px 24px",
                  borderRadius: 999,
                  fontWeight: 600,
                  fontSize: 15,
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 10,
                }}
              >
                Browse case studies <span style={{ fontSize: 16, lineHeight: 1 }}>→</span>
              </a>
            </div>
          </div>
          <div
            className="mono"
            style={{ fontSize: 9.5, letterSpacing: "0.11em", color: "#8A8FA3" }}
          >
            IDENTITY · 3D · EXHIBITIONS · PRINT
          </div>
        </div>

        {imgs.map((im) => (
          <div
            key={im.src}
            style={{
              gridRow: im.span ? `span ${im.span}` : undefined,
              position: "relative",
              borderRadius: 14,
              overflow: "hidden",
              background: "#EEF2FB",
            }}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={im.src} alt={im.alt} style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} />
          </div>
        ))}
      </Reveal>
    </section>
  );
}

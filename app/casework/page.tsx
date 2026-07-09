import Image from "next/image";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import Reveal from "@/components/Reveal";

const CASEWORK = [
  { name: "Ethmar", type: "Corporate Identity & Packaging", img: "/photos/ethmar-packaging.png", logo: "/logos/ethmar.png", span: "normal" },
  { name: "Jaroudi Media", type: "Advertising & Photography", img: "/photos/jaroudi-photography.png", logo: "/logos/jaroudi.png", span: "normal" },
  { name: "Amesys", type: "Events & Exhibitions", img: "/photos/amesys-stand.png", logo: "/logos/amesys.png", span: "large" },
  { name: "Maceen Capital", type: "Events & Exhibitions", img: "/photos/maceen-booth.png", logo: "/logos/maceen.png", span: "normal" },
  { name: "Villate", type: "3D Rendering & Modeling", img: "/photos/villa-render.png", logo: "/logos/villate.png", span: "normal" },
  { name: "Leil Nhar", type: "Print & Production", img: "/photos/leilnhar-storefront.png", logo: "/logos/leilnhar.png", span: "large" },
  { name: "Retail Projects", type: "Corporate Identity", img: "/photos/growth-texture.jpg", logo: "/logos/rp.png", span: "normal" },
];

export default function CaseworkPage() {
  return (
    <>
      <div style={{ background: "#0526D9", color: "#FFFFFF", overflow: "hidden" }}>
        <Nav />
        <main style={{ padding: "clamp(60px, 10vh, 120px) clamp(24px, 8vw, 128px) clamp(80px, 15vh, 160px)", maxWidth: 1440, margin: "0 auto" }}>
          <Reveal style={{ maxWidth: 800 }}>
            <div className="mono" style={{ fontSize: 13, letterSpacing: "0.14em", color: "#B7C4FF", display: "flex", alignItems: "center", gap: 10 }}>
              <span style={{ width: 8, height: 8, background: "#B7C4FF", display: "inline-block" }} />
              <span>PORTFOLIO</span>
            </div>
            <h1 className="hero-h1" style={{ margin: "24px 0 0", fontSize: "clamp(56px, 8vw, 96px)", lineHeight: 1.05, letterSpacing: "-0.03em", fontWeight: 500, textWrap: "balance" }}>
              Our Casework
            </h1>
            <p style={{ margin: "24px 0 0", fontSize: 20, lineHeight: 1.6, color: "rgba(255,255,255,0.85)", maxWidth: 600 }}>
              From initial brand strategy to final production on the shelf or the exhibition floor. A selection of our end-to-end projects.
            </p>
          </Reveal>
        </main>
      </div>

      <section style={{ padding: "clamp(60px, 8vw, 120px) clamp(24px, 8vw, 128px)", background: "#EEF2FB" }}>
        <div style={{ maxWidth: 1440, margin: "0 auto" }}>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 420px), 1fr))", gap: "clamp(32px, 4vw, 56px)" }}>
            {CASEWORK.map((work) => (
              <Reveal key={work.name} style={{ display: "flex", flexDirection: "column", gap: 24, gridColumn: work.span === "large" ? "1 / -1" : "auto" }}>
                <div style={{ position: "relative", width: "100%", aspectRatio: work.span === "large" ? "21/9" : "4/3", borderRadius: 20, overflow: "hidden", background: "#DDE3FA", boxShadow: "0 24px 48px -12px rgba(10,14,42,0.1)" }}>
                  <Image src={work.img} alt={work.name} fill style={{ objectFit: "cover" }} />
                  <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(10,14,42,0.5) 0%, transparent 50%)" }}></div>
                  <div style={{ position: "absolute", bottom: 24, left: 24, width: 64, height: 64, background: "#FFFFFF", borderRadius: 12, padding: 12, boxShadow: "0 12px 32px rgba(0,0,0,0.15)" }}>
                    <div style={{ position: "relative", width: "100%", height: "100%" }}>
                      <Image src={work.logo} alt={`${work.name} logo`} fill style={{ objectFit: "contain" }} />
                    </div>
                  </div>
                </div>
                <div style={{ paddingLeft: 8 }}>
                  <h3 style={{ margin: 0, fontSize: "clamp(24px, 2.5vw, 32px)", fontWeight: 650, letterSpacing: "-0.02em", color: "#0A0E2A" }}>{work.name}</h3>
                  <div style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: 13, letterSpacing: "0.08em", color: "#565B72", marginTop: 10 }}>{work.type.toUpperCase()}</div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}

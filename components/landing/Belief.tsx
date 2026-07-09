import Reveal from "../Reveal";
import { MonoLabel } from "../common";

export default function Belief() {
  return (
    <section
      style={{
        padding: "clamp(48px, 7vw, 90px) clamp(24px, 8vw, 128px) clamp(64px, 9vw, 110px)",
        textAlign: "center",
      }}
    >
      <Reveal style={{ maxWidth: 860, margin: "0 auto" }}>
        <MonoLabel text="WE BELIEVE IN EVOLUTION" center />
        <h2
          style={{
            margin: "22px auto 0",
            fontSize: "clamp(34px, 4vw, 56px)",
            lineHeight: 1.12,
            letterSpacing: "-0.025em",
            fontWeight: 500,
            color: "#0A0E2A",
            textWrap: "balance",
          }}
        >
          If you believe in something, it will happen.
        </h2>
        <p
          style={{
            margin: "22px auto 0",
            maxWidth: 560,
            fontSize: 16.5,
            lineHeight: 1.6,
            color: "#565B72",
            textWrap: "pretty",
          }}
        >
          The belief that started this studio still runs every engagement: brands don&apos;t transform overnight — they
          evolve, deliberately, with senior people doing the work.
        </p>
      </Reveal>
    </section>
  );
}

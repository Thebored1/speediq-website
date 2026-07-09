import { CSSProperties } from "react";

export function Logo({ color = "#FFFFFF", size = 27 }: { color?: string; size?: number }) {
  return (
    <svg
      width={size}
      height={(size * 19) / 27}
      viewBox="0 0 409 290"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{ display: "block", flex: "none" }}
    >
      <path
        d="M239.482 0.348289L114.082 0.608379L23.9201 112.704C-8.23713 152.685 -7.9415 209.739 24.6283 249.384C68.4223 302.691 150.222 302.034 193.154 248.03L319.313 89.3327L332.87 89.3046L332.87 101.999L188.503 289.663L312.209 289.406L408.209 165.226L407.58 -1.3369e-05L266.596 0.292406L121.046 183.381C116.816 188.702 108.739 188.719 104.487 183.415C101.392 179.555 101.381 174.068 104.459 170.195L239.482 0.348289Z"
        fill={color}
      />
    </svg>
  );
}

export function MonoLabel({
  text,
  color = "#0526D9",
  center = false,
  style,
}: {
  text: string;
  color?: string;
  center?: boolean;
  style?: CSSProperties;
}) {
  return (
    <div
      className="mono"
      style={{
        fontSize: 12,
        letterSpacing: "0.14em",
        color,
        display: "flex",
        alignItems: "center",
        justifyContent: center ? "center" : "flex-start",
        gap: 10,
        ...style,
      }}
    >
      <span style={{ width: 7, height: 7, background: color, display: "inline-block" }} />
      <span>{text}</span>
    </div>
  );
}

import type { Metadata } from "next";
import Nav from "@/components/Nav";
import RawPage from "@/components/RawPage";
import { loadContent } from "../loadContent";

export const metadata: Metadata = { title: "Casework - SpeedIQ" };

export default function Page() {
  return (
    <div style={{ position: "relative" }}>
      <div style={{ position: "absolute", top: 0, left: 0, right: 0, zIndex: 10 }}>
        <Nav prefix="/" />
      </div>
      <RawPage html={loadContent("casework", "content.html")} />
    </div>
  );
}

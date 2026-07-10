import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Nav from "@/components/Nav";
import RawPage from "@/components/RawPage";
import { loadContent } from "../../loadContent";

const CLIENTS: Record<string, string> = {
  ethmar: "Ethmar",
  jaroudi: "Jaroudi Media",
  maceen: "Maceen Capital",
  villate: "Villate",
  leilnhar: "Leil Nhar",
  amesys: "Amesys Bull",
};

export function generateStaticParams() {
  return Object.keys(CLIENTS).map((client) => ({ client }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ client: string }>;
}): Promise<Metadata> {
  const { client } = await params;
  const name = CLIENTS[client] ?? "Case Study";
  return { title: `${name} — Case Study - SpeedIQ` };
}

export default async function Page({ params }: { params: Promise<{ client: string }> }) {
  const { client } = await params;
  if (!CLIENTS[client]) notFound();
  return (
    <div style={{ position: "relative" }}>
      <div style={{ position: "absolute", top: 0, left: 0, right: 0, zIndex: 10 }}>
        <Nav prefix="/" />
      </div>
      <RawPage html={loadContent("casework", "_cases", `${client}.html`)} />
    </div>
  );
}

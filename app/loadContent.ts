import fs from "fs";
import path from "path";

export function loadContent(...segments: string[]): string {
  return fs.readFileSync(path.join(process.cwd(), "app", ...segments), "utf8");
}

import fs from "fs";
import path from "path";

export function loadHtml(slug: string): string {
  return fs.readFileSync(path.join(process.cwd(), "app", "services", slug, "content.html"), "utf8");
}

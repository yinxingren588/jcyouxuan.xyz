import fs from "node:fs";
import path from "node:path";
import { load } from "cheerio";
import { documents, domain, finish } from "./lib";
const errors: string[] = [];
const incoming = new Set<string>();
let count = 0;
for (const d of documents()) {
  d.$("a[href],img[src],script[src],link[href]").each((_, e) => {
    const raw = d.$(e).attr("href") ?? d.$(e).attr("src")!;
    if (!raw || /^(mailto:|tel:|data:)/.test(raw)) return;
    const url = new URL(raw, domain + d.url);
    if (url.origin !== domain) return;
    count++;
    const decoded = decodeURIComponent(url.pathname);
    incoming.add(decoded);
    let target = path.join("dist", decoded);
    if (!path.extname(target) || decoded.endsWith("/"))
      target = path.join(target, "index.html");
    if (!fs.existsSync(target)) {
      errors.push(`${d.url} -> ${raw} 不存在`);
      return;
    }
    if (url.hash && target.endsWith(".html")) {
      const html = load(fs.readFileSync(target, "utf8"));
      if (
        ![...html("[id]")].some(
          (el) => html(el).attr("id") === decodeURIComponent(url.hash.slice(1)),
        )
      )
        errors.push(`${d.url} -> ${raw} 锚点不存在`);
    }
  });
}
for (const d of documents())
  if (d.url !== "/" && d.url !== "/404/" && !incoming.has(d.url))
    errors.push("孤岛页面 " + d.url);
finish("links", errors, count);

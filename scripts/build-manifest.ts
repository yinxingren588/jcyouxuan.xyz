import fs from "node:fs";
import { createHash } from "node:crypto";
import { documents, domain } from "./lib";
if (fs.existsSync('.env')) process.loadEnvFile('.env');
const indexnowKey=process.env.INDEXNOW_KEY;
if(indexnowKey){
  if(!/^[A-Za-z0-9-]{8,128}$/.test(indexnowKey))throw Error('INDEXNOW_KEY 格式无效');
  fs.writeFileSync(`dist/${indexnowKey}.txt`,indexnowKey);
}
const pages = documents()
  .filter(
    (d) => !d.$('meta[name="robots"]').attr("content")?.includes("noindex"),
  )
  .map((d) => ({
    url: domain + d.url,
    hash: createHash("sha256").update(fs.readFileSync(d.file)).digest("hex"),
    lastmod: "2026-10-16",
  }));
fs.writeFileSync("dist/content-manifest.json", JSON.stringify(pages, null, 2));
fs.copyFileSync("dist/404/index.html", "dist/404.html");
console.log(
  `Manifest: ${pages.length} indexable pages; Cloudflare 404.html created.`,
);

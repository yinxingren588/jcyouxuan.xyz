import fs from "node:fs";
import { load } from "cheerio";
import { documents, files, domain, finish } from "./lib";
const errors: string[] = [];
const titles = new Set<string>();
const descriptions = new Set<string>();
const docs = documents();
const sitemapFiles = files("dist").filter((f) => /sitemap.*\.xml$/.test(f));
const sitemapURLs = sitemapFiles.flatMap((f) =>
  [...load(fs.readFileSync(f, "utf8"), { xml: true })("url>loc")].map((e) =>
    load(e).text(),
  ),
);
const sitemapSet = new Set(sitemapURLs);
for (const d of docs) {
  const { $, url } = d;
  const expect = domain + url;
  const fail = (s: string) => errors.push(url + " " + s);
  const title = $("title").text().trim();
  if (!title || titles.has(title)) fail("缺失或重复 Title");
  titles.add(title);
  const desc = $('meta[name="description"]').attr("content");
  if (!desc || descriptions.has(desc)) fail("缺失或重复 Description");
  if (desc) descriptions.add(desc);
  if ($("h1").length !== 1) fail("H1 数量不是 1");
  if (
    $('link[rel="canonical"]').length !== 1 ||
    $('link[rel="canonical"]').attr("href") !== expect
  )
    fail("Canonical 错误");
  const robots = $('meta[name="robots"]').attr("content");
  if (!["index, follow", "noindex, follow"].includes(robots ?? ""))
    fail("Robots 错误");
  if (!robots?.includes("noindex") && !sitemapSet.has(expect))
    fail("Sitemap 缺失正式页");
  if (robots?.includes("noindex") && sitemapSet.has(expect))
    fail("Sitemap 包含 noindex");
  if ($("main").text().trim().length < 80) fail("正文过短或空白");
  const visibleMain = $("main").clone();
  visibleMain.find('script,style').remove();
  if (/\{\{|\}\}|TODO|localhost|example\.com/.test(visibleMain.text()))
    fail("遗留变量或测试文本");
  for (const field of ["og:title", "og:description", "og:url", "og:image"])
    if (!$(`meta[property="${field}"]`).attr("content")) fail("缺失 " + field);
  if (!$('meta[name="twitter:card"]').attr("content"))
    fail("缺失 Twitter Card");
  let schemas: any[] = [];
  try {
    $('script[type="application/ld+json"]').each((_, e) => {
      const value = JSON.parse($(e).text());
      schemas.push(...(Array.isArray(value) ? value : [value]));
    });
  } catch {
    fail("无效 JSON-LD");
  }
  for (const s of schemas) {
    if (s["@context"] !== "https://schema.org" || !s["@type"])
      fail("Schema 基础字段错误");
    if (
      s["@type"] === "BreadcrumbList" &&
      s.itemListElement.some(
        (b: any, i: number) =>
          b.position !== i + 1 || !b.item.startsWith(domain),
      )
    )
      fail("面包屑 Schema 错误");
    if (
      ["Article", "BlogPosting"].includes(s["@type"]) &&
      (!s.datePublished || !s.dateModified || s.headline !== $("h1").text())
    )
      fail("文章 Schema 不匹配");
    if (
      s["@type"] === "ItemList" &&
      s.itemListElement.some((b: any) => !$("main").text().includes(b.name))
    )
      fail("ItemList 与可见内容不匹配");
  }
  if (!schemas.some((s) => s["@type"] === "WebSite"))
    fail("缺失 WebSite Schema");
}
if (!fs.existsSync("dist/sitemap-index.xml"))
  errors.push("缺失 sitemap-index.xml");
if (sitemapURLs.length !== sitemapSet.size) errors.push("重复 Sitemap URL");
for (const u of sitemapURLs)
  if (!u.startsWith(domain + "/") || !docs.some((d) => domain + d.url === u))
    errors.push("错误 Sitemap URL " + u);
for (const f of sitemapFiles) {
  const xml = load(fs.readFileSync(f, "utf8"), { xml: true });
  xml("lastmod").each((_, e) => {
    if (
      xml(e).text() !== "2026-10-16T00:00:00.000Z" &&
      xml(e).text() !== "2026-10-16"
    )
      errors.push("错误 lastmod " + xml(e).text());
  });
}
if (
  !fs
    .readFileSync("dist/robots.txt", "utf8")
    .includes("Sitemap: " + domain + "/sitemap-index.xml")
)
  errors.push("robots sitemap 声明错误");
finish("seo", errors, docs.length);

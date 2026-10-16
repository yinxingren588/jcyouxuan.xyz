import fs from "node:fs";
import { createHash } from "node:crypto";
import { airports, unitCost } from "../src/data/airports";
import { files, finish, documents } from "./lib";
const errors: string[] = [];
const hashes = new Set<string>();
let count = 0;
for (const file of files("src/content/articles")) {
  count++;
  const text = fs.readFileSync(file, "utf8");
  const body = text.split("---").slice(2).join("---").trim();
  const hash = createHash("sha256").update(body).digest("hex");
  if (hashes.has(hash)) errors.push("重复正文 " + file);
  hashes.add(hash);
  if (body.length < 450) errors.push("正文不足 " + file);
  if (!/^sources: \[.+\]/m.test(text)) errors.push("缺少来源 " + file);
  if (/\{\{|\}\}|TODO/.test(text)) errors.push("未替换变量 " + file);
}
for (const a of airports) {
  if (!a.sources.length || !a.lastVerified)
    errors.push(a.name + " 来源日期缺失");
  if (a.testStatus === "tested") errors.push(a.name + " 实测状态没有配套证据");
  for (const p of a.plans) {
    if (p.price < 0 || (p.multiplier !== undefined && p.multiplier <= 0)) errors.push("错误套餐值");
    if (!p.verified && unitCost(p) !== null) errors.push("未核验套餐参与计算");
  }
}
for (const d of documents()) {
  const main = d.$("main").text();
  if (/proton|mullvad|windscribe|tunnelbear|ivpn/i.test(d.$.html())) errors.push("旧品牌残留 " + d.url);
  d.$('a[rel~="sponsored"]').each((_,el)=>{const href=d.$(el).attr('href');const a=airports.find(a=>a.affiliateUrl===href);if(!a)errors.push('非指定推广入口 '+d.url);if(!d.$(el).attr('rel')?.includes('nofollow'))errors.push('推广属性缺失 '+d.url)});
  const slug=d.url.match(/^\/airport\/([^/]+)\/$/)?.[1];
  if(slug){const a=airports.find(a=>a.slug===slug)!;if(!main.includes(a.recommendation))errors.push('推荐依据缺失 '+d.url);if(!d.$(`a[rel~="sponsored"]`).toArray().some(el=>d.$(el).attr('href')===a.affiliateUrl))errors.push('品牌推广链接缺失 '+d.url);const codes=d.$('.coupon-copy').toArray().map(el=>d.$(el).attr('data-code'));if(JSON.stringify(codes)!==JSON.stringify(a.coupon?[a.coupon]:[]))errors.push('优惠码不符 '+d.url)}
  if (/\d+(\.\d+)?\s*(Mbps|ms)|测得\s*\d+|实测评分\s*[:：]?\s*\d/.test(main))
    errors.push("需人工核验的测试主张 " + d.url);
}
for(const file of ['dist/search.json','dist/sitemap-0.xml'])if(fs.existsSync(file)&&/proton|mullvad|windscribe|tunnelbear|ivpn/i.test(fs.readFileSync(file,'utf8')))errors.push('旧品牌索引残留 '+file);
finish("content", errors, count + airports.length + documents().length);

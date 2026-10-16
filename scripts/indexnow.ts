import fs from "node:fs";
import { domain } from "./lib";
import { validateURLs, changedURLs, sendWithRetry } from "./indexnow-lib";
if (fs.existsSync('.env')) process.loadEnvFile('.env');
const args = process.argv.slice(2);
const config = JSON.parse(fs.readFileSync("indexnow.config.json", "utf8"));
const key = process.env.INDEXNOW_KEY || config.key;
if (!/^[a-zA-Z0-9-]{8,128}$/.test(key)) throw Error("需要有效 INDEXNOW_KEY");
if (
  !fs.existsSync(`dist/${key}.txt`) ||
  fs.readFileSync(`dist/${key}.txt`, "utf8").trim() !== key
)
  throw Error("构建目录缺少匹配 Key 文件，请设置构建环境 INDEXNOW_KEY 并重新构建");
const current = JSON.parse(
  fs.readFileSync("dist/content-manifest.json", "utf8"),
) as { url: string; hash: string }[];
const stateFile = ".state/indexnow.json";
const previous = fs.existsSync(stateFile)
  ? JSON.parse(fs.readFileSync(stateFile, "utf8"))
  : {};
let urls: string[] = [];
const ix = args.indexOf("--url");
const batch = args.indexOf("--file");
if (ix >= 0) urls = [args[ix + 1]];
else if (batch >= 0)
  urls = JSON.parse(fs.readFileSync(args[batch + 1], "utf8"));
else if (args.includes("--initial")) urls = current.map((p) => p.url);
else if (args.includes("--changed")) {
  if (!Object.keys(previous).length)
    throw Error(
      "无基线；首次上线后使用 --initial，不能在每次构建中重复全量提交",
    );
  urls = changedURLs(current, previous);
} else {
  console.log(
    "用法：npm run indexnow -- --url https://jcyouxuan.xyz/path/ | --file urls.json | --initial | --changed；加 --dry-run 仅预览。",
  );
  process.exit(0);
}
urls = validateURLs(urls, new URL(domain).host);
if (
  urls.some(
    (u) => !current.some((p) => p.url === u) && !Object.hasOwn(previous, u),
  )
)
  throw Error("仅提交公开可索引页面或基线中的已删除页面");
if (!urls.length) {
  console.log("没有新增、修改或删除的 URL");
  process.exit(0);
}
if (args.includes("--dry-run")) {
  console.log(
    JSON.stringify(
      { host: new URL(domain).host, urlList: urls, dryRun: true },
      null,
      2,
    ),
  );
  process.exit(0);
}
const verify = await fetch(`${domain}/${key}.txt`, {
  signal: AbortSignal.timeout(15000),
});
if (!verify.ok || (await verify.text()).trim() !== key)
  throw Error("正式域名 Key 验证失败；请先部署并验证 DNS/HTTPS");
fs.mkdirSync(".state", { recursive: true });
for (let i = 0; i < urls.length; i += 10000) {
  const urlList = urls.slice(i, i + 10000);
  const status = await sendWithRetry(
    () =>
      fetch("https://api.indexnow.org/indexnow", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          host: new URL(domain).host,
          key,
          keyLocation: `${domain}/${key}.txt`,
          urlList,
        }),
        signal: AbortSignal.timeout(20000),
      }),
    (ms) => new Promise((resolve) => setTimeout(resolve, ms)),
    (attempt, status) =>
      fs.appendFileSync(
        ".state/indexnow.log",
        JSON.stringify({
          time: new Date().toISOString(),
          attempt,
          status,
          count: urlList.length,
        }) + "\n",
      ),
  );
  for (const url of urlList) {
    const p = current.find((p) => p.url === url);
    if (p) previous[url] = p.hash;
    else delete previous[url];
  }
  fs.writeFileSync(stateFile, JSON.stringify(previous, null, 2));
  console.log(
    `HTTP ${status}: ${urlList.length} 个 URL 已通知；不代表 Bing 已收录。`,
  );
}

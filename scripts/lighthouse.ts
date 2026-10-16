import lighthouse from "lighthouse";
import * as chromeLauncher from "chrome-launcher";
import fs from "node:fs";
import { save } from "./lib";
const chrome = await chromeLauncher.launch({
  chromePath:
    process.env.CHROME_PATH ||
    (process.platform === "win32"
      ? "C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe"
      : undefined),
  chromeFlags: ["--headless=new", "--no-sandbox", "--disable-dev-shm-usage"],
});
try {
  const results = [];
  for (const route of ["/", "/compare/", "/guides/windows/"]) {
    const result = await lighthouse("http://127.0.0.1:4321" + route, {
      port: chrome.port,
      output: "json",
      onlyCategories: ["performance", "accessibility", "best-practices", "seo"],
    });
    if (!result) throw Error("Lighthouse 没有结果");
    const scores = Object.fromEntries(
      Object.entries(result.lhr.categories).map(([key, value]) => [
        key,
        Math.round((value.score ?? 0) * 100),
      ]),
    );
    results.push({
      route,
      scores,
      failures: Object.entries(result.lhr.audits)
        .filter(([, a]) => a.score !== null && a.score < 1)
        .map(([key, a]) => ({ id: key, score: a.score, title: a.title })),
    });
    fs.writeFileSync(
      `docs/qa/lighthouse-${route === "/" ? "home" : route.split("/")[1]}.json`,
      JSON.stringify(result.lhr, null, 2),
    );
  }
  save("lighthouse", {
    status: results.every(
      (r) =>
        r.scores.performance >= 90 &&
        r.scores.seo >= 95 &&
        r.scores.accessibility >= 90 &&
        r.scores["best-practices"] >= 90,
    )
      ? "PASS"
      : "FAIL",
    scope:
      "本地 Chrome，移动端模拟，单次运行三条代表路由；不代表生产环境或真实用户 Web Vitals",
    results,
  });
  if (!results.every(r => r.scores.performance >= 90 && r.scores.seo >= 95 && r.scores.accessibility >= 90 && r.scores['best-practices'] >= 90)) process.exitCode = 1;
  console.log(
    JSON.stringify(
      results.map(({ route, scores }) => ({ route, scores })),
      null,
      2,
    ),
  );
} finally {
  chrome.kill();
}

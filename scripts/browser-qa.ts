import { chromium } from "@playwright/test";
import fs from "node:fs";
import { documents, save } from "./lib";
const executablePath =
  process.env.CHROME_PATH ||
  (process.platform === "win32"
    ? "C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe"
    : undefined);
const browser = await chromium.launch({ executablePath, headless: true });
const failures: string[] = [];
let checks = 0;
fs.mkdirSync("docs/qa", { recursive: true });
try {
  const page = await browser.newPage({
    viewport: { width: 1440, height: 1000 },
  });
  page.on("pageerror", (e) => failures.push(e.message));
  const check = (ok: boolean, msg: string) => {
    checks++;
    if (!ok) failures.push(msg);
  };
  await page.goto("http://127.0.0.1:4321/");
  await page.screenshot({ path: "docs/qa/home-desktop.png", fullPage: true });
  check((await page.locator("h1").count()) === 1, "首页唯一 H1");
  await page.getByRole("button", { name: "搜索站内内容" }).click();
  await page.locator("#site-search").fill("Windows");
  await page.waitForFunction(
    () => document.querySelector("#search-results")!.childElementCount > 0,
  );
  check(
    (await page.locator("#search-results a").count()) > 0,
    "站内搜索有结果",
  );
  await page.keyboard.press("Escape");
  await page.locator("#search-dialog").waitFor({ state: "hidden" });
  check(!(await page.locator("#search-dialog").isVisible()), "Escape 关闭搜索");
  await page.goto("http://127.0.0.1:4321/compare/");
  for (const box of (
    await page.locator('input[name="compare-brand"]').all()
  ).slice(0, 2))
    await box.check();
  check(await page.locator("#compare-output").isVisible(), "选择两家展示比较");
  check(
    (await page.locator("#compare-body tr").count()) === 10,
    "比较十个维度",
  );
  await page.locator('input[name="compare-brand"]').nth(2).check();
  await page.locator('input[name="compare-brand"]').nth(3).check();
  check(
    await page.locator('input[name="compare-brand"]').nth(4).isDisabled(),
    "限制最多四家",
  );
  await page.getByRole("button", { name: "移除 Proton VPN" }).click();
  check(
    await page.locator('input[name="compare-brand"]').nth(4).isEnabled(),
    "移除后恢复添加",
  );
  await page.screenshot({
    path: "docs/qa/compare-desktop.png",
    fullPage: true,
  });
  const mobile = await browser.newPage({
    viewport: { width: 390, height: 844 },
    isMobile: true,
    hasTouch: true,
  });
  mobile.on("pageerror", (e) => failures.push(e.message));
  for (const d of documents()) {
    await mobile.goto("http://127.0.0.1:4321" + d.url);
    const overflow = await mobile.evaluate(
      () => document.documentElement.scrollWidth > window.innerWidth + 1,
    );
    check(!overflow, "移动端横向溢出 " + d.url);
  }
  await mobile.goto("http://127.0.0.1:4321/");
  await mobile.getByRole("button", { name: "菜单", exact: true }).click();
  check(await mobile.locator("#navigation").isVisible(), "移动导航展开");
  await mobile.getByRole("button", { name: "菜单", exact: true }).click();
  await mobile.locator("summary").first().click();
  check(
    (await mobile.locator("details").first().getAttribute("open")) !== null,
    "FAQ 展开",
  );
  await mobile.screenshot({ path: "docs/qa/home-mobile.png", fullPage: true });
  const nojs = await browser.newContext({ javaScriptEnabled: false });
  const plain = await nojs.newPage();
  for (const url of [
    "/",
    "/airport/proton-vpn/",
    "/ranking/free-quota/",
    "/guides/windows/",
    "/compare/",
  ]) {
    await plain.goto("http://127.0.0.1:4321" + url);
    check(
      (await plain.locator("main").innerText()).length > 250,
      "无 JS 主内容可读 " + url,
    );
  }
  await nojs.close();
  await page.goto("http://127.0.0.1:4321/guides/windows/");
  await page.screenshot({
    path: "docs/qa/article-desktop.png",
    fullPage: true,
  });
} catch (error) {
  failures.push(error instanceof Error ? error.message : String(error));
} finally {
  await browser.close();
  save("browser", {
    status: failures.length ? "FAIL" : "PASS",
    checks,
    errors: failures,
  });
  console.log(JSON.stringify({ checks, failures }));
  if (failures.length) process.exitCode = 1;
}

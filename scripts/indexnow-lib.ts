export function validateURLs(urls: string[], host: string) {
  return [...new Set(urls)].map((raw) => {
    const url = new URL(raw);
    if (
      url.protocol !== "https:" ||
      url.host !== host ||
      url.username ||
      url.password ||
      url.hash ||
      url.search
    )
      throw new Error("只允许本站正式 HTTPS URL，无参数或片段");
    return url.href;
  });
}
export function changedURLs(
  current: { url: string; hash: string }[],
  previous: Record<string, string>,
) {
  return current
    .filter((p) => previous[p.url] !== p.hash)
    .map((p) => p.url)
    .concat(
      Object.keys(previous).filter((u) => !current.some((p) => p.url === u)),
    );
}
export async function sendWithRetry(
  send: () => Promise<{ status: number }>,
  wait: (ms: number) => Promise<unknown>,
  log: (attempt: number, status: string) => void,
  max = 3,
) {
  for (let attempt = 1; attempt <= max; attempt++) {
    let status: number;
    try {
      status = (await send()).status;
    } catch {
      log(attempt, "network-error");
      if (attempt === max) throw Error("IndexNow 网络请求失败");
      await wait(1000 * 2 ** (attempt - 1));
      continue;
    }
    log(attempt, String(status));
    if (status === 200 || status === 202) return status;
    if (status !== 429 && status < 500)
      throw Error(`IndexNow 拒绝 HTTP ${status}`);
    if (attempt === max) throw Error(`IndexNow 重试结束 HTTP ${status}`);
    await wait(1000 * 2 ** (attempt - 1));
  }
  throw Error("没有提交结果");
}

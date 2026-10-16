import { test } from "node:test";
import assert from "node:assert/strict";
import { validateURLs, changedURLs, sendWithRetry } from "./indexnow-lib";
test("拒绝异站、查询参数和不安全 URL", () => {
  for (const u of [
    "http://jcyouxuan.xyz/",
    "https://evil.test/",
    "https://jcyouxuan.xyz/?a=1",
    "https://jcyouxuan.xyz/#token",
    "https://user:pass@jcyouxuan.xyz/",
  ])
    assert.throws(() => validateURLs([u], "jcyouxuan.xyz"));
  assert.equal(
    validateURLs(
      ["https://jcyouxuan.xyz/", "https://jcyouxuan.xyz/"],
      "jcyouxuan.xyz",
    ).length,
    1,
  );
});
test("增量包含新增、修改、删除，不重提未改变页面", () =>
  assert.deepEqual(
    changedURLs(
      [
        { url: "a", hash: "1" },
        { url: "b", hash: "2" },
        { url: "c", hash: "3" },
      ],
      { a: "1", b: "old", d: "4" },
    ),
    ["b", "c", "d"],
  ));
test("429 与 5xx 重试，202 是接受通知而非收录", async () => {
  let calls = 0;
  const delays: number[] = [];
  const status = await sendWithRetry(
    async () => ({ status: [429, 503, 202][calls++] }),
    async (ms) => {
      delays.push(ms);
    },
    () => {},
  );
  assert.equal(calls, 3);
  assert.equal(status, 202);
  assert.deepEqual(delays, [1000, 2000]);
});
test("永久错误不重试，网络错误最多三次", async () => {
  let n = 0;
  await assert.rejects(
    sendWithRetry(
      async () => {
        n++;
        return { status: 403 };
      },
      async () => {},
      () => {},
    ),
  );
  assert.equal(n, 1);
  n = 0;
  await assert.rejects(
    sendWithRetry(
      async () => {
        n++;
        throw Error("mock");
      },
      async () => {},
      () => {},
    ),
  );
  assert.equal(n, 3);
});

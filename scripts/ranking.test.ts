import { test } from "node:test";
import assert from "node:assert/strict";
import {
  unitCost,
  valueEligible,
  freeRanking,
  type Plan,
} from "../src/data/airports";
const p: Plan = {
  id: "example",
  name: "明确标记的数学测试样例",
  price: 20,
  currency: "CNY",
  period: "month",
  trafficGB: 100,
  multiplier: 2,
  verified: true,
};
test("流量倍率按实际可用流量折算", () => assert.equal(unitCost(p), 0.4));
test("不使用未核验或无限流量生成成本", () => {
  assert.equal(unitCost({ ...p, verified: false }), null);
  assert.equal(unitCost({ ...p, unlimited: true }), null);
  assert.equal(unitCost({ ...p, trafficGB: 0 }), null);
  assert.equal(unitCost({ ...p, multiplier: 0 }), null);
});
test("年付、一次性与免费不混入付费月度性价比榜", () => {
  assert.equal(valueEligible(p), true);
  for (const plan of [
    { ...p, period: "year" as const },
    { ...p, period: "one-time" as const },
    { ...p, price: 0 },
  ])
    assert.equal(valueEligible(plan), false);
});
test("只按免费基础额度排序，不把条件升级混入", () => {
  const rows = freeRanking();
  assert.equal(rows.length, 3);
  assert.equal(rows[0].airport.id, "proton");
  assert.equal(rows[1].plan.trafficGB, 2);
  assert.equal(rows[2].plan.trafficGB, 2);
});

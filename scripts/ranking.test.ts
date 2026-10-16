import { test } from "node:test";
import assert from "node:assert/strict";
import {
  airports,
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
test("当前目录没有免费档，不能沿用旧免费榜",()=>assert.equal(freeRanking().length,0));
test("未核实倍率不能推算实际流量成本",()=>assert.equal(unitCost({...p,multiplier:undefined}),null));

import fs from 'node:fs';
const manifest=JSON.parse(fs.readFileSync('src/data/brand-manifest.json','utf8')) as {slug:string;name:string;url:string;coupon?:string}[];
test("29 品牌名称、顺序、原始推广地址和 11 个优惠码准确对应",()=>{
 assert.equal(airports.length,29);assert.equal(airports.filter(a=>a.coupon).length,11);
 assert.deepEqual(airports.map(a=>({slug:a.slug,name:a.name,url:a.affiliateUrl,...(a.coupon?{coupon:a.coupon}:{})})),manifest);
 assert.deepEqual(airports.map(a=>a.order),Array.from({length:29},(_,i)=>i+1));
});
test("推荐理由、优点、核对项逐家不同且不冒充已实测",()=>{
 for(const field of ['recommendation','focus','purchaseCheck'] as const)assert.equal(new Set(airports.map(a=>a[field])).size,29);
 const advantages=airports.flatMap(a=>a.advantages);assert.equal(new Set(advantages).size,advantages.length);
 for(const a of airports){assert.ok(a.sources.length);assert.equal(a.testStatus,'unverified');assert.ok(a.recommendation.length>70);for(const plan of a.plans)assert.equal(plan.verified,false)}
});

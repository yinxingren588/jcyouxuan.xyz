import fs from 'node:fs';
import {documents} from './lib';
import {airports} from '../src/data/airports';
const docs=documents();
const read=(name:string)=>{const p=`docs/qa/${name}.json`;return fs.existsSync(p)?JSON.parse(fs.readFileSync(p,'utf8')):{status:'NOT TESTED'}};
const pipeline=fs.readFileSync('docs/qa/pipeline.log','utf8');
const names=['seo','links','content','browser','redesign-functional','lighthouse','theme'];
const indexable=docs.filter(d=>!d.$('meta[name="robots"]').attr('content')?.includes('noindex')).length;
const tests=pipeline.match(/(?:# |ℹ )pass (\d+)/)?.[1]??'未记录';
const lh=read('lighthouse');
fs.writeFileSync('docs/final-audit.md',`# 三个栏目与全部品牌内容整改验收

交付与核验日期：2026-10-16。

## 本次实际改动

- 首页和全部品牌卡片的底部入口改为有填色、边框、箭头、键盘焦点和触屏点击区域的「查看品牌详情」按钮；静态表格也使用按钮入口。
- 29 个品牌各有单独定位、摘要、适合与不适合人群、套餐取舍；结构化详情页和购买决策页共 58 页均已整改。
- 品牌详情提供原始周期的套餐表、月用量匹配工具、引用资料、特有局限、指定优惠码与相近预算的交叉比较。GiB 不与 GB 默认为相同单位；同名品牌的历史报价不直接套用。
- 推荐中心有低预算、专线选购、新手、晚高峰、AI、流媒体六个专题，明确候选筛选规则和检查步骤。AI、专线、播放或稳定性名单只作条件核对，不表示已有性能认证。
- 排行中心区分站长目录、月付预算、容量比较、成本测算与稳定性核查。支持预算与容量筛选、主动切换排序、成本计算和观察记录 CSV 下载。
- 对比工具支持搜索、预算与优惠码筛选、2–4 家选择、每列套餐切换、只看不同项、清空、跳转结果和复制可恢复的对比链接；差异视图保留引用来源。
- 两组下拉导航支持桌面鼠标、键盘和触屏；保留深色动态背景、暂停控制与系统减少动态效果偏好。
- 品牌范围、站长指定顺序、29 个原始推广地址和 11 个优惠码保留。

## 验收证据

| 项目 | 结果 | 证据 |
|---|---|---|
| Astro / TypeScript | ${pipeline.includes('0 errors')?'PASS':'NOT TESTED'} | docs/qa/pipeline.log |
| 静态构建 | ${pipeline.includes('[build] Complete!')?'PASS':'NOT TESTED'} | docs/qa/pipeline.log、docs/qa/redesign-build.log |
| 逻辑与品牌清单 | ${tests} 项通过 | docs/qa/pipeline.log |
${names.map(name=>`| ${name} | ${read(name).status} | docs/qa/${name}.json |`).join('\n')}

新增交互检查 ${read('redesign-functional').count??'未记录'} 项；全站基础浏览器检查 ${read('browser').checks??'未记录'} 项。站内链接 ${read('links').checks??'未记录'} 项，SEO ${read('seo').checks??'未记录'} 页。真实结果以各 JSON 为准。

新增功能脚本为 scripts/features-qa.mjs，通过 npm run qa:features 可在本地预览运行时复查。所有可视页面仍在无 JavaScript 时输出主要正文；互动筛选和计算需要 JavaScript。

## 实际规模

${docs.length} 个 HTML 页面（含 404，平台兼容的 404.html 别名不重复计数），${indexable} 个允许索引；${airports.length} 个品牌详情与 ${airports.length} 个购买决策页，保留 15 篇教程、选择指南与百科。

## 本期 Lighthouse

| 路由 | 性能 | 无障碍 | 最佳实践 | SEO |
|---|---:|---:|---:|---:|
${(lh.results??[]).map((r:any)=>`| ${r.route} | ${r.scores.performance} | ${r.scores.accessibility} | ${r.scores['best-practices']} | ${r.scores.seo} |`).join('\n')}

本地 Chrome 移动端模拟，代表路由的测量结果存在环境波动，不代表生产环境或真实用户 Web Vitals。完整原始记录位于 docs/qa/lighthouse-*.json。

## 事实与商业关系边界

- 价格与容量是有引用的第三方参考，未注册、登录、付款或验证到账；不能当作当前结算报价。
- 29 个品牌与顺序由站长指定，存在直接商业关系。推广链接使用 sponsored / nofollow / noopener / noreferrer，可见位置保留披露。
- 优惠码不代表已验证折扣或有效期；不补造优惠比例，也不加入其他品牌或其他来源的码。
- 极连云当前入口与早期 hyperlink 同名资料的关联未确认，暂不列旧价。
- 浪网保留已更正的 30 元 / 150GB 入门参考档；120 元对应 800GB 高档，70 元档的 400GB / 450GB 来源冲突已说明。
- 没有本站网络、AI、流媒体或稳定性实测。预算与容量比较不等于质量评分；成本计算使用用户输入的数据，不自动把未知倍率设成 1。
- 旧品牌在正文、搜索和 Sitemap 的残留校验保留；当前品牌内容完整性、适合人群、局限与决策字段进入内容验证。

## 外部状态

源码同步证据见 docs/qa/github.json。Cloudflare 正式部署、DNS / HTTPS、Bing 验证、真实 IndexNow 提交与搜索收录尚未在本次完成，不声称已经正式上线。
`);
console.log('docs/final-audit.md written');

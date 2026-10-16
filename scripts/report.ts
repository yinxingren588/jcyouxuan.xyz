import fs from 'node:fs';
import {documents} from './lib';
import {airports} from '../src/data/airports';
const docs=documents();
const read=(name:string)=>{const p=`docs/qa/${name}.json`;return fs.existsSync(p)?JSON.parse(fs.readFileSync(p,'utf8')):{status:'NOT TESTED'}};
const names=['seo','links','content','browser','lighthouse','theme'];
const lh=read('lighthouse');
const pipeline=fs.existsSync('docs/qa/pipeline.log')?fs.readFileSync('docs/qa/pipeline.log','utf8'):'';
const indexable=docs.filter(d=>!d.$('meta[name="robots"]').attr('content')?.includes('noindex')).length;
const tests=pipeline.match(/(?:# |ℹ )pass (\d+)/)?.[1]??'未记录';
fs.writeFileSync('docs/final-audit.md',`# 品牌替换与网站验收报告

资料查询及本期核验日期：2026-10-16。

## 实际交付

- 只收录站长指定的 29 个品牌，保持原顺序、原始推广地址和 11 个指定优惠码。
- 每家有单独推荐理由、两项不同表述的资料优点、资料局限、购买前核对项、资料页和选择分析页。
- 旧品牌从页面、路由、搜索索引和 Sitemap 移除；内容检查会拒绝旧品牌残留。
- ${docs.length} 个 HTML 页面（含 404；平台兼容的 404.html 别名不重复计数），${indexable} 个允许索引。
- ${airports.length} 个品牌资料页、${airports.length} 个选择分析页；15 篇教程、指南和百科保留并更新。
- 保留全屏深色动态背景、暂停与恢复控制、会话内偏好及系统减少动态效果支持。

## 本期验证结果

| 项目 | 状态 | 证据 |
|---|---|---|
| Astro / TypeScript | ${pipeline.includes('0 errors')?'PASS':'NOT TESTED'} | docs/qa/pipeline.log |
| 静态构建 | ${pipeline.includes('[build] Complete!')?'PASS':'NOT TESTED'} | docs/qa/pipeline.log |
| 核心逻辑与品牌清单测试 | ${tests} 项通过 | docs/qa/pipeline.log |
| GitHub 源码同步 | ${read('github').status} | docs/qa/github.json，品牌更新提交 ${read('github').commit} |
${names.map(name=>`| ${name} | ${read(name).status} | docs/qa/${name}.json |`).join('\n')}

浏览器检查覆盖新增品牌搜索、29 张品牌卡、11 个复制按钮、实际优惠码复制、准确推广链接、2–4 家比较、移动菜单、FAQ、全部页面移动端溢出和无 JavaScript 正文。

## 资料真实性与商业关系边界

- 29 个原始入口可访问，未登录页面的标题或公开品牌配置与名称对应。入口 HTTP 200 不能证明服务可用或性能。
- 价格为第三方公开资料参考，未注册、登录、付款或核验到账，不是实时结账报价。来源与冲突逐家披露，详见 brand-research.md。
- 极连云历史 hyperlink 资料与当前入口的关联未确认，未展示旧报价。
- 优惠码由站长提供，折扣、有效期、新老用户和适用周期尚未核实。未采纳网上其他优惠码或推测折扣。
- 29 个品牌及顺序由站长指定，存在直接商业推广关系；所有推广链接均有 sponsored / nofollow / noopener / noreferrer 属性和可见披露。
- 推荐依据为套餐形态分析，无本站速度、稳定性、AI 或流媒体实测；未采用第三方测速冒充本站测试。
- 稳定性及实际每 GB 成本页面因缺少合格数据设为 noindex，排除 Sitemap。站长推荐顺序可以索引，明确它不是性能排名。

## 本地 Lighthouse 记录

| 路由 | 性能 | 无障碍 | 最佳实践 | SEO |
|---|---:|---:|---:|---:|
${(lh.results??[]).map((r:any)=>`| ${r.route} | ${r.scores.performance} | ${r.scores.accessibility} | ${r.scores['best-practices']} | ${r.scores.seo} |`).join('\n')}

本地 Chrome 移动模拟。首页与比较页为本轮单次结果；Windows 教程在一次 TBT 波动后使用两个独立浏览器会话复查，三次性能分数为 88、100、100，表内取中位数，全部样本见 docs/qa/lighthouse-guide-repeats.json。原始单次报告保留，不代表生产环境或真实用户 Web Vitals。

## 浪网价格档位展示修正（2026-10-16）

原页面选取 120 元 / 800GB 高档作为首个参考档，容易误认为入门价。本次补入 30 元 / 150GB 入门档和 70 元 / 400GB 进阶档，默认展示入门档，详情保留 120 元 / 800GB、200 元 / 2000GB。卡片、表格和比较工具显示档位名称。价格仍为第三方参考，70 元档的 400GB / 450GB 来源冲突保留说明。

本次构建、11 项逻辑测试、99 页 SEO、4,278 项链接检查及 8 项针对性浏览器检查通过，见 docs/qa/wavenet-correction.log 与 docs/qa/wavenet-correction.json。此次未重复 Lighthouse 测量，上表保留前一版本的测量记录。

## 尚未完成的外部事项

正式域名 DNS / HTTPS、Cloudflare Pages 正式部署、Bing 账户验证、真实 IndexNow 提交和搜索收录均未在本期完成。源码具备静态部署结构，不宣称已经正式上线。
`);
console.log('docs/final-audit.md written');

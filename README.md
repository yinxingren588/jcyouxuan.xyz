# 机场优选 · jcyouxuan.xyz

中文机场 / VPN 选择资料站，Astro 静态生成。正式 Canonical、Sitemap 与 IndexNow host 均为 `https://jcyouxuan.xyz`。

## 本地开发

要求 Node.js 24（最低 22.22.0）。

```sh
npm ci
npm run dev
npm run qa
npm run preview
```

Cloudflare Pages 构建命令 `npm run build`，输出目录 `dist`。构建不需要 Cloudflare Adapter，不依赖服务器或数据库。

## 内容维护

- `src/data/airports.ts`：品牌与参考套餐数据源。
- `src/data/brand-evidence.json`：29家本次入口读取、身份、事实来源、冲突、优惠及购买问题。
- `docs/research/brand-check-*.json`：本轮原始研究，保留实际读取及检索摘要边界。
- `src/content/articles/`：Markdown 内容集合：150 篇博客、5 篇教程、5 篇百科。
- `src/data/pages.ts`：专题、栏目与品牌路由。
- `src/data/brand-editorial.ts`：29 个品牌的定位、适合与不适合人群、购买决策和交叉比较。
- `src/data/selection.ts`：六个推荐场景的说明、筛选条件与候选方案。
- `src/data/topic-copy.ts`：政策与推广披露。
- `scripts/`：SEO、链接、内容、IndexNow 与测试。
- `docs/keyword-map.csv`：搜索意图映射，不含虚构搜索量。
- `docs/final-audit.md`：实际验收范围与证据。

当前仅收录站长指定的 29 个品牌，按指定顺序展示；29 个原始推广入口和 11 个指定优惠码有一致性检查。套餐来自带引用的第三方资料，未登录结算核价；极连云同名关联未确认，暂未列价。实际流量成本与稳定性页面 noindex，不进入 Sitemap。新增品牌前请阅读 `docs/content-operations.md`。

## 本期功能

博客资讯有 150 篇文章与十个主题，提供静态分页、分类阅读、关键词筛选、筛选地址恢复及相关内容。关闭脚本仍可通过十页目录浏览全部正文；全站搜索、Sitemap、BlogPosting 和来源内链同步生成。文章目录详见 `docs/blog-catalog.csv`，审校说明见 `docs/blog-editorial-review.md`。

推荐和排行支持键盘、点击与触屏下拉导航。推荐中心有六个场景；预算与容量视图支持筛选和主动排序，默认保持站长目录顺序。品牌详情提供清楚的按钮入口、适合与不适合人群、档位预算分析及月用量匹配工具。

对比工具支持搜索、优惠码筛选、2–4 家选择、每列切换套餐、只看不同项、复制带选择与档位的 URL。成本页提供手动倍率计算，稳定性页提供观察方法与 CSV 模板，不发布推测的质量名次。

`npm run qa:blog` 验收文章库交互与无脚本可达性；`npm run audit:blog` 复核150篇数量、来源及重复度；`npm run qa:features` 验收推荐/排行/对比交互；`npm run qa:browser` 检查全站移动端和基础行为。两者需要本地预览运行在 4321，浏览器路径与现有检查脚本一致。

## 部署与搜索引擎

见 `docs/deployment.md`、`docs/bing-webmaster.md`、`docs/indexnow.md`。IndexNow 不绑定在构建流程内，部署后按变化显式运行。

本站含商业推广链接，29 个品牌及顺序由站长指定。推广属性和可见披露已实现，优惠码折扣及有效期未核实。当前无用户系统、无外部分析脚本。搜索、比较与菜单使用少量客户端 JavaScript，主要正文、表格与内链均在构建时输出 HTML。

## 机场推荐主词布局

首页是“机场推荐”的主入口，`src/data/seo.ts`统一维护首页Title/Description/H1和六个具体场景的搜索意图。场景中心、站长品牌目录、选购方法文章分别承接不同需求；导航、正文返回入口和站内搜索同步使用当前标题。

`npm run audit:keyword`核对主词页与上下文内链，已加入`npm run qa`。`npm run audit:tdk`导出全站逐页TDK与覆盖统计；`docs/keyword-focus-report.md`记录本次改动与边界。关键词出现次数不代表Bing排名。

本阶段按站长要求先同步现有GitHub仓库。正式域名部署并可抓取后，再完成Bing站点验证、Sitemap提交和真实IndexNow通知；`docs/qa/keyword-focus-indexnow-dry-run.json`仅为本地预览。

## 29品牌资料复核

2026-10-16复核29家，整理73条有来源的观察，涉及61个不同URL（不等于61份独立原始证据）。未取得足以确认当前官方报价的公开价目表，未登录下单；各参考套餐继续保持未核验，不参与实际流量成本排名。详情与购买分析共58页新增专属核对区，11码保持原样，不生成券后价。

`npm run audit:evidence`检查29家覆盖、指定码、当前报价证据、58页可读内容及来源属性，已加入完整QA。`public/brand-verification.csv`为读者可下载核对表，和`docs/brand-verification.csv`保持一致。报告见`docs/brand-optimization-report.md`。

按站长最新指示，本轮不操作Cloudflare，不部署域名、不修改DNS、不进行Bing账户验证或实际IndexNow提交；交付范围为本地网站与现有GitHub源码。

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

- `src/data/airports.ts`：品牌与套餐唯一数据源。
- `src/content/articles/`：Markdown 内容集合，15 篇初始文章。
- `src/data/pages.ts`：专题、栏目与品牌路由。
- `src/data/topic-copy.ts`：专题解释与政策内容。
- `scripts/`：SEO、链接、内容、IndexNow 与测试。
- `docs/keyword-map.csv`：搜索意图映射，不含虚构搜索量。
- `docs/final-audit.md`：实际验收范围与证据。

当前仅收录站长指定的 29 个品牌，按指定顺序展示；29 个原始推广入口和 11 个指定优惠码有一致性检查。套餐来自带引用的第三方资料，未登录结算核价；极连云同名关联未确认，暂未列价。实际流量成本与稳定性页面 noindex，不进入 Sitemap。新增品牌前请阅读 `docs/content-operations.md`。

## 部署与搜索引擎

见 `docs/deployment.md`、`docs/bing-webmaster.md`、`docs/indexnow.md`。IndexNow 不绑定在构建流程内，部署后按变化显式运行。

本站含商业推广链接，29 个品牌及顺序由站长指定。推广属性和可见披露已实现，优惠码折扣及有效期未核实。当前无用户系统、无外部分析脚本。搜索、比较与菜单使用少量客户端 JavaScript，主要正文、表格与内链均在构建时输出 HTML。

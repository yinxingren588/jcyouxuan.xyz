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

当前五个品牌均为商业 VPN，不能描述为五家已实测机场。综合、稳定性与付费每 GB 榜暂无合格数据，页面 noindex，不进入 Sitemap。新增品牌前请阅读 `docs/content-operations.md`。

## 部署与搜索引擎

见 `docs/deployment.md`、`docs/bing-webmaster.md`、`docs/indexnow.md`。IndexNow 不绑定在构建流程内，部署后按变化显式运行。

当前无联盟链接、无用户系统、无外部分析脚本。搜索、比较与菜单使用少量客户端 JavaScript，主要正文、表格与内链均在构建时输出 HTML。

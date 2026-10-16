# GitHub 与 Cloudflare Pages 部署

当前范围（2026-10-16）：站长明确“不需要上cloudflare”。本轮只同步GitHub并提供本地预览，以下Cloudflare步骤仅为未来部署参考，不执行、不暗示已部署。

## 仓库与构建

远程：<https://github.com/yinxingren588/jcyouxuan.xyz>。使用 `main` 作为生产分支，不强制覆盖远程历史。依赖精确版本由 package-lock.json 固定。

Cloudflare 官方参考：<https://developers.cloudflare.com/pages/framework-guides/deploy-an-astro-site/>。

1. 登录 Cloudflare，进入 Workers & Pages → Create → Pages → Connect to Git。
2. 授权 GitHub 仓库 `yinxingren588/jcyouxuan.xyz`。此操作需要仓库所有者和 Cloudflare 账户权限。
3. 生产分支 `main`，项目根目录为仓库根目录，框架选择 Astro。
4. 构建命令 `npm run build`，输出 `dist`，环境变量 `NODE_VERSION=24`。启用 IndexNow 时再设置独立随机的 `INDEXNOW_KEY`；实际值不写入 GitHub。构建自动生成验证文件。
5. 启动部署。确认日志成功，再添加自定义域名 `jcyouxuan.xyz`。
6. 在 Cloudflare 的 Custom domains 流程完成 DNS 与证书。根域名通常要求由该账户管理对应 Zone；按控制台实际提示操作，不随意覆盖已有 DNS。
7. 将临时 pages.dev 访问通过 Cloudflare 控制台重定向到正式域名，避免产生可索引镜像。Canonical 始终指向正式域名。

本次没有可用 Cloudflare 登录会话或部署令牌，因此不声称正式域名已上线。无需为静态模式添加 Cloudflare Adapter。

## 上线前检查

```sh
npm ci
npm run qa
```

确认 `/`、`/compare/`、代表文章、`/robots.txt`、`/sitemap-index.xml`、IndexNow Key 文件和一个不存在的地址。不存在地址应返回 HTTP 404，构建会输出 `404.html`，避免 Cloudflare SPA 回退。

检查手机显示、HTTPS、重定向和正式 Canonical。上线前人工复核品牌资料，确认运营者接受隐私与免责声明内容，并补充实际托管日志政策。

## 回滚

在 Cloudflare Pages 的 Deployments 中选上一个已验证部署执行 Rollback；保留对应 Git commit。不要用 force push 回滚公共仓库。回滚后复查 Sitemap、Key 与受影响内容。

## CI

仓库包含 GitHub Actions 构建与质量检查，以及可手动运行的浏览器 / Lighthouse 验收。Cloudflare 通过其 Git 集成部署，不需要把 API Token 写进仓库。

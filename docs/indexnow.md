# IndexNow 运行与验证

实现依据：<https://www.indexnow.org/documentation>。

实际 Key 不存入公开源码。`indexnow.config.json` 保留空配置结构；本地可在被 Git 忽略的 `.env` 中设置 `INDEXNOW_KEY`，Cloudflare Pages 则在构建环境变量中设置。构建时生成 `dist/<key>.txt`，它只随部署产物提供验证，不提交到源码仓库。构建不自动提交 URL；没有配置 Key 时仍可构建内容站，但不能运行真实 IndexNow 通知。

新部署请自行生成独立的随机值，例如使用 Node 的 `crypto.randomBytes(16).toString('hex')`，将结果保存在构建环境变量中，不写入公开仓库。源码包不包含本机的 `.env`。

```sh
# 先构建，查看初次待提交范围（不联网）
npm run build
npm run indexnow -- --initial --dry-run

# 正式域名已部署且 Key 文件可读取后，首次提交一次
npm run indexnow -- --initial

# 单页通知
npm run indexnow -- --url https://jcyouxuan.xyz/guides/windows/

# JSON 字符串数组，批量提交
npm run indexnow -- --file urls.json

# 以后只提交新增、变更或已删除页面
npm run indexnow -- --changed
```

脚本先验证本地 Key 文件，然后从正式 HTTPS 域名读取并逐字匹配，再发送请求。最多每批 10,000 URL。只有正式域名且无查询参数的 URL 被允许；noindex 页面被拒绝，删除通知只接受先前成功基线中的 URL。

成功返回 200 或 202 后才写入 `.state/indexnow.json`。202 表示接受并等待验证，不表示收录。429、5xx 或网络错误最多尝试三次，指数退避；400、403 等永久错误立即停止。请求具有超时，HTTP 状态和尝试次数记录到 `.state/indexnow.log`，不记录令牌或 Key。基线与日志均不提交 Git。

CI 或其他电脑使用时需要持久化 `.state/`，否则无法判断上次成功通知的版本；无基线的 `--changed` 会明确停止，不偷偷全量提交。新建内容、更新和删除均通过发布后的内容清单比较处理。

本地已测试逻辑，不等于已完成真实域名验证或向 Bing 提交。

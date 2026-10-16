# Bing Webmaster Tools 操作指南

人工登录入口：<https://www.bing.com/webmasters/>。只有站长登录并完成站点所有权验证后，才能查看真实搜索数据；本次没有代登录，以下均为待人工执行。

1. 添加 `https://jcyouxuan.xyz`。选择控制台给出的 DNS、文件或 Meta 验证方式。Meta 方式把验证码放入构建环境变量 `PUBLIC_BING_VERIFICATION`，重新部署，再点击验证。不得使用随意生成的验证码。
2. 在 Sitemaps 提交 `https://jcyouxuan.xyz/sitemap-index.xml`，检查抓取时间与状态。Sitemap 不包含 404 和待数据榜单。
3. 按 `indexnow.md` 检查 Key 文件与部署后提交。通知被接受不等于页面已收录。
4. 使用 URL Inspection 检查首页、品牌资料、文章和专题。核对 Bing 看到的 HTTP 状态、Canonical、索引资格和抓取错误。
5. 在 Search Performance 查看真实曝光、点击、查询词和页面表现。新站没有数据时保留空状态，不编造搜索量或点击率。
6. 在 Index Coverage / Site Explorer 等索引诊断界面查看已索引、排除与异常 URL；产品界面名称可能变化，以当前控制台为准。
7. 检查 Crawl Issues / Site Scan，处理 404、重定向链、资源阻挡和重复内容。先确认页面用途，再决定修复链接、重定向或维持 404。

建议内容发生实质变化后重查受影响 URL。不要反复提交全部页面，也不要把 IndexNow 响应或本地 SEO PASS 写成“Bing 已收录”。技术正确不能保证排名。

官方参考：<https://www.bing.com/webmasters/help>；<https://www.indexnow.org/documentation>。

## 本期主词验证

本期主词为“机场推荐”，主落地页为`https://jcyouxuan.xyz/`，源码先同步GitHub。正式站可访问并完成站点验证后，在Search Performance筛选该查询，记录首页及其他实际落地页的展示和点击；有相关指标时再观察位置与变化。

低预算、新手等具体推荐场景单独查看，不把所有查询合并成首页主词成绩。若相同查询持续分散到不同页面，结合各页面内容与表现再评估意图分工，不根据几个页面含相同词就断言内耗。

只记录后台真实数据，不填写估计曝光、预计排名或预设的“达标日期”。本地SEO检查、GitHub提交和IndexNow接收状态不替代这些数据。

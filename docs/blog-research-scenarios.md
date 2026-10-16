# 隐私、流媒体、AI 与工作流文章研究记录

核查及撰写日期：2026-10-16。范围为四类各 10 篇，共 40 篇，其中保留并改写原有 `ai-access` 与 `streaming-checklist`，新增 38 篇。

## 编辑依据与边界

- 来源以实际打开的官方文档为依据。OpenAI 相关内容使用 OpenAI Docs 技能的检索后取阅顺序，访问 developers.openai.com 的具体文档。其他内容使用 Mozilla、Google、Apple、Netflix、GitHub、npm、Docker、Zoom、Microsoft、curl 官方说明。
- 正文只用短事实说明产品机制，其余为原创的操作、对照与验证方法。未复制长段原文，未编造使用经历、网络速度、平台解锁或品牌性能。
- 不把可达性等同于账户权限、地区资格或内容版权；不提供绕过平台或企业限制的方法。AI 文章区分 API 与网页产品的数据处理、权限和功能，不混用说明。
- 文章没有实测任何品牌的网络。示例表格中的状态需由读者填写；视频用量算例明确标为预算示例，不冒充后台账单。
- 选题分别对应凭证保护、证书、公共网络、日志、验证恢复、站点权限、无痕、Cookie、授权与会话；流媒体按资格、预算、自动画质、调试、输出链路、投屏、离线、直播、掉帧和兼容拆分；AI 与工作流也按独立故障环节组织，避免同义改写凑数量。

## 阅读复核

复核了订阅凭证、证书警告、视频预算、HDR 输出、流式中断、密钥轮换、Git LFS 与企业授权等代表文章，重点检查操作可执行性、来源支持范围、示例边界和前后内链。全部文章均包含四个实质二级章节；链接留在所属主题，不引入其他网络服务品牌。

## 篇目与来源对应

下表自动从最终 Markdown 元数据提取。字符数为正文全部字符（包含链接、术语与表格），不含元数据。

静态复核结果：40 篇、四类各 10 篇、顺序值无重复、正文 893–1126 字符、各有 4 个实质二级章节，引用 49 个不同官方页面。检查了本批次文章相互链接的目标文件均存在，未引入被移除的品牌名称。去除链接和标点后计算字符 5-gram 集合相似度，最高一对 Jaccard 值约 0.030；这只是发现高度复写的辅助检查，不代表以算法代替内容审阅。未运行构建或浏览器检查，由主任务在汇总全部 150 篇后统一执行。

| 顺序 | 类别 | 文章 | 正文字符 | 官方来源 |
| --- | --- | --- | --- | --- |
| 601 | privacy | [订阅链接为什么要保密：从导入、截图到泄露后的处理](../src/content/articles/blog/privacy-subscription-secrets.md) | 1050 | [docs.github.com](https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/removing-sensitive-data-from-a-repository) |
| 602 | privacy | [遇到证书警告怎么办：先确认网站身份，再修复连接](../src/content/articles/blog/privacy-certificate-warning.md) | 980 | [support.mozilla.org](https://support.mozilla.org/en-US/kb/secure-connection-failed-firefox-did-not-connect) |
| 603 | privacy | [公共 Wi-Fi 使用网络工具的安全边界：认证页、HTTPS 与设备共享](../src/content/articles/blog/privacy-public-wifi.md) | 1018 | [support.mozilla.org](https://support.mozilla.org/en-US/kb/https-only-prefs)<br>[support.apple.com](https://support.apple.com/en-us/102568) |
| 604 | privacy | [客服让你发日志时怎么脱敏：保留故障证据，去掉访问凭证](../src/content/articles/blog/privacy-log-redaction.md) | 991 | [developer.chrome.com](https://developer.chrome.com/docs/devtools/network/reference) |
| 605 | privacy | [开启两步验证后如何防止把自己锁在门外：恢复方案先做好](../src/content/articles/blog/privacy-two-factor-recovery.md) | 970 | [support.google.com](https://support.google.com/accounts/answer/185839)<br>[support.google.com](https://support.google.com/accounts/answer/1187538) |
| 606 | privacy | [网站要求定位、通知和摄像头权限：哪些与网络连接无关](../src/content/articles/blog/privacy-browser-permissions.md) | 960 | [support.google.com](https://support.google.com/chrome/answer/114662) |
| 607 | privacy | [无痕模式能隐藏什么：本机记录、登录状态与网络可见性的边界](../src/content/articles/blog/privacy-incognito-boundary.md) | 968 | [support.mozilla.org](https://support.mozilla.org/en-US/kb/private-browsing-use-firefox-without-history)<br>[support.google.com](https://support.google.com/chrome/answer/95464) |
| 608 | privacy | [登录循环时要不要清 Cookie：只清目标站点的处理方法](../src/content/articles/blog/privacy-site-data.md) | 972 | [support.google.com](https://support.google.com/chrome/answer/95647) |
| 609 | privacy | [第三方应用授权怎么检查：登录按钮背后的数据访问范围](../src/content/articles/blog/privacy-third-party-access.md) | 950 | [support.google.com](https://support.google.com/accounts/answer/14012355) |
| 610 | privacy | [共享电脑和旧手机如何退出账户：设备列表与实际会话要一起检查](../src/content/articles/blog/privacy-device-sessions.md) | 919 | [support.google.com](https://support.google.com/accounts/answer/3067630) |
| 701 | streaming | [流媒体选购检查表：内容权限、播放设备和网络要分别确认](../src/content/articles/blog/streaming-checklist.md) | 984 | [help.netflix.com](https://help.netflix.com/en/node/114701)<br>[help.netflix.com](https://help.netflix.com/en/node/13444) |
| 702 | streaming | [看视频一个月需要多少流量：按观看时长和画质计算预算](../src/content/articles/blog/media-data-budget.md) | 941 | [help.netflix.com](https://help.netflix.com/en/node/87) |
| 703 | streaming | [视频为什么会自动变模糊：画质自适应与网络故障的区别](../src/content/articles/blog/media-adaptive-quality.md) | 915 | [support.google.com](https://support.google.com/youtube/answer/91449?hl=en) |
| 704 | streaming | [YouTube 调试信息怎么看：用播放证据排查，而非只看一个速度值](../src/content/articles/blog/media-debug-info.md) | 906 | [support.google.com](https://support.google.com/youtube/answer/7519898) |
| 705 | streaming | [有 4K 网络却没有 HDR：电视、HDMI 和播放链路怎么检查](../src/content/articles/blog/media-hdr-hdmi.md) | 918 | [support.apple.com](https://support.apple.com/en-us/102339) |
| 706 | streaming | [手机能播放却搜不到电视：投屏先检查局域网发现和权限](../src/content/articles/blog/media-casting-local-network.md) | 942 | [support.google.com](https://support.google.com/chromecast/answer/3006709) |
| 707 | streaming | [旅行前离线下载怎么准备：下载完成、可播放和未过期要分别验证](../src/content/articles/blog/media-offline-downloads.md) | 931 | [help.netflix.com](https://help.netflix.com/en/node/54816)<br>[help.netflix.com](https://help.netflix.com/en/node/54865) |
| 708 | streaming | [看直播比别人慢几十秒：平台缓冲、播放位置和网络延迟如何区分](../src/content/articles/blog/media-live-delay.md) | 948 | [support.google.com](https://support.google.com/youtube/answer/7444635?hl=en) |
| 709 | streaming | [视频卡顿到底是掉帧还是缓冲：先看声音、进度和设备负载](../src/content/articles/blog/media-stutter-or-buffer.md) | 921 | [help.netflix.com](https://help.netflix.com/en/node/100342) |
| 710 | streaming | [电脑能看电视不能看：流媒体设备兼容性检查顺序](../src/content/articles/blog/media-device-compatibility.md) | 939 | [support.google.com](https://support.google.com/youtube/answer/78358) |
| 801 | ai | [AI 工具访问检查：网络可达、账户资格与 API 权限分别确认](../src/content/articles/blog/ai-access.md) | 1045 | [developers.openai.com](https://developers.openai.com/api/docs/supported-countries)<br>[developers.openai.com](https://developers.openai.com/api/docs/guides/error-codes) |
| 802 | ai | [API 报错先看什么：认证、请求错误、额度和服务异常的分类](../src/content/articles/blog/ai-error-classification.md) | 957 | [developers.openai.com](https://developers.openai.com/api/docs/guides/error-codes) |
| 803 | ai | [遇到 API 限速不要连续重发：有上限的等待与重试方案](../src/content/articles/blog/ai-rate-limit-retries.md) | 927 | [developers.openai.com](https://developers.openai.com/api/docs/guides/rate-limits) |
| 804 | ai | [AI 回答写到一半停住：区分流连接中断与任务已经失败](../src/content/articles/blog/ai-stream-interruption.md) | 940 | [developers.openai.com](https://developers.openai.com/api/docs/guides/streaming-responses) |
| 805 | ai | [API 密钥不能发给测速工具：保存、轮换和泄露后的处理](../src/content/articles/blog/ai-key-safety.md) | 932 | [developers.openai.com](https://developers.openai.com/api/docs/guides/production-best-practices) |
| 806 | ai | [AI 文件上传失败怎么查：格式、大小、权限和处理阶段分开看](../src/content/articles/blog/ai-file-upload-checklist.md) | 916 | [developers.openai.com](https://developers.openai.com/api/docs/guides/file-inputs) |
| 807 | ai | [把资料交给 AI 前先查什么：数据用途、保留和最小化输入](../src/content/articles/blog/ai-data-review.md) | 941 | [developers.openai.com](https://developers.openai.com/api/docs/guides/your-data) |
| 808 | ai | [长 AI 任务断线后如何续接：先查状态，再重做未完成部分](../src/content/articles/blog/ai-long-task-recovery.md) | 936 | [developers.openai.com](https://developers.openai.com/api/docs/guides/background) |
| 809 | ai | [AI 反应慢该换网络吗：把上传、首字和完整生成分开计时](../src/content/articles/blog/ai-latency-stages.md) | 954 | [developers.openai.com](https://developers.openai.com/api/docs/guides/latency-optimization) |
| 810 | ai | [AI 故障工单怎么写：让请求编号、时间和最小样例真正有用](../src/content/articles/blog/ai-support-evidence.md) | 946 | [developers.openai.com](https://developers.openai.com/api/reference/overview) |
| 901 | workflow | [GitHub 网页能打开却无法拉代码：HTTPS、SSH 和账户权限分别检查](../src/content/articles/blog/work-github-https-ssh.md) | 1057 | [docs.github.com](https://docs.github.com/en/get-started/git-basics/about-remote-repositories)<br>[docs.github.com](https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/about-authentication-to-github) |
| 902 | workflow | [代码克隆完成但素材打不开：Git LFS 指针与实际文件的区别](../src/content/articles/blog/work-git-lfs.md) | 1024 | [docs.github.com](https://docs.github.com/en/repositories/working-with-files/managing-large-files/about-git-large-file-storage) |
| 903 | workflow | [依赖安装失败不要先换全部镜像：确认仓库、凭证与失败包](../src/content/articles/blog/work-package-registry.md) | 1005 | [docs.npmjs.com](https://docs.npmjs.com/cli/v11/commands/npm-config/)<br>[docs.npmjs.com](https://docs.npmjs.com/cli/v11/configuring-npm/npmrc/) |
| 904 | workflow | [容器镜像拉取失败如何定位：认证、清单和分层下载分别看](../src/content/articles/blog/work-container-download.md) | 959 | [docs.docker.com](https://docs.docker.com/reference/api/registry/auth/)<br>[docs.docker.com](https://docs.docker.com/docker-hub/usage/) |
| 905 | workflow | [开会时下载很快却声音断续：实时通话和批量传输分开安排](../src/content/articles/blog/work-meeting-downloads.md) | 916 | [support.zoom.com](https://support.zoom.com/hc/en/article?id=zm_kb&sysparm_article=KB0060748) |
| 906 | workflow | [云盘为什么一直占流量：同步状态、限速和会议安排怎么兼顾](../src/content/articles/blog/work-cloud-sync.md) | 983 | [support.microsoft.com](https://support.microsoft.com/en-us/onedrive/change-the-onedrive-sync-app-upload-or-download-rate) |
| 907 | workflow | [大文件下载中断后如何恢复：断点续传不等于文件一定完整](../src/content/articles/blog/work-download-resume.md) | 893 | [curl.se](https://curl.se/docs/manpage.html) |
| 908 | workflow | [公司资源能登录却不能访问：身份授权与企业网络策略怎么配合检查](../src/content/articles/blog/work-corporate-access.md) | 992 | [docs.github.com](https://docs.github.com/en/enterprise-cloud@latest/authentication/authenticating-with-single-sign-on/about-authentication-with-single-sign-on) |
| 909 | workflow | [远程会议备用连接怎么准备：切换前先保住沟通和资料](../src/content/articles/blog/work-backup-connection.md) | 927 | [support.google.com](https://support.google.com/meet/answer/9303069) |
| 910 | workflow | [网络故障交接记录怎么写：让下一位处理者不用从头猜](../src/content/articles/blog/work-incident-handoff.md) | 1126 | [docs.github.com](https://docs.github.com/en/issues/tracking-your-work-with-issues/using-issues/creating-an-issue)<br>[docs.github.com](https://docs.github.com/en/get-started/writing-on-github/working-with-advanced-formatting/creating-and-highlighting-code-blocks) |

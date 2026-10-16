# 客户端与规则系列：选题、来源和编辑核查

核查日期：2026-10-16。范围：40 篇新增中文博客，客户端 20 篇、规则与策略 20 篇。

文章以官方资料确认功能边界，用原创的决策、验收和恢复方法展开；没有复制整段文档，没有捏造测试数据、品牌性能或用户经验。所有发布日期为本次制作日期。

## 来源使用边界

- 客户端操作以 Clash Verge Rev 文档及 Microsoft、Apple、Android 官方资料为依据，正文明确版本与平台范围。
- 规则、集合、策略组、DNS 与 TUN 以 mihomo 官方资料为依据；维护建议与产品机制分开叙述。
- 不复制官方页面的推广内容，也不沿用其中关闭证书验证、全局关闭保护等不适合本文目标的建议。
- 本批不包含服务商品牌价格或性能结论，未新增任何机场推广链接。
- 正文链接与文末 sources 对应具体功能说明；一次检查结果不表述为永久保证。

## 文件与来源映射

| 顺序 | 分类 | 文章与文件 | 选题说明 | 官方来源 | 汉字数 |
| --- | --- | --- | --- | --- | --- |
| 201 | clients | [客户端下载前核验什么：从发布入口到文件完整性](../src/content/articles/blog/client-download-verification.md) | 按项目身份、发布渠道、版本说明与文件校验建立下载检查流程，避免把同名网页当作官方客户端。 | [1](https://www.clashverge.dev/install.html)<br>[2](https://learn.microsoft.com/en-us/powershell/module/microsoft.powershell.utility/get-filehash?view=powershell-7) | 885 |
| 202 | clients | [x64、ARM64 与 Apple 芯片：客户端安装包怎样选](../src/content/articles/blog/client-architecture-package.md) | 区分系统位数、处理器架构和安装包格式，用设备信息与发布说明选择匹配版本，减少兼容问题。 | [1](https://www.clashverge.dev/install.html)<br>[2](https://support.microsoft.com/en-gb/windows/experience/compatibility/32-bit-and-64-bit-windows-frequently-asked-questions) | 826 |
| 203 | clients | [Clash Verge Rev 面板与 WebView2：安装前怎样理解运行环境](../src/content/articles/blog/client-webview-runtime.md) | 解释 Windows 客户端界面与 WebView2 Runtime 的关系，区分运行环境缺失和代理连接问题。 | [1](https://www.clashverge.dev/faq/windows.html)<br>[2](https://learn.microsoft.com/en-us/microsoft-edge/webview2/concepts/distribution) | 828 |
| 204 | clients | [首次导入订阅的验收流程：有节点之后还要检查什么](../src/content/articles/blog/client-subscription-first-import.md) | 把复制链接、导入配置、选择策略与确认流量路径分开验收，避免把导入成功误当成全部可用。 | [1](https://www.clashverge.dev/guide/profile.html)<br>[2](https://www.clashverge.dev/guide/quickstart.html) | 865 |
| 205 | clients | [本地配置与远程订阅怎么选：更新责任和恢复方式的差别](../src/content/articles/blog/client-local-remote-profile.md) | 比较本地文件和远程订阅在内容来源、更新、定制及迁移上的责任，帮助选择可维护的配置方式。 | [1](https://www.clashverge.dev/guide/profile.html) | 836 |
| 206 | clients | [订阅多久更新一次：区分节点刷新、配置刷新与程序升级](../src/content/articles/blog/client-subscription-update.md) | 建立订阅更新的节奏和验收记录，解释更新成功时间、节点变化及本地扩展之间的关系。 | [1](https://www.clashverge.dev/guide/url_schemes.html)<br>[2](https://www.clashverge.dev/guide/extend.html) | 884 |
| 207 | clients | [重置订阅后怎样更新所有设备：一份不泄露令牌的清理清单](../src/content/articles/blog/client-subscription-reset.md) | 从设备盘点、旧入口替换、缓存备份到重新验收，完成订阅地址重置后的凭据清理。 | [1](https://www.clashverge.dev/guide/profile.html)<br>[2](https://www.clashverge.dev/guide/url_schemes.html) | 877 |
| 208 | clients | [一键导入为什么没反应：先理解浏览器到客户端的交接](../src/content/articles/blog/client-one-click-import.md) | 说明 URL Scheme 导入的信任边界、关联应用及手动替代流程，避免把唤起失败误判成订阅不可用。 | [1](https://www.clashverge.dev/guide/url_schemes.html)<br>[2](https://www.clashverge.dev/guide/profile.html) | 830 |
| 209 | clients | [客户端配置怎样备份：把订阅、个人规则与本机设置分层保存](../src/content/articles/blog/client-backup-restore.md) | 制定可恢复且不公开凭据的备份方案，区分来源配置、个人扩展、策略选择和设备专属设置。 | [1](https://www.clashverge.dev/guide/extend.html)<br>[2](https://wiki.metacubex.one/config/general/) | 862 |
| 210 | clients | [客户端升级前后检查清单：版本、扩展与回退怎么安排](../src/content/articles/blog/client-upgrade-rollback.md) | 在升级前保存可用状态，升级后检查配置兼容、连接方式和启动项，减少日常使用中断。 | [1](https://github.com/clash-verge-rev/clash-verge-rev/releases)<br>[2](https://www.clashverge.dev/guide/extend.html) | 855 |
| 211 | clients | [Windows 客户端开机启动：程序启动与网络就绪要分开验收](../src/content/articles/blog/client-windows-startup.md) | 检查 Windows 登录启动项、客户端静默启动和代理恢复状态，避免重复启动与开机断网。 | [1](https://support.microsoft.com/en-gb/windows/experience/startup-boot/configure-startup-applications-in-windows)<br>[2](https://www.clashverge.dev/faq/windows.html) | 855 |
| 212 | clients | [Mac 登录项与后台服务怎样管理：让客户端启动行为可解释](../src/content/articles/blog/client-mac-login-items.md) | 区分 Mac 登录时打开、后台活动和网络接管，建立升级后启动项检查及逐项恢复流程。 | [1](https://support.apple.com/en-vn/guide/mac-help/mh15189/mac)<br>[2](https://support.apple.com/en-afri/guide/mac-help/mh21210/mac) | 818 |
| 213 | clients | [客户端服务模式需要哪些权限：授权之前先弄清用途](../src/content/articles/blog/client-service-permissions.md) | 从界面程序、后台服务和网络接管三层理解权限需求，给出个人设备与受管理设备的授权判断方法。 | [1](https://www.clashverge.dev/install.html)<br>[2](https://wiki.metacubex.one/config/inbound/tun/) | 830 |
| 214 | clients | [系统代理开关做了什么：Windows 与 Mac 的检查方法](../src/content/articles/blog/client-system-proxy-check.md) | 理解系统代理设置、客户端监听和应用使用代理之间的关系，形成启用与退出后的双向检查流程。 | [1](https://support.microsoft.com/en-us/windows/experience/connectivity-networking/use-a-proxy-server-in-windows)<br>[2](https://support.apple.com/en-gb/guide/mac-help/mchlp2591/mac) | 822 |
| 215 | clients | [系统代理还是 TUN：按应用需求选择接管方式](../src/content/articles/blog/client-system-proxy-or-tun.md) | 从应用兼容、权限、内网和恢复成本比较系统代理与 TUN，给出循序启用和验证的决策流程。 | [1](https://www.clashverge.dev/guide/quickstart.html)<br>[2](https://wiki.metacubex.one/config/inbound/tun/) | 852 |
| 216 | clients | [Android 首次连接授权怎么看：VPN 图标与实际连接的区别](../src/content/articles/blog/client-android-vpn-permission.md) | 解读 Android 的 VPN 连接请求、系统状态和客户端状态，明确授权前检查与连接后的验收步骤。 | [1](https://developer.android.com/develop/connectivity/vpn)<br>[2](https://support.google.com/android/answer/9089766?hl=en-CA) | 871 |
| 217 | clients | [Android 分应用代理怎样规划：允许列表、排除列表与验证方法](../src/content/articles/blog/client-android-app-scope.md) | 先定义哪些应用进入连接，再设置分应用范围，并用选中与未选中应用分别验收，避免范围误解。 | [1](https://developer.android.com/develop/connectivity/vpn) | 887 |
| 218 | clients | [Android 常开连接与阻止非 VPN 流量：启用前怎样验收](../src/content/articles/blog/client-android-always-on.md) | 区分保持服务运行与阻止其他连接的效果，设计重启、断线和网络切换验证，避免意外断网。 | [1](https://developer.android.com/develop/connectivity/vpn)<br>[2](https://support.google.com/android/answer/9089766?hl=en-CA) | 829 |
| 219 | clients | [iPhone 的 VPN 与描述文件怎样辨认：安装前后检查范围](../src/content/articles/blog/client-ios-configuration-profiles.md) | 区分客户端连接授权与系统描述文件，检查来源、包含设置及移除影响，避免误装或误删管理配置。 | [1](https://support.apple.com/guide/iphone/install-or-remove-configuration-profiles-iph6c493b19/ios)<br>[2](https://support.apple.com/en-mide/guide/personal-safety/ips327569a75/web) | 833 |
| 220 | clients | [换客户端或卸载前做什么：恢复网络、撤销启动与清理配置](../src/content/articles/blog/client-retire-cleanup.md) | 完成客户端退役的分步验收，检查系统代理、连接配置、启动项和私有备份，保留安全回退路径。 | [1](https://www.clashverge.dev/uninstall.html)<br>[2](https://support.apple.com/en-gb/guide/mac-help/mh35835/mac)<br>[3](https://support.microsoft.com/en-us/windows/experience/connectivity-networking/use-a-proxy-server-in-windows) | 810 |
| 301 | routing | [分流规则为什么有顺序：从具体例外到最终兜底的设计方法](../src/content/articles/blog/routing-rule-order.md) | 用正反例理解规则优先级，设计精确例外、业务规则和兜底策略，并通过新连接验证实际命中。 | [1](https://wiki.metacubex.one/config/rules/) | 852 |
| 302 | routing | [精确域名、后缀与关键字：怎样避免分流规则误伤](../src/content/articles/blog/routing-domain-matching.md) | 比较域名条件的匹配范围，用包含与排除样例选择最小必要规则，减少关键字和通配符造成的意外命中。 | [1](https://wiki.metacubex.one/config/rules/)<br>[2](https://wiki.metacubex.one/config/rule-providers/content/) | 836 |
| 303 | routing | [按进程分流适合哪些任务：名称、路径与应用更新的边界](../src/content/articles/blog/routing-process-scope.md) | 明确进程规则的用途与限制，比较进程名和路径的维护成本，并验证后台组件与升级后的匹配结果。 | [1](https://wiki.metacubex.one/config/rules/)<br>[2](https://wiki.metacubex.one/config/general/) | 845 |
| 304 | routing | [TCP、UDP 与端口规则怎样使用：先定义业务再写条件](../src/content/articles/blog/routing-network-port-rules.md) | 解释网络类型与目标端口条件的设计边界，避免把端口当成应用身份，并检查规则组合的影响范围。 | [1](https://wiki.metacubex.one/config/rules/) | 852 |
| 305 | routing | [规则集格式怎么辨认：domain、ipcidr 与 classical 的区别](../src/content/articles/blog/routing-rule-set-formats.md) | 从内容类型、文件格式和调用关系检查规则集，避免把域名列表、完整配置和节点订阅混用。 | [1](https://wiki.metacubex.one/config/rule-providers/content/)<br>[2](https://wiki.metacubex.one/config/rule-providers/) | 856 |
| 306 | routing | [远程规则集如何更新：来源、缓存与下载路径的维护方法](../src/content/articles/blog/routing-rule-set-updates.md) | 明确规则集获取与业务连接的不同路径，记录更新时间和内容变化，并设计离线与回退验收。 | [1](https://wiki.metacubex.one/config/rule-providers/) | 863 |
| 307 | routing | [代理集合与策略组如何分工：节点来源、筛选和健康检查](../src/content/articles/blog/routing-proxy-provider-design.md) | 区分节点资源的维护与策略组的选择逻辑，审查集合引用、名称冲突和健康检查责任。 | [1](https://wiki.metacubex.one/config/proxy-providers/)<br>[2](https://wiki.metacubex.one/config/proxy-groups/) | 823 |
| 308 | routing | [手动策略组为什么仍有价值：明确出口与可重复验证](../src/content/articles/blog/routing-manual-group.md) | 用手动组建立固定选择和排错基准，安排有限备选，并检查配置更新后选择是否仍符合预期。 | [1](https://wiki.metacubex.one/config/proxy-groups/select/)<br>[2](https://wiki.metacubex.one/config/general/) | 861 |
| 309 | routing | [自动选择怎样才有用：测试地址、容差与业务验证](../src/content/articles/blog/routing-url-test-policy.md) | 解释 URL 测试策略测量的范围，规划候选与容差，并检查自动切换是否改善真实任务。 | [1](https://wiki.metacubex.one/config/proxy-groups/url-test/)<br>[2](https://wiki.metacubex.one/config/proxy-groups/) | 806 |
| 310 | routing | [自动回退如何排主备：顺序、检查与会话中断的预期](../src/content/articles/blog/routing-fallback-policy.md) | 按业务要求安排候选优先级，区分健康检查与完整任务可用，并设计主备切换与恢复测试。 | [1](https://wiki.metacubex.one/config/proxy-groups/fallback/) | 827 |
| 311 | routing | [负载均衡会让单次下载更快吗：连接分配与会话边界](../src/content/articles/blog/routing-load-balance-boundaries.md) | 区分多个连接的分配与单条连接的吞吐，评估账号会话、出口一致性及多候选维护成本。 | [1](https://wiki.metacubex.one/config/proxy-groups/load-balance/) | 836 |
| 312 | routing | [策略组嵌套怎样审查：从业务规则追到最终出口](../src/content/articles/blog/routing-group-reference-graph.md) | 检查策略组引用、命名与层级，避免空组、引用断裂和看不清最终出口，建立可维护的组关系图。 | [1](https://wiki.metacubex.one/config/proxy-groups/)<br>[2](https://wiki.metacubex.one/config/proxy-groups/select/) | 809 |
| 313 | routing | [分流中的 DNS 请求去了哪里：画清四类解析路径](../src/content/articles/blog/routing-dns-resolution-map.md) | 区分应用域名、节点域名、解析服务器域名与直连目标，使用路径记录理解 DNS 与路由的协作。 | [1](https://wiki.metacubex.one/config/dns/diagram/)<br>[2](https://wiki.metacubex.one/config/dns/) | 820 |
| 314 | routing | [Fake-IP 与真实地址模式怎么理解：映射、例外和兼容验证](../src/content/articles/blog/routing-fake-ip-boundaries.md) | 解释 Fake-IP 是客户端内部映射机制，规划必要例外，区分解析模式、出口地址与业务兼容性。 | [1](https://wiki.metacubex.one/config/dns/) | 828 |
| 315 | routing | [按域名指定 DNS 怎样设计：解析策略与业务出口分别验收](../src/content/articles/blog/routing-dns-policy.md) | 明确域名解析策略的责任，避免与分流策略混淆，并核对内网、节点解析及扩展覆盖带来的影响。 | [1](https://wiki.metacubex.one/config/dns/)<br>[2](https://www.clashverge.dev/guide/extend.html) | 802 |
| 316 | routing | [hosts 固定映射什么时候适用：临时验证、过期风险与撤销方法](../src/content/articles/blog/routing-hosts-maintenance.md) | 区分客户端 hosts 与系统 hosts，评估固定地址的维护成本，并用限定范围和到期记录避免长期失效。 | [1](https://wiki.metacubex.one/config/dns/hosts/)<br>[2](https://wiki.metacubex.one/config/dns/) | 825 |
| 317 | routing | [域名嗅探能解决什么：识别线索、目标覆盖与兼容边界](../src/content/articles/blog/routing-sniffer-scope.md) | 明确嗅探与解密的区别，按缺失域名的具体连接评估启用范围，并检查覆盖目标和必要例外。 | [1](https://wiki.metacubex.one/config/sniff/) | 837 |
| 318 | routing | [局域网访问怎样保留：区分代理规则、路由排除与名称解析](../src/content/articles/blog/routing-local-network-exclusions.md) | 围绕打印机、路由器和内部业务，分别检查进入客户端、规则直连及系统路由排除的差异。 | [1](https://wiki.metacubex.one/config/inbound/tun/)<br>[2](https://support.apple.com/en-gb/guide/mac-help/mchlp2591/mac)<br>[3](https://support.microsoft.com/en-us/windows/experience/connectivity-networking/use-a-proxy-server-in-windows) | 845 |
| 319 | routing | [IPv6 设置要检查哪几层：系统、DNS、核心与接管范围](../src/content/articles/blog/routing-ipv6-scope.md) | 把 IPv6 接受、AAAA 解析和路由接管分开审查，避免只改一个开关就宣称整个设备路径一致。 | [1](https://wiki.metacubex.one/config/general/)<br>[2](https://wiki.metacubex.one/config/dns/)<br>[3](https://wiki.metacubex.one/config/inbound/tun/) | 863 |
| 320 | routing | [修改分流配置怎样验收：一项变更、一组对照、一条恢复路径](../src/content/articles/blog/routing-change-review.md) | 建立个人分流变更记录，检查最终配置、正反目标与退出行为，降低规则和扩展叠加造成的维护难度。 | [1](https://www.clashverge.dev/guide/extend.html)<br>[2](https://wiki.metacubex.one/config/) | 830 |

## 检查记录

- 文件数：40；类别分别 20 篇；顺序分别为 201–220 与 301–320。
- 正文汉字数范围：802–887；计数不含 frontmatter，含正文表格与标题。
- 每篇 5 个二级标题；按目标场景、操作判断、验证与恢复组成。
- 检查了 40 篇的前置信息、日期、分类、顺序、sources、全文摘要重复及本批文章之间的内链。
- 全文重复：0；70 字符及以上整段重复：0；占位域名及禁用品牌：0。
- 来源均有正文邻近事实的上下文链接，不仅列在文末。
- 抽读下载核验、订阅更新、Android 分应用、规则集格式、URL 测试、Fake-IP 与 IPv6 篇，核对机制陈述和限制。
- 本记录不代替站点集成后的构建、SEO、可访问性及浏览器验收，这些由主任务统一完成。

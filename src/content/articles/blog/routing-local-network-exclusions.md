---
title: "局域网访问怎样保留：区分代理规则、路由排除与名称解析"
description: "围绕打印机、路由器和内部业务，分别检查进入客户端、规则直连及系统路由排除的差异。"
section: "blog"
slug: "routing-local-network-exclusions"
published: "2026-10-16"
updated: "2026-10-16"
draft: false
tags: ["局域网", "规则范围", "DNS"]
category: "routing"
order: 318
sources: ["https://wiki.metacubex.one/config/inbound/tun/", "https://support.apple.com/en-gb/guide/mac-help/mchlp2591/mac", "https://support.microsoft.com/en-us/windows/experience/connectivity-networking/use-a-proxy-server-in-windows"]
---

启用代理后，公网网页正常而打印机或内部系统异常，不能只用“加一条直连”概括处理。局域网访问可能同时受系统代理例外、TUN 路由和内部名称解析影响。本文提供分层设计方法，只讨论自己有权使用的设备与网络。

## 先列出必须保留的资源
记录路由器管理、打印、文件共享或内部业务等实际任务，区分通过 IP 访问还是通过名称访问。不要把整个内网拓扑和敏感域名公开贴进工单；用资源角色和去敏记录就能说明需求。

受管理网络的网段、解析与路由要求应由管理员确认。个人配置不能为了方便覆盖组织访问控制，更不能把未授权业务当作连通性测试目标。

## 系统代理与 TUN 要分开查
[Windows 代理说明](https://support.microsoft.com/en-us/windows/experience/connectivity-networking/use-a-proxy-server-in-windows)与 [Mac 代理设置说明](https://support.apple.com/en-gb/guide/mac-help/mchlp2591/mac)均涉及相应例外配置。它们属于使用系统代理的路径，不能自动控制另一条 TUN 接管路径。

[mihomo TUN 文档](https://wiki.metacubex.one/config/inbound/tun/)则提供路由排除等选项，并有平台限制。因此，核心里命中直连与流量完全不进入 TUN，是不同处理层；应根据需求选择，不把二者混写成同一功能。

## 名称解析单独验收
通过 IP 能访问而通过名称失败时，应优先核对名称由谁解析、是否需要内部解析服务。公网 DNS 未必理解组织内部命名，单纯换节点不一定有关。反之，名称能解析也不能证明实际路由与服务权限正确。

不要为了修一个内部主机，随意关闭整个设备的 DNS 安全设置或导入不明 hosts 表。需要固定映射时，先由授权维护者确认，并设置明确撤销条件。

## 用真实动作验证最小范围
分别测试一个必须保留的内网任务与一个普通公网任务，检查开启和关闭接管后的结果。打印场景要确认打印任务完成，文件共享要确认授权访问正常，不能只凭浏览器打开管理首页推断全部功能。

对需要发现设备的功能，静态地址可达不等于自动发现正常。应如实记录已验证的具体动作，不把未测试功能写成全部兼容。

## 排除范围越宽越要解释
确需网段排除时，范围应来自已确认网络设计，而不是从论坛复制整段列表。多地办公、家庭网络和企业网络可能使用不同地址，旧排除规则也可能在新环境匹配意外目标。

保留原代理、路由与解析设置，一次只改一层，再做同样验收。完整接管方式的选择见 [系统代理与 TUN](/blog/client-system-proxy-or-tun/)。局域网维护的目标是让授权业务保留预期路径，并清楚说明每条例外的作用。

如果同一资源需要在家庭与办公网络使用，应分别记录适用条件。不要把一个地点验证过的网段例外无条件同步到所有设备和网络，以免产生意外的绕行范围。

---
title: "换客户端或卸载前做什么：恢复网络、撤销启动与清理配置"
description: "完成客户端退役的分步验收，检查系统代理、连接配置、启动项和私有备份，保留安全回退路径。"
section: "blog"
slug: "client-retire-cleanup"
published: "2026-10-16"
updated: "2026-10-16"
draft: false
tags: ["卸载清理", "网络恢复", "启动管理"]
category: "clients"
order: 220
sources: ["https://www.clashverge.dev/uninstall.html", "https://support.apple.com/en-gb/guide/mac-help/mh35835/mac", "https://support.microsoft.com/en-us/windows/experience/connectivity-networking/use-a-proxy-server-in-windows"]
---

卸载客户端不是只删除一个图标。它可能留下系统代理、登录启动、私有配置与旧备份，也可能正在被其他任务依赖。退役的目标是新旧网络状态都可解释：先恢复正常连接，再移除程序，最后处理不再需要的凭据副本。

## 先保留需要迁移的内容
盘点个人规则、必要账号入口和仍在用的配置，按 [分层备份方法](/blog/client-backup-restore/)保存私有副本。记录正在使用的模式、端口和系统设置。迁移到另一个客户端时，先完成基础连接验收，再决定旧配置能保留多久。

不要把整个用户目录拷到公共网盘，也不要为了“清理干净”先删除唯一一份自己编写的规则。需要保留与需要公开，是两件完全不同的事。

## 在程序仍可操作时关闭接管
先正常关闭系统代理或 TUN 等功能，并退出应用。Windows 可按 [Microsoft 代理说明](https://support.microsoft.com/en-us/windows/experience/connectivity-networking/use-a-proxy-server-in-windows)核对是否还保留客户端写入的地址。组织原有代理或脚本应恢复到已确认状态，不能统一改成空白。

此时验证普通网络与自己有权访问的内网资源。若仍有问题，先处理残留设置，避免卸载后失去最直观的撤销入口，再开始猜测哪一项被修改。

## 使用项目支持的卸载方式
Clash Verge Rev 用户应查阅[项目卸载说明](https://www.clashverge.dev/uninstall.html)，其他应用按各自官方流程。Mac 用户可参考 [Apple 的应用移除说明](https://support.apple.com/en-gb/guide/mac-help/mh35835/mac)，有专用卸载程序时先确认其用途。不要运行不知道会删除哪些位置的所谓深度清理脚本。

如果应用仍在运行，先正常退出；权限组件的处理也依项目说明进行。删除可执行文件和卸载后台组件不一定是同一个动作，应分别核对结果。

## 启动项和私有副本最后处理
检查下一次登录是否仍尝试启动旧应用，清理确定不再需要的入口。再看订阅卡片、下载文件、二维码截图和同步备份，决定保留、隔离或删除。客户端删除不等于服务商账号注销，自动续费和订阅凭据的撤销需在相应账号入口单独确认。

若私有链接曾公开，应考虑重置凭据，而不是只删除本机文件。重置范围仍以服务商说明为准，不能推定所有旧连接立即失效。

## 用重新登录完成验收
保存工作后重新登录或重启，确认没有旧程序弹窗、无效代理和重复连接。新客户端按预期工作，旧入口没有重新出现，才算迁移完成。记录最终状态与保留备份位置即可，报告里不要附完整令牌。

发现问题时恢复明确的一层设置，不直接重置全部网络。退役是一项有顺序的维护工作，保留可回退状态，比一次清空后失去线索更可靠。

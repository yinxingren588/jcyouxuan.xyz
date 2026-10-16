import { topics } from "./site";
import { airports } from "./airports";
export interface Page {
  path: string;
  title: string;
  description: string;
  type: string;
  key?: string;
  noindex?: boolean;
  parent?: string;
}
export const pages: Page[] = [
  {
    path: "recommend",
    title: "从你的需求开始选择",
    description:
      "按预算、设备和用途建立候选清单，分清订阅代理机场与商业 VPN，先查证据再试用。",
    type: "recommend",
  },
  ...topics.map((t) => ({
    path: `recommend/${t.slug}`,
    title: `${t.name}：连接服务选择专题`,
    description:
      t.description +
      " 公开资料、核验问题和相关教程集中整理，不以营销承诺代替实际表现。",
    type: "topic",
    key: t.slug,
    parent: "recommend",
  })),
  {
    path: "ranking",
    title: "数据榜单与排名依据",
    description:
      "查看已核验的公开套餐资料与排名条件；没有实测证据的综合榜、稳定性榜暂不发布名次。",
    type: "rankings",
  },
  {
    path: "ranking/overall",
    title: "综合排行榜：等待可复现的测试证据",
    description:
      "公开综合榜的准入门槛与评判规则，尚无合格实测数据，不发布推测名次。",
    type: "ranking",
    key: "overall",
    noindex: true,
    parent: "ranking",
  },
  {
    path: "ranking/value",
    title: "每 GB 成本：仅比较可计算数据",
    description:
      "按同币种同周期计算流量成本，排除未核实、不限流量与无法折算的套餐。当前没有可发布的付费样本。",
    type: "ranking",
    key: "value",
    noindex: true,
    parent: "ranking",
  },
  {
    path: "ranking/budget",
    title: "低预算方案：先从免费体验开始",
    description:
      "比较三家商业 VPN 的免费基础方案与额度条件；同为零费用，不按质量分出高低。",
    type: "ranking",
    key: "budget",
    parent: "ranking",
  },
  {
    path: "ranking/stable",
    title: "稳定性排行榜：测试方法与开放条件",
    description:
      "稳定性需要多网络、多时段的可复现记录；本站尚未完成这类测试，暂不开放名次。",
    type: "ranking",
    key: "stable",
    noindex: true,
    parent: "ranking",
  },
  {
    path: "ranking/free-quota",
    title: "免费方案流量额度比较",
    description:
      "按官方公布的免费基础流量额度比较 Proton VPN、Windscribe 与 TunnelBear，条件升级单独说明。",
    type: "ranking",
    key: "quota",
    parent: "ranking",
  },
  {
    path: "airport",
    title: "品牌资料库：公开事实与核验记录",
    description:
      "五家真实商业 VPN 的统一资料库，标注套餐周期、限制与官方来源，代理订阅机场资料待补充。",
    type: "brands",
  },
  {
    path: "review",
    title: "独立资料评析：事实、判断与待测项",
    description:
      "把官方资料与编辑分析分开阅读。当前未完成网络实测，这里不提供虚构测速或解锁结论。",
    type: "reviews",
  },
  ...airports.flatMap((a) => [
    {
      path: `airport/${a.slug}`,
      title: `${a.name} 资料：套餐与公开来源`,
      description: `整理 ${a.name} 的已核验套餐、使用限制、适合人群与官方来源；网络、AI 和流媒体表现尚未实测。`,
      type: "brand",
      key: a.slug,
      parent: "airport",
    },
    {
      path: `review/${a.slug}`,
      title: `${a.name} 资料分析：适合谁与购买前核对项`,
      description: `基于公开资料分析 ${a.name} 的方案取舍与局限，明确哪些属于官方事实、编辑判断及尚未测试项目。`,
      type: "review",
      key: a.slug,
      parent: "review",
    },
  ]),
  {
    path: "compare",
    title: "横向对比：把选择放在同一张表里",
    description:
      "选择 2–4 家真实品牌，比较价格、流量、成本、设备与待核验项目，所有资料来自统一数据库。",
    type: "compare",
  },
  {
    path: "guides",
    title: "使用教程：从第一次连接开始",
    description:
      "Windows、Android、iOS、macOS 的官方客户端使用指南与通用排查清单。",
    type: "guides",
  },
  {
    path: "blog",
    title: "选择指南与深度文章",
    description:
      "围绕预算、稳定性、AI 与流媒体建立可验证的判断方法，减少无依据的购买决策。",
    type: "blog",
  },
  {
    path: "glossary",
    title: "知识百科：看懂连接服务的基本概念",
    description:
      "解释 VPN、代理、流量倍率、延迟、DNS 与 WireGuard，用清晰概念理解服务差异。",
    type: "glossary",
  },
  {
    path: "about",
    title: "关于机场优选",
    description:
      "了解本站的内容范围与资料边界：来源透明、公开修订，不虚构团队与实测经历。",
    type: "legal",
    key: "about",
  },
  {
    path: "contact",
    title: "联系与内容纠错",
    description:
      "通过公开仓库提交资料纠错与功能反馈，说明来源和日期，避免在公开内容中泄露账户资料。",
    type: "legal",
    key: "contact",
  },
  {
    path: "editorial-policy",
    title: "编辑政策与推荐标准",
    description:
      "公开资料来源、实测门槛、排名规则、更新机制与商业合作披露，区分事实和编辑判断。",
    type: "legal",
    key: "editorial",
  },
  {
    path: "privacy-policy",
    title: "隐私政策",
    description:
      "说明本站静态页面、站内搜索、第三方链接、托管日志与未来统计工具的隐私处理。",
    type: "legal",
    key: "privacy",
  },
  {
    path: "disclaimer",
    title: "免责声明与信息使用边界",
    description:
      "说明公开资料的时效、服务可用性限制、第三方条款与使用者的独立决策责任。",
    type: "legal",
    key: "disclaimer",
  },
  {
    path: "404",
    title: "页面未找到",
    description: "这个地址没有对应内容，请返回首页或搜索站内教程与品牌资料。",
    type: "404",
    noindex: true,
  },
];

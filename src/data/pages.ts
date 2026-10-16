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
    title: "机场推荐顺序：29 品牌选择依据",
    description:
      "按站长指定顺序展示 29 个品牌，分别说明推荐理由、套餐参考与推广关系，不以性能评分排序。",
    type: "ranking",
    key: "overall",
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
    title: "月付预算：29 品牌参考方案比较",
    description:
      "按原目录顺序比较选定月付参考档，核对容量与支付周期，不将历史起价作为当前报价。",
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
    path: "ranking/traffic",
    title: "月度流量档位：按容量需求选择",
    description:
      "逐家查看月度容量、扩容取舍和核查项目；套餐为第三方公开资料参考，当前结算待确认。",
    type: "ranking",
    key: "quota",
    parent: "ranking",
  },
  {
    path: "airport",
    title: "品牌资料库：公开事实与核验记录",
    description:
      "只收录站长指定的 29 个品牌，按指定顺序展示套餐参考、独立推荐依据、优惠码与推广入口。",
    type: "brands",
  },
  {
    path: "review",
    title: "品牌选择分析：为什么选择与如何取舍",
    description:
      "29 家品牌分别分析预算、流量和资料局限；推广关系公开，不以推测的速度或解锁能力作保证。",
    type: "reviews",
  },
  ...airports.flatMap((a) => [
    {
      path: `airport/${a.slug}`,
      title: `${a.name} 资料：套餐与公开来源`,
      description: `${a.name}：${a.focus}。查看套餐参考、推荐原因、指定推广入口、优惠条件核查项和公开来源。`,
      type: "brand",
      key: a.slug,
      parent: "airport",
    },
    {
      path: `review/${a.slug}`,
      title: `${a.name} 资料分析：适合谁与购买前核对项`,
      description: `为什么选择 ${a.name}？围绕“${a.focus}”分析费用和容量取舍，保留资料冲突及购买前核对项。`,
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
      "Windows、Android、iOS、macOS 的客户端选择、授权、订阅核对和通用排查清单。",
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

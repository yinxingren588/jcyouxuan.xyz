import { topics } from "./site";
import { airports } from "./airports";
import {brandEditorial} from "./brand-editorial";
import {topicSeo} from "./seo";
export interface Page {
  path: string;
  title: string;
  description: string;
  keywords?: string[];
  type: string;
  key?: string;
  noindex?: boolean;
  parent?: string;
}
export const pages: Page[] = [
  {
    path: "recommend",
    title: "机场选购指南：按预算、设备与场景筛选",
    description:
      "按预算、设备与使用场景筛选机场服务，提供低预算、新手、专线选购、晚高峰、AI和流媒体六个专题，说明候选条件与待核实事项。",
    type: "recommend",
  },
  ...topics.map((t) => ({
    path: `recommend/${t.slug}`,
    title: topicSeo[t.slug].title,
    description:
      topicSeo[t.slug].description,
    type: "topic",
    key: t.slug,
    parent: "recommend",
  })),
  {
    path: "ranking",
    title: "机场排行与比较：目录、预算和容量工具",
    description:
      "区分站长推荐目录、月付预算、容量比较、套餐成本测算与稳定性核查，筛选条件与商业关系透明。",
    type: "rankings",
  },
  {
    path: "ranking/overall",
    title: "29 家机场品牌推荐目录：站长顺序与选择依据",
    description:
      "按站长指定顺序展示 29 个品牌，分别说明推荐理由、套餐参考与推广关系，不以性能评分排序。",
    type: "ranking",
    key: "overall",
    parent: "ranking",
  },
  {
    path: "ranking/value",
    title: "机场套餐成本测算：价格、容量与流量倍率",
    description:
      "填写已核对的月付金额、容量与倍率，计算预算可用流量和每 GB 成本；年付、一次性包与不限流量分开说明。",
    type: "ranking",
    key: "value",
    noindex: true,
    parent: "ranking",
  },
  {
    path: "ranking/budget",
    title: "机场月付预算比较：按价格与容量筛选",
    description:
      "按月付预算与容量条件查找各品牌匹配参考档，显示档位名称；支持主动切换参考价格展示方式，不混入性能评分。",
    type: "ranking",
    key: "budget",
    parent: "ranking",
  },
  {
    path: "ranking/stable",
    title: "晚高峰稳定性核查：观察流程与记录模板",
    description:
      "提供多日期、多时段的任务观察流程、记录字段和 CSV 模板。本站没有统一原始测试记录，不发布推测稳定性名次。",
    type: "ranking",
    key: "stable",
    noindex: true,
    parent: "ranking",
  },
  {
    path: "ranking/traffic",
    title: "机场流量档位比较：按月度用量匹配套餐",
    description:
      "按 100GB、300GB 或更高月度容量匹配已收录参考档，分开处理 GB 与 GiB；保留价格、周期及资料状态。",
    type: "ranking",
    key: "quota",
    parent: "ranking",
  },
  {
    path: "airport",
    title: "29 品牌详情：套餐、适合人群与推荐依据",
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
      title: `${a.name} 套餐与选购指南`,
      description: `${a.name}套餐资料：${brandEditorial[a.slug].deck} 查看适合人群、推荐依据、资料冲突${a.coupon?'与指定优惠码条件':'与购买前核对项'}。`,
      keywords: [a.name, `${a.name}套餐`, `${a.name}价格`, `${a.name}${a.coupon?'优惠码':'选购'}`],
      type: "brand",
      key: a.slug,
      parent: "airport",
    },
    {
      path: `review/${a.slug}`,
      title: `${a.name} 值得选吗？预算与需求取舍`,
      description: `为什么选择${a.name}？围绕“${a.focus}”分析费用和容量取舍，说明适合人群、资料冲突与购买前核对项。`,
      keywords: [a.name, `${a.name}推荐理由`, `${a.name}适合人群`, `${a.name}套餐对比`],
      type: "review",
      key: a.slug,
      parent: "review",
    },
  ]),
  {
    path: "compare",
    title: "机场对比：选择品牌与具体套餐并排核对",
    description:
      "搜索并选择 2–4 家指定品牌，每列切换具体套餐，比较预算、容量、优点与局限；支持只看不同项和复制当前对比链接。",
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
    title: "博客资讯：150 篇连接选择与使用指南",
    description:
      "150 篇文章覆盖选购预算、客户端、分流配置、故障排查、体验观察、隐私、流媒体、AI 与办公；按主题阅读具体步骤、示例与参考资料。",
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
      "了解本站的内容范围与资料边界：条件明确、公开修订，不虚构团队与实测经历。",
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
      "说明资料范围、实测门槛、排名规则、更新机制与商业合作披露，区分事实和编辑判断。",
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

export interface Plan {
  id: string;
  name: string;
  price: number;
  currency: string;
  period: "month" | "year" | "one-time";
  trafficGB?: number;
  unlimited?: boolean;
  multiplier: number;
  verified: boolean;
  notes?: string;
}
export interface Airport {
  id: string;
  name: string;
  slug: string;
  kind: "vpn" | "proxy";
  description: string;
  officialUrl?: string;
  affiliateUrl?: string;
  startingPrice?: number;
  currency?: string;
  plans: Plan[];
  protocols: string[];
  regions: string[];
  deviceLimit?: string;
  aiSupport?: string[];
  streamingSupport?: string[];
  advantages: string[];
  disadvantages: string[];
  suitableFor: string[];
  sources: string[];
  lastVerified?: string;
  testStatus: "tested" | "official-data" | "unverified";
  color: string;
}
const base = {
  kind: "vpn" as const,
  protocols: [],
  regions: [],
  aiSupport: [],
  streamingSupport: [],
  lastVerified: "2026-10-16",
  testStatus: "official-data" as const,
};
export const airports: Airport[] = [
  {
    ...base,
    id: "proton",
    name: "Proton VPN",
    slug: "proton-vpn",
    color: "#6d4aff",
    description:
      "提供免费方案的商业 VPN；免费方案不限流量，适合先熟悉官方客户端。",
    startingPrice: 0,
    currency: "USD",
    officialUrl: "https://protonvpn.com/",
    deviceLimit: "免费方案 1 台",
    plans: [
      {
        id: "free",
        name: "Free",
        price: 0,
        currency: "USD",
        period: "month",
        unlimited: true,
        multiplier: 1,
        verified: true,
        notes: "免费方案；节点选择有限，付费功能不包含在内。",
      },
    ],
    advantages: ["免费方案不限流量", "提供主流系统官方客户端"],
    disadvantages: [
      "免费方案仅 1 台设备",
      "本站未测试本地网络、AI 或流媒体可用性",
    ],
    suitableFor: ["新手入门", "免费试用"],
    sources: [
      "https://protonvpn.com/free-vpn",
      "https://protonvpn.com/support/protonvpn-setup-guide",
    ],
  },
  {
    ...base,
    id: "mullvad",
    name: "Mullvad",
    slug: "mullvad",
    color: "#b77b18",
    description: "按月统一定价的商业 VPN；适合希望减少长期预付、逐月评估的人。",
    startingPrice: 5,
    currency: "EUR",
    officialUrl: "https://mullvad.net/",
    deviceLimit: "5 台",
    plans: [
      {
        id: "month",
        name: "月度使用",
        price: 5,
        currency: "EUR",
        period: "month",
        multiplier: 1,
        verified: true,
      },
    ],
    advantages: ["月度价格明确", "无需通过长期预付获得标示月价"],
    disadvantages: ["套餐流量口径尚未核实", "欧元标价不能直接与美元套餐排序"],
    suitableFor: ["按月付费", "预算可控"],
    sources: ["https://mullvad.net/en/pricing"],
  },
  {
    ...base,
    id: "windscribe",
    name: "Windscribe",
    slug: "windscribe",
    color: "#087d8e",
    description: "免费账户可用于轻量体验；不同账户条件对应不同月度流量额度。",
    startingPrice: 0,
    currency: "USD",
    officialUrl: "https://windscribe.com/",
    plans: [
      {
        id: "free",
        name: "Free 基础",
        price: 0,
        currency: "USD",
        period: "month",
        trafficGB: 2,
        multiplier: 1,
        verified: true,
      },
      {
        id: "free-email",
        name: "Free 邮箱方案",
        price: 0,
        currency: "USD",
        period: "month",
        trafficGB: 10,
        multiplier: 1,
        verified: true,
        notes: "需确认邮箱并符合官方推广邮件条件，购买或注册前核查当前规则。",
      },
    ],
    advantages: ["可先体验再决定", "基础方案不要求绑定邮箱"],
    disadvantages: ["免费额度有限", "10GB 方案有邮箱及邮件条件"],
    suitableFor: ["轻量使用", "免费试用"],
    sources: [
      "https://windscribe.com/knowledge-base/articles/can-i-use-windscribe-for-free",
      "https://windscribe.com/knowledge-base/articles/why-do-i-need-to-subscribe-to-promo-emails-to-get-10gb/",
    ],
  },
  {
    ...base,
    id: "tunnelbear",
    name: "TunnelBear",
    slug: "tunnelbear",
    color: "#c46528",
    description:
      "提供小流量免费方案的商业 VPN，可先了解客户端是否适合自己的设备。",
    startingPrice: 0,
    currency: "USD",
    officialUrl: "https://www.tunnelbear.com/",
    plans: [
      {
        id: "free",
        name: "Free",
        price: 0,
        currency: "USD",
        period: "month",
        trafficGB: 2,
        multiplier: 1,
        verified: true,
      },
    ],
    advantages: ["提供免费体验入口"],
    disadvantages: ["免费方案仅 2GB", "付费促销的预付周期未纳入本次资料"],
    suitableFor: ["短时体验", "轻量使用"],
    sources: ["https://www.tunnelbear.com/pricing/"],
  },
  {
    ...base,
    id: "ivpn",
    name: "IVPN",
    slug: "ivpn",
    color: "#d14052",
    description: "官方公开按周、月、年计费表；Standard 方案提供五台设备额度。",
    startingPrice: 6,
    currency: "USD",
    officialUrl: "https://www.ivpn.net/",
    deviceLimit: "Standard 5 台",
    plans: [
      {
        id: "standard-month",
        name: "Standard 月付",
        price: 6,
        currency: "USD",
        period: "month",
        multiplier: 1,
        verified: true,
      },
      {
        id: "standard-year",
        name: "Standard 年付",
        price: 60,
        currency: "USD",
        period: "year",
        multiplier: 1,
        verified: true,
        notes: "一次支付 60 美元，折合 5 美元/月，不是月付价格。",
      },
    ],
    advantages: ["提供按月付费", "官方公布设备限额和计费周期"],
    disadvantages: ["本站未测长期稳定性", "流量计费口径尚未核实"],
    suitableFor: ["多设备", "按月付费"],
    sources: [
      "https://www.ivpn.net/blog/ivpn-plan-changes-new-plus-tier-increased-device-limits-additional-privacy-services/",
    ],
  },
];
export const missing = "尚未核实";
export const price = (p: Plan) =>
  `${p.currency} ${p.price} / ${p.period === "month" ? "月" : p.period === "year" ? "年" : "次"}`;
export const traffic = (p: Plan) =>
  p.unlimited
    ? "不限流量（官方标示）"
    : p.trafficGB === undefined
      ? missing
      : `${p.trafficGB} GB / ${p.period === "month" ? "月" : p.period === "year" ? "年" : "次"}`;
export function unitCost(p: Plan): number | null {
  return p.verified &&
    !p.unlimited &&
    p.trafficGB !== undefined &&
    p.trafficGB > 0 &&
    p.multiplier > 0
    ? p.price / (p.trafficGB / p.multiplier)
    : null;
}
export function valueEligible(p: Plan) {
  return (
    p.verified && p.period === "month" && p.price > 0 && unitCost(p) !== null
  );
}
export function freeRanking() {
  return airports
    .flatMap((a) => {
      const p = a.plans.find((p) => p.id === "free");
      return p ? [{ airport: a, plan: p }] : [];
    })
    .sort(
      (a, b) =>
        (b.plan.unlimited ? Infinity : (b.plan.trafficGB ?? -1)) -
        (a.plan.unlimited ? Infinity : (a.plan.trafficGB ?? -1)),
    );
}

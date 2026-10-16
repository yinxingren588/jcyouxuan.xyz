export interface Plan {id:string;name:string;price:number;currency:string;period:"month"|"year"|"one-time";trafficGB?:number;trafficUnit?:"GB"|"GiB";unlimited?:boolean;multiplier?:number;verified:boolean;notes?:string}
export interface Airport {id:string;slug:string;name:string;order:number;kind:"vpn"|"proxy";description:string;focus:string;recommendation:string;whyChoose:string;affiliateUrl:string;coupon?:string;plans:Plan[];protocols:string[];regions:string[];deviceLimit?:string;aiSupport:string[];streamingSupport:string[];advantages:string[];disadvantages:string[];suitableFor:string[];sources:string[];sourceNotes:string;purchaseCheck:string;lastVerified:string;testStatus:"tested"|"official-data"|"unverified";color:string}
export const airports:Airport[] = [
  {
    "id": "twilight",
    "slug": "twilight",
    "name": "暮光网络",
    "order": 1,
    "kind": "proxy",
    "description": "120GB 起步，按用量稳步升级",
    "recommendation": "暮光网络适合先建立月度流量基线的人。参考资料中，20 元对应 120GB，40 元对应 240GB，两档价格和容量同步翻倍；先从较小档记录自己的消耗，比一开始购买用不完的大包更容易控制支出。",
    "whyChoose": "暮光网络适合先建立月度流量基线的人。参考资料中，20 元对应 120GB，40 元对应 240GB，两档价格和容量同步翻倍；先从较小档记录自己的消耗，比一开始购买用不完的大包更容易控制支出。",
    "focus": "120GB 起步，按用量稳步升级",
    "affiliateUrl": "https://varnexa.twilightaff.com/#/?code=3qqonTlH",
    "plans": [
      {
        "id": "month-1",
        "name": "120GB 月付参考",
        "price": 20,
        "currency": "CNY",
        "period": "month",
        "trafficGB": 120,
        "trafficUnit": "GB",
        "verified": false,
        "notes": "第三方历史参考；当前在售、额度及结算均未确认。40元标准档240GB与300GB版本并存；选择较小值只能减少夸大，不能使其成为已验证价格。"
      },
      {
        "id": "month-2",
        "name": "240GB 月付参考",
        "price": 40,
        "currency": "CNY",
        "period": "month",
        "trafficGB": 240,
        "trafficUnit": "GB",
        "verified": false,
        "notes": "第三方历史参考；当前在售、额度及结算均未确认。40元标准档240GB与300GB版本并存；选择较小值只能减少夸大，不能使其成为已验证价格。"
      }
    ],
    "protocols": [],
    "regions": [],
    "aiSupport": [],
    "streamingSupport": [],
    "advantages": [
      "20 元、120GB 的月付参考档便于建立首次用量基线",
      "相邻两档价格与容量同比增长，升级预算容易预估"
    ],
    "disadvantages": [
      "40元标准档240GB与300GB版本并存；选择较小值只能减少夸大，不能使其成为已验证价格。 40 元档有其他页面写成 300GB；本页采用较保守的 240GB 参考值，不据此承诺实际到账额度。"
    ],
    "suitableFor": [
      "120GB 起步，按用量稳步升级"
    ],
    "sources": [
      "https://tizilab.cc/paihang/twilight/"
    ],
    "sourceNotes": "40元标准档240GB与300GB版本并存；选择较小值只能减少夸大，不能使其成为已验证价格。 40 元档有其他页面写成 300GB；本页采用较保守的 240GB 参考值，不据此承诺实际到账额度。",
    "purchaseCheck": "20元120GB与40元240GB是否仍在售？是否按30天或自然月重置？ 40元档实际到账是240GB还是300GB？ 是否支持所用客户端，设备数、倍率、退款窗口分别是什么？",
    "lastVerified": "2026-10-16",
    "testStatus": "unverified",
    "color": "#9b87ff"
  },
  {
    "id": "invisible",
    "slug": "invisible",
    "name": "隐形人",
    "order": 2,
    "kind": "proxy",
    "description": "144GB 月包，优先核对精确额度",
    "recommendation": "隐形人的参考月包为 24 元、144GB，适合需求落在 120GB 与 150GB 之间的人单独核算。选择它的理由是额度与个人用量能否贴合，而不是因为它排在前列就推断性能更好。",
    "whyChoose": "隐形人的参考月包为 24 元、144GB，适合需求落在 120GB 与 150GB 之间的人单独核算。选择它的理由是额度与个人用量能否贴合，而不是因为它排在前列就推断性能更好。",
    "focus": "144GB 月包，优先核对精确额度",
    "affiliateUrl": "https://varnexa.invisibleaff.com/#/?code=JF4seZUy",
    "coupon": "yxr888",
    "plans": [
      {
        "id": "month-1",
        "name": "144GB 月付参考",
        "price": 24,
        "currency": "CNY",
        "period": "month",
        "trafficGB": 144,
        "trafficUnit": "GB",
        "verified": false,
        "notes": "第三方历史参考；当前在售、额度及结算均未确认。24元档144GB、120GB及100GB的不同公开版本；当前144GB仍须原入口核对。"
      }
    ],
    "protocols": [],
    "regions": [],
    "aiSupport": [],
    "streamingSupport": [],
    "advantages": [
      "144GB 月包为介于常见小包之间的需求提供预算参照",
      "仅收录周期明确的月包作预算参照，避免把109元年包额度混作每月144GB"
    ],
    "disadvantages": [
      "24元档144GB、120GB及100GB的不同公开版本；当前144GB仍须原入口核对。 来源还收录年付与一次性方案，但各周期流量口径不能混用；本页只把明确标为月度的 144GB 纳入表格。"
    ],
    "suitableFor": [
      "144GB 月包，优先核对精确额度"
    ],
    "sources": [
      "https://jichang168.com/airports/invisible/"
    ],
    "sourceNotes": "24元档144GB、120GB及100GB的不同公开版本；当前144GB仍须原入口核对。 来源还收录年付与一次性方案，但各周期流量口径不能混用；本页只把明确标为月度的 144GB 纳入表格。",
    "purchaseCheck": "白银纪元当前是否24元/144GB？ 109元年付80GB究竟每月还是全年总量？ 当前能否发放通用订阅，还是必须官方客户端？ yxr888适用哪些套餐、周期、新购或续费？优惠后订单金额是多少？ 一次性包设备上限和退款时限分别是多少？",
    "lastVerified": "2026-10-16",
    "testStatus": "unverified",
    "color": "#73d9d2"
  },
  {
    "id": "lingdong",
    "slug": "lingdong",
    "name": "灵动云",
    "order": 3,
    "kind": "proxy",
    "description": "从 100GB 到 300GB 的容量跃迁",
    "recommendation": "灵动云值得关注的是小档与中档的衔接：参考月付从 20 元、100GB 到 50 元、300GB。若实际需求明显超过 100GB，中档以 2.5 倍费用换取 3 倍标称容量，适合在两档之间做明确的预算判断。",
    "whyChoose": "灵动云值得关注的是小档与中档的衔接：参考月付从 20 元、100GB 到 50 元、300GB。若实际需求明显超过 100GB，中档以 2.5 倍费用换取 3 倍标称容量，适合在两档之间做明确的预算判断。",
    "focus": "从 100GB 到 300GB 的容量跃迁",
    "affiliateUrl": "https://varnexa.lingdongaff.com/#/?code=QcRK6OPG",
    "plans": [
      {
        "id": "month-1",
        "name": "100GB 月付参考",
        "price": 20,
        "currency": "CNY",
        "period": "month",
        "trafficGB": 100,
        "trafficUnit": "GB",
        "verified": false,
        "notes": "第三方历史参考；当前在售、额度及结算均未确认。"
      },
      {
        "id": "month-2",
        "name": "300GB 月付参考",
        "price": 50,
        "currency": "CNY",
        "period": "month",
        "trafficGB": 300,
        "trafficUnit": "GB",
        "verified": false,
        "notes": "第三方历史参考；当前在售、额度及结算均未确认。"
      }
    ],
    "protocols": [],
    "regions": [],
    "aiSupport": [],
    "streamingSupport": [],
    "advantages": [
      "100GB 小档与 300GB 中档覆盖两种不同消耗水平",
      "中档容量增长快于标价增长，适合接近小档上限时重新核算"
    ],
    "disadvantages": [
      "年付99元70GB/年、70GB未明周期、79GB/30天并存。 公开页面对协议和年付流量重置的表述不一致；本页不据此承诺 VLESS、Trojan 或年付月额度。"
    ],
    "suitableFor": [
      "从 100GB 到 300GB 的容量跃迁"
    ],
    "sources": [
      "https://towernav.com/airports/lingdong/"
    ],
    "sourceNotes": "年付99元70GB/年、70GB未明周期、79GB/30天并存。 公开页面对协议和年付流量重置的表述不一致；本页不据此承诺 VLESS、Trojan 或年付月额度。",
    "purchaseCheck": "20元100GB和50元300GB是否仍在售，周期是否30天？ 客户端格式、节点倍率与设备并发限制是什么？ 年付小包明确的流量周期是什么？ 退款适用期限、已用流量门槛与手续费能否提供条款？",
    "lastVerified": "2026-10-16",
    "testStatus": "unverified",
    "color": "#82b5ff"
  },
  {
    "id": "laddercloud",
    "slug": "laddercloud",
    "name": "梯子云 LadderCloud",
    "order": 4,
    "kind": "proxy",
    "description": "125GB 与 350GB，留出增长空间",
    "recommendation": "梯子云的参考方案覆盖 125GB 与 350GB。对用量已经接近 100GB、又希望留出更新和偶发下载余量的人，125GB 可作小档候选；经常超过 200GB 时再评估 350GB 档，选择逻辑比只看起价更清楚。",
    "whyChoose": "梯子云的参考方案覆盖 125GB 与 350GB。对用量已经接近 100GB、又希望留出更新和偶发下载余量的人，125GB 可作小档候选；经常超过 200GB 时再评估 350GB 档，选择逻辑比只看起价更清楚。",
    "focus": "125GB 与 350GB，留出增长空间",
    "affiliateUrl": "https://varnexa.ladderaff.com/#/?",
    "plans": [
      {
        "id": "month-1",
        "name": "125GB 月付参考",
        "price": 25,
        "currency": "CNY",
        "period": "month",
        "trafficGB": 125,
        "trafficUnit": "GB",
        "verified": false,
        "notes": "第三方历史参考；当前在售、额度及结算均未确认。"
      },
      {
        "id": "month-2",
        "name": "350GB 月付参考",
        "price": 60,
        "currency": "CNY",
        "period": "month",
        "trafficGB": 350,
        "trafficUnit": "GB",
        "verified": false,
        "notes": "第三方历史参考；当前在售、额度及结算均未确认。"
      }
    ],
    "protocols": [],
    "regions": [],
    "aiSupport": [],
    "streamingSupport": [],
    "advantages": [
      "125GB 入门容量给接近 100GB 的需求留下有限余量",
      "350GB 中档可用于评估多任务叠加后的月度容量"
    ],
    "disadvantages": [
      "89元年包60GB重置周期未明确，不能折算为可直接购买的月付档。 89 元年付小包等资料没有清晰统一的重置说明；未将这些金额折算成可直接购买的月付价格。"
    ],
    "suitableFor": [
      "125GB 与 350GB，留出增长空间"
    ],
    "sources": [
      "https://jichangnode.wiki/blog/laddercloud-monthly-research/"
    ],
    "sourceNotes": "89元年包60GB重置周期未明确，不能折算为可直接购买的月付档。 89 元年付小包等资料没有清晰统一的重置说明；未将这些金额折算成可直接购买的月付价格。",
    "purchaseCheck": "25元125GB与60元350GB当前是否在售？ 89元年包60GB是全年还是按月补发？ 初阶与中阶在节点、倍率和并发上是否不同？ 续费是否延长到期时间、是否立即重置？退款条件是什么？",
    "lastVerified": "2026-10-16",
    "testStatus": "unverified",
    "color": "#d5aa73"
  },
  {
    "id": "flyv",
    "slug": "flyv",
    "name": "飞V",
    "order": 5,
    "kind": "proxy",
    "description": "380GB 中档，适合中等偏高用量",
    "recommendation": "飞V的区别在于参考中档为 50 元、380GB，而非简单把 150GB 翻倍。若自己的月需求在 300GB 左右，额外容量可作为下载波动余量；是否值得多付费用，应以实际消耗和当前套餐为准。",
    "whyChoose": "飞V的区别在于参考中档为 50 元、380GB，而非简单把 150GB 翻倍。若自己的月需求在 300GB 左右，额外容量可作为下载波动余量；是否值得多付费用，应以实际消耗和当前套餐为准。",
    "focus": "380GB 中档，适合中等偏高用量",
    "affiliateUrl": "https://varnexa.flyvaff.com/#/?code=UoU2Izm5",
    "plans": [
      {
        "id": "month-1",
        "name": "150GB 月付参考",
        "price": 25,
        "currency": "CNY",
        "period": "month",
        "trafficGB": 150,
        "trafficUnit": "GB",
        "verified": false,
        "notes": "第三方历史参考；当前在售、额度及结算均未确认。"
      },
      {
        "id": "month-2",
        "name": "380GB 月付参考",
        "price": 50,
        "currency": "CNY",
        "period": "month",
        "trafficGB": 380,
        "trafficUnit": "GB",
        "verified": false,
        "notes": "第三方历史参考；当前在售、额度及结算均未确认。"
      }
    ],
    "protocols": [],
    "regions": [],
    "aiSupport": [],
    "streamingSupport": [],
    "advantages": [
      "380GB 参考中档高于入门档的两倍容量",
      "25 元小档与 50 元中档便于比较额外 230GB 的边际支出"
    ],
    "disadvantages": [
      "99元年付65GB的每月/总量口径未统一。 飞V与 Firefly 是本目录中的两个独立品牌；不能因名称相近就共用优惠码或沿用对方线路结论。"
    ],
    "suitableFor": [
      "380GB 中档，适合中等偏高用量"
    ],
    "sources": [
      "https://jichangshice.com.cn/airports/flyv/"
    ],
    "sourceNotes": "99元年付65GB的每月/总量口径未统一。 飞V与 Firefly 是本目录中的两个独立品牌；不能因名称相近就共用优惠码或沿用对方线路结论。",
    "purchaseCheck": "50元380GB是否仍为月付，和25元150GB档节点权益有何不同？ 65GB年包重置周期是什么？ 一次性包剩余额度有效期、长期不登录处理办法是什么？ 当前支持哪些客户端和付款方式，退款条件是什么？",
    "lastVerified": "2026-10-16",
    "testStatus": "unverified",
    "color": "#ed94c4"
  },
  {
    "id": "wavenet",
    "slug": "wavenet",
    "name": "浪网 WaveNet",
    "order": 6,
    "kind": "proxy",
    "description": "150GB 入门，按需扩展到 2000GB",
    "recommendation": "浪网 WaveNet 的公开参考月付从 30 元、150GB 入门档开始，另有 70 元、400GB，120 元、800GB 和 200 元、2000GB 档。它适合希望先用小档建立消耗记录、再按需求扩容的人；800GB 与 2000GB 属于较高容量选择，不是入门门槛。选择理由在于容量档位覆盖范围，不代表本站已经验证速度或当前结算价格。",
    "whyChoose": "浪网 WaveNet 的公开参考月付从 30 元、150GB 入门档开始，另有 70 元、400GB，120 元、800GB 和 200 元、2000GB 档。它适合希望先用小档建立消耗记录、再按需求扩容的人；800GB 与 2000GB 属于较高容量选择，不是入门门槛。选择理由在于容量档位覆盖范围，不代表本站已经验证速度或当前结算价格。",
    "focus": "150GB 入门，按需扩展到 2000GB",
    "affiliateUrl": "https://varnexa.wavenetaff.com/#/?code=oU77JXen",
    "plans": [
      {
        "id": "entry-month",
        "name": "入门档（月付）",
        "price": 30,
        "currency": "CNY",
        "period": "month",
        "trafficGB": 150,
        "trafficUnit": "GB",
        "verified": false,
        "notes": "第三方历史参考；当前在售、额度及结算均未确认。已有资料记录70元档400GB与450GB两种版本；本轮找到400GB支持，仍不能确认原入口当前值。"
      },
      {
        "id": "advanced-month",
        "name": "进阶档（月付）",
        "price": 70,
        "currency": "CNY",
        "period": "month",
        "trafficGB": 400,
        "trafficUnit": "GB",
        "verified": false,
        "notes": "第三方历史参考；当前在售、额度及结算均未确认。已有资料记录70元档400GB与450GB两种版本；本轮找到400GB支持，仍不能确认原入口当前值。"
      },
      {
        "id": "month-1",
        "name": "高端档（月付）",
        "price": 120,
        "currency": "CNY",
        "period": "month",
        "trafficGB": 800,
        "trafficUnit": "GB",
        "verified": false,
        "notes": "第三方历史参考；当前在售、额度及结算均未确认。已有资料记录70元档400GB与450GB两种版本；本轮找到400GB支持，仍不能确认原入口当前值。"
      },
      {
        "id": "month-2",
        "name": "商业档（月付）",
        "price": 200,
        "currency": "CNY",
        "period": "month",
        "trafficGB": 2000,
        "trafficUnit": "GB",
        "verified": false,
        "notes": "同名公开页标为2TB；表中2000GB仅按十进制换算。该页与原推广入口归属未确认，当前在售与到账口径待核对。"
      }
    ],
    "protocols": [],
    "regions": [],
    "aiSupport": [],
    "streamingSupport": [],
    "advantages": [
      "150GB、400GB、800GB、2000GB 四档参考容量覆盖从入门到高消耗的需求",
      "可先以 30 元参考月付评估用量，再决定是否需要较高容量档"
    ],
    "disadvantages": [
      "已有资料记录70元档400GB与450GB两种版本；本轮找到400GB支持，仍不能确认原入口当前值。 70 元进阶档在不同来源中有 400GB 或 450GB 两种描述，本页按较保守的 400GB 作参考；所有标价均未通过当前结算页复核。 商业档来源写2TB，2000GB为十进制换算展示，不表示实测到账。"
    ],
    "suitableFor": [
      "150GB 入门，按需扩展到 2000GB"
    ],
    "sources": [
      "https://jichangshice.com.cn/airports/wavenet/",
      "https://www.jichangpk.com/providers/langwang/",
      "https://jichangbay.biz/airports/wavenet/"
    ],
    "sourceNotes": "已有资料记录70元档400GB与450GB两种版本；本轮找到400GB支持，仍不能确认原入口当前值。 70 元进阶档在不同来源中有 400GB 或 450GB 两种描述，本页按较保守的 400GB 作参考；所有标价均未通过当前结算页复核。 商业档来源写2TB，2000GB为十进制换算展示，不表示实测到账。",
    "purchaseCheck": "原入口的入门当前是否30元/月150GB？ 70元进阶究竟400GB还是450GB？ 120元800GB是高端档而非起步档吗？ 所有节点是否同倍率、商业档2TB单位和重置日是什么？ wavenet.my是否运营方自有，当前设备并发与退款条款在哪里？",
    "lastVerified": "2026-10-16",
    "testStatus": "unverified",
    "color": "#70c8ed"
  },
  {
    "id": "flycat",
    "slug": "flycat",
    "name": "飞猫云",
    "order": 7,
    "kind": "proxy",
    "description": "150GB 到 300GB，控制翻倍用量的增支",
    "recommendation": "飞猫云参考月付 25 元对应 150GB，45 元对应 300GB；在用量翻倍时，标价增幅为 80%。对长期稳定接近 200GB 的用户，优先比较这两档，比单看年付折合月价更有实际意义。",
    "whyChoose": "飞猫云参考月付 25 元对应 150GB，45 元对应 300GB；在用量翻倍时，标价增幅为 80%。对长期稳定接近 200GB 的用户，优先比较这两档，比单看年付折合月价更有实际意义。",
    "focus": "150GB 到 300GB，控制翻倍用量的增支",
    "affiliateUrl": "https://flycat1.flycatvipaff.cc/#/?code=Os3T3OxW",
    "coupon": "flycat888",
    "plans": [
      {
        "id": "month-1",
        "name": "150GB 月付参考",
        "price": 25,
        "currency": "CNY",
        "period": "month",
        "trafficGB": 150,
        "trafficUnit": "GB",
        "verified": false,
        "notes": "第三方历史参考；当前在售、额度及结算均未确认。"
      },
      {
        "id": "month-2",
        "name": "300GB 月付参考",
        "price": 45,
        "currency": "CNY",
        "period": "month",
        "trafficGB": 300,
        "trafficUnit": "GB",
        "verified": false,
        "notes": "第三方历史参考；当前在售、额度及结算均未确认。"
      }
    ],
    "protocols": [],
    "regions": [],
    "aiSupport": [],
    "streamingSupport": [],
    "advantages": [
      "300GB 档相对 150GB 档增加 20 元参考月费",
      "小档与中档的费用差额明确，便于按真实使用量升级"
    ],
    "disadvantages": [
      "通用订阅是否暂停，以及flycat888是否当前有效，均有相互矛盾的第三方描述。先确认客户端和优惠条件，再参考150GB与300GB月包预算。"
    ],
    "suitableFor": [
      "150GB 到 300GB，控制翻倍用量的增支"
    ],
    "sources": [
      "https://haiwaijichang.com/brands/feimao/"
    ],
    "sourceNotes": "通用订阅是否暂停，以及flycat888是否当前有效，均有相互矛盾的第三方描述。先确认客户端和优惠条件，再参考150GB与300GB月包预算。",
    "purchaseCheck": "目前能否生成Clash/Mihomo/Shadowrocket通用订阅，还是仅官方客户端？ flycat888是否有效，是否限新用户、季付及以上、是否排除学生版？ 150GB月档与84元年包的周期和重置日是什么？ 设备并发、付款手续费、退款条件及安装包官方来源是什么？",
    "lastVerified": "2026-10-16",
    "testStatus": "unverified",
    "color": "#9b87ff"
  },
  {
    "id": "dalaocloud",
    "slug": "dalaocloud",
    "name": "大佬云",
    "order": 8,
    "kind": "proxy",
    "description": "小数标价与额度冲突，先看结算明细",
    "recommendation": "大佬云参考资料中的 19.99 元小档适合精细控制单月预算，43 元、300GB 档则提供更高用量参照。值得选择的前提是面板把额度和费用写清楚：该品牌小档曾出现 100GB 与 120GB 两种说明，先解决这个差异再付款。",
    "whyChoose": "大佬云参考资料中的 19.99 元小档适合精细控制单月预算，43 元、300GB 档则提供更高用量参照。值得选择的前提是面板把额度和费用写清楚：该品牌小档曾出现 100GB 与 120GB 两种说明，先解决这个差异再付款。",
    "focus": "小数标价与额度冲突，先看结算明细",
    "affiliateUrl": "https://vip.dalaocloud.com/#/?code=Cp2sfYZg",
    "plans": [
      {
        "id": "month-1",
        "name": "100GB 月付参考",
        "price": 19.99,
        "currency": "CNY",
        "period": "month",
        "trafficGB": 100,
        "trafficUnit": "GB",
        "verified": false,
        "notes": "第三方历史参考；当前在售、额度及结算均未确认。福利版卡片100GB、说明120GB；其他来源23元130GB，可能是不同档位或版本，不能拼出19.99元130GB。"
      },
      {
        "id": "month-2",
        "name": "300GB 月付参考",
        "price": 43,
        "currency": "CNY",
        "period": "month",
        "trafficGB": 300,
        "trafficUnit": "GB",
        "verified": false,
        "notes": "第三方历史参考；当前在售、额度及结算均未确认。福利版卡片100GB、说明120GB；其他来源23元130GB，可能是不同档位或版本，不能拼出19.99元130GB。"
      }
    ],
    "protocols": [],
    "regions": [],
    "aiSupport": [],
    "streamingSupport": [],
    "advantages": [
      "19.99 元参考月付可供设置明确的首次支出上限",
      "300GB 档提供与小档分开的中等容量预算选择"
    ],
    "disadvantages": [
      "福利版卡片100GB、说明120GB；其他来源23元130GB，可能是不同档位或版本，不能拼出19.99元130GB。 第三方记录的小档卡片为 100GB、说明文字为 120GB，本页按较小值展示；这仍不是本站核验到账的结果。"
    ],
    "suitableFor": [
      "小数标价与额度冲突，先看结算明细"
    ],
    "sources": [
      "https://jichangshice.com.cn/airports/dalaoyun/"
    ],
    "sourceNotes": "福利版卡片100GB、说明120GB；其他来源23元130GB，可能是不同档位或版本，不能拼出19.99元130GB。 第三方记录的小档卡片为 100GB、说明文字为 120GB，本页按较小值展示；这仍不是本站核验到账的结果。",
    "purchaseCheck": "福利版19.99元是否仍在售、到账100GB还是120GB？ 23元130GB是旧版还是另一个套餐？ 流量按30天重置还是按自然月，升级和续费如何处理？ 倍率、设备并发、退款窗口及付款手续费是什么？",
    "lastVerified": "2026-10-16",
    "testStatus": "unverified",
    "color": "#73d9d2"
  },
  {
    "id": "breezenet",
    "slug": "breezenet",
    "name": "微风网络 Breezenet",
    "order": 9,
    "kind": "proxy",
    "description": "200GB 起步，避免频繁跨档",
    "recommendation": "微风网络的参考小档从 200GB 开始，适合已经确定 100GB 左右不够的人。27 元、200GB 与 57 元、500GB 的跨度，便于分别安排日常中等用量和偶尔较多下载的预算，无需为获得较低月均价先承诺一年。",
    "whyChoose": "微风网络的参考小档从 200GB 开始，适合已经确定 100GB 左右不够的人。27 元、200GB 与 57 元、500GB 的跨度，便于分别安排日常中等用量和偶尔较多下载的预算，无需为获得较低月均价先承诺一年。",
    "focus": "200GB 起步，避免频繁跨档",
    "affiliateUrl": "https://edp01.breezenetaff.com/#/?",
    "coupon": "weifeng90",
    "plans": [
      {
        "id": "month-1",
        "name": "200GB 月付参考",
        "price": 27,
        "currency": "CNY",
        "period": "month",
        "trafficGB": 200,
        "trafficUnit": "GB",
        "verified": false,
        "notes": "第三方历史参考；当前在售、额度及结算均未确认。"
      },
      {
        "id": "month-2",
        "name": "500GB 月付参考",
        "price": 57,
        "currency": "CNY",
        "period": "month",
        "trafficGB": 500,
        "trafficUnit": "GB",
        "verified": false,
        "notes": "第三方历史参考；当前在售、额度及结算均未确认。"
      }
    ],
    "protocols": [],
    "regions": [],
    "aiSupport": [],
    "streamingSupport": [],
    "advantages": [
      "200GB 参考入门档适合已经超过常见小包容量的需求",
      "500GB 参考中档把容量扩展与每月支出直接对应"
    ],
    "disadvantages": [
      "weifeng90历史第三方条款截止2026-08-31，未取得延期证据；较新介绍仍宣传七折，不能据此认定当前有效。年包100GB重置周期也需确认。"
    ],
    "suitableFor": [
      "200GB 起步，避免频繁跨档"
    ],
    "sources": [
      "https://jichangyyds.net/brands/weifengwangluo/"
    ],
    "sourceNotes": "weifeng90历史第三方条款截止2026-08-31，未取得延期证据；较新介绍仍宣传七折，不能据此认定当前有效。年包100GB重置周期也需确认。",
    "purchaseCheck": "27元200GB和57元500GB是否是当前未折扣价格？ weifeng90是否延长，是否与页面已展示折后价重复计算？ 137元年包100GB每月还是全年总量？ 如何到达当前用户中心，是否提供通用订阅、设备限制及退款条款？",
    "lastVerified": "2026-10-16",
    "testStatus": "unverified",
    "color": "#82b5ff"
  },
  {
    "id": "stardream",
    "slug": "stardream",
    "name": "星岛梦 StarDream",
    "order": 10,
    "kind": "proxy",
    "description": "150GB 日常档与 500GB 扩容档",
    "recommendation": "星岛梦适合把常规月份和高消耗月份分别规划的人。资料中的 25 元、150GB 可用于日常需求，70 元、500GB 则作为扩容参照；选它的依据应是这两个容量是否与你的使用周期匹配，而不是笼统的“全能”。",
    "whyChoose": "星岛梦适合把常规月份和高消耗月份分别规划的人。资料中的 25 元、150GB 可用于日常需求，70 元、500GB 则作为扩容参照；选它的依据应是这两个容量是否与你的使用周期匹配，而不是笼统的“全能”。",
    "focus": "150GB 日常档与 500GB 扩容档",
    "affiliateUrl": "https://kfccbb.xingdaomeng.com/#/?code=JTRIWFim",
    "coupon": "nmw888",
    "plans": [
      {
        "id": "month-1",
        "name": "150GB 月付参考",
        "price": 25,
        "currency": "CNY",
        "period": "month",
        "trafficGB": 150,
        "trafficUnit": "GB",
        "verified": false,
        "notes": "第三方历史参考；当前在售、额度及结算均未确认。"
      },
      {
        "id": "month-2",
        "name": "500GB 月付参考",
        "price": 70,
        "currency": "CNY",
        "period": "month",
        "trafficGB": 500,
        "trafficUnit": "GB",
        "verified": false,
        "notes": "第三方历史参考；当前在售、额度及结算均未确认。"
      }
    ],
    "protocols": [],
    "regions": [],
    "aiSupport": [],
    "streamingSupport": [],
    "advantages": [
      "150GB 与 500GB 参考档便于区分日常和集中下载月份",
      "公开资料另列一次性包，可作为低频使用者进一步核对的方向"
    ],
    "disadvantages": [
      "成立2020年等运营年限为资料自述，未取得持续运营档案证明，不应作为确定优势。 一次性包的总流量与月付的月额度不是同一口径；本页不把一次购买的容量重复算进每月预算。"
    ],
    "suitableFor": [
      "150GB 日常档与 500GB 扩容档"
    ],
    "sources": [
      "https://tizidream.com/shops/xingdaomeng/"
    ],
    "sourceNotes": "成立2020年等运营年限为资料自述，未取得持续运营档案证明，不应作为确定优势。 一次性包的总流量与月付的月额度不是同一口径；本页不把一次购买的容量重复算进每月预算。",
    "purchaseCheck": "25元150GB和70元500GB是否仍在售？ nmw888限首单还是仅新账号，适用哪些周期和套餐？ 通用订阅是否必须联系客服、当前可导入哪些客户端？ 年付60GB是否按月重置；设备并发、倍率和退款条款是什么？",
    "lastVerified": "2026-10-16",
    "testStatus": "unverified",
    "color": "#d5aa73"
  },
  {
    "id": "lightspeed",
    "slug": "lightspeed",
    "name": "光速云 LightSpeed",
    "order": 11,
    "kind": "proxy",
    "description": "先核对容量版本，再做精细升级",
    "recommendation": "光速云可作为百GB附近需求的预算候选，但先要解决容量版本问题。原参考记录为23元138GB、34元220GB，另一资料写148G与238G；两版不能拼接使用。只有确认当前月额度后，才适合比较额外11元能否满足自己的新增需求，不能从“光速”名称推断速度。",
    "whyChoose": "光速云可作为百GB附近需求的预算候选，但先要解决容量版本问题。原参考记录为23元138GB、34元220GB，另一资料写148G与238G；两版不能拼接使用。只有确认当前月额度后，才适合比较额外11元能否满足自己的新增需求，不能从“光速”名称推断速度。",
    "focus": "先核对容量版本，再做精细升级",
    "affiliateUrl": "https://mdlky.gsyaff.com/#/?code=6tRWbtgK",
    "coupon": "jichangcha09",
    "plans": [
      {
        "id": "month-1",
        "name": "138GB 月付参考",
        "price": 23,
        "currency": "CNY",
        "period": "month",
        "trafficGB": 138,
        "trafficUnit": "GB",
        "verified": false,
        "notes": "第三方历史参考；当前在售、额度及结算均未确认。23元档出现138GB与148G；34元档出现220GB与238G。G是否等于后台GB亦待确认。"
      },
      {
        "id": "month-2",
        "name": "220GB 月付参考",
        "price": 34,
        "currency": "CNY",
        "period": "month",
        "trafficGB": 220,
        "trafficUnit": "GB",
        "verified": false,
        "notes": "第三方历史参考；当前在售、额度及结算均未确认。23元档出现138GB与148G；34元档出现220GB与238G。G是否等于后台GB亦待确认。"
      }
    ],
    "protocols": [],
    "regions": [],
    "aiSupport": [],
    "streamingSupport": [],
    "advantages": [
      "23元与34元两档参考费用差额较小，便于给百GB附近需求设置增支上限",
      "同时保留138/220GB与148/238G版本线索，便于在购买前核对实际到账口径"
    ],
    "disadvantages": [
      "23元档出现138GB与148G；34元档出现220GB与238G。G是否等于后台GB亦待确认。 部分旧资料写 17 元、110GB，不能把不同版本的起价与新容量拼成一个套餐；本页参考值需到站复核。"
    ],
    "suitableFor": [
      "138GB 与 220GB，细分百 GB 档位"
    ],
    "sources": [
      "https://jichangdan.com/"
    ],
    "sourceNotes": "23元档出现138GB与148G；34元档出现220GB与238G。G是否等于后台GB亦待确认。 部分旧资料写 17 元、110GB，不能把不同版本的起价与新容量拼成一个套餐；本页参考值需到站复核。",
    "purchaseCheck": "当前23元套餐实际到账138GB还是148G，34元档是220GB还是238G？流量重置间隔是自然月还是30天？ jichangcha09当前是否适用所选套餐、续费与活动包，优惠后实付多少？ 当前是否提供通用订阅，哪些系统必须使用自研客户端？退款限制以哪版条款为准？",
    "lastVerified": "2026-10-16",
    "testStatus": "unverified",
    "color": "#ed94c4"
  },
  {
    "id": "v2yun",
    "slug": "v2yun",
    "name": "唯兔云（V2云）",
    "order": 12,
    "kind": "proxy",
    "description": "常规档与活动档分开看",
    "recommendation": "唯兔云适合愿意核对促销条件、但用常规月付建立预算的人。这里选用参考的 19.9 元、150GB 与 59.9 元、500GB，不把网上出现的 14.9 元活动档当作始终可买的起价，让首次支出估算更稳妥。",
    "whyChoose": "唯兔云适合愿意核对促销条件、但用常规月付建立预算的人。这里选用参考的 19.9 元、150GB 与 59.9 元、500GB，不把网上出现的 14.9 元活动档当作始终可买的起价，让首次支出估算更稳妥。",
    "focus": "常规档与活动档分开看",
    "affiliateUrl": "https://fast.v2yunvipaff.com/#/?code=xYEe8gyb",
    "coupon": "rabbit",
    "plans": [
      {
        "id": "month-1",
        "name": "150GB 月付参考",
        "price": 19.9,
        "currency": "CNY",
        "period": "month",
        "trafficGB": 150,
        "trafficUnit": "GB",
        "verified": false,
        "notes": "第三方历史参考；当前在售、额度及结算均未确认。"
      },
      {
        "id": "month-2",
        "name": "500GB 月付参考",
        "price": 59.9,
        "currency": "CNY",
        "period": "month",
        "trafficGB": 500,
        "trafficUnit": "GB",
        "verified": false,
        "notes": "第三方历史参考；当前在售、额度及结算均未确认。"
      }
    ],
    "protocols": [],
    "regions": [],
    "aiSupport": [],
    "streamingSupport": [],
    "advantages": [
      "采用常规 150GB 档作预算参考，避免依赖限时低价",
      "500GB 参考档为从轻量转向较高消耗提供独立选择"
    ],
    "disadvantages": [
      "119.9元高档出现1000GB与1.4TB容量版本；不得用其推断当前整套价目已确认。 14.9 元、100GB 在部分来源中带活动属性；活动是否结束、是否限新用户尚未确认，未纳入表格。"
    ],
    "suitableFor": [
      "常规档与活动档分开看"
    ],
    "sources": [
      "https://tuijianjichang.wiki/review/weituyun"
    ],
    "sourceNotes": "119.9元高档出现1000GB与1.4TB容量版本；不得用其推断当前整套价目已确认。 14.9 元、100GB 在部分来源中带活动属性；活动是否结束、是否限新用户尚未确认，未纳入表格。",
    "purchaseCheck": "19.9元150GB、59.9元500GB是否仍为当前可下单月付？14.9元档是活动还是常驻，续费价格是否变化？ rabbit适用哪些周期与用户，是否与年付价叠加？ 各档是否提供所需通用订阅，设备并发、流量倍率与退款规则如何约定？",
    "lastVerified": "2026-10-16",
    "testStatus": "unverified",
    "color": "#70c8ed"
  },
  {
    "id": "u1s1",
    "slug": "u1s1",
    "name": "U1S1（有一说一）",
    "order": 13,
    "kind": "proxy",
    "description": "预算翻倍，标称容量增加 1.5 倍",
    "recommendation": "U1S1 的参考档位为 20 元、120GB 和 40 元、300GB。对于月用量超过 120GB 的人，增加 20 元可获得额外 180GB 标称容量；这个中档结构是把它纳入候选的主要理由，仍需确认倍率与重置方式。",
    "whyChoose": "U1S1 的参考档位为 20 元、120GB 和 40 元、300GB。对于月用量超过 120GB 的人，增加 20 元可获得额外 180GB 标称容量；这个中档结构是把它纳入候选的主要理由，仍需确认倍率与重置方式。",
    "focus": "预算翻倍，标称容量增加 1.5 倍",
    "affiliateUrl": "https://pkdj7.vipaff.cc/#/?code=NMjmHbvu",
    "coupon": "U1S1",
    "plans": [
      {
        "id": "month-1",
        "name": "120GB 月付参考",
        "price": 20,
        "currency": "CNY",
        "period": "month",
        "trafficGB": 120,
        "trafficUnit": "GB",
        "verified": false,
        "notes": "第三方历史参考；当前在售、额度及结算均未确认。"
      },
      {
        "id": "month-2",
        "name": "300GB 月付参考",
        "price": 40,
        "currency": "CNY",
        "period": "month",
        "trafficGB": 300,
        "trafficUnit": "GB",
        "verified": false,
        "notes": "第三方历史参考；当前在售、额度及结算均未确认。"
      }
    ],
    "protocols": [],
    "regions": [],
    "aiSupport": [],
    "streamingSupport": [],
    "advantages": [
      "300GB 中档相对 120GB 小档的容量增幅高于价格增幅",
      "20 元参考小档与 40 元中档便于设置两级预算"
    ],
    "disadvantages": [
      "旧不限时套餐与后续第三方目录不一致；不恢复旧580元包。 旧页面提及的一次性套餐可能已下架；本页没有沿用历史一次性包，也不把旧优惠条件当作现行规则。"
    ],
    "suitableFor": [
      "预算翻倍，标称容量增加 1.5 倍"
    ],
    "sources": [
      "https://jichang168.com/airports/u1s1/"
    ],
    "sourceNotes": "旧不限时套餐与后续第三方目录不一致；不恢复旧580元包。 旧页面提及的一次性套餐可能已下架；本页没有沿用历史一次性包，也不把旧优惠条件当作现行规则。",
    "purchaseCheck": "20元120GB与40元300GB是否仍在售，96元年付是否每月60GB重置？ U1S1是否仅限新账户，96元年付及续费是否排除，订单实付多少？ 现行通用订阅领取或刷新是否有限制，设备并发和退款政策如何规定？",
    "lastVerified": "2026-10-16",
    "testStatus": "unverified",
    "color": "#9b87ff"
  },
  {
    "id": "jilian",
    "slug": "jilian",
    "name": "极连云",
    "order": 14,
    "kind": "proxy",
    "description": "先确认同名服务，再谈套餐价值",
    "recommendation": "极连云存在早期资料中使用 hyperlink 名称的同名记录。虽然搜索到 15.5 元、100GB 等报价，但当前入口与该旧服务的归属尚未确认，因此暂不把旧报价展示成你的品牌套餐。推荐先核对名称、客服和账户体系的关联，再判断其是否适合预算。",
    "whyChoose": "极连云存在早期资料中使用 hyperlink 名称的同名记录。虽然搜索到 15.5 元、100GB 等报价，但当前入口与该旧服务的归属尚未确认，因此暂不把旧报价展示成你的品牌套餐。推荐先核对名称、客服和账户体系的关联，再判断其是否适合预算。",
    "focus": "先确认同名服务，再谈套餐价值",
    "affiliateUrl": "https://kdjhao.jlyvipaff.com/#/?code=poyoU7mq",
    "plans": [],
    "protocols": [],
    "regions": [],
    "aiSupport": [],
    "streamingSupport": [],
    "advantages": [
      "保留极连云当前品牌入口，避免将旧域名误当作唯一入口",
      "将同名服务关联作为购买前单独核对项，减少套用他家套餐的误判"
    ],
    "disadvantages": [
      "jiliancloud.org、jtjkxt.com等同名页面出现不同价格，不能仅凭中文名称合并身份。 历史评测中的 hyperlink 品牌、协议和线路不能直接移植到当前入口；套餐、设备限制和性能均待该入口内确认。"
    ],
    "suitableFor": [
      "先确认同名服务，再谈套餐价值"
    ],
    "sources": [
      "https://kerrynotes.com/hyperlink-review/"
    ],
    "sourceNotes": "jiliancloud.org、jtjkxt.com等同名页面出现不同价格，不能仅凭中文名称合并身份。 历史评测中的 hyperlink 品牌、协议和线路不能直接移植到当前入口；套餐、设备限制和性能均待该入口内确认。",
    "purchaseCheck": "当前服务由谁运营，是否与hyperlink有关，有无官方迁移公告及可核对的完整套餐页？ 当前月付金额、额度、单位、重置日及设备限制分别是什么？ 当前退款条款和通用订阅支持是什么，能否在购买前阅读？",
    "lastVerified": "2026-10-16",
    "testStatus": "unverified",
    "color": "#73d9d2"
  },
  {
    "id": "globalcloud",
    "slug": "globalcloud",
    "name": "全球云",
    "order": 15,
    "kind": "proxy",
    "description": "120GB 与 700GB，区分两种使用强度",
    "recommendation": "全球云适合先把需求分成轻量日常与较高消耗两类再选择。参考资料中的 20 元、120GB 与 100 元、700GB，提供了两种明确预算锚点；只有实际需要接近高档容量时，较低的标称单位费用才有意义。",
    "whyChoose": "全球云适合先把需求分成轻量日常与较高消耗两类再选择。参考资料中的 20 元、120GB 与 100 元、700GB，提供了两种明确预算锚点；只有实际需要接近高档容量时，较低的标称单位费用才有意义。",
    "focus": "120GB 与 700GB，区分两种使用强度",
    "affiliateUrl": "https://sswdh.gcvipaff.com/#/?code=NE1AcNIX",
    "coupon": "qq88",
    "plans": [
      {
        "id": "month-1",
        "name": "120GB 月付参考",
        "price": 20,
        "currency": "CNY",
        "period": "month",
        "trafficGB": 120,
        "trafficUnit": "GB",
        "verified": false,
        "notes": "第三方历史参考；当前在售、额度及结算均未确认。"
      },
      {
        "id": "month-2",
        "name": "700GB 月付参考",
        "price": 100,
        "currency": "CNY",
        "period": "month",
        "trafficGB": 700,
        "trafficUnit": "GB",
        "verified": false,
        "notes": "第三方历史参考；当前在售、额度及结算均未确认。"
      }
    ],
    "protocols": [],
    "regions": [],
    "aiSupport": [],
    "streamingSupport": [],
    "advantages": [
      "120GB 参考档用于低支出日常预算",
      "700GB 参考档为持续较高用量提供容量参照"
    ],
    "disadvantages": [
      "公开介绍可能混用BGP、IEPL、专线等称谓；未验证线路归属，不写为已确认优势。 “全球”是品牌名称，不构成节点覆盖全球的证据；本页未验证地区数量、线路和目标应用可用性。"
    ],
    "suitableFor": [
      "120GB 与 700GB，区分两种使用强度"
    ],
    "sources": [
      "https://jcnotes.com/airports/qqy/"
    ],
    "sourceNotes": "公开介绍可能混用BGP、IEPL、专线等称谓；未验证线路归属，不写为已确认优势。 “全球”是品牌名称，不构成节点覆盖全球的证据；本页未验证地区数量、线路和目标应用可用性。",
    "purchaseCheck": "20元120GB和100元700GB是否仍在售，容量是每月重置还是其他周期？ 700GB档是否有节点倍率、每天用量或并发限制？ qq88当前实付折扣、适用周期和截止日期是什么？",
    "lastVerified": "2026-10-16",
    "testStatus": "unverified",
    "color": "#82b5ff"
  },
  {
    "id": "lightyear",
    "slug": "lightyear",
    "name": "光年梯",
    "order": 16,
    "kind": "proxy",
    "description": "110GB 翻倍，比较升级差额",
    "recommendation": "光年梯参考月付从 18 元、110GB 到 34 元、220GB；容量翻倍时，月费比两份小档合计少 2 元。对接近 110GB 上限的人，这种升级差额比单看“低价”更好评估，但不能由标价推断网络品质。",
    "whyChoose": "光年梯参考月付从 18 元、110GB 到 34 元、220GB；容量翻倍时，月费比两份小档合计少 2 元。对接近 110GB 上限的人，这种升级差额比单看“低价”更好评估，但不能由标价推断网络品质。",
    "focus": "110GB 翻倍，比较升级差额",
    "affiliateUrl": "https://ggmq.gntaff.com/#/?code=RAJFvngV",
    "plans": [
      {
        "id": "month-1",
        "name": "110GB 月付参考",
        "price": 18,
        "currency": "CNY",
        "period": "month",
        "trafficGB": 110,
        "trafficUnit": "GB",
        "verified": false,
        "notes": "第三方历史参考；当前在售、额度及结算均未确认。"
      },
      {
        "id": "month-2",
        "name": "220GB 月付参考",
        "price": 34,
        "currency": "CNY",
        "period": "month",
        "trafficGB": 220,
        "trafficUnit": "GB",
        "verified": false,
        "notes": "第三方历史参考；当前在售、额度及结算均未确认。"
      }
    ],
    "protocols": [],
    "regions": [],
    "aiSupport": [],
    "streamingSupport": [],
    "advantages": [
      "110GB 小档为百 GB 附近需求提供较细预算参照",
      "220GB 档参考费用低于两份 110GB 小档之和"
    ],
    "disadvantages": [
      "机场探仍给出导入订阅步骤，而另一第三方报告通用订阅已关闭，客户端可用性存在重要冲突。 上述比较只按标称容量和未折扣价格计算，不含倍率、重置费或其他账户限制，不能视为实测可用流量成本。"
    ],
    "suitableFor": [
      "110GB 翻倍，比较升级差额"
    ],
    "sources": [
      "https://jichangtan.com/airports/guangnianti/"
    ],
    "sourceNotes": "机场探仍给出导入订阅步骤，而另一第三方报告通用订阅已关闭，客户端可用性存在重要冲突。 上述比较只按标称容量和未折扣价格计算，不含倍率、重置费或其他账户限制，不能视为实测可用流量成本。",
    "purchaseCheck": "当前是否仍关闭通用订阅？所需系统是否必须安装自研客户端，已有Clash或Shadowrocket是否可用？ 18元110GB和34元220GB月付是否仍可下单，重置日、倍率和升级余额如何计算？ 89元年付小包当前是否在售，是否每月50GB以及退款限制是什么？",
    "lastVerified": "2026-10-16",
    "testStatus": "unverified",
    "color": "#d5aa73"
  },
  {
    "id": "sogoyun",
    "slug": "sogoyun",
    "name": "Sogo云",
    "order": 17,
    "kind": "proxy",
    "description": "先核对 GiB 单位，再比较容量",
    "recommendation": "Sogo云资料使用 GiB 标注容量，不能直接与其他品牌的 GB 数字当作完全相同的单位。参考 25 元、120GiB 与 45 元、250GiB，适合愿意仔细核对计费单位的人；将单位写清，是判断实际容量是否合适的必要步骤。",
    "whyChoose": "Sogo云资料使用 GiB 标注容量，不能直接与其他品牌的 GB 数字当作完全相同的单位。参考 25 元、120GiB 与 45 元、250GiB，适合愿意仔细核对计费单位的人；将单位写清，是判断实际容量是否合适的必要步骤。",
    "focus": "先核对 GiB 单位，再比较容量",
    "affiliateUrl": "https://wzjc.sogoyunaff.cc/#/?code=2x2EywO9",
    "plans": [
      {
        "id": "month-1",
        "name": "120GiB 月付参考",
        "price": 25,
        "currency": "CNY",
        "period": "month",
        "trafficGB": 120,
        "trafficUnit": "GiB",
        "verified": false,
        "notes": "第三方历史参考；当前在售、额度及结算均未确认。"
      },
      {
        "id": "month-2",
        "name": "250GiB 月付参考",
        "price": 45,
        "currency": "CNY",
        "period": "month",
        "trafficGB": 250,
        "trafficUnit": "GiB",
        "verified": false,
        "notes": "第三方历史参考；当前在售、额度及结算均未确认。"
      }
    ],
    "protocols": [],
    "regions": [],
    "aiSupport": [],
    "streamingSupport": [],
    "advantages": [
      "保留资料中的 GiB 单位，便于核对容量口径",
      "250GiB 档提供相对 120GiB 档的进阶预算选择"
    ],
    "disadvantages": [
      "介绍站归属未核实，不能把其自述的线路、速度上限、设备和可用性目标当当前官方保证。 相关介绍站的运营归属未确认，报价仅作同名公开资料参考；没有把介绍站标记为品牌官方站。"
    ],
    "suitableFor": [
      "先核对 GiB 单位，再比较容量"
    ],
    "sources": [
      "https://sogocloud.org/"
    ],
    "sourceNotes": "介绍站归属未核实，不能把其自述的线路、速度上限、设备和可用性目标当当前官方保证。 相关介绍站的运营归属未确认，报价仅作同名公开资料参考；没有把介绍站标记为品牌官方站。",
    "purchaseCheck": "当前120与250档的计费单位确为GiB吗，客户端统计和后台扣量是否同一单位？ 25元与45元是否仍为可单月支付的当前价，设备并发、倍率和限速是否分档？ sogocloud.org与给定sogoyunaff.cc是否为同一服务，可否提供官方对应关系与退款条款？",
    "lastVerified": "2026-10-16",
    "testStatus": "unverified",
    "color": "#ed94c4"
  },
  {
    "id": "yuzhou",
    "slug": "yuzhou",
    "name": "宇宙云 YuZhou",
    "order": 18,
    "kind": "proxy",
    "description": "等比例容量，优先避免闲置",
    "recommendation": "宇宙云的原参考版本为25元120GB、50元240GB，两档价格和容量同步翻倍，可用于说明按需买够的预算思路。不过新查资料出现160GB与300GB版本，因此等比例结论只针对原引用方案。选择前应先确认现行容量，避免把不同版本拼成一个看似更划算的套餐。",
    "whyChoose": "宇宙云的原参考版本为25元120GB、50元240GB，两档价格和容量同步翻倍，可用于说明按需买够的预算思路。不过新查资料出现160GB与300GB版本，因此等比例结论只针对原引用方案。选择前应先确认现行容量，避免把不同版本拼成一个看似更划算的套餐。",
    "focus": "等比例容量，优先避免闲置",
    "affiliateUrl": "https://wzjc.yuzoucloud.cc/#/?code=wL7YStBa",
    "plans": [
      {
        "id": "month-1",
        "name": "120GB 月付参考",
        "price": 25,
        "currency": "CNY",
        "period": "month",
        "trafficGB": 120,
        "trafficUnit": "GB",
        "verified": false,
        "notes": "第三方历史参考；当前在售、额度及结算均未确认。25元容量120GB与160GB；50元容量240GB与300GB，均未取得当前官方裁定。"
      },
      {
        "id": "month-2",
        "name": "240GB 月付参考",
        "price": 50,
        "currency": "CNY",
        "period": "month",
        "trafficGB": 240,
        "trafficUnit": "GB",
        "verified": false,
        "notes": "第三方历史参考；当前在售、额度及结算均未确认。25元容量120GB与160GB；50元容量240GB与300GB，均未取得当前官方裁定。"
      }
    ],
    "protocols": [],
    "regions": [],
    "aiSupport": [],
    "streamingSupport": [],
    "advantages": [
      "120GB 与 240GB 参考档采用清晰的等比例关系",
      "两档之间容易根据实际月用量决定，减少追逐大包的冲动"
    ],
    "disadvantages": [
      "25元容量120GB与160GB；50元容量240GB与300GB，均未取得当前官方裁定。 网上更低起价和其他容量版本并存；本页没有把旧小包作为当前保证，也没有核实不同时期线路是否相同。"
    ],
    "suitableFor": [
      "等比例容量，优先避免闲置"
    ],
    "sources": [
      "https://tizimy.org/tuijian/yuzhou/"
    ],
    "sourceNotes": "25元容量120GB与160GB；50元容量240GB与300GB，均未取得当前官方裁定。 网上更低起价和其他容量版本并存；本页没有把旧小包作为当前保证，也没有核实不同时期线路是否相同。",
    "purchaseCheck": "当前25元档是120还是160GB，50元档是240还是300GB？最终订单和到账容量分别显示多少？ 12.5元50GB小包仍可购买吗，是否活动、新用户或续费限制？ 升级按补差还是整单重购，剩余流量和有效期如何处理，是否支持所需客户端？",
    "lastVerified": "2026-10-16",
    "testStatus": "unverified",
    "color": "#70c8ed"
  },
  {
    "id": "2mao",
    "slug": "2mao",
    "name": "二猫云 2mao",
    "order": 19,
    "kind": "proxy",
    "description": "130GB 小档，关注升级边际容量",
    "recommendation": "二猫云的参考小档为 20 元、130GB，中档为 40 元、230GB。价格翻倍仅增加 100GB，适合先把 130GB 的利用率看清楚再升级；推荐理由是小档可能更贴近轻量预算，而不是默认大包更有价值。",
    "whyChoose": "二猫云的参考小档为 20 元、130GB，中档为 40 元、230GB。价格翻倍仅增加 100GB，适合先把 130GB 的利用率看清楚再升级；推荐理由是小档可能更贴近轻量预算，而不是默认大包更有价值。",
    "focus": "130GB 小档，关注升级边际容量",
    "affiliateUrl": "https://waaa.2maoyunaff.cc/#/?code=uHeyKG44",
    "plans": [
      {
        "id": "month-1",
        "name": "130GB 月付参考",
        "price": 20,
        "currency": "CNY",
        "period": "month",
        "trafficGB": 130,
        "trafficUnit": "GB",
        "verified": false,
        "notes": "第三方历史参考；当前在售、额度及结算均未确认。100/200GB旧版与130/230GB后续版并存，需当前订单确认。"
      },
      {
        "id": "month-2",
        "name": "230GB 月付参考",
        "price": 40,
        "currency": "CNY",
        "period": "month",
        "trafficGB": 230,
        "trafficUnit": "GB",
        "verified": false,
        "notes": "第三方历史参考；当前在售、额度及结算均未确认。100/200GB旧版与130/230GB后续版并存，需当前订单确认。"
      }
    ],
    "protocols": [],
    "regions": [],
    "aiSupport": [],
    "streamingSupport": [],
    "advantages": [
      "130GB 参考小档适合略高于 100GB 的需求",
      "明确展示升级增加的 100GB，便于避免不必要的支出"
    ],
    "disadvantages": [
      "100/200GB旧版与130/230GB后续版并存，需当前订单确认。 旧页面可能保留更小额度；本站采用本次来源的 130GB/230GB 版本，最终仍需核对当前卡片。"
    ],
    "suitableFor": [
      "130GB 小档，关注升级边际容量"
    ],
    "sources": [
      "https://fishnetwork.blog/providers/ermaoyun/"
    ],
    "sourceNotes": "100/200GB旧版与130/230GB后续版并存，需当前订单确认。 旧页面可能保留更小额度；本站采用本次来源的 130GB/230GB 版本，最终仍需核对当前卡片。",
    "purchaseCheck": "当前白猫和橘猫是否仍为20元130GB、40元230GB，额度是否月重置？ 当前帮助中心是否明确提供通用订阅，所需客户端和系统版本是否支持？ 设备并发、退款、超额补流量和升级保留额度分别是什么规则？",
    "lastVerified": "2026-10-16",
    "testStatus": "unverified",
    "color": "#9b87ff"
  },
  {
    "id": "1fly",
    "slug": "1fly",
    "name": "一翻云 1fly",
    "order": 20,
    "kind": "proxy",
    "description": "350GB 中档与客户端兼容核对",
    "recommendation": "一翻云参考 20 元、150GB 和 35 元、350GB，额外 15 元对应 200GB 标称容量，是中档值得关注的地方。但第三方资料还提到订阅发放方式曾调整，推荐前应先确认你的设备能否使用当前客户端。",
    "whyChoose": "一翻云参考 20 元、150GB 和 35 元、350GB，额外 15 元对应 200GB 标称容量，是中档值得关注的地方。但第三方资料还提到订阅发放方式曾调整，推荐前应先确认你的设备能否使用当前客户端。",
    "focus": "350GB 中档与客户端兼容核对",
    "affiliateUrl": "https://wzjc.1flyunaff.cc/#/?code=F7eaT191",
    "plans": [
      {
        "id": "month-1",
        "name": "150GB 月付参考",
        "price": 20,
        "currency": "CNY",
        "period": "month",
        "trafficGB": 150,
        "trafficUnit": "GB",
        "verified": false,
        "notes": "第三方历史参考；当前在售、额度及结算均未确认。"
      },
      {
        "id": "month-2",
        "name": "350GB 月付参考",
        "price": 35,
        "currency": "CNY",
        "period": "month",
        "trafficGB": 350,
        "trafficUnit": "GB",
        "verified": false,
        "notes": "第三方历史参考；当前在售、额度及结算均未确认。"
      }
    ],
    "protocols": [],
    "regions": [],
    "aiSupport": [],
    "streamingSupport": [],
    "advantages": [
      "350GB 中档相对 150GB 档的参考增支为 15 元",
      "套餐容量跨度适合从轻量使用逐步增长到中等用量"
    ],
    "disadvantages": [
      "页面存在较早通用订阅介绍与后续停发订阅限制；不能承诺现行第三方客户端兼容。 有来源提及停止向部分第三方客户端发放订阅，其他页面说法不同；本页不保证 Clash 或其他客户端兼容。"
    ],
    "suitableFor": [
      "350GB 中档与客户端兼容核对"
    ],
    "sources": [
      "https://www.jichangpk.com/providers/yifanyun/"
    ],
    "sourceNotes": "页面存在较早通用订阅介绍与后续停发订阅限制；不能承诺现行第三方客户端兼容。 有来源提及停止向部分第三方客户端发放订阅，其他页面说法不同；本页不保证 Clash 或其他客户端兼容。",
    "purchaseCheck": "现在是否恢复通用订阅？若仍只支持自研客户端，所用系统版本是否有可安装版本？ 20元150GB与35元350GB是否仍为当前月付，升级是否按差价、是否保留已用和剩余额度？ 使用指定客户端不满足需求时是否允许退款，当前限制是否在付款前完整展示？",
    "lastVerified": "2026-10-16",
    "testStatus": "unverified",
    "color": "#73d9d2"
  },
  {
    "id": "edgenova",
    "slug": "edgenova",
    "name": "边缘节点 EdgeNova",
    "order": 21,
    "kind": "proxy",
    "description": "低用量体验档，先核对额度与续费",
    "recommendation": "边缘节点EdgeNova可作为低用量月付候选，但15元体验档容量有55GB与72GB两种公开版本。原参考还列25元120GB；如果小包足以覆盖需求，可先核对体验档是否限首购、能否按同价续费，再考虑扩容。推荐依据是短周期控制投入的思路，不能把未确认的72GB当作确定权益。",
    "whyChoose": "边缘节点EdgeNova可作为低用量月付候选，但15元体验档容量有55GB与72GB两种公开版本。原参考还列25元120GB；如果小包足以覆盖需求，可先核对体验档是否限首购、能否按同价续费，再考虑扩容。推荐依据是短周期控制投入的思路，不能把未确认的72GB当作确定权益。",
    "focus": "低用量体验档，先核对额度与续费",
    "affiliateUrl": "https://work.edgenovaaff.cc/#/?code=z81zCfw1",
    "plans": [
      {
        "id": "month-1",
        "name": "72GB 月付参考",
        "price": 15,
        "currency": "CNY",
        "period": "month",
        "trafficGB": 72,
        "trafficUnit": "GB",
        "verified": false,
        "notes": "第三方历史参考；当前在售、额度及结算均未确认。15 元体验档分别出现 55 GB 与 72 GB；当前在售额度、首购限制和可续费性未确认。"
      },
      {
        "id": "month-2",
        "name": "120GB 月付参考",
        "price": 25,
        "currency": "CNY",
        "period": "month",
        "trafficGB": 120,
        "trafficUnit": "GB",
        "verified": false,
        "notes": "第三方历史参考；当前在售、额度及结算均未确认。15 元体验档分别出现 55 GB 与 72 GB；当前在售额度、首购限制和可续费性未确认。"
      }
    ],
    "protocols": [],
    "regions": [],
    "aiSupport": [],
    "streamingSupport": [],
    "advantages": [
      "15元参考体验档为低频使用者提供较小首次支出的候选，须先确认额度版本",
      "25元120GB有独立参考记录，可在小档不足时再核对扩容，而非先选长周期"
    ],
    "disadvantages": [
      "15 元体验档分别出现 55 GB 与 72 GB；当前在售额度、首购限制和可续费性未确认。 资料中的小档可能属于体验档，是否限首购或续费需核对；未将体验价承诺为长期月费。"
    ],
    "suitableFor": [
      "72GB 小档，匹配低用量需求"
    ],
    "sources": [
      "https://jichangtan.com/airports/edgenova/"
    ],
    "sourceNotes": "15 元体验档分别出现 55 GB 与 72 GB；当前在售额度、首购限制和可续费性未确认。 资料中的小档可能属于体验档，是否限首购或续费需核对；未将体验价承诺为长期月费。",
    "purchaseCheck": "15 元档实际是 55 GB 还是 72 GB，是否仅首次购买？ 体验档是否可原价续费，额度何时重置？ 是否支持现用客户端及并发设备，退款窗口、用量扣费和申请方式是什么？",
    "lastVerified": "2026-10-16",
    "testStatus": "unverified",
    "color": "#82b5ff"
  },
  {
    "id": "kosing",
    "slug": "kosing",
    "name": "可信云",
    "order": 22,
    "kind": "proxy",
    "description": "150GB 与 300GB，先核对订阅方式",
    "recommendation": "可信云的参考月包以 25 元、150GB 和 50 元、300GB 为主。适合用量大致稳定、希望让预算随容量线性增长的人；是否选择这家，更关键的是当前订阅发放和设备支持能否满足你的实际使用方式。",
    "whyChoose": "可信云的参考月包以 25 元、150GB 和 50 元、300GB 为主。适合用量大致稳定、希望让预算随容量线性增长的人；是否选择这家，更关键的是当前订阅发放和设备支持能否满足你的实际使用方式。",
    "focus": "150GB 与 300GB，先核对订阅方式",
    "affiliateUrl": "https://work.kosingaff.com/#/?code=BNsA58Es",
    "plans": [
      {
        "id": "month-1",
        "name": "150GB 月付参考",
        "price": 25,
        "currency": "CNY",
        "period": "month",
        "trafficGB": 150,
        "trafficUnit": "GB",
        "verified": false,
        "notes": "第三方历史参考；当前在售、额度及结算均未确认。不能把 25 元/150GB 写成已确认全站最低门槛：第三方另列 15 元/60GB、9 元/45GB，可能是不同时间或套餐。"
      },
      {
        "id": "month-2",
        "name": "300GB 月付参考",
        "price": 50,
        "currency": "CNY",
        "period": "month",
        "trafficGB": 300,
        "trafficUnit": "GB",
        "verified": false,
        "notes": "第三方历史参考；当前在售、额度及结算均未确认。不能把 25 元/150GB 写成已确认全站最低门槛：第三方另列 15 元/60GB、9 元/45GB，可能是不同时间或套餐。"
      }
    ],
    "protocols": [],
    "regions": [],
    "aiSupport": [],
    "streamingSupport": [],
    "advantages": [
      "150GB 与 300GB 参考档便于按既有用量设置预算",
      "相邻档价格和容量同步翻倍，费用增长容易预测"
    ],
    "disadvantages": [
      "不能把 25 元/150GB 写成已确认全站最低门槛：第三方另列 15 元/60GB、9 元/45GB，可能是不同时间或套餐。 早期资料出现 120GB 入门额度，也有订阅方式调整记录；本页保留 150GB 参考值，同时明确它未经当前结算页复核。"
    ],
    "suitableFor": [
      "150GB 与 300GB，先核对订阅方式"
    ],
    "sources": [
      "https://vpsknow.com/reviews/airports/kexinyun-airport-review/"
    ],
    "sourceNotes": "不能把 25 元/150GB 写成已确认全站最低门槛：第三方另列 15 元/60GB、9 元/45GB，可能是不同时间或套餐。 早期资料出现 120GB 入门额度，也有订阅方式调整记录；本页保留 150GB 参考值，同时明确它未经当前结算页复核。",
    "purchaseCheck": "当前是否在售 15 元/60GB 等小包？25 元/150GB 是否仍是常规档？ 能否获取通用订阅，目标系统客户端最低版本及设备并发限制是什么？ 取消套餐、退款时限、已使用流量及手续费怎样计算？",
    "lastVerified": "2026-10-16",
    "testStatus": "unverified",
    "color": "#d5aa73"
  },
  {
    "id": "sujie",
    "slug": "sujie",
    "name": "速界 SuJie",
    "order": 23,
    "kind": "proxy",
    "description": "250GB 中档，给波动用量留余量",
    "recommendation": "速界参考月付 25 元、120GB 与 50 元、250GB。若每月用量在 200GB 左右，中档能提供有限的波动余量；选择依据应是容量够用和账单明确，而不是品牌名称所暗示的速度。",
    "whyChoose": "速界参考月付 25 元、120GB 与 50 元、250GB。若每月用量在 200GB 左右，中档能提供有限的波动余量；选择依据应是容量够用和账单明确，而不是品牌名称所暗示的速度。",
    "focus": "250GB 中档，给波动用量留余量",
    "affiliateUrl": "https://work.speedworldaff.cc/#/?code=wSjLCpIf",
    "plans": [
      {
        "id": "month-1",
        "name": "120GB 月付参考",
        "price": 25,
        "currency": "CNY",
        "period": "month",
        "trafficGB": 120,
        "trafficUnit": "GB",
        "verified": false,
        "notes": "第三方历史参考；当前在售、额度及结算均未确认。25 元档存在 120GB 与 150GB 两个公开版本。"
      },
      {
        "id": "month-2",
        "name": "250GB 月付参考",
        "price": 50,
        "currency": "CNY",
        "period": "month",
        "trafficGB": 250,
        "trafficUnit": "GB",
        "verified": false,
        "notes": "第三方历史参考；当前在售、额度及结算均未确认。25 元档存在 120GB 与 150GB 两个公开版本。"
      }
    ],
    "protocols": [],
    "regions": [],
    "aiSupport": [],
    "streamingSupport": [],
    "advantages": [
      "250GB 参考中档可用于接近 200GB 的需求预算",
      "120GB 小档便于在需求尚不确定时先建立消耗记录"
    ],
    "disadvantages": [
      "25 元档存在 120GB 与 150GB 两个公开版本。 历史资料中的试用和客户端支持未在当前入口核实；本页不提供免费试用保证，也不承诺节点数量。"
    ],
    "suitableFor": [
      "250GB 中档，给波动用量留余量"
    ],
    "sources": [
      "https://jichangwhite.cc/plans/sujie/"
    ],
    "sourceNotes": "25 元档存在 120GB 与 150GB 两个公开版本。 历史资料中的试用和客户端支持未在当前入口核实；本页不提供免费试用保证，也不承诺节点数量。",
    "purchaseCheck": "25 元档当前流量是 120GB 还是 150GB，有没有更小的可续费月包？ 是否必须用专用客户端，是否支持自己已有的客户端？ 重置包是否改变到期日，设备限制、试用条件及退款条款是什么？",
    "lastVerified": "2026-10-16",
    "testStatus": "unverified",
    "color": "#ed94c4"
  },
  {
    "id": "kuaili",
    "slug": "kuaili",
    "name": "快狸 KuaiLi",
    "order": 24,
    "kind": "proxy",
    "description": "50GB 轻量档与 250GB 跨档选择",
    "recommendation": "快狸适合明确区分低频访问和持续较高用量的人。参考 15 元、50GB 与 35 元、250GB，价格增加到约 2.33 倍，标称容量为 5 倍；只有实际消耗足够高时，较大容量的结构优势才有价值。",
    "whyChoose": "快狸适合明确区分低频访问和持续较高用量的人。参考 15 元、50GB 与 35 元、250GB，价格增加到约 2.33 倍，标称容量为 5 倍；只有实际消耗足够高时，较大容量的结构优势才有价值。",
    "focus": "50GB 轻量档与 250GB 跨档选择",
    "affiliateUrl": "https://work.kuailicloud.cc/#/?code=gVGJa0Mp",
    "plans": [
      {
        "id": "month-1",
        "name": "50GB 月付参考",
        "price": 15,
        "currency": "CNY",
        "period": "month",
        "trafficGB": 50,
        "trafficUnit": "GB",
        "verified": false,
        "notes": "第三方历史参考；当前在售、额度及结算均未确认。入门月包有 15 元/50GB 与 25 元/150GB 两种第三方口径，不能承诺现售最低价。"
      },
      {
        "id": "month-2",
        "name": "250GB 月付参考",
        "price": 35,
        "currency": "CNY",
        "period": "month",
        "trafficGB": 250,
        "trafficUnit": "GB",
        "verified": false,
        "notes": "第三方历史参考；当前在售、额度及结算均未确认。入门月包有 15 元/50GB 与 25 元/150GB 两种第三方口径，不能承诺现售最低价。"
      }
    ],
    "protocols": [],
    "regions": [],
    "aiSupport": [],
    "streamingSupport": [],
    "advantages": [
      "50GB 小档为低频需求提供独立月付预算",
      "250GB 参考档的容量增长快于标价增长，适合跨过轻量阶段后重新评估"
    ],
    "disadvantages": [
      "入门月包有 15 元/50GB 与 25 元/150GB 两种第三方口径，不能承诺现售最低价。 这里展示两个选定档位，中间可能还有其他套餐；不能把跨度理解为必须一次升级到 250GB。"
    ],
    "suitableFor": [
      "50GB 轻量档与 250GB 跨档选择"
    ],
    "sources": [
      "https://jichangtan.com/airports/kuaili/"
    ],
    "sourceNotes": "入门月包有 15 元/50GB 与 25 元/150GB 两种第三方口径，不能承诺现售最低价。 这里展示两个选定档位，中间可能还有其他套餐；不能把跨度理解为必须一次升级到 250GB。",
    "purchaseCheck": "15 元/50GB、22 元/100GB、35 元/250GB 是否均可购买与续费？ 各档节点权限、设备数和客户端支持是否相同？ 流量重置日、补充包费用、退款时限和已用流量处理是什么？",
    "lastVerified": "2026-10-16",
    "testStatus": "unverified",
    "color": "#70c8ed"
  },
  {
    "id": "firefly",
    "slug": "firefly",
    "name": "Firefly机场",
    "order": 25,
    "kind": "proxy",
    "description": "月付之外，核对低频一次性包",
    "recommendation": "Firefly机场可供同时考虑月付和低频备用需求的人研究。公开资料除了 25 元、150GB 月包，还提到 100 元、100GB 一次性包；如果长期消耗很少，可以在确认有效期和服务条款后，再比较两种付费方式。",
    "whyChoose": "Firefly机场可供同时考虑月付和低频备用需求的人研究。公开资料除了 25 元、150GB 月包，还提到 100 元、100GB 一次性包；如果长期消耗很少，可以在确认有效期和服务条款后，再比较两种付费方式。",
    "focus": "月付之外，核对低频一次性包",
    "affiliateUrl": "https://vip02.fireflyaff.com/#/?code=Fes6j9rn",
    "coupon": "firefly",
    "plans": [
      {
        "id": "month-1",
        "name": "150GB 月付参考",
        "price": 25,
        "currency": "CNY",
        "period": "month",
        "trafficGB": 150,
        "trafficUnit": "GB",
        "verified": false,
        "notes": "第三方历史参考；当前在售、额度及结算均未确认。"
      },
      {
        "id": "month-2",
        "name": "300GB 月付参考",
        "price": 45,
        "currency": "CNY",
        "period": "month",
        "trafficGB": 300,
        "trafficUnit": "GB",
        "verified": false,
        "notes": "第三方历史参考；当前在售、额度及结算均未确认。"
      }
    ],
    "protocols": [],
    "regions": [],
    "aiSupport": [],
    "streamingSupport": [],
    "advantages": [
      "参考资料同时提供月付与一次性包两种消费形态",
      "150GB 与 300GB 月包可用于持续使用者的容量安排"
    ],
    "disadvantages": [
      "年付 60GB 的重置口径需在官方页确认；第三方表格只写流量列，不能自行扩展为每月或全年。 一次性包不表示服务永久经营，也不表示每月补发 100GB；相关套餐当前是否在售尚未通过结算页确认。"
    ],
    "suitableFor": [
      "月付之外，核对低频一次性包"
    ],
    "sources": [
      "https://jichangtan.com/airports/firefly/"
    ],
    "sourceNotes": "年付 60GB 的重置口径需在官方页确认；第三方表格只写流量列，不能自行扩展为每月或全年。 一次性包不表示服务永久经营，也不表示每月补发 100GB；相关套餐当前是否在售尚未通过结算页确认。",
    "purchaseCheck": "firefly 是否限首单、排除年付小包或一次性包，能否和周期折扣叠加？ 100 元一次性包的总额度、有效期、停服处理及补充规则是什么？ 是否支持目标客户端，设备并发与退款规则是什么？",
    "lastVerified": "2026-10-16",
    "testStatus": "unverified",
    "color": "#9b87ff"
  },
  {
    "id": "civet",
    "slug": "civet",
    "name": "灵猫",
    "order": 26,
    "kind": "proxy",
    "description": "Small 与 Big，关注周期总支出",
    "recommendation": "灵猫资料以 Small、Big 两类容量为主，参考月付分别为 25 元、150GB 和 45 元、300GB，另列季付与年付。它适合已形成固定用量、愿意比较不同付款周期的人；先验证月包，再决定预付周期是否合适。",
    "whyChoose": "灵猫资料以 Small、Big 两类容量为主，参考月付分别为 25 元、150GB 和 45 元、300GB，另列季付与年付。它适合已形成固定用量、愿意比较不同付款周期的人；先验证月包，再决定预付周期是否合适。",
    "focus": "Small 与 Big，关注周期总支出",
    "affiliateUrl": "https://vip02.civetaff.com/#/?code=kZlRw46w",
    "plans": [
      {
        "id": "month-1",
        "name": "Small 月付参考",
        "price": 25,
        "currency": "CNY",
        "period": "month",
        "trafficGB": 150,
        "trafficUnit": "GB",
        "verified": false,
        "notes": "第三方历史参考；当前在售、额度及结算均未确认。同为 150GB 的公开月价出现 19 元和25 元。"
      },
      {
        "id": "month-2",
        "name": "Big 月付参考",
        "price": 45,
        "currency": "CNY",
        "period": "month",
        "trafficGB": 300,
        "trafficUnit": "GB",
        "verified": false,
        "notes": "第三方历史参考；当前在售、额度及结算均未确认。同为 150GB 的公开月价出现 19 元和25 元。"
      }
    ],
    "protocols": [],
    "regions": [],
    "aiSupport": [],
    "streamingSupport": [],
    "advantages": [
      "Small 与 Big 的两级容量便于按固定用量选择",
      "公开资料分别列出月付、季付和年付，提供周期比较线索"
    ],
    "disadvantages": [
      "同为 150GB 的公开月价出现 19 元和25 元。 不同来源对协议、设备数和第三方客户端支持相互矛盾；这些字段全部保留为尚未核实，不拼接成一套确定配置。"
    ],
    "suitableFor": [
      "Small 与 Big，关注周期总支出"
    ],
    "sources": [
      "https://jichangshice.com.cn/airports/lingmao/"
    ],
    "sourceNotes": "同为 150GB 的公开月价出现 19 元和25 元。 不同来源对协议、设备数和第三方客户端支持相互矛盾；这些字段全部保留为尚未核实，不拼接成一套确定配置。",
    "purchaseCheck": "Small 当前是否25 元/150GB？Big 实际到账300GB还是其他额度？ 季付与年付的流量是否每月重置，预付后能否退未使用余额？ 当前协议、设备并发和第三方客户端限制是什么？",
    "lastVerified": "2026-10-16",
    "testStatus": "unverified",
    "color": "#73d9d2"
  },
  {
    "id": "flashleap",
    "slug": "flashleap",
    "name": "闪跃 FlashLeap",
    "order": 27,
    "kind": "proxy",
    "description": "150GB 与 300GB，比较可预期增支",
    "recommendation": "闪跃参考 24 元、150GB 与 44 元、300GB。用量翻倍时增加 20 元，而不是再支付一份小档费用；适合预算在四十多元、又需要接近 300GB 的人列为候选，实际体验仍需在自己的网络中确认。",
    "whyChoose": "闪跃参考 24 元、150GB 与 44 元、300GB。用量翻倍时增加 20 元，而不是再支付一份小档费用；适合预算在四十多元、又需要接近 300GB 的人列为候选，实际体验仍需在自己的网络中确认。",
    "focus": "150GB 与 300GB，比较可预期增支",
    "affiliateUrl": "https://vip02.flashleapaff.com/#/?code=FkCGEeaC",
    "coupon": "shanyue",
    "plans": [
      {
        "id": "month-1",
        "name": "150GB 月付参考",
        "price": 24,
        "currency": "CNY",
        "period": "month",
        "trafficGB": 150,
        "trafficUnit": "GB",
        "verified": false,
        "notes": "第三方历史参考；当前在售、额度及结算均未确认。"
      },
      {
        "id": "month-2",
        "name": "300GB 月付参考",
        "price": 44,
        "currency": "CNY",
        "period": "month",
        "trafficGB": 300,
        "trafficUnit": "GB",
        "verified": false,
        "notes": "第三方历史参考；当前在售、额度及结算均未确认。"
      }
    ],
    "protocols": [],
    "regions": [],
    "aiSupport": [],
    "streamingSupport": [],
    "advantages": [
      "300GB 参考月包让四十多元预算有明确容量目标",
      "容量翻倍的升级增支低于另一份 150GB 小档价格"
    ],
    "disadvantages": [
      "Warp 是按月重置还是一次性总量无法确认。 年付总价在不同页面有差异，本页只收录一致性较高的月付两档，不据此推算全年价格。"
    ],
    "suitableFor": [
      "150GB 与 300GB，比较可预期增支"
    ],
    "sources": [
      "https://www.clashwiki.blog/brands/flashleap/"
    ],
    "sourceNotes": "Warp 是按月重置还是一次性总量无法确认。 年付总价在不同页面有差异，本页只收录一致性较高的月付两档，不据此推算全年价格。",
    "purchaseCheck": "shanyue 是否仅新用户首次订单、哪些档位可用及截止日期？ Warp 是否月付，年付小包究竟每月给多少流量？ 设备并发、目标客户端、退款窗口与使用流量扣款怎样规定？",
    "lastVerified": "2026-10-16",
    "testStatus": "unverified",
    "color": "#82b5ff"
  },
  {
    "id": "worryfree",
    "slug": "worryfree",
    "name": "无忧链接",
    "order": 28,
    "kind": "proxy",
    "description": "100GB 到 200GB，增加 14 元的容量选择",
    "recommendation": "无忧链接参考月付从 19 元、100GB 到 33 元、200GB，增加 14 元可获得两倍标称容量。对于经常略超 100GB 的人，中档比频繁购买补充流量更值得先核算，但需要把重置包价格一起确认。",
    "whyChoose": "无忧链接参考月付从 19 元、100GB 到 33 元、200GB，增加 14 元可获得两倍标称容量。对于经常略超 100GB 的人，中档比频繁购买补充流量更值得先核算，但需要把重置包价格一起确认。",
    "focus": "100GB 到 200GB，增加 14 元的容量选择",
    "affiliateUrl": "https://wep01.worryfreeaff.com/#/?code=56A0RTpU",
    "coupon": "wuyou666",
    "plans": [
      {
        "id": "month-1",
        "name": "100GB 月付参考",
        "price": 19,
        "currency": "CNY",
        "period": "month",
        "trafficGB": 100,
        "trafficUnit": "GB",
        "verified": false,
        "notes": "第三方历史参考；当前在售、额度及结算均未确认。"
      },
      {
        "id": "month-2",
        "name": "200GB 月付参考",
        "price": 33,
        "currency": "CNY",
        "period": "month",
        "trafficGB": 200,
        "trafficUnit": "GB",
        "verified": false,
        "notes": "第三方历史参考；当前在售、额度及结算均未确认。"
      }
    ],
    "protocols": [],
    "regions": [],
    "aiSupport": [],
    "streamingSupport": [],
    "advantages": [
      "100GB 参考小档便于控制首次月支出",
      "200GB 参考档的升级差额为 14 元，可与补充流量费用比较"
    ],
    "disadvantages": [
      "优惠幅度与条件有6.8折、新人折扣未给幅度等口径，不能写死。 网络资料对 wuyou666 的优惠比例和客户端兼容存在冲突，不能把任意一种说法当作已经验证。"
    ],
    "suitableFor": [
      "100GB 到 200GB，增加 14 元的容量选择"
    ],
    "sources": [
      "https://www.jichangnode.wiki/brands/worryfree/"
    ],
    "sourceNotes": "优惠幅度与条件有6.8折、新人折扣未给幅度等口径，不能写死。 网络资料对 wuyou666 的优惠比例和客户端兼容存在冲突，不能把任意一种说法当作已经验证。",
    "purchaseCheck": "wuyou666 实际减免多少、是否限首次订单、是否排除79 元年付？ 能否直接用第三方客户端，还是须申请专用订阅？ 100GB用完后补充包多少钱，是否有退款、续费或转档限制？",
    "lastVerified": "2026-10-16",
    "testStatus": "unverified",
    "color": "#d5aa73"
  },
  {
    "id": "kuajie",
    "slug": "kuajie",
    "name": "跨界云",
    "order": 29,
    "kind": "proxy",
    "description": "330GB 中档，扩容与续费一起核对",
    "recommendation": "跨界云参考 20 元、120GB 与 40 元、330GB。中档价格为小档两倍，容量为 2.75 倍，适合需求稳定超过小档的人进一步比较。推荐理由聚焦扩容结构；优惠、线路与客户端能力仍需逐项确认。",
    "whyChoose": "跨界云参考 20 元、120GB 与 40 元、330GB。中档价格为小档两倍，容量为 2.75 倍，适合需求稳定超过小档的人进一步比较。推荐理由聚焦扩容结构；优惠、线路与客户端能力仍需逐项确认。",
    "focus": "330GB 中档，扩容与续费一起核对",
    "affiliateUrl": "https://vip02.kuajieaff.com/#/?code=VfWeYwHM",
    "plans": [
      {
        "id": "month-1",
        "name": "120GB 月付参考",
        "price": 20,
        "currency": "CNY",
        "period": "month",
        "trafficGB": 120,
        "trafficUnit": "GB",
        "verified": false,
        "notes": "第三方历史参考；当前在售、额度及结算均未确认。"
      },
      {
        "id": "month-2",
        "name": "330GB 月付参考",
        "price": 40,
        "currency": "CNY",
        "period": "month",
        "trafficGB": 330,
        "trafficUnit": "GB",
        "verified": false,
        "notes": "第三方历史参考；当前在售、额度及结算均未确认。"
      }
    ],
    "protocols": [],
    "regions": [],
    "aiSupport": [],
    "streamingSupport": [],
    "advantages": [
      "330GB 参考中档相对 120GB 小档具有较大的容量跨度",
      "40 元参考月费便于为三百 GB 左右需求设置预算"
    ],
    "disadvantages": [
      "第三方对专线名称、订阅发放方式及年包重置口径描述不同；没有当前官方证据可裁定。 来源对线路名称和第三方订阅方式有不同描述；未核实这些宣传，也未采纳网上另一个优惠码或券后价。"
    ],
    "suitableFor": [
      "330GB 中档，扩容与续费一起核对"
    ],
    "sources": [
      "https://www.clashmetahub.net/reviews/kuajie/"
    ],
    "sourceNotes": "第三方对专线名称、订阅发放方式及年包重置口径描述不同；没有当前官方证据可裁定。 来源对线路名称和第三方订阅方式有不同描述；未核实这些宣传，也未采纳网上另一个优惠码或券后价。",
    "purchaseCheck": "20 元120GB和40 元330GB是否仍在售，续费价格是否相同？ 是否支持通用订阅、是否需人工发放，有无设备与地域限制？ 年付60GB是每月重置还是总额度，退款期限和余额退还规则是什么？",
    "lastVerified": "2026-10-16",
    "testStatus": "unverified",
    "color": "#ed94c4"
  }
];

export const missing="尚未核实";
export const price=(p?:Plan)=>p?`${p.currency==='CNY'?'¥':p.currency+' '}${p.price} / ${p.period==='month'?'月':p.period==='year'?'年':'次'}（参考）`:"当前报价待核实";
export const traffic=(p?:Plan)=>!p?missing:p.unlimited?'不限流量（资料标示）':p.trafficGB===undefined?missing:`${p.trafficGB} ${p.trafficUnit??'GB'} / ${p.period==='month'?'月':p.period==='year'?'年':'次'}`;
export function unitCost(p:Plan):number|null {return p.verified&&!p.unlimited&&p.trafficGB!==undefined&&p.trafficGB>0&&p.multiplier!==undefined&&p.multiplier>0?p.price/(p.trafficGB/p.multiplier):null}
export function valueEligible(p:Plan){return p.verified&&p.period==='month'&&p.price>0&&unitCost(p)!==null}
export function freeRanking(){return airports.flatMap(a=>a.plans.filter(p=>p.id==='free'&&p.verified).map(plan=>({airport:a,plan})))}

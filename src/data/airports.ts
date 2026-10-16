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
        "name": "月付参考档 1",
        "price": 20,
        "currency": "CNY",
        "period": "month",
        "trafficGB": 120,
        "trafficUnit": "GB",
        "verified": false,
        "notes": "第三方公开资料参考；未登录结算页核价，是否在售需确认。"
      },
      {
        "id": "month-2",
        "name": "月付参考档 2",
        "price": 40,
        "currency": "CNY",
        "period": "month",
        "trafficGB": 240,
        "trafficUnit": "GB",
        "verified": false,
        "notes": "第三方公开资料参考；未登录结算页核价，是否在售需确认。"
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
      "40 元档有其他页面写成 300GB；本页采用较保守的 240GB 参考值，不据此承诺实际到账额度。"
    ],
    "suitableFor": [
      "120GB 起步，按用量稳步升级"
    ],
    "sources": [
      "https://tizilab.cc/paihang/twilight/"
    ],
    "sourceNotes": "40 元档有其他页面写成 300GB；本页采用较保守的 240GB 参考值，不据此承诺实际到账额度。",
    "purchaseCheck": "在结算页重点核对 40 元档究竟是 240GB 还是 300GB，以及流量重置日。",
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
        "name": "月付参考档 1",
        "price": 24,
        "currency": "CNY",
        "period": "month",
        "trafficGB": 144,
        "trafficUnit": "GB",
        "verified": false,
        "notes": "第三方公开资料参考；未登录结算页核价，是否在售需确认。"
      }
    ],
    "protocols": [],
    "regions": [],
    "aiSupport": [],
    "streamingSupport": [],
    "advantages": [
      "144GB 月包为介于常见小包之间的需求提供预算参照",
      "提供指定优惠码 yxr888，可在结账时单独验证适用条件"
    ],
    "disadvantages": [
      "来源还收录年付与一次性方案，但各周期流量口径不能混用；本页只把明确标为月度的 144GB 纳入表格。"
    ],
    "suitableFor": [
      "144GB 月包，优先核对精确额度"
    ],
    "sources": [
      "https://jichang168.com/airports/invisible/"
    ],
    "sourceNotes": "来源还收录年付与一次性方案，但各周期流量口径不能混用；本页只把明确标为月度的 144GB 纳入表格。",
    "purchaseCheck": "确认后台实际月额度为 144GB，输入 yxr888 后查看订单总额是否变化，不从码名猜折扣。",
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
        "name": "月付参考档 1",
        "price": 20,
        "currency": "CNY",
        "period": "month",
        "trafficGB": 100,
        "trafficUnit": "GB",
        "verified": false,
        "notes": "第三方公开资料参考；未登录结算页核价，是否在售需确认。"
      },
      {
        "id": "month-2",
        "name": "月付参考档 2",
        "price": 50,
        "currency": "CNY",
        "period": "month",
        "trafficGB": 300,
        "trafficUnit": "GB",
        "verified": false,
        "notes": "第三方公开资料参考；未登录结算页核价，是否在售需确认。"
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
      "公开页面对协议和年付流量重置的表述不一致；本页不据此承诺 VLESS、Trojan 或年付月额度。"
    ],
    "suitableFor": [
      "从 100GB 到 300GB 的容量跃迁"
    ],
    "sources": [
      "https://towernav.com/airports/lingdong/"
    ],
    "sourceNotes": "公开页面对协议和年付流量重置的表述不一致；本页不据此承诺 VLESS、Trojan 或年付月额度。",
    "purchaseCheck": "先确认账户支持的客户端，再核对 300GB 是否每个账单月重置；不要直接把年付小包当作月付替代。",
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
        "name": "月付参考档 1",
        "price": 25,
        "currency": "CNY",
        "period": "month",
        "trafficGB": 125,
        "trafficUnit": "GB",
        "verified": false,
        "notes": "第三方公开资料参考；未登录结算页核价，是否在售需确认。"
      },
      {
        "id": "month-2",
        "name": "月付参考档 2",
        "price": 60,
        "currency": "CNY",
        "period": "month",
        "trafficGB": 350,
        "trafficUnit": "GB",
        "verified": false,
        "notes": "第三方公开资料参考；未登录结算页核价，是否在售需确认。"
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
      "89 元年付小包等资料没有清晰统一的重置说明；未将这些金额折算成可直接购买的月付价格。"
    ],
    "suitableFor": [
      "125GB 与 350GB，留出增长空间"
    ],
    "sources": [
      "https://jichangnode.wiki/blog/laddercloud-monthly-research/"
    ],
    "sourceNotes": "89 元年付小包等资料没有清晰统一的重置说明；未将这些金额折算成可直接购买的月付价格。",
    "purchaseCheck": "你提供的链接没有 code 参数，本站保留原样；到站后确认归属、125GB 档价格及当期账单规则。",
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
        "name": "月付参考档 1",
        "price": 25,
        "currency": "CNY",
        "period": "month",
        "trafficGB": 150,
        "trafficUnit": "GB",
        "verified": false,
        "notes": "第三方公开资料参考；未登录结算页核价，是否在售需确认。"
      },
      {
        "id": "month-2",
        "name": "月付参考档 2",
        "price": 50,
        "currency": "CNY",
        "period": "month",
        "trafficGB": 380,
        "trafficUnit": "GB",
        "verified": false,
        "notes": "第三方公开资料参考；未登录结算页核价，是否在售需确认。"
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
      "飞V与 Firefly 是本目录中的两个独立品牌；不能因名称相近就共用优惠码或沿用对方线路结论。"
    ],
    "suitableFor": [
      "380GB 中档，适合中等偏高用量"
    ],
    "sources": [
      "https://jichangshice.com.cn/airports/flyv/"
    ],
    "sourceNotes": "飞V与 Firefly 是本目录中的两个独立品牌；不能因名称相近就共用优惠码或沿用对方线路结论。",
    "purchaseCheck": "确认访问的是飞V面板；重点核对 380GB 档是否仍在售，不要误用 Firefly 的优惠码。",
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
        "notes": "多份第三方公开资料列出的入门档；当前结算价、容量与是否在售仍待到站核实。"
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
        "notes": "多数本期来源写 400GB，另有来源写 450GB；按 400GB 作参考，实际额度需核对当前套餐。"
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
        "notes": "第三方公开资料参考；未登录结算页核价，是否在售需确认。"
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
        "notes": "第三方公开资料参考；未登录结算页核价，是否在售需确认。"
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
      "70 元进阶档在不同来源中有 400GB 或 450GB 两种描述，本页按较保守的 400GB 作参考；所有标价均未通过当前结算页复核。"
    ],
    "suitableFor": [
      "150GB 入门，按需扩展到 2000GB"
    ],
    "sources": [
      "https://jichangshice.com.cn/airports/wavenet/",
      "https://www.jichangpk.com/providers/langwang/",
      "https://jichangbay.biz/airports/wavenet/"
    ],
    "sourceNotes": "70 元进阶档在不同来源中有 400GB 或 450GB 两种描述，本页按较保守的 400GB 作参考；所有标价均未通过当前结算页复核。",
    "purchaseCheck": "先核对入门档当前是否为 30 元、150GB，再确认 70 元档的实际容量、节点倍率和重置日。120 元对应 800GB 高端档，不能将它视为入门价格。",
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
        "name": "月付参考档 1",
        "price": 25,
        "currency": "CNY",
        "period": "month",
        "trafficGB": 150,
        "trafficUnit": "GB",
        "verified": false,
        "notes": "第三方公开资料参考；未登录结算页核价，是否在售需确认。"
      },
      {
        "id": "month-2",
        "name": "月付参考档 2",
        "price": 45,
        "currency": "CNY",
        "period": "month",
        "trafficGB": 300,
        "trafficUnit": "GB",
        "verified": false,
        "notes": "第三方公开资料参考；未登录结算页核价，是否在售需确认。"
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
      "网络资料对 flycat888 的适用周期存在差异；本页没有写入折扣比例，也不保证月付订单能使用。"
    ],
    "suitableFor": [
      "150GB 到 300GB，控制翻倍用量的增支"
    ],
    "sources": [
      "https://haiwaijichang.com/brands/feimao/"
    ],
    "sourceNotes": "网络资料对 flycat888 的适用周期存在差异；本页没有写入折扣比例，也不保证月付订单能使用。",
    "purchaseCheck": "先用月付页核对 150GB 与 300GB，再填入 flycat888；以订单提示确认是否限新用户或限长周期。",
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
        "name": "月付参考档 1",
        "price": 19.99,
        "currency": "CNY",
        "period": "month",
        "trafficGB": 100,
        "trafficUnit": "GB",
        "verified": false,
        "notes": "第三方公开资料参考；未登录结算页核价，是否在售需确认。"
      },
      {
        "id": "month-2",
        "name": "月付参考档 2",
        "price": 43,
        "currency": "CNY",
        "period": "month",
        "trafficGB": 300,
        "trafficUnit": "GB",
        "verified": false,
        "notes": "第三方公开资料参考；未登录结算页核价，是否在售需确认。"
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
      "第三方记录的小档卡片为 100GB、说明文字为 120GB，本页按较小值展示；这仍不是本站核验到账的结果。"
    ],
    "suitableFor": [
      "小数标价与额度冲突，先看结算明细"
    ],
    "sources": [
      "https://jichangshice.com.cn/airports/dalaoyun/"
    ],
    "sourceNotes": "第三方记录的小档卡片为 100GB、说明文字为 120GB，本页按较小值展示；这仍不是本站核验到账的结果。",
    "purchaseCheck": "要求以当前结算页和后台额度解释 100GB/120GB 差异，并确认“30 天”与自然月的重置区别。",
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
        "name": "月付参考档 1",
        "price": 27,
        "currency": "CNY",
        "period": "month",
        "trafficGB": 200,
        "trafficUnit": "GB",
        "verified": false,
        "notes": "第三方公开资料参考；未登录结算页核价，是否在售需确认。"
      },
      {
        "id": "month-2",
        "name": "月付参考档 2",
        "price": 57,
        "currency": "CNY",
        "period": "month",
        "trafficGB": 500,
        "trafficUnit": "GB",
        "verified": false,
        "notes": "第三方公开资料参考；未登录结算页核价，是否在售需确认。"
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
      "不同页面有旧价格与不同优惠说法；weifeng90 中的数字不等于折扣承诺，不能直接写为九折或七折。"
    ],
    "suitableFor": [
      "200GB 起步，避免频繁跨档"
    ],
    "sources": [
      "https://jichangyyds.net/brands/weifengwangluo/"
    ],
    "sourceNotes": "不同页面有旧价格与不同优惠说法；weifeng90 中的数字不等于折扣承诺，不能直接写为九折或七折。",
    "purchaseCheck": "原始推广入口没有 code 参数，本站不会补造；结账输入 weifeng90 后核对实付金额及续费是否同价。",
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
        "name": "月付参考档 1",
        "price": 25,
        "currency": "CNY",
        "period": "month",
        "trafficGB": 150,
        "trafficUnit": "GB",
        "verified": false,
        "notes": "第三方公开资料参考；未登录结算页核价，是否在售需确认。"
      },
      {
        "id": "month-2",
        "name": "月付参考档 2",
        "price": 70,
        "currency": "CNY",
        "period": "month",
        "trafficGB": 500,
        "trafficUnit": "GB",
        "verified": false,
        "notes": "第三方公开资料参考；未登录结算页核价，是否在售需确认。"
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
      "一次性包的总流量与月付的月额度不是同一口径；本页不把一次购买的容量重复算进每月预算。"
    ],
    "suitableFor": [
      "150GB 日常档与 500GB 扩容档"
    ],
    "sources": [
      "https://tizidream.com/shops/xingdaomeng/"
    ],
    "sourceNotes": "一次性包的总流量与月付的月额度不是同一口径；本页不把一次购买的容量重复算进每月预算。",
    "purchaseCheck": "核对 nmw888 在所选档位是否生效；若改选一次性包，确认有效期、服务终止条款和用完后的处理。",
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
    "description": "138GB 与 220GB，细分百 GB 档位",
    "recommendation": "光速云可供想在百 GB 级别细分预算的人考虑：本期参考资料列出 23 元、138GB 和 34 元、220GB。额外 11 元对应 82GB 标称容量，适合需求略高于小档、又不需要 500GB 大包的人逐项核算。",
    "whyChoose": "光速云可供想在百 GB 级别细分预算的人考虑：本期参考资料列出 23 元、138GB 和 34 元、220GB。额外 11 元对应 82GB 标称容量，适合需求略高于小档、又不需要 500GB 大包的人逐项核算。",
    "focus": "138GB 与 220GB，细分百 GB 档位",
    "affiliateUrl": "https://mdlky.gsyaff.com/#/?code=6tRWbtgK",
    "coupon": "jichangcha09",
    "plans": [
      {
        "id": "month-1",
        "name": "月付参考档 1",
        "price": 23,
        "currency": "CNY",
        "period": "month",
        "trafficGB": 138,
        "trafficUnit": "GB",
        "verified": false,
        "notes": "第三方公开资料参考；未登录结算页核价，是否在售需确认。"
      },
      {
        "id": "month-2",
        "name": "月付参考档 2",
        "price": 34,
        "currency": "CNY",
        "period": "month",
        "trafficGB": 220,
        "trafficUnit": "GB",
        "verified": false,
        "notes": "第三方公开资料参考；未登录结算页核价，是否在售需确认。"
      }
    ],
    "protocols": [],
    "regions": [],
    "aiSupport": [],
    "streamingSupport": [],
    "advantages": [
      "138GB 与 220GB 参考容量有助于减少过量购买",
      "相邻档增加 11 元，便于给不规律的额外用量定预算"
    ],
    "disadvantages": [
      "部分旧资料写 17 元、110GB，不能把不同版本的起价与新容量拼成一个套餐；本页参考值需到站复核。"
    ],
    "suitableFor": [
      "138GB 与 220GB，细分百 GB 档位"
    ],
    "sources": [
      "https://jichangdan.com/"
    ],
    "sourceNotes": "部分旧资料写 17 元、110GB，不能把不同版本的起价与新容量拼成一个套餐；本页参考值需到站复核。",
    "purchaseCheck": "在当前面板核对是否仍有 23 元、138GB；优惠码 jichangcha09 的折扣和有效期只认结账提示。",
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
        "name": "月付参考档 1",
        "price": 19.9,
        "currency": "CNY",
        "period": "month",
        "trafficGB": 150,
        "trafficUnit": "GB",
        "verified": false,
        "notes": "第三方公开资料参考；未登录结算页核价，是否在售需确认。"
      },
      {
        "id": "month-2",
        "name": "月付参考档 2",
        "price": 59.9,
        "currency": "CNY",
        "period": "month",
        "trafficGB": 500,
        "trafficUnit": "GB",
        "verified": false,
        "notes": "第三方公开资料参考；未登录结算页核价，是否在售需确认。"
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
      "14.9 元、100GB 在部分来源中带活动属性；活动是否结束、是否限新用户尚未确认，未纳入表格。"
    ],
    "suitableFor": [
      "常规档与活动档分开看"
    ],
    "sources": [
      "https://tuijianjichang.wiki/review/weituyun"
    ],
    "sourceNotes": "14.9 元、100GB 在部分来源中带活动属性；活动是否结束、是否限新用户尚未确认，未纳入表格。",
    "purchaseCheck": "确认名称为唯兔云或 V2云并核对 rabbit；若出现活动卡片，同时保存活动周期、续费价和适用账号条件。",
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
        "name": "月付参考档 1",
        "price": 20,
        "currency": "CNY",
        "period": "month",
        "trafficGB": 120,
        "trafficUnit": "GB",
        "verified": false,
        "notes": "第三方公开资料参考；未登录结算页核价，是否在售需确认。"
      },
      {
        "id": "month-2",
        "name": "月付参考档 2",
        "price": 40,
        "currency": "CNY",
        "period": "month",
        "trafficGB": 300,
        "trafficUnit": "GB",
        "verified": false,
        "notes": "第三方公开资料参考；未登录结算页核价，是否在售需确认。"
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
      "旧页面提及的一次性套餐可能已下架；本页没有沿用历史一次性包，也不把旧优惠条件当作现行规则。"
    ],
    "suitableFor": [
      "预算翻倍，标称容量增加 1.5 倍"
    ],
    "sources": [
      "https://jichang168.com/airports/u1s1/"
    ],
    "sourceNotes": "旧页面提及的一次性套餐可能已下架；本页没有沿用历史一次性包，也不把旧优惠条件当作现行规则。",
    "purchaseCheck": "优惠码必须按你提供的大小写 U1S1 输入；核对订单周期，并询问历史一次性包是否仍可购买。",
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
      "历史评测中的 hyperlink 品牌、协议和线路不能直接移植到当前入口；套餐、设备限制和性能均待该入口内确认。"
    ],
    "suitableFor": [
      "先确认同名服务，再谈套餐价值"
    ],
    "sources": [
      "https://kerrynotes.com/hyperlink-review/"
    ],
    "sourceNotes": "历史评测中的 hyperlink 品牌、协议和线路不能直接移植到当前入口；套餐、设备限制和性能均待该入口内确认。",
    "purchaseCheck": "向当前面板客服核对是否与 hyperlink 为同一服务，并索取当期套餐说明；关联未确认前不按旧价付款。",
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
        "name": "月付参考档 1",
        "price": 20,
        "currency": "CNY",
        "period": "month",
        "trafficGB": 120,
        "trafficUnit": "GB",
        "verified": false,
        "notes": "第三方公开资料参考；未登录结算页核价，是否在售需确认。"
      },
      {
        "id": "month-2",
        "name": "月付参考档 2",
        "price": 100,
        "currency": "CNY",
        "period": "month",
        "trafficGB": 700,
        "trafficUnit": "GB",
        "verified": false,
        "notes": "第三方公开资料参考；未登录结算页核价，是否在售需确认。"
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
      "“全球”是品牌名称，不构成节点覆盖全球的证据；本页未验证地区数量、线路和目标应用可用性。"
    ],
    "suitableFor": [
      "120GB 与 700GB，区分两种使用强度"
    ],
    "sources": [
      "https://jcnotes.com/airports/qqy/"
    ],
    "sourceNotes": "“全球”是品牌名称，不构成节点覆盖全球的证据；本页未验证地区数量、线路和目标应用可用性。",
    "purchaseCheck": "核对 qq88 的适用档位、付款周期与续费规则，并查看 700GB 是否存在节点倍率或每日限额。",
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
        "name": "月付参考档 1",
        "price": 18,
        "currency": "CNY",
        "period": "month",
        "trafficGB": 110,
        "trafficUnit": "GB",
        "verified": false,
        "notes": "第三方公开资料参考；未登录结算页核价，是否在售需确认。"
      },
      {
        "id": "month-2",
        "name": "月付参考档 2",
        "price": 34,
        "currency": "CNY",
        "period": "month",
        "trafficGB": 220,
        "trafficUnit": "GB",
        "verified": false,
        "notes": "第三方公开资料参考；未登录结算页核价，是否在售需确认。"
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
      "上述比较只按标称容量和未折扣价格计算，不含倍率、重置费或其他账户限制，不能视为实测可用流量成本。"
    ],
    "suitableFor": [
      "110GB 翻倍，比较升级差额"
    ],
    "sources": [
      "https://jichangtan.com/airports/guangnianti/"
    ],
    "sourceNotes": "上述比较只按标称容量和未折扣价格计算，不含倍率、重置费或其他账户限制，不能视为实测可用流量成本。",
    "purchaseCheck": "确认 18 元和 34 元分别为可按月付款的完整金额，并核对两档是否具有相同线路权限。",
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
        "name": "月付参考档 1",
        "price": 25,
        "currency": "CNY",
        "period": "month",
        "trafficGB": 120,
        "trafficUnit": "GiB",
        "verified": false,
        "notes": "第三方公开资料参考；未登录结算页核价，是否在售需确认。"
      },
      {
        "id": "month-2",
        "name": "月付参考档 2",
        "price": 45,
        "currency": "CNY",
        "period": "month",
        "trafficGB": 250,
        "trafficUnit": "GiB",
        "verified": false,
        "notes": "第三方公开资料参考；未登录结算页核价，是否在售需确认。"
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
      "相关介绍站的运营归属未确认，报价仅作同名公开资料参考；没有把介绍站标记为品牌官方站。"
    ],
    "suitableFor": [
      "先核对 GiB 单位，再比较容量"
    ],
    "sources": [
      "https://sogocloud.org/"
    ],
    "sourceNotes": "相关介绍站的运营归属未确认，报价仅作同名公开资料参考；没有把介绍站标记为品牌官方站。",
    "purchaseCheck": "到当前入口确认容量到底使用 GB 还是 GiB，核对客户端流量统计和后台扣量是否使用相同单位。",
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
    "recommendation": "宇宙云参考 25 元、120GB 与 50 元、240GB 两档的标价和容量同步翻倍。若当前用量不超过小档，高档没有仅凭规模就更划算的依据；选择它时可以把重点放在购买刚好够用的容量，控制每月闲置。",
    "whyChoose": "宇宙云参考 25 元、120GB 与 50 元、240GB 两档的标价和容量同步翻倍。若当前用量不超过小档，高档没有仅凭规模就更划算的依据；选择它时可以把重点放在购买刚好够用的容量，控制每月闲置。",
    "focus": "等比例容量，优先避免闲置",
    "affiliateUrl": "https://wzjc.yuzoucloud.cc/#/?code=wL7YStBa",
    "plans": [
      {
        "id": "month-1",
        "name": "月付参考档 1",
        "price": 25,
        "currency": "CNY",
        "period": "month",
        "trafficGB": 120,
        "trafficUnit": "GB",
        "verified": false,
        "notes": "第三方公开资料参考；未登录结算页核价，是否在售需确认。"
      },
      {
        "id": "month-2",
        "name": "月付参考档 2",
        "price": 50,
        "currency": "CNY",
        "period": "month",
        "trafficGB": 240,
        "trafficUnit": "GB",
        "verified": false,
        "notes": "第三方公开资料参考；未登录结算页核价，是否在售需确认。"
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
      "网上更低起价和其他容量版本并存；本页没有把旧小包作为当前保证，也没有核实不同时期线路是否相同。"
    ],
    "suitableFor": [
      "等比例容量，优先避免闲置"
    ],
    "sources": [
      "https://tizimy.org/tuijian/yuzhou/"
    ],
    "sourceNotes": "网上更低起价和其他容量版本并存；本页没有把旧小包作为当前保证，也没有核实不同时期线路是否相同。",
    "purchaseCheck": "先核对当前 120GB 与 240GB 价格，再检查升级是否按差价补款、剩余流量是否随升级作废。",
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
        "name": "月付参考档 1",
        "price": 20,
        "currency": "CNY",
        "period": "month",
        "trafficGB": 130,
        "trafficUnit": "GB",
        "verified": false,
        "notes": "第三方公开资料参考；未登录结算页核价，是否在售需确认。"
      },
      {
        "id": "month-2",
        "name": "月付参考档 2",
        "price": 40,
        "currency": "CNY",
        "period": "month",
        "trafficGB": 230,
        "trafficUnit": "GB",
        "verified": false,
        "notes": "第三方公开资料参考；未登录结算页核价，是否在售需确认。"
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
      "旧页面可能保留更小额度；本站采用本次来源的 130GB/230GB 版本，最终仍需核对当前卡片。"
    ],
    "suitableFor": [
      "130GB 小档，关注升级边际容量"
    ],
    "sources": [
      "https://fishnetwork.blog/providers/ermaoyun/"
    ],
    "sourceNotes": "旧页面可能保留更小额度；本站采用本次来源的 130GB/230GB 版本，最终仍需核对当前卡片。",
    "purchaseCheck": "重点确认 130GB 是否为现行小档，并检查第二档容量是否已调整；不要仅凭价格翻倍预期流量也翻倍。",
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
        "name": "月付参考档 1",
        "price": 20,
        "currency": "CNY",
        "period": "month",
        "trafficGB": 150,
        "trafficUnit": "GB",
        "verified": false,
        "notes": "第三方公开资料参考；未登录结算页核价，是否在售需确认。"
      },
      {
        "id": "month-2",
        "name": "月付参考档 2",
        "price": 35,
        "currency": "CNY",
        "period": "month",
        "trafficGB": 350,
        "trafficUnit": "GB",
        "verified": false,
        "notes": "第三方公开资料参考；未登录结算页核价，是否在售需确认。"
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
      "有来源提及停止向部分第三方客户端发放订阅，其他页面说法不同；本页不保证 Clash 或其他客户端兼容。"
    ],
    "suitableFor": [
      "350GB 中档与客户端兼容核对"
    ],
    "sources": [
      "https://www.jichangpk.com/providers/yifanyun/"
    ],
    "sourceNotes": "有来源提及停止向部分第三方客户端发放订阅，其他页面说法不同；本页不保证 Clash 或其他客户端兼容。",
    "purchaseCheck": "先向客服核对你的操作系统与现有客户端是否受支持，取得明确答复后再选择 150GB 或 350GB 档。",
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
    "description": "72GB 小档，匹配低用量需求",
    "recommendation": "边缘节点 EdgeNova 的参考小档是 15 元、72GB，适合已经知道自己不需要百 GB 月包的人。25 元、120GB 档提供扩展空间；两档标称容量与价格同比例变化，因此优先买够用的一档更有助于控制闲置。",
    "whyChoose": "边缘节点 EdgeNova 的参考小档是 15 元、72GB，适合已经知道自己不需要百 GB 月包的人。25 元、120GB 档提供扩展空间；两档标称容量与价格同比例变化，因此优先买够用的一档更有助于控制闲置。",
    "focus": "72GB 小档，匹配低用量需求",
    "affiliateUrl": "https://work.edgenovaaff.cc/#/?code=z81zCfw1",
    "plans": [
      {
        "id": "month-1",
        "name": "月付参考档 1",
        "price": 15,
        "currency": "CNY",
        "period": "month",
        "trafficGB": 72,
        "trafficUnit": "GB",
        "verified": false,
        "notes": "第三方公开资料参考；未登录结算页核价，是否在售需确认。"
      },
      {
        "id": "month-2",
        "name": "月付参考档 2",
        "price": 25,
        "currency": "CNY",
        "period": "month",
        "trafficGB": 120,
        "trafficUnit": "GB",
        "verified": false,
        "notes": "第三方公开资料参考；未登录结算页核价，是否在售需确认。"
      }
    ],
    "protocols": [],
    "regions": [],
    "aiSupport": [],
    "streamingSupport": [],
    "advantages": [
      "72GB 参考小档可用于低用量且希望按月控制预算的需求",
      "120GB 档保留按需扩容选择，无需先购买长周期"
    ],
    "disadvantages": [
      "资料中的小档可能属于体验档，是否限首购或续费需核对；未将体验价承诺为长期月费。"
    ],
    "suitableFor": [
      "72GB 小档，匹配低用量需求"
    ],
    "sources": [
      "https://jichangtan.com/airports/edgenova/"
    ],
    "sourceNotes": "资料中的小档可能属于体验档，是否限首购或续费需核对；未将体验价承诺为长期月费。",
    "purchaseCheck": "确认 72GB 档能否连续续费、是否限新账户，以及到期后剩余流量和套餐权限如何处理。",
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
        "name": "月付参考档 1",
        "price": 25,
        "currency": "CNY",
        "period": "month",
        "trafficGB": 150,
        "trafficUnit": "GB",
        "verified": false,
        "notes": "第三方公开资料参考；未登录结算页核价，是否在售需确认。"
      },
      {
        "id": "month-2",
        "name": "月付参考档 2",
        "price": 50,
        "currency": "CNY",
        "period": "month",
        "trafficGB": 300,
        "trafficUnit": "GB",
        "verified": false,
        "notes": "第三方公开资料参考；未登录结算页核价，是否在售需确认。"
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
      "早期资料出现 120GB 入门额度，也有订阅方式调整记录；本页保留 150GB 参考值，同时明确它未经当前结算页复核。"
    ],
    "suitableFor": [
      "150GB 与 300GB，先核对订阅方式"
    ],
    "sources": [
      "https://vpsknow.com/reviews/airports/kexinyun-airport-review/"
    ],
    "sourceNotes": "早期资料出现 120GB 入门额度，也有订阅方式调整记录；本页保留 150GB 参考值，同时明确它未经当前结算页复核。",
    "purchaseCheck": "核对当前入门额度是 120GB 还是 150GB，并确认能否向你使用的客户端提供有效订阅。",
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
        "name": "月付参考档 1",
        "price": 25,
        "currency": "CNY",
        "period": "month",
        "trafficGB": 120,
        "trafficUnit": "GB",
        "verified": false,
        "notes": "第三方公开资料参考；未登录结算页核价，是否在售需确认。"
      },
      {
        "id": "month-2",
        "name": "月付参考档 2",
        "price": 50,
        "currency": "CNY",
        "period": "month",
        "trafficGB": 250,
        "trafficUnit": "GB",
        "verified": false,
        "notes": "第三方公开资料参考；未登录结算页核价，是否在售需确认。"
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
      "历史资料中的试用和客户端支持未在当前入口核实；本页不提供免费试用保证，也不承诺节点数量。"
    ],
    "suitableFor": [
      "250GB 中档，给波动用量留余量"
    ],
    "sources": [
      "https://jichangwhite.cc/plans/sujie/"
    ],
    "sourceNotes": "历史资料中的试用和客户端支持未在当前入口核实；本页不提供免费试用保证，也不承诺节点数量。",
    "purchaseCheck": "核对 250GB 是否每账期重置、是否允许重置包，并先确认当前支持的系统与连接方式。",
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
        "name": "月付参考档 1",
        "price": 15,
        "currency": "CNY",
        "period": "month",
        "trafficGB": 50,
        "trafficUnit": "GB",
        "verified": false,
        "notes": "第三方公开资料参考；未登录结算页核价，是否在售需确认。"
      },
      {
        "id": "month-2",
        "name": "月付参考档 2",
        "price": 35,
        "currency": "CNY",
        "period": "month",
        "trafficGB": 250,
        "trafficUnit": "GB",
        "verified": false,
        "notes": "第三方公开资料参考；未登录结算页核价，是否在售需确认。"
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
      "这里展示两个选定档位，中间可能还有其他套餐；不能把跨度理解为必须一次升级到 250GB。"
    ],
    "suitableFor": [
      "50GB 轻量档与 250GB 跨档选择"
    ],
    "sources": [
      "https://jichangtan.com/airports/kuaili/"
    ],
    "sourceNotes": "这里展示两个选定档位，中间可能还有其他套餐；不能把跨度理解为必须一次升级到 250GB。",
    "purchaseCheck": "先查询是否仍有 100GB 等中间档，再按真实用量选择；核对 50GB 小档与 250GB 档的权限是否相同。",
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
        "name": "月付参考档 1",
        "price": 25,
        "currency": "CNY",
        "period": "month",
        "trafficGB": 150,
        "trafficUnit": "GB",
        "verified": false,
        "notes": "第三方公开资料参考；未登录结算页核价，是否在售需确认。"
      },
      {
        "id": "month-2",
        "name": "月付参考档 2",
        "price": 45,
        "currency": "CNY",
        "period": "month",
        "trafficGB": 300,
        "trafficUnit": "GB",
        "verified": false,
        "notes": "第三方公开资料参考；未登录结算页核价，是否在售需确认。"
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
      "一次性包不表示服务永久经营，也不表示每月补发 100GB；相关套餐当前是否在售尚未通过结算页确认。"
    ],
    "suitableFor": [
      "月付之外，核对低频一次性包"
    ],
    "sources": [
      "https://jichangtan.com/airports/firefly/"
    ],
    "sourceNotes": "一次性包不表示服务永久经营，也不表示每月补发 100GB；相关套餐当前是否在售尚未通过结算页确认。",
    "purchaseCheck": "优惠码为 firefly；如选择一次性包，核对到期规则、总量、重置条件，避免把一次性总量误认成月额度。",
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
        "notes": "第三方公开资料参考；未登录结算页核价，是否在售需确认。"
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
        "notes": "第三方公开资料参考；未登录结算页核价，是否在售需确认。"
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
      "不同来源对协议、设备数和第三方客户端支持相互矛盾；这些字段全部保留为尚未核实，不拼接成一套确定配置。"
    ],
    "suitableFor": [
      "Small 与 Big，关注周期总支出"
    ],
    "sources": [
      "https://jichangshice.com.cn/airports/lingmao/"
    ],
    "sourceNotes": "不同来源对协议、设备数和第三方客户端支持相互矛盾；这些字段全部保留为尚未核实，不拼接成一套确定配置。",
    "purchaseCheck": "先确认当前 Small/Big 额度，再询问长周期是否按月重置；没有提供该品牌优惠码，本站不会补入网上其他码。",
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
        "name": "月付参考档 1",
        "price": 24,
        "currency": "CNY",
        "period": "month",
        "trafficGB": 150,
        "trafficUnit": "GB",
        "verified": false,
        "notes": "第三方公开资料参考；未登录结算页核价，是否在售需确认。"
      },
      {
        "id": "month-2",
        "name": "月付参考档 2",
        "price": 44,
        "currency": "CNY",
        "period": "month",
        "trafficGB": 300,
        "trafficUnit": "GB",
        "verified": false,
        "notes": "第三方公开资料参考；未登录结算页核价，是否在售需确认。"
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
      "年付总价在不同页面有差异，本页只收录一致性较高的月付两档，不据此推算全年价格。"
    ],
    "suitableFor": [
      "150GB 与 300GB，比较可预期增支"
    ],
    "sources": [
      "https://www.clashwiki.blog/brands/flashleap/"
    ],
    "sourceNotes": "年付总价在不同页面有差异，本页只收录一致性较高的月付两档，不据此推算全年价格。",
    "purchaseCheck": "输入 shanyue 后核对实际总价，确认是否限首单；不要将低标价直接解释为游戏低延迟或长期稳定。",
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
        "name": "月付参考档 1",
        "price": 19,
        "currency": "CNY",
        "period": "month",
        "trafficGB": 100,
        "trafficUnit": "GB",
        "verified": false,
        "notes": "第三方公开资料参考；未登录结算页核价，是否在售需确认。"
      },
      {
        "id": "month-2",
        "name": "月付参考档 2",
        "price": 33,
        "currency": "CNY",
        "period": "month",
        "trafficGB": 200,
        "trafficUnit": "GB",
        "verified": false,
        "notes": "第三方公开资料参考；未登录结算页核价，是否在售需确认。"
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
      "网络资料对 wuyou666 的优惠比例和客户端兼容存在冲突，不能把任意一种说法当作已经验证。"
    ],
    "suitableFor": [
      "100GB 到 200GB，增加 14 元的容量选择"
    ],
    "sources": [
      "https://www.jichangnode.wiki/brands/worryfree/"
    ],
    "sourceNotes": "网络资料对 wuyou666 的优惠比例和客户端兼容存在冲突，不能把任意一种说法当作已经验证。",
    "purchaseCheck": "先问清 100GB 用完后的处理和补充包价格，再验证 wuyou666；如需通用订阅，付款前确认是否提供。",
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
        "name": "月付参考档 1",
        "price": 20,
        "currency": "CNY",
        "period": "month",
        "trafficGB": 120,
        "trafficUnit": "GB",
        "verified": false,
        "notes": "第三方公开资料参考；未登录结算页核价，是否在售需确认。"
      },
      {
        "id": "month-2",
        "name": "月付参考档 2",
        "price": 40,
        "currency": "CNY",
        "period": "month",
        "trafficGB": 330,
        "trafficUnit": "GB",
        "verified": false,
        "notes": "第三方公开资料参考；未登录结算页核价，是否在售需确认。"
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
      "来源对线路名称和第三方订阅方式有不同描述；未核实这些宣传，也未采纳网上另一个优惠码或券后价。"
    ],
    "suitableFor": [
      "330GB 中档，扩容与续费一起核对"
    ],
    "sources": [
      "https://www.clashmetahub.net/reviews/kuajie/"
    ],
    "sourceNotes": "来源对线路名称和第三方订阅方式有不同描述；未核实这些宣传，也未采纳网上另一个优惠码或券后价。",
    "purchaseCheck": "本次没有提供跨界云优惠码，本站仅保留原始推广链接；确认 330GB 当前标价与续费金额后再下单。",
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

import {airports,type Airport,type Plan} from "./airports";
export interface BrandEditorial {positioning:string;deck:string;audience:string;avoid:string;decision:string}
export const brandEditorial:Record<string,BrandEditorial>={
  "twilight": {
    "positioning": "两级月包，预算随用量平稳增长",
    "deck": "120GB 与 240GB 的两级方案，重点在于把月度预算与真实用量对应起来。",
    "audience": "希望先建立月用量记录、需求尚未达到大容量档的个人用户。",
    "avoid": "希望仅凭升级就获得更低标称单价，或依赖特定地区和应用保证的人。",
    "decision": "先判断 120GB 是否足够。两档价格与标称容量同步翻倍，容量闲置时升级不会自动提高预算效率。"
  },
  "invisible": {
    "positioning": "以 144GB 为边界做精确预算",
    "deck": "适合把月用量细化到百 GB 附近，核对额度与账单，而非只看整数容量。",
    "audience": "每月用量接近 120GB、需要一点余量并且希望保留月付选择的人。",
    "avoid": "已经需要数百 GB 容量，或需要明确多设备并发承诺的人。",
    "decision": "以 144GB 作为本页的参考边界；超过这个水平时，应先查询当前更高档位，而不是用年付小包补足月用量。"
  },
  "lingdong": {
    "positioning": "从小包跨到中等容量的预算选择",
    "deck": "100GB 与 300GB 两档之间的跨度，适合需求正在增长的用户比较升级成本。",
    "audience": "小包逐渐不够、准备把月度容量提高到 200GB 至 300GB 左右的人。",
    "avoid": "月用量长期低于 100GB，却只是因为“大包看起来划算”准备升级的人。",
    "decision": "从 100GB 升到 300GB，参考月费增加 30 元。先确认每月新增的消耗，再判断额外容量是否值得这笔支出。"
  },
  "laddercloud": {
    "positioning": "小档留余量，中档承接用量增长",
    "deck": "125GB 与 350GB 的参考档位，提供介于常见容量档之间的选择空间。",
    "audience": "已有百 GB 左右用量、希望给软件更新和偶发下载留出余量的人。",
    "avoid": "需要把 350GB 当作多人并发能力证明，或认为容量等同于带宽的人。",
    "decision": "以自己的高消耗月份作基准。125GB 小档更适合控制首次支出，350GB 档应在需求超过小档后单独评估。"
  },
  "flyv": {
    "positioning": "用 380GB 中档承接日常高消耗",
    "deck": "与 150GB 小档相比，380GB 中档的容量跨度更适合用量已经形成规律的人。",
    "audience": "每月用量接近 300GB，希望在固定预算内留出一定容量余量的人。",
    "avoid": "仅需几十 GB、或把“飞V”与 Firefly 当成同一品牌来使用账户和优惠码的人。",
    "decision": "比较 25 元小档与 50 元中档时，关注增加的 230GB 能否被使用；是否提供相同节点权限还要单独核对。"
  },
  "wavenet": {
    "positioning": "从入门月付扩展到大容量",
    "deck": "30 元、150GB 是本页收录的入门参考档；120 元对应 800GB 高档，四档用途分别说明。",
    "audience": "想先用 150GB 月包验证需求，以后可能扩展到 400GB、800GB 或 2000GB 的人。",
    "avoid": "把首页某个高容量档价格理解为最低起价，或需要已经确认的独享线路与并发保障的人。",
    "decision": "先从入门档判断够不够用，再跨档比较。70 元档有 400GB 与 450GB 两种额度版本，结账时需重点确认。"
  },
  "flycat": {
    "positioning": "用较小增支换取一倍标称容量",
    "deck": "150GB 与 300GB 的月包，适合经常接近小档上限的人计算升级差额。",
    "audience": "月用量经常超过 150GB、希望控制在四十多元参考月费内的人。",
    "avoid": "准备因为优惠码名称或年付摊销价而直接购买最长周期的人。",
    "decision": "先确认当前还能否领取所需通用订阅，再核对flycat888是否有效。25元150GB与45元300GB仅作预算参考，客户端不匹配时容量差额没有意义。"
  },
  "dalaocloud": {
    "positioning": "小档额度先澄清，再谈预算价值",
    "deck": "19.99 元小档的 100GB / 120GB 描述存在冲突，额度一致性是这家的首要核对项。",
    "audience": "愿意先把套餐卡片、说明与后台额度问清楚，再以短期方案评估的人。",
    "avoid": "不能接受购买前额度不明确，或希望仅凭较低标价立即完成长期付款的人。",
    "decision": "先消除小档描述冲突，再比较 43 元、300GB 档。价格可以精确到小数，到账容量也应同样明确。"
  },
  "breezenet": {
    "positioning": "200GB 起步，服务中等用量预算",
    "deck": "200GB 与 500GB 两档适合已知百 GB 小包不足、且希望按月安排预算的人。",
    "audience": "日常消耗已超过常见 100GB 小包，并需要为集中下载留出扩容选项的人。",
    "avoid": "月用量很低却为了较大流量购买更多额度，或把 weifeng90 直接理解成固定折扣的人。",
    "decision": "先确认200GB是否足够，再核对500GB档增支。weifeng90已知历史条款截至2026-08-31，不把未证实延期的七折写入预算。"
  },
  "stardream": {
    "positioning": "把日常月份与集中下载月份分开规划",
    "deck": "150GB 与 500GB 的参考容量，可以分别用于日常预算和高消耗月份的扩容核对。",
    "audience": "大部分月份消耗适中，但偶尔会有软件更新、文件传输等集中用量的人。",
    "avoid": "希望把一次性包的总量反复当成每月额度，或需要容量自动结转保证的人。",
    "decision": "不要只比较 25 元和 70 元。先询问能否按差价升级、何时生效、剩余流量如何处理，再决定高消耗月份的方案。"
  },
  "lightspeed": {
    "positioning": "先核对容量版本，再控制升级预算",
    "deck": "参考月费为23元与34元，但容量存在138/148G、220/238G差异，先统一版本再比较。",
    "audience": "月用量略超百 GB、不希望直接购买 500GB 大包的人。",
    "avoid": "用旧版 17 元价格搭配新版容量，或把“光速”名称当作速度证明的人。",
    "decision": "先确认当前两档额度。原138GB到220GB增加82GB，另一版本148G到238G增加90G；不能跨版本计算扩容收益。"
  },
  "v2yun": {
    "positioning": "以常规月付建立预算，活动价另核对",
    "deck": "本页采用 19.9 元、150GB 常规档作参考，把限时小档与长期预算分开处理。",
    "audience": "希望以常规月付做预算，再在结账时核对 rabbit 是否适用的人。",
    "avoid": "只有活动价才能满足预算，却没有确认活动有效期与续费总额的人。",
    "decision": "如果看到 14.9 元等活动方案，先把首期价、下一期价格和适用账户写在一起，再与常规档比较。"
  },
  "u1s1": {
    "positioning": "中档容量增幅大于费用增幅",
    "deck": "120GB 到 300GB 的结构，适合小档开始吃紧、但仍希望逐月控制投入的人。",
    "audience": "用量超过 120GB，并且能够用掉新增容量、预算在 40 元附近的人。",
    "avoid": "希望购买旧文章中的一次性包，却未确认当前是否仍在售的人。",
    "decision": "升档多付 20 元，增加 180GB 标称容量。先核对是否可以续用现有账户与相同连接方式，再比较扩容收益。"
  },
  "jilian": {
    "positioning": "先核对服务归属，再引用历史套餐",
    "deck": "当前入口与早期 hyperlink 同名资料的关联尚不明确，因此本页不列旧价格。",
    "audience": "愿意先向当前面板核对品牌主体、账户体系和当期价目表的人。",
    "avoid": "准备直接依据旧域名、旧协议或旧价目表付款，且无法得到当前面板确认的人。",
    "decision": "把当前服务与历史同名服务区分开。未取得关联证据前，报价、客户端和线路都应从当前入口重新确认。"
  },
  "globalcloud": {
    "positioning": "轻量日常与较高用量分别定预算",
    "deck": "120GB 小档与 700GB 高档提供两种使用强度参照，选择应由月度消耗决定。",
    "audience": "日常需求清晰，或已经确定有持续较高月用量、希望分别核算预算的人。",
    "avoid": "把“全球”理解为已经确认的节点覆盖范围，或为未使用的高容量提前付款的人。",
    "decision": "从 20 元到 100 元是每月增加 80 元的承诺。只有较高容量确实会被用到，才值得将高档作为长期预算。"
  },
  "lightyear": {
    "positioning": "容量翻倍时，明确比较升级差额",
    "deck": "110GB 到 220GB 的两档结构，便于接近小档上限的用户判断增支是否合理。",
    "audience": "月用量接近 110GB，且希望在三十多元参考月费内安排容量的人。",
    "avoid": "需要通过最低单价判断线路质量，或需要明确目标应用保证的人。",
    "decision": "220GB 档参考价比两份 110GB 小档合计少 2 元；这个比较仅说明标价结构，不能替代倍率与权限核查。"
  },
  "sogoyun": {
    "positioning": "先统一容量单位，再横向比较",
    "deck": "资料使用 GiB 而不是 GB；保持原始单位比直接比较容量数字更重要。",
    "audience": "愿意核对容量统计口径、后台扣量与客户端用量是否一致的人。",
    "avoid": "打算直接把 120GiB 与其他品牌 120GB 视为同一容量，或需要已确认运营归属的人。",
    "decision": "本页保留 120GiB、250GiB 两档原单位，不默认为 GB。对比时先确认面板口径，避免在单位不同的表格中计算排名。"
  },
  "yuzhou": {
    "positioning": "等比例月包，优先买够用的容量",
    "deck": "原参考120GB/240GB与另一160GB/300GB版本不同；先确认当前额度，再判断是否值得增加月费。",
    "audience": "用量大致可预测，且偏好按月决定是否继续投入的人。",
    "avoid": "默认认为容量翻倍就会降低标称单价，或仅凭低月均价准备长期预付的人。",
    "decision": "原120GB/240GB版本费用与容量同比增长；另一版本并非相同比例。以当前套餐页为准，不把跨版本数字拼成升级收益。"
  },
  "2mao": {
    "positioning": "先用好小档，再看升级的边际容量",
    "deck": "130GB 到 230GB 并非容量翻倍，判断增支时需要看实际新增的 100GB。",
    "audience": "用量略高于 100GB，想先用较小预算验证 130GB 是否够用的人。",
    "avoid": "把价格翻倍直接理解为容量翻倍，或未查看新旧套餐版本就付款的人。",
    "decision": "40 元档比 20 元档多 100GB 标称容量。只有小档确实不足时，才应把新增支出与其他容量选择一起核算。"
  },
  "1fly": {
    "positioning": "先确认客户端，再评估中档扩容",
    "deck": "150GB 到 350GB 的升级增支较清晰，但订阅发放方式是付款前的重要前提。",
    "audience": "需要约三百 GB 月容量，并愿意先确认设备与现有客户端支持情况的人。",
    "avoid": "依赖某个第三方客户端，却尚未确认当前是否还能获得匹配订阅的人。",
    "decision": "先问清自己的系统能否使用，再看增加 15 元、获得额外 200GB 标称容量的中档是否合适。"
  },
  "edgenova": {
    "positioning": "低用量体验档，先澄清额度与续费",
    "deck": "15元档有55GB与72GB两种记录；能否覆盖需求，要以当前面板额度和首购条件为前提。",
    "audience": "低频访问、月消耗较少，并希望用月付控制第一次支出的人。",
    "avoid": "需要把体验价当成长期续费价，或日常消耗已经明显超过 72GB 的人。",
    "decision": "先问清体验档实际额度与续费价格。72GB到120GB的同比例比较只适用于原参考版本，不能套到55GB版本。"
  },
  "kosing": {
    "positioning": "容量之外，优先核对订阅获取方式",
    "deck": "150GB 与 300GB 的预算关系清楚，但旧容量版本和客户端支持仍需逐项确认。",
    "audience": "月消耗稳定、愿意把当前容量与连接方式核对完整后再付款的人。",
    "avoid": "依赖旧资料中的 120GB 说明或第三方客户端承诺，却没有核对当前面板的人。",
    "decision": "两档价格和容量同步翻倍。选择前先确认入门额度版本，以及当前能否提供你的客户端需要的配置。"
  },
  "sujie": {
    "positioning": "给两百 GB 左右用量留出容量余量",
    "deck": "250GB 中档可供月消耗在 200GB 左右的人安排预算，品牌名称不构成性能结论。",
    "audience": "需要为不规律下载留出一点容量，同时希望继续按月付费的人。",
    "avoid": "只因名称带“速”就期待低延迟，或把旧文章提到的试用当作当前权益的人。",
    "decision": "比较 120GB 与 250GB 时，先询问用完后的重置和补充流量规则，再决定是否提前选择中档。"
  },
  "kuaili": {
    "positioning": "轻量档与中档，按实际消耗跨档",
    "deck": "50GB 与 250GB 面向不同用量；较大容量的预算结构只有在实际使用时才有价值。",
    "audience": "需求已经从低频访问增长到持续使用，想重新核对容量档位的人。",
    "avoid": "用量长期低于 50GB，却为较低标称单位费用直接购买 250GB 的人。",
    "decision": "资料另列22元100GB中间档，应连同15元50GB和35元250GB向当前面板核对；本页精选两档不代表只有两种选择。"
  },
  "firefly": {
    "positioning": "月付常用与低频备用分开评估",
    "deck": "月包适合持续消耗；资料中的一次性包只作为另一种付费形态线索，不等于永久服务。",
    "audience": "希望把日常月付需求与偶发备用需求分开比较的人。",
    "avoid": "把一次性包解释为每月补发额度，或把 Firefly 与飞V共用账户、优惠码的人。",
    "decision": "先确认主要需求是否每月持续发生。只有在当前一次性包仍在售、有效期明确时，才与月付比较总支出。"
  },
  "civet": {
    "positioning": "先按 Small / Big 选容量，再选周期",
    "deck": "150GB 与 300GB 两级月包适合稳定用量，长周期优惠必须与预付总额一起核对。",
    "audience": "已形成固定月度消耗、准备在短期体验后比较不同付款周期的人。",
    "avoid": "设备与协议要求很具体，却只依据尚未统一的使用条件决定长期付款的人。",
    "decision": "先确定 Small 或 Big 的容量，再核对季付、年付的重置方式。月均更低不等于可以逐月支付。"
  },
  "flashleap": {
    "positioning": "四十多元月预算下的 300GB 参照",
    "deck": "150GB 与 300GB 的差额明确，可以先用自己的容量需求判断升级，而不是从名称推测体验。",
    "audience": "需求接近 300GB，希望将参考月费安排在 44 元附近的人。",
    "avoid": "需要明确游戏低延迟保证，或准备直接使用尚未统一的年付总价进行付款的人。",
    "decision": "从 24 元升到 44 元，容量翻倍而增支为 20 元；确认 shanyue 生效条件后，再按实际订单比较。"
  },
  "worryfree": {
    "positioning": "先比较升档与补充流量的费用",
    "deck": "100GB 到 200GB 增支 14 元，适合经常略超小档的人把两种处理方式放在一起看。",
    "audience": "月用量接近或略超 100GB，愿意同时核对升档和补充流量规则的人。",
    "avoid": "把“无忧”理解为无故障保证，或未确认订阅方式就依赖已有客户端的人。",
    "decision": "询问小档用完后的处理，再把重置包价格与 14 元升档差额比较。wuyou666 是否适用只看当前订单提示。"
  },
  "kuajie": {
    "positioning": "三百 GB 中档，关注扩容和续费",
    "deck": "330GB 档适合稳定超过小档的人，容量跨度与续费总额应同时确认。",
    "audience": "月需求在三百 GB 左右，且希望用 40 元参考月费核算预算的人。",
    "avoid": "依赖某条专线或通用订阅承诺，却未在当前面板确认的人。",
    "decision": "40 元档的标称容量是 120GB 小档的 2.75 倍；先核对权限、倍率和续费金额，再判断这次扩容是否合适。"
  }
};
export function planTradeoff(a:Airport){const [p,q]=a.plans;if(!p)return '当前入口与同名历史服务的关联未确认，暂不引用历史报价；需要从当前面板重新核对套餐。';if(!q)return `本页仅收录 ${p.price} 元、${p.trafficGB} ${p.trafficUnit??'GB'} 的月付参考档，不能据此判断完整套餐范围或最高容量。`;const extra=Math.round((q.price-p.price)*100)/100;const capacity=(q.trafficGB??0)-(p.trafficGB??0);return `从本页第一档升到第二档，参考月费增加 ${extra} 元，标称容量增加 ${capacity} ${q.trafficUnit??'GB'}。应把这笔固定增支与每月实际新增需求对照，不能只根据大包的容量数字决定。`;}
export function matchingPlan(a:Airport,need:number):Plan|undefined{return a.plans.filter(p=>p.period==='month'&&p.trafficGB!==undefined&&p.trafficGB>=need).sort((p,q)=>p.price-q.price)[0]}
export function nearbyBrands(a:Airport){const p=a.plans[0];if(!p)return airports.filter(b=>['twilight','lightyear'].includes(b.slug));return airports.filter(b=>b.slug!==a.slug&&b.plans[0]?.trafficUnit===p.trafficUnit).sort((b,c)=>Math.abs(b.plans[0].price-p.price)-Math.abs(c.plans[0].price-p.price)||b.order-c.order).slice(0,2)}
export function peerTradeoff(a:Airport,b:Airport):string {
 const p=a.plans[0],q=b.plans[0];
 if(!p||!q)return '当前资料不足以比较两家的预算差异；先分别确认服务归属与当期价目表。';
 if(p.currency!==q.currency||p.period!==q.period||p.trafficUnit!==q.trafficUnit||p.trafficGB===undefined||q.trafficGB===undefined)return '币种、周期或容量口径尚未统一，先核对条件再比较差额。';
 const delta=Math.round((q.price-p.price)*100)/100,capacity=q.trafficGB-p.trafficGB;
 const money=delta===0?'参考月费相同':delta>0?`参考月费多 ${delta} 元`:`参考月费少 ${-delta} 元`;
 const quota=capacity===0?'标称容量相同':capacity>0?`标称容量多 ${capacity} ${p.trafficUnit??'GB'}`:`标称容量少 ${-capacity} ${p.trafficUnit??'GB'}`;
 return `按两家已收录首档比较，${b.name}相对${a.name}：${money}，${quota}。这是参考档位的算术差异；套餐权限、倍率与当前在售条件需要分别确认。`;
}

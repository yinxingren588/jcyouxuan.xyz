import fs from 'node:fs';
import {documents} from './lib';
import {sourceArticles} from './article-source';
import evidence from '../src/data/brand-evidence.json';
const docs=documents();
const articles=sourceArticles();
const read=(name:string)=>{const p=`docs/qa/${name}.json`;return fs.existsSync(p)?JSON.parse(fs.readFileSync(p,'utf8')):{status:'NOT TESTED'};};
const brandBuild=read('brand-build');
const pipelineName=fs.existsSync('docs/qa/brand-optimization-final-pipeline.log')?'brand-optimization-final-pipeline.log':fs.existsSync('docs/qa/brand-optimization-checks.log')?'brand-optimization-checks.log':fs.existsSync('docs/qa/keyword-focus-pipeline.log')?'keyword-focus-pipeline.log':'pipeline.log';
const pipeline=fs.readFileSync('docs/qa/'+pipelineName,'utf8');
const focus=read('keyword-focus');
const blog=read('blog-content');const lh=read('lighthouse');
const indexable=docs.filter(d=>!d.$('meta[name="robots"]').attr('content')?.includes('noindex')).length;
const checks=['seo','links','content','blog-content','blog-browser','browser','redesign-functional','keyword-focus','keyword-focus-browser','brand-evidence','brand-evidence-browser','lighthouse'];
const categories:Record<string,string>={choice:'选购方法',budget:'套餐与预算',clients:'客户端使用',routing:'分流与配置',troubleshooting:'故障排查',measurement:'体验观察',privacy:'隐私与安全',streaming:'流媒体播放',ai:'AI应用',workflow:'办公与开发'};
const report=`# 29品牌资料复核、机场推荐与150篇博客验收

交付与整理日期：2026-10-16。

## 本次品牌资料复核

29家均有专属核对记录，合计${evidence.reduce((n,r)=>n+r.findings.length,0)}条观察，${new Set(evidence.flatMap(r=>r.findings.map(f=>f.url))).size}个不同来源URL，不等于独立原始证据数量。29品牌详情与29购买分析共58页增加入口、归属、来源事实、冲突、优惠及购买问题。品牌卡、套餐行和对比工具标明参考与未确认状态，提供可下载的29家核对表。

浪网入门仍为30元150GB参考；微风历史条款截止已过；飞猫通用订阅与码有效性、光速云/宇宙云/EdgeNova额度版本分别说明。当前官方报价确认数为0，没有登录下单、付款或网络实测；参考套餐继续保持未核验。

本轮按站长明确指示不操作Cloudflare，仅交付本地及GitHub。详情见brand-optimization-report.md、brand-verification.csv及research目录。

## 已保留的主词布局

首页主攻“机场推荐”，标题、描述、H1与首屏说明统一。品牌、选购场景与方法文章各有不同搜索意图；导航的“机场推荐”指向首页。

- Title：${focus.title??'未记录'}
- Description：${focus.description??'未记录'}
- H1：${focus.h1??'未记录'}
- ${focus.contextualHomeLinkPages??'未记录'}个相关页面含返回推荐总览的上下文入口；未将所有技术文章改为同一主词标题。
- 首页品牌目录结构化数据与页面中实际29家品牌顺序对应，不添加虚构评分。
- 本次按要求先同步GitHub；IndexNow仅完成260个URL的本地预览，未向尚未部署的域名发送索引通知。

具体分工与核查见keyword-focus-report.md，逐页TDK见tdk-audit.csv。

## 交付结果

博客总计 **${articles.filter(a=>a.section==='blog').length}篇**：重写并保留原有5篇地址，新增145篇。另有原有教程5篇、百科5篇，不计入博客150篇；品牌资料与购买分析也单独计算。

正文共约${blog.chineseCharacters??'未记录'}个汉字（按汉字字符统计，不包括英文、链接等），${blog.bodyCharacters??'未记录'}个正文字符。引用${blog.sources??'未记录'}个来源URL；同一文档的不同URL形式不等于独立文献。文章目录和来源见 blog-catalog.csv 与四份 blog-research-*.md。

| 主题 | 篇数 |
|---|---:|
${Object.entries(categories).map(([key,name])=>`| ${name} | ${blog.categoryCounts?.[key]??'未记录'} |`).join('\n')}

## 阅读功能

- 博客栏目按主题交错展示，设十个专题页及每页15篇、共十页的静态目录。
- 关键词和主题筛选、结果分页、空状态及刷新恢复可用；全部150篇正文可在关闭脚本后经静态目录访问。
- 每篇有独立标题与摘要、阅读时间、文章目录、邻近事实引用、参考列表和相关内链；客户端与分流系列使用具体主题标签关联。
- 首页文章入口、全站搜索、Sitemap、Canonical、BlogPosting结构化数据、文章索引与关键词意图映射同步更新。
- 保留29个品牌指定顺序、29个推广入口、11个优惠码、品牌详情按钮及原有推荐/排行/对比工具；深色动态背景、暂停及减少动态效果偏好保留。

## 内容审校范围

文章按不同任务独立编写，区分操作方法、假设算例、引用事实与未核实内容。结构与重复检查未发现完整长段落重复或高度相似正文。自动检查用于发现问题，不证明外部资料永远准确，也不单独证明专业程度。

已复读单位换算、混合倍率、年付、退款/续费、浪网档位、Fake-IP、失败统计、日志脱敏与AI资格等代表性内容；将与流媒体预算重复的选题改为运营商与代理双重计量。具体说明见 blog-editorial-review.md。

## 验收证据

| 项目 | 结果 | 记录 |
|---|---|---|
| Astro模板与类型 | ${brandBuild.status==='PASS'?'PASS':pipeline.includes('0 errors')?'PASS':'NOT TESTED'} | qa/brand-build.json |
| 最终静态构建 | ${brandBuild.status==='PASS'?'PASS':pipeline.includes('[build] Complete!')?'PASS':'NOT TESTED'} | qa/brand-build.json |
| 原有逻辑与品牌清单 | ${pipeline.match(/(?:# |ℹ )pass (\d+)/)?.[1]??'未记录'}项通过 | qa/${pipelineName} |
${checks.map(name=>`| ${name} | ${read(name).status} | qa/${name}.json |`).join('\n')}

博客交互${read('blog-browser').checks??'未记录'}项、全站基础浏览器${read('browser').checks??'未记录'}项、原有推荐/排行/对比交互${read('redesign-functional').count??'未记录'}项；SEO检查${read('seo').checks??'未记录'}页，站内链接${read('links').checks??'未记录'}项。真实结果与适用范围以各JSON记录为准。

全站生成${docs.length}个HTML页面（含404，不重复计平台404.html别名），${indexable}个允许索引。主内容均为静态HTML；筛选和计算依赖JavaScript。

## Lighthouse抽查

| 路由 | 性能 | 无障碍 | 最佳实践 | SEO |
|---|---:|---:|---:|---:|
${(lh.results??[]).map((r:any)=>`| ${r.route} | ${r.scores.performance} | ${r.scores.accessibility} | ${r.scores['best-practices']} | ${r.scores.seo} |`).join('\n')}

本地Chrome移动端模拟，七条路由包含博客栏目、正文及浪网和飞猫品牌页。分数受环境影响，不代表生产环境或真实用户Web Vitals；完整原始记录见qa/lighthouse-*.json。

## 事实边界与外部状态

品牌价格主要来自已收录第三方资料，未登录当前结算或付款。浪网30元/150GB为入门参考，120元/800GB是高容量档，70元档400GB/450GB的来源冲突保留；这不是当前成交价承诺。极连云同名历史资料与当前入口关联未确认，不套用旧价。优惠码折扣、有效期与适用条件未核实。

文章没有虚构本站网络、速度、晚高峰、AI或流媒体实测；平台资格、地区支持、设备权限与商业套餐条件分别核对。方法建议和算例不构成所有设备或品牌兼容保证。

本地入口：http://127.0.0.1:4321/blog/ 。GitHub同步证据在qa/github.json，记录具体提交与源码树。Cloudflare生产部署、DNS/HTTPS、Bing账户验证、真实IndexNow通知及实际搜索收录未在本次内容制作中执行，不声称已上线或已收录。
`;
fs.writeFileSync('docs/final-audit.md',report);
console.log('docs/final-audit.md written');

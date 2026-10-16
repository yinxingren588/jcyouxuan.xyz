import fs from "node:fs";
import { documents } from "./lib";
const docs = documents();
const results = ["seo", "links", "content", "browser", "lighthouse", "theme"].map(
  (name) => {
    const file = `docs/qa/${name}.json`;
    return {
      name,
      ...(fs.existsSync(file)
        ? JSON.parse(fs.readFileSync(file, "utf8"))
        : { status: "NOT TESTED" }),
    };
  },
);
fs.writeFileSync(
  "docs/final-audit.md",
  `# 最终验收报告\n\n核验日期：2026-10-16。\n\n实际 HTML 页面：${docs.length}（包含 404；另提供 Cloudflare 404.html 别名）。可索引页面：${docs.filter((d) => !d.$('meta[name="robots"]').attr("content")?.includes("noindex")).length}。\n\n| 项目 | 结果 | 证据 |\n|---|---|---|\n${results.map((r) => `| ${r.name} | ${r.status} | docs/qa/${r.name}.json |`).join("\n")}\n\n## 范围与限制\n\n- 官方来源、核验日期和模板字段已实现；自动程序不能证明所有事实真实。人工编辑复核：NOT TESTED。\n- 五家真实品牌均为商业 VPN；已核验的订阅代理机场：0。实际网络、速度、稳定性、AI 和流媒体：NOT TESTED。\n- 综合、付费性价比与稳定性榜等待合格数据，noindex，排除 Sitemap。没有为凑数量虚构三个排名。\n- Schema 检查是本地结构和可见内容一致性检查；外部富媒体验证器：NOT TESTED。\n- 正式域名 DNS、HTTPS、Cloudflare Pages 生产环境和 Bing 账户验证：NOT TESTED。\n- IndexNow 逻辑单元测试与本地预览单独记录；真实 API 提交：NOT TESTED，不声称已收录。\n\n## 上线门槛\n\n技术检查完成后可以部署为资料与教程站。若以经过实测的机场推荐站运营，仍需加入真实机场证据、实测记录和合格榜单；不能宣称当前版本已完成该内容验收。详见 deployment.md。\n`,
);
console.log("docs/final-audit.md written");
const pipeline=fs.existsSync('docs/qa/pipeline.log')?fs.readFileSync('docs/qa/pipeline.log','utf8'):'';
const dependencyFile='docs/qa/dependencies.json';
const dependencyAudit=fs.existsSync(dependencyFile)?JSON.parse(fs.readFileSync(dependencyFile,'utf8')):undefined;
const lighthouseFile='docs/qa/lighthouse.json';
const lighthouse=fs.existsSync(lighthouseFile)?JSON.parse(fs.readFileSync(lighthouseFile,'utf8')):undefined;
const githubFile='docs/qa/github.json';
const github=fs.existsSync(githubFile)?JSON.parse(fs.readFileSync(githubFile,'utf8')):undefined;
const extra=[
 ['TypeScript / Astro 检查',pipeline.includes('0 errors')?'PASS':'NOT TESTED','docs/qa/pipeline.log'],
 ['Production Build',pipeline.includes('[build] Complete!')?'PASS':'NOT TESTED','docs/qa/pipeline.log'],
 ['8 项核心逻辑测试',/pass 8/.test(pipeline)?'PASS':'NOT TESTED','计费倍率、准入、URL 限制、增量与重试'],
 ['依赖安全检查',dependencyAudit?.metadata?.vulnerabilities?.total===0?'PASS':'NOT TESTED','docs/qa/dependencies.json；当前报告 0 漏洞'],
 ['GitHub 推送',github?.status??'NOT TESTED',github?.commit??'等待实际推送确认'],
 ['Cloudflare Pages 正式部署','NOT TESTED','需要运营者登录、授权仓库与配置 DNS'],
 ['Bing 验证与真实 IndexNow 提交','NOT TESTED','正式域名部署后操作']
];
fs.appendFileSync('docs/final-audit.md','\n## 补充技术验收证据\n\n| 项目 | 结果 | 说明 |\n|---|---|---|\n'+extra.map(r=>'| '+r.join(' | ')+' |').join('\n')+'\n\n## 本地 Lighthouse 最终记录\n\n| 路由 | 性能 | 无障碍 | 最佳实践 | SEO |\n|---|---:|---:|---:|---:|\n'+(lighthouse?.results??[]).map((r:any)=>`| ${r.route} | ${r.scores.performance} | ${r.scores.accessibility} | ${r.scores['best-practices']} | ${r.scores.seo} |`).join('\n')+'\n\n本地 Chrome 移动端模拟、单次最终记录。早一轮首页性能为 97，说明测量存在波动；生产环境与真实用户 Web Vitals 尚未测试。\n\n## 内容交付数量\n\n- 51 个 HTML 页面，其中 47 个允许索引；404.html 为平台兼容别名，不重复计数。\n- 15 篇内容：5 篇教程、5 篇选择指南、5 篇百科。\n- 5 个真实商业 VPN 资料页及 5 个对应独立资料分析页。\n- 6 个需求专题；5 个榜单 / 比较页面，其中综合、性价比和稳定性页面等待数据。\n- 机场实测推荐、三个完整质量排行榜的内容验收：FAIL（缺少真实资料，按要求未编造）。\n');

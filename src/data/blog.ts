import type {CollectionEntry} from 'astro:content';
export type Article=CollectionEntry<'articles'>;
export const blogPageSize=15;
export const blogCategories=[
  {id:'choice',name:'选购方法',intro:'从需求、设备和证据出发，建立自己的选择标准。',icon:'01'},
  {id:'budget',name:'套餐与预算',intro:'看懂周期、额度、倍率和续费，算清真正需要支付的费用。',icon:'02'},
  {id:'clients',name:'客户端使用',intro:'安装、导入、升级和恢复，按设备完成可靠的连接流程。',icon:'03'},
  {id:'routing',name:'分流与配置',intro:'理解规则、策略组和 DNS，让设置与实际任务相符。',icon:'04'},
  {id:'troubleshooting',name:'故障排查',intro:'从可观察的症状逐层定位，保留证据与恢复路径。',icon:'05'},
  {id:'measurement',name:'体验观察',intro:'区分速度、延迟和任务完成率，形成可复查的观察记录。',icon:'06'},
  {id:'privacy',name:'隐私与安全',intro:'保护订阅、账户和日志，管理应用权限与敏感信息。',icon:'07'},
  {id:'streaming',name:'流媒体播放',intro:'核对画质、设备、流量和平台限制，定位真实播放问题。',icon:'08'},
  {id:'ai',name:'AI 应用',intro:'分别检查产品权限、服务状态和请求行为，理解连接边界。',icon:'09'},
  {id:'workflow',name:'办公与开发',intro:'处理代码、会议、下载和同步中的具体网络需求。',icon:'10'},
] as const;
export function sortBlogs(articles:Article[]){
 const ordered=articles.filter(a=>a.data.section==='blog').sort((a,b)=>(a.data.order??9999)-(b.data.order??9999)||a.data.title.localeCompare(b.data.title,'zh'));
 const groups=blogCategories.map(c=>ordered.filter(a=>a.data.category===c.id));
 const result:Article[]=[];
 for(let row=0;row<Math.max(0,...groups.map(g=>g.length));row++)for(const group of groups)if(group[row])result.push(group[row]);
 return [...result,...ordered.filter(a=>!a.data.category)];
}
export function readingMinutes(body:string|undefined){return Math.max(2,Math.ceil((body?.replace(/https?:\/\/\S+/g,'').length??0)/350));}
export function blogArchivePages(articles:Article[]){const blogs=sortBlogs(articles);return [
  ...Array.from({length:Math.max(0,Math.ceil(blogs.length/blogPageSize)-1)},(_,i)=>({path:`blog/page/${i+2}`,title:`博客资讯 · 第 ${i+2} 页`,description:`浏览博客资讯第 ${i+2} 页，查看选购、套餐、设备、网络排查及应用场景文章；每篇均附参考资料与适用范围。`,type:'blog',key:String(i+2),parent:'blog'})),
  ...blogCategories.map(c=>({path:`blog/category/${c.id}`,title:`${c.name}文章与实用指南`,description:`${c.intro}集中阅读本专题的操作方法、具体示例和核查清单，按问题继续深入。`,type:'blog',key:c.id,parent:'blog'}))
];}
export function relatedArticles(article:Article,articles:Article[]){return articles.filter(a=>a.id!==article.id).map(a=>({a,score:a.data.tags.filter(t=>article.data.tags.includes(t)).length*3+(a.data.category&&a.data.category===article.data.category?2:0)})).filter(x=>x.score>0).sort((a,b)=>b.score-a.score||(a.a.data.order??9999)-(b.a.data.order??9999)).slice(0,4).map(x=>x.a);}

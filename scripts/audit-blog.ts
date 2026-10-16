import fs from 'node:fs';
import {sourceArticles} from './article-source';
import {documents,save} from './lib';
const blogs=sourceArticles().filter(a=>a.section==='blog');
const expected:Record<string,number>={choice:15,budget:15,clients:20,routing:20,troubleshooting:20,measurement:20,privacy:10,streaming:10,ai:10,workflow:10};
const errors:string[]=[];
const check=(ok:boolean,message:string)=>{if(!ok)errors.push(message);};
check(blogs.length===150,`博客数量应为150，实际${blogs.length}`);
const categoryCounts=Object.fromEntries(Object.keys(expected).map(c=>[c,blogs.filter(a=>a.category===c).length]));
for(const c of Object.keys(expected))check(categoryCounts[c]===expected[c],`${c} 数量不符`);
for(const key of ['slug','title','description','order'] as const)check(new Set(blogs.map(a=>a[key])).size===150,`重复博客字段 ${key}`);
const paragraphUses=new Map<string,string[]>();
const shingleSets=blogs.map(a=>{const text=a.body.replace(/https?:\/\/[^\s)]+/g,'').replace(/[^\u3400-\u9fffa-z0-9]/gi,'').toLowerCase();return new Set(Array.from({length:Math.max(0,text.length-4)},(_,i)=>text.slice(i,i+5)));});
const similar:{a:string;b:string;jaccard:number}[]=[];
const docs=documents();const search=JSON.parse(fs.readFileSync('dist/search.json','utf8')) as {url:string}[];
for(const a of blogs){
 check(a.body.length>=700,'正文过短 '+a.slug);
 check((a.body.match(/^## /gm)??[]).length>=4,'有效分节不足 '+a.slug);
 // Brand research remains in frontmatter/internal records; public brand article omits source attribution at owner's request.
 check(a.sources.length>0&&(a.slug==='budget-wavenet-tiers'||a.sources.some(s=>a.body.includes(']('+s+')'))),'缺少核查记录或正文对应引用 '+a.slug);
 check(a.published==='2026-10-16'&&a.updated==='2026-10-16','日期未如实记录 '+a.slug);
 check(!/\{\{|\}\}|TODO|待撰写|正文占位/.test(a.body),'正文残留占位 '+a.slug);
 check(docs.some(d=>d.url===`/blog/${a.slug}/`),'缺少构建页 '+a.slug);
 check(search.some(d=>d.url===`/blog/${a.slug}/`),'缺少搜索入口 '+a.slug);
 for(const p of a.body.split(/\n\s*\n/).map(p=>p.trim()).filter(p=>p.length>=100&&!p.startsWith('|'))){const uses=paragraphUses.get(p)??[];uses.push(a.slug);paragraphUses.set(p,uses);}
}
for(const [paragraph,uses] of paragraphUses)if(uses.length>1)errors.push('重复长段落 '+uses.join(' / ')+' '+paragraph.slice(0,30));
for(let i=0;i<blogs.length;i++)for(let j=i+1;j<blogs.length;j++){
 const a=shingleSets[i],b=shingleSets[j];let intersection=0;for(const s of a)if(b.has(s))intersection++;
 const score=intersection/(a.size+b.size-intersection);if(score>.08)similar.push({a:blogs[i].slug,b:blogs[j].slug,jaccard:Math.round(score*1000)/1000});
 if(score>.35)errors.push(`正文过度相似 ${blogs[i].slug} / ${blogs[j].slug}`);
}
const chineseCounts=blogs.map(a=>(a.body.match(/[\u3400-\u9fff]/g)??[]).length);
const result={status:errors.length?'FAIL':'PASS',articles:blogs.length,categoryCounts,bodyCharacters:blogs.reduce((n,a)=>n+a.body.length,0),chineseCharacters:chineseCounts.reduce((n,c)=>n+c,0),shortestChinese:Math.min(...chineseCounts),longestChinese:Math.max(...chineseCounts),sources:new Set(blogs.flatMap(a=>a.sources)).size,duplicateLongParagraphs:errors.filter(e=>e.startsWith('重复长段落')).length,similarPairs:similar.sort((a,b)=>b.jaccard-a.jaccard).slice(0,15),errors,scope:'结构、来源对应、重复段落、五字符片段相似度、构建及搜索收录检查；不能单独证明编辑质量或外部产品当前状态'};
save('blog-content',result);console.log(JSON.stringify(result,null,2));if(errors.length)process.exitCode=1;

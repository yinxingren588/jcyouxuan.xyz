import fs from 'node:fs';
import {documents,save} from './lib';
import {homeSeo,topicSeo} from '../src/data/seo';
import {airports} from '../src/data/airports';
const docs=documents();const home=docs.find(d=>d.url==='/');
if(!home)throw Error('Missing primary keyword landing page');
const errors:string[]=[];let checks=0;
const check=(ok:boolean,msg:string)=>{checks++;if(!ok)errors.push(msg);};
const $=home.$;const normalized=(s:string)=>s.replace(/\s+/g,' ').trim();
check($('title').text()===homeSeo.title+' · 机场优选','首页Title与主词配置不一致');
check($('meta[name="description"]').attr('content')===homeSeo.description,'首页描述与配置不一致');
check(normalized($('h1').text())===homeSeo.h1&&$('h1').length===1,'首页H1与主词配置不一致');
check($('title').text().startsWith('机场推荐：'),'首页主词未位于Title开头');
check(homeSeo.description.includes('机场推荐'),'首页描述缺少主词');
check($('.hero .intro').text().includes('机场推荐'),'首屏需求说明缺少主题');
check($('link[rel="canonical"]').attr('href')==='https://jcyouxuan.xyz/','首页Canonical不是根地址');
check($('meta[name="robots"]').attr('content')==='index, follow','首页禁止索引');
check($('#navigation a').toArray().some(e=>$(e).text()==='机场推荐'&&$(e).attr('href')==='/'),'主导航核心词没有指向首页');
check($('#navigation a[href="/recommend/"]').first().text()==='按需选购','场景入口未明确用途');
const schemas=$('script[type="application/ld+json"]').toArray().flatMap(e=>{const v=JSON.parse($(e).text());return Array.isArray(v)?v:[v];});
const list=schemas.find(s=>s['@type']==='ItemList');
check(JSON.stringify(list?.itemListElement?.map((a:{name:string})=>a.name))===JSON.stringify(airports.map(a=>a.name)),'首页品牌目录Schema未对应实际品牌顺序');
check(!schemas.some(s=>s['@type']==='AggregateRating'),'主页添加了无实测依据的评分');
for(const path of ['/recommend/','/ranking/overall/','/blog/choose-a-service/']){
 const d=docs.find(d=>d.url===path);check(!!d&&!d.$('title').text().startsWith('机场推荐：'),'支撑页面仍使用与首页相同的泛主题 '+path);
}
for(const [key,meta] of Object.entries(topicSeo)){
 const d=docs.find(d=>d.url===`/recommend/${key}/`);check(!!d&&d.$('title').text()===meta.title+' · 机场优选'&&d.$('meta[name="description"]').attr('content')===meta.description,'专题搜索意图或摘要未同步 '+key);
}
const contextualHomeSources=docs.filter(d=>d.url!=='/'&&d.$('main a[href="/"]').toArray().some(e=>{
 const a=d.$(e);return !a.closest('.breadcrumbs').length&&a.text().includes('机场推荐');
})).map(d=>d.url);
for(const path of ['/recommend/','/compare/','/airport/twilight/','/review/wavenet/','/blog/plan-cost/','/blog/choose-a-service/'])check(contextualHomeSources.includes(path),'相关页面缺少可抓取的主入口 '+path);
const search=JSON.parse(fs.readFileSync('dist/search.json','utf8')) as {url:string;title:string;description:string}[];
check(search.find(p=>p.url==='/')?.title===homeSeo.title,'站内搜索首页标题未同步');
check(search.find(p=>p.url==='/')?.description===homeSeo.description,'站内搜索首页描述未同步');
const result={status:errors.length?'FAIL':'PASS',checks,primaryKeyword:homeSeo.primaryKeyword,primaryURL:'https://jcyouxuan.xyz/',title:homeSeo.title+' · 机场优选',description:homeSeo.description,h1:homeSeo.h1,contextualHomeLinkPages:contextualHomeSources.length,contextualHomeSources,errors,scope:'静态HTML主题、首页索引资格、导航与上下文内链、场景意图、真实目录Schema及搜索同步；不代表Bing已抓取、收录或排名'};
save('keyword-focus',result);console.log(JSON.stringify({...result,contextualHomeSources:contextualHomeSources.slice(0,8)},null,2));if(errors.length)process.exitCode=1;

import fs from 'node:fs';
import {documents,save} from './lib';

const keyword='机场推荐';
const docs=documents();
const normalize=(s:string)=>s.replace(/\s+/g,' ').trim();
const visualUnits=(s:string)=>Array.from(s).reduce((n,c)=>n+(/[\u2e80-\u9fff\uff00-\uffef]/.test(c)?2:1),0);
const rows=docs.map(({url,$})=>{
 const title=normalize($('title').text());
 const description=$('meta[name="description"]').attr('content')?.trim()??'';
 const keywords=$('meta[name="keywords"]').attr('content')?.trim()??'';
 const h1=normalize($('h1').text());
 const content=$('main').clone();
 content.find('script,style,nav,.breadcrumbs,.sidebar,.source-list').remove();
 const main=normalize(content.text());
 const intro=normalize($('.page-head>p:not(.eyebrow):not(.hero-note),.hero .intro').text());
 const indexable=!$('meta[name="robots"]').attr('content')?.includes('noindex');
 const h2=normalize($('main h2').map((_,e)=>$(e).text()).get().join(' '));
 return {url,title,description,keywords,h1,indexable,canonical:$('link[rel="canonical"]').attr('href')??'',ogTitleMatches:$('meta[property="og:title"]').attr('content')+' · 机场优选'===title,ogDescriptionMatches:$('meta[property="og:description"]').attr('content')===description,twitterTitleMatches:$('meta[name="twitter:title"]').attr('content')+' · 机场优选'===title,twitterDescriptionMatches:$('meta[name="twitter:description"]').attr('content')===description,titleCharacters:Array.from(title).length,descriptionCharacters:Array.from(description).length,titleVisualUnits:visualUnits(title),exactInTitle:title.includes(keyword),exactInDescription:description.includes(keyword),exactInKeywords:keywords.includes(keyword),exactInH1:h1.includes(keyword),exactInH2:h2.includes(keyword),exactInMain:main.includes(keyword),exactInIntro:intro.includes(keyword),titleCount:$('title').length,descriptionCount:$('meta[name="description"]').length,keywordsCount:$('meta[name="keywords"]').length,h1Count:$('h1').length};
});
const duplicate=(field:'title'|'description')=>{const map=new Map<string,string[]>();for(const r of rows){const urls=map.get(r[field])??[];urls.push(r.url);map.set(r[field],urls);}return [...map].filter(([,urls])=>urls.length>1).map(([value,urls])=>({value,urls}));};
const indexable=rows.filter(r=>r.indexable);
const core=rows.filter(r=>r.exactInTitle||r.exactInH1);
const incoming=new Map<string,{source:string;anchor:string}[]>();
for(const {url,$} of docs){$('main a[href]').each((_,e)=>{const a=$(e),href=a.attr('href')!;if(!href.startsWith('/'))return;const anchor=normalize(a.text());if(!anchor.includes(keyword))return;const target=href.split(/[?#]/)[0];const items=incoming.get(target)??[];items.push({source:url,anchor});incoming.set(target,items);});}
const summary={status:'AUDITED',scope:'本地最终构建HTML，非正式域名抓取或Bing关键词表现报告',keyword,pages:rows.length,indexable:indexable.length,missingTitles:rows.filter(r=>!r.title).length,missingDescriptions:rows.filter(r=>!r.description).length,duplicateTitles:duplicate('title'),duplicateDescriptions:duplicate('description'),abnormalMetaCounts:rows.filter(r=>r.titleCount!==1||r.descriptionCount!==1||r.h1Count!==1).map(r=>r.url),withKeywords:rows.filter(r=>!!r.keywords).length,coverage:{title:indexable.filter(r=>r.exactInTitle).length,description:indexable.filter(r=>r.exactInDescription).length,h1:indexable.filter(r=>r.exactInH1).length,h2:indexable.filter(r=>r.exactInH2).length,main:indexable.filter(r=>r.exactInMain).length},home:rows.find(r=>r.url==='/'),primaryCandidates:core.map(r=>({url:r.url,title:r.title,description:r.description,h1:r.h1})),coreAnchorTargets:[...incoming].map(([url,links])=>({url,count:links.length,sourcePages:new Set(links.map(l=>l.source)).size,examples:links.slice(0,3)})).sort((a,b)=>b.count-a.count),longTitleReview:rows.filter(r=>r.indexable&&r.titleVisualUnits>70).map(r=>({url:r.url,title:r.title,visualUnits:r.titleVisualUnits})),lengthNotice:'70个宽度单位仅用于编辑抽查，汉字按2、常见拉丁字符按1粗估；不是Bing固定字符或像素上限',notes:['不把公共导航重复的关键词统计成正文主攻词。main已排除脚本、导航、面包屑、侧栏及来源列表，但保留正文内链。','候选页面拥有相同词不等于实际关键词内耗；需结合查询、落地页和表现数据判断。','缺少meta keywords不按错误处理；不将其作为能否排名的判断依据。']};
Object.assign(summary,{socialMetaMismatches:rows.filter(r=>!r.ogTitleMatches||!r.ogDescriptionMatches||!r.twitterTitleMatches||!r.twitterDescriptionMatches).map(r=>r.url),canonicalMismatches:rows.filter(r=>r.canonical!=='https://jcyouxuan.xyz'+r.url).map(r=>r.url)});
save('tdk',summary);
const headers=['URL','允许索引','Title','Description','Keywords','H1','Title含机场推荐','Description含机场推荐','H1含机场推荐','H2含机场推荐','正文含机场推荐','Title字符数','Description字符数','Title粗估宽度','Canonical'];
const data=rows.map(r=>[r.url,r.indexable?'是':'否',r.title,r.description,r.keywords,r.h1,r.exactInTitle?'是':'否',r.exactInDescription?'是':'否',r.exactInH1?'是':'否',r.exactInH2?'是':'否',r.exactInMain?'是':'否',String(r.titleCharacters),String(r.descriptionCharacters),String(r.titleVisualUnits),r.canonical]);
fs.writeFileSync('docs/tdk-audit.csv','\ufeff'+[headers,...data].map(r=>r.map(v=>'"'+v.replaceAll('"','""')+'"').join(',')).join('\n')+'\n');
console.log(JSON.stringify({...summary,primaryCandidates:summary.primaryCandidates.map(({url,title})=>({url,title})),longTitleReview:summary.longTitleReview.slice(0,6)},null,2));

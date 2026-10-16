import fs from 'node:fs';
import {airports} from '../src/data/airports';
import {pages} from '../src/data/pages';
import {documents,save} from './lib';

const docs=documents();
const errors:string[]=[];
let checks=0;
const check=(value:boolean,message:string)=>{checks++;if(!value)errors.push(message)};
const rows:{brand:string;url:string;title:string;description:string;keywords:string;h1:string}[]=[];
for(const a of airports){
 for(const section of ['airport','review']){
  const url=`/${section}/${a.slug}/`;
  const d=docs.find(d=>d.url===url);
  if(!d){check(false,'缺少品牌页面 '+url);continue}
  const $=d.$,p=pages.find(p=>`/${p.path}/`===url)!;
  const title=$('title').text(),description=$('meta[name="description"]').attr('content')??'',keywords=$('meta[name="keywords"]').attr('content')??'',h1=$('h1').text();
  check(title.startsWith(a.name)&&title===p.title+' · 机场优选',url+' Title使用本品牌名');
  check(description.includes(a.name)&&description===p.description,url+' Description使用本品牌名');
  check($('meta[name="keywords"]').length===1&&JSON.stringify(keywords.split(','))===JSON.stringify(p.keywords)&&keywords.split(',').every(k=>k.includes(a.name)),url+' 独立Keywords均属于本品牌');
  check(h1.startsWith(a.name)&&h1===p.title,url+' 主标题属于本品牌');
  check($('link[rel="canonical"]').attr('href')==='https://jcyouxuan.xyz'+url,url+' 独立Canonical');
  check($('meta[property="og:title"]').attr('content')===p.title&&$('meta[property="og:description"]').attr('content')===description&&$('meta[name="twitter:title"]').attr('content')===p.title&&$('meta[name="twitter:description"]').attr('content')===description,url+' 分享元数据同步');
  check(!airports.some(other=>other.slug!==a.slug&&[title,description,keywords].some(text=>text.includes(other.name))),url+' TDK未串用其他品牌名');
  rows.push({brand:a.name,url,title,description,keywords,h1});
 }
}
check(rows.length===58,'29品牌各有详情和分析页');
for(const key of ['title','description','keywords'] as const)check(new Set(rows.map(r=>r[key])).size===58,key+' 58页独立不重复');
const header=['品牌','页面URL','Title','Description','Keywords','H1'];
const csv=[header,...rows.map(r=>[r.brand,r.url,r.title,r.description,r.keywords,r.h1])].map(row=>row.map(v=>'"'+v.replaceAll('"','""')+'"').join(',')).join('\n');
fs.writeFileSync('docs/brand-tdk.csv','\ufeff'+csv+'\n');
save('brand-tdk',{status:errors.length?'FAIL':'PASS',brands:29,pages:rows.length,checks,errors,rows,scope:'本地构建58个品牌页面的Title、Description、Keywords、H1、独立Canonical和分享信息；不代表搜索排名'});
console.log(JSON.stringify({status:errors.length?'FAIL':'PASS',brands:29,pages:rows.length,checks,errors}));
if(errors.length)process.exitCode=1;

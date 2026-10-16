import fs from 'node:fs';
import {pages} from '../src/data/pages';
import articles from '../src/data/article-index.json';
import {documents} from './lib';
const archiveRows=documents().filter(d=>/^\/blog\/(?:category|page)\//.test(d.url)).map(d=>[d.$('h1').text(),'专题与归档导航',d.url,'blog archive','P2',d.$('title').text(),d.$('h1').text()]);
const header=['Keyword','Intent','Target URL','Page Type','Priority','Title','H1'];
const rows=[['机场推荐 / VPN','综合选择','/','pillar','P0','机场推荐与 VPN 选择指南：29 品牌套餐与推荐理由 · 机场优选','机场推荐与 VPN，找到适合你的连接方式。'],...pages.filter(p=>p.type!=='404').map(p=>[p.title,p.type==='brand'?'品牌事实查询':p.type==='review'?'品牌方案取舍分析':p.type==='ranking'?'依据公开资料比较':p.type==='topic'?'需求选择方法':'栏目导航',`/${p.path}/`,p.noindex?'withheld-noindex':p.type,['recommend','compare'].includes(p.type)?'P0':p.noindex?'P2':'P1',p.title+' · 机场优选',p.title]),...articles.map(a=>[a.title,a.section==='guides'?'操作与排查':a.section==='glossary'?'概念解释':`具体问题与方法：${a.category??'选购'}`,`/${a.section}/${a.slug}/`,a.section,'P1',a.title+' · 机场优选',a.title]),...archiveRows];
fs.writeFileSync('docs/keyword-map.csv','\ufeff'+[header,...rows].map(r=>r.map(s=>'"'+s.replaceAll('"','""')+'"').join(',')).join('\n')+'\n');
console.log(`Keyword map: ${rows.length} unique URL intents, no search-volume estimates.`);

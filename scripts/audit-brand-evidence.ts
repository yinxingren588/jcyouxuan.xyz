import fs from 'node:fs';
import {load} from 'cheerio';
import {airports} from '../src/data/airports';
import records from '../src/data/brand-evidence.json';
import {brandEvidence} from '../src/data/brand-evidence';
import {finish} from './lib';

const errors:string[]=[];
let checks=0;
const check=(value:boolean,message:string)=>{checks++;if(!value)errors.push(message)};
check(JSON.stringify(records.map(r=>r.slug))===JSON.stringify(airports.map(a=>a.slug)),'核对记录覆盖29品牌且顺序准确');
check(new Set(records.map(r=>r.summary)).size===airports.length,'逐家摘要独立');
check(fs.readFileSync('public/brand-verification.csv','utf8')===fs.readFileSync('docs/brand-verification.csv','utf8'),'公开核对表与交付记录一致');
for(const a of airports){
 const r=brandEvidence[a.slug];
 if(!r){check(false,a.name+' 缺少核对记录');continue}
 check(/^\d{4}-\d{2}-\d{2}$/.test(r.checkedAt),a.name+' 检查日期');
 check((r.coupon.code||undefined)===a.coupon,a.name+' 指定优惠码保持一致');
 check(r.purchaseQuestions.length>=3&&r.purchaseQuestions.every(s=>s.length>=10),a.name+' 具体购买问题');
 check(r.findings.length>0&&r.findings.every(f=>/^https:\/\//.test(f.url)&&f.text.length>20),a.name+' 来源与对应事实');
 const current=r.findings.some(f=>f.kind==='official-public'&&f.supportsCurrentOffer);
 check(!a.plans.some(p=>p.verified)||current,a.name+' 已核验价格必须有当前官方依据');
 for(const type of ['airport','review']){
  const path=`dist/${type}/${a.slug}/index.html`;
  if(!fs.existsSync(path)){check(false,'缺少 '+path);continue}
  const $=load(fs.readFileSync(path,'utf8'));
  const block=$('[data-evidence]');
  check(block.length===1&&block.attr('data-evidence')===a.slug,path+' 专属核对区');
  check($('[id="evidence"]').length===1&&$('[id="evidence-heading"]').length===1,path+' 锚点唯一');
  check(block.text().includes(r.summary)&&block.text().includes('未取得当前官方在售价目表'),path+' 摘要与报价状态可见');
  check(r.purchaseQuestions.every(q=>block.text().includes(q)),path+' 专属问题可读');
  check(r.conflicts.every(c=>block.text().includes(c)),path+' 冲突记录完整');
  check(r.findings.every(f=>block.find('a').toArray().some(el=>$(el).attr('href')===f.url)),path+' 事实邻近来源链接');
  if(a.coupon)check(block.text().includes(r.coupon.terms),path+' 优惠条件');
  block.find('a').each((_,el)=>{
   if($(el).attr('href')===a.affiliateUrl)check(/sponsored/.test($(el).attr('rel')??'')&&/nofollow/.test($(el).attr('rel')??''),path+' 原入口商业属性');
  });
 }
}
finish('brand-evidence',errors,checks);

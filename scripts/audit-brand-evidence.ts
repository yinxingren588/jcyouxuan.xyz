import fs from 'node:fs';
import {load} from 'cheerio';
import {airports} from '../src/data/airports';
import records from '../src/data/brand-evidence.json';
import {brandEvidence} from '../src/data/brand-evidence';
import {brandGuides} from '../src/data/brand-guides';
import {couponStatus} from '../src/data/coupon-status';
import {publicBrandText} from '../src/data/public-brand-text';
import {finish} from './lib';

const errors:string[]=[];
let checks=0;
const check=(value:boolean,message:string)=>{checks++;if(!value)errors.push(message)};
check(JSON.stringify(records.map(r=>r.slug))===JSON.stringify(airports.map(a=>a.slug)),'核对记录覆盖29品牌且顺序准确');
check(new Set(records.map(r=>r.summary)).size===airports.length,'逐家摘要独立');
check(!/https?:\/\//.test(fs.readFileSync('public/brand-verification.csv','utf8')),'公开核对表不暴露研究外链');
check(/https:\/\//.test(fs.readFileSync('docs/brand-verification.csv','utf8')),'内部原始核对记录仍可追溯');
check(Object.keys(brandGuides).length===29&&new Set(Object.values(brandGuides).map(g=>g.scenario)).size===29,'29家独立情景覆盖且不重复');
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
  const guide=brandGuides[a.slug];
  check(block.text().includes(guide.summary)&&block.text().includes('未取得当前官方在售价目表'),path+' 原创摘要与报价状态可见');
  check(r.purchaseQuestions.every(q=>block.text().includes(publicBrandText(q))),path+' 专属问题可读');
  check(r.conflicts.every(c=>block.text().includes(publicBrandText(c))),path+' 关键差异完整保留');
  check(guide.facts.length===2&&guide.facts.every(([title,text])=>block.text().includes(title)&&block.text().includes(text)),path+' 两项独立套餐说明');
  check(r.findings.filter(f=>f.kind==='third-party'&&f.url!==a.affiliateUrl).every(f=>!$('main').text().includes(new URL(f.url).hostname)&&!$(`a[href="${f.url}"]`).length),path+' 正文与链接无研究站点署名');
  check($('.source-cards').length===0,path+' 不显示研究来源卡片');
  check($('[data-brand-guide]').attr('data-brand-guide')===a.slug&&$('#selection-case').text().includes(guide.scenario)&&$('#selection-case').text().includes('假设情景'),path+' 专属选择情景与假设边界');
  if(type==='airport')check(guide.faqs.length===2&&$('#questions details').length===2&&guide.faqs.every(f=>$('#questions').text().includes(f.question)&&$('#questions').text().includes(f.answer)),path+' 两项品牌专属问答');
  if(a.coupon)check(block.text().includes(couponStatus(a).explanation),path+' 当前优惠条件仍说明');
  block.find('a').each((_,el)=>{
   if($(el).attr('href')===a.affiliateUrl)check(/sponsored/.test($(el).attr('rel')??'')&&/nofollow/.test($(el).attr('rel')??''),path+' 原入口商业属性');
  });
 }
}
for(const route of ['compare','ranking/budget','ranking/traffic']){
 const $=load(fs.readFileSync(`dist/${route}/index.html`,'utf8'));
 const rows=JSON.parse($('[data-brands]').attr('data-brands')??'[]') as {slug:string;sourceNotes:string;sources?:unknown}[];
 check(rows.length===29,route+' 交互数据29品牌完整');
 check(rows.every(r=>!Object.hasOwn(r,'sources')),route+' 交互数据不包含研究链接字段');
 check(rows.every(r=>r.sourceNotes===publicBrandText(airports.find(a=>a.slug===r.slug)!.sourceNotes)),route+' 动态条件使用同一公开文案');
}
const waveArticle=load(fs.readFileSync('dist/blog/budget-wavenet-tiers/index.html','utf8'));
check(waveArticle('.source-list').length===0&&brandEvidence.wavenet.findings.every(f=>!waveArticle('main').text().includes(new URL(f.url).hostname)),'浪网价格文章不显示研究站点署名');
finish('brand-evidence',errors,checks);

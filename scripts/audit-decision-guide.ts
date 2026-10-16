import fs from 'node:fs';
import {airports} from '../src/data/airports';
import {brandEditorial} from '../src/data/brand-editorial';
import {brandEvidence} from '../src/data/brand-evidence';
import {couponStatus} from '../src/data/coupon-status';
import {documents,finish} from './lib';

const docs=documents(),errors:string[]=[];
let checks=0;
const check=(value:boolean,message:string)=>{checks++;if(!value)errors.push(message)};
for(const a of airports){
 for(const section of ['airport','review']){
  const url=`/${section}/${a.slug}/`,d=docs.find(d=>d.url===url)!,$=d.$;
  const summary=$('[data-decision-summary]'),status=couponStatus(a);
  check(summary.length===1&&summary.attr('data-decision-summary')===a.slug,url+' 专属选择摘要');
  check(summary.find('[data-decision-field]').length===4,url+' 四项选择信息');
  check(summary.find('[data-decision-field=audience]').text().includes(brandEditorial[a.slug].audience),url+' 本品牌人群');
  check(summary.find('[data-decision-field=reason]').text().includes(a.advantages[0]),url+' 本品牌依据');
  check(summary.find('[data-decision-field=question]').text().includes(brandEvidence[a.slug].purchaseQuestions[0]),url+' 本品牌优先问题');
  check(summary.find('[data-coupon-status]').attr('data-coupon-status')===status.kind&&summary.text().includes(status.explanation),url+' 状态与解释');
  check(!/Infinity|NaN/.test(summary.text()),url+' 缺少价格不会输出数字占位');
  check(a.plans.length>0||summary.text().includes('暂未列价'),url+' 无价品牌继续不列价');
  check($('article.dossier').children().first().is('[data-decision-summary]'),url+' 摘要位于品牌正文开头');
 }
}
for(const d of docs){
 d.$('[data-promotion]').each((_,el)=>{
  const node=d.$(el),a=airports.find(a=>a.slug===node.attr('data-promotion'))!;
  check(node.find('[data-coupon-status]').attr('data-coupon-status')===couponStatus(a).kind,d.url+' 推广区显示相同优惠状态 '+a.slug);
  check(node.find('.coupon-copy').length===(a.coupon?1:0),d.url+' 不增补其他优惠码 '+a.slug);
 });
}
const articles=['choose-a-service','plan-cost','budget-coupon-check','stability-evidence','diagnose-tls-clock'];
for(const slug of articles){
 const d=docs.find(d=>d.url===`/blog/${slug}/`)!;
 check(d.$('.guide-flow').length===1&&d.$('.guide-flow li').length===5,slug+' 可读五步流程图');
 check(d.$('main').text().includes('假设'),slug+' 示例边界可见');
}
for(const file of ['purchase-decision-worksheet.csv','budget-comparison-worksheet.csv','coupon-check-worksheet.csv'])check(fs.existsSync('dist/'+file)&&fs.readFileSync('dist/'+file,'utf8').trim().length>20,file+' 空白模板已构建');
const tls=docs.find(d=>d.url==='/blog/diagnose-tls-clock/')!;
check(tls.$('a[href="https://support.google.com/chrome/answer/95669?hl=en"]').length>0,'证书错误引用精确官方说明');
check(couponStatus({slug:'breezenet',coupon:'weifeng90'}).explanation.includes('不等于已确认原码永久失效'),'历史条款不误判原码永久失效');
finish('decision-guide',errors,checks);

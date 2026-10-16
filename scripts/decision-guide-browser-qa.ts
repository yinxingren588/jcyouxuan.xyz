import {chromium} from '@playwright/test';
import {save} from './lib';
const browser=await chromium.launch({executablePath:process.env.CHROME_PATH||(process.platform==='win32'?'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe':undefined),headless:true});
const errors:string[]=[];
let checks=0;
const check=(value:boolean,message:string)=>{checks++;if(!value)errors.push(message)};
const base='http://127.0.0.1:4321';
const articlePaths=['choose-a-service','plan-cost','budget-coupon-check','stability-evidence','diagnose-tls-clock'].map(slug=>'/blog/'+slug+'/');
try{
 const page=await browser.newPage({viewport:{width:1440,height:1000}});
 page.on('pageerror',e=>errors.push(e.message));
 await page.goto(base+'/airport/wavenet/');
 check(await page.locator('[data-decision-field]').count()===4,'浪网四项选择摘要');
 check((await page.locator('[data-decision-field=budget]').innerText()).includes('¥30/月')&&(await page.locator('[data-decision-field=budget]').innerText()).includes('¥30–¥200'),'首档与已收录预算范围分开');
 await page.locator('.decision-summary').screenshot({path:'docs/qa/decision-summary-desktop.png'});
 await page.getByRole('link',{name:'查看套餐与预算 ↓',exact:true}).click();
 check(new URL(page.url()).hash==='#plans','摘要跳到品牌套餐');
 await page.getByRole('link',{name:'核对套餐与条件 ↓',exact:true}).click();
 check(new URL(page.url()).hash==='#evidence','摘要跳到来源');
 for(const [slug,state] of [['breezenet','historical-ended'],['flycat','conflicting'],['invisible','conflicting'],['worryfree','conflicting'],['u1s1','unconfirmed'],['jilian','not-provided']]){
  await page.goto(base+'/airport/'+slug+'/');
  const kinds=await page.locator('[data-coupon-status]').evaluateAll(nodes=>nodes.map(n=>n.getAttribute('data-coupon-status')));
  check(kinds.length>=3&&kinds.every(kind=>kind===state),slug+' 摘要/证据/推广状态一致');
 }
 await page.goto(base+'/airport/breezenet/');
 check((await page.locator('.decision-coupon').innerText()).includes('不等于已确认原码永久失效'),'历史截止不冒充永久失效');
 await page.context().grantPermissions(['clipboard-read','clipboard-write']);
 await page.getByRole('button',{name:'复制 微风网络 Breezenet 优惠码 weifeng90',exact:true}).click();
 check(await page.evaluate(()=>navigator.clipboard.readText())==='weifeng90','状态标签不改变原码复制');
 await page.locator('.promotion').screenshot({path:'docs/qa/coupon-state-desktop.png'});
 await page.goto(base+'/review/flycat/');
 await page.getByRole('link',{name:'查看套餐与预算 ↓',exact:true}).click();
 check(new URL(page.url()).hash==='#budget','分析页跳到自身预算段');
 await page.goto(base+'/airport/jilian/');
 check((await page.locator('[data-decision-field=budget]').innerText()).includes('暂未列价')&&await page.locator('[data-plan-assistant]').count()===0,'无价品牌不伪造预算或匹配');
 await page.goto(base+'/compare/?brands=flycat,breezenet');
 const codeRow=await page.locator('#compare-body tr').nth(3).innerText();
 check(codeRow.includes('条款有差异')&&codeRow.includes('历史条款截止'),'对比表同步优惠状态');
 for(const path of articlePaths){
  await page.goto(base+path);
  check(await page.locator('figure.guide-flow').count()===1&&await page.locator('.guide-flow li').count()===5,path+' 原创五步图可见');
 }
 await page.goto(base+'/blog/stability-evidence/');
 check((await page.locator('article.prose').innerText()).includes('75.0%')&&(await page.locator('article.prose').innerText()).includes('77.8%'),'样本覆盖和任务比例分开');
 for(const file of ['purchase-decision-worksheet.csv','budget-comparison-worksheet.csv','coupon-check-worksheet.csv']){
  const response=await page.request.get(base+'/'+file);
  check(response.ok()&&(await response.text()).trim().length>20,file+' 下载可用');
 }
 for(const width of [320,390,768,1100,1440]){
  await page.setViewportSize({width,height:900});
  for(const path of ['/airport/breezenet/','/airport/jilian/','/airport/','/review/flycat/',...articlePaths]){
   await page.goto(base+path);
   check(await page.evaluate(()=>document.documentElement.scrollWidth<=innerWidth+1),width+'px无横向溢出 '+path);
  }
 }
 await page.setViewportSize({width:390,height:844});
 await page.goto(base+'/airport/breezenet/#overview');
 await page.screenshot({path:'docs/qa/decision-summary-mobile.png'});
 await page.goto(base+'/blog/plan-cost/');
 await page.locator('.guide-flow').screenshot({path:'docs/qa/core-flow-mobile.png'});
 const nojs=await browser.newContext({javaScriptEnabled:false});
 const plain=await nojs.newPage();
 await plain.goto(base+'/airport/breezenet/');
 check((await plain.locator('.decision-summary').innerText()).includes('历史条款截止'),'无JS选择摘要与优惠状态可读');
 await plain.locator('.decision-avoid summary').click();
 check(await plain.locator('.decision-avoid').getAttribute('open')!==null,'无JS可展开不匹配需求');
 for(const path of articlePaths){await plain.goto(base+path);check(await plain.locator('.guide-flow li').count()===5,path+' 无JS流程可读')}
 await nojs.close();
}finally{await browser.close()}
save('decision-guide-browser',{status:errors.length?'FAIL':'PASS',checks,errors,scope:'本地选择摘要、锚点、优惠状态一致性、原码复制、比较表、五篇流程图、三个CSV、五种宽度和无JS阅读'});
console.log(JSON.stringify({status:errors.length?'FAIL':'PASS',checks,errors}));
if(errors.length)process.exitCode=1;

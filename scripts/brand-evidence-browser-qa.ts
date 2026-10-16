import {chromium} from '@playwright/test';
import {airports} from '../src/data/airports';
import {brandEvidence} from '../src/data/brand-evidence';
import {save} from './lib';

const browser=await chromium.launch({executablePath:process.env.CHROME_PATH||(process.platform==='win32'?'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe':undefined),headless:true});
const errors:string[]=[];
let checks=0;
const check=(value:boolean,message:string)=>{checks++;if(!value)errors.push(message)};
const base='http://127.0.0.1:4321';
try{
 const page=await browser.newPage({viewport:{width:1440,height:1000}});
 page.on('pageerror',error=>errors.push(error.message));
 await page.goto(base+'/airport/');
 check(await page.locator('.card-price-status').count()===29,'29张卡片均有当前在售状态');
 check(await page.locator('.card-evidence-link').count()===29,'29个核对结果入口');
 const csv=await page.request.get(base+'/brand-verification.csv');
 const table=await csv.text();
 check(csv.ok()&&airports.every(a=>table.includes(a.name)),'可下载29品牌核对表');
 await page.locator('[data-brand=wavenet] .card-evidence-link').click();
 check(new URL(page.url()).pathname==='/airport/wavenet/'&&new URL(page.url()).hash==='#evidence','浪网卡片直达专属核对区');
 check(await page.locator('#evidence').isVisible(),'浪网核对区可见');
 await page.locator('.entry-check summary').click();
 check(await page.locator('.entry-check').getAttribute('open')!==null,'原生详情可展开入口检查');
 check((await page.locator('.dossier-facts').innerText()).includes('¥30/月'),'浪网首档继续为30元参考');
 check((await page.locator('#evidence').innerText()).includes('120元对应800GB'),'浪网高档与首档区分');
 check((await page.locator('#plans').locator('..').innerText()).includes('2TB'),'浪网原始TB单位有说明');
 await page.locator('#evidence').screenshot({path:'docs/qa/brand-evidence-desktop.png'});
 for(const a of airports){
  await page.goto(base+'/airport/'+a.slug+'/');
  check((await page.locator('[data-evidence]').innerText()).includes(brandEvidence[a.slug].summary),a.name+' 专属核对摘要');
 }
 await page.goto(base+'/airport/breezenet/');
 check((await page.locator('#evidence').innerText()).includes('2026-08-31'),'微风历史优惠截止可见');
 await page.goto(base+'/airport/flycat/');
 check((await page.locator('#evidence').innerText()).includes('通用订阅'),'飞猫客户端疑点可见');
 await page.goto(base+'/compare/?brands=lightspeed,edgenova');
 check((await page.locator('#compare-body').innerText()).includes('148G')&&(await page.locator('#compare-body').innerText()).includes('55 GB'),'比较工具保留两家容量版本差异');
 for(const width of [320,390,768,1100,1440]){
  await page.setViewportSize({width,height:900});
  for(const path of ['/airport/flycat/','/review/wavenet/','/airport/']){
   await page.goto(base+path);
   check(await page.evaluate(()=>document.documentElement.scrollWidth<=innerWidth+1),`${width}px无页面横向溢出 ${path}`);
  }
 }
 await page.setViewportSize({width:390,height:844});
 await page.goto(base+'/airport/flycat/#evidence');
 await page.screenshot({path:'docs/qa/brand-evidence-mobile.png',fullPage:false});
 const nojs=await browser.newContext({javaScriptEnabled:false});
 const staticPage=await nojs.newPage();
 await staticPage.goto(base+'/airport/wavenet/');
 check((await staticPage.locator('#evidence').innerText()).includes('30元150GB'),'关闭脚本仍能读核对结论');
 await staticPage.locator('.entry-check summary').click();
 check(await staticPage.locator('.entry-check').getAttribute('open')!==null,'关闭脚本仍可展开入口证据');
 await nojs.close();
}finally{await browser.close()}
save('brand-evidence-browser',{status:errors.length?'FAIL':'PASS',checks,errors,scope:'本地品牌核对入口、来源与单位、原码条款、预算比较、下载、五种宽度和无JavaScript阅读'});
console.log(JSON.stringify({status:errors.length?'FAIL':'PASS',checks,errors}));
if(errors.length)process.exitCode=1;

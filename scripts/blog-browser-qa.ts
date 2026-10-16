import {chromium} from '@playwright/test';
import {save} from './lib';
import {sourceArticles} from './article-source';
const browser=await chromium.launch({headless:true,executablePath:process.env.CHROME_PATH||'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe'});
let checks=0;const errors:string[]=[];
const check=(ok:boolean,msg:string)=>{checks++;if(!ok)errors.push(msg);};
const origin='http://127.0.0.1:4321';
try{
 const page=await browser.newPage({viewport:{width:1440,height:1000}});page.on('pageerror',e=>errors.push(e.message));
 await page.goto(origin+'/blog/');await page.locator('[data-blog-filter]').waitFor({state:'visible'});
 check(await page.locator('.blog-results .blog-article').count()===15,'首页目录显示15篇');
 check(await page.locator('.blog-topics a').count()===11,'十个专题及全部入口');
 const select=page.locator('[data-blog-filter] select');const input=page.locator('[data-blog-filter] input');
 await select.selectOption('measurement');
 check((await page.locator('[data-blog-count]').innerText()).includes('找到 20 篇'),'体验观察主题20篇');
 check(await page.locator('.blog-results .blog-article').count()===15,'主题过滤结果每页15篇');
 await page.getByRole('button',{name:'筛选结果第 2 页',exact:true}).click();
 check(await page.locator('.blog-results .blog-article').count()===5,'筛选分页第二页剩余5篇');
 await select.selectOption('ai');
 check(await page.locator('.blog-results .blog-article').count()===10,'切换AI主题显示10篇');
 check(await page.locator('[data-blog-filter-pages]').isHidden(),'单页筛选不显示多余分页');
 await page.getByRole('button',{name:'重置筛选',exact:true}).click();
 check(await select.inputValue()===''&&await page.locator('.blog-results .blog-article').count()===15,'重置恢复原始目录');
 await input.fill('浪网');
 check(await page.locator('.blog-results .blog-article').count()===1,'关键词搜索找到独立浪网档位文章');
 check(new URL(page.url()).searchParams.get('q')==='浪网','搜索条件写入地址');
 await page.reload();await page.locator('[data-blog-filter]').waitFor({state:'visible'});
 check(await page.locator('[data-blog-filter] input').inputValue()==='浪网'&&await page.locator('.blog-results .blog-article').count()===1,'刷新恢复搜索条件');
 await page.locator('[data-blog-filter] input').fill('无匹配的查询xyz9381');
 check(await page.locator('[data-blog-empty]').isVisible()&&await page.locator('.blog-results .blog-article').count()===0,'无结果提示与列表清空');
 await page.goto(origin+'/blog/category/privacy/');await page.locator('[data-blog-filter]').waitFor({state:'visible'});
 check(await page.locator('.blog-results .blog-article').count()===10,'隐私主题独立页面显示全部10篇');
 await page.locator('[data-blog-filter] input').fill('订阅');await page.getByRole('button',{name:'重置筛选',exact:true}).click();
 check(await page.locator('[data-blog-filter] select').inputValue()==='privacy'&&await page.locator('.blog-results .blog-article').count()===10,'专题重置恢复当前专题');
 await page.goto(origin+'/blog/');await page.getByRole('button',{name:'搜索站内内容'}).click();await page.locator('#site-search').fill('手机热点与代理');
 await page.waitForFunction(()=>document.querySelector('#search-results')?.textContent?.includes('两份流量预算'));
 check(await page.locator('#search-results a').count()===1,'全站搜索收录新增文章');await page.keyboard.press('Escape');
 await page.screenshot({path:'docs/qa/blog-desktop.png',fullPage:true});
 await page.goto(origin+'/blog/budget-monthly-annual/');
 check(await page.locator('.prose h2').count()>=6,'正文分节、来源与相关推荐完整');
 check(await page.locator('.sidebar a[href^="#"]').count()>=6,'文章目录可定位正文分节');
 check((await page.locator('.prose').innerText()).includes('240'),'具体算例在HTML中可见');
 check(await page.locator('.source-list a').count()>0,'来源直接链接可见');
 check(await page.locator('.prose a[href^="/blog/"]').count()>=4,'相关推荐与正文内链可用');
 await page.screenshot({path:'docs/qa/blog-article-desktop.png',fullPage:true});
 const nojs=await browser.newContext({javaScriptEnabled:false});const plain=await nojs.newPage();const seen=new Set<string>();
 for(let n=1;n<=10;n++){
  await plain.goto(origin+(n===1?'/blog/':`/blog/page/${n}/`));
  const links=await plain.locator('.blog-results .blog-article').evaluateAll(els=>els.map(e=>e.getAttribute('href')!));
  check(links.length===15,`无JS第${n}页有15篇`);links.forEach(l=>seen.add(l));
 }
 check(seen.size===150,'无JS十页目录完整覆盖150篇且无重复');
 const blogs=sourceArticles().filter(a=>a.section==='blog');check(blogs.every(a=>seen.has(`/blog/${a.slug}/`)),'归档可达范围与全部博客源文件一致');
 for(const route of ['/blog/category/routing/','/blog/budget-wavenet-tiers/']){await plain.goto(origin+route);check((await plain.locator('main').innerText()).length>750,'无JS可阅读 '+route);}
 await nojs.close();
 const mobile=await browser.newPage({viewport:{width:390,height:844},isMobile:true,hasTouch:true});mobile.on('pageerror',e=>errors.push(e.message));
 for(const width of [320,390,768]){await mobile.setViewportSize({width,height:844});for(const route of ['/blog/','/blog/page/10/','/blog/category/routing/','/blog/budget-gb-gib/','/blog/budget-monthly-annual/','/blog/ai-access/']){await mobile.goto(origin+route);check(await mobile.evaluate(()=>document.documentElement.scrollWidth<=innerWidth+1),`${width}px没有横向溢出 ${route}`);}}
 await mobile.setViewportSize({width:390,height:844});await mobile.goto(origin+'/blog/');await mobile.locator('[data-blog-filter] select').selectOption('streaming');check(await mobile.locator('.blog-results .blog-article').count()===10,'触屏端主题筛选可用');await mobile.getByRole('button',{name:'重置筛选',exact:true}).click();
 await mobile.screenshot({path:'docs/qa/blog-mobile.png',fullPage:true});
}catch(e){errors.push(e instanceof Error?e.message:String(e));}finally{await browser.close();save('blog-browser',{status:errors.length?'FAIL':'PASS',checks,errors,scope:'本地Chrome：筛选、分页、刷新恢复、空状态、全站搜索、无JS150篇可达及320/390/768px阅读检查'});console.log(JSON.stringify({checks,errors},null,2));if(errors.length)process.exitCode=1;}

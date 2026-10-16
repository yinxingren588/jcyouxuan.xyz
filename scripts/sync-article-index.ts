import fs from 'node:fs';
import {sourceArticles} from './article-source';
const articles=sourceArticles().sort((a,b)=>a.section.localeCompare(b.section)||(a.order??9999)-(b.order??9999)||a.slug.localeCompare(b.slug));
fs.writeFileSync('src/data/article-index.json',JSON.stringify(articles.map(({section,slug,title,description,tags,category})=>({section,slug,title,description,tags,...(category?{category}:{})})),null,2)+'\n');
const header=['主题','标题','URL','内容摘要','标签','正文字符数','汉字数','来源'];
const blogs=articles.filter(a=>a.section==='blog');
const rows=blogs.map(a=>[a.category??'',a.title,`/blog/${a.slug}/`,a.description,a.tags.join(' / '),String(a.body.length),String((a.body.match(/[\u3400-\u9fff]/g)??[]).length),a.sources.join(' | ')]);
fs.writeFileSync('docs/blog-catalog.csv','\ufeff'+[header,...rows].map(r=>r.map(v=>'"'+v.replaceAll('"','""')+'"').join(',')).join('\n')+'\n');
console.log(`Article index: ${articles.length} entries, blog catalog: ${blogs.length}.`);

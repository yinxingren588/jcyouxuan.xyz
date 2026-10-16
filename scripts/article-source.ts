import fs from 'node:fs';
import {files} from './lib';
export interface SourceArticle {file:string;title:string;description:string;section:string;slug:string;category?:string;order?:number;tags:string[];sources:string[];body:string;published:string;updated:string}
export function sourceArticles():SourceArticle[]{return files('src/content/articles').filter(f=>f.endsWith('.md')).map(file=>{
 const raw=fs.readFileSync(file,'utf8');const parts=raw.split(/^---\s*$/m);if(parts.length<3)throw Error('无效文章 frontmatter '+file);
 const fields:Record<string,unknown>={};for(const line of parts[1].split(/\r?\n/)){const m=line.match(/^(\w+):\s*(.+)$/);if(m){try{fields[m[1]]=JSON.parse(m[2]);}catch{fields[m[1]]=m[2].trim();}}}
 return {...fields,file,body:parts.slice(2).join('---').trim()} as unknown as SourceArticle;
});}

import fs from 'node:fs';
import {airports} from '../src/data/airports';
import {brandEvidence} from '../src/data/brand-evidence';
import {couponStatus} from '../src/data/coupon-status';
import {publicBrandText} from '../src/data/public-brand-text';
const rows=[['品牌','整理日期','当前报价状态','指定优惠码','优惠状态','购买前核对问题'],...airports.map(a=>[
 a.name,brandEvidence[a.slug].checkedAt,'未取得当前官方在售价目表',a.coupon??'未提供',couponStatus(a).label,
 brandEvidence[a.slug].purchaseQuestions.map(publicBrandText).join(' / ')
])];
fs.writeFileSync('public/brand-verification.csv','\uFEFF'+rows.map(row=>row.map(value=>'"'+value.replaceAll('"','""')+'"').join(',')).join('\r\n')+'\r\n');
console.log('Brand purchase worksheet: 29 brands; research provenance stays in internal records.');

import type {Airport} from './airports';
// Keep purchase-relevant caveats while omitting research-site attribution from public copy.
export function publicBrandText(text:string):string {
 return text
  .replaceAll('jiliancloud.org、jtjkxt.com等同名页面','其他同名页面')
  .replaceAll('同名wavenet.my','其他同名页面')
  .replaceAll('wavenet.my','相关同名页面')
  .replaceAll('sogocloud.org与给定sogoyunaff.cc','同名介绍页面与指定入口')
  .replaceAll('机场探仍给出导入订阅步骤，而另一第三方报告通用订阅已关闭','通用订阅导入教程与停发订阅的记录不同')
  .replaceAll('现有源明确','历史条款明确')
  .replaceAll('较新介绍站仍宣传七折','当前是否延续该折扣未确认')
  .replaceAll('第三方历史参考','历史档位参考')
  .replaceAll('第三方客户端','通用客户端')
  .replaceAll('第三方订阅','通用订阅')
  .replaceAll('第三方','公开')
  .replaceAll('来源','记录')
  .replaceAll('引用','收录');
}

export function publicAirport(a:Airport):Omit<Airport,'sources'> {
 const {sources:_sources,...record}=a;
 void _sources;
 return {...record,sourceNotes:publicBrandText(a.sourceNotes),purchaseCheck:publicBrandText(a.purchaseCheck),
  recommendation:publicBrandText(a.recommendation),whyChoose:publicBrandText(a.whyChoose),
  advantages:a.advantages.map(publicBrandText),disadvantages:a.disadvantages.map(publicBrandText),
  plans:a.plans.map(p=>({...p,notes:p.notes?publicBrandText(p.notes):undefined}))};
}

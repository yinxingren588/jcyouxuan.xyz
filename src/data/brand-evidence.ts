import records from './brand-evidence.json';

export interface EvidenceFinding {
  topic:string;
  text:string;
  url:string;
  kind:'official-public'|'third-party';
  supportsCurrentOffer:boolean;
}
export interface BrandEvidence {
  slug:string;
  checkedAt:string;
  entryStatus:string;
  identity:string;
  summary:string;
  findings:EvidenceFinding[];
  conflicts:string[];
  coupon:{code?:string|null;status:string;terms:string};
  purchaseQuestions:string[];
}
export const brandEvidence = Object.fromEntries(
  (records as BrandEvidence[]).map(record=>[record.slug,record]),
) as Record<string,BrandEvidence>;

export function couponEvidence(slug:string):string {
  const record=brandEvidence[slug];
  return record.coupon.code ? record.coupon.terms : '站长未提供本品牌优惠码，不采用其他来源的代码或推算优惠价。';
}

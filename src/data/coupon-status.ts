import type {Airport} from './airports';

export type CouponState='unconfirmed'|'conflicting'|'historical-ended'|'not-provided';
export interface CouponStatus {kind:CouponState;label:string;explanation:string}
// These states describe evidence, never an observed checkout result.
const exceptions:Record<string,CouponStatus>={
 invisible:{kind:'conflicting',label:'条款有差异',explanation:'新客首单与常规套餐适用范围尚未统一；当前折扣、周期与续费规则未确认。'},
 flycat:{kind:'conflicting',label:'条款有差异',explanation:'公开资料有季付以上、月付亦可及当前不可用等说法；原码保留，不能据此承诺折扣。'},
 breezenet:{kind:'historical-ended',label:'历史条款截止',explanation:'已知历史条款截至2026-08-31，尚无延期依据；这不等于已确认原码永久失效。'},
 worryfree:{kind:'conflicting',label:'条款有差异',explanation:'优惠幅度和首单限制尚未统一，当前订单适用范围与实付需确认。'},
};
export function couponStatus(a:Pick<Airport,'slug'|'coupon'>):CouponStatus {
 if(!a.coupon)return {kind:'not-provided',label:'未提供指定码',explanation:'站长未提供本品牌优惠码，保留原推广入口；不把邀请码当作折扣码。'};
 return exceptions[a.slug]??{kind:'unconfirmed',label:'当前未验证',explanation:'原码已保留，尚未核实当前折扣、有效期、适用套餐与续费条件。'};
}

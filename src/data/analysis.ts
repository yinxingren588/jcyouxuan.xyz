import {airports} from "./airports";
export const analysis=Object.fromEntries(airports.map(a=>[a.slug,{conclusion:a.recommendation,tradeoff:a.sourceNotes,advantage:a.advantages.join("。")+"。",limitation:a.disadvantages.join("。"),check:a.purchaseCheck}]));

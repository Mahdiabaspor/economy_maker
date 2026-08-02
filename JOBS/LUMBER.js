// Lumberjack — log sell prices at the Forester (Ashley Williams).
//
// Bases are deliberately NON-OVERLAPPING once the +/-10% cycle float is
// applied (63-77 / 81-99 / 104-127 / 131-160), so a higher-tier log is never
// worth less than a lower-tier one. The reference server had them inverted:
// birch (level 3) sold for $335 while pine (level 1) sold for $368.
//
// These four numbers are ALSO in
// high-roleplay-v1/src/src/shared/jobs/lumberjack.shared.ts (LUMBERJACK_CONFIG
// .species[].basePrice), which is what lumberPriceFor() floats per 4-hour
// cycle. If one moves, move the other in the same commit.
const PINE_LOG_SELL_PRICE = 70;
const OAK_LOG_SELL_PRICE = 90;
const BIRCH_LOG_SELL_PRICE = 115;
const MAPLE_LOG_SELL_PRICE = 145;

// [DESIGN] TO-CAPTURE (spec M3, task A6) — the Common Axe's real 24/7 price was
// never captured. 2,000 is ours: $10/tree amortised over 200 trees, which is
// 14% of a pine log at level 1 and 7% of a maple at level 4, so the tool matters
// early and stops mattering late. If the capture disagrees, change it here and
// regenerate — nothing else reads it.
export const AXE_COMMON_BUY_PRICE = 2000;
const AXE_COMMON_REPAIR_PRICE = 900;
const axeTotalHits = 200; // one felled tree = -1 durability

export const lumberItems = [
  { itemName: "item_log_pine", label: "Pine Log", price: PINE_LOG_SELL_PRICE },
  { itemName: "item_log_oak", label: "Oak Log", price: OAK_LOG_SELL_PRICE },
  { itemName: "item_log_birch", label: "Birch Log", price: BIRCH_LOG_SELL_PRICE },
  { itemName: "item_log_maple", label: "Maple Log", price: MAPLE_LOG_SELL_PRICE },
];

export const lumberJobConfig = {
  logs: lumberItems,
  axe: {
    itemName: "item_axe_common",
    label: "Common Axe",
    buyPrice: AXE_COMMON_BUY_PRICE,
    repairPrice: AXE_COMMON_REPAIR_PRICE,
    durability: axeTotalHits,
  },
};

// Stonemason / Metal Miner — the pickaxe tiers and the five metals.
//
// Base prices are the midpoint of the two observed Quant RP market rotations
// (spec 07-Stonemason.md §4.2): (18+24)/2=21, (52+69)/2=60, (30+54)/2=42,
// (152+196)/2=174, (2949+2597)/2=2773. The live sell price is that base times a
// per-ore, per-window jitter of [0.70, 1.30] rolled by stonemasonPriceFor() in
// shared/jobs/stonemason.shared.ts — this file is the BASE, not the till price.
//
// The pickaxe ladder is exactly 7650 x {1,2,3}, the clean multiples observed at
// Shop 24/7 #28; per-shop markup applies on top through the existing shop
// system.
const PICKAXE_BASE_PRICE = 7650;
const incomeMulti = 1; // global payout tuning knob
const costMulti = 1; // global tool/repair tuning knob

const ores = {
  item_metal_iron:    { label: "Iron",    unit: "kg", basePrice: Math.floor(21   * incomeMulti), minYield: 1, maxYield: 7 },
  item_metal_copper:  { label: "Copper",  unit: "kg", basePrice: Math.floor(60   * incomeMulti), minYield: 1, maxYield: 3 },
  item_metal_silver:  { label: "Silver",  unit: "g",  basePrice: Math.floor(42   * incomeMulti), minYield: 1, maxYield: 5 },
  item_metal_gold:    { label: "Gold",    unit: "g",  basePrice: Math.floor(174  * incomeMulti), minYield: 1, maxYield: 3 },
  item_metal_diamond: { label: "Diamond", unit: "pc", basePrice: Math.floor(2773 * incomeMulti), minYield: 1, maxYield: 1 },
};

const pickaxes = {
  item_pickaxe_stone_1: { tier: 1, minLevel: 1, price: PICKAXE_BASE_PRICE * 1, durability: 200, repairCostPerHP: Math.floor(15 * costMulti) },
  item_pickaxe_stone_2: { tier: 2, minLevel: 2, price: PICKAXE_BASE_PRICE * 2, durability: 200, repairCostPerHP: Math.floor(22 * costMulti) },
  item_pickaxe_stone_3: { tier: 3, minLevel: 3, price: PICKAXE_BASE_PRICE * 3, durability: 200, repairCostPerHP: Math.floor(32 * costMulti) },
};

// Drop weights per skill level, summing to 100. Mirrors STONEMASON_DROP_TABLES
// in shared/jobs/stonemason.shared.ts — if one moves, move the other.
const dropTables = {
  1: [ { ore: "item_metal_iron", weight: 78 }, { ore: "item_metal_copper", weight: 22 } ],
  2: [ { ore: "item_metal_iron", weight: 56 }, { ore: "item_metal_copper", weight: 26 }, { ore: "item_metal_silver", weight: 18 } ],
  3: [ { ore: "item_metal_iron", weight: 52 }, { ore: "item_metal_copper", weight: 24 }, { ore: "item_metal_silver", weight: 14 }, { ore: "item_metal_gold", weight: 8 }, { ore: "item_metal_diamond", weight: 2 } ],
};
dropTables[4] = dropTables[3];
dropTables[5] = dropTables[3];

export const stonemasonJobConfig = {
  ores,
  pickaxes,
  dropTables,
  // units of ore a player may sell per 2-hour market window
  salesLimitUnits: 1500,
  marketWindowHours: 2,
  incomeMulti,
  costMulti,
};

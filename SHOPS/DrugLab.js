// DRUG DEALER (NPC that BUYS drugs from players).
//
// Pricing rules (July 2026 rebalance — crafting is instant, no cooldowns, so
// prices are the only guard):
//  - Grown inputs (weed, leaves, oil): NPC pays real profit — that is gathering income.
//  - Anything craftable purely from NPC-bought chemicals (methylamine) must pay
//    LESS than its material cost.
//  - Ladder always points up: every product pays more than the sum of its parts,
//    intermediates pay less than what they build.
// Material costs (per unit, from supermarket/EMS buy prices): acetone 600,
// ammonia 1200, sulfuric acid 1000, methanol 800, bicarbonate 550,
// plastic pack 433, pill capsule 250.

const drugLabSellMulti = 1.15;
const SellToDrugLab = [
  // Raw materials — grown/gathered (lowest value)
  {
    itemName: "item_weed",
    label: "WEED",
    singlePrice: Math.floor(260 * drugLabSellMulti), // 299
  },

  // Intermediate products (medium value)

  // Final products (highest value — always above the sum of their parts)
];


export const DrugDealer =  { sell:SellToDrugLab,  };

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
  {
    itemName: "item_coca_leaves",
    label: "COCA LEAVES",
    singlePrice: Math.floor(310 * drugLabSellMulti * 0.9), // 320 — cocaine line -10%
  },
  {
    itemName: "item_saffarole_leave",
    label: "SAFFAROLE LEAVE",
    singlePrice: Math.floor(350 * drugLabSellMulti), // 402
  },

  // Intermediate products (medium value)
  {
    itemName: "item_saffarole_oil",
    label: "SAFFAROLE OIL",
    singlePrice: Math.floor(750 * drugLabSellMulti), // 862 — all-grown chain, rewards the grower
  },
  {
    itemName: "item_methylamine_crystal",
    label: "METHYLAMINE CRYSTAL",
    singlePrice: Math.floor(3478 * drugLabSellMulti), // 3999 — all-NPC mats cost 4800 -> loss (-17%)
  },
  {
    itemName: "item_cocain_powder",
    label: "COCAINE POWDER",
    singlePrice: Math.floor(3304 * drugLabSellMulti * 0.9), // 3419 — cocaine line -10% (was 3799)
  },
  {
    itemName: "item_mdp2p",
    label: "MDP2P",
    singlePrice: Math.floor(3043 * drugLabSellMulti), // 3499 — profit pays for the grown saffarole oil
  },

  // Final products (highest value — always above the sum of their parts)
  {
    itemName: "item_cocain_pack",
    label: "COCAINE PACK",
    singlePrice: Math.floor(4600 * 0.9), // 4140 — cocaine line -10% (was 4600)
  },
  {
    itemName: "item_mdma_powder",
    label: "MDMA POWDER",
    singlePrice: Math.floor(4782 * drugLabSellMulti), // 5499 — parts (2 mdp2p + 2 methylamine)/3 = 5000 (+10%)
  },
  {
    itemName: "item_mdma_pill",
    label: "MDMA PILL",
    singlePrice: Math.floor(5391 * drugLabSellMulti), // 6199 — parts: powder 5499 + capsule 250 = 5749 (+7.8%)
  },
];


export const DrugDealer =  { sell:SellToDrugLab,  };

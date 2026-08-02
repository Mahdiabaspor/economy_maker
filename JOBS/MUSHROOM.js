// ECONOMY GENERATOR HIGH RP/JOBS/MUSHROOM.js
//
// Source of truth for the Mushroom Picker buyer board.
//
// `price` is the BASE price; the gamemode rolls it +/- jitterPct once per
// 3-hour cycle (shared/jobs/mushroom.shared.ts -> mushroomPriceFor) and
// clamps it to the tier-below's ceiling so a lucky low tier can never
// out-earn an unlucky high tier.
//
// `quantPrice` is the number read off the real Quant RP board on 2025-11-30
// (Pic/131549.png) and is kept for audit only — nothing reads it. Only
// `honey` differs, and deliberately: Quant's $107 is 10% above the tier below
// it, which makes a whole skill level read as a downgrade.
//
// These numbers MUST stay in step with MUSHROOM_CONFIG.species in
// high-roleplay-v1/src/src/shared/jobs/mushroom.shared.ts, which is what the
// gamemode actually reads.
const mushroomIncomeMulti = 1;

export const mushroomItems = [
  { speciesId: "champignon",  itemName: "item_mushroom_champignon",  label: "Champignon",      minLevel: 1, price: Math.floor(57   * mushroomIncomeMulti), quantPrice: 57,   jitterPct: 0.25 },
  { speciesId: "oyster",      itemName: "item_mushroom_oyster",      label: "Oyster Mushroom", minLevel: 2, price: Math.floor(97   * mushroomIncomeMulti), quantPrice: 97,   jitterPct: 0.25 },
  { speciesId: "honey",       itemName: "item_mushroom_honey",       label: "Honey Fungus",    minLevel: 3, price: Math.floor(140  * mushroomIncomeMulti), quantPrice: 107,  jitterPct: 0.25 },
  { speciesId: "flyagaric",   itemName: "item_mushroom_flyagaric",   label: "Fly Agaric",      minLevel: 4, price: Math.floor(218  * mushroomIncomeMulti), quantPrice: 218,  jitterPct: 0.25 },
  { speciesId: "chanterelle", itemName: "item_mushroom_chanterelle", label: "Chanterelle",     minLevel: 4, price: Math.floor(203  * mushroomIncomeMulti), quantPrice: 203,  jitterPct: 0.25 },
  { speciesId: "russula",     itemName: "item_mushroom_russula",     label: "Green Russula",   minLevel: 5, price: Math.floor(303  * mushroomIncomeMulti), quantPrice: 303,  jitterPct: 0.25 },
  { speciesId: "king",        itemName: "item_mushroom_king",        label: "King Mushroom",   minLevel: 1, price: Math.floor(5598 * mushroomIncomeMulti), quantPrice: 5598, jitterPct: 0.10 },
];

export const mushroomToolConfig = {
  shovel: {
    itemName: "item_shovel",
    label: "SHOVEL",
    buyPrice: 1800,      // DESIGN — $9 per pick over 200 uses
    maxDurability: 200,  // MANUAL + Pic/120815.png
    repairFactor: 0.6,   // repairCost = ceil((max-cur)/max * buyPrice * 0.6)
  },
  sellLimitPerCycle: 500,     // OBSERVED — Pic/131549.png "0 / 500 PCS"
  kingSellLimitPerCycle: 10,  // DESIGN — a broken RNG costs $56k, not $2.8M
  priceCycleMs: 3 * 60 * 60 * 1000,
};

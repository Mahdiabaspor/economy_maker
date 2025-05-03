const drugLabBuyMulti = 1;
const drugLabSellMulti = 1;
const SellToDrugLab = [
  // Raw materials (lowest value)
  {
    itemName: "item_weed",
    label: "WEED",
    singlePrice: Math.floor(500 * drugLabBuyMulti), // Raw material - Player gets 700 per item (pure profit as it's foraged)
  },
  {
    itemName: "item_coca_leaves",
    label: "COCA LEAVES",
    singlePrice: Math.floor(550 * drugLabBuyMulti), // Raw material - Player gets 750 per item (pure profit as it's foraged)
  },
  {
    itemName: "item_saffarole_leave",
    label: "SAFFAROLE LEAVE",
    singlePrice: Math.floor(600 * drugLabBuyMulti), // Raw material - Player gets 800 per item (pure profit as it's foraged)
  },
  
  // Intermediate products (medium value)
  {
    itemName: "item_saffarole_oil",
    label: "SAFFAROLE OIL",
    singlePrice: Math.floor(1600 * drugLabBuyMulti), // Crafting cost: ~1600 (2 saffarole leaves at 800) = 200 profit per item (12.5% margin)
  },
  {
    itemName: "item_methylamine_crystal",
    label: "METHYLAMINE CRYSTAL",
    singlePrice: Math.floor(5700 * drugLabBuyMulti), // Crafting cost: ~4200 (3 methanol + 2 ammonia) = 1500 profit per item (14% margin)
  },
  {
    itemName: "item_cocain_powder",
    label: "COCAINE POWDER",
    singlePrice: Math.floor(4400 * drugLabBuyMulti), // Crafting cost: ~2066 = 2334 profit per item (65% profit margin)
  },
  {
    itemName: "item_mdp2p",
    label: "MDP2P",
    singlePrice: Math.floor(5200 * drugLabBuyMulti), // Crafting cost: ~3400 = 1800 profit per item (75% profit margin)
  },
  
  // Final products (highest value)
  {
    itemName: "item_cocain_pack",
    label: "COCAINE PACK",
    singlePrice: Math.floor(6500 * drugLabBuyMulti), // Crafting cost: ~2500 = 4000 profit per item (120% profit margin)
  },
  {
    itemName: "item_mdma_powder",
    label: "MDMA POWDER",
    singlePrice: Math.floor(7800 * drugLabBuyMulti), // Crafting cost: ~3266 = 4534 profit per item (78% profit margin)
  },
  {
    itemName: "item_mdma_pill",
    label: "MDMA PILL",
    singlePrice: Math.floor(9500 * drugLabBuyMulti), // Crafting cost: ~6250 = 3250 profit per item (100% profit margin)
  },
];

// Adjust the BuyFromDrugLab array to match the same order as SellToDrugLab
const BuyFromDrugLab = [
  // Raw materials (lowest value)
  {
    itemName: "item_weed",
    label: "WEED",
    singlePrice: Math.floor(1400 * drugLabSellMulti), // Player pays 1400 (700 more than selling price - 100% markup)
  },
  {
    itemName: "item_coca_leaves",
    label: "COCA LEAVES",
    singlePrice: Math.floor(1500 * drugLabSellMulti), // Player pays 1500 (750 more than selling price - 100% markup)
  },
  {
    itemName: "item_saffarole_leave",
    label: "SAFFAROLE LEAVE",
    singlePrice: Math.floor(1600 * drugLabSellMulti), // Player pays 1600 (800 more than selling price - 100% markup)
  },
  
  // Intermediate products (medium value)
  {
    itemName: "item_saffarole_oil",
    label: "SAFFAROLE OIL",
    singlePrice: Math.floor(2700 * drugLabSellMulti), // Player pays 2700 (900 more than selling price - 50% markup)
  },
  {
    itemName: "item_methylamine_crystal",
    label: "METHYLAMINE CRYSTAL",
    singlePrice: Math.floor(7200 * drugLabSellMulti), // Player pays 7200 (2400 more than selling price - 50% markup)
  },
  {
    itemName: "item_cocain_powder",
    label: "COCAINE POWDER",
    singlePrice: Math.floor(5100 * drugLabSellMulti), // Player pays 5100 (1700 more than selling price - 50% markup)
  },
  {
    itemName: "item_mdp2p",
    label: "MDP2P",
    singlePrice: Math.floor(6300 * drugLabSellMulti), // Player pays 6300 (2100 more than selling price - 50% markup)
  },
  
  // Final products (highest value)
  {
    itemName: "item_cocain_pack",
    label: "COCAINE PACK",
    singlePrice: Math.floor(8800 * drugLabSellMulti), // Player pays 8800 (3300 more than selling price - 60% markup)
  },
  {
    itemName: "item_mdma_powder",
    label: "MDMA POWDER",
    singlePrice: Math.floor(9300 * drugLabSellMulti), // Player pays 9300 (3500 more than selling price - 60% markup)
  },
  {
    itemName: "item_mdma_pill",
    label: "MDMA PILL",
    singlePrice: Math.floor(13600 * drugLabSellMulti), // Player pays 13600 (5100 more than selling price - 60% markup)
  },
];

export const DrugDealer =  { sell:SellToDrugLab, buy:BuyFromDrugLab };
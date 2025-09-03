const drugLabBuyMulti = 1.15;
const drugLabSellMulti = 1;
const SellToDrugLab = [
  // Raw materials (lowest value)
  {
    itemName: "item_weed",
    label: "WEED",
    singlePrice: Math.floor(260 * drugLabBuyMulti), 
  },
  {
    itemName: "item_coca_leaves",
    label: "COCA LEAVES",
    singlePrice: Math.floor(310 * drugLabBuyMulti), 
  },
  {
    itemName: "item_saffarole_leave",
    label: "SAFFAROLE LEAVE",
    singlePrice: Math.floor(350 * drugLabBuyMulti), 
  },
  
  // Intermediate products (medium value)
  {
    itemName: "item_saffarole_oil",
    label: "SAFFAROLE OIL",
    singlePrice: Math.floor(800 * drugLabBuyMulti), 
  },
  {
    itemName: "item_methylamine_crystal",
    label: "METHYLAMINE CRYSTAL",
    singlePrice: Math.floor(5700 * drugLabBuyMulti),
  },
  {
    itemName: "item_cocain_powder",
    label: "COCAINE POWDER",
    singlePrice: Math.floor(4400 * drugLabBuyMulti), 
  },
  {
    itemName: "item_mdp2p",
    label: "MDP2P",
    singlePrice: Math.floor(5200 * drugLabBuyMulti),
  },
  
  // Final products (highest value)
  {
    itemName: "item_cocain_pack",
    label: "COCAINE PACK",
    singlePrice: Math.floor(5200 * drugLabBuyMulti), 
  },
  {
    itemName: "item_mdma_powder",
    label: "MDMA POWDER",
    singlePrice: Math.floor(3900 * drugLabBuyMulti),
  },
  {
    itemName: "item_mdma_pill",
    label: "MDMA PILL",
    singlePrice: Math.floor(9500 * drugLabBuyMulti), 
  },
];

// Adjust the BuyFromDrugLab array to match the same order as SellToDrugLab
const BuyFromDrugLab = [
  // Raw materials (lowest value)
  {
    itemName: "item_weed",
    label: "WEED",
    singlePrice: Math.floor(1400 * drugLabSellMulti),
  },
  {
    itemName: "item_coca_leaves",
    label: "COCA LEAVES",
    singlePrice: Math.floor(1500 * drugLabSellMulti),
  },
  {
    itemName: "item_saffarole_leave",
    label: "SAFFAROLE LEAVE",
    singlePrice: Math.floor(1600 * drugLabSellMulti), 
  },
  
  // Intermediate products (medium value)
  {
    itemName: "item_saffarole_oil",
    label: "SAFFAROLE OIL",
    singlePrice: Math.floor(2700 * drugLabSellMulti), 
  },
  {
    itemName: "item_methylamine_crystal",
    label: "METHYLAMINE CRYSTAL",
    singlePrice: Math.floor(7200 * drugLabSellMulti),
  },
  {
    itemName: "item_cocain_powder",
    label: "COCAINE POWDER",
    singlePrice: Math.floor(5100 * drugLabSellMulti),
  },
  {
    itemName: "item_mdp2p",
    label: "MDP2P",
    singlePrice: Math.floor(6300 * drugLabSellMulti),
  },
  
  // Final products (highest value)
  {
    itemName: "item_cocain_pack",
    label: "COCAINE PACK",
    singlePrice: Math.floor(8800 * drugLabSellMulti),
  },
  {
    itemName: "item_mdma_powder",
    label: "MDMA POWDER",
    singlePrice: Math.floor(9300 * drugLabSellMulti), 
  },
  {
    itemName: "item_mdma_pill",
    label: "MDMA PILL",
    singlePrice: Math.floor(13600 * drugLabSellMulti),
  },
];

export const DrugDealer =  { sell:SellToDrugLab, buy:BuyFromDrugLab };
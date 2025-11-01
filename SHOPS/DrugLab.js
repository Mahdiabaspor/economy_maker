
const drugLabSellMulti = 1.15;
const SellToDrugLab = [
  // Raw materials (lowest value)
  {
    itemName: "item_weed",
    label: "WEED",
    singlePrice: Math.floor(260 * drugLabSellMulti), 
  },
  {
    itemName: "item_coca_leaves",
    label: "COCA LEAVES",
    singlePrice: Math.floor(310 * drugLabSellMulti), 
  },
  {
    itemName: "item_saffarole_leave",
    label: "SAFFAROLE LEAVE",
    singlePrice: Math.floor(350 * drugLabSellMulti), 
  },
  
  // Intermediate products (medium value)
  {
    itemName: "item_saffarole_oil",
    label: "SAFFAROLE OIL",
    singlePrice: Math.floor(750 * drugLabSellMulti), 
  },
  {
    itemName: "item_methylamine_crystal",
    label: "METHYLAMINE CRYSTAL",
    singlePrice: Math.floor(5700 * drugLabSellMulti),
  },
  {
    itemName: "item_cocain_powder",
    label: "COCAINE POWDER",
    singlePrice: Math.floor(4200 * drugLabSellMulti), 
  },
  {
    itemName: "item_mdp2p",
    label: "MDP2P",
    singlePrice: Math.floor(5200 * drugLabSellMulti),
  },
  
  // Final products (highest value)
  {
    itemName: "item_cocain_pack",
    label: "COCAINE PACK",
    singlePrice: Math.floor(5000), 
  },
  {
    itemName: "item_mdma_powder",
    label: "MDMA POWDER",
    singlePrice: Math.floor(3900 * drugLabSellMulti),
  },
  {
    itemName: "item_mdma_pill",
    label: "MDMA PILL",
    singlePrice: Math.floor(9500 * drugLabSellMulti), 
  },
];


export const DrugDealer =  { sell:SellToDrugLab,  };
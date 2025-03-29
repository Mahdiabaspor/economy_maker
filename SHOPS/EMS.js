const shopEmsMultiplier = 1;

export const emsShopConfig = {
  regular: [
    {
      itemName: "item_medical_bandage",
      label: "MEDICAL BANDAGE",
      singlePrice: Math.floor(1500 * shopEmsMultiplier),
    },
    {
      itemName: "item_capsaicin_powder",
      label: "capsaicin POWDER",
      singlePrice: Math.floor(1000 * shopEmsMultiplier),
    },
    {
      itemName: "item_pain_killer_pill",
      label: "pain killer PILL",
      singlePrice: Math.floor(2000 * shopEmsMultiplier),
    },
    {
      itemName: "item_ethanol",
      label: "ETHANOL",
      singlePrice: Math.floor(800 * shopEmsMultiplier),
    },
    {
      itemName: "item_medicine_stablizer",
      label: "medical STABILIZER",
      singlePrice: Math.floor(250 * shopEmsMultiplier),
    },
    {
      itemName: "item_empty_pill_capsule",
      label: "empty pill capsule",
      singlePrice: Math.floor(250 * shopEmsMultiplier),
    },
    {
      itemName: "item_acetone",
      label: "acetone",
      singlePrice: Math.floor(2000 * shopEmsMultiplier),
    },
  ],
};
const BuyLimitation = [
  // itemName: the itemName
  // buyLimitation: Limitation for every 30 min    
  { itemName: "item_fabric", buyCountLimiting: 15,limitCycleTime:30 },
  // more items
];
const sellLimitation = [
  // itemName: the itemName
  // sellPerTimeLimitation:Limitation  for every 30 min,
  // reducePricePerPercentage: reduce the price by this percentage after cross limits
  {
    itemName: "item_fabric",
    sellCountLimiting: 15,
    reducePricePercentage: 20,
    limitCycleTime:30
  },
  // more items
];

export const emsShopSellConfig = {
  regular: [
    {
      itemName: "item_medical_bandage",
      label: "MEDICAL BANDAGE",
      singlePrice: Math.floor(1000 * shopEmsMultiplier),
      limitation: {
        count: 8,
        perTime: 15,
      },
    },

    {
      itemName: "item_pain_killer_pill",
      label: "pain killer PILL",
      singlePrice: Math.floor(1750 * shopEmsMultiplier),
      limitation: {
        count: 5,
        perTime: 15,
      },
    },
  ],
};

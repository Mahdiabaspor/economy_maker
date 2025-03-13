const incomeMulti = 1.8;
const costMulti = 1;
const singleHitTime = 4;
const pickaxeTotalHits = 100;
const kitLifePerPickaxe = 2;
const buyShopMultiple = 1;

const MiningShopSell = [
  {
    itemName: "item_ore_stone",
    label: "Stone",
    singlePrice: (7 * incomeMulti).toFixed(0),
  },
  {
    itemName: "item_ore_sulfur",
    label: "Sulfur",
    singlePrice: (11 * incomeMulti).toFixed(0),
  },
  {
    itemName: "item_ore_coal",
    label: "Coal",
    singlePrice: (12 * incomeMulti).toFixed(0),
  },
  {
    itemName: "item_ore_iron",
    label: "Iron Ore",
    singlePrice: (12 * incomeMulti).toFixed(0),
  },
  {
    itemName: "item_ore_gold",
    label: "Gold Ore",
    singlePrice: (17 * incomeMulti).toFixed(0),
  },
  {
    itemName: "item_bar_iron",
    label: "Iron Bar",
    singlePrice: (700 * incomeMulti).toFixed(0),
  },
  {
    itemName: "item_bar_gold",
    label: "Gold Bar",
    singlePrice: (1000 * incomeMulti).toFixed(0),
  },
  {
    itemName: "item_bar_gildiron",
    label: "Gilded Iron Bar",
    singlePrice: (2500 * incomeMulti).toFixed(0),
  },
  {
    itemName: "item_bar_auriron",
    label: "Auriron Iron Bar",
    singlePrice: (3500 * incomeMulti).toFixed(0),
  },
  {
    itemName: "item_gem_Amberite",
    label: "Amberite gem",
    singlePrice: (10000 * incomeMulti).toFixed(0),
  },
  {
    itemName: "item_gem_aqualith",
    label: "qualith gem",
    singlePrice: (10000 * incomeMulti).toFixed(0),
  },
  {
    itemName: "item_gem_luminite",
    label: "luminite gem",
    singlePrice: (10000 * incomeMulti).toFixed(0),
  },
];
const zones = {
  zone1: {
    resources: [{ name: "item_ore_stone", chance: 100, label: "stone" }],
    miningTime: pickaxeTotalHits * singleHitTime, // Mining time in seconds
    travelTime: 270, // Travel time in seconds
  },
  zone2: {
    resources: [
      { name: "item_ore_iron", chance: 20, label: "iron ore" },
      { name: "item_ore_stone", chance: 20, label: "stone" },
      { name: "item_ore_coal", chance: 39.994, label: "coal ore" },
      { name: "item_ore_sulfur", chance: 20, label: "sulfur" },
      { name: "item_gem_Amberite", chance: 0.006, label: "amberite gem" },
    ],
    miningTime: pickaxeTotalHits * singleHitTime,
    travelTime: 434,
    kit: "kit_antiSharp",
  },
  zone3: {
    resources: [
      { name: "item_ore_stone", chance: 50, label: "stone" },
      { name: "item_ore_iron", chance: 40, label: "iron ore" },
      { name: "item_ore_gold", chance: 9.994, label: "gold ore" },
      { name: "item_gem_luminite", chance: 0.006, label: "luminite gem" },
    ],
    miningTime: pickaxeTotalHits * singleHitTime,
    travelTime: 456,
    kit: "kit_gas",
  },
  zone4: {
    resources: [
      { name: "item_ore_stone", chance: 30, label: "stone" },
      { name: "item_ore_iron", chance: 30, label: "iron ore" },
      { name: "item_ore_gold", chance: 39.94, label: "gold ore" },
      { name: "item_gem_aqualith", chance: 0.006, label: "aqualith gem" },
    ],
    miningTime: pickaxeTotalHits * singleHitTime,
    travelTime: 408,
    kit: "kit_radioactive",
  },
};

const pickaxes = {
  item_pickaxe_lvl_1: {
    hits: 100,
    reward: [1],
    chance: [1],
    repairCostPerHP: (1 * costMulti).toFixed(0),
  },
  item_pickaxe_lvl_2: {
    hits: 100,
    reward: [1, 2],
    chance: [0.7, 0.3],
    repairCostPerHP: (2 * costMulti).toFixed(0),
  },
  item_pickaxe_lvl_3: {
    hits: 100,
    reward: [1, 2, 3],
    chance: [0.5, 0.3, 0.2],
    repairCostPerHP: (3 * costMulti).toFixed(0),
  },
  item_pickaxe_lvl_4: {
    hits: 100,
    reward: [1, 2, 3, 4],
    chance: [0.2, 0.5, 0.2, 0.1],
    repairCostPerHP: (4 * costMulti).toFixed(0),
  },
};
const kits = {
  kit_antiSharp: {
    time: pickaxeTotalHits * singleHitTime * kitLifePerPickaxe, //800
    repairCostPerHP: (1 * costMulti).toFixed(0),
  },
  kit_gas: {
    time: pickaxeTotalHits * singleHitTime * kitLifePerPickaxe, //800
    repairCostPerHP: (2 * costMulti).toFixed(0),
  },
  kit_radioactive: {
    time: pickaxeTotalHits * singleHitTime * kitLifePerPickaxe, //800
    repairCostPerHP: (3 * costMulti).toFixed(0),
  },
  // سایر کیت‌ها...
};
export const miningJobConfig = {
  zones: zones,
  pickaxes: pickaxes,
  kits: kits,
  craftTools: [
    {
      label: "PICK AXE LVL 1",
      itemName: "item_pickaxe_lvl_1",
      materials: [
        { itemName: "item_ore_stone", count: 200, label: "STONE" },
        { itemName: "item_ore_iron", count: 50, label: "COAL" },
      ],
      itemType: "UNCOMMON",
      craftTimeMinutes: 60,
    },
    {
      label: "PICK AXE LVL 2",
      itemName: "item_pickaxe_lvl_2",
      materials: [
        { itemName: "item_bar_iron", count: 5, label: "IRON BAR" },
        {
          itemName: "item_reinforced_steel",
          count: 5,
          label: "REINFORCED STEEL",
        },
      ],
      itemType: "RARE",
      craftTimeMinutes: 360,
    },
    {
      label: "PICK AXE LVL 3",
      itemName: "item_pickaxe_lvl_3",
      materials: [
        { itemName: "item_bar_gold", count: 25, label: "GOLD BAR" },
        { itemName: "item_bar_iron", count: 25, label: "IRON BAR" },
        { itemName: "item_bar_gildiron", count: 17, label: "GILD IRON" },
        {
          itemName: "item_reinforced_steel",
          count: 15,
          label: "REINFORCED STEEL",
        },
      ],
      itemType: "EPIC",
      craftTimeMinutes: 720,
    },
    {
      label: "PICK AXE LVL 4",
      itemName: "item_pickaxe_lvl_4",
      materials: [
        { itemName: "item_bar_gold", count: 50, label: "GOLD BAR" },
        { itemName: "item_bar_iron", count: 40, label: "IRON BAR" },
        { itemName: "item_bar_gildiron", count: 40, label: "GILDED IRON" },
        { itemName: "item_bar_auriron", count: 20, label: "AUR IRON" },
        {
          itemName: "item_reinforced_steel",
          count: 25,
          label: "REINFORCED STEEL",
        },
      ],
      itemType: "LEGENDARY",
      craftTimeMinutes: 1440,
    },
    {
      label: "ANTI SHARPEN KIT", // craft cost 20,600      30000
      itemName: "kit_antiSharp",
      materials: [
        { itemName: "item_bar_iron", count: 10, label: "IRON BAR" },
        {
          itemName: "item_reinforced_steel",
          count: 3,
          label: "REINFORCED STEEL",
        },
      ],
      itemType: "COMMON",
      craftTimeMinutes: 15,
    },
    {
      label: "GAS KIT",
      itemName: "kit_gas", // craft cost 52200    price 70000
      materials: [
        { itemName: "item_ore_sulfur", count: 320, label: "SULFUR" },
        { itemName: "item_bar_iron", count: 5, label: "IRON BAR" },
        { itemName: "item_bar_gold", count: 5, label: "GOLD BAR" },
        {
          itemName: "item_reinforced_steel",
          count: 8,
          label: "REINFORCED STEEL",
        },
      ],
      itemType: "UNCOMMON",
      craftTimeMinutes: 120,
    },
    {
      label: "RADIO ACTIVE KIT", // craft const 83 k    price 110k
      itemName: "kit_radioactive",
      materials: [
        { itemName: "item_ore_sulfur", count: 300, label: "SULFUR" },
        { itemName: "item_ore_coal", count: 200, label: "COAL" },
        { itemName: "item_ore_iron", count: 15, label: "IRON BAR" },
        { itemName: "item_bar_gold", count: 10, label: "GOLD BAR" },
        {
          itemName: "item_reinforced_steel",
          count: 10,
          label: "REINFORCED STEEL",
        },
      ],
      itemType: "EPIC",
      craftTimeMinutes: 300,
    },
  ],
  refinery: [
    {
      label: "IRON BAR",
      itemName: "item_bar_iron",
      materials: [
        { count: 100, item: "item_ore_iron" },
        // { count: 10, item: 'item_ore_gold' }
      ],
      coalCost: 10,
      craftTimeMinutes: 1,
      numberOfOutput: 4,
    },
    {
      label: "GOLD BAR",
      itemName: "item_bar_gold",
      materials: [
        { count: 40, item: "item_ore_iron" },
        { count: 100, item: "item_ore_gold" },
      ],
      coalCost: 10,
      craftTimeMinutes: 1,
      numberOfOutput: 4,
    },
    {
      label: "GILDED IRON",
      itemName: "item_bar_gildiron",
      materials: [
        {
          item: "item_reinforced_steel",
          count: 10,
        },
        { count: 2, item: "item_gem_aqualith" },
      ],
      coalCost: 90,
      craftTimeMinutes: 20,
      numberOfOutput: 10,
    },
    {
      label: "AUR IRON",
      itemName: "item_bar_auriron",
      materials: [
        {
          item: "item_reinforced_steel",
          count: 20,
        },
        { count: 2, item: "item_gem_Amberite" },
        { count: 2, item: "item_gem_luminite" },
      ],
      coalCost: 90,
      craftTimeMinutes: 1,
      numberOfOutput: 10,
    },
  ],
  blackSmith: [
    {
      label: "REINFORCED STEEL", //3815
      itemName: "item_reinforced_steel",
      materials: [
        { itemName: "item_bar_iron", count: 10, label: "IRON BAR" },
        { itemName: "item_bar_gold", count: 4, label: "GOLD BAR" },
      ],
      itemType: "RARE",
      craftTimeMinutes: 1,
      output: 4,
    },
    {
      label: "WEAPON STOCK", //2,775
      itemName: "item_stock_weapon",
      materials: [{ itemName: "item_bar_iron", count: 3, label: "IRON BAR" }],
      itemType: "RARE",
      craftTimeMinutes: 1,
      output: 1,
    },
    {
      label: "NORMAL WEAPON BARREL", //3815
      itemName: "item_normal_barrel",
      materials: [
        {
          itemName: "item_reinforced_steel",
          count: 1,
          label: "REINFORCED STEEL",
        },
      ],
      itemType: "RARE",
      craftTimeMinutes: 1,
      output: 1,
    },
    {
      label: "REINFORCED WEAPON BARREL", //5315
      itemName: "item_reinforced_barrel",
      materials: [
        {
          itemName: "item_reinforced_steel",
          count: 1,
          label: "REINFORCED STEEL",
        },
        { itemName: "item_bar_gold", count: 1, label: "GOLD BAR" },
      ],
      itemType: "RARE",
      craftTimeMinutes: 1,
      output: 1,
    },
    {
      label: "WEAPON GRIP", //2,775
      itemName: "item_grip_weapon",
      materials: [{ itemName: "item_bar_iron", count: 3, label: "IRON BAR" }],
      itemType: "RARE",
      craftTimeMinutes: 1,
      output: 1,
    },
    {
      label: "WEAPON SCOPE", //10630
      itemName: "item_scope_weapon",
      materials: [
        { itemName: "item_bar_gold", count: 2, label: "GOLD BAR" },
        {
          itemName: "item_reinforced_steel",
          count: 2,
          label: "REINFORCED STEEL",
        },
      ],
      itemType: "RARE",
      craftTimeMinutes: 1,
      output: 1,
    },
    {
      label: "NORMAL WEAPON TRIGGER", //3,350
      itemName: "item_normal_trigger",
      materials: [
        { itemName: "item_bar_iron", count: 2, label: "IRON BAR" },
        { itemName: "item_bar_gold", count: 1, label: "GOLD BAR" },
      ],
      itemType: "RARE",
      craftTimeMinutes: 1,
      output: 1,
    },
    {
      label: "ADVANCED WEAPON TRIGGER", //5,315
      itemName: "item_advanced_trigger",
      materials: [
        { itemName: "item_bar_gold", count: 1, label: "GOLD BAR" },
        {
          itemName: "item_reinforced_steel",
          count: 1,
          label: "REINFORCED STEEL",
        },
      ],
      itemType: "RARE",
      craftTimeMinutes: 1,
      output: 1,
    },
  ],
  MiningShopSell: MiningShopSell,
  MiningShopBuy: [
    {
      itemName: "item_ore_stone",
      label: "STONE",
      singlePrice: (22 * buyShopMultiple).toFixed(0),
      isSingleBuy: false,
    },
    {
      itemName: "item_ore_iron",
      label: "IRON ORE",
      singlePrice: (37 * buyShopMultiple).toFixed(0),
      isSingleBuy: false,
    },
    {
      itemName: "item_ore_gold",
      label: "GOLD ORE",
      singlePrice: (45 * buyShopMultiple).toFixed(0),
      isSingleBuy: false,
    },
    {
      itemName: "item_ore_sulfur",
      label: "SULFUR",
      singlePrice: (30 * buyShopMultiple).toFixed(0),
      isSingleBuy: false,
    },
    {
      itemName: "item_ore_coal",
      label: "COAL",
      singlePrice: (35 * buyShopMultiple).toFixed(0),
      isSingleBuy: false,
    },
    {
      itemName: "item_bar_iron",
      label: "IRON BAR",
      singlePrice: (2100 * buyShopMultiple).toFixed(0),
      isSingleBuy: false,
    },
    {
      itemName: "item_bar_gold",
      label: "GOLD BAR",
      singlePrice: (3300 * buyShopMultiple).toFixed(0),
      isSingleBuy: false,
    },
    {
      itemName: "item_reinforced_steel",
      label: "REINFORCED STEEL",
      singlePrice: (5900 * buyShopMultiple).toFixed(0),
      isSingleBuy: false,
    },
    {
      itemName: "item_pickaxe_lvl_1",
      label: "PICK AXE LVL 1",
      singlePrice: (7500 * buyShopMultiple).toFixed(0),
      isSingleBuy: true,
    },
    {
      itemName: "kit_antiSharp",
      label: "ANTI SHARPEN ORE ",
      singlePrice: (22000 * buyShopMultiple).toFixed(0),
      isSingleBuy: true,
    },
    {
      itemName: "kit_gas",
      label: "GAS KIT",
      singlePrice: (70000 * buyShopMultiple).toFixed(0),
      isSingleBuy: true,
    },
    {
      itemName: "kit_radioactive",
      label: "RADIO ACTIVE KIT",
      singlePrice: (110000 * buyShopMultiple).toFixed(0),
      isSingleBuy: true,
    },
  ],

  premium: {
    packages: [
      {
        label: "STARTER KIT",
        name: "mining_starter_kit",
        includes: ["PICK AXE LVL 2", "GAS KIT", "BlAZER 4 OFF-ROAD"],
        isOneTimeOffer: true,
        price: 4.83 * 100, //450 t
        img: "/mining/Frame19.png",
      },
    ],
    items: [
      {
        itemName: "item_pickaxe_lvl_3",
        label: "PICK AXE LVL 3",
        price: 3.76 * 100, //350 t
        description: `
        ${pickaxes.item_pickaxe_lvl_3.chance[0] * 100 } % chance to mine   ${pickaxes.item_pickaxe_lvl_3.reward[0]  } ore per hit  
        ${pickaxes.item_pickaxe_lvl_3.chance[1] * 100 } % chance to mine  ${pickaxes.item_pickaxe_lvl_3.reward[1]  } ore per hit 
        ${pickaxes.item_pickaxe_lvl_3.chance[2] * 100 } % chance to  mine  ${pickaxes.item_pickaxe_lvl_3.reward[2]  } ore per hit
        `,
        isOneTimeOffer: false,
      },
      {
        itemName: "item_pickaxe_lvl_4",
        label: "PICK AXE LVL 4",
        price: 6.45 * 100, //600 t
        description: `
        ${pickaxes.item_pickaxe_lvl_4.chance[0]* 100  } % chance to mine   ${pickaxes.item_pickaxe_lvl_4.reward[0]  } ore per hit  
        ${pickaxes.item_pickaxe_lvl_4.chance[1] * 100 } % chance to mine  ${pickaxes.item_pickaxe_lvl_4.reward[1]  } ore per hit 
        ${pickaxes.item_pickaxe_lvl_4.chance[2]* 100  } % chance to  mine  ${pickaxes.item_pickaxe_lvl_4.reward[2]  } ore per hit
        ${pickaxes.item_pickaxe_lvl_4.chance[3]* 100  } % chance to  mine  ${pickaxes.item_pickaxe_lvl_4.reward[3]  } ore per hit
       
        `,
        isOneTimeOffer: false,
      },
    ],
  },
};

// EMS SHOP.
//
// July 2026 rebalance — the medic business model:
//   craft cost < player price < shop BUY price, and the shop's SELL-BACK price
//   is BELOW the craft cost. So selling to the NPC always loses money and the
//   medic's real income is selling to players (no cooldown system exists or is
//   wanted). Craft costs per unit (from this shop's own buy prices + supermarket
//   fabric 200): bandage 680, painkiller pill 1250, first-aid kit 4910.
// NOTE: the `limitation` fields below are legacy data kept only because the
// high-ui config type still declares them — no server code reads them.

const shopEmsMultiplier = 1;

export const emsShopConfig = {
  regular: [
    {
      itemName: "item_medical_bandage",
      label: "MEDICAL BANDAGE",
      singlePrice: Math.floor(1500 * shopEmsMultiplier),
    },
    {
      itemName: "item_medical_first_aid",
      label: "FIRST AID KIT",
      singlePrice: Math.floor(10000 * shopEmsMultiplier),
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

export const emsShopSellConfig = {
  regular: [
    {
      itemName: "item_medical_bandage",
      label: "MEDICAL BANDAGE",
      singlePrice: Math.floor(550 * shopEmsMultiplier), // craft cost 680 -> -19% (NPC circle loses; sell to players for 700-1400)
      limitation: {
        count: 8,
        perTime: 15,
      },
    },

    {
      itemName: "item_pain_killer_pill",
      label: "pain killer PILL",
      singlePrice: Math.floor(1000 * shopEmsMultiplier), // craft cost 1250 -> -20% (sell to players for 1300-1900)
      limitation: {
        count: 5,
        perTime: 15,
      },
    },

    {
      itemName: "item_medical_first_aid",
      label: "FIRST AID KIT",
      singlePrice: Math.floor(4400 * shopEmsMultiplier), // self-crafted cost 4910 -> -10% (sell to players for 6000-9000, below the 10000 shop price)
      limitation: {
        count: 4,
        perTime: 15,
      },
    },
  ],
};

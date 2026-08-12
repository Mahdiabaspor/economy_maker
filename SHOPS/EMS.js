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
    // DETOX PILLS — the only cure for the narcotic addiction meter that is not
    // a medic. Priced at the source gamemode's own 500 (its item 903, "Набор
    // таблеток"), which sets a deliberate trade against the medic: a medic
    // clears the whole meter instantly at 20/point (20,000 from full), a pill
    // removes 100 points on a 5-minute cooldown, so clearing a full meter with
    // pills costs 5,000 but takes ~50 minutes. Cheap and slow versus expensive
    // and instant. See high-roleplay-v1/DRUG_CHAIN.md §5.
    {
      itemName: "item_detox_pills",
      label: "DETOX PILLS",
      singlePrice: Math.floor(500 * shopEmsMultiplier),
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

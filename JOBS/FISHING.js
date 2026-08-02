// Fisherman — per-kilogram sell prices at Oliver Snow, plus the rod and the
// three baits.
//
// The tier BANDS are deliberately non-overlapping once the +/-10% cycle float is
// applied, so a higher-tier fish is never worth less per kg than a lower-tier
// one. The reference server had them inverted: Perch (level 1) sold for $94/kg
// while Cod, Sea bass, Tuna, Flounder, Mackerel, Dorado and Trout — every one of
// them a higher tier — sold for less. Within each tier the ORDER is Quant's.
//
// These 14 numbers are ALSO in
// high-roleplay-v1/src/src/shared/jobs/fishing.shared.ts (FISH_SPECIES[]
// .basePrice), which is what fishPricePerKg() floats per 3-hour cycle. If one
// moves, move the other in the same commit.

// tier 1 -- level 1        float band 30.6 .. 83.6
const HERRING_PRICE_KG = 34;
const MULLET_PRICE_KG = 48;
const MACKEREL_PRICE_KG = 62;
const PERCH_PRICE_KG = 76;
// tier 2 -- level 2        float band 85.5 .. 118.8
const COD_PRICE_KG = 95;
const PINK_SALMON_PRICE_KG = 108;
// tier 3 -- level 3        float band 121.5 .. 178.2
const SEA_BASS_PRICE_KG = 135;
const TUNA_PRICE_KG = 148;
const DORADO_PRICE_KG = 162;
// tier 4 -- level 4        float band 180.0 .. 244.2
const FLOUNDER_PRICE_KG = 200;
const TROUT_PRICE_KG = 222;
// tier 5 -- level 5        float band 247.5 .. 374.0
const PUFFERFISH_PRICE_KG = 275;
const SHARK_PRICE_KG = 305;
const STINGRAY_PRICE_KG = 340;

// [DESIGN] TO-CAPTURE (spec M3, task A5) — the rod's and the baits' real 24/7
// prices were never captured in 133 screenshots. These are ours. The rod is
// $12.50/fish amortised over its 200 durability; bait is charged per CAST, not
// per catch, so it is the running cost that stops a free-cast faucet.
export const FISHING_ROD_BUY_PRICE = 2500;
// EXPORTED, not local: the same 500 is duplicated into
// FISHING_CONFIG.rod.repairPrice because the generalised `repair:tools` handler
// must derive the price server-side and the gamemode cannot read a shop row.
// If one moves, move the other.
export const FISHING_ROD_REPAIR_PRICE = 500;
const fishingRodDurability = 200; // [MANUAL] Description.txt L38

export const FISH_BAIT_BUY_PRICE = 3;
export const FISH_BAIT_IMPROVED_BUY_PRICE = 9;
export const FISH_BAIT_EXTRA_BUY_PRICE = 18;

export const fishItems = [
  { itemName: "item_fish_herring",     label: "Herring",     price: HERRING_PRICE_KG,     tier: 1, level: 1 },
  { itemName: "item_fish_mullet",      label: "Mullet",      price: MULLET_PRICE_KG,      tier: 1, level: 1 },
  { itemName: "item_fish_mackerel",    label: "Mackerel",    price: MACKEREL_PRICE_KG,    tier: 1, level: 1 },
  { itemName: "item_fish_perch",       label: "Perch",       price: PERCH_PRICE_KG,       tier: 1, level: 1 },
  { itemName: "item_fish_cod",         label: "Cod",         price: COD_PRICE_KG,         tier: 2, level: 2 },
  { itemName: "item_fish_pink_salmon", label: "Pink Salmon", price: PINK_SALMON_PRICE_KG, tier: 2, level: 2 },
  { itemName: "item_fish_sea_bass",    label: "Sea Bass",    price: SEA_BASS_PRICE_KG,    tier: 3, level: 3 },
  { itemName: "item_fish_tuna",        label: "Tuna",        price: TUNA_PRICE_KG,        tier: 3, level: 3 },
  { itemName: "item_fish_dorado",      label: "Dorado",      price: DORADO_PRICE_KG,      tier: 3, level: 3 },
  { itemName: "item_fish_flounder",    label: "Flounder",    price: FLOUNDER_PRICE_KG,    tier: 4, level: 4 },
  { itemName: "item_fish_trout",       label: "Trout",       price: TROUT_PRICE_KG,       tier: 4, level: 4 },
  { itemName: "item_fish_pufferfish",  label: "Pufferfish",  price: PUFFERFISH_PRICE_KG,  tier: 5, level: 5 },
  { itemName: "item_fish_shark",       label: "Shark",       price: SHARK_PRICE_KG,       tier: 5, level: 5 },
  { itemName: "item_fish_stingray",    label: "Stingray",    price: STINGRAY_PRICE_KG,    tier: 5, level: 5 },
];

export const fishingJobConfig = {
  fish: fishItems,
  rod: {
    itemName: "item_fishing_rod",
    label: "Fishing Rod",
    buyPrice: FISHING_ROD_BUY_PRICE,
    repairPrice: FISHING_ROD_REPAIR_PRICE,
    durability: fishingRodDurability,
  },
  bait: [
    { itemName: "item_fish_bait",          label: "Fish Bait",          buyPrice: FISH_BAIT_BUY_PRICE,          weightBonusPct: 0,  unlockLevel: 1 },
    { itemName: "item_fish_bait_improved", label: "Improved Fish Bait", buyPrice: FISH_BAIT_IMPROVED_BUY_PRICE, weightBonusPct: 10, unlockLevel: 2 },
    { itemName: "item_fish_bait_extra",    label: "Extra Fish Bait",    buyPrice: FISH_BAIT_EXTRA_BUY_PRICE,    weightBonusPct: 15, unlockLevel: 3 },
  ],
};

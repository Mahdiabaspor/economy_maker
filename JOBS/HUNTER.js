// Hunter — pelt and meat sell prices at Brad Snyder (Park Ranger's Office).
//
// Prices are speciesBase x qualityMultiplier. The four multipliers are chosen so
// that a +/-10% cycle float can never make the bands overlap:
//   torn     max 0.605  <  rough    min 0.765
//   rough    max 0.935  <  whole    min 1.080
//   whole    max 1.320  <  flawless min 1.890
// The reference server had them fully interleaved — a Flawless pig sold for $720
// while a Rough pig sold for $792 — which made the whole quality system decorative.
//
// These numbers are the SAME ones in shared/jobs/hunter.shared.ts
// (HUNTER_SPECIES[].basePrice / .meatPrice and HUNTER_CONFIG.qualityMultipliers).
// The gamemode prices a sale from the shared config, not from this file; this file
// exists so the shop UI and the generated economyConfig agree with it.
const QUALITY = [
  { id: "torn", label: "Torn", mult: 0.55 },
  { id: "rough", label: "Rough", mult: 0.85 },
  { id: "whole", label: "Whole", mult: 1.2 },
  { id: "flawless", label: "Flawless", mult: 2.1 },
];

// base = pelt value; meat = flat sell price of that species' meat item.
const SPECIES = [
  { id: "rabbit", label: "rabbit", base: 150, meat: 22, meatLabel: "Rabbit meat" },
  { id: "deer", label: "deer", base: 235, meat: 40, meatLabel: "Deer meat" },
  { id: "boar", label: "boar", base: 215, meat: 36, meatLabel: "Boar meat" },
  { id: "coyote", label: "coyote", base: 230, meat: 24, meatLabel: "Coyote meat" },
  { id: "puma", label: "puma", base: 280, meat: 28, meatLabel: "Puma meat" },
  { id: "panther", label: "panther", base: 320, meat: 28, meatLabel: "Panther meat" },
  { id: "pig", label: "pig", base: 175, meat: 34, meatLabel: "Pork" },
  { id: "cow", label: "cow", base: 195, meat: 40, meatLabel: "Beef" },
];

export const MUSKET_BUY_PRICE = 16000;
export const MUSKET_BALL_BUY_PRICE = 12;
export const MUSKET_REPAIR_PRICE = 1200;

export const hunterPelts = SPECIES.flatMap((s) =>
  QUALITY.map((q) => ({
    itemName: `item_pelt_${s.id}_${q.id}`,
    label: `${q.label} ${s.label} hide`,
    price: Math.round(s.base * q.mult),
    speciesId: s.id,
    quality: q.id,
  })),
);

export const hunterMeats = SPECIES.map((s) => ({
  itemName: `item_meat_${s.id}`,
  label: s.meatLabel,
  price: s.meat,
  speciesId: s.id,
}));

export const hunterJobConfig = {
  pelts: hunterPelts,
  meats: hunterMeats,
  musket: {
    itemName: "item_weapon_musket",
    label: "Musket",
    buyPrice: MUSKET_BUY_PRICE,
    repairPrice: MUSKET_REPAIR_PRICE,
  },
  // The musket loads STANDARD SHOTGUN SHELLS from the shared SHOTGUN_AMMO pool
  // — there is no dedicated ball item. Kept as a pointer so the job config and
  // the gun shop cannot drift apart.
  ball: {
    itemName: "item_bullet_shotgun",
    label: "Shotgun Shell",
  },
};

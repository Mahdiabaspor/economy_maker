// LSPD EQUIPMENT BENCH
//
// The state side of the military-component economy. Police never farm
// components — the Зброяр-style extraction chain is criminal-only — they take
// them off the gangs (impounds, searches, confiscation), deposit them into the
// department storage, and turn them into vests, ammunition and duty tools at
// the armory bench.
//
// Costs mirror gang_weapon_crafting in CRAFTS/GANG.js on purpose so neither
// side gets a cheaper magazine than the other. Crafting is INSTANT — as
// everywhere else, `craftTimeMinutes` is kept only because the UI types require
// it, it is always 0 and no server code reads it.
//
// The bench spends the LSPD's SHARED faction storage, not the officer's
// pockets: `police_crafting` in server/high-roleplay/craft/craftItem.ts. Every
// recipe must therefore be priced in exactly ONE material
// (item_military_component) — a multi-material row is rejected server-side.
//
// The vest rows are the same clothing variants the armory already rank-gates in
// high-ui Components/Armory/config/amroyConfig.ts; the difference between them
// is cosmetic (clothes slot only, all 100 durability), so the labels are free
// to rename.

const COMPONENT = (count) => [
  { itemName: "item_military_component", count, label: "MILITARY COMPONENT" },
];

export const CraftPoliceConfig = [
  // ---- AMMUNITION -------------------------------------------------------
  {
    label: "9MM BULLETS",
    itemName: "item_bullet_9_mm",
    materials: COMPONENT(25),
    itemType: "RARE",
    craftTimeMinutes: 0,
    output: 200,
    group: "AMMO",
  },
  {
    label: "SHOTGUN SHELLS",
    itemName: "item_bullet_shotgun",
    materials: COMPONENT(20),
    itemType: "RARE",
    craftTimeMinutes: 0,
    output: 100,
    group: "AMMO",
  },
  {
    label: "5.56MM BULLETS",
    itemName: "item_bullet_5_56_mm",
    materials: COMPONENT(30),
    itemType: "RARE",
    craftTimeMinutes: 0,
    output: 200,
    group: "AMMO",
  },
  {
    // No gang equivalent — 7.62 is the one caliber the criminal bench cannot
    // make, so it stays the more expensive state-only round.
    label: "7.62MM BULLETS",
    itemName: "item_bullet_7_62_mm",
    materials: COMPONENT(35),
    itemType: "RARE",
    craftTimeMinutes: 0,
    output: 200,
    group: "AMMO",
  },

  // ---- DUTY TOOLS -------------------------------------------------------
  {
    label: "NIGHTSTICK",
    itemName: "item_weapon_nightstick",
    materials: COMPONENT(15),
    itemType: "RARE",
    craftTimeMinutes: 0,
    output: 1,
    group: "MELEE",
    stats: { damage: 20, fireRate: 45, accuracy: 50, range: 5 },
  },
  {
    label: "STUN GUN",
    itemName: "item_weapon_stun_gun",
    materials: COMPONENT(25),
    itemType: "RARE",
    craftTimeMinutes: 0,
    output: 1,
    group: "PISTOLS",
    stats: { damage: 5, fireRate: 15, accuracy: 60, range: 12 },
  },
  {
    label: "FLASHLIGHT",
    itemName: "item_weapon_flashlight",
    materials: COMPONENT(10),
    itemType: "COMMON",
    craftTimeMinutes: 0,
    output: 1,
    group: "OTHER",
  },

  // ---- FIREARMS ---------------------------------------------------------
  // Priced off the gang ladder in GANG.js (combat pistol 30, micro smg 65,
  // sawnoff 70, compact rifle 90). The combat pistol is literally the same item
  // both sides craft, so it costs the same on both benches; everything else the
  // LSPD builds is a straight upgrade on the gang equivalent and is priced above
  // it. The carbine is the most expensive row on either bench — no gang can make
  // a real assault rifle.
  {
    label: "COMBAT PISTOL",
    itemName: "item_weapon_combat_pistol",
    materials: COMPONENT(30),
    itemType: "RARE",
    craftTimeMinutes: 0,
    output: 1,
    group: "PISTOLS",
    stats: { damage: 27, fireRate: 55, accuracy: 45, range: 40 },
  },
  {
    // 30-round clip on pistol ammo — the micro SMG's big brother.
    label: "SMG",
    itemName: "item_weapon_smg",
    materials: COMPONENT(75),
    itemType: "RARE",
    craftTimeMinutes: 0,
    output: 1,
    group: "SMGS",
    stats: { damage: 28, fireRate: 82, accuracy: 45, range: 40 },
  },
  {
    label: "PUMP SHOTGUN",
    itemName: "item_weapon_pump_shotgun",
    materials: COMPONENT(80),
    itemType: "RARE",
    craftTimeMinutes: 0,
    output: 1,
    group: "SHOTGUNS",
    stats: { damage: 79, fireRate: 30, accuracy: 40, range: 30 },
  },
  {
    label: "CARBINE RIFLE",
    itemName: "item_weapon_carbine_rifle",
    materials: COMPONENT(110),
    itemType: "RARE",
    craftTimeMinutes: 0,
    output: 1,
    group: "RIFLES",
    stats: { damage: 62, fireRate: 70, accuracy: 62, range: 70 },
  },

  // ---- BODY ARMOR -------------------------------------------------------
  // Same 5-component price as the gang vests.
  {
    label: "CADET VEST",
    itemName: "item_vest_6",
    materials: COMPONENT(5),
    itemType: "COMMON",
    craftTimeMinutes: 0,
    output: 1,
    group: "OTHER",
  },
  {
    label: "POLICE VEST",
    itemName: "item_vest_17",
    materials: COMPONENT(5),
    itemType: "COMMON",
    craftTimeMinutes: 0,
    output: 1,
    group: "OTHER",
  },
  {
    label: "POLICE VEST II",
    itemName: "item_vest_18",
    materials: COMPONENT(5),
    itemType: "COMMON",
    craftTimeMinutes: 0,
    output: 1,
    group: "OTHER",
  },
  {
    label: "POLICE VEST III",
    itemName: "item_vest_19",
    materials: COMPONENT(5),
    itemType: "COMMON",
    craftTimeMinutes: 0,
    output: 1,
    group: "OTHER",
  },
  {
    label: "POLICE VEST IV",
    itemName: "item_vest_20",
    materials: COMPONENT(5),
    itemType: "COMMON",
    craftTimeMinutes: 0,
    output: 1,
    group: "OTHER",
  },
  {
    label: "POLICE VEST V",
    itemName: "item_vest_21",
    materials: COMPONENT(5),
    itemType: "COMMON",
    craftTimeMinutes: 0,
    output: 1,
    group: "OTHER",
  },
  {
    label: "POLICE VEST VI",
    itemName: "item_vest_22",
    materials: COMPONENT(5),
    itemType: "COMMON",
    craftTimeMinutes: 0,
    output: 1,
    group: "OTHER",
  },
  {
    label: "POLICE VEST VII",
    itemName: "item_vest_23",
    materials: COMPONENT(5),
    itemType: "COMMON",
    craftTimeMinutes: 0,
    output: 1,
    group: "OTHER",
  },
];

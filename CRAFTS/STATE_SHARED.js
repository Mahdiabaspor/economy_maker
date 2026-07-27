// STATE EQUIPMENT BENCH — SHARED ROWS + HELPERS
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
// The bench spends the department's SHARED faction storage, not the officer's
// pockets: `police_crafting` in server/high-roleplay/craft/craftItem.ts. Every
// recipe must therefore be priced in exactly ONE material
// (item_military_component) — a multi-material row is rejected server-side.
//
// ONE BENCH, ONE FILE PER DEPARTMENT
// Every state faction (police / sheriff / fbi / army / government) runs this
// one bench. The rows below are the ones EVERY department may craft; each
// department's exclusive blueprints live in its own file next to this one:
//
//   POLICE.js   → LSPD   (POLICE_EQUIPMENT)
//   SHERIFF.js  → LSSD   (SHERIFF_EQUIPMENT)
//   FIB.js      → FIB    (FIB_EQUIPMENT)
//
// (National Guard and Government have no exclusive rows yet — give them an
// ARMY.js / GOVERNMENT.js the day they do, and add it to the concat.)
//
// generate_economy_config.js concatenates all of them into the single
// `crafting.CraftPoliceConfig` array the game reads — the output shape is
// unchanged, only the source is split.
//
// A row carrying `faction` is craftable ONLY by that faction — high-ui hides it
// from everyone else (`forFaction` in Components/Craft/craftBenchConfigs.tsx)
// and craftItem.ts rejects it server-side, so the lock holds even against a
// hand-crafted client call. A row with no `faction` is shared by every
// department, which is exactly what this file holds.

/** every state recipe is priced in military components and nothing else */
export const COMPONENT = (count) => [
  { itemName: "item_military_component", count, label: "MILITARY COMPONENT" },
];

/** stamp a whole list with the faction that owns those blueprints */
export const only = (faction, recipes) => recipes.map((r) => ({ ...r, faction }));

// ===========================================================================
// SHARED — every state faction crafts these
// ===========================================================================
export const STATE_SHARED_EQUIPMENT = [
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
  // The entry-level vest carries no department markings, so every state
  // faction makes it. The MARKED plate carriers are department-locked and live
  // in POLICE.js / SHERIFF.js / FIB.js — never add one here.
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

  // ---- SURVEILLANCE DEVICES --------------------------------------------
  // Battery-bearing gear: both come out of the bench at 100% charge and are
  // topped up afterwards with item_battery (see inventory/deviceBattery.ts).
  // Every department that has this bench gets them — LSPD, LSSD and the rest
  // share these two rows, each spending its own storage pool.
  {
    label: "BODY CAM",
    itemName: "item_body_cam",
    materials: COMPONENT(15),
    itemType: "UNCOMMON",
    craftTimeMinutes: 0,
    output: 1,
    group: "OTHER",
  },
  {
    label: "SURVEILLANCE DRONE",
    itemName: "item_drone",
    materials: COMPONENT(60),
    itemType: "RARE",
    craftTimeMinutes: 0,
    output: 1,
    group: "OTHER",
  },
];

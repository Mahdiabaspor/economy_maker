// LSSD ONLY — olive SHERIFF plate carrier + AP pistol
// (male drawable 85 / female 80, armorManager.ts item_vest_25)
//
// This file holds ONLY what the Los Santos Sheriff's Department may craft. The
// rows every state faction shares live in CRAFTS/STATE_SHARED.js; LSPD's seven
// marked vests are in POLICE.js and the FIB's is in FIB.js.
//
// `only("sheriff", …)` stamps every row with the owning faction — high-ui hides
// them from the other departments and craftItem.ts rejects them server-side.

import { COMPONENT, ENERGY_DRINK, only } from "./STATE_SHARED.js";

export const SHERIFF_EQUIPMENT = only("sheriff", [
  // Same row LSPD and the FIB get — see STATE_SHARED.js for why it is spread
  // per department instead of sitting in the shared list.
  { ...ENERGY_DRINK },
  {
    label: "SHERIFF VEST",
    itemName: "item_vest_25",
    materials: COMPONENT(5),
    itemType: "COMMON",
    craftTimeMinutes: 0,
    output: 1,
    group: "OTHER",
  },
  {
    // Same item the gang bench crafts (CRAFTS/GANG.js), so it costs the same
    // 40 components — the shared-bench pricing rule in STATE_SHARED.js.
    label: "AP PISTOL",
    itemName: "item_weapon_appistol",
    materials: COMPONENT(40),
    itemType: "RARE",
    craftTimeMinutes: 0,
    output: 1,
    group: "PISTOLS",
    stats: { damage: 30, fireRate: 85, accuracy: 38, range: 38 },
  },
]);

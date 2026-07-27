// LSSD ONLY — olive SHERIFF plate carrier
// (male drawable 85 / female 80, armorManager.ts item_vest_25)
//
// This file holds ONLY what the Los Santos Sheriff's Department may craft. The
// rows every state faction shares live in CRAFTS/STATE_SHARED.js; LSPD's seven
// marked vests are in POLICE.js and the FIB's is in FIB.js.
//
// `only("sheriff", …)` stamps every row with the owning faction — high-ui hides
// them from the other departments and craftItem.ts rejects them server-side.

import { COMPONENT, only } from "./STATE_SHARED.js";

export const SHERIFF_EQUIPMENT = only("sheriff", [
  {
    label: "SHERIFF VEST",
    itemName: "item_vest_25",
    materials: COMPONENT(5),
    itemType: "COMMON",
    craftTimeMinutes: 0,
    output: 1,
    group: "OTHER",
  },
]);

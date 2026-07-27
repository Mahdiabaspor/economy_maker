// LSPD ONLY — the seven marked police plate carriers
//
// This file holds ONLY what the Los Santos Police Department may craft. The
// rows every state faction shares (ammo, duty tools, service weapons, the
// unmarked CADET VEST, body cam, drone) live in CRAFTS/STATE_SHARED.js, and
// LSSD / FIB have their own files — SHERIFF.js and FIB.js. Do not put another
// department's blueprint in here.
//
// The vest rows are the same clothing variants the armory already rank-gates in
// high-ui Components/Armory/config/amroyConfig.ts; the difference between them
// is cosmetic (clothes slot only, all 100 durability), so the labels are free
// to rename.
//
// `only("police", …)` stamps every row with the owning faction — high-ui hides
// them from the other departments and craftItem.ts rejects them server-side.

import { COMPONENT, only } from "./STATE_SHARED.js";

export const POLICE_EQUIPMENT = only("police", [
  {
    // Entry-level unmarked carrier. LSPD's — the sheriff's bench has exactly
    // one vest (SHERIFF VEST) and this is not it.
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
]);

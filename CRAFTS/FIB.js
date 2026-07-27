// FIB ONLY — black FIB plate carrier
// (male drawable 84 / female 79, armorManager.ts item_vest_24)
//
// This file holds ONLY what the FIB may craft. The rows every state faction
// shares live in CRAFTS/STATE_SHARED.js; LSPD's seven marked vests are in
// POLICE.js and LSSD's is in SHERIFF.js.
//
// The faction key is 'fbi' everywhere in the gamemode (chat/radio alias 'fib'
// resolves to it) — see @shared/factions/helper.ts LEO_FACTIONS. Use 'fbi'
// here or the lock will never match.
//
// `only("fbi", …)` stamps every row with the owning faction — high-ui hides
// them from the other departments and craftItem.ts rejects them server-side.

import { COMPONENT, only } from "./STATE_SHARED.js";

export const FIB_EQUIPMENT = only("fbi", [
  {
    label: "FIB VEST",
    itemName: "item_vest_24",
    materials: COMPONENT(5),
    itemType: "COMMON",
    craftTimeMinutes: 0,
    output: 1,
    group: "OTHER",
  },
]);

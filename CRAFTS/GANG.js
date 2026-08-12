// GANG CRAFTING
//
// Design (July 2026 economy rebalance): crafting is INSTANT by design — there is no
// craft timer and no sell cooldown anywhere. The only protection against money
// printing is price math: any chain whose materials are all NPC-bought must sell
// to NPCs at a LOSS. Profit comes from risk inputs (military components from the
// weapon-shop robbery) or from selling to players. `craftTimeMinutes` is kept only
// because the UI types require it; it is always 0 and no server code reads it.
//
// ── THE DRUG HALF WAS CUT DOWN TO ONE RECIPE (August 2026) ──────────────────
// First the cocaine and MDMA chains went (nine recipes: cocaine pack/powder,
// MDMA pill/powder, MDP2P, saffarole oil, methylamine, ammonia, acetone), then
// LSD and DMT went with them. The gamemode now has exactly two usable drugs:
// the WEED JOINT below, and amphetamine on the mafia lab table.
//
// ⚠ SULFURIC ACID HAS NO CONSUMER LEFT. LSD was the only recipe that used it.
// It is kept because it still trades on the dark market and is a plausible
// input for anything added later — but if nothing claims it, this recipe and
// the item are the next thing to delete.
//
// Do not resurrect a recipe here without also restoring its item to
// items/itemProperties.js and to the gamemode's own
// server/high-roleplay/inventory/itemProperties.ts — the two catalogues were
// pruned in the same pass and `checkItemCoverage` will fail the build otherwise.
//
// gang_weapon_crafting uses item_military_component (weapon-shop robbery loot).
// These recipes were ported verbatim from the live server config — do NOT replace
// them with the old iron-bar/part recipes (those items no longer exist).

export const CraftingGangConfig = {
  gang_drug_crafting: [
    // ===== PORTED DRUG CHAIN — THE GANG HALF =====
    //
    // The joint used to be a standalone world table (the onyx port's
    // `DRUG_TABLES`). It lives on THIS bench now, because the bench already
    // stands in every gang base, is already gated on `isGangFaction` +
    // `canCraftDrugs`, and already pays out of the crafter's own inventory —
    // which is exactly what that table did, only with a second implementation.
    //
    // ⚠ AMPHETAMINE IS DELIBERATELY NOT HERE. It stays on the standalone MAFIA
    // lab table, gated to its own factions, and must never be added to a gang
    // recipe list — that split is the whole reason the two sides have to trade.
    // See high-roleplay-v1/DRUG_CHAIN.md.
    //
    // Ratios are the source's, unchanged: 10 materials -> 10 units per craft.
    // The output has no NPC buyback (SHOPS/DrugLab.js does not list it and must
    // not), so there is no buy-craft-sell loop here — all value is player
    // market, own use, or the gang delivery run.
    {
      // A JOINT, not a bag. The source bags weed into a zip-lock; here it is
      // rolled, so the recipe takes rolling paper (Vadim, $200) instead of the
      // plastic pack and the output item is `item_weed_joint`.
      label: "WEED JOINT",
      itemName: "item_weed_joint",
      materials: [
        { itemName: "item_weed", count: 10, label: "WEED" },
        { itemName: "item_rolling_paper", count: 10, label: "ROLLING PAPER" },
      ],
      itemType: "RARE",
      craftTimeMinutes: 0,
      output: 10,
      requiredGangLevel: 1,
    },
    {
      label: "SULFURIC ACID",
      itemName: "item_sulfuric_acid",
      materials: [{ itemName: "item_battery", count: 4, label: "BATTERY" }], // 4x500 -> 2 = 1000/unit (no NPC buyback)
      itemType: "RARE",
      craftTimeMinutes: 0,
      output: 2,
      requiredGangLevel: 1,
    },
  ],

  // ===== WEAPONS & GEAR — built from item_military_component (robbery loot) =====
  // Dealer liquidation target: ~300-400 per component, flat across items, guns
  // highest (see SHOPS/WeaponDealer.js). Ported 1:1 from the live server config.
  gang_weapon_crafting: [
    // ATM HACKING CHIP — the gated half of the ATM-robbery kit.
    //
    // Deliberately the one recipe on this bench built from JUNK rather than
    // military components, and the reason is economic: anyone may rob an ATM,
    // but only gangs can make the chip, so gangs become the SUPPLIER and
    // everyone else is their customer (the chip trades on the dark market).
    // That is what makes ATM robbery a gang economy without locking non-gang
    // players out of the activity.
    //
    // Cost check — the junk buyer would have paid for these inputs:
    //   2 x circuit board  2 x 650  = 1300
    //   2 x rusty USB      2 x 150  =  300
    //   1 x broken phone            = 3100
    //                        total  = 4700 of forgone junk income per chip
    // against a 30,000-40,000 payout. Roughly 15% of a bad haul, which keeps
    // the robbery clearly worth doing while giving the junk job a real sink.
    // Retune here and in PAYOUT_MIN/MAX (shared/robbery/atmRobbery.config.ts)
    // together — neither number means anything on its own.
    //
    // TWO RECIPES MAKE THIS ITEM. That is why both carry a `recipeId`:
    // craftItem.ts resolves a recipe by id when one is sent, and falls back to
    // `.find(itemName)` — FIRST MATCH WINS — when it is not. Without ids the
    // second recipe below would render in the UI and silently craft this one.
    // Any future duplicate-output recipe needs an id on BOTH entries too.
    {
      recipeId: "atm_chip_junk",
      label: "ATM HACKING CHIP",
      itemName: "item_atm_hack_chip",
      materials: [
        { itemName: "item_junk_broken_phone", count: 1, label: "BROKEN PHONE" },
        { itemName: "item_junk_circuit_board", count: 2, label: "OLD CIRCUIT BOARD" },
        { itemName: "item_junk_rusty_usb", count: 2, label: "RUSTY USB DRIVE" },
      ],
      itemType: "RARE",
      craftTimeMinutes: 0,
      output: 1,
      requiredGangLevel: 1,
      group: "OTHER",
    },
    // ATM HACKING CHIP (MILITARY) — the second route to the same item, for a
    // gang sitting on components instead of junk.
    //
    // ⚠ THE PRICE IS DELIBERATE AND IT IS NOT COMPETITIVE. 500 components at
    // the bench's own ~300-400/component rate is 150,000-200,000 of value for a
    // chip that unlocks a 30,000-40,000 payout, against 4,700 of junk for the
    // recipe above. Nobody rational crafts this to go rob an ATM.
    //
    // It exists as a COMPONENT SINK: an emergency route when a gang has raided
    // its way to a component pile and has no junk. If it should instead be a
    // real alternative, the number to change is this `count` — 20 would put it
    // level with the junk recipe; 500 keeps it a last resort.
    {
      recipeId: "atm_chip_military",
      label: "ATM HACKING CHIP (MILITARY)",
      itemName: "item_atm_hack_chip",
      materials: [
        { itemName: "item_military_component", count: 500, label: "MILITARY COMPONENT" },
      ],
      itemType: "RARE",
      craftTimeMinutes: 0,
      output: 1,
      requiredGangLevel: 1,
      group: "OTHER",
    },
    {
      label: "Lock Pick",
      itemName: "item_lock_pick",
      materials: [
        { itemName: "item_military_component", count: 15, label: "MILITARY COMPONENT" },
      ],
      itemType: "RARE",
      craftTimeMinutes: 0,
      output: 1,
      requiredGangLevel: 1,
      group: "OTHER",
    },
    // BREACHING CHARGE (item_train_bomb, recipeId 'breaching_charge_military')
    // and C4 EXPLOSIVE (item_c4, recipeId 'c4_military') used to sit here as
    // pure military-component sinks (120 / 200 comps). Removed 2026-08-12 by
    // request — the items themselves still exist in itemProperties, they just
    // are not craftable on the gang weapon bench any more.
    {
      label: "KNIFE", // dealer pays 4500 (300/comp)
      itemName: "item_melee_knife",
      materials: [
        { itemName: "item_military_component", count: 15, label: "MILITARY COMPONENT" },
      ],
      itemType: "RARE",
      craftTimeMinutes: 0,
      output: 1,
      requiredGangLevel: 1,
      group: "MELEE",
      stats: { damage: 25, fireRate: 40, accuracy: 50, range: 5 },
    },
    {
      label: "COMBAT PISTOL", // dealer pays 9000 (300/comp)
      itemName: "item_weapon_combat_pistol",
      materials: [
        { itemName: "item_military_component", count: 30, label: "MILITARY COMPONENT" },
      ],
      itemType: "RARE",
      craftTimeMinutes: 0,
      output: 1,
      requiredGangLevel: 1,
      group: "PISTOLS",
      stats: { damage: 27, fireRate: 55, accuracy: 45, range: 40 },
    },
    {
      label: "AP PISTOL", // no NPC buyback — full-auto pistol, player-market only
      itemName: "item_weapon_appistol",
      materials: [
        { itemName: "item_military_component", count: 40, label: "MILITARY COMPONENT" },
      ],
      itemType: "RARE",
      craftTimeMinutes: 0,
      output: 1,
      requiredGangLevel: 2,
      group: "PISTOLS",
      stats: { damage: 30, fireRate: 85, accuracy: 38, range: 38 },
    },
    {
      label: "MACHETE", // dealer pays 6500 (325/comp)
      itemName: "item_melee_machete",
      materials: [
        { itemName: "item_military_component", count: 20, label: "MILITARY COMPONENT" },
      ],
      itemType: "RARE",
      craftTimeMinutes: 0,
      output: 1,
      requiredGangLevel: 2,
      group: "MELEE",
      stats: { damage: 35, fireRate: 30, accuracy: 50, range: 6 },
    },
    {
      label: "DOUBLE ACTION REVOLVER", // dealer pays 16506 (367/comp)
      itemName: "item_weapon_double_action_revolver",
      materials: [
        { itemName: "item_military_component", count: 45, label: "MILITARY COMPONENT" },
      ],
      itemType: "RARE",
      craftTimeMinutes: 0,
      output: 1,
      requiredGangLevel: 2,
      group: "PISTOLS",
      stats: { damage: 65, fireRate: 25, accuracy: 55, range: 45 },
    },
    {
      label: "DB SHOTGUN", // dealer pays 22086 (368/comp)
      itemName: "item_weapon_db_shotgun",
      materials: [
        { itemName: "item_military_component", count: 60, label: "MILITARY COMPONENT" },
      ],
      itemType: "RARE",
      craftTimeMinutes: 0,
      output: 1,
      requiredGangLevel: 3,
      group: "SHOTGUNS",
      stats: { damage: 80, fireRate: 20, accuracy: 30, range: 25 },
    },
    {
      label: "MICRO SMG", // dealer pays 20506 (315/comp)
      itemName: "item_weapon_micro_smg",
      materials: [
        { itemName: "item_military_component", count: 65, label: "MILITARY COMPONENT" },
      ],
      itemType: "RARE",
      craftTimeMinutes: 0,
      output: 1,
      requiredGangLevel: 3,
      group: "SMGS",
      stats: { damage: 30, fireRate: 80, accuracy: 35, range: 35 },
    },
    {
      label: "SAWNOFF SHOTGUN", // dealer pays 27667 (395/comp — best rate, highest gang level)
      itemName: "item_weapon_sawnoff_shotgun",
      materials: [
        { itemName: "item_military_component", count: 70, label: "MILITARY COMPONENT" },
      ],
      itemType: "RARE",
      craftTimeMinutes: 0,
      output: 1,
      requiredGangLevel: 4,
      group: "SHOTGUNS",
      stats: { damage: 78, fireRate: 25, accuracy: 25, range: 20 },
    },
    {
      label: "compact rifle", // dealer pays 28638 (318/comp)
      itemName: "item_weapon_compact_rifle",
      materials: [
        { itemName: "item_military_component", count: 90, label: "MILITARY COMPONENT" },
      ],
      itemType: "RARE",
      craftTimeMinutes: 0,
      output: 1,
      requiredGangLevel: 4,
      group: "RIFLES",
      stats: { damage: 55, fireRate: 65, accuracy: 50, range: 55 },
    },

    // Ammo: no NPC buyback exists and none may ever be added (all value is
    // player-market / own use).
    {
      label: "9MM BULLETS",
      itemName: "item_bullet_9_mm",
      materials: [
        { itemName: "item_military_component", count: 25, label: "MILITARY COMPONENT" },
      ],
      itemType: "RARE",
      craftTimeMinutes: 0,
      output: 200,
      requiredGangLevel: 1,
      group: "AMMO",
    },
    {
      label: "SHOTGUN SHELLS",
      itemName: "item_bullet_shotgun",
      materials: [
        { itemName: "item_military_component", count: 20, label: "MILITARY COMPONENT" },
      ],
      itemType: "RARE",
      craftTimeMinutes: 0,
      output: 100,
      requiredGangLevel: 2,
      group: "AMMO",
    },
    {
      label: "5.56MM BULLETS",
      itemName: "item_bullet_5_56_mm",
      materials: [
        { itemName: "item_military_component", count: 30, label: "MILITARY COMPONENT" },
      ],
      itemType: "RARE",
      craftTimeMinutes: 0,
      output: 200,
      requiredGangLevel: 3,
      group: "AMMO",
    },

    // Faction vests: no NPC buyback (Rule: never add one).
    {
      label: "VEST",
      itemName: "item_vest_0",
      materials: [
        { itemName: "item_military_component", count: 5, label: "MILITARY COMPONENT" },
      ],
      itemType: "COMMON",
      craftTimeMinutes: 0,
      output: 1,
      requiredGangLevel: 1,
      group: "OTHER",
      faction: "families",
    },
    {
      label: "VEST",
      itemName: "item_vest_1",
      materials: [
        { itemName: "item_military_component", count: 5, label: "MILITARY COMPONENT" },
      ],
      itemType: "COMMON",
      craftTimeMinutes: 0,
      output: 1,
      requiredGangLevel: 1,
      group: "OTHER",
      faction: "ballas",
    },
    {
      label: "VEST",
      itemName: "item_vest_2",
      materials: [
        { itemName: "item_military_component", count: 5, label: "MILITARY COMPONENT" },
      ],
      itemType: "COMMON",
      craftTimeMinutes: 0,
      output: 1,
      requiredGangLevel: 1,
      group: "OTHER",
      faction: "vagos",
    },
    {
      label: "VEST",
      itemName: "item_vest_11",
      materials: [
        { itemName: "item_military_component", count: 5, label: "MILITARY COMPONENT" },
      ],
      itemType: "COMMON",
      craftTimeMinutes: 0,
      output: 1,
      requiredGangLevel: 1,
      group: "OTHER",
      faction: "marabunta",
    },
  ],
};

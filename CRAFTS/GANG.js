// GANG CRAFTING
//
// Design (July 2026 economy rebalance): crafting is INSTANT by design — there is no
// craft timer and no sell cooldown anywhere. The only protection against money
// printing is price math: any chain whose materials are all NPC-bought must sell
// to NPCs at a LOSS. Profit comes from gathered inputs (grown leaves) or risk
// inputs (military components from the weapon-shop robbery), or from selling to
// players. `craftTimeMinutes` is kept only because the UI types require it; it is
// always 0 and no server code reads it.
//
// gang_weapon_crafting uses item_military_component (weapon-shop robbery loot).
// These recipes were ported verbatim from the live server config — do NOT replace
// them with the old iron-bar/part recipes (those items no longer exist).

export const CraftingGangConfig = {
  gang_drug_crafting: [
    {
      label: "SULFURIC ACID",
      itemName: "item_sulfuric_acid",
      materials: [{ itemName: "item_battery", count: 4, label: "BATTERY" }], // 4x500 -> 2 = 1000/unit (no NPC buyback)
      itemType: "RARE",
      craftTimeMinutes: 0,
      output: 2,
      requiredGangLevel: 1,
    },
    {
      label: "COCAIN PACK", // dealer pays 4600; parts: powder 3800 + plastic 433 = 4233 (+8.7%)
      itemName: "item_cocain_pack",
      materials: [
        { itemName: "item_cocain_powder", count: 3, label: "COCAIN POWDER" },
        {
          itemName: "item_empty_plastic_pack",
          count: 3,
          label: "PLASTIC PACK",
        },
      ],
      itemType: "RARE",
      craftTimeMinutes: 0,
      output: 3,
      requiredGangLevel: 1,
    },
    {
      label: "SAFFAROLE OIL", // dealer pays 862; input is grown leaves — gathering income
      itemName: "item_saffarole_oil",
      materials: [
        {
          itemName: "item_saffarole_leave",
          count: 2,
          label: "SAFFAROLE LEAVES",
        },
      ],
      itemType: "RARE",
      craftTimeMinutes: 0,
      output: 2,
      requiredGangLevel: 1,
    },
    {
      label: "MDMA PILL", // dealer pays 6200; parts: powder 5500 + capsule 250 = 5750 (+7.8%)
      itemName: "item_mdma_pill",
      materials: [
        { itemName: "item_mdma_powder", count: 1, label: "MDMA POWDER" },
        {
          itemName: "item_empty_pill_capsule",
          count: 1,
          label: "EMPTY PILL CAPSULE",
        },
      ],
      itemType: "RARE",
      craftTimeMinutes: 0,
      output: 1,
      requiredGangLevel: 1,
    },
    {
      label: "ACETONE",
      itemName: "item_acetone",
      materials: [
        { itemName: "item_paint_color", count: 2, label: "PAINT COLOR" }, // 2x600 -> 2 = 600/unit (no NPC buyback)
      ],
      itemType: "RARE",
      craftTimeMinutes: 0,
      output: 2,
      requiredGangLevel: 1,
    },
    {
      label: "METHYLAMINE", // dealer pays 4000; all-NPC materials cost 4800 -> guaranteed loss vs NPC (Rule 1)
      itemName: "item_methylamine_crystal",
      materials: [
        { itemName: "item_methanol", count: 3, label: "METHANOL" }, // 3x800
        { itemName: "item_ammonia", count: 2, label: "AMMONIA" }, // 2x1200
      ],
      itemType: "RARE",
      craftTimeMinutes: 0,
      output: 1,
      requiredGangLevel: 3,
    },
    {
      label: "AMMONIA",
      itemName: "item_ammonia",
      materials: [
        { itemName: "item_house_cleaner", count: 4, label: "HOUSE CLEANER" }, // 4x600 -> 2 = 1200/unit (no NPC buyback)
      ],
      itemType: "RARE",
      craftTimeMinutes: 0,
      output: 2,
      requiredGangLevel: 1,
    },
    {
      label: "COCAIN POWDER", // dealer pays 3800; needs grown coca leaves — profit rewards the grower
      itemName: "item_cocain_powder",
      materials: [
        { itemName: "item_acetone", count: 3, label: "ACETONE" },
        { itemName: "item_coca_leaves", count: 3, label: "COCA LEAVES" },
        { itemName: "item_sulfuric_acid", count: 2, label: "SULFURIC ACID" },
        {
          itemName: "item_sodium_bicarbonate",
          count: 2,
          label: "SODIUM BICARBONATE",
        },
      ],
      itemType: "RARE",
      craftTimeMinutes: 0,
      output: 3,
      requiredGangLevel: 3,
    },
    {
      label: "MDP2P POWDER", // dealer pays 3500; needs saffarole oil (grown) — profit rewards the grower
      itemName: "item_mdp2p",
      materials: [
        { itemName: "item_acetone", count: 1, label: "ACETONE" },
        { itemName: "item_saffarole_oil", count: 1, label: "SAFFAROLE OIL" },
        { itemName: "item_ammonia", count: 1, label: "AMMONIA" },
      ],
      itemType: "RARE",
      craftTimeMinutes: 0,
      output: 1,
      requiredGangLevel: 4,
    },
    {
      label: "MDMA POWDER", // dealer pays 5500; parts (mdp2p 3500 + methylamine 4000) x2 -> 3 = 5000/unit (+10%)
      itemName: "item_mdma_powder",
      materials: [
        { itemName: "item_mdp2p", count: 2, label: "MDP2P POWDER" },
        {
          itemName: "item_methylamine_crystal",
          count: 2,
          label: "METHYLAMINE",
        },
      ],
      itemType: "RARE",
      craftTimeMinutes: 0,
      output: 3,
      requiredGangLevel: 4,
    },
  ],

  // ===== WEAPONS & GEAR — built from item_military_component (robbery loot) =====
  // Dealer liquidation target: ~300-400 per component, flat across items, guns
  // highest (see SHOPS/WeaponDealer.js). Ported 1:1 from the live server config.
  gang_weapon_crafting: [
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
      itemName: "item_vest_3",
      materials: [
        { itemName: "item_military_component", count: 5, label: "MILITARY COMPONENT" },
      ],
      itemType: "COMMON",
      craftTimeMinutes: 0,
      output: 1,
      requiredGangLevel: 1,
      group: "OTHER",
      faction: "bloods",
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

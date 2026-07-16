// WEAPON DEALER (NPC that BUYS weapons from players).
//
// July 2026 rebalance. Two pricing rules:
//  1. Crafted weapons are built from item_military_component (weapon-shop robbery
//     loot, 15-90 comps each — see CRAFTS/GANG.js). The dealer pays a FLAT
//     ~300-400 per component so no single item is the best "loot ATM"
//     (the old machete price was 801/comp and everyone spam-crafted machetes).
//  2. Weapons bought from the weapon shop are bought back at ~50-62% of shop
//     price, so buy->sell always loses money.
// Ammo and vests have NO buyback on purpose — never add one (their materials
// come from the same components; a buyback would just be a second ATM).

const weaponDealerBuyMulti = 1;

const SellToWeaponDealer = [
  // Melee — crafted from military components
  {
    itemName: "item_melee_knife",
    label: "KNIFE",
    singlePrice: Math.floor(4500 * weaponDealerBuyMulti), // 15 comps -> 300/comp (shop sells at 11200, so shop-buy->sell also loses)
  },
  {
    itemName: "item_melee_machete",
    label: "MACHETE",
    singlePrice: Math.floor(6500 * weaponDealerBuyMulti), // 20 comps -> 325/comp (was 16023 = 801/comp, the worst loot ATM)
  },
  {
    itemName: "item_weapon_nightstick",
    label: "NIGHT STICK",
    singlePrice: Math.floor(4000 * weaponDealerBuyMulti), // Police drop item - value set lower than comparable crafted melee weapons
  },

  // Firearms — crafted (flat per-component rate) or shop-bought (~50% buyback)
  {
    itemName: "item_weapon_combat_pistol",
    label: "COMBAT PISTOL",
    singlePrice: Math.floor(9000 * weaponDealerBuyMulti), // crafted: 30 comps -> 300/comp; shop sells 17600 -> ~51% buyback
  },
  {
    itemName: "item_weapon_double_action_revolver",
    label: "DOUBLE ACTION REVOLVER",
    singlePrice: Math.floor(16506 * weaponDealerBuyMulti), // 45 comps -> 367/comp
  },
  {
    itemName: "item_weapon_db_shotgun",
    label: "DB SHOTGUN",
    singlePrice: Math.floor(22086 * weaponDealerBuyMulti), // 60 comps -> 368/comp
  },
  {
    itemName: "item_weapon_micro_smg",
    label: "MICRO SMG",
    singlePrice: Math.floor(20506 * weaponDealerBuyMulti), // 65 comps -> 315/comp
  },
  {
    itemName: "item_weapon_smg",
    label: "SMG",
    singlePrice: Math.floor(15500 * weaponDealerBuyMulti), // shop sells 28000 -> ~55% buyback
  },
  {
    itemName: "item_weapon_sawnoff_shotgun",
    label: "SAWNOFF SHOTGUN",
    singlePrice: Math.floor(27667 * weaponDealerBuyMulti), // 70 comps -> 395/comp (best rate, highest gang level)
  },
  {
    itemName: "item_weapon_compact_rifle",
    label: "COMPACT RIFLE",
    singlePrice: Math.floor(28638 * weaponDealerBuyMulti), // 90 comps -> 318/comp
  },
  {
    itemName: "item_weapon_pump_shotgun",
    label: "PUMP SHOTGUN",
    singlePrice: Math.floor(20000 * weaponDealerBuyMulti), // shop sells 32000 -> ~62% buyback
  },
  {
    itemName: "item_weapon_advanced_rifle",
    label: "ADVANCED RIFLE",
    singlePrice: Math.floor(27500 * weaponDealerBuyMulti), // shop sells 44000 -> ~62% buyback
  },
];


export const WeaponDealer = { sell: SellToWeaponDealer };

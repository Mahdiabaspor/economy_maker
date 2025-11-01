// Ammo price constants (previously imported from AllItemsBuyPrice.js - now commented out as prices are not used)
// const AMMO_9MM_PRICE = 10;
// const AMMO_BUCKSHOT_PRICE = 30;
// const AMMO_556_PRICE = 20;
// const AMMO_762_PRICE = 300;

const weaponDealerBuyMulti = 1;

const SellToWeaponDealer = [
  // Weapon Components - Crafted Parts (5-10% margin)
  {
    itemName: "item_normal_barrel",
    label: "NORMAL BARREL",
    singlePrice: Math.floor(4005 * weaponDealerBuyMulti), // Cost: 1 reinforced steel (3815) = 3815 + 190 profit (5% margin)
  },
  {
    itemName: "item_reinforced_barrel",
    label: "REINFORCED BARREL", 
    singlePrice: Math.floor(5318 * weaponDealerBuyMulti), // Cost: 1 reinforced steel (3815) + 1 gold bar (1250) = 5065 + 253 profit (5% margin)
  },
  {
    itemName: "item_grip_weapon",
    label: "WEAPON GRIP",
    singlePrice: Math.floor(2913 * weaponDealerBuyMulti), // Cost: 3 iron bars (925 × 3 = 2775) = 2775 + 138 profit (5% margin)
  },
  {
    itemName: "item_stock_weapon",
    label: "WEAPON STOCK",
    singlePrice: Math.floor(2913 * weaponDealerBuyMulti), // Cost: 3 iron bars (925 × 3 = 2775) = 2775 + 138 profit (5% margin)
  },
  {
    itemName: "item_normal_trigger",
    label: "NORMAL TRIGGER",
    singlePrice: Math.floor(3255 * weaponDealerBuyMulti), // Cost: 2 iron bars (925 × 2 = 1850) + 1 gold bar (1250) = 3100 + 155 profit (5% margin)
  },
  {
    itemName: "item_advanced_trigger",
    label: "ADVANCED TRIGGER",
    singlePrice: Math.floor(5318 * weaponDealerBuyMulti), // Cost: 1 gold bar (1250) + 1 reinforced steel (3815) = 5065 + 253 profit (5% margin)
  },
  {
    itemName: "item_scope_weapon",
    label: "WEAPON SCOPE",
    singlePrice: Math.floor(10636 * weaponDealerBuyMulti), // Cost: 2 gold bars (1250 × 2 = 2500) + 2 reinforced steel (3815 × 2 = 7630) = 10130 + 506 profit (5% margin)
  },
  
  // Melee Weapons - Shop items at 50% buyback rate
  {
    itemName: "item_melee_knife",
    label: "KNIFE",
    singlePrice: Math.floor(7000 * weaponDealerBuyMulti), // Weapon shop sells for 14000, dealer buys at 50% (7000) to prevent economy exploit
  },
  {
    itemName: "item_melee_machete",
    label: "MACHETE", 
    singlePrice: Math.floor(16023 * weaponDealerBuyMulti), // Cost: 4 reinforced steel (3815 × 4 = 15260) + 763 profit (5% margin)
  },
  {
    itemName: "item_weapon_nightstick",
    label: "NIGHT STICK",
    singlePrice: Math.floor(4000 * weaponDealerBuyMulti), // Police drop item - value set lower than comparable crafted melee weapons
  },
  
  // Firearms - Shop items at 50% buyback rate, crafted items at 5-8% margin
  {
    itemName: "item_weapon_combat_pistol",
    label: "COMBAT PISTOL",
    singlePrice: Math.floor(9000 * weaponDealerBuyMulti), // Weapon shop sells for 22000, dealer buys at 50% (11000) to prevent economy exploit
  },
  {
    itemName: "item_weapon_double_action_revolver",
    label: "DOUBLE ACTION REVOLVER",
    singlePrice: Math.floor(16506 * weaponDealerBuyMulti), // Cost: 1 advanced trigger (5315) + 2 normal barrels (3815 × 2 = 7630) + 1 grip (2775) = 15720 + 786 profit (5% margin)
  },
  {
    itemName: "item_weapon_db_shotgun",
    label: "DB SHOTGUN",
    singlePrice: Math.floor(22086 * weaponDealerBuyMulti), // Cost: 1 reinforced barrel (5315) + 1 advanced trigger (5315) + 1 grip (2775) + 2 reinforced steel (3815 × 2 = 7630) = 21035 + 1051 profit (5% margin)
  },
  {
    itemName: "item_weapon_micro_smg",
    label: "MICRO SMG",
    singlePrice: Math.floor(20506 * weaponDealerBuyMulti), // Cost: 2 reinforced barrels (5315 × 2 = 10630) + 1 normal trigger (3350) + 1 grip (2775) + 1 stock (2775) = 19530 + 976 profit (5% margin)
  },
  {
    itemName: "item_weapon_smg",
    label: "SMG",
    singlePrice: Math.floor(15500 * weaponDealerBuyMulti), // Weapon shop sells for 35000, dealer buys at 50% (17500) to prevent economy exploit
  },
  {
    itemName: "item_weapon_sawnoff_shotgun",
    label: "SAWNOFF SHOTGUN",
    singlePrice: Math.floor(27667 * weaponDealerBuyMulti), // Cost: 1 advanced trigger (5315) + 2 reinforced barrels (5315 × 2 = 10630) + 1 grip (2775) + 2 reinforced steel (3815 × 2 = 7630) = 26350 + 1317 profit (5% margin)
  },
  {
    itemName: "item_weapon_compact_rifle",
    label: "COMPACT RIFLE",
    singlePrice: Math.floor(28638 * weaponDealerBuyMulti), // Cost: 1 reinforced barrel (5315) + 1 advanced trigger (5315) + 1 grip (2775) + 2 stocks (2775 × 2 = 5550) + 2 reinforced steel (3815 × 2 = 7630) = 26585 + 2053 profit (7.7% margin)
  },
  {
    itemName: "item_weapon_pump_shotgun",
    label: "PUMP SHOTGUN",
    singlePrice: Math.floor(20000 * weaponDealerBuyMulti), // Weapon shop sells for 40000, dealer buys at 50% (20000) to prevent economy exploit
  },
  {
    itemName: "item_weapon_advanced_rifle",
    label: "ADVANCED RIFLE",
    singlePrice: Math.floor(27500 * weaponDealerBuyMulti), // Weapon shop sells for 55000, dealer buys at 50% (27500) to prevent economy exploit
  },
  
  // Police Drop Weapons - Higher Tier (priced reasonably for risk/reward)
  // {
  //   itemName: "item_weapon_stun_gun",
  //   label: "STUN GUN",
  //   singlePrice: Math.floor(7500 * weaponDealerBuyMulti), // Police drop item - moderate risk, lower value weapon
  // },
  // {
  //   itemName: "item_weapon_combat_pwd",
  //   label: "COMBAT PWD",
  //   singlePrice: Math.floor(15000 * weaponDealerBuyMulti), // Police drop item - high risk, medium value weapon
  // },
  // {
  //   itemName: "item_weapon_combat_shotgun",
  //   label: "COMBAT SHOTGUN",
  //   singlePrice: Math.floor(18000 * weaponDealerBuyMulti), // Police drop item - high risk, medium-high value weapon
  // },
  // {
  //   itemName: "item_weapon_combat_mg",
  //   label: "COMBAT MG",
  //   singlePrice: Math.floor(22000 * weaponDealerBuyMulti), // Police drop item - very high risk, high value weapon
  // },
  // {
  //   itemName: "item_weapon_carbine_rifle",
  //   label: "CARBINE RIFLE",
  //   singlePrice: Math.floor(20000 * weaponDealerBuyMulti), // Police drop item - high risk, high value weapon
  // },
  // {
  //   itemName: "item_weapon_sniper_rifle",
  //   label: "SNIPER RIFLE",
  //   singlePrice: Math.floor(25000 * weaponDealerBuyMulti), // Police drop item - very high risk, very high value weapon
  // },
  
  // Ammunition - priced at 50% of shop price
  // {
  //   itemName: "item_bullet_9_mm",
  //   label: "9MM BULLETS",
  //   singlePrice: Math.floor((AMMO_9MM_PRICE / 2) * weaponDealerBuyMulti),
  // },
  // {
  //   itemName: "item_bullet_shotgun",
  //   label: "SHOTGUN SHELLS",
  //   singlePrice: Math.floor((AMMO_BUCKSHOT_PRICE / 2) * weaponDealerBuyMulti),
  // },
  // {
  //   itemName: "item_bullet_5_56_mm",
  //   label: "5.56MM BULLETS",
  //   singlePrice: Math.floor((AMMO_556_PRICE / 2) * weaponDealerBuyMulti),
  // },
  // {
  //   itemName: "item_bullet_7_62_mm",
  //   label: "7.62MM BULLETS",
  //   singlePrice: Math.floor((AMMO_762_PRICE / 2) * weaponDealerBuyMulti),
  // },
];


export const WeaponDealer = { sell: SellToWeaponDealer };
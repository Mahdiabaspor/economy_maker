import { MUSKET_BUY_PRICE } from "../JOBS/HUNTER.js";

const weaponPriceMMultiplier = 1;

export const weaponShopConfig = [
    {
    label: "Vest",
    itemName: "item_vest_7",
    category: "Vest",
    ammoType: null,
    singlePrice: Math.floor(6000 * weaponPriceMMultiplier),
  },
  {
    label: "Knife",
    itemName: "item_melee_knife",
    category: "Rifle",
    ammoType: null,
    singlePrice: Math.floor(11200 * weaponPriceMMultiplier),
  },
  {
    label: "Combat Pistol",
    itemName: "item_weapon_combat_pistol",
    category: "Pistol",
    ammoType: "9mm",
    singlePrice: Math.floor(17600 * weaponPriceMMultiplier),
  },
  {
    label: "AP Pistol",
    itemName: "item_weapon_appistol",
    category: "Pistol",
    ammoType: "9mm",
    singlePrice: Math.floor(24000 * weaponPriceMMultiplier),
  },
  {
    label: "Smg",
    itemName: "item_weapon_smg",
    category: "Sub MachinGun",
    ammoType: "9mm",
    singlePrice: Math.floor(28000 * weaponPriceMMultiplier),
  },
  {
    label: "Pump Shotgun",
    itemName: "item_weapon_pump_shotgun",
    category: "ShotGun",
    ammoType: "buckshot",
    singlePrice: Math.floor(32000 * weaponPriceMMultiplier),
  },
  {
    label: "Advanced Rifle",
    itemName: "item_weapon_advanced_rifle",
    category: "Rifle",
    ammoType: "5.56mm",
    singlePrice: Math.floor(44000 * weaponPriceMMultiplier),
  },

  {
    label: "Bullet 5.56 Mm",
    itemName: "item_bullet_5_56_mm",
    category: "Ammo",
    ammoType: null,
    singlePrice: Math.floor(40 * weaponPriceMMultiplier),
  },
  // {
  //   label: "Bullet 7.62 Mm",
  //   itemName: "item_bullet_7_62_mm",
  //   category: "Ammo",
  //   ammoType: null,
  //   singlePrice: Math.floor(300 * weaponPriceMMultiplier),
  // },
  {
    label: "Bullet 9 Mm",
    itemName: "item_bullet_9_mm",
    category: "Ammo",
    ammoType: null,
    singlePrice: Math.floor(30 * weaponPriceMMultiplier),
  },
  {
    label: "Bullet Shoutgun",
    itemName: "item_bullet_shotgun",
    category: "Ammo",
    ammoType: null,
    singlePrice: Math.floor(80 * weaponPriceMMultiplier),
  },

  // ── hunter — COMMENTED OUT WHILE THE JOB IS SWITCHED OFF ────────────────
  // The Hunter is `false` in
  //     high-roleplay-v1/src/src/shared/jobs/jobToggles.shared.ts
  // and this row is its last visible trace: the musket is the job's tool, and
  // with no animals spawning it is a rifle that shoots nothing worth shooting.
  //
  // TO BRING IT BACK: flip `hunter` in jobToggles.shared.ts, un-comment this
  // block, then `npm run generate` and copy economyConfig.json into BOTH
  // high-ui/ and high-roleplay-v1/src/src/shared/. The MUSKET_BUY_PRICE import
  // at the top of this file is left in place so this is a one-step edit.
  //
  // Hunter's tool. Prices are imported from JOBS/HUNTER.js, never retyped —
  // that file is the source of truth for both of them.
  // {
  //   label: "Musket",
  //   itemName: "item_weapon_musket",
  //   category: "Rifle",
  //   // Standard buckshot — the musket shares the SHOTGUN_AMMO pool with every
  //   // other shotgun, so a hunter buys the same shells they already stock. There
  //   // is deliberately no dedicated musket-ball item.
  //   ammoType: "buckshot",
  //   singlePrice: Math.floor(MUSKET_BUY_PRICE * weaponPriceMMultiplier),
  // },

  // { label: "Assault Shotgun", itemName: "item_weapon_assault_shotgun" },
  // { label: "Bs Gas", itemName: "item_weapon_bs_gas" },
  // { label: "Carbine Rifle Mk2", itemName: "item_weapon_carbine_rifle_mk2" },
  // { label: "Combat Mg Mk2", itemName: "item_weapon_combat_mg_mk2" },
  // { label: "Combat Pwd", itemName: "item_weapon_combat_pwd" },
  // { label: "Combat Shotgun", itemName: "item_weapon_combat_shotgun" },
  // { label: "Double Action Revolver", itemName: "item_weapon_double_action_revolver" },
  // { label: "Flashligh", itemName: "item_weapon_flashligh" },
  // { label: "Heavy Pistol", itemName: "item_weapon_heavy_pistol" },
  // { label: "Heavy Rifle", itemName: "item_weapon_heavy_rifle" },
  // { label: "Heavy Shotgun", itemName: "item_weapon_heavy_shotgun" },
  // { label: "Heavy Sniper", itemName: "item_weapon_heavy_sniper" },
  // { label: "Marksman Rifle", itemName: "item_weapon_marksman_rifle" },
  // { label: "Military Rifle", itemName: "item_weapon_military_rifle" },
  // { label: "Nightstic", itemName: "item_weapon_nightstic" },
  // { label: "Pistol 50", itemName: "item_weapon_pistol_50" },
  // { label: "Smg Mk2", itemName: "item_weapon_smg_mk2" },
  // { label: "Sniper Rifle", itemName: "item_weapon_sniper_rifle" },
  // { label: "Special Carbine", itemName: "item_weapon_special_carbine" },
  // { label: "Stungun", itemName: "item_weapon_stungun" },
  // { label: "Tactical Rifle", itemName: "item_weapon_tactical_rifle" },
  // { label: "Tecpistol", itemName: "item_weapon_tecpistol" },
];

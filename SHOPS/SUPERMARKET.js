import { AXE_COMMON_BUY_PRICE } from "../JOBS/LUMBER.js";
import {
  FISHING_ROD_BUY_PRICE,
  FISH_BAIT_BUY_PRICE,
  FISH_BAIT_IMPROVED_BUY_PRICE,
  FISH_BAIT_EXTRA_BUY_PRICE,
} from "../JOBS/FISHING.js";

const superMarketMultiplier = 1;
export const superMarketConfig = {
  regular: [
    {
      itemName: "item_walkie_talkie",
      label: "WALKIE TALKIE",
      singlePrice: Math.floor(3350 * superMarketMultiplier * 0.8),
    },
    {
      itemName: "item_drink_water",
      label: "MINERAL WATER",
      singlePrice: Math.floor(150 * superMarketMultiplier ),
    },
    // Legal hardware. It is also half the ATM-robbery kit, but on its own it
    // opens nothing — the hacking chip is the gated half (CRAFTS/GANG.js).
    {
      itemName: "item_screwdriver",
      label: "SCREWDRIVER",
      singlePrice: Math.floor(1200 * superMarketMultiplier),
    },
    // ═══════════════════════════════════════════════════════════════════════
    // JOB TOOLS — COMMENTED OUT WHILE THEIR JOBS ARE SWITCHED OFF
    //
    // Mushroom, Lumberjack, Stonemason and Fisherman have NO NPC and NO
    // employment screen: buying the tool IS the "get hired" step. So while
    // those jobs are false in
    //     high-roleplay-v1/src/src/shared/jobs/jobToggles.shared.ts
    // these rows are the last visible trace of them, and a player who bought a
    // rod would be left holding an item that does nothing.
    //
    // TO BRING A JOB BACK: flip its flag in jobToggles.shared.ts, un-comment
    // ONLY that job's block below, then `npm run generate` and copy
    // economyConfig.json into BOTH high-ui/ and high-roleplay-v1/src/src/shared/.
    //
    // The imports at the top of this file are deliberately left in place so
    // un-commenting a block is a one-step edit.
    // ═══════════════════════════════════════════════════════════════════════

    // ── mushroom ───────────────────────────────────────────────────────────
    // The Mushroom Picker's only piece of equipment. 200 uses, $9 a pick.
    // This IS the "get hired" step for that job — there is no NPC and no
    // employment screen, so without this row the job cannot be started.
    // {
    //   itemName: "item_shovel",
    //   label: "SHOVEL",
    //   singlePrice: Math.floor(1800 * superMarketMultiplier),
    // },

    // ── lumberjack ─────────────────────────────────────────────────────────
    // The Lumberjack's only piece of equipment, and — exactly like the shovel
    // above — the job's real "get hired" step: there is no NPC and no
    // employment screen, so without this row the job cannot be started at all.
    // Price imported from JOBS/LUMBER.js so the shop and the job's own config
    // can never disagree.
    // {
    //   itemName: "item_axe_common",
    //   label: "COMMON AXE",
    //   singlePrice: Math.floor(AXE_COMMON_BUY_PRICE * superMarketMultiplier),
    // },

    // ── stonemason ─────────────────────────────────────────────────────────
    // Stonemason pickaxes. The tier gate is enforced server-side by
    // jobs/stonemason/pickaxeShop.sv.ts (canBuy) and again at the rock; the
    // catalogue only paints the lock.
    // {
    //   itemName: "item_pickaxe_stone_1",
    //   label: "ORDINARY PICKAXE",
    //   singlePrice: Math.floor(7650 * superMarketMultiplier),
    // },
    // {
    //   itemName: "item_pickaxe_stone_2",
    //   label: "IMPROVED PICKAXE",
    //   singlePrice: Math.floor(15300 * superMarketMultiplier),
    // },
    // {
    //   itemName: "item_pickaxe_stone_3",
    //   label: "BEST PICKAXE",
    //   singlePrice: Math.floor(22950 * superMarketMultiplier),
    // },

    // ── fishing ────────────────────────────────────────────────────────────
    // The Fisherman's rod and its three baits. Exactly like the shovel and the
    // axe above, THESE FOUR ROWS ARE the job's "get hired" step — there is no
    // NPC and no employment screen, so without them the job cannot be started at
    // all. Prices imported from JOBS/FISHING.js so the shop and the job's own
    // config cannot disagree.
    // {
    //   itemName: "item_fishing_rod",
    //   label: "FISHING ROD",
    //   singlePrice: Math.floor(FISHING_ROD_BUY_PRICE * superMarketMultiplier),
    // },
    // {
    //   itemName: "item_fish_bait",
    //   label: "FISH BAIT",
    //   singlePrice: Math.floor(FISH_BAIT_BUY_PRICE * superMarketMultiplier),
    // },
    // The two upper bait tiers are level-gated server-side by
    // jobs/fishing/fishing.sv.ts (`fishing:bait:canbuy`) and again at the cast;
    // the catalogue only paints the lock — the same split the stonemason
    // pickaxes use.
    // {
    //   itemName: "item_fish_bait_improved",
    //   label: "IMPROVED FISH BAIT",
    //   singlePrice: Math.floor(FISH_BAIT_IMPROVED_BUY_PRICE * superMarketMultiplier),
    // },
    // {
    //   itemName: "item_fish_bait_extra",
    //   label: "EXTRA FISH BAIT",
    //   singlePrice: Math.floor(FISH_BAIT_EXTRA_BUY_PRICE * superMarketMultiplier),
    // },
    // ═══════════════════ end job tools ═════════════════════════════════════
    // {
    //     itemName: 'item_drink_sprunk',
    //     label: 'SPRUNK SODA',
    //     singlePrice:Math.floor( 600 * superMarketMultiplier * 0.80),
    // },

    {
      itemName: "item_food_chocolate",
      label: "CHOCOLATE BAR",
      singlePrice: Math.floor(150 * superMarketMultiplier),
    },
    // {
    //     itemName: 'item_food_hamburger',
    //     label: 'HAMBURGER',
    //     singlePrice:Math.floor( 570 * superMarketMultiplier * 0.80),
    // },
    {
      itemName: "item_food_burger",
      label: "HAMBURGER",
      singlePrice: Math.floor(230 * superMarketMultiplier ),
    },
    {
      itemName: "item_food_double_burger",
      label: "Double Burger",
      singlePrice: Math.floor(420 * superMarketMultiplier ),
    },
    {
      itemName: "item_drink_sprunk",
      label: "SPRUNK SODA",
      singlePrice: Math.floor(
        215 * superMarketMultiplier
      ),
    },
    {
      itemName: "item_fireworks_box",
      label: "Fireworks Box",
      singlePrice: Math.floor(35000 * superMarketMultiplier),
    },
    {
      itemName: "item_fireworks",
      label: "Fireworks",
      singlePrice: Math.floor(7000 * superMarketMultiplier),
    },
    {
      itemName: "item_binoculars",
      label: "BINOCULARS",
      singlePrice: Math.floor(3500 * superMarketMultiplier),
    },

    {
      itemName: "item_repairkit",
      label: "REPAIR KIT",
      singlePrice: Math.floor(4000 * superMarketMultiplier),
    },
    {
      itemName: "item_fabric",
      label: "FABRIC",
      singlePrice: Math.floor(200 * superMarketMultiplier),
    },
    // {
    //     itemName: 'item_repairkit',
    //     label: 'REPAIR KIT',
    //     singlePrice:Math.floor( 45 * superMarketMultiplier),
    // },
    {
      itemName: "item_fuel_can",
      label: "fuel CAN",
      singlePrice: Math.floor(900 * superMarketMultiplier),
    },
    {
      itemName: "item_methanol",
      label: "METHHANOL",
      singlePrice: Math.floor(800 * superMarketMultiplier),
    },
    {
      itemName: "item_house_cleaner",
      label: "HOUSE CLEANER",
      singlePrice: Math.floor(600 * superMarketMultiplier),
    },
    {
      itemName: "item_sodium_bicarbonate",
      label: "SODIUM BICARBONATE",
      singlePrice: Math.floor(550 * superMarketMultiplier),
    },
    {
      itemName: "item_battery",
      label: "BATTERY",
      singlePrice: Math.floor(500 * superMarketMultiplier),
    },
    {
      itemName: "item_engine_oil",
      label: "ENGINE OIL",
      singlePrice: Math.floor(4500 * superMarketMultiplier),
    },
    {
      itemName: "item_car_battery",
      label: "CAR BATTERY",
      singlePrice: Math.floor(12000 * superMarketMultiplier),
    },
    {
      itemName: "item_paint_color",
      label: "PAINT COLOR",
      singlePrice: Math.floor(600 * superMarketMultiplier),
    },
    {
      itemName: "item_empty_plastic_pack",
      label: "EMPTY PLASTIC PACK",
      singlePrice: Math.floor(433 * superMarketMultiplier),
    },
    {
      itemName: "item_mining_map",
      label: "MINING MAP",
      singlePrice: Math.floor(3000 * superMarketMultiplier),
    },
  ],
};

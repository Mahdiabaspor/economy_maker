import fs from "fs";
import { garageConfig, phoneGarageConfig } from "./SHOPS/GARAGE.js";
import { gasStationConfig } from "./SHOPS/GASSTATION.js";
import { weaponShopConfig } from "./SHOPS/WEAPONSHOP.js";
import { carRentalsConfig } from "./SHOPS/RENT_CARS.js";
import { mechanicShopConfig } from "./SHOPS/MECHANICSHOP.js";
import { superMarketConfig } from "./SHOPS/SUPERMARKET.js";
import { emsShopConfig, emsShopSellConfig } from "./SHOPS/EMS.js";
import { CraftEmsConfig } from "./CRAFTS/EMS.js";
import { CraftingGangConfig } from "./CRAFTS/GANG.js";
import { STATE_SHARED_EQUIPMENT } from "./CRAFTS/STATE_SHARED.js";
import { POLICE_EQUIPMENT } from "./CRAFTS/POLICE.js";
import { SHERIFF_EQUIPMENT } from "./CRAFTS/SHERIFF.js";
import { FIB_EQUIPMENT } from "./CRAFTS/FIB.js";
import { governmentSalary } from "./SALARY/SALARY.js";
import { miningJobConfig } from "./JOBS/MINING.js";
import { electricJobConfig } from "./JOBS/ELECTRIC.js";
import { busJobConfig } from "./JOBS/BUS.js";
// JOB_SPECS pack — eight earning jobs, one source file each. See
// JOB_SPECS/00-CONVENTIONS.md §9: these are the source of truth for their
// prices, and each one is mirrored by hand in the job's shared/jobs/*.shared.ts.
import { postmanJobConfig } from "./JOBS/POSTMAN.js";
import { taxiJobConfig } from "./JOBS/TAXI.js";
import { forkliftJobConfig } from "./JOBS/FORKLIFT.js";
import { lawnmowerJobConfig } from "./JOBS/LAWNMOWER.js";
import { lumberJobConfig } from "./JOBS/LUMBER.js";
import { mushroomItems, mushroomToolConfig } from "./JOBS/MUSHROOM.js";
import { stonemasonJobConfig } from "./JOBS/STONEMASON.js";
import { hunterJobConfig } from "./JOBS/HUNTER.js";
// JOB_SPECS pack 2 — six more earning jobs (JOB_SPECS/_integration/*.md
// `## economy`). Electrician reuses the existing JOBS/ELECTRIC.js row, EXTENDED
// rather than renamed: rewards.ts reads its `levelRewards` for eight jobs.
import { garbageJobConfig } from "./JOBS/GARBAGE.js";
import { collectorJobConfig } from "./JOBS/COLLECTOR.js";
import { aquanautJobConfig } from "./JOBS/AQUANAUT.js";
import { fishingJobConfig } from "./JOBS/FISHING.js";
import { mechanicJobConfig } from "./JOBS/MECHANIC.js";
import { licenseDmvConfig } from "./SHOPS/LICENSEDMV.js";
import { tunningConfig } from "./SHOPS/TUNNING.js";

import { EmsConfig } from "./Factions/Ems.js";
import { GANG } from "./Factions/GANGS.js";
import { plateShop } from "./SHOPS/PLATESHOP.js";
import { itemsProperties, medicalItems, MiningItems, weaponsItem } from "./items/itemProperties.js";
import { DrugDealer } from "./SHOPS/DrugLab.js";
import { WeaponDealer } from "./SHOPS/WeaponDealer.js";
import * as priceConstants from "./items/AllItemsBuyPrice.js";
import { BurgerShotBenches } from "./JOBS/FoodJobs.js";
import { junkItems } from "./JOBS/Junk.js";
import { boozeShopConfig } from "./SHOPS/BooozeShop.js";
import { vendingMachineConfig } from "./SHOPS/VENDINGMACHINE.js";
import { checkEconomyCircles } from "./checkEconomyCircles.js";


// State equipment bench — one config key per department, mirroring the source
// files in CRAFTS/. A department's bench shows CraftStateSharedConfig plus its
// OWN key and nothing else, so LSPD's vests are not in the sheriff's list and
// the sheriff's vest is not in LSPD's. The concat happens where the bench is
// read (high-ui craftBenchConfigs.tsx, server craftItem.ts).
//
// National Guard and Government have no exclusive blueprints yet, so their
// benches are the shared list alone — give them a key here the day they do.
const CraftStateSharedConfig = STATE_SHARED_EQUIPMENT;
const CraftPoliceConfig = POLICE_EQUIPMENT;
const CraftSheriffConfig = SHERIFF_EQUIPMENT;
const CraftFibConfig = FIB_EQUIPMENT;

const economyConfig = {
  shops: {
    garageConfig,
    phoneGarageConfig,
    gasStationConfig,
    licenseDmvConfig,
    weaponShopConfig,
    carRentalsConfig,
    mechanicShopConfig,
    emsShopConfig:{
      buyConfig:emsShopConfig,
      sellConfig:emsShopSellConfig,
    },
    superMarketConfig,
    vendingMachineConfig,
    tunningConfig,
    // dealershipCars / VipDealershipCars MOVED OUT on 2026-07-30. These were
    // never really display data: licenseGuard.sv.ts builds its model -> required
    // license table from `Class`, and trunkSlots.ts keys off it, so the server
    // has to own them. They now live in the gamemode as typed TS modules:
    //   high-roleplay-v1/src/src/shared/shops/dealership/  (canonical)
    //   high-ui/src/Components/DealerShip/Data/            (CEF copy)
    // Run tools/sync-shop-catalogs.mjs after editing. Prices stayed as
    // calcPrice(hoursToGain) rather than being frozen to integers, so the
    // economy is still retunable from one constant. Do not re-add them here.
    // Insurance and FoodSupplierConfig DELETED on 2026-07-30 — both features are
    // gone from the server. Insurance went when City Hall was gutted (2026-07-29,
    // replaced by the Weapon License) and had no readers left in either project.
    // The raw-food supplier shop's only opener, Browser.toggleUI('buyRawFood'),
    // was already commented out in client jobMenus.ts, so the route was
    // unreachable. Neither was migrated anywhere; they were just deleted.
    plateShop,
    // clothShop / clothShopPremium MOVED OUT on 2026-07-30 — 277 KB, the single
    // biggest thing in this file, for 3752 items one CEF component read. They
    // are now ONE catalog in the gamemode, because the split was misleading:
    // "premium" is a shop tab, not a currency (71 of the bags are premium-tab
    // and cash-priced), and no category ever held the same drawable in both
    // shops. Merging gave the server one lookup for "what does this cost, in
    // what currency" — which buy:clothes had never had.
    //   high-roleplay-v1/src/src/shared/shops/clothes/  (canonical)
    //   high-ui/src/Components/ClothShop/Data/          (CEF copy)
    // The `multi = 0.5` halving survived as cash() in the catalog. Run
    // tools/sync-shop-catalogs.mjs after editing. Do not re-add them here.
    // tattooShop MOVED OUT on 2026-07-30. The generator emitted the same 828
    // designs twice — once per gender, pre-split into 12 zone buckets — which
    // was 344 KB of this 792 KB file, on a payload deflated and synced to every
    // player at join. It is now a flat 177 KB array owned by the gamemode:
    //   high-roleplay-v1/src/src/shared/shops/tattoo/tattooCatalog.json (canonical)
    //   high-ui/src/Components/TattoSalon/data/tattooCatalog.json      (CEF copy)
    // Edit prices there and run tools/sync-shop-catalogs.mjs. Do not re-add it
    // here.
    // beautySalon MOVED OUT on 2026-07-30. Two things were wrong with it here.
    // The eight flat prices (Blemishes 1650 ... SunDamage 750) were dead — every
    // CEF page hardcoded 800, so none of them had ever taken effect — and
    // barber.sv.ts imported no config at all, charging whatever AllPrice the
    // client sent. Hair goes to 111,000. Now:
    //   high-roleplay-v1/src/src/shared/shops/beautySalon/  (canonical)
    //   high-ui/src/Components/BeautySalon/Data/            (CEF copy)
    // multi = 0.5 survived as cash(); the eight are one OVERLAY_PRICE that is
    // actually read. Run tools/sync-shop-catalogs.mjs. Do not re-add it here.
    DrugDealer:DrugDealer,
    WeaponDealer:WeaponDealer,
    boozeShopConfig,
  },
  crafting: {
    CraftEmsConfig,
    CraftingGangConfig,
    // state equipment bench — shared gear + one key per department
    CraftStateSharedConfig,
    CraftPoliceConfig,
    CraftSheriffConfig,
    CraftFibConfig,
  },
  jobs: {
    miningJobConfig,
    electricJobConfig,
    busJobConfig,
    foodJobs:{
      burgerShot:BurgerShotBenches
    }
    ,
    junk:junkItems,
    // JOB_SPECS pack. Key names follow each job's integration manifest
    // (JOB_SPECS/_integration/*.md `## economy`) — the two Economy.Types.ts
    // files are maintained separately and must carry the same names.
    postmanJobConfig,
    taxiJobConfig,
    forkliftJobConfig,
    lawnmowerJobConfig,
    stonemasonJobConfig,
    lumberjack: lumberJobConfig,
    mushroom: { items: mushroomItems, config: mushroomToolConfig },
    hunter: hunterJobConfig,
    // JOB_SPECS pack 2. Key names follow each job's integration manifest.
    // Electrician has no key of its own here — it EXTENDS electricJobConfig above.
    garbageJobConfig,
    collectorJobConfig,
    aquanaut: aquanautJobConfig,
    fishing: fishingJobConfig,
    mechanicJobConfig
  },
  factionConfigs: {
    EmsConfig,
    gangConfig: GANG,
  },
  governmentSalary,
  itemsProperties:{
    ...MiningItems,
    ...medicalItems,
    ...weaponsItem,
    ...itemsProperties,
  }

};

// Guard: fail the build if any "buy from NPC -> craft -> sell to NPC" loop is
// profitable (crafting is instant and uncapped, so such a loop = infinite money).
checkEconomyCircles(economyConfig);

// Write to JSON file without pretty-formatting (no whitespace)
fs.writeFileSync("economyConfig.json", JSON.stringify(economyConfig));

// If you still need a readable version for development, create a separate file
fs.writeFileSync("economyConfig.pretty.json", JSON.stringify(economyConfig, null, 2));

console.log("Economy config JSON file generated successfully.");

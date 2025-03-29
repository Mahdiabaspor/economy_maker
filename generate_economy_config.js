import fs from "fs";
import { garageConfig } from "./SHOPS/GARAGE.js";
import { gasStationConfig } from "./SHOPS/GASSTATION.js";
import { weaponShopConfig } from "./SHOPS/WEAPONSHOP.js";
import { carRentalsConfig } from "./SHOPS/RENT_CARS.js";
import { mechanicShopConfig } from "./SHOPS/MECHANICSHOP.js";
import { superMarketConfig } from "./SHOPS/SUPERMARKET.js";
import { emsShopConfig, emsShopSellConfig } from "./SHOPS/EMS.js";
import { CraftEmsConfig } from "./CRAFTS/EMS.js";
import { CraftingGangConfig } from "./CRAFTS/GANG.js";
import { governmentSalary } from "./SALARY/SALARY.js";
import { miningJobConfig } from "./JOBS/MINING.js";
import { electricJobConfig } from "./JOBS/ELECTRIC.js";
import { busJobConfig } from "./JOBS/BUS.js";
import { licenseDmvConfig } from "./SHOPS/LICENSEDMV.js";
import { tunningConfig } from "./SHOPS/TUNNING.js";

import { EmsConfig } from "./Factions/Ems.js";
import { carV3 } from "./SHOPS/Dealership2.js";
import { femaleCloth } from "./SHOPS/ClothShop/Female.js";
import { maleCloth } from "./SHOPS/ClothShop/Male.js";
import { FemaleTattooPackage, MaleTattooPackage } from "./SHOPS/Tattoo.js";
import { VipDealershipCars } from "./SHOPS/VIPDEALERSHIP.js";
import { GANG } from "./Factions/GANGS.js";
import { beautySalon } from "./SHOPS/BEAUTYSALON.js";
import { plateShop } from "./SHOPS/PLATESHOP.js";
import { Insurance } from "./SHOPS/INSURANCE.js";


const economyConfig = {
  shops: {
    garageConfig,
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
    tunningConfig,
    dealershipCars: carV3,
    VipDealershipCars:VipDealershipCars,
    plateShop,
    clothShop: {
      male: maleCloth,
      female: femaleCloth,
    },
    tattooShop: {
      male: MaleTattooPackage,
      female: FemaleTattooPackage,
    },
    beautySalon: beautySalon,
    Insurance,
  },
  crafting: {
    CraftEmsConfig,
    CraftingGangConfig,
  },
  jobs: {
    miningJobConfig,
    electricJobConfig,
    busJobConfig,
  },
  factionConfigs: {
    EmsConfig,
    gangConfig: GANG,
  },
  governmentSalary,
};

// Write to JSON file
fs.writeFileSync("economyConfig.json", JSON.stringify(economyConfig, null, 2));

console.log("Economy config JSON file generated successfully.");

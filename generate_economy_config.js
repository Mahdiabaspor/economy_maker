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
import { itemsProperties, medicalItems, MiningItems, weaponsItem } from "./items/itemProperties.js";
import { DrugDealer } from "./SHOPS/DrugLab.js";
import { WeaponDealer } from "./SHOPS/WeaponDealer.js";
import { femaleClothP } from "./SHOPS/ClothShopPermium/Female.js";
import { maleClothP } from "./SHOPS/ClothShopPermium/Male.js";
import * as priceConstants from "./items/AllItemsBuyPrice.js";
import { BurgerShotBenches } from "./JOBS/FoodJobs.js";
import { FoodSupplierConfig } from "./SHOPS/FoodSuplier.js";
import { junkItems } from "./JOBS/Junk.js";
import { boozeShopConfig } from "./SHOPS/BooozeShop.js";
import { vendingMachineConfig } from "./SHOPS/VENDINGMACHINE.js";
import { checkEconomyCircles } from "./checkEconomyCircles.js";


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
    FoodSupplierConfig,
    superMarketConfig,
    vendingMachineConfig,
    tunningConfig,
    dealershipCars: carV3,
    VipDealershipCars:VipDealershipCars,
    plateShop,
    clothShop: {
      male: maleCloth,
      female: femaleCloth,
    },
    clothShopPremium: {
      male: maleClothP,
      female: femaleClothP,
    },
    tattooShop: {
      male: MaleTattooPackage,
      female: FemaleTattooPackage,
    },
    beautySalon: beautySalon,
    Insurance,
    DrugDealer:DrugDealer,
    WeaponDealer:WeaponDealer,
    boozeShopConfig,
  },
  crafting: {
    CraftEmsConfig,
    CraftingGangConfig,
  },
  jobs: {
    miningJobConfig,
    electricJobConfig,
    busJobConfig,
    foodJobs:{
      burgerShot:BurgerShotBenches
    }
    ,
    junk:junkItems
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

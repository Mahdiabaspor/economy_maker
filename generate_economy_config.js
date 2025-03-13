import fs from "fs";
import { garageConfig } from "./SHOPS/GARAGE.js";
import { gasStationConfig } from "./SHOPS/GASSTATION.js";
import { weaponShopConfig } from "./SHOPS/WEAPONSHOP.js";
import { carRentalsConfig } from "./SHOPS/RENT_CARS.js";
import { mechanicShopConfig } from "./SHOPS/MECHANICSHOP.js";
import {superMarketConfig} from "./SHOPS/SUPERMARKET.js"
import { emsShopConfig } from "./SHOPS/EMS.js";
import { CraftEmsConfig } from "./CRAFTS/EMS.js";
import { CraftingGangConfig } from "./CRAFTS/GANG.js";
import { governmentSalary } from "./SALARY/SALARY.js";
import { miningJobConfig } from "./JOBS/MINING.js";
import {  electricJobConfig } from "./JOBS/ELECTRIC.js";
import { busJobConfig } from "./JOBS/BUS.js";
import { licenseDmvConfig } from "./SHOPS/LICENSEDMV.js";
const economyConfig = {
  shops: {
    garageConfig,
    gasStationConfig,
    licenseDmvConfig,
    weaponShopConfig,
    carRentalsConfig,
    mechanicShopConfig,
    emsShopConfig,
    superMarketConfig
    
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

  governmentSalary,
  
};

// Write to JSON file
fs.writeFileSync("economyConfig.json", JSON.stringify(economyConfig, null, 2));

console.log("Economy config JSON file generated successfully.");

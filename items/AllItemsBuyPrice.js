/**
 * AllItemsBuyPrice.js - Central Item Price Repository
 * 
 * This file serves as the central repository for all item prices in the economy system.
 * It can be imported into other configuration files to ensure price consistency.
 */

// ===== BASIC CONSTANTS =====
export const COIN_VALUE = 750; // The value of one coin in game currency

// Multiplier used when calculating sell prices. Kept at 1 to preserve
// current pricing but allows tweaking later without touching every value.
export const SELL_PRICE_MULTIPLIER = 1;

// ===== GENERAL ITEMS =====
// Supermarket Items
export const WALKIE_TALKIE_PRICE = 4350;
export const MINERAL_WATER_PRICE = 250;
export const SPRUNK_SODA_PRICE = 400;
export const CHOCOLATE_BAR_PRICE = 250;
export const HAMBURGER_PRICE = 400;
export const REPAIR_KIT_PRICE = 4000;
export const FABRIC_PRICE = 200;

// ===== EMS MEDICAL ITEMS =====
// Raw Materials
export const ETHANOL_PRICE = 800;
export const MEDICINE_STABILIZER_PRICE = 250;
export const EMPTY_PILL_CAPSULE_PRICE = 250;
export const CAPSAICIN_POWDER_PRICE = 1000;

// Crafted Medical Items
export const MEDICAL_BANDAGE_PRICE = (ETHANOL_PRICE * 3 + FABRIC_PRICE * 5) / 5; // Calculated from materials divided by output
export const PAIN_KILLER_POWDER_PRICE = (MEDICINE_STABILIZER_PRICE * 4 + CAPSAICIN_POWDER_PRICE * 4) / 5; // Calculated from materials divided by output
export const PAIN_KILLER_PILL_PRICE = (EMPTY_PILL_CAPSULE_PRICE * 5 + PAIN_KILLER_POWDER_PRICE * 5) / 5; // Calculated from materials divided by output

// ===== FUEL =====
export const FUEL_PRICE_PER_LITER = 3;

// ===== DRUGS =====
// Raw Materials
export const WEED_RAW_PRICE = 500;
export const COCA_LEAVES_PRICE = 550;
export const SAFFAROLE_LEAVE_PRICE = 600;
export const BATTERY_PRICE = 500; // Estimated price for battery used in sulfuric acid
export const PAINT_COLOR_PRICE = 600; // Estimated price for paint color used in acetone
export const HOUSE_CLEANER_PRICE = 600; // Estimated price for house cleaner used in ammonia
export const METHANOL_PRICE = 600; // Estimated price for methanol
export const EMPTY_PLASTIC_PACK_PRICE = 433; // Estimated price from crafting formula

// Intermediate Drug Products
export const SULFURIC_ACID_PRICE = BATTERY_PRICE * 4 / 2; // Calculated from materials: 4 batteries produces 2 outputs
export const ACETONE_PRICE = PAINT_COLOR_PRICE * 2 / 2; // Calculated from materials: 2 paint color produces 2 outputs
export const AMMONIA_PRICE = HOUSE_CLEANER_PRICE * 4 / 2; // Calculated from materials: 4 house cleaners produces 2 outputs
export const SAFFAROLE_OIL_PRICE = SAFFAROLE_LEAVE_PRICE * 2 / 2; // Calculated from materials: 2 saffarole leaves produces 2 outputs
export const METHYLAMINE_CRYSTAL_PRICE = METHANOL_PRICE * 3 + AMMONIA_PRICE * 2; // Calculated from materials: 3 methanol + 2 ammonia
export const MDP2P_PRICE = ACETONE_PRICE * 1 + SAFFAROLE_OIL_PRICE * 1 + AMMONIA_PRICE * 1; // Calculated from materials
export const SODIUM_BICARBONATE_PRICE = 400; // Estimated price from crafting formula
export const COCAIN_POWDER_PRICE = (ACETONE_PRICE * 3 + COCA_LEAVES_PRICE * 3 + SULFURIC_ACID_PRICE * 2 + SODIUM_BICARBONATE_PRICE * 2) / 3; // Calculated from materials and output count
export const MDMA_POWDER_PRICE = (MDP2P_PRICE * 2 + METHYLAMINE_CRYSTAL_PRICE * 2) / 3; // Calculated from materials and output count

// Final Drug Products
export const COCAIN_PACK_PRICE = COCAIN_POWDER_PRICE * 3 + EMPTY_PLASTIC_PACK_PRICE * 3; // Calculated from materials: 3 cocaine powder + 3 plastic packs
export const MDMA_PILL_PRICE = MDMA_POWDER_PRICE * 1 + EMPTY_PILL_CAPSULE_PRICE * 1; // Calculated from materials: 1 MDMA powder + 1 pill capsule

// ===== ELECTRIC JOB ITEMS =====
export const MULTI_METER_PRICE = 2500;
export const HAND_PLIERS_PRICE = 2000;
export const MEDIUM_CIRCUIT_PRICE = 5500;
export const ADVANCED_CIRCUIT_PRICE = 7650;

// ===== MINING ITEMS =====
// Raw Materials
export const STONE_ORE_BUY_PRICE = 22;
export const STONE_ORE_SELL_PRICE = Math.floor(14 * SELL_PRICE_MULTIPLIER); // Base 14
export const IRON_ORE_BUY_PRICE = 37;
export const IRON_ORE_SELL_PRICE = Math.floor(22 * SELL_PRICE_MULTIPLIER); // Base 22
export const GOLD_ORE_BUY_PRICE = 45;
export const GOLD_ORE_SELL_PRICE = Math.floor(31 * SELL_PRICE_MULTIPLIER); // Base 31
export const SULFUR_ORE_BUY_PRICE = 30;
export const SULFUR_ORE_SELL_PRICE = Math.floor(20 * SELL_PRICE_MULTIPLIER); // Base 20
export const COAL_ORE_BUY_PRICE = 35;
export const COAL_ORE_SELL_PRICE = Math.floor(22 * SELL_PRICE_MULTIPLIER); // Base 22

// Refined Materials
export const IRON_BAR_BUY_PRICE = 2100;
export const IRON_BAR_SELL_PRICE = Math.floor(1260 * SELL_PRICE_MULTIPLIER); // Base 1260
export const GOLD_BAR_BUY_PRICE = 3300;
export const GOLD_BAR_SELL_PRICE = Math.floor(1800 * SELL_PRICE_MULTIPLIER); // Base 1800
export const REINFORCED_STEEL_PRICE = 5900; // Shop price (actual craft cost: IRON_BAR_BUY_PRICE * 10 + GOLD_BAR_BUY_PRICE * 4 = 34200)
// Calculated from materials: 10 iron bars (21000) + 4 gold bars (13200) = 34200, but set to 5900 in shop
export const GILDED_IRON_SELL_PRICE = Math.floor(18000 * SELL_PRICE_MULTIPLIER); // Base 18000
export const AURIRON_SELL_PRICE = Math.floor(25200 * SELL_PRICE_MULTIPLIER); // Base 25200

// Special Items
export const PICKAXE_LVL1_PRICE = STONE_ORE_BUY_PRICE * 200 + IRON_ORE_BUY_PRICE * 50; // Calculated from materials: 200 stone ore + 50 iron ore
export const PICKAXE_LVL2_PRICE = IRON_BAR_BUY_PRICE * 5 + REINFORCED_STEEL_PRICE * 5; // Calculated from materials: 5 iron bars + 5 reinforced steel
export const PICKAXE_LVL3_PRICE = GOLD_BAR_BUY_PRICE * 25 + IRON_BAR_BUY_PRICE * 25 + GILDED_IRON_SELL_PRICE * 17 + REINFORCED_STEEL_PRICE * 15; // Calculated from all materials
export const PICKAXE_LVL4_PRICE = GOLD_BAR_BUY_PRICE * 50 + IRON_BAR_BUY_PRICE * 40 + GILDED_IRON_SELL_PRICE * 40 + AURIRON_SELL_PRICE * 20 + REINFORCED_STEEL_PRICE * 25; // Calculated from all materials

// Kits from Mining
export const ANTI_SHARP_KIT_PRICE = IRON_BAR_BUY_PRICE * 10 + REINFORCED_STEEL_PRICE * 3; // Calculated from materials: 10 iron bars + 3 reinforced steel
export const GAS_KIT_PRICE = SULFUR_ORE_BUY_PRICE * 320 + IRON_BAR_BUY_PRICE * 5 + GOLD_BAR_BUY_PRICE * 5 + REINFORCED_STEEL_PRICE * 8; // Calculated from materials
export const RADIOACTIVE_KIT_PRICE = SULFUR_ORE_BUY_PRICE * 300 + COAL_ORE_BUY_PRICE * 200 + IRON_BAR_BUY_PRICE * 15 + GOLD_BAR_BUY_PRICE * 10 + REINFORCED_STEEL_PRICE * 10; // Calculated from all materials

// Gems
export const AMBERITE_GEM_SELL_PRICE = Math.floor(72000 * SELL_PRICE_MULTIPLIER); // Base 72000
export const AQUALITH_GEM_SELL_PRICE = Math.floor(72000 * SELL_PRICE_MULTIPLIER); // Base 72000
export const LUMINITE_GEM_SELL_PRICE = Math.floor(72000 * SELL_PRICE_MULTIPLIER); // Base 72000

// Weapon Crafting Components
export const WEAPON_STOCK_PRICE = IRON_BAR_BUY_PRICE * 3; // Calculated from materials: 3 iron bars
export const NORMAL_BARREL_PRICE = REINFORCED_STEEL_PRICE * 1; // Based on 1 reinforced steel
export const REINFORCED_BARREL_PRICE = REINFORCED_STEEL_PRICE * 1 + GOLD_BAR_BUY_PRICE * 1; // Based on materials
export const WEAPON_GRIP_PRICE = IRON_BAR_BUY_PRICE * 3; // Based on materials: 3 iron bars
export const WEAPON_SCOPE_PRICE = GOLD_BAR_BUY_PRICE * 2 + REINFORCED_STEEL_PRICE * 2; // Based on materials
export const NORMAL_TRIGGER_PRICE = IRON_BAR_BUY_PRICE * 2 + GOLD_BAR_BUY_PRICE * 1; // Based on materials
export const ADVANCED_TRIGGER_PRICE = GOLD_BAR_BUY_PRICE * 1 + REINFORCED_STEEL_PRICE * 1; // Based on materials

// ===== WEAPONS =====
// Weapons
export const KNIFE_PRICE = IRON_BAR_BUY_PRICE * 5; // Calculated from materials: 5 iron bars
export const MACHETE_PRICE = REINFORCED_STEEL_PRICE * 4; // Calculated from materials: 4 reinforced steel
export const COMBAT_PISTOL_PRICE = NORMAL_BARREL_PRICE * 1 + NORMAL_TRIGGER_PRICE * 1 + WEAPON_GRIP_PRICE * 1; // Calculated from weapon components
export const DOUBLE_ACTION_REVOLVER_PRICE = ADVANCED_TRIGGER_PRICE * 1 + NORMAL_BARREL_PRICE * 2 + WEAPON_GRIP_PRICE * 1; // Calculated from weapon components
export const DB_SHOTGUN_PRICE = REINFORCED_BARREL_PRICE * 1 + ADVANCED_TRIGGER_PRICE * 1 + WEAPON_GRIP_PRICE * 1 + REINFORCED_STEEL_PRICE * 2; // Calculated from weapon components
export const MICRO_SMG_PRICE = REINFORCED_BARREL_PRICE * 2 + NORMAL_TRIGGER_PRICE * 1 + WEAPON_GRIP_PRICE * 1 + WEAPON_STOCK_PRICE * 1; // Calculated from weapon components
export const PUMP_SHOTGUN_PRICE = REINFORCED_BARREL_PRICE * 2 + ADVANCED_TRIGGER_PRICE * 1 + WEAPON_GRIP_PRICE * 1 + REINFORCED_STEEL_PRICE * 2; // Calculated from weapon components
export const COMPACT_RIFLE_PRICE = REINFORCED_BARREL_PRICE * 1 + ADVANCED_TRIGGER_PRICE * 1 + WEAPON_GRIP_PRICE * 1 + WEAPON_STOCK_PRICE * 2 + REINFORCED_STEEL_PRICE * 2; // Calculated from weapon components
export const SMG_PRICE = 35000; // Shop price
export const ADVANCED_RIFLE_PRICE = 55000; // Shop price

// Ammo
export const AMMO_556_PRICE = 60;
export const AMMO_762_PRICE = 300; // Updated from WEAPONSHOP.js
export const AMMO_9MM_PRICE = 50; // Updated from WEAPONSHOP.js
export const AMMO_BUCKSHOT_PRICE = 80; // Updated from WEAPONSHOP.js (item_bullet_shotgun)

// ===== ITEM MAP =====
// This object allows you to look up prices by item name
export const ITEM_PRICES = {
  // Basic items
  'item_walkie_talkie': WALKIE_TALKIE_PRICE,
  'item_drink_water': MINERAL_WATER_PRICE,
  'item_drink_sprunk': SPRUNK_SODA_PRICE,
  'item_food_chocolate': CHOCOLATE_BAR_PRICE,
  'item_food_hamburger': HAMBURGER_PRICE,
  'item_repairkit': REPAIR_KIT_PRICE,
  'item_fabric': FABRIC_PRICE,
  
  // Weapons
  'item_melee_knife': KNIFE_PRICE,
  'item_melee_machete': MACHETE_PRICE,
  'item_weapon_combat_pistol': COMBAT_PISTOL_PRICE,
  'item_weapon_double_action_revolver': DOUBLE_ACTION_REVOLVER_PRICE,
  'item_weapon_db_shotgun': DB_SHOTGUN_PRICE,
  'item_weapon_micro_smg': MICRO_SMG_PRICE,
  'item_weapon_pump_shotgun': PUMP_SHOTGUN_PRICE,
  'item_weapon_compact_rifle': COMPACT_RIFLE_PRICE,
  'item_weapon_smg': SMG_PRICE,
  'item_weapon_advanced_rifle': ADVANCED_RIFLE_PRICE,
  
  // Ammo
  'item_bullet_5_56_mm': AMMO_556_PRICE,
  'item_bullet_7_62_mm': AMMO_762_PRICE,
  'item_bullet_9_mm': AMMO_9MM_PRICE,
  'item_bullet_shotgun': AMMO_BUCKSHOT_PRICE,
  
  // Medical Items
  'item_ethanol': ETHANOL_PRICE,
  'item_medicine_stablizer': MEDICINE_STABILIZER_PRICE,
  'item_empty_pill_capsule': EMPTY_PILL_CAPSULE_PRICE,
  'item_capsaicin_powder': CAPSAICIN_POWDER_PRICE,
  'item_medical_bandage': MEDICAL_BANDAGE_PRICE,
  'item_pain_killer_powder': PAIN_KILLER_POWDER_PRICE,
  'item_pain_killer_pill': PAIN_KILLER_PILL_PRICE,
  
  // Drug Raw Materials
  'item_weed': WEED_RAW_PRICE,
  'item_coca_leaves': COCA_LEAVES_PRICE,
  'item_saffarole_leave': SAFFAROLE_LEAVE_PRICE,
  'item_battery': BATTERY_PRICE,
  'item_paint_color': PAINT_COLOR_PRICE,
  'item_house_cleaner': HOUSE_CLEANER_PRICE,
  'item_methanol': METHANOL_PRICE,
  'item_empty_plastic_pack': EMPTY_PLASTIC_PACK_PRICE,
  
  // Drug Intermediate Products
  'item_sulfuric_acid': SULFURIC_ACID_PRICE,
  'item_acetone': ACETONE_PRICE,
  'item_ammonia': AMMONIA_PRICE,
  'item_saffarole_oil': SAFFAROLE_OIL_PRICE,
  'item_methylamine_crystal': METHYLAMINE_CRYSTAL_PRICE,
  'item_sodium_bicarbonate': SODIUM_BICARBONATE_PRICE,
  'item_mdp2p': MDP2P_PRICE,
  'item_cocain_powder': COCAIN_POWDER_PRICE,
  'item_mdma_powder': MDMA_POWDER_PRICE,
  
  // Drug Final Products
  'item_cocain_pack': COCAIN_PACK_PRICE,
  'item_mdma_pill': MDMA_PILL_PRICE,
  
  // Electric job items
  'item_multi_metter': MULTI_METER_PRICE,
  'item_hand_pilers': HAND_PLIERS_PRICE,
  'mediumCircuit': MEDIUM_CIRCUIT_PRICE,
  'advancedCircuit': ADVANCED_CIRCUIT_PRICE,
  
  // Mining ores and materials (buy/sell prices)
  'item_ore_stone': STONE_ORE_BUY_PRICE,
  'item_ore_iron': IRON_ORE_BUY_PRICE,
  'item_ore_gold': GOLD_ORE_BUY_PRICE,
  'item_ore_sulfur': SULFUR_ORE_BUY_PRICE,
  'item_ore_coal': COAL_ORE_BUY_PRICE,
  'item_bar_iron': IRON_BAR_BUY_PRICE,
  'item_bar_gold': GOLD_BAR_BUY_PRICE,
  'item_reinforced_steel': REINFORCED_STEEL_PRICE,
  'item_bar_gildiron': GILDED_IRON_SELL_PRICE,
  'item_bar_auriron': AURIRON_SELL_PRICE,
  
  // Mining tools and equipment
  'item_pickaxe_lvl_1': PICKAXE_LVL1_PRICE,
  'item_pickaxe_lvl_2': PICKAXE_LVL2_PRICE,
  'item_pickaxe_lvl_3': PICKAXE_LVL3_PRICE,
  'item_pickaxe_lvl_4': PICKAXE_LVL4_PRICE,
  'kit_antiSharp': ANTI_SHARP_KIT_PRICE,
  'kit_gas': GAS_KIT_PRICE,
  'kit_radioactive': RADIOACTIVE_KIT_PRICE,
  
  // Weapon crafting components
  'item_stock_weapon': WEAPON_STOCK_PRICE,
  'item_normal_barrel': NORMAL_BARREL_PRICE,
  'item_reinforced_barrel': REINFORCED_BARREL_PRICE,
  'item_grip_weapon': WEAPON_GRIP_PRICE,
  'item_scope_weapon': WEAPON_SCOPE_PRICE,
  'item_normal_trigger': NORMAL_TRIGGER_PRICE,
  'item_advanced_trigger': ADVANCED_TRIGGER_PRICE,
  
  // Gems
  'item_gem_Amberite': AMBERITE_GEM_SELL_PRICE,
  'item_gem_aqualith': AQUALITH_GEM_SELL_PRICE,
  'item_gem_luminite': LUMINITE_GEM_SELL_PRICE,
};

// ===== HELPER FUNCTIONS =====

/**
 * Get the buy price for any item by name
 * @param {string} itemName - Name of the item
 * @returns {number} The buy price or 0 if not found
 */
export function getItemPrice(itemName) {
  return ITEM_PRICES[itemName] || 0;
}

/**
 * Get the sell price for mining materials
 * @param {string} itemName - Name of the item
 * @returns {number} The sell price or 0 if not found
 */
export function getMiningItemSellPrice(itemName) {
  const sellPriceMap = {
    'item_ore_stone': STONE_ORE_SELL_PRICE,
    'item_ore_iron': IRON_ORE_SELL_PRICE,
    'item_ore_gold': GOLD_ORE_SELL_PRICE,
    'item_ore_sulfur': SULFUR_ORE_SELL_PRICE,
    'item_ore_coal': COAL_ORE_SELL_PRICE,
    'item_bar_iron': IRON_BAR_SELL_PRICE,
    'item_bar_gold': GOLD_BAR_SELL_PRICE,
    'item_bar_gildiron': GILDED_IRON_SELL_PRICE,
    'item_bar_auriron': AURIRON_SELL_PRICE,
    'item_gem_Amberite': AMBERITE_GEM_SELL_PRICE,
    'item_gem_aqualith': AQUALITH_GEM_SELL_PRICE,
    'item_gem_luminite': LUMINITE_GEM_SELL_PRICE,
  };
  
  return sellPriceMap[itemName] || 0;
}

/**
 * Calculate crafting cost for an item based on its materials
 * @param {Array} materials - Array of materials with itemName and count properties
 * @returns {number} The total crafting cost
 */
export function calculateCraftingCost(materials) {
  let totalCost = 0;
  
  for (const material of materials) {
    const materialPrice = getItemPrice(material.itemName);
    totalCost += materialPrice * material.count;
  }
  
  return totalCost;
}

/**
 * Calculate detailed crafting cost breakdown for an item based on its materials
 * @param {Array} materials - Array of materials with itemName and count properties
 * @param {number} outputCount - Number of items produced from the crafting recipe
 * @returns {Object} Detailed crafting cost breakdown
 */
export function getDetailedCraftingCost(materials, outputCount = 1) {
  let materialCosts = [];
  let totalCost = 0;
  
  for (const material of materials) {
    const itemName = material.itemName || material.item;
    const count = material.count;
    const materialPrice = getItemPrice(itemName);
    const materialCost = materialPrice * count;
    totalCost += materialCost;
    
    materialCosts.push({
      itemName,
      count,
      unitPrice: materialPrice,
      totalPrice: materialCost
    });
  }
  
  const unitCost = totalCost / outputCount;
  
  return {
    materials: materialCosts,
    totalCost,
    outputCount,
    unitCost
  };
}

/**
 * Calculate profit for crafting an item
 * @param {Array} materials - Array of materials with itemName and count properties
 * @param {string} outputItemName - Name of the output item
 * @param {number} outputCount - Number of items produced from the crafting recipe
 * @returns {Object} Profit calculation including costs, revenue and margin
 */
export function calculateCraftingProfit(materials, outputItemName, outputCount = 1) {
  const craftingCost = calculateCraftingCost(materials);
  const outputPrice = getItemPrice(outputItemName);
  const totalRevenue = outputPrice * outputCount;
  const profit = totalRevenue - craftingCost;
  const profitMargin = (profit / craftingCost) * 100;
  
  return {
    totalCraftingCost: craftingCost,
    costPerItem: craftingCost / outputCount,
    outputItemPrice: outputPrice,
    totalRevenue,
    profit,
    profitMargin: parseFloat(profitMargin.toFixed(2))
  };
}
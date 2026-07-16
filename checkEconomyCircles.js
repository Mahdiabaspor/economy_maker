/**
 * checkEconomyCircles.js — the anti-money-printer guard.
 *
 * Crafting on the server is INSTANT and there are no sell cooldowns, so the only
 * thing preventing infinite money is price math. This script verifies it:
 *
 *   For every item an NPC will BUY from players, compute the cheapest way a
 *   player can obtain that item using ONLY NPC purchases (direct buy, or any
 *   chain of craft recipes whose materials are all NPC-obtainable). If the NPC
 *   pays MORE than that cost, that is an infinite money loop -> FAIL the build.
 *
 * Items that need gathered/risk inputs (mined-only gems, grown leaves, robbery
 * components...) have no all-NPC cost, so they are skipped — profit on those is
 * intended (it pays for the gathering/risk).
 *
 * Called from generate_economy_config.js. Throws on any violation.
 */

const WARN_MARGIN = 0.05; // warn when an NPC circle loses less than 5%

/** Collect every "player pays NPC" price: itemName -> cheapest buy price. */
function buildBuyMap(economyConfig) {
  const buy = new Map();
  const add = (itemName, price) => {
    const p = Number(price);
    if (!itemName || !Number.isFinite(p) || p <= 0) return;
    if (!buy.has(itemName) || p < buy.get(itemName)) buy.set(itemName, p);
  };

  const shops = economyConfig.shops;
  for (const list of [
    shops.superMarketConfig?.regular,
    shops.emsShopConfig?.buyConfig?.regular,
    shops.FoodSupplierConfig?.regular,
    shops.vendingMachineConfig?.regular,
    shops.boozeShopConfig?.regular,
    shops.weaponShopConfig,
  ]) {
    for (const it of list || []) add(it.itemName, it.singlePrice);
  }
  for (const it of economyConfig.jobs.miningJobConfig?.MiningShopBuy || []) {
    add(it.itemName, it.singlePrice); // singlePrice here is a string (toFixed)
  }
  const electricShop = economyConfig.jobs.electricJobConfig?.shopItems || {};
  for (const [itemName, price] of Object.entries(electricShop)) add(itemName, price);
  return buy;
}

/** Collect every "NPC pays player" price: itemName -> highest sell price. */
function buildSellMap(economyConfig) {
  const sell = new Map();
  const add = (itemName, price, source) => {
    const p = Number(price);
    if (!itemName || !Number.isFinite(p) || p <= 0) return;
    if (!sell.has(itemName) || p > sell.get(itemName).price) {
      sell.set(itemName, { price: p, source });
    }
  };

  for (const it of economyConfig.jobs.miningJobConfig?.MiningShopSell || []) {
    add(it.itemName, it.singlePrice, "mining shop");
  }
  for (const it of economyConfig.shops.DrugDealer?.sell || []) {
    add(it.itemName, it.singlePrice, "drug dealer");
  }
  for (const it of economyConfig.shops.WeaponDealer?.sell || []) {
    add(it.itemName, it.singlePrice, "weapon dealer");
  }
  for (const it of economyConfig.shops.emsShopConfig?.sellConfig?.regular || []) {
    add(it.itemName, it.singlePrice, "EMS shop");
  }
  for (const it of economyConfig.jobs.junk || []) {
    add(it.itemName, it.price, "junk dealer");
  }
  return sell;
}

/** Collect every craft recipe as { output itemName, outputCount, materials:[{itemName,count}] }. */
function buildRecipes(economyConfig) {
  const recipes = [];
  const push = (r, source) => {
    if (!r?.itemName || !Array.isArray(r.materials)) return;
    recipes.push({
      itemName: r.itemName,
      output: Number(r.output ?? r.numberOfOutput ?? 1) || 1,
      materials: r.materials.map((m) => ({
        itemName: m.itemName ?? m.item,
        count: Number(m.count) || 0,
      })),
      coalCost: Number(r.coalCost) || 0,
      source,
    });
  };

  for (const r of economyConfig.crafting.CraftEmsConfig || []) push(r, "EMS craft");
  for (const r of economyConfig.crafting.CraftingGangConfig?.gang_drug_crafting || []) push(r, "gang drug craft");
  for (const r of economyConfig.crafting.CraftingGangConfig?.gang_weapon_crafting || []) push(r, "gang weapon craft");
  for (const r of economyConfig.jobs.miningJobConfig?.craftTools || []) push(r, "mining tools");
  for (const r of economyConfig.jobs.miningJobConfig?.refinery || []) push(r, "refinery");
  return recipes;
}

/**
 * Fixpoint: cheapest all-NPC acquisition cost per item.
 * cost(item) = min( direct buy price, for each recipe: (sum cost(mat)*count + coal) / output )
 * Items unreachable from NPC purchases stay at Infinity.
 */
function computeNpcCosts(buyMap, recipes) {
  const cost = new Map(buyMap); // start from direct buys
  const get = (n) => (cost.has(n) ? cost.get(n) : Infinity);

  for (let pass = 0; pass < 20; pass++) {
    let changed = false;
    for (const r of recipes) {
      let total = r.coalCost * get("item_ore_coal");
      if (r.coalCost > 0 && !Number.isFinite(get("item_ore_coal"))) total = Infinity;
      if (r.coalCost === 0) total = 0;
      for (const m of r.materials) total += get(m.itemName) * m.count;
      const unit = total / r.output;
      if (Number.isFinite(unit) && unit < get(r.itemName)) {
        cost.set(r.itemName, unit);
        changed = true;
      }
    }
    if (!changed) break;
  }
  return cost;
}

export function checkEconomyCircles(economyConfig) {
  const buyMap = buildBuyMap(economyConfig);
  const sellMap = buildSellMap(economyConfig);
  const recipes = buildRecipes(economyConfig);
  const npcCost = computeNpcCosts(buyMap, recipes);

  const errors = [];
  const warnings = [];
  let checked = 0;

  for (const [itemName, { price, source }] of sellMap) {
    const cost = npcCost.has(itemName) ? npcCost.get(itemName) : Infinity;
    if (!Number.isFinite(cost)) continue; // needs gathered/risk input -> profit intended
    checked++;
    const margin = (price - cost) / cost;
    const line = `${itemName} @ ${source}: all-NPC cost ${cost.toFixed(0)}, NPC pays ${price} (${(margin * 100).toFixed(1)}%)`;
    if (price >= cost) {
      errors.push("MONEY PRINTER: " + line);
    } else if (margin > -WARN_MARGIN) {
      warnings.push("THIN MARGIN: " + line);
    }
  }

  for (const w of warnings) console.warn("⚠ " + w);
  console.log(`Circle check: ${checked} NPC-reachable sellable items verified, ${errors.length} violation(s), ${warnings.length} warning(s).`);

  if (errors.length) {
    for (const e of errors) console.error("✖ " + e);
    throw new Error(
      `Economy circle check FAILED — ${errors.length} profitable NPC loop(s) found. ` +
        `Fix the prices above (NPC must pay less than the all-NPC material cost) and regenerate.`
    );
  }
}

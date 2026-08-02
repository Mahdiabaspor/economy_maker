const electricSalaryMultiplier = 1.1

// level 1   36 task per hour
// for 9000 per hour 
const Lvl1SingleSalary = Math.floor(572 * (electricSalaryMultiplier + 0.1) )

// level 2   18 task per hour
// for 13000 per hour for level 2
const Lvl2SingleSalary = Math.floor( 942 * electricSalaryMultiplier)

// level 3  24 task per hour
// for 17000 per hour for level 2
const Lvl3SingleSalary = Math.floor(953 * electricSalaryMultiplier)


// each level 70 exp 
// level 1 exp 1
// level 2 exp 2
// level 1 exp 3


const levelRewards = [
    { id: 1, reward: 10000 },
    { id: 2, reward: 12000 },
    { id: 3, reward: 14000 },
    { id: 4, reward: 16000 },
    { id: 5, reward: 18000 },
    { id: 6, reward: 20000 },
    { id: 7, reward: 22000 },
    { id: 8, reward: 24000 },
    { id: 9, reward: 26000 },
    { id: 10, reward: 30000 }
]


const shopItems = {
    item_multi_metter: 2500,
    item_hand_pilers: 2000,
    mediumCircuit: 5500,
    advancedCircuit: 7650,
}

// ---------------------------------------------------------------------------
// NEW — the rebuilt job (JOB_SPECS/10-Electrician.md §4.7) reads only this
// block. Everything ABOVE is LEGACY and must not be renamed:
// jobs/rewards/rewards.ts reuses `levelRewards` for seven OTHER jobs (miner,
// taxiDriver, truckDriver, welder, farmer, diver, engineer), and the three
// LvlNSingleSalary values are still read by the old electric module until it is
// retired. The rebuilt job pays through nodeBase + arrival instead.
// ---------------------------------------------------------------------------

/** $ per repaired transformer, by site tier. Nearly flat on purpose (§4.2). */
const nodeBase = {
    basic: 150,
    normal: 162,
    hard: 170,
}

/** The travel component, paid once per site visit, van mode only. */
const arrival = {
    perMeter: 0.14,
    minGapM: 400,
    maxDistanceM: 8000,
}

/** Work-truck rental. Hourly, online-only clock, 1-12 h. */
const rentalVehicles = [
    {
        id: 'sadler',
        model: 'sadler',
        name: 'Vapid Sadler 4x4',
        pricePerHour: 500,
        topSpeedKmh: 158,
        payMultiplier: 1,
        minSkillLevel: 3,
    },
    {
        id: 'f450m',
        model: 'f450m',
        name: 'Utility Service Truck',
        pricePerHour: 750,
        topSpeedKmh: 170,
        payMultiplier: 1.08,
        minSkillLevel: 4,
    },
]

/**
 * Tool upkeep — the pliers used to be a permanent $2 000 purchase (§13.3).
 * `pliersDurability` is mirrored on the item itself in items/itemProperties.js
 * AND in the gamemode's inventory/itemProperties.ts; all three must agree.
 */
const tools = {
    pliersDurability: 200,
    pliersRepairPrice: 700,
}

/**
 * Salvaged parts, sold at the depot. These three prices live HERE and nowhere
 * else: items/AllItemsBuyPrice.js `ITEM_PRICES` is entirely inside a block
 * comment (opened at its L145), so an entry there would be dead code — the same
 * migration JOBS/MINING.js L1 records and JOBS/HUNTER.js follows.
 * The three item names must ALSO exist in items/itemProperties.js AND in the
 * gamemode's inventory/itemProperties.ts (§13.1).
 */
const salvage = {
    item_electro_diode: 90,
    item_electro_transistor: 180,
    item_electro_microchip: 650,
}

export const electricJobConfig = {
    // legacy — do NOT rename, rewards.ts reads levelRewards for 8 jobs
    Lvl1SingleSalary,
    Lvl2SingleSalary,
    Lvl3SingleSalary,
    levelRewards,
    shopItems,
    // rebuilt job
    nodeBase,
    arrival,
    rentalVehicles,
    tools,
    salvage,
}
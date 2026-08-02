// Mechanic. See JOB_SPECS/15-Mechanic.md §4.
// The three rental prices ($200/$300/$600 per hour) and the 50% split are
// [OBSERVED] from Quant RP; every other number is [DESIGN] and argued in the
// spec. Every value here is mirrored, numerically identical, in MECHANIC_CONFIG
// (shared/jobs/mechanic.shared.ts) — change it HERE and regenerate, never in the
// gamemode.
//
// This job adds NO new inventory item. The four it consumes/sells
// (item_fuel_can, item_repairkit, item_engine_oil, item_car_battery) already
// exist in both catalogs; `itemCost` below mirrors SHOPS/SUPERMARKET.js exactly.

const mechanicSalaryMultiplier = 1.0

// Per-service price bands. `capPerUnit` multiplies the units the customer
// actually receives (litres for refuel, damage-percent for repair), so a
// near-full tank cannot be billed as an empty one.
const services = {
    refuel:        { unlockLevel: 1, itemName: null,               itemCost: 0,     floor: 150,   ceiling: 1200,  capPerUnit: 12 },
    repair:        { unlockLevel: 1, itemName: null,               itemCost: 0,     floor: 300,   ceiling: 2500,  capPerUnit: 30 },
    sellCanister:  { unlockLevel: 3, itemName: 'item_fuel_can',    itemCost: 900,   floor: 1500,  ceiling: 4000,  capPerUnit: 0 },
    sellRepairKit: { unlockLevel: 3, itemName: 'item_repairkit',   itemCost: 4000,  floor: 5000,  ceiling: 12000, capPerUnit: 0 },
    oil:           { unlockLevel: 5, itemName: 'item_engine_oil',  itemCost: 4500,  floor: 5500,  ceiling: 12000, capPerUnit: 0 },
    battery:       { unlockLevel: 5, itemName: 'item_car_battery', itemCost: 12000, floor: 14000, ceiling: 30000, capPerUnit: 0 },
}

const rentals = [
    { id: 'contender',    pricePerHour: 200, payMultiplier: 1.00, minSkillLevel: 1 },
    { id: 'flatbed',      pricePerHour: 300, payMultiplier: 1.06, minSkillLevel: 2 },
    { id: 'utillitruck3', pricePerHour: 600, payMultiplier: 1.15, minSkillLevel: 3 },
]

const levelRewards = [
    { id: 1, points: 0,    payBonusPct: 0  },
    { id: 2, points: 60,   payBonusPct: 0  },
    { id: 3, points: 180,  payBonusPct: 3  },
    { id: 4, points: 450,  payBonusPct: 6  },
    { id: 5, points: 1050, payBonusPct: 12 },
]

export const mechanicJobConfig = {
    // [MANUAL] "you receive 50%"; [OBSERVED] proven three times in a wallet
    mechanicSharePct: 50,
    // NPC call-outs — no payer, so no sink; a normal job payout
    npcBaseFee:  Math.floor(350 * mechanicSalaryMultiplier),
    npcPerMeter: 0.18 * mechanicSalaryMultiplier,
    npcMaxFee:   Math.floor(2200 * mechanicSalaryMultiplier),
    services,
    rentals,
    levelRewards,
}

// Taxi Driver. See JOB_SPECS/02-TaxiDriver.md §4.
// Rental price E2 ($300/h for the Vapid Taxi) is [OBSERVED] from Quant RP;
// everything else is [DESIGN]. Every number here is mirrored, numerically
// identical, in TAXI_CONFIG (shared/jobs/taxi.shared.ts) — change it HERE and
// regenerate, never in the gamemode.

const taxiSalaryMultiplier = 1.0

// ~12.8 fares/hour at an average 2.2 km straight line (see spec §4.5)
const npcBaseFare  = Math.floor(150 * taxiSalaryMultiplier)   // flat call-out
const npcPerMeter  = 0.42 * taxiSalaryMultiplier              // $ per straight-line metre

const rentals = [
    { id: 'taxi',    pricePerHour: 300, payMultiplier: 1.00, minSkillLevel: 1 },
    { id: 'stanier', pricePerHour: 450, payMultiplier: 1.08, minSkillLevel: 2 },
    { id: 'primo2',  pricePerHour: 700, payMultiplier: 1.18, minSkillLevel: 4 },
]

const levelRewards = [
    { id: 1, points: 0,   payBonusPct: 0,  maxHeldFares: 1 },
    { id: 2, points: 40,  payBonusPct: 0,  maxHeldFares: 1 },
    { id: 3, points: 150, payBonusPct: 3,  maxHeldFares: 1 },
    { id: 4, points: 400, payBonusPct: 6,  maxHeldFares: 2 },
    { id: 5, points: 900, payBonusPct: 12, maxHeldFares: 2 },
]

export const taxiJobConfig = {
    npcBaseFare,
    npcPerMeter,
    minRatePerKm: 1,
    maxRatePerKm: 2000,
    suggestedRatePerKm: 120,
    driverSharePct: 50,
    maxPlayerRideTotal: 25000,
    // these three are economy numbers too — they set what a quote and a meter
    // tick MEAN, so they belong here and not as gamemode literals
    maxFareDistanceM: 12000,
    roadFactor: 1.35,
    meterTickMeters: 1000,
    rentals,
    levelRewards,
}

// ECONOMY GENERATOR HIGH RP/JOBS/FORKLIFT.js
//
// Forklift Driver — Elysian Island yard. The beginner job: no requirements, no
// tool, no inventory. Fuel is the shift limiter, not the rental.
//
// Target: ~8.4k/h net at skill level 1, ~14.5k/h at level 5 (126 h to max).
// Derivation lives in JOB_SPECS/03-ForkliftDriver.md §4.5 — if you retune a
// number here, retune it there AND in
// high-roleplay-v1/src/src/shared/jobs/forklift.shared.ts (FORKLIFT_CONFIG is
// a hand-maintained mirror of this file, exactly like bus.shared.ts mirrors
// JOBS/BUS.js).

const targetHourlyLevel1 = 8800   // gross, before fuel
const runsPerHourLevel1  = 80.4   // 44.75 s cycle, see the spec
const meanLegM           = 180    // uniform 100..260

// baseFee + meanLegM * payPerMetre must equal targetHourlyLevel1 / runsPerHourLevel1
const baseFee     = 45
const payPerMetre = 0.36

const rental = {
    pricePerHour: 10,        // [OBSERVED] Quant's own price, kept for parity
    pricePerHourLevel4: 5,   // skill unlock
    pricePerHourLevel5: 0,   // skill unlock
    minHours: 1,
    maxHours: 12,
}

const fuel = {
    tankLitres: 30,          // [OBSERVED] Quant spawns the forklift with 30 L
    perRunLitres: 1.5,       // [OBSERVED] 30 -> 29 after 1 run, 30 -> 11 after ~13
    refuelPrice: 120,        // full tank at the yard pump
}

// pay bonus % by skill level (Quant published the literal placeholder "n$")
const levelPayBonusPct = [0, 6, 13, 20, 30]

// cumulative cargo points per level — [MANUAL] Forklift driver.txt:12-16
const levelPoints = [0, 500, 3000, 6000, 12000]

export const forkliftJobConfig = {
    baseFee,
    payPerMetre,
    maxPayDistanceM: 420,
    standardLegM: { min: 100, max: 260 },
    longHaulLegM: { min: 300, max: 420 },
    repositionM: { min: 60, max: 300 },
    doublePalletMultiplier: 1.75,
    streakMultiplier: 1.5,
    streakEvery: 5,
    rental,
    fuel,
    levelPayBonusPct,
    levelPoints,
    // reference figures the balance was set from, so a future retune has the
    // same starting point (spec §4.5)
    targetHourlyLevel1,
    runsPerHourLevel1,
    meanLegM,
}

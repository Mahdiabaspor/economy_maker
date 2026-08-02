// Garbage Collector payouts. Balanced against BUS.js (10k/h) and POSTMAN.js
// (~9.5k/h at L1 solo): a level-1 collector nets ~9.3k/h after the $200/h
// Trashmaster, a level-5 brigade of four ~14.8k/h/head.
// See JOB_SPECS/11-GarbageCollector.md §4.5 for the full derivation.
//
// The SHAPE of every term below is Quant RP's, recovered from 28 observed
// collection payouts and 15 unload payouts. Only the SCALE is ours: Quant paid
// $500 a bag, which at the observed throughput is ~$23.7k/h. Set
// garbageIncomeMulti to 2.63 to restore Quant's original numbers exactly.
//
// GARBAGE_CONFIG in high-roleplay-v1/src/src/shared/jobs/garbage.shared.ts
// mirrors every number here and is what the gamemode reads at runtime (exactly
// as POSTMAN_CONFIG mirrors POSTMAN.js). If one moves, move the other in the
// same commit.
//
// This job adds NO inventory item: the bag is an attached world object
// (attachmentMngr -> hei_prop_heist_binbag), not an item. Nothing to add to
// items/itemProperties.js.

const garbageIncomeMulti = 1;

// per-bag pay terms — see garbageBagPayFor() in garbage.shared.ts
const baseBagPay = Math.floor(190 * garbageIncomeMulti);
const payPerMeter = 0.022 * garbageIncomeMulti;
const maxLegPayM = 7000;

// An unloaded bag pays this percentage of what the SAME bag paid to collect.
// OBSERVED: 15 unload credits average $124.7 against a $500 collect floor.
const unloadPct = 25;

// OBSERVED: solo floor $500-502, brigade-of-two floor $550-553 = exactly +10%.
const brigadeBonusPctPerMate = 10;
const brigadeBonusPctCap = 30;

// per-level flat bonus + truck capacity. Thresholds are Quant's manual verbatim
// (200 / 600 / 2000 / 5000); the manual's own bonus column reads "n$ to n$".
const levelBonus = [
  { level: 1, points: 0, bins: 15, payBonusPct: 0, maxBrigade: 2 },
  { level: 2, points: 200, bins: 17, payBonusPct: 4, maxBrigade: 2 },
  { level: 3, points: 600, bins: 19, payBonusPct: 8, maxBrigade: 3 },
  { level: 4, points: 2000, bins: 22, payBonusPct: 14, maxBrigade: 3 },
  { level: 5, points: 5000, bins: 25, payBonusPct: 20, maxBrigade: 4 },
];

// hourly truck rental — OBSERVED on the source server, kept verbatim.
// The level-3 card reads "BRUTE REFUSER / $300 per hour / 121 km/h / Available
// with 3 skills" (OBSERVED 164811).
const rentals = [
  { id: "trashmaster", pricePerHour: 200, minSkillLevel: 1, binBonus: 0 },
  { id: "brute_refuser", pricePerHour: 300, minSkillLevel: 3, binBonus: 4 },
];

export const garbageJobConfig = {
  baseBagPay,
  payPerMeter,
  maxLegPayM,
  unloadPct,
  brigadeBonusPctPerMate,
  brigadeBonusPctCap,
  levelBonus,
  rentals,
  binsPerMate: 15,
  jitterPct: 1,
};

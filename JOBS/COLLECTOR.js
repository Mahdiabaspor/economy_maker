// Collector (cash-in-transit) payouts. Balanced against POSTMAN.js (9.5k/h L1,
// 18.7k/h L5 crew) and BUS.js (10k/h): a level-1 solo collector nets ~11.6k/h
// after the $500/h Stockade, a level-5 crew of four ~21.3k/h/head. The job costs
// a level-4 character and an ~80-minute route commitment, so it sits one band
// above Postman and well under the ATM-robbery ceiling.
// Full derivation: JOB_SPECS/12-Collector.md §4.5-§4.6.
//
// COLLECTOR_CONFIG in high-roleplay-v1/src/src/shared/jobs/collector.shared.ts
// carries the same numbers so the gamemode compiles standalone; THIS file is the
// source of truth for the values, and a balance change starts here.
//
// This job adds NO inventory item — the rental is a server-side session, not a
// droppable keys item (see the manifest's `## items`).

const collectorIncomeMulti = 1;

// per-leg pay terms — see collectorLegPayFor() in collector.shared.ts
const baseFee = Math.floor(120 * collectorIncomeMulti);
const payPerMeter = 0.14 * collectorIncomeMulti;
const roadFactor = 1.35;
const maxPayDistanceM = 5000;

// paid at the vault for a FULL van — Collector.txt line 9, verbatim
const completionBonus = Math.floor(3000 * collectorIncomeMulti);

// flat per-ATM bonus by skill level — Collector.txt band midpoints
const levelBonus = [
  { level: 1, points: 0, bonus: 0, maxCrew: 2 },
  { level: 2, points: 200, bonus: 125, maxCrew: 2 },
  { level: 3, points: 600, bonus: 175, maxCrew: 3 },
  { level: 4, points: 2000, bonus: 225, maxCrew: 4 },
  { level: 5, points: 8000, bonus: 275, maxCrew: 4 },
];

// hourly armoured-van rental — prices OBSERVED on the source server, verbatim
const rentals = [
  { id: "stockade", pricePerHour: 500, minSkillLevel: 1, payMultiplier: 1.0 },
  { id: "oschadbank", pricePerHour: 1000, minSkillLevel: 3, payMultiplier: 1.05 },
  { id: "privatbank", pricePerHour: 1500, minSkillLevel: 4, payMultiplier: 1.1 },
];

// the 5% "someone left money in the ATM" find — the source's own skill card,
// rescaled into this economy (it REPLACES its "2 ghost tokens" premium drop)
const leftover = { chance: 0.05, minAmount: 600, maxAmount: 1200, perShiftCap: 3 };

const vehicleRecallFee = 1000;

export const collectorJobConfig = {
  baseFee,
  payPerMeter,
  roadFactor,
  maxPayDistanceM,
  completionBonus,
  levelBonus,
  rentals,
  leftover,
  vehicleRecallFee,
  stopsPerRoute: 25,
  pointsPerAtm: 1,
  pointsPerDeposit: 2,
  crewBonusPctPerMember: 10,
  crewBonusPctCap: 30,
};

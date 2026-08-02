// Postman payouts. Balanced against BUS.js (10k/h) and the Courier board:
// a level-1 postman nets ~9.5k/h after the $500/h van, a level-5 crew of four
// ~18.7k/h/head. See JOB_SPECS/01-Postman.md §4.5 for the full derivation.

const postmanIncomeMulti = 1;

// per-house pay terms — see postmanHousePayFor() in postman.shared.ts
const baseFee      = Math.floor(120 * postmanIncomeMulti);
const payPerParcel = Math.floor(190 * postmanIncomeMulti);
const payPerMeter  = 0.16 * postmanIncomeMulti;
const roadFactor   = 1.35;
const maxPayDistanceM = 5000;

// flat per-house bonus by skill level — Postman.txt band midpoints
const levelBonus = [
  { level: 1, points: 0,    capacity: 5,  bonus: 0   },
  { level: 2, points: 300,  capacity: 6,  bonus: 125 },
  { level: 3, points: 800,  capacity: 7,  bonus: 175 },
  { level: 4, points: 2000, capacity: 8,  bonus: 225 },
  { level: 5, points: 6000, capacity: 10, bonus: 275 },
];

// hourly van rental — observed on the source server, kept verbatim
const rentals = [
  { id: 'speedo_ukr',  pricePerHour: 500, minSkillLevel: 1, trunkBonus: 0 },
  { id: 'speedo_nova', pricePerHour: 500, minSkillLevel: 1, trunkBonus: 0 },
  { id: 'sprint_nova', pricePerHour: 800, minSkillLevel: 3, trunkBonus: 2 },
];

const vehicleRecallFee = 1000;

export const postmanJobConfig = {
  baseFee,
  payPerParcel,
  payPerMeter,
  roadFactor,
  maxPayDistanceM,
  levelBonus,
  rentals,
  vehicleRecallFee,
  housesPerRoute: 5,
  crewBonusPctPerMember: 10,
  crewBonusPctCap: 30,
  stampFastBonusPct: 5,
};

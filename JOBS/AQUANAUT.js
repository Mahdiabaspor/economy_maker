// Aquanaut (submarine). See JOB_SPECS/13-Aquanaut.md §4.
//
// Rental prices ($1 000/h Submersible, $2 000/h Kraken, Kraken gated at skill 4)
// are [OBSERVED] from Quant RP screenshot 2025-12-09 134756. Everything else is
// [DESIGN]. Every number here is mirrored, numerically identical, in
// AQUANAUT_CONFIG (high-roleplay-v1/src/src/shared/jobs/aquanaut.shared.ts) —
// change it HERE and regenerate, never in the gamemode.

const aquanautSalaryMultiplier = 1.0;

// Payout = baseFee + crates * payPerCrate + distanceM * payPerMeter,
// then level bonus, then rental multiplier, then a +/-6% jitter SEEDED OFF THE
// ORDER ID (so the board row, the accept confirmation and the wallet credit are
// one pure function and cannot disagree). `distanceM` is the FROZEN zone-centre
// -> nearest-air-tank distance, not the player's live distance.
// Calibrated against the ONE real payout we captured: 8 crates at 646 m paid
// $4 024 (screenshot 151236, wallet $9,090 -> $13,114).
const baseFee = Math.floor(900 * aquanautSalaryMultiplier);
const payPerCrate = Math.floor(280 * aquanautSalaryMultiplier);
const payPerMeter = 0.7 * aquanautSalaryMultiplier;

const rentals = [
  { id: "submersible", pricePerHour: 1000, payMultiplier: 1.0, minSkillLevel: 1 },
  { id: "kraken", pricePerHour: 2000, payMultiplier: 1.12, minSkillLevel: 4 },
];

// airSeconds is [MANUAL] verbatim (30/40/50/60/70 min). The point thresholds
// are [DESIGN] — Quant's own 500/2500/6000/8000 would be 183 hours for the
// first level-up. See spec §3.2.
const levelRewards = [
  { id: 1, points: 0, airSeconds: 1800, payBonusPct: 0, sonarRadius: 45 },
  { id: 2, points: 25, airSeconds: 2400, payBonusPct: 3, sonarRadius: 40 },
  { id: 3, points: 80, airSeconds: 3000, payBonusPct: 6, sonarRadius: 36 },
  { id: 4, points: 200, airSeconds: 3600, payBonusPct: 8, sonarRadius: 30 },
  { id: 5, points: 420, airSeconds: 4200, payBonusPct: 12, sonarRadius: 24 },
];

// Bonus finds — [MANUAL] names Rapan, Starfish and Pearl and gives them nowhere
// to go. Sold at the employer NPC. These three item names must ALSO exist in
// items/itemProperties.js AND in the gamemode's inventory/itemProperties.ts
// (JOB_SPECS/00-CONVENTIONS.md §13.1).
//
// The prices live HERE and NOT in items/AllItemsBuyPrice.js, whose ITEM_PRICES
// map is entirely inside a block comment (opened at its L145) — an entry there
// would be dead code. JOBS/MINING.js L1 records that migration and JOBS/HUNTER.js
// follows it. This is a deliberate, stated divergence from conventions §9.
export const aquanautFinds = [
  { itemName: "item_sea_rapan", label: "Rapan Shell", price: 180, chance: 0.08 },
  { itemName: "item_sea_starfish", label: "Starfish", price: 260, chance: 0.04 },
  { itemName: "item_sea_pearl", label: "Pearl", price: 1200, chance: 0.01 },
];

export const aquanautJobConfig = {
  baseFee,
  payPerCrate,
  payPerMeter,
  maxPayDistanceM: 5000,
  jitterPct: 6,
  minPay: 2200,
  maxPay: 8400,
  payRoundTo: 10,
  // Crates per contract: rolled pool-wide, NOT per skill level (spec §3.2).
  minCrates: 6,
  maxCrates: 9,
  orderSeconds: 1800,
  refillSeconds: 20,
  leashSeconds: 300,
  minCharacterLevel: 7,
  rentals,
  levelRewards,
  finds: aquanautFinds,
};

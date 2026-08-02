// Lawnmower ("Groundskeeper") — Richman Glen golf course.
//
// The route is a FIXED 24-node closed ring, 1,607 m round, extracted from the
// Quant RP client bundle. A lap is ~5 minutes at the mower's 24 km/h top speed,
// so a good driver clears ~10 laps/hour.
//
// Balance target: this job has NO employment gate, NO vehicle cost, NO fuel
// burn, NO tool wear and NO risk, so it must sit UNDER the bus driver's
// ~10,000/hour (see BUS.js) for an ordinary driver. At 10 laps/hour and no
// streak: level 1 = 7,550/h, level 5 = 10,250/h. Only a level 4-5 driver who
// holds an unbroken streak for a full hour crosses the bus line (10,540 and
// 11,650) - that is intentional, it is the one behaviour the job rewards.
//
// Pay is derived from the LEG LENGTH, not rolled: legBase + metres * perMeter.
// Quant rolled randInt(50,100) per marker, which paid the same for a 25 m leg
// as for a 105 m one — that is what made it farmable.

const lawnmowerSalaryMultiplier = 1.0;

// 24 legs, 1607 m total, mean 67 m. round(7 + 0.24 * m) sums to 555 per lap.
const markerLegBase = Math.floor(7 * lawnmowerSalaryMultiplier);   // 7
const markerPerMeter = 0.24 * lawnmowerSalaryMultiplier;           // 0.24
const markerPayMin = 10;
const markerPayMax = 45;

// Lap bonus is ~27% of a lap's value at L1 — big enough that quitting mid-lap
// costs real money, small enough that it can't be the whole income.
const lapBonusByLevel = [200, 240, 280, 300, 350];

// Applied to the MARKER PAY ONLY, once, at payout. Deliberately NOT applied to
// the lap bonus: lapBonusByLevel above already IS the lap bonus's level ladder,
// and stacking both pushes level 5 to ~11,000/h, over the bus ceiling.
const payBonusPctByLevel = [0, 4, 8, 14, 22];

// 1 marker = 1 point. 24 markers = 1 lap.
const levelPoints = [0, 120, 360, 900, 2000];

// Consecutive laps with no dismount multiply the LAP BONUS only.
const streakStep = 0.1;
const streakCapByLevel = [1.0, 1.0, 1.3, 1.4, 1.4];

// The Jamb. item_weed sells at the drug lab for 299, so an uncapped drop would
// dwarf the mowing. 2.5%/marker with a hard cap of ONE per lap works out to
// ~0.45 jambs per lap (~15% of the job's legal income).
const jambChancePct = 2.5;
const jambMaxPerLap = 1;
const jambMinLevel = 3;

export const lawnmowerJobConfig = {
  markerLegBase,
  markerPerMeter,
  markerPayMin,
  markerPayMax,
  lapBonusByLevel,
  payBonusPctByLevel,
  levelPoints,
  streakStep,
  streakCapByLevel,
  jambChancePct,
  jambMaxPerLap,
  jambMinLevel,
};

const baseSalary = 14000; // Base income per hour

/**
 * Build a faction pay ladder.
 *
 * Ranks are 1-based and match the tablet's rank tables exactly
 * (high-roleplay-v1/src/src/shared/tabletTypes/tabletInterface.ts). Rank 0 does
 * not exist — the old tables had a `0:` entry that the payout code never read,
 * so every faction was silently one tier short at the bottom.
 *
 * `from` / `to` are multipliers of baseSalary; everything between is a straight
 * line, so resizing a rank ladder can never desync the pay curve again.
 * The `/ 4` keeps the historical "quarter of the hourly rate per payout".
 *
 * @param {number} from  multiplier at rank 1
 * @param {number} to    multiplier at the top rank
 * @param {number} ranks how many ranks the faction has
 */
const ladder = (from, to, ranks) => {
  const table = {};

  for (let rank = 1; rank <= ranks; rank++) {
    const t = ranks === 1 ? 1 : (rank - 1) / (ranks - 1);
    table[rank] = Math.floor((baseSalary * (from + (to - from) * t)) / 4);
  }

  return table;
};

// Law enforcement share one pay scale — LSPD, BCSD, FIB and the National Guard
// are peer agencies on the same 15-rank ladder, so they are paid identically.
// Change LEO_FLOOR / LEO_CEILING to move all four at once.
const LEO_FLOOR = 0.8; // rank 1  — Intern
const LEO_CEILING = 2.2; // rank 15 — Chief / Sheriff / General

export const governmentSalary = {
  // LSPD — 15 ranks: Intern .. Chief
  police: ladder(LEO_FLOOR, LEO_CEILING, 15),

  // BCSD — 15 ranks: Intern .. Sheriff
  sheriff: ladder(LEO_FLOOR, LEO_CEILING, 15),

  // FIB — 15 ranks: Intern .. Chief
  fbi: ladder(LEO_FLOOR, LEO_CEILING, 15),

  // National Guard — 15 ranks: Intern .. General
  army: ladder(LEO_FLOOR, LEO_CEILING, 15),

  // EMS — 15 ranks: Intern .. Chief Physician. Keeps its own curve: a higher
  // floor (medics are useful from day one) and a lower ceiling than police.
  ems: ladder(1.0, 1.8, 15),

  // Government — 20 ranks: Intern .. Mayor
  government: ladder(LEO_FLOOR, LEO_CEILING, 20),

  // LifeInvader — 20 ranks: Intern .. Director
  lifeinvader: ladder(LEO_FLOOR, LEO_CEILING, 20),
};

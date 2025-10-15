const baseSalary = 14000; // Base income per hour

export const governmentSalary = {
  police: {
    0: Math.floor((baseSalary * 0.8) / 4),    // Cadet
    1: Math.floor((baseSalary * 0.88) / 4),
    2: Math.floor((baseSalary * 0.96) / 4),
    3: Math.floor((baseSalary * 1.04) / 4),
    4: Math.floor((baseSalary * 1.12) / 4),
    5: Math.floor((baseSalary * 1.2) / 4),
    6: Math.floor((baseSalary * 1.28) / 4),
    7: Math.floor((baseSalary * 1.36) / 4),
    8: Math.floor((baseSalary * 1.4) / 4),    // Police Officer 1
    9: Math.floor((baseSalary * 1.48) / 4),
    10: Math.floor((baseSalary * 1.56) / 4),
    11: Math.floor((baseSalary * 1.6) / 4),   // Police Officer 2
    12: Math.floor((baseSalary * 1.68) / 4),
    13: Math.floor((baseSalary * 1.76) / 4),
    14: Math.floor((baseSalary * 1.8) / 4),   // Police Officer 3
    15: Math.floor((baseSalary * 1.9) / 4),   // Sergeant
    16: Math.floor((baseSalary * 2.0) / 4),   // Lieutenant
    17: Math.floor((baseSalary * 2.05) / 4),
    18: Math.floor((baseSalary * 2.1) / 4),   // Deputy
    19: Math.floor((baseSalary * 2.15) / 4),
    20: Math.floor((baseSalary * 2.2) / 4),   // Chief
  },

  fbi: {
    0: Math.floor((baseSalary * 0.4) / 4),    // Trainee
    1: Math.floor((baseSalary * 0.47) / 4),
    2: Math.floor((baseSalary * 0.54) / 4),
    3: Math.floor((baseSalary * 0.6) / 4),    // Agent
    4: Math.floor((baseSalary * 0.67) / 4),
    5: Math.floor((baseSalary * 0.74) / 4),
    6: Math.floor((baseSalary * 0.81) / 4),
    7: Math.floor((baseSalary * 0.88) / 4),
    8: Math.floor((baseSalary * 0.95) / 4),
    9: Math.floor((baseSalary * 1.0) / 4),    // Field Agent
    10: Math.floor((baseSalary * 1.07) / 4),
    11: Math.floor((baseSalary * 1.14) / 4),
    12: Math.floor((baseSalary * 1.21) / 4),
    13: Math.floor((baseSalary * 1.28) / 4),
    14: Math.floor((baseSalary * 1.3) / 4),   // Special Agent
    15: Math.floor((baseSalary * 1.4) / 4),
    16: Math.floor((baseSalary * 1.5) / 4),
    17: Math.floor((baseSalary * 1.6) / 4),
    18: Math.floor((baseSalary * 1.7) / 4),
    19: Math.floor((baseSalary * 1.75) / 4),
    20: Math.floor((baseSalary * 1.8) / 4),   // Director
  },

  army: {
    0: Math.floor((baseSalary * 0.3) / 4),    // Private
    1: Math.floor((baseSalary * 0.38) / 4),
    2: Math.floor((baseSalary * 0.46) / 4),
    3: Math.floor((baseSalary * 0.5) / 4),    // Corporal
    4: Math.floor((baseSalary * 0.58) / 4),
    5: Math.floor((baseSalary * 0.66) / 4),
    6: Math.floor((baseSalary * 0.7) / 4),    // Sergeant
    7: Math.floor((baseSalary * 0.78) / 4),
    8: Math.floor((baseSalary * 0.86) / 4),
    9: Math.floor((baseSalary * 0.9) / 4),    // Sergeant Major
    10: Math.floor((baseSalary * 0.98) / 4),
    11: Math.floor((baseSalary * 1.06) / 4),
    12: Math.floor((baseSalary * 1.1) / 4),   // Lieutenant
    13: Math.floor((baseSalary * 1.18) / 4),
    14: Math.floor((baseSalary * 1.26) / 4),
    15: Math.floor((baseSalary * 1.3) / 4),   // Captain
    16: Math.floor((baseSalary * 1.4) / 4),
    17: Math.floor((baseSalary * 1.5) / 4),   // General
    18: Math.floor((baseSalary * 1.6) / 4),
    19: Math.floor((baseSalary * 1.7) / 4),   // Warrant Officer
    20: Math.floor((baseSalary * 1.9) / 4),   // Chief Warrant Officer
  },

  sheriff: {
    0: Math.floor((baseSalary * 0.4) / 4),    // Cadet
    1: Math.floor((baseSalary * 0.475) / 4),
    2: Math.floor((baseSalary * 0.55) / 4),
    3: Math.floor((baseSalary * 0.6) / 4),    // Deputy
    4: Math.floor((baseSalary * 0.7) / 4),
    5: Math.floor((baseSalary * 0.8) / 4),
    6: Math.floor((baseSalary * 0.9) / 4),
    7: Math.floor((baseSalary * 0.95) / 4),
    8: Math.floor((baseSalary * 1.0) / 4),    // Corporal
    9: Math.floor((baseSalary * 1.075) / 4),
    10: Math.floor((baseSalary * 1.15) / 4),
    11: Math.floor((baseSalary * 1.2) / 4),   // Sergeant
    12: Math.floor((baseSalary * 1.3) / 4),
    13: Math.floor((baseSalary * 1.4) / 4),
    14: Math.floor((baseSalary * 1.475) / 4),
    15: Math.floor((baseSalary * 1.5) / 4),   // Lieutenant
    16: Math.floor((baseSalary * 1.6) / 4),
    17: Math.floor((baseSalary * 1.7) / 4),
    18: Math.floor((baseSalary * 1.8) / 4),
    19: Math.floor((baseSalary * 1.85) / 4),
    20: Math.floor((baseSalary * 1.9) / 4),   // Sheriff
  },

  ems: {
    0: Math.floor((baseSalary * 1.0) / 4),    // Intern
    1: Math.floor((baseSalary * 1.04) / 4),
    2: Math.floor((baseSalary * 1.08) / 4),
    3: Math.floor((baseSalary * 1.12) / 4),
    4: Math.floor((baseSalary * 1.16) / 4),
    5: Math.floor((baseSalary * 1.2) / 4),
    6: Math.floor((baseSalary * 1.24) / 4),
    7: Math.floor((baseSalary * 1.28) / 4),
    8: Math.floor((baseSalary * 1.3) / 4),    // Nurse
    9: Math.floor((baseSalary * 1.34) / 4),
    10: Math.floor((baseSalary * 1.38) / 4),
    11: Math.floor((baseSalary * 1.42) / 4),
    12: Math.floor((baseSalary * 1.46) / 4),
    13: Math.floor((baseSalary * 1.5) / 4),
    14: Math.floor((baseSalary * 1.54) / 4),
    15: Math.floor((baseSalary * 1.58) / 4),
    16: Math.floor((baseSalary * 1.6) / 4),   // Doctor
    17: Math.floor((baseSalary * 1.66) / 4),
    18: Math.floor((baseSalary * 1.72) / 4),
    19: Math.floor((baseSalary * 1.76) / 4),
    20: Math.floor((baseSalary * 1.8) / 4),   // Chief
  },
};

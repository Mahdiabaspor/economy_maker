const baseSalary = 10000; // Base income per hour

export const governmentSalary = {
  police: {
    Cadet: Math.floor((baseSalary * 0.4) / 4),
    "Police Officer 1": Math.floor((baseSalary * 0.6) / 4),
    "Police Officer 2": Math.floor((baseSalary * 0.8) / 4),
    "Police Officer 3": Math.floor((baseSalary * 1.0) / 4),
    Sergeant: Math.floor((baseSalary * 1.2) / 4),
    Lieutenant: Math.floor((baseSalary * 1.4) / 4),
    Deputy: Math.floor((baseSalary * 1.6) / 4),
    Chief: Math.floor((baseSalary * 1.8) / 4), // کمتر شد
  },
  fbi: {
    Trainee: Math.floor((baseSalary * 0.4) / 4),
    Agent: Math.floor((baseSalary * 0.6) / 4),
    "Field Agent": Math.floor((baseSalary * 1.0) / 4),
    "Special Agent": Math.floor((baseSalary * 1.3) / 4),
    Director: Math.floor((baseSalary * 1.8) / 4), // کمتر شد
  },
  army: {
    Private: Math.floor((baseSalary * 0.3) / 4), // کمتر شد
    Corporal: Math.floor((baseSalary * 0.5) / 4),
    Sergeant: Math.floor((baseSalary * 0.7) / 4),
    "Sergeant Major": Math.floor((baseSalary * 0.9) / 4),
    Lieutenant: Math.floor((baseSalary * 1.1) / 4),
    Captain: Math.floor((baseSalary * 1.3) / 4),
    General: Math.floor((baseSalary * 1.5) / 4),
    "Warrant Officer": Math.floor((baseSalary * 1.7) / 4),
    "Chief Warrant Officer": Math.floor((baseSalary * 1.9) / 4),
  },
  sheriff: {
    Cadet: Math.floor((baseSalary * 0.4) / 4),
    Deputy: Math.floor((baseSalary * 0.6) / 4),
    Corporal: Math.floor((baseSalary * 1.0) / 4),
    Sergeant: Math.floor((baseSalary * 1.2) / 4),
    Lieutenant: Math.floor((baseSalary * 1.5) / 4),
    Sheriff: Math.floor((baseSalary * 1.9) / 4), // کمتر شد
  },
  ems: {
    Intern: Math.floor((baseSalary * 1.1) / 4), // افزایش حقوق
    Nurse: Math.floor((baseSalary * 1.4) / 4),
    Doctor: Math.floor((baseSalary * 1.8) / 4),
    Chief: Math.floor((baseSalary * 2.0) / 4), // افزایش حقوق
  },
};

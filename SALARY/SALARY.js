const baseSalary = 10000; // Base income per hour

export const governmentSalary = {
  police: {
    Cadet: ((baseSalary * 0.4) / 4).toFixed(0),
    "Police Officer 1": ((baseSalary * 0.6) / 4).toFixed(0),
    "Police Officer 2": ((baseSalary * 0.8) / 4).toFixed(0),
    "Police Officer 3": ((baseSalary * 1.0) / 4).toFixed(0),
    Sergeant: ((baseSalary * 1.2) / 4).toFixed(0),
    Lieutenant: ((baseSalary * 1.4) / 4).toFixed(0),
    Deputy: ((baseSalary * 1.6) / 4).toFixed(0),
    Chief: ((baseSalary * 1.8) / 4).toFixed(0), // کمتر شد
  },
  fbi: {
    Trainee: ((baseSalary * 0.4) / 4).toFixed(0),
    Agent: ((baseSalary * 0.6) / 4).toFixed(0),
    "Field Agent": ((baseSalary * 1.0) / 4).toFixed(0),
    "Special Agent": ((baseSalary * 1.3) / 4).toFixed(0),
    Director: ((baseSalary * 1.8) / 4).toFixed(0), // کمتر شد
  },
  army: {
    Private: ((baseSalary * 0.3) / 4).toFixed(0), // کمتر شد
    Corporal: ((baseSalary * 0.5) / 4).toFixed(0),
    Sergeant: ((baseSalary * 0.7) / 4).toFixed(0),
    "Sergeant Major": ((baseSalary * 0.9) / 4).toFixed(0),
    Lieutenant: ((baseSalary * 1.1) / 4).toFixed(0),
    Captain: ((baseSalary * 1.3) / 4).toFixed(0),
    General: ((baseSalary * 1.5) / 4).toFixed(0),
    "Warrant Officer": ((baseSalary * 1.7) / 4).toFixed(0),
    "Chief Warrant Officer": ((baseSalary * 1.9) / 4).toFixed(0),
  },
  sheriff: {
    Cadet: ((baseSalary * 0.4) / 4).toFixed(0),
    Deputy: ((baseSalary * 0.6) / 4).toFixed(0),
    Corporal: ((baseSalary * 1.0) / 4).toFixed(0),
    Sergeant: ((baseSalary * 1.2) / 4).toFixed(0),
    Lieutenant: ((baseSalary * 1.5) / 4).toFixed(0),
    Sheriff: ((baseSalary * 1.9) / 4).toFixed(0), // کمتر شد
  },
  ems: {
    Intern: ((baseSalary * 1.1) / 4).toFixed(0), // افزایش حقوق
    Nurse: ((baseSalary * 1.4) / 4).toFixed(0),
    Doctor: ((baseSalary * 1.8) / 4).toFixed(0),
    Chief: ((baseSalary * 2.0) / 4).toFixed(0), // افزایش حقوق
  },
};

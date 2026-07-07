const advancedCoinCalcuter1 = (totalScore) => {
  const min = 2000;
  const max = 8000;
  const ReverseMultiplayer = 21;
  const final = Math.floor(
    min + ((totalScore - 30) / ReverseMultiplayer) * (max - min)
  );

  return final;
};
const advancedCoinCalcuter = (coins) => {
  const multi = 1;
  const final = Math.floor(coins * multi);

  return final;
};
export const VipDealershipCars = [

  // this car was for halloween event
  // {
  //   Model: "hwboneshaker",
  //   Name: "bone shaker",
  //   Class: "MUSCLE",
  //   coinPrice: advancedCoinCalcuter(1400),
  //   moneyPrice: advancedCoinCalcuter(1400) * 650,
  //   isNew: true,
  //   tier: 1,
  // },
  {
    Model: "camaro69",
    Name: "Declasse Camaro 1969",
    Class: "MUSCLE",
    coinPrice: advancedCoinCalcuter(400),
    // moneyPrice: advancedCoinCalcuter(400) * 650,

    tier: 1,
  },
  {
    Model: "cali57",
    Name: "Grotti 250 GT",
    Class: "SPORT_CLASSIC",
    coinPrice: advancedCoinCalcuter(600),

    tier: 1,
  },
  {
    Model: "fer250gto",
    Name: "Grotti 250 GT V2",
    Class: "SPORT_CLASSIC",
    coinPrice: advancedCoinCalcuter(800),

    tier: 1,
  },
  {
    Model: "w210",
    Name: "Benefactor w210", // mercedes benz w210
    Class: "SPORT_CLASSIC",
    coinPrice: advancedCoinCalcuter(900),
    moneyPrice: advancedCoinCalcuter(900) * 650,

    tier: 1,
  },
  {
    Model: "16challenger",
    Name: "Bravado Challenger 16",
    Class: "MUSCLE",
    coinPrice: advancedCoinCalcuter(1000),
    tier: 1,
  },
  {
    Model: "impreza18",
    Name: "Sabaru Impreza",
    Class: "SEDAN",
    coinPrice: advancedCoinCalcuter(1350),
    moneyPrice: advancedCoinCalcuter(1350) * 650,
    tier: 1,
  },
  {
    Model: "veln",
    Name: "TIGORD Veln",
    Class: "SEDAN",
    coinPrice: advancedCoinCalcuter(1400),
    tier: 1,
  },

  {
    Model: "escalade",
    Name: "Albany Escalade",
    Class: "SUV",
    coinPrice: advancedCoinCalcuter(1500),
    tier: 1,
  },
  {
    Model: "bmwz4",
    Name: "Übermacht z4",
    Class: "SPORTS",
    coinPrice: advancedCoinCalcuter(2000),

    tier: 1,
  },

  {
    Model: "vwid4",
    Name: "Bürgerfahrzeug ID.4",
    Class: "SEDAN",
    coinPrice: advancedCoinCalcuter(2300),
    tier: 2,
  },

  {
    Model: "skyline",
    Name: "Annis skyline",
    Class: "SPORTS",
    coinPrice: advancedCoinCalcuter(2300),
    tier: 2,
  },

  {
    Model: "458it",
    Name: "Grotti 458 Italia",
    Class: "SPORTS",
    coinPrice: advancedCoinCalcuter(2300),

    tier: 2,
  },

  {
    Model: "lex570",
    Name: "Lexos LX 570",
    Class: "SUV",
    coinPrice: advancedCoinCalcuter(2400),
    tier: 2,
  },

  {
    Model: "bmwi4",
    Name: "Ubermacht i4",
    Class: "SUPER",
    coinPrice: advancedCoinCalcuter(2400),
    tier: 2,
  },

  {
    Model: "escalade2",
    Name: "Albany Escalade2",
    Class: "SUV",
    coinPrice: advancedCoinCalcuter(2500),
    tier: 2,
  },
  {
    Model: "bmwix",
    Name: "Übermacht iX",
    Class: "SUV",
    coinPrice: advancedCoinCalcuter(2500),
    tier: 2,
  },
  {
    Model: "diablo",
    Name: "Pegassi Diablo Sv",
    Class: "SPORT_CLASSIC",
    coinPrice: advancedCoinCalcuter(2500),
    // moneyPrice: advancedCoinCalcuter(2500) * 650,

    tier: 2,
  },

  {
    Model: "amggtr",
    Name: "Benefactor AMG GTR",
    Class: "SPORTS",
    coinPrice: advancedCoinCalcuter(2600),
    tier: 2,

    // Speed: 9, Acceleration: 8, Brakes: 8, Passengers: 2, Beauty: 9 => Total: 36
  },
  {
    Model: "camry70",
    Name: "Karin  Camry 70",
    Class: "SEDAN",
    coinPrice: advancedCoinCalcuter(2600),
    moneyPrice: advancedCoinCalcuter(2600) * 650,
    DiscountPercentage: 10,
    tier: 2,

    // Speed: 9, Acceleration: 8, Brakes: 8, Passengers: 2, Beauty: 9 => Total: 36
  },

  {
    Model: "x6m",
    Name: "Übermacht X6m",
    Class: "SUV",
    coinPrice: advancedCoinCalcuter(2600),
    tier: 2,

    // Speed: 9, Acceleration: 8, Brakes: 8, Passengers: 2, Beauty: 9 => Total: 36
  },
  {
    Model: "carreragt",
    Name: "Pfister Carrera GT",
    Class: "SUPER",
    coinPrice: advancedCoinCalcuter(2700),
    tier: 2,
  },
  {
    Model: "bmwm5",
    Name: "Übermacht M5",
    Class: "SPORTS",
    coinPrice: advancedCoinCalcuter(2800),
    // moneyPrice: advancedCoinCalcuter(2800) * 650,

    tier: 2,
  },

  {
    Model: "cls63amg",
    Name: "Benefactor CLS 63",
    Class: "SEDAN",
    coinPrice: advancedCoinCalcuter(3000),
    // moneyPrice: advancedCoinCalcuter(3000) * 650,

    tier: 2,
  },
  {
    Model: "flyspur24",
    Name: "Enus Flying Spur W12",
    Class: "SEDAN",
    coinPrice: advancedCoinCalcuter(3200),

    tier: 2,
  },

  {
    Model: "artura",
    Name: "Progen Artura",
    Class: "SUPER",
    coinPrice: advancedCoinCalcuter(3400),

    tier: 2,
  },

  {
    Model: "gls63",
    Name: "Benefactor gls63",
    Class: "SUV",
    coinPrice: advancedCoinCalcuter(3400),

    tier: 2,
  },

  {
    Model: "eb110",
    Name: "Truffade EB 110",
    Class: "SUPER",
    coinPrice: advancedCoinCalcuter(3400),
    // moneyPrice: advancedCoinCalcuter(3400) * 650,
    tier: 3,
  },

  {
    Model: "19raptor",
    Name: "vapid raptor",
    Class: "SUV",
    coinPrice: advancedCoinCalcuter(3400),
    tier: 3,
  },

  {
    Model: "a80",
    Name: "Karin Supra - 4th Gen (A80)",
    Class: "SPORTS",
    coinPrice: advancedCoinCalcuter(3400),
    tier: 3,
  },

  {
    Model: "g63amg6x6",
    Name: "Benefactor  AMG G63",
    Class: "OFF_ROAD",
    coinPrice: advancedCoinCalcuter(3450),
    tier: 3,
  },

  {
    Model: "cayenne19",
    Name: "Pfister Cayenne 2019",
    Class: "SUV",
    coinPrice: advancedCoinCalcuter(3500),
    tier: 3,
  },
  {
    Model: "x7m",
    Name: "Übermacht X7M",
    Class: "SUV",
    coinPrice: advancedCoinCalcuter(3525),
    tier: 3,
  },
  {
    Model: "g63amg",
    Name: "Benefactor G63 AMG",
    Class: "SUV",
    coinPrice: advancedCoinCalcuter(3550),
    tier: 3,
  },

  {
    Model: "m5g90",
    Name: "Übermacht M5 G90",
    Class: "SPORTS",
    coinPrice: advancedCoinCalcuter(3550),
    tier: 3,
  },

  {
    Model: "cybertruck",
    Name: "CyberTrunk",
    Class: "SUV",
    coinPrice: advancedCoinCalcuter(3600),
    tier: 3,
  },

  {
    Model: "macanev",
    Name: "Pfister Macan Electric",
    Class: "SUV",
    coinPrice: advancedCoinCalcuter(3600),
    tier: 3,
  },

  {
    Model: "bmwm7",
    Name: "Übermacht M7",
    Class: "SEDAN",
    coinPrice: advancedCoinCalcuter(3600),
    tier: 3,
  },
  {
    Model: "v4r",
    Name: "Docati Panigale V4",
    Class: "MOTORCYCLE",
    coinPrice: advancedCoinCalcuter(3650),
    tier: 3,
  },

  {
    Model: "eqs",
    Name: "Benefactor EQS 4MATIC",
    Class: "SEDAN",
    coinPrice: advancedCoinCalcuter(3700),
    tier: 3,
  },

  {
    Model: "720s",
    Name: "Progen 720s",
    Class: "SUPER",

    tier: 3,

    coinPrice: advancedCoinCalcuter(3800),
  },

  {
    Model: "bacalar",
    Name: "Enus Bacalar",
    Class: "SPORTS",
    coinPrice: advancedCoinCalcuter(3900),
    tier: 3,
  },
  {
    Model: "amggt2",
    Name: "Benefactor AMG GT2",
    Class: "SPORTS",
    coinPrice: advancedCoinCalcuter(3900),
    tier: 3,
  },

  {
    Model: "yzfr1",
    Name: "Yamoha YZF-R1",
    Class: "MOTORCYCLE",
    coinPrice: advancedCoinCalcuter(3900),
    tier: 3,
  },
  {
    Model: "daytonasp3",
    Name: "Grotti Daytona SP3 ",
    Class: "SPORTS",
    coinPrice: advancedCoinCalcuter(3950),
    tier: 3,
  },

  {
    Model: "gtr",
    Name: "Annis gtr",
    Class: "SPORTS",
    coinPrice: advancedCoinCalcuter(3999),
    tier: 3,
  },

  {
    Model: "por911gt3rs",
    Name: "Pfister 911 Gt3 rs",
    Class: "SUPER",
    coinPrice: advancedCoinCalcuter(4200),
    tier: 4,
  },

  {
    Model: "batur",
    Name: "Enus Batur",
    Class: "SPORTS",
    coinPrice: advancedCoinCalcuter(4200),
    tier: 4,
  },

  {
    Model: "atlantic15",
    Name: "Truffade Atlantic",
    Class: "SPORTS",
    coinPrice: advancedCoinCalcuter(4500),
    tier: 4,
  },
  {
    Model: "develsix",
    Name: "Devel Sixteen",
    Class: "SUPER",
    coinPrice: advancedCoinCalcuter(4600),
    tier: 4,
  },

  {
    Model: "veneno",
    Name: "Pegassi  Veneno",
    Class: "SUPER",
    coinPrice: advancedCoinCalcuter(4800),
    tier: 4,
  },
  {
    Model: "divo18",
    Name: "Truffade divo ",
    Class: "SUPER",

    tier: 4,
    coinPrice: advancedCoinCalcuter(4900),
  },
  {
    Model: "v4sf",
    Name: "Docati Panigale V4 street fighter",
    Class: "MOTORCYCLE",
    coinPrice: advancedCoinCalcuter(4999),
    tier: 4,
  },
  {
    Model: "huracanst2",
    Name: "Pegassi ST Evo 2",
    Class: "SUPER",
    coinPrice: advancedCoinCalcuter(5450),
    tier: 4,
  },

  {
    Model: "humev22",
    Name: "2025 GMC HAMMER EV ",
    Class: "OFF_ROAD",
    coinPrice: advancedCoinCalcuter(5600),
    tier: 4,
  },

  {
    Model: "veyron16",
    Name: "Truffade  veyron 16",
    Class: "SUPER",
    coinPrice: advancedCoinCalcuter(5700),
    tier: 4,
  },

  {
    Model: "exp100",
    Name: "Enus EXP 100 GT",
    Class: "COUPE",
    coinPrice: advancedCoinCalcuter(5800),
    tier: 4,
  },

  {
    Model: "regera",
    Name: "OverFlod regera",
    Class: "SPORTS",
    coinPrice: advancedCoinCalcuter(5999),
    tier: 4,
  },
  {
    Model: "apollo",
    Name: "Intensa Emozione",
    Class: "SUPER",
    coinPrice: advancedCoinCalcuter(6499),
    tier: 4,
  },

  {
    Model: "lanzador",
    Name: "Pegassi unveils the Lanzador",
    Class: "ُSUV",
    coinPrice: advancedCoinCalcuter(6499),
    tier: 5,
  },
  {
    Model: "chironss22",
    Name: "Truffade Super Sport 2022",
    Class: "SUPER",
    coinPrice: advancedCoinCalcuter(6999),
    tier: 5,
  },
  {
    Model: "cc850",
    Name: "Överflöd CC850",
    Class: "SUPER",
    coinPrice: advancedCoinCalcuter(7499),
    tier: 5,
  },
  {
    Model: "terzo",
    Name: "pegassi terzo",
    Class: "SUPER",
    coinPrice: advancedCoinCalcuter(8000),
    tier: 5,
  },
  {
    Model: "avtr",
    Name: "Benefactor avtr ",
    Class: "SUPER",
    coinPrice: advancedCoinCalcuter(8500),
    tier: 5,
  },

  // {
  //   Model: "r820",
  //   Name: "Obey R8",
  //   Class: "SPORTS",
  //   Price: advancedCoinCalcuter(34),
  //   // Speed: 9, Acceleration: 9, Brakes: 8, Passengers: 2, Beauty: 8 => Total: 34
  // },

  // {
  //   DiscountPercentage: 30,
  //   Model: "coda22",
  //   Name: "Coda 22",
  //   Class: "SPORTS",
  //   coinPrice: advancedCoinCalcuter(33),
  //   // Speed: 8, Acceleration: 8, Brakes: 7, Passengers: 2, Beauty: 8 => Total: 33
  // },
];

console.log(advancedCoinCalcuter1(33));

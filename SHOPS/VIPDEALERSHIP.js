const advancedCoinCalcuter = (totalScore) => {
  const min = 2000;
  const max = 8000;
  const ReverseMultiplayer = 21;
  const final = Math.floor(
    min + ((totalScore - 30) / ReverseMultiplayer) * (max - min)
  );

  return final;
};

export const VipDealershipCars = [
  {
    Model: "720s",
    Name: "Progen 720s",
    Class: "SUPER",
    Price: 4250,
    // Speed: 9, Acceleration: 9, Brakes: 8, Passengers: 2, Beauty: 9 => Total: 45
    Price: advancedCoinCalcuter(45),
  },
  {
    Model: "divo18",
    Name: "Truffade divo ",
    Class: "SUPER",
    Price: 5350,
    // Speed: 10, Acceleration: 9, Brakes: 9, Passengers: 2, Beauty: 9 => Total: 47
    Price: advancedCoinCalcuter(47),
  },
  {
    Model: "19raptor",
    Name: "vapid raptor",
    Class: "SUV",
    Price: advancedCoinCalcuter(31),
    // Speed: 7, Acceleration: 7, Brakes: 6, Passengers: 4, Beauty: 7 => Total: 31
  },
  {
    Model: "avtr",
    Name: "Benefactor avtr ",
    Class: "SUPER",
    Price: advancedCoinCalcuter(51),
    // Speed: 10, Acceleration: 10, Brakes: 9, Passengers: 2, Beauty: 10 => Total: 51
  },
  {
    Model: "bmwi4",
    Name: "Ubermacht i4",
    Class: "SUPER",
    Price: advancedCoinCalcuter(37),
    // Speed: 8, Acceleration: 9, Brakes: 8, Passengers: 4, Beauty: 8 => Total: 37
  },
  {
    Model: "skyline",
    Name: "Annis skyline",
    Class: "SPORTS",
    Price: advancedCoinCalcuter(34),
    // Speed: 7, Acceleration: 8, Brakes: 7, Passengers: 2, Beauty: 10 => Total: 34
  },
  {
    Model: "r820",
    Name: "Obey R8",
    Class: "SPORTS",
    Price: advancedCoinCalcuter(34),
    // Speed: 9, Acceleration: 9, Brakes: 8, Passengers: 2, Beauty: 8 => Total: 34
  },
  {
    Model: "gtr",
    Name: "Annis gtr",
    Class: "SPORTS",
    Price: advancedCoinCalcuter(33),
    // Speed: 8, Acceleration: 8, Brakes: 7, Passengers: 2, Beauty: 8 => Total: 33
  },
  {
    Model: "regera",
    Name: "OverFlod regera",
    Class: "SPORTS",
    Price: advancedCoinCalcuter(45),
    // Speed: 9, Acceleration: 9, Brakes: 8, Passengers: 2, Beauty: 9 => Total: 45
  },
  {
    Model: "16challenger",
    Name: "Bravado Challenger 16",
    Class: "MUSCLE",
    Price: advancedCoinCalcuter(33),
    // Speed: 8, Acceleration: 7, Brakes: 6, Passengers: 4, Beauty: 8 => Total: 33
  },
  {
    Model: "amggt2",
    Name: "Benefactor AMG GT2",
    Class: "SPORTS",
    Price: advancedCoinCalcuter(35),
    // Speed: 8, Acceleration: 8, Brakes: 8, Passengers: 2, Beauty: 9 => Total: 35
  },
  {
    Model: "amggtr",
    Name: "Benefactor AMG GTR",
    Class: "SPORTS",
    Price: advancedCoinCalcuter(36),
    // Speed: 9, Acceleration: 8, Brakes: 8, Passengers: 2, Beauty: 9 => Total: 36
  },
  {
    Model: "artura",
    Name: "Progen Artura",
    Class: "SUPER",
    Price: advancedCoinCalcuter(36),
    // Speed: 9, Acceleration: 9, Brakes: 8, Passengers: 2, Beauty: 8 => Total: 36
  },
  {
    Model: "bacalar",
    Name: "Enus Bacalar",
    Class: "SPORTS",
    Price: advancedCoinCalcuter(35),
    // Speed: 8, Acceleration: 8, Brakes: 8, Passengers: 2, Beauty: 9 => Total: 35
  },
  {
    Model: "batur",
    Name: "Enus Batur",
    Class: "SPORTS",
    Price: advancedCoinCalcuter(35),
    // Speed: 8, Acceleration: 8, Brakes: 8, Passengers: 2, Beauty: 9 => Total: 35
  },
  {
    Model: "bmwix",
    Name: "Übermacht iX",
    Class: "SUV",
    Price: advancedCoinCalcuter(32),
    // Speed: 7, Acceleration: 7, Brakes: 7, Passengers: 4, Beauty: 7 => Total: 32
  },
  {
    Model: "bmwm5",
    Name: "Übermacht M5",
    Class: "SPORTS",
    Price: advancedCoinCalcuter(36),
    // Speed: 8, Acceleration: 8, Brakes: 8, Passengers: 4, Beauty: 8 => Total: 36
  },
  {
    Model: "bmwm7",
    Name: "Übermacht M7",
    Class: "SEDAN",
    Price: advancedCoinCalcuter(33),
    // Speed: 7, Acceleration: 7, Brakes: 7, Passengers: 4, Beauty: 8 => Total: 33
  },
  {
    Model: "cali57",
    Name: "Grotti 250 GT",
    Class: "SPORT_CLASSIC",
    Price: advancedCoinCalcuter(30),
    // Speed: 7, Acceleration: 6, Brakes: 6, Passengers: 2, Beauty: 9 => Total: 30
  },
  {
    Model: "camaro69",
    Name: "Declasse Camaro 1969",
    Class: "MUSCLE",
    Price: advancedCoinCalcuter(30),
    // Speed: 7, Acceleration: 7, Brakes: 6, Passengers: 2, Beauty: 8 => Total: 30
  },
  {
    Model: "carreragt",
    Name: "Pfister Carrera GT",
    Class: "SUPER",
    Price: advancedCoinCalcuter(45),
    // Speed: 9, Acceleration: 9, Brakes: 8, Passengers: 2, Beauty: 9 => Total: 45
  },
  {
    Model: "cayenne19",
    Name: "Pfister Cayenne 2019",
    Class: "SUV",
    Price: advancedCoinCalcuter(33),
    // Speed: 7, Acceleration: 7, Brakes: 7, Passengers: 4, Beauty: 8 => Total: 33
  },
  {
    Model: "cc850",
    Name: "Överflöd CC850",
    Class: "SUPER",
    Price: advancedCoinCalcuter(45),
    // Speed: 9, Acceleration: 9, Brakes: 9, Passengers: 2, Beauty: 9 => Total: 45
  },
  {
    Model: "chironss22",
    Name: "Truffade Super Sport 2022",
    Class: "SUPER",
    Price: advancedCoinCalcuter(50),
    // Speed: 10, Acceleration: 10, Brakes: 9, Passengers: 2, Beauty: 9 => Total: 50
  },
  {
    Model: "cls63amg",
    Name: "Benefactor CLS 63",
    Class: "SEDAN",
    Price: advancedCoinCalcuter(36),
    // Speed: 8, Acceleration: 8, Brakes: 8, Passengers: 4, Beauty: 8 => Total: 36
  },
  {
    Model: "coda22",
    Name: "Coda 22",
    Class: "SPORTS",
    Price: advancedCoinCalcuter(33),
    // Speed: 8, Acceleration: 8, Brakes: 7, Passengers: 2, Beauty: 8 => Total: 33
  },
  {
    Model: "develsix",
    Name: "Devel Sixteen",
    Class: "SUPER",
    Price: advancedCoinCalcuter(49),
    // Speed: 10, Acceleration: 10, Brakes: 8, Passengers: 2, Beauty: 9 => Total: 49
  },
  {
    Model: "diablo",
    Name: "Pegassi Diablo Sv",
    Class: "SPORT_CLASSIC",
    Price: advancedCoinCalcuter(33),
    // Speed: 8, Acceleration: 7, Brakes: 7, Passengers: 2, Beauty: 9 => Total: 33
  },
  {
    Model: "eb110",
    Name: "Truffade EB 110",
    Class: "SUPER",
    Price: advancedCoinCalcuter(44),
    // Speed: 9, Acceleration: 9, Brakes: 8, Passengers: 2, Beauty: 8 => Total: 44
  },
  {
    Model: "eqs",
    Name: "Benefactor EQS 4MATIC",
    Class: "SEDAN",
    Price: advancedCoinCalcuter(34),
    // Speed: 7, Acceleration: 8, Brakes: 7, Passengers: 4, Beauty: 8 => Total: 34
  },
  {
    Model: "exp100",
    Name: "Enus EXP 100 GT",
    Class: "COUPE",
    Price: advancedCoinCalcuter(35),
    // Speed: 8, Acceleration: 8, Brakes: 8, Passengers: 2, Beauty: 9 => Total: 35
  },
  {
    Model: "fer250gto",
    Name: "Grotti 250 GT V2",
    Class: "SPORT_CLASSIC",
    Price: advancedCoinCalcuter(30),
    // Speed: 7, Acceleration: 6, Brakes: 6, Passengers: 2, Beauty: 9 => Total: 30
  },
  {
    Model: "flyspur24",
    Name: "Enus Flying Spur W12",
    Class: "SEDAN",
    Price: advancedCoinCalcuter(33),
    // Speed: 7, Acceleration: 7, Brakes: 7, Passengers: 4, Beauty: 8 => Total: 33
  },
  {
    Model: "g63amg",
    Name: "Benefactor G63 AMG",
    Class: "SUV",
    Price: advancedCoinCalcuter(33),
    // Speed: 7, Acceleration: 7, Brakes: 7, Passengers: 4, Beauty: 8 => Total: 33
  },
  {
    Model: "huracanst2",
    Name: "Pegassi ST Evo 2",
    Class: "SUPER",
    Price: advancedCoinCalcuter(45),
    // Speed: 9, Acceleration: 9, Brakes: 9, Passengers: 2, Beauty: 9 => Total: 45
  },
];

const playerAvaregeIncome = 10000;
const hardLvl = 1
const calcPrice = (hourToGain) => {
    const price = playerAvaregeIncome * hourToGain;
    // Round the price to the nearest 250, 500, 750, or 000
    const remainder = price % 250;
    const roundedPrice = price - remainder;

    return Math.floor(roundedPrice * hardLvl);
}




export const carsv3 = [


    // COMPACT (Non-Luxury: Cheap 3.5-5, Medium 10-20, Luxury 30-50)
    { Model: "brioso2", Name: "Brioso 300", Class: "COMPACT", "Price": calcPrice(6.00) }, // Starting at 6.00
    { Model: "weevil", Name: "Weevil", Class: "COMPACT", "Price": calcPrice(8.23) }, // 6.00 + 2.23
    { Model: "brioso3", Name: "Brioso 300 Widebody", Class: "COMPACT", "Price": calcPrice(10.46) }, // 8.23 + 2.23
    { Model: "issi3", Name: "Issi Classic", Class: "COMPACT", "Price": calcPrice(12.69) }, // 10.46 + 2.23
    { Model: "panto", Name: "Panto", Class: "COMPACT", "Price": calcPrice(14.92) }, // 12.69 + 2.23
    { Model: "asbo", Name: "Asbo", Class: "COMPACT", "Price": calcPrice(17.15) }, // 14.92 + 2.23
    { Model: "dilettante", Name: "Dilettante", Class: "COMPACT", "Price": calcPrice(19.38) }, // 17.15 + 2.23
    { Model: "brioso", Name: "Brioso R/A", Class: "COMPACT", "Price": calcPrice(21.61) }, // 19.38 + 2.23
    { Model: "rhapsody", Name: "Rhapsody", Class: "COMPACT", "Price": calcPrice(23.84) }, // 21.61 + 2.23
    { Model: "club", Name: "Club", Class: "COMPACT", "Price": calcPrice(26.07) }, // 23.84 + 2.23
    { Model: "blista", Name: "Blista", Class: "COMPACT", "Price": calcPrice(28.30) }, // 26.07 + 2.23
    { Model: "kanjo", Name: "Blista Kanjo", Class: "COMPACT", "Price": calcPrice(30.53) }, // 28.30 + 2.23
    { Model: "issi2", Name: "Issi", Class: "COMPACT", "Price": calcPrice(32.76) }, // 30.53 + 2.23
    { Model: "prairie", Name: "Prairie", Class: "COMPACT", "Price": calcPrice(35.00) }, // E


    // COUPE (Mixed: Cheap 3.5-5, Medium 10-20, Luxury 30-50, Very Luxury 75-100)
    { Model: "postlude", Name: "Postlude", Class: "COUPE", "Price": calcPrice(18.00) }, // Starting at 18.00
    { Model: "kanjosj", Name: "Kanjo SJ", Class: "COUPE", "Price": calcPrice(20.17) }, // 18.00 + 2.17
    { Model: "zion", Name: "Zion", Class: "COUPE", "Price": calcPrice(22.34) }, // 20.17 + 2.17
    { Model: "oracle", Name: "Oracle XS", Class: "COUPE", "Price": calcPrice(24.51) }, // 22.34 + 2.17
    { Model: "sentinel", Name: "Sentinel XS", Class: "COUPE", "Price": calcPrice(26.68) }, // 24.51 + 2.17
    { Model: "previon", Name: "Previon", Class: "COUPE", "Price": calcPrice(28.85) }, // 26.68 + 2.17
    { Model: "jackal", Name: "Jackal", Class: "COUPE", "Price": calcPrice(31.02) }, // 28.85 + 2.17
    { Model: "oracle2", Name: "Oracle", Class: "COUPE", "Price": calcPrice(33.19) }, // 31.02 + 2.17
    { Model: "zion2", Name: "Zion Cabrio", Class: "COUPE", "Price": calcPrice(35.36) }, // 33.19 + 2.17
    { Model: "f620", Name: "F620", Class: "COUPE", "Price": calcPrice(37.53) }, // 35.36 + 2.17
    { Model: "felon", Name: "Felon", Class: "COUPE", "Price": calcPrice(39.70) }, // 37.53 + 2.17
    { Model: "sentinel2", Name: "Sentinel", Class: "COUPE", "Price": calcPrice(41.87) }, // 39.70 + 2.17
    { Model: "eurosx32", Name: "Euros X32", Class: "COUPE", "Price": calcPrice(44.04) }, // 41.87 + 2.17
    { Model: "fr36", Name: "FR36", Class: "COUPE", "Price": calcPrice(46.21) }, // 44.04 + 2.17
    { Model: "felon2", Name: "Felon GT", Class: "COUPE", "Price": calcPrice(48.38) }, // 46.21 + 2.17
    { Model: "cogcabrio", Name: "Cognoscenti Cabrio", Class: "COUPE", "Price": calcPrice(50.55) }, // 48.38 + 2.17
    { Model: "exemplar", Name: "Exemplar", Class: "COUPE", "Price": calcPrice(52.72) }, // 50.55 + 2.17
    { Model: "windsor", Name: "Windsor", Class: "COUPE", "Price": calcPrice(54.89) }, // 52.72 + 2.17
    { Model: "windsor2", Name: "Windsor Drop", Class: "COUPE", "Price": calcPrice(57.00) }, // Ending at 57.00



    // MOTORCYCLE (Mixed: Cheap 3.5-5, Medium 10-20, Luxury 30-50)
    { Model: "faggio2", Name: "Faggio", Class: "MOTORCYCLE", "Price": calcPrice(2.8345) }, // Original: 3.5
    { Model: "faggio3", Name: "Faggio Mod", Class: "MOTORCYCLE", "Price": calcPrice(3.2345) }, // Original: 4.00
    { Model: "faggio", Name: "Faggio Sport", Class: "MOTORCYCLE", "Price": calcPrice(3.6416) }, // Original: 4.552
    { Model: "ratbike", Name: "Rat Bike", Class: "MOTORCYCLE", "Price": calcPrice(4.5345) }, // Original: 5.6250
    { Model: "bagger", Name: "Bagger", Class: "MOTORCYCLE", "Price": calcPrice(4.96) }, // Original: 6.20
    { Model: "chimera", Name: "Chimera", Class: "MOTORCYCLE", "Price": calcPrice(5.36) }, // Original: 6.70
    { Model: "wolfsbane", Name: "Wolfsbane", Class: "MOTORCYCLE", "Price": calcPrice(6.0345) }, // Original: 7.50
    { Model: "enduro", Name: "Enduro", Class: "MOTORCYCLE", "Price": calcPrice(6.64) }, // Original: 8.30
    { Model: "daemon", Name: "Daemon", Class: "MOTORCYCLE", "Price": calcPrice(7.2345) }, // Original: 9.00
    { Model: "daemon2", Name: "Daemon Custom", Class: "MOTORCYCLE", "Price": calcPrice(7.6345) }, // Original: 9.50
    { Model: "hexer", Name: "Hexer", Class: "MOTORCYCLE", "Price": calcPrice(8.48) }, // Original: 10.6
    { Model: "avarus", Name: "Avarus", Class: "MOTORCYCLE", "Price": calcPrice(9.6345) }, // Original: 12.00
    { Model: "pcj", Name: "PCJ 600", Class: "MOTORCYCLE", "Price": calcPrice(10.2345) }, // Original: 12.75
    { Model: "zombiea", Name: "Zombie Bobber", Class: "MOTORCYCLE", "Price": calcPrice(10.84) }, // Original: 13.55
    { Model: "zombieb", Name: "Zombie Chopper", Class: "MOTORCYCLE", "Price": calcPrice(11.2345) }, // Original: 14.00
    { Model: "sanchez2", Name: "Sanchez", Class: "MOTORCYCLE", "Price": calcPrice(13.2345) }, // Original: 16.50
    { Model: "sanchez", Name: "Sanchez (livery)", Class: "MOTORCYCLE", "Price": calcPrice(13.6345) }, // Original: 17.00
    { Model: "esskey", Name: "Esskey", Class: "MOTORCYCLE", "Price": calcPrice(14.4345) }, // Original: 18.00
    { Model: "manchez2", Name: "Manchez Scout", Class: "MOTORCYCLE", "Price": calcPrice(15.6345) }, // Original: 19.5
    { Model: "manchez3", Name: "Manchez Scout C", Class: "MOTORCYCLE", "Price": calcPrice(16.02) }, // Original: 20.025
    { Model: "manchez", Name: "Manchez", Class: "MOTORCYCLE", "Price": calcPrice(16.8345) }, // Original: 21.00
    { Model: "bf400", Name: "BF400", Class: "MOTORCYCLE", "Price": calcPrice(19.256) }, // Original: 24.07
    { Model: "sovereign", Name: "Sovereign", Class: "MOTORCYCLE", "Price": calcPrice(20.04) }, // Original: 25.05
    { Model: "stryder", Name: "Stryder", Class: "MOTORCYCLE", "Price": calcPrice(20.84) }, // Original: 26.05
    { Model: "diablous", Name: "Diabolus", Class: "MOTORCYCLE", "Price": calcPrice(22.4345) }, // Original: 28.00
    { Model: "diablous2", Name: "Diabolus Custom", Class: "MOTORCYCLE", "Price": calcPrice(23.0345) }, // Original: 28.75
    { Model: "powersurge", Name: "Powersurge", Class: "MOTORCYCLE", "Price": calcPrice(23.48) }, // Original: 29.35
    { Model: "vader", Name: "Vader", Class: "MOTORCYCLE", "Price": calcPrice(24.4345) }, // Original: 30.50
    { Model: "lectro", Name: "Lectro", Class: "MOTORCYCLE", "Price": calcPrice(25.48) }, // Original: 31.85
    { Model: "innovation", Name: "Innovation", Class: "MOTORCYCLE", "Price": calcPrice(26.0345) }, // Original: 32.50
    { Model: "nemesis", Name: "Nemesis", Class: "MOTORCYCLE", "Price": calcPrice(27.2345) }, // Original: 34.00
    { Model: "fcr", Name: "FCR 1000", Class: "MOTORCYCLE", "Price": calcPrice(28.64) }, // Original: 35.80
    { Model: "fcr2", Name: "FCR 1000 Custom", Class: "MOTORCYCLE", "Price": calcPrice(29.2345) }, // Original: 36.5
    { Model: "carbonrs", Name: "Carbon RS", Class: "MOTORCYCLE", "Price": calcPrice(31.2345) }, // Original: 39.00
    { Model: "nightblade", Name: "Nightblade", Class: "MOTORCYCLE", "Price": calcPrice(32.64) }, // Original: 40.80
    { Model: "akuma", Name: "Akuma", Class: "MOTORCYCLE", "Price": calcPrice(33.0345) }, // Original: 415.00
    { Model: "bati", Name: "Bati 801", Class: "MOTORCYCLE", "Price": calcPrice(34.04) }, // Original: 42.55
    { Model: "bati2", Name: "Bati 801RR", Class: "MOTORCYCLE", "Price": calcPrice(34.4345) }, // Original: 43.00
    { Model: "cliffhanger", Name: "Cliffhanger", Class: "MOTORCYCLE", "Price": calcPrice(35.4345) }, // Original: 44.25
    { Model: "deathbike", Name: "Apocalypse Deathbike", Class: "MOTORCYCLE", "Price": calcPrice(36.0345) }, // Original: 45.0
    { Model: "gargoyle", Name: "Gargoyle", Class: "MOTORCYCLE", "Price": calcPrice(36.56) }, // Original: 45.7
    { Model: "ruffian", Name: "Ruffian", Class: "MOTORCYCLE", "Price": calcPrice(37.2345) }, // Original: 46.50
    { Model: "defiler", Name: "Defiler", Class: "MOTORCYCLE", "Price": calcPrice(38.12) }, // Original: 47.65
    { Model: "double", Name: "Double-T", Class: "MOTORCYCLE", "Price": calcPrice(39.08) }, // Original: 48.85
    { Model: "hakuchou", Name: "Hakuchou", Class: "MOTORCYCLE", "Price": calcPrice(39.84) }, // Original: 49.80
    { Model: "sanctus", Name: "Sanctus", Class: "MOTORCYCLE", "Price": calcPrice(39.92) }, // Original: 49.9
    { Model: "vortex", Name: "Vortex", Class: "MOTORCYCLE", "Price": calcPrice(40.0345) }, // Original: 50.00
    { Model: "thrust", Name: "Thrust", Class: "MOTORCYCLE", "Price": calcPrice(41.0345) }, // Original: 51.25
    { Model: "vindicator", Name: "Vindicator", Class: "MOTORCYCLE", "Price": calcPrice(42.12) }, // Original: 52.65
    { Model: "reever", Name: "Reever", Class: "MOTORCYCLE", "Price": calcPrice(42.8345) }, // Original: 53.50
    { Model: "shinobi", Name: "Shinobi", Class: "MOTORCYCLE", "Price": calcPrice(44.4345) }, // Original: 55.50
    { Model: "shotaro", Name: "Shotaro", Class: "MOTORCYCLE", "Price": calcPrice(47.2345) }, // Original: 59.00
    { Model: "rrocket", Name: "Rampant Rocket", Class: "MOTORCYCLE", "Price": calcPrice(48.0345) }, // Original: 60.00
    { Model: "hakuchou2", Name: "Hakuchou Drag", Class: "MOTORCYCLE", "Price": calcPrice(52.4345) }, // Original: 65.50
    
    
    
    // MUSCLE (Mixed: Cheap 3.5-5, Medium 10-20, Luxury 30-50, Very Luxury 75-100)

    // MUSCLE (Mixed: Cheap 3.5-5, Medium 10-20, Luxury 30-50, Very Luxury 75-100)
    
    { Model: "voodoo2", Name: "Voodoo", Class: "MUSCLE", "Price": calcPrice(3.40) },
    { Model: "ratloader2", Name: "Rat-Truck", Class: "MUSCLE", "Price": calcPrice(4.08) },
    { Model: "virgo3", Name: "Virgo Classic", Class: "MUSCLE", "Price": calcPrice(4.76) },
    { Model: "voodoo", Name: "Voodoo Custom", Class: "MUSCLE", "Price": calcPrice(5.44) },
    { Model: "chino", Name: "Chino", Class: "MUSCLE", "Price": calcPrice(6.12) },
    { Model: "chino2", Name: "Chino Custom", Class: "MUSCLE", "Price": calcPrice(6.80) },
    { Model: "virgo", Name: "Virgo", Class: "MUSCLE", "Price": calcPrice(7.48) },
   
    { Model: "slamvan", Name: "Slamvan", Class: "MUSCLE", "Price": calcPrice(8.84) },
    { Model: "broadway", Name: "Broadway", Class: "MUSCLE", "Price": calcPrice(10.20) },
    { Model: "yosemite", Name: "Yosemite", Class: "MUSCLE", "Price": calcPrice(10.88) },
    { Model: "slamvan3", Name: "Slamvan Custom", Class: "MUSCLE", "Price": calcPrice(9.52) },
    { Model: "moonbeam", Name: "Moonbeam", Class: "MUSCLE", "Price": calcPrice(11.56) },
    { Model: "clique2", Name: "Clique Wagon", Class: "MUSCLE", "Price": calcPrice(12.24) },
    { Model: "chino", Name: "Chino", Class: "MUSCLE", "Price": calcPrice(12.92) }, // Duplicate
    { Model: "chino2", Name: "Chino Custom", Class: "MUSCLE", "Price": calcPrice(13.60) }, // Duplicate
    { Model: "manana2", Name: "Manana Custom", Class: "MUSCLE", "Price": calcPrice(14.28) },
    { Model: "virgo2", Name: "Virgo Classic Custom", Class: "MUSCLE", "Price": calcPrice(14.96) },
    { Model: "eudora", Name: "Eudora", Class: "MUSCLE", "Price": calcPrice(15.64) },
    { Model: "brigham", Name: "Brigham", Class: "MUSCLE", "Price": calcPrice(16.32) },
    { Model: "picador", Name: "Picador", Class: "MUSCLE", "Price": calcPrice(17.68) },
    { Model: "faction3", Name: "Faction Custom Donk", Class: "MUSCLE", "Price": calcPrice(18.36) },
    { Model: "faction", Name: "Faction", Class: "MUSCLE", "Price": calcPrice(19.04) },
    { Model: "vigero", Name: "Vigero", Class: "MUSCLE", "Price": calcPrice(19.72) },
    { Model: "peyote2", Name: "Peyote Gasser", Class: "MUSCLE", "Price": calcPrice(20.40) },
    { Model: "nightshade", Name: "Nightshade", Class: "MUSCLE", "Price": calcPrice(21.08) },
    { Model: "hotknife", Name: "Hotknife", Class: "MUSCLE", "Price": calcPrice(21.00) },
    { Model: "lurcher", Name: "Lurcher", Class: "MUSCLE", "Price": calcPrice(21.76) },
    { Model: "faction2", Name: "Faction Custom", Class: "MUSCLE", "Price": calcPrice(22.44) },
    { Model: "ellie", Name: "Ellie", Class: "MUSCLE", "Price": calcPrice(23.12) },
    { Model: "buccaneer", Name: "Buccaneer", Class: "MUSCLE", "Price": calcPrice(23.80) },
    { Model: "buccaneer2", Name: "Buccaneer Custom", Class: "MUSCLE", "Price": calcPrice(24.48) },
    { Model: "stalion", Name: "Stallion", Class: "MUSCLE", "Price": calcPrice(25.16) },
    { Model: "phoenix", Name: "Phoenix", Class: "MUSCLE", "Price": calcPrice(25.84) },
    { Model: "hustler", Name: "Hustler", Class: "MUSCLE", "Price": calcPrice(26.52) },
    { Model: "gauntlet3", Name: "Gauntlet Classic", Class: "MUSCLE", "Price": calcPrice(27.20) },
    { Model: "gauntlet", Name: "Gauntlet", Class: "MUSCLE", "Price": calcPrice(27.88) },
    { Model: "deviant", Name: "Deviant", Class: "MUSCLE", "Price": calcPrice(28.56) },
    { Model: "tulip2", Name: "Tulip M-100", Class: "MUSCLE", "Price": calcPrice(29.24) },
    { Model: "tampa", Name: "Tampa", Class: "MUSCLE", "Price": calcPrice(29.92) },
    { Model: "tahoma", Name: "Tahoma Coupe", Class: "MUSCLE", "Price": calcPrice(30.60) },
    { Model: "gauntlet2", Name: "Redwood Gauntlet", Class: "MUSCLE", "Price": calcPrice(31.28) },
    { Model: "stalion2", Name: "Burger Shot Stallion", Class: "MUSCLE", "Price": calcPrice(31.96) },
    { Model: "weevil2", Name: "Weevil Custom", Class: "MUSCLE", "Price": calcPrice(32.64) },
    { Model: "vamos", Name: "Vamos", Class: "MUSCLE", "Price": calcPrice(33.32) },
    { Model: "tulip", Name: "Tulip", Class: "MUSCLE", "Price": calcPrice(34.00) },
    { Model: "impaler6", Name: "Impaler LX", Class: "MUSCLE", "Price": calcPrice(34.40) },
    { Model: "impaler", Name: "Impaler", Class: "MUSCLE", "Price": calcPrice(34.58) },
    { Model: "hermes", Name: "Hermes", Class: "MUSCLE", "Price": calcPrice(34.68) },
    { Model: "gauntlet5", Name: "Gauntlet Classic Custom", Class: "MUSCLE", "Price": calcPrice(35.36) },
    { Model: "dukes3", Name: "Beater Dukes", Class: "MUSCLE", "Price": calcPrice(36.04) },
    { Model: "sabregt", Name: "Sabre Turbo", Class: "MUSCLE", "Price": calcPrice(36.72) },
    { Model: "sabregt2", Name: "Sabre Turbo Custom", Class: "MUSCLE", "Price": calcPrice(37.40) },
    { Model: "ruiner", Name: "Ruiner", Class: "MUSCLE", "Price": calcPrice(38.08) },
    { Model: "dukes", Name: "Dukes", Class: "MUSCLE", "Price": calcPrice(38.76) },
    { Model: "coquette3", Name: "Coquette BlackFin", Class: "MUSCLE", "Price": calcPrice(39.44) },
    { Model: "blade", Name: "Blade", Class: "MUSCLE", "Price": calcPrice(40.12) },

    { Model: "greenwood", Name: "Greenwood", Class: "MUSCLE", "Price": calcPrice(42.16) },
    { Model: "dominator10", Name: "Dominator FX", Class: "MUSCLE", "Price": calcPrice(42.48) },
    { Model: "impaler5", Name: "Impaler SZ", Class: "MUSCLE", "Price": calcPrice(42.72) },
    { Model: "gauntlet4", Name: "Gauntlet Hellfire", Class: "MUSCLE", "Price": calcPrice(42.84) },
    { Model: "dominator3", Name: "Dominator GTX", Class: "MUSCLE", "Price": calcPrice(43.52) },
    { Model: "dominator", Name: "Dominator", Class: "MUSCLE", "Price": calcPrice(44.20) },
    { Model: "ruiner4", Name: "Ruiner ZZ-8", Class: "MUSCLE", "Price": calcPrice(45.56) },
    { Model: "dominator2", Name: "Pisswasser Dominator", Class: "MUSCLE", "Price": calcPrice(46.24) },
    { Model: "yosemite2", Name: "Drift Yosemite", Class: "MUSCLE", "Price": calcPrice(47.60) },
    { Model: "dominator8", Name: "Dominator GTT", Class: "MUSCLE", "Price": calcPrice(48.28) },
    { Model: "clique", Name: "Clique", Class: "MUSCLE", "Price": calcPrice(48.96) },
    { Model: "dominator7", Name: "Dominator ASP", Class: "MUSCLE", "Price": calcPrice(49.64) },
    { Model: "vigero3", Name: "Vigero ZX Convertible", Class: "MUSCLE", "Price": calcPrice(50.32) },
    { Model: "vigero2", Name: "Vigero ZX", Class: "MUSCLE", "Price": calcPrice(51.00) },
    { Model: "buffalo4", Name: "Buffalo STX", Class: "MUSCLE", "Price": calcPrice(51.68) },
    { Model: "buffalo5", Name: "Buffalo EVX", Class: "MUSCLE", "Price": calcPrice(52.36) },
    { Model: "dominator9", Name: "Dominator GT", Class: "MUSCLE", "Price": calcPrice(55.00) },



    // OFF_ROAD (Non-Luxury: Cheap 3.5-5, Medium 10-20, Luxury 30-50)
    { Model: "bodhi2", Name: "Bodhi", Class: "OFF_ROAD", "Price": calcPrice(11.0000) },
    { Model: "rancherxl", Name: "Rancher XL", Class: "OFF_ROAD", "Price": calcPrice(12.0625) },
    { Model: "boor", Name: "Boor", Class: "OFF_ROAD", "Price": calcPrice(20.5625) },
    { Model: "kalahari", Name: "Kalahari", Class: "OFF_ROAD", "Price": calcPrice(13.1250) },
    { Model: "l35", Name: "Walton L35", Class: "OFF_ROAD", "Price": calcPrice(14.1875) },
    { Model: "yosemite3", Name: "Yosemite Rancher", Class: "OFF_ROAD", "Price": calcPrice(15.2500) },
    { Model: "verus", Name: "Verus", Class: "OFF_ROAD", "Price": calcPrice(25.00) }, // Starting at 25.00
{ Model: "blazer", Name: "Blazer", Class: "OFF_ROAD", "Price": calcPrice(26.75) }, // 25.00 + 1.75
{ Model: "rebel2", Name: "Rebel", Class: "OFF_ROAD", "Price": calcPrice(28.50) }, // 26.75 + 1.75
{ Model: "bfinjection", Name: "Injection", Class: "OFF_ROAD", "Price": calcPrice(30.25) }, // 28.50 + 1.75
{ Model: "hellion", Name: "Hellion", Class: "OFF_ROAD", "Price": calcPrice(32.00) }, // 30.25 + 1.75
{ Model: "bifta", Name: "Bifta", Class: "OFF_ROAD", "Price": calcPrice(33.75) }, // 32.00 + 1.75
{ Model: "sandking2", Name: "Sandking SWB", Class: "OFF_ROAD", "Price": calcPrice(35.50) }, // 33.75 + 1.75
{ Model: "sandking", Name: "Sandking XL", Class: "OFF_ROAD", "Price": calcPrice(37.25) }, // 35.50 + 1.75
{ Model: "riata", Name: "Riata", Class: "OFF_ROAD", "Price": calcPrice(39.00) }, // 37.25 + 1.75
{ Model: "caracara2", Name: "Caracara 4x4", Class: "OFF_ROAD", "Price": calcPrice(40.75) }, // 39.00 + 1.75
{ Model: "everon", Name: "Everon", Class: "OFF_ROAD", "Price": calcPrice(42.50) }, // 40.75 + 1.75
{ Model: "kamacho", Name: "Kamacho", Class: "OFF_ROAD", "Price": calcPrice(44.25) }, // 42.50 + 1.75
{ Model: "monstrociti", Name: "MonstroCiti", Class: "OFF_ROAD", "Price": calcPrice(46.00) }, // 44.25 + 1.75
{ Model: "dubsta3", Name: "Dubsta 6x6", Class: "OFF_ROAD", "Price": calcPrice(47.75) }, // 46.00 + 1.75
{ Model: "vagrant", Name: "Vagrant", Class: "OFF_ROAD", "Price": calcPrice(49.50) }, // 47.75 + 1.75
{ Model: "trophytruck2", Name: "Desert Raid", Class: "OFF_ROAD", "Price": calcPrice(51.25) }, // 49.50 + 1.75
{ Model: "trophytruck", Name: "Trophy Truck", Class: "OFF_ROAD", "Price": calcPrice(53.00) }, // 51.25 + 1.75
{ Model: "brawler", Name: "Brawler", Class: "OFF_ROAD", "Price": calcPrice(54.75) }, // 53.00 + 1.75
{ Model: "outlaw", Name: "Outlaw", Class: "OFF_ROAD", "Price": calcPrice(56.50) }, // 54.75 + 1.75
{ Model: "ratel", Name: "Ratel", Class: "OFF_ROAD", "Price": calcPrice(58.25) }, // 56.50 + 1.75
{ Model: "draugur", Name: "Draugur", Class: "OFF_ROAD", "Price": calcPrice(60.00) }, // Ending at 60.00
    

    // SEDAN (Non-Luxury: Cheap 3.5-5, Medium 10-20, Luxury 30-50)
{ Model: "regina", Name: "Regina", Class: "SEDAN", "Price": calcPrice(5.00) }, // 75 mph, Cheap, $37,500
{ Model: "emperor", Name: "Emperor", Class: "SEDAN", "Price": calcPrice(6.21) }, // 75 mph, Cheap, $45,000
{ Model: "ingot", Name: "Ingot", Class: "SEDAN", "Price": calcPrice(7.42) }, // 75 mph, Cheap, $50,000
{ Model: "asea", Name: "Asea", Class: "SEDAN", "Price": calcPrice(8.63) }, // 75 mph, Cheap, $35,000
{ Model: "premier", Name: "Premier", Class: "SEDAN", "Price": calcPrice(9.84) }, // 75 mph, Cheap, $40,000
{ Model: "glendale", Name: "Glendale", Class: "SEDAN", "Price": calcPrice(11.05) }, // 75 mph, Medium, $105,000
{ Model: "washington", Name: "Washington", Class: "SEDAN", "Price": calcPrice(12.26) }, // 75 mph, Cheap, $50,000
{ Model: "warrener2", Name: "Warrener HKR", Class: "SEDAN", "Price": calcPrice(13.47) }, // 75 mph, Luxury, $307,500
{ Model: "warrener", Name: "Warrener", Class: "SEDAN", "Price": calcPrice(14.68) }, // 75 mph, Medium, $172,500
{ Model: "glendale2", Name: "Glendale Custom", Class: "SEDAN", "Price": calcPrice(15.36) }, // 75 mph, Luxury, $307,500
{ Model: "stanier", Name: "Stanier", Class: "SEDAN", "Price": calcPrice(15.89) }, // 75 mph, Cheap, $45,000
{ Model: "asterope", Name: "Asterope", Class: "SEDAN", "Price": calcPrice(16.15) }, // 75 mph, Cheap, $40,000
{ Model: "primo2", Name: "Primo Custom", Class: "SEDAN", "Price": calcPrice(25.57) }, // 75 mph, Medium, $172,500
{ Model: "primo", Name: "Primo", Class: "SEDAN", "Price": calcPrice(26.78) }, // 75 mph, Cheap, $50,000
{ Model: "intruder", Name: "Intruder", Class: "SEDAN", "Price": calcPrice(27.99) }, // 75 mph, Medium, $127,500
{ Model: "stratum", Name: "Stratum", Class: "SEDAN", "Price": calcPrice(17.10) }, // 75 mph, Medium, $105,000
{ Model: "cognoscenti", Name: "Cognoscenti", Class: "SEDAN", "Price": calcPrice(19.52) }, // 75 mph, Luxury, $352,500
{ Model: "surge", Name: "Surge", Class: "SEDAN", "Price": calcPrice(20.73) }, // 75 mph, Medium, $127,500
{ Model: "vorschlaghammer", Name: "Vorschlaghammer", Class: "SEDAN", "Price": calcPrice(36.46) }, // 75 mph, Luxury, $450,000
{ Model: "superd", Name: "Super Diamond", Class: "SEDAN", "Price": calcPrice(21.94) }, // 75 mph, Luxury, $450,000

{ Model: "fugitive", Name: "Fugitive", Class: "SEDAN", "Price": calcPrice(29.20) }, // 75 mph, Medium, $150,000
{ Model: "tailgater", Name: "Tailgater", Class: "SEDAN", "Price": calcPrice(30.41) }, // 75 mph, Medium, $150,000
{ Model: "schafter2", Name: "Schafter", Class: "SEDAN", "Price": calcPrice(31.62) }, // 75 mph, Medium, $150,000
{ Model: "stafford", Name: "Stafford", Class: "SEDAN", "Price": calcPrice(31.71) }, // 75 mph, Luxury, $307,500

{ Model: "asterope2", Name: "Asterope GZ", Class: "SEDAN", "Price": calcPrice(32.83) }, // 75 mph, Luxury, $450,000
{ Model: "cog55", Name: "Cognoscenti 55", Class: "SEDAN", "Price": calcPrice(34.04) }, // 75 mph, Luxury, $307,500
{ Model: "deity", Name: "Deity", Class: "SEDAN", "Price": calcPrice(35.25) }, // 75 mph, Luxury, $450,000
{ Model: "tailgater2", Name: "Tailgater S", Class: "SEDAN", "Price": calcPrice(37.67) }, // 75 mph, Luxury, $352,500
{ Model: "rhinehart", Name: "Rhinehart", Class: "SEDAN", "Price": calcPrice(38.88) }, // 75 mph, Medium, $195,000
{ Model: "cinquemila", Name: "Cinquemila", Class: "SEDAN", "Price": calcPrice(40.00) }, // 75 mph, Luxury, $405,000




    // SPORT (Mixed: Cheap 3.5-5, Medium 10-20, Luxury 30-50, Very Luxury 75-100)
    { Model: "blista2", Name: "Blista Compact", Class: "SPORT", "Price": calcPrice(4.50) }, // 71.46 mph, Cheap, $45,000

    { Model: "streiter", Name: "Streiter", Class: "SPORT", "Price": calcPrice(15.00) }, // 90 mph, Medium, $150,000
    { Model: "raptor", Name: "Raptor", Class: "SPORT", "Price": calcPrice(12.75) }, // 90 mph, Medium, $127,500
    { Model: "penumbra", Name: "Penumbra", Class: "SPORT", "Price": calcPrice(10.50) }, // 90 mph, Medium, $105,000
    { Model: "futo", Name: "Futo", Class: "SPORT", "Price": calcPrice(30.75) }, // 90 mph, Luxury, $307,500

    { Model: "futo2", Name: "Futo GTX", Class: "SPORT", "Price": calcPrice(30.75) }, // 90 mph, Luxury, $307,500
    { Model: "sugoi", Name: "Sugoi", Class: "SPORT", "Price": calcPrice(17.25) }, // 90 mph, Medium, $172,500

    { Model: "ruston", Name: "Ruston", Class: "SPORT", "Price": calcPrice(17.25) }, // 90 mph, Medium, $172,500
    { Model: "rapidgt", Name: "Rapid GT", Class: "SPORT", "Price": calcPrice(17.25) }, // 90 mph, Medium, $172,500
    { Model: "rapidgt2", Name: "Rapid GT", Class: "SPORT", "Price": calcPrice(19.50) }, // 90 mph, Medium, $195,000
    { Model: "khamelion", Name: "Khamelion", Class: "SPORT", "Price": calcPrice(15.00) }, // 90 mph, Medium, $150,000
    { Model: "fusilade", Name: "Fusilade", Class: "SPORT", "Price": calcPrice(15.00) }, // 90 mph, Medium, $150,000
    { Model: "furoregt", Name: "Furore GT", Class: "SPORT", "Price": calcPrice(19.50) }, // 90 mph, Medium, $195,000
    { Model: "tampa2", Name: "Drift Tampa", Class: "SPORT", "Price": calcPrice(35.25) }, // 90 mph, Luxury, $352,500
    { Model: "buffalo2", Name: "Buffalo S", Class: "SPORT", "Price": calcPrice(35.25) }, // 90 mph, Luxury, $352,500
    { Model: "buffalo", Name: "Buffalo", Class: "SPORT", "Price": calcPrice(5.00) }, // 90 mph, Cheap, $50,000

    { Model: "zr350", Name: "ZR350", Class: "SPORT", "Price": calcPrice(45.00) }, // 90 mph, Luxury, $450,000
    { Model: "buffalo3", Name: "Sprunk Buffalo", Class: "SPORT", "Price": calcPrice(35.25) }, // 90 mph, Luxury, $352,500
    { Model: "omnis", Name: "Omnis", Class: "SPORT", "Price": calcPrice(15.00) }, // 90 mph, Medium, $150,000
    { Model: "kuruma", Name: "Kuruma", Class: "SPORT", "Price": calcPrice(17.25) }, // 90 mph, Medium, $172,500
    { Model: "hotring", Name: "Hotring Sabre", Class: "SPORT", "Price": calcPrice(45.00) }, // 90 mph, Luxury, $450,000
    { Model: "gauntlet6", Name: "Hotring Hellfire", Class: "SPORT", "Price": calcPrice(45.00) }, // 90 mph, Luxury, $450,000
    { Model: "everon2", Name: "Hotring Everon", Class: "SPORT", "Price": calcPrice(40.50) }, // 90 mph, Luxury, $405,000
    { Model: "gb200", Name: "GB200", Class: "SPORT", "Price": calcPrice(12.75) }, // 90 mph, Medium, $127,500

    { Model: "tropes", Name: "Tropos Rallye", Class: "SPORT", "Price": calcPrice(15.00) }, // 90 mph, Medium, $150,000
    { Model: "remus", Name: "Remus", Class: "SPORT", "Price": calcPrice(15.00) }, // 90 mph, Medium, $150,000
    { Model: "rt3000", Name: "RT3000", Class: "SPORT", "Price": calcPrice(30.75) }, // 90 mph, Luxury, $307,500
    { Model: "panthere", Name: "Panthere", Class: "SPORT", "Price": calcPrice(30.75) }, // 90 mph, Luxury, $307,500
    { Model: "lynx", Name: "Lynx", Class: "SPORT", "Price": calcPrice(40.50) }, // 90 mph, Luxury, $405,000
    { Model: "jester3", Name: "Jester Classic", Class: "SPORT", "Price": calcPrice(30.75) }, // 90 mph, Luxury, $307,500
    { Model: "comet4", Name: "Comet Safari", Class: "SPORT", "Price": calcPrice(30.75) }, // 90 mph, Luxury, $307,500
    
    { Model: "sultan", Name: "Sultan", Class: "SPORT", "Price": calcPrice(12.75) }, // 90 mph, Medium, $127,500
    { Model: "s95", Name: "S95", Class: "SPORT", "Price": calcPrice(12.75) }, // 90 mph, Medium, $127,500
    { Model: "locust", Name: "Locust", Class: "SPORT", "Price": calcPrice(12.75) }, // 90 mph, Medium, $127,500
    { Model: "coquette", Name: "Coquette", Class: "SPORT", "Price": calcPrice(19.50) }, // 90 mph, Medium, $195,000
    { Model: "carbonizzare", Name: "Carbonizzare", Class: "SPORT", "Price": calcPrice(17.25) }, // 90 mph, Medium, $172,500
    { Model: "banshee", Name: "Banshee", Class: "SPORT", "Price": calcPrice(19.50) }, // 90 mph, Medium, $195,000
    { Model: "alpha", Name: "Alpha", Class: "SPORT", "Price": calcPrice(15.00) }, // 90 mph, Medium, $150,000

    { Model: "verlierer2", Name: "Verlierer", Class: "SPORT", "Price": calcPrice(17.25) }, // 90 mph, Medium, $172,500
    { Model: "surano", Name: "Surano", Class: "SPORT", "Price": calcPrice(19.50) }, // 90 mph, Medium, $195,000
    { Model: "sentinel3", Name: "Sentinel Classic ", Class: "SPORT", "Price": calcPrice(35.25) }, // 90 mph, Luxury, $352,500
    { Model: "sm722", Name: "SM722", Class: "SPORT", "Price": calcPrice(75.00) }, // 90 mph, Very Luxury, $750,000
    { Model: "omnisegt", Name: "Omnis e-GT", Class: "SPORT", "Price": calcPrice(85.50) }, // 90 mph, Very Luxury, $855,000
    { Model: "cypher", Name: "Cypher", Class: "SPORT", "Price": calcPrice(35.25) }, // 90 mph, Luxury, $352,500
    { Model: "comet6", Name: "Comet S2", Class: "SPORT", "Price": calcPrice(45.00) }, // 90 mph, Luxury, $450,000
    { Model: "comet3", Name: "Comet Retro Custom", Class: "SPORT", "Price": calcPrice(30.75) }, // 90 mph, Luxury, $307,500


    { Model: "vstr", Name: "V-STR", Class: "SPORT", "Price": calcPrice(30.75) }, // 90 mph, Luxury, $307,500
    { Model: "specter2", Name: "Specter Custom", Class: "SPORT", "Price": calcPrice(85.50) }, // 90 mph, Very Luxury, $855,000
    { Model: "specter", Name: "Specter", Class: "SPORT", "Price": calcPrice(30.75) }, // 90 mph, Luxury, $307,500
    { Model: "seven70", Name: "Seven-70", Class: "SPORT", "Price": calcPrice(45.00) }, // 90 mph, Luxury, $450,000
    { Model: "revolter", Name: "Revolter", Class: "SPORT", "Price": calcPrice(35.25) }, // 90 mph, Luxury, $352,500
    { Model: "raiden", Name: "Raiden", Class: "SPORT", "Price": calcPrice(35.25) }, // 90 mph, Luxury, $352,500
    { Model: "penumbra2", Name: "Penumbra FF", Class: "SPORT", "Price": calcPrice(30.75) }, // 90 mph, Luxury, $307,500
    { Model: "komoda", Name: "Komoda", Class: "SPORT", "Price": calcPrice(30.75) }, // 90 mph, Luxury, $307,500
    { Model: "jester4", Name: "Jester RR", Class: "SPORT", "Price": calcPrice(45.00) }, // 90 mph, Luxury, $450,000
    { Model: "flashgt", Name: "Flash GT", Class: "SPORT", "Price": calcPrice(10.50) }, // 90 mph, Medium, $105,000
    { Model: "euros", Name: "Euros", Class: "SPORT", "Price": calcPrice(15.00) }, // 90 mph, Medium, $150,000
    { Model: "comet7", Name: "Comet S2 Cabrio", Class: "SPORT", "Price": calcPrice(75.00) }, // 90 mph, Very Luxury, $750,000
    { Model: "comet2", Name: "Comet", Class: "SPORT", "Price": calcPrice(15.00) }, // 90 mph, Medium, $150,000
    { Model: "bestiagts", Name: "Bestia GTS", Class: "SPORT", "Price": calcPrice(30.75) }, // 90 mph, Luxury, $307,500
    { Model: "r300", Name: "300R", Class: "SPORT", "Price": calcPrice(35.25) }, // 90 mph, Luxury, $352,500
    

    { Model: "vectre", Name: "Vectre", Class: "SPORT", "Price": calcPrice(40.50) }, // 90 mph, Luxury, $405,000
    { Model: "sultan3", Name: "Sultan RS Classic", Class: "SPORT", "Price": calcPrice(45.00) }, // 90 mph, Luxury, $450,000
    { Model: "schlagen", Name: "Schlagen GT", Class: "SPORT", "Price": calcPrice(40.50) }, // 90 mph, Luxury, $405,000
    { Model: "neon", Name: "Neon", Class: "SPORT", "Price": calcPrice(30.75) }, // 90 mph, Luxury, $307,500
    { Model: "massacro2", Name: "Massacro (Racecar)", Class: "SPORT", "Price": calcPrice(45.00) }, // 90 mph, Luxury, $450,000
    { Model: "massacro", Name: "Massacro", Class: "SPORT", "Price": calcPrice(19.50) }, // 90 mph, Medium, $195,000
    { Model: "jester", Name: "Jester", Class: "SPORT", "Price": calcPrice(19.50) }, // 90 mph, Medium, $195,000
    { Model: "growler", Name: "Growler", Class: "SPORT", "Price": calcPrice(35.25) }, // 90 mph, Luxury, $352,500
    { Model: "feltzer2", Name: "Feltzer", Class: "SPORT", "Price": calcPrice(12.75) }, // 90 mph, Medium, $127,500
    { Model: "elegy", Name: "Elegy Retro Custom", Class: "SPORT", "Price": calcPrice(45.00) }, // 90 mph, Luxury, $450,000
    { Model: "coquette4", Name: "Coquette D10", Class: "SPORT", "Price": calcPrice(85.50) }, // 90 mph, Very Luxury, $855,000
    { Model: "calico", Name: "Calico GTF", Class: "SPORT", "Price": calcPrice(40.50) }, // 90 mph, Luxury, $405,000
    { Model: "ninef2", Name: "9F Cabrio", Class: "SPORT", "Price": calcPrice(75.00) }, // 90 mph, Very Luxury, $750,000
    { Model: "ninef", Name: "9F", Class: "SPORT", "Price": calcPrice(40.50) }, // 90 mph, Luxury, $405,000
    { Model: "drafter", Name: "8F Drafter", Class: "SPORT", "Price": calcPrice(30.75) }, // 90 mph, Luxury, $307,500
    { Model: "tenf", Name: "10F", Class: "SPORT", "Price": calcPrice(75.00) }, // 90 mph, Very Luxury, $750,000

    { Model: "sultan2", Name: "Sultan Classic", Class: "SPORT", "Price": calcPrice(30.75) }, // 90 mph, Luxury, $307,500
    { Model: "jester5", Name: "Jester RR WideBody", Class: "SPORT", "Price": calcPrice(45.00) }, // 90 mph, Luxury, $450,000
    { Model: "jester2", Name: "Jester (Racecar)", Class: "SPORT", "Price": calcPrice(45.00) }, // 90 mph, Luxury, $450,000
    { Model: "stingertt", Name: "Itali GTO Stinger TT", Class: "SPORT", "Price": calcPrice(95.25) }, // 90 mph, Very Luxury, $952,500
    { Model: "elegy2", Name: "Elegy RH8", Class: "SPORT", "Price": calcPrice(17.25) }, // 90 mph, Medium, $172,500
    { Model: "tenf2", Name: "10F Widebody", Class: "SPORT", "Price": calcPrice(75.00) }, // 90 mph, Very Luxury, $750,000

    { Model: "paragon", Name: "Paragon R", Class: "SPORT", "Price": calcPrice(45.00) }, // 90 mph, Luxury, $450,000
    { Model: "neo", Name: "Neo", Class: "SPORT", "Price": calcPrice(35.25) }, // 90 mph, Luxury, $352,500
    { Model: "jugular", Name: "Jugular", Class: "SPORT", "Price": calcPrice(35.25) }, // 90 mph, Luxury, $352,500
    { Model: "issi7", Name: "Issi Sport", Class: "SPORT", "Price": calcPrice(10.50) }, // 90 mph, Medium, $105,000
    { Model: "imorgon", Name: "Imorgon", Class: "SPORT", "Price": calcPrice(17.25) }, // 90 mph, Medium, $172,500
    { Model: "corsita", Name: "Corsita", Class: "SPORT", "Price": calcPrice(40.50) }, // 90 mph, Luxury, $405,000
    { Model: "comet5", Name: "Comet SR", Class: "SPORT", "Price": calcPrice(40.50) }, // 90 mph, Luxury, $405,000

    { Model: "pariah", Name: "Pariah", Class: "SPORT", "Price": calcPrice(75.00) }, // 90 mph, Very Luxury, $750,000
    { Model: "paragon3", Name: "Paragon S", Class: "SPORT", "Price": calcPrice(75.00) }, // 90 mph, Very Luxury, $750,000
    { Model: "coureur", Name: "La Coureuse", Class: "SPORT", "Price": calcPrice(10.50) }, // 90 mph, Medium, $105,000
    { Model: "italirsx", Name: "Itali RSX", Class: "SPORT", "Price": calcPrice(85.50) }, // 90 mph, Very Luxury, $855,000
    { Model: "envisage", Name: "Envisage", Class: "SPORT", "Price": calcPrice(85.50) }, // 90 mph, Very Luxury, $855,000
    { Model: "banshee3", Name: "Banshee GTS", Class: "SPORT", "Price": calcPrice(85.50) }, // 90 mph, Very Luxury, $855,000

    { Model: "niobe", Name: "Niobe", Class: "SPORT", "Price": calcPrice(85.50) }, // 90 mph, Very Luxury, $855,000
    { Model: "italigto", Name: "Itali GTO", Class: "SPORT", "Price": calcPrice(75.00) }, // 90 mph, Very Luxury, $750,000






    // SPORT_CLASSIC (Mixed: Cheap 3.5-5, Medium 10-20, Luxury 30-50, Very Luxury 75-100)

    { Model: "tornado", Name: "Tornado", Class: "SPORT_CLASSIC", "Price": calcPrice(5.00) }, // 70 mph, Cheap, $50,000

    { Model: "tornado5", Name: "Tornado Custom", Class: "SPORT_CLASSIC", "Price": calcPrice(30.75) }, // 70 mph, Luxury, $307,500
    { Model: "peyote", Name: "Peyote", Class: "SPORT_CLASSIC", "Price": calcPrice(4.00) }, // 65 mph, Cheap, $40,000
    { Model: "dynasty", Name: "Dynasty", Class: "SPORT_CLASSIC", "Price": calcPrice(10.50) }, // 70 mph, Medium, $105,000

    { Model: "manana", Name: "Manana", Class: "SPORT_CLASSIC", "Price": calcPrice(3.50) }, // 65 mph, Cheap, $35,000

    { Model: "tornado6", Name: "Tornado Rat Rod", Class: "SPORT_CLASSIC", "Price": calcPrice(19.50) }, // 70 mph, Medium, $195,000
    { Model: "fagaloa", Name: "Fagaloa", Class: "SPORT_CLASSIC", "Price": calcPrice(5.00) }, // 75 mph, Cheap, $50,000
    
    { Model: "btype", Name: "Roosevelt", Class: "SPORT_CLASSIC", "Price": calcPrice(75.00) }, // 70 mph, Very Luxury, $750,000
    { Model: "nebula", Name: "Nebula Turbo", Class: "SPORT_CLASSIC", "Price": calcPrice(17.25) }, // 85 mph, Medium, $172,500
    { Model: "btype2", Name: "Fränken Stange", Class: "SPORT_CLASSIC", "Price": calcPrice(85.50) }, // 70 mph, Very Luxury, $855,000
    
    { Model: "btype3", Name: "Roosevelt Valor", Class: "SPORT_CLASSIC", "Price": calcPrice(95.25) }, // 70 mph, Very Luxury, $952,500
    { Model: "peyote3", Name: "Peyote Custom", Class: "SPORT_CLASSIC", "Price": calcPrice(30.75) }, // 65 mph, Luxury, $307,500

    { Model: "feltzer3", Name: "Feltzer Classic", Class: "SPORT_CLASSIC", "Price": calcPrice(30.75) }, // 85 mph, Luxury, $307,500
    { Model: "stinger", Name: "Stinger", Class: "SPORT_CLASSIC", "Price": calcPrice(35.25) }, // 85 mph, Luxury, $352,500
    { Model: "michelli", Name: "Michelli GT", Class: "SPORT_CLASSIC", "Price": calcPrice(15.00) }, // 85 mph, Medium, $150,000
    { Model: "gt500", Name: "GT500", Class: "SPORT_CLASSIC", "Price": calcPrice(40.50) }, // 88 mph, Luxury, $405,000
    { Model: "cheburek", Name: "Cheburek", Class: "SPORT_CLASSIC", "Price": calcPrice(4.50) }, // 65 mph, Cheap, $45,000

    { Model: "mamba", Name: "Mamba", Class: "SPORT_CLASSIC", "Price": calcPrice(19.50) }, // 85 mph, Medium, $195,000

    { Model: "monroe", Name: "Monroe", Class: "SPORT_CLASSIC", "Price": calcPrice(35.25) }, // 85 mph, Luxury, $352,500
    { Model: "coquette2", Name: "Coquette Classic", Class: "SPORT_CLASSIC", "Price": calcPrice(35.25) }, // 85 mph, Luxury, $352,500

    { Model: "casco", Name: "Casco", Class: "SPORT_CLASSIC", "Price": calcPrice(30.75) }, // 85 mph, Luxury, $307,500
    { Model: "z190", Name: "190z", Class: "SPORT_CLASSIC", "Price": calcPrice(35.25) }, // 85 mph, Luxury, $352,500

    { Model: "ztype", Name: "Z-Type", Class: "SPORT_CLASSIC", "Price": calcPrice(85.50) }, // 85 mph, Very Luxury, $855,000
    { Model: "pigalle", Name: "Pigalle", Class: "SPORT_CLASSIC", "Price": calcPrice(12.75) }, // 75 mph, Medium, $127,500

    { Model: "zion3", Name: "Zion Classic", Class: "SPORT_CLASSIC", "Price": calcPrice(30.75) }, // 85 mph, Luxury, $307,500
    { Model: "savestra", Name: "Savestra", Class: "SPORT_CLASSIC", "Price": calcPrice(17.25) }, // 75 mph, Medium, $172,500
    { Model: "retinue", Name: "Retinue", Class: "SPORT_CLASSIC", "Price": calcPrice(15.00) }, // 75 mph, Medium, $150,000

    { Model: "viseris", Name: "Viseris", Class: "SPORT_CLASSIC", "Price": calcPrice(17.25) }, // 85 mph, Medium, $172,500
    { Model: "swinger", Name: "Swinger", Class: "SPORT_CLASSIC", "Price": calcPrice(40.50) }, // 85 mph, Luxury, $405,000
    { Model: "infernus2", Name: "Infernus Classic", Class: "SPORT_CLASSIC", "Price": calcPrice(45.00) }, // 90 mph, Luxury, $450,000

    { Model: "torero", Name: "Torero", Class: "SPORT_CLASSIC", "Price": calcPrice(45.00) }, // 85 mph, Luxury, $450,000
    { Model: "retinue2", Name: "Retinue Mk II", Class: "SPORT_CLASSIC", "Price": calcPrice(30.75) }, // 75 mph, Luxury, $307,500
    { Model: "rapidgt3", Name: "Rapid GT Classic", Class: "SPORT_CLASSIC", "Price": calcPrice(40.50) }, // 85 mph, Luxury, $405,000

    { Model: "turismo2", Name: "Turismo Classic", Class: "SPORT_CLASSIC", "Price": calcPrice(75.00) }, // 90 mph, Very Luxury, $750,000
    { Model: "cheetah2", Name: "Cheetah Classic", Class: "SPORT_CLASSIC", "Price": calcPrice(45.00) }, // 90 mph, Luxury, $450,000
    { Model: "ardent", Name: "Ardent", Class: "SPORT_CLASSIC", "Price": calcPrice(45.00) }, // 90 mph, Luxury, $450,000


    // SUPER (Luxury 30-50, Very Luxury 75-100)
    { Model: "bullet", Name: "Bullet", Class: "SUPER", "Price": calcPrice(40.50) }, // 118.8 mph, Luxury, $405,000

    { Model: "voltic", Name: "Voltic", Class: "SUPER", "Price": calcPrice(40.50) }, // 118.8 mph, Luxury, $405,000
    { Model: "taipan", Name: "Taipan", Class: "SUPER", "Price": calcPrice(75.00) }, // 123.8 mph, Very Luxury, $750,000

    { Model: "vacca", Name: "Vacca", Class: "SUPER", "Price": calcPrice(40.50) }, // 120.8 mph, Luxury, $405,000
    { Model: "sultanrs", Name: "Sultan RS", Class: "SUPER", "Price": calcPrice(45.00) }, // 117.8 mph, Luxury, $450,000
    { Model: "entity2", Name: "Entity XXR", Class: "SUPER", "Price": calcPrice(75.00) }, // 126.3 mph, Very Luxury, $750,000
    { Model: "champion", Name: "Champion", Class: "SUPER", "Price": calcPrice(85.50) }, // 124.3 mph, Very Luxury, $855,000
    { Model: "banshee2", Name: "Banshee 900R", Class: "SUPER", "Price": calcPrice(75.00) }, // 131 mph, Very Luxury, $750,000
    { Model: "adder", Name: "Adder", Class: "SUPER", "Price": calcPrice(85.50) }, // 124.3 mph, Very Luxury, $855,000

    { Model: "sc1", Name: "SC1", Class: "SUPER", "Price": calcPrice(40.50) }, // 120.8 mph, Luxury, $405,000
    { Model: "gp1", Name: "GP1", Class: "SUPER", "Price": calcPrice(40.50) }, // 123.8 mph, Luxury, $405,000
    { Model: "entity3", Name: "Entity MT", Class: "SUPER", "Price": calcPrice(85.50) }, // 126.3 mph, Very Luxury, $855,000
    { Model: "pfister811", Name: "811", Class: "SUPER", "Price": calcPrice(75.00) }, // 132.5 mph, Very Luxury, $750,000
    
    { Model: "reaper", Name: "Reaper", Class: "SUPER", "Price": calcPrice(75.00) }, // 121.8 mph, Very Luxury, $750,000
    { Model: "penetrator", Name: "Penetrator", Class: "SUPER", "Price": calcPrice(40.50) }, // 124.3 mph, Luxury, $405,000
    { Model: "italigtb2", Name: "Itali GTB Custom", Class: "SUPER", "Price": calcPrice(85.50) }, // 126.3 mph, Very Luxury, $855,000
    { Model: "infernus", Name: "Infernus", Class: "SUPER", "Price": calcPrice(45.00) }, // 117.8 mph, Luxury, $450,000
    { Model: "cheetah", Name: "Cheetah", Class: "SUPER", "Price": calcPrice(45.00) }, // 120.1 mph, Luxury, $450,000

    { Model: "zeno", Name: "Zeno", Class: "SUPER", "Price": calcPrice(85.50) }, // 124.3 mph, Very Luxury, $855,000
    { Model: "turismor", Name: "Turismo R", Class: "SUPER", "Price": calcPrice(45.00) }, // 121.8 mph, Luxury, $450,000
    { Model: "nero", Name: "Nero", Class: "SUPER", "Price": calcPrice(75.00) }, // 126.3 mph, Very Luxury, $750,000
    { Model: "italigtb", Name: "Itali GTB", Class: "SUPER", "Price": calcPrice(75.00) }, // 126.3 mph, Very Luxury, $750,000
    { Model: "fmj", Name: "FMJ", Class: "SUPER", "Price": calcPrice(75.00) }, // 125.5 mph, Very Luxury, $750,000
    { Model: "entityxf", Name: "Entity XF", Class: "SUPER", "Price": calcPrice(45.00) }, // 121.8 mph, Luxury, $450,000
    { Model: "cyclone", Name: "Cyclone", Class: "SUPER", "Price": calcPrice(75.00) }, // 121.8 mph, Very Luxury, $750,000
    
    { Model: "zorrusso", Name: "Zorrusso", Class: "SUPER", "Price": calcPrice(75.00) }, // 124.3 mph, Very Luxury, $750,000
    { Model: "zentorno", Name: "Zentorno", Class: "SUPER", "Price": calcPrice(45.00) }, // 122.3 mph, Luxury, $450,000
    { Model: "prototipo", Name: "X80 Proto", Class: "SUPER", "Price": calcPrice(95.25) }, // 127.3 mph, Very Luxury, $952,500
    { Model: "tyrus", Name: "Tyrus", Class: "SUPER", "Price": calcPrice(85.50) }, // 123.3 mph, Very Luxury, $855,000
    { Model: "tyrant", Name: "Tyrant", Class: "SUPER", "Price": calcPrice(75.00) }, // 123.8 mph, Very Luxury, $750,000
    { Model: "tezeract", Name: "Tezeract", Class: "SUPER", "Price": calcPrice(95.25) }, // 125.5 mph, Very Luxury, $952,500
    { Model: "t20", Name: "T20", Class: "SUPER", "Price": calcPrice(85.50) }, // 122.3 mph, Very Luxury, $855,000
    { Model: "osiris", Name: "Osiris", Class: "SUPER", "Price": calcPrice(45.00) }, // 122.3 mph, Luxury, $450,000
    { Model: "nero2", Name: "Nero Custom", Class: "SUPER", "Price": calcPrice(85.50) }, // 126.3 mph, Very Luxury, $855,000
    { Model: "furia", Name: "Furia", Class: "SUPER", "Price": calcPrice(85.50) }, // 122.3 mph, Very Luxury, $855,000

    { Model: "visione", Name: "Visione", Class: "SUPER", "Price": calcPrice(85.50) }, // 125.3 mph, Very Luxury, $855,000
    { Model: "tempesta", Name: "Tempesta", Class: "SUPER", "Price": calcPrice(40.50) }, // 121.3 mph, Luxury, $405,000
    { Model: "sheava", Name: "ETR1", Class: "SUPER", "Price": calcPrice(75.00) }, // 122.3 mph, Very Luxury, $750,000
    { Model: "deveste", Name: "Deveste Eight", Class: "SUPER", "Price": calcPrice(95.25) }, // 131.8 mph, Very Luxury, $952,500

    { Model: "xa21", Name: "XA-21", Class: "SUPER", "Price": calcPrice(75.00) }, // 122.8 mph, Very Luxury, $750,000
    { Model: "torero2", Name: "Torero XO", Class: "SUPER", "Price": calcPrice(85.50) }, // 126.3 mph, Very Luxury, $855,000
    { Model: "tigon", Name: "Tigon", Class: "SUPER", "Price": calcPrice(75.00) }, // 122.8 mph, Very Luxury, $750,000
    { Model: "cyclone2", Name: "cyclone II", Class: "SUPER", "Price": calcPrice(75.00) }, // 122.8 mph, Very Luxury, $750,000
    { Model: "autarch", Name: "Autarch", Class: "SUPER", "Price": calcPrice(95.25) }, // 125.5 mph, Very Luxury, $952,500
    
    { Model: "virtue", Name: "Virtue", Class: "SUPER", "Price": calcPrice(75.00) }, // 121.8 mph, Very Luxury, $750,000
    { Model: "vagner", Name: "Vagner", Class: "SUPER", "Price": calcPrice(95.25) }, // 126.8 mph, Very Luxury, $952,500
    { Model: "thrax", Name: "Thrax", Class: "SUPER", "Price": calcPrice(85.50) }, // 124.3 mph, Very Luxury, $855,000
    { Model: "s80", Name: "S80RR", Class: "SUPER", "Price": calcPrice(85.50) }, // 123.8 mph, Very Luxury, $855,000
    { Model: "le7b", Name: "RE-7B", Class: "SUPER", "Price": calcPrice(85.50) }, // 123.8 mph, Very Luxury, $855,000
    { Model: "pipistrello", Name: "Pipistrello", Class: "SUPER", "Price": calcPrice(85.50) }, // 123.8 mph, Very Luxury, $855,000
    { Model: "lm87", Name: "LM87", Class: "SUPER", "Price": calcPrice(85.50) }, // 126.3 mph, Very Luxury, $855,000
    { Model: "ignus", Name: "Ignus", Class: "SUPER", "Price": calcPrice(95.25) }, // 124.8 mph, Very Luxury, $952,500

    { Model: "turismo3", Name: "Turismo Omaggio", Class: "SUPER", "Price": calcPrice(85.50) }, // 127.3 mph, Very Luxury, $855,000
    { Model: "emerus", Name: "Emerus", Class: "SUPER", "Price": calcPrice(85.50) }, // 127.3 mph, Very Luxury, $855,000
    { Model: "krieger", Name: "Krieger", Class: "SUPER", "Price": calcPrice(95.25) }, // 127.8 mph, Very Luxury, $952,500






    // SUV (Non-Luxury: Cheap 3.5-5, Medium 10-20, Luxury 30-50)
    { Model: "seminole", Name: "Seminole", Class: "SUV", "Price": calcPrice(5.00) }, // 85 mph, Cheap, $50,000
    { Model: "mesa", Name: "Mesa", Class: "SUV", "Price": calcPrice(5.00) }, // 85 mph, Cheap, $50,000

    { Model: "cavalcade", Name: "Cavalcade", Class: "SUV", "Price": calcPrice(5.00) }, // 85 mph, Cheap, $50,000
    { Model: "cavalcade2", Name: "Cavalcade", Class: "SUV", "Price": calcPrice(15.00) }, // 85 mph, Medium, $150,000
    { Model: "bjxl", Name: "BeeJay XL", Class: "SUV", "Price": calcPrice(4.50) }, // 85 mph, Cheap, $45,000
    { Model: "baller", Name: "Baller", Class: "SUV", "Price": calcPrice(10.50) }, // 85 mph, Medium, $105,000

    { Model: "landstalker", Name: "Landstalker", Class: "SUV", "Price": calcPrice(4.50) }, // 85 mph, Cheap, $45,000
    { Model: "habanero", Name: "Habanero", Class: "SUV", "Price": calcPrice(3.50) }, // 85 mph, Cheap, $35,000
    { Model: "gresley", Name: "Gresley", Class: "SUV", "Price": calcPrice(10.50) }, // 85 mph, Medium, $105,000
    { Model: "fq2", Name: "FQ 2", Class: "SUV", "Price": calcPrice(4.00) }, // 85 mph, Cheap, $40,000

    { Model: "seminole2", Name: "Seminole Frontier", Class: "SUV", "Price": calcPrice(15.00) }, // 85 mph, Medium, $150,000
    { Model: "landstalker2", Name: "Landstalker XL", Class: "SUV", "Price": calcPrice(17.25) }, // 85 mph, Medium, $172,500
    { Model: "dubsta2", Name: "Dubsta", Class: "SUV", "Price": calcPrice(12.75) }, // 85 mph, Medium, $127,500

    { Model: "serrano", Name: "Serrano", Class: "SUV", "Price": calcPrice(10.50) }, // 85 mph, Medium, $105,000
    { Model: "granger", Name: "Granger", Class: "SUV", "Price": calcPrice(15.00) }, // 85 mph, Medium, $150,000
    { Model: "dubsta", Name: "Dubsta", Class: "SUV", "Price": calcPrice(10.50) }, // 85 mph, Medium, $105,000

    { Model: "xls", Name: "XLS", Class: "SUV", "Price": calcPrice(30.75) }, // 85 mph, Luxury, $307,500
    { Model: "rocoto", Name: "Rocoto", Class: "SUV", "Price": calcPrice(12.75) }, // 85 mph, Medium, $127,500
    { Model: "radi", Name: "Radius", Class: "SUV", "Price": calcPrice(4.00) }, // 85 mph, Cheap, $40,000

    { Model: "granger2", Name: "Granger 3600LX", Class: "SUV", "Price": calcPrice(30.75) }, // 85 mph, Luxury, $307,500
    { Model: "baller4", Name: "Baller LE LWB", Class: "SUV", "Price": calcPrice(35.25) }, // 85 mph, Luxury, $352,500
    { Model: "baller2", Name: "Baller", Class: "SUV", "Price": calcPrice(12.75) }, // 85 mph, Medium, $127,500

    { Model: "patriot", Name: "Patriot", Class: "SUV", "Price": calcPrice(10.50) }, // 85 mph, Medium, $105,000

    { Model: "huntley", Name: "Huntley S", Class: "SUV", "Price": calcPrice(12.75) }, // 85 mph, Medium, $127,500
    { Model: "baller3", Name: "Baller LE", Class: "SUV", "Price": calcPrice(30.75) }, // 85 mph, Luxury, $307,500
    { Model: "aleutian", Name: "Aleutian", Class: "SUV", "Price": calcPrice(30.75) }, // 85 mph, Luxury, $307,500

    { Model: "dorado", Name: "Dorado", Class: "SUV", "Price": calcPrice(30.75) }, // 85 mph, Luxury, $307,500

    { Model: "issi8", Name: "Issi Rally", Class: "SUV", "Price": calcPrice(35.25) }, // 85 mph, Luxury, $352,500
    { Model: "iwagen", Name: "I-Wagen", Class: "SUV", "Price": calcPrice(15.00) }, // 85 mph, Medium, $150,000
    { Model: "contender", Name: "Contender", Class: "SUV", "Price": calcPrice(17.25) }, // 85 mph, Medium, $172,500
    { Model: "cavalcade3", Name: "Cavalcade XL", Class: "SUV", "Price": calcPrice(17.25) }, // 85 mph, Medium, $172,500

    { Model: "vivanite", Name: "Vivanite", Class: "SUV", "Price": calcPrice(17.25) }, // 85 mph, Medium, $172,500
    { Model: "jubilee", Name: "Jubilee", Class: "SUV", "Price": calcPrice(40.50) }, // 85 mph, Luxury, $405,000
    { Model: "baller7", Name: "Baller ST", Class: "SUV", "Price": calcPrice(40.50) }, // 85 mph, Luxury, $405,000

    { Model: "rebla", Name: "Rebla GTS", Class: "SUV", "Price": calcPrice(30.75) }, // 85 mph, Luxury, $307,500
    { Model: "novak", Name: "Novak", Class: "SUV", "Price": calcPrice(19.50) }, // 85 mph, Medium, $195,000
    { Model: "astron2", Name: "Astron Custom", Class: "SUV", "Price": calcPrice(35.25) }, // 85 mph, Luxury, $352,500
    { Model: "astron", Name: "Astron", Class: "SUV", "Price": calcPrice(35.25) }, // 85 mph, Luxury, $352,500


    { Model: "toros", Name: "Toros", Class: "SUV", "Price": calcPrice(35.25) }, // 85 mph, Luxury, $352,500
    { Model: "castigator", Name: "Castigator", Class: "SUV", "Price": calcPrice(35.25) }, // 85 mph, Luxury, $352,500
    { Model: "baller8", Name: "Baller ST-D", Class: "SUV", "Price": calcPrice(35.25) }, // 85 mph, Luxury, $352,500

    
    // VAN (Non-Luxury: Cheap 3.5-5, Medium 10-20)
    { Model: "surfer", Name: "Surfer", Class: "VAN", "Price": calcPrice(3.75) }, // 65 mph, Cheap, $37,500
    { Model: "surfer2", Name: "Surfer Custom", Class: "VAN", "Price": calcPrice(10.50) }, // 65 mph, Medium, $105,000

    { Model: "camper", Name: "Camper", Class: "VAN", "Price": calcPrice(15.00) }, // 65 mph, Medium, $150,000

    { Model: "youga4", Name: "Youga Custom", Class: "VAN", "Price": calcPrice(19.50) }, // 75 mph, Medium, $195,000
    { Model: "youga2", Name: "Youga Classic", Class: "VAN", "Price": calcPrice(12.75) }, // 75 mph, Medium, $127,500

    { Model: "burrito3", Name: "Burrito", Class: "VAN", "Price": calcPrice(4.00) }, // 75 mph, Cheap, $40,000
    { Model: "bobcatxl", Name: "Bobcat XL", Class: "VAN", "Price": calcPrice(12.75) }, // 85 mph, Medium, $127,500
    { Model: "youga", Name: "Youga", Class: "VAN", "Price": calcPrice(4.00) }, // 75 mph, Cheap, $40,000
    { Model: "rumpo", Name: "Rumpo", Class: "VAN", "Price": calcPrice(4.50) }, // 75 mph, Cheap, $45,000
    { Model: "paradise", Name: "Paradise", Class: "VAN", "Price": calcPrice(12.75) }, // 75 mph, Medium, $127,500
    { Model: "minivan", Name: "Minivan", Class: "VAN", "Price": calcPrice(3.50) }, // 75 mph, Cheap, $35,000

    { Model: "speedo", Name: "Speedo", Class: "VAN", "Price": calcPrice(5.00) }, // 75 mph, Cheap, $50,000

    { Model: "youga3", Name: "Youga Classic 4x4", Class: "VAN", "Price": calcPrice(15.00) }, // 75 mph, Medium, $150,000
    { Model: "speedo4", Name: "Speedo Custom", Class: "VAN", "Price": calcPrice(17.25) }, // 75 mph, Medium, $172,500
    { Model: "minivan2", Name: "Minivan Custom", Class: "VAN", "Price": calcPrice(10.50) }, // 75 mph, Medium, $105,000
    { Model: "rumpo3", Name: "Rumpo Custom", Class: "VAN", "Price": calcPrice(15.00) }, // 75 mph, Medium, $150,000

    { Model: "bison", Name: "Bison", Class: "VAN", "Price": calcPrice(10.50) }, // 85 mph, Medium, $105,000
    { Model: "gburrito2", Name: "Gang Burrito", Class: "VAN", "Price": calcPrice(17.25) }, // 75 mph, Medium, $172,500

]






// const fff = [
//     { Model: "bfinjection", Name: "Injection", Class: "OFF_ROAD", "Price": calcPrice(4.00) }, // 85 mph, Cheap, $40,000
//     { Model: "bifta", Name: "Bifta", Class: "OFF_ROAD", "Price": calcPrice(5.00) }, // 85 mph, Cheap, $50,000
//     { Model: "bodhi2", Name: "Bodhi", Class: "OFF_ROAD", "Price": calcPrice(10.50) }, // 85 mph, Medium, $105,000
//     { Model: "boor", Name: "Boor", Class: "OFF_ROAD", "Price": calcPrice(15.00) }, // 85 mph, Medium, $150,000
//     { Model: "brawler", Name: "Brawler", Class: "OFF_ROAD", "Price": calcPrice(12.75) }, // 85 mph, Medium, $127,500
//     { Model: "caracara2", Name: "Caracara 4x4", Class: "OFF_ROAD", "Price": calcPrice(30.75) }, // 85 mph, Luxury, $307,500
//     { Model: "draugur", Name: "Draugur", Class: "OFF_ROAD", "Price": calcPrice(17.25) }, // 85 mph, Medium, $172,500
//     { Model: "dubsta3", Name: "Dubsta 6x6", Class: "OFF_ROAD", "Price": calcPrice(35.25) }, // 85 mph, Luxury, $352,500
//     { Model: "everon", Name: "Everon", Class: "OFF_ROAD", "Price": calcPrice(19.50) }, // 85 mph, Medium, $195,000
//     { Model: "hellion", Name: "Hellion", Class: "OFF_ROAD", "Price": calcPrice(10.50) }, // 85 mph, Medium, $105,000
//     { Model: "kalahari", Name: "Kalahari", Class: "OFF_ROAD", "Price": calcPrice(3.50) }, // 85 mph, Cheap, $35,000
//     { Model: "kamacho", Name: "Kamacho", Class: "OFF_ROAD", "Price": calcPrice(30.75) }, // 85 mph, Luxury, $307,500
//     { Model: "l35", Name: "Walton L35", Class: "OFF_ROAD", "Price": calcPrice(15.00) }, // 85 mph, Medium, $150,000
//     { Model: "monstrociti", Name: "MonstroCiti", Class: "OFF_ROAD", "Price": calcPrice(40.50) }, // 85 mph, Luxury, $405,000
//     { Model: "outlaw", Name: "Outlaw", Class: "OFF_ROAD", "Price": calcPrice(17.25) }, // 85 mph, Medium, $172,500
//     { Model: "rancherxl", Name: "Rancher XL", Class: "OFF_ROAD", "Price": calcPrice(4.50) }, // 85 mph, Cheap, $45,000
//     { Model: "ratel", Name: "Ratel", Class: "OFF_ROAD", "Price": calcPrice(19.50) }, // 85 mph, Medium, $195,000
//     { Model: "rebel2", Name: "Rebel", Class: "OFF_ROAD", "Price": calcPrice(12.75) }, // 85 mph, Medium, $127,500
//     { Model: "riata", Name: "Riata", Class: "OFF_ROAD", "Price": calcPrice(15.00) }, // 85 mph, Medium, $150,000
//     { Model: "sandking", Name: "Sandking XL", Class: "OFF_ROAD", "Price": calcPrice(35.25) }, // 85 mph, Luxury, $352,500
//     { Model: "sandking2", Name: "Sandking SWB", Class: "OFF_ROAD", "Price": calcPrice(30.75) }, // 85 mph, Luxury, $307,500
//     { Model: "trophytruck", Name: "Trophy Truck", Class: "OFF_ROAD", "Price": calcPrice(45.00) }, // 85 mph, Luxury, $450,000
//     { Model: "trophytruck2", Name: "Desert Raid", Class: "OFF_ROAD", "Price": calcPrice(40.50) }, // 85 mph, Luxury, $405,000
//     { Model: "vagrant", Name: "Vagrant", Class: "OFF_ROAD", "Price": calcPrice(17.25) }, // 85 mph, Medium, $172,500
//     { Model: "verus", Name: "Verus", Class: "OFF_ROAD", "Price": calcPrice(10.50) }, // 85 mph, Medium, $105,000
//     { Model: "winky", Name: "Winky", Class: "OFF_ROAD", "Price": calcPrice(4.00) }, // 85 mph, Cheap, $40,000
//     { Model: "yosemite3", Name: "Yosemite Rancher", Class: "OFF_ROAD", "Price": calcPrice(30.75) }, // 85 mph, Luxury, $307,500
// ]

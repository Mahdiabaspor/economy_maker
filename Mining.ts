// تنظیمات زون‌ها و پیک‌اکس‌ها
const incomeMulti = 1.8
const costMulti = 1
const singleHitTime = 4
const pickaxeTotalHits = 100
const kitLifePerPickaxe = 2


const MiningShopSell = [
    {
        itemName: 'item_ore_stone',
        label: 'Stone',
        singlePrice:  (8 * incomeMulti).toFixed(0),
    },
    {
        itemName: 'item_ore_sulfur',
        label: 'Sulfur',
        singlePrice:  (11 * incomeMulti).toFixed(0),
    },
    {
        itemName: 'item_ore_coal',
        label: 'Coal',
        singlePrice: (12 * incomeMulti).toFixed(0),
    },
    {
        itemName: 'item_ore_iron',
        label: 'Iron Ore',
        singlePrice: (12 * incomeMulti).toFixed(0),
    },
    {
        itemName: 'item_ore_gold',
        label: 'Gold Ore',
        singlePrice: (17 * incomeMulti).toFixed(0),
    },
    {
        itemName: 'item_bar_iron',
        label: 'Iron Bar',
        singlePrice: (700 * incomeMulti).toFixed(0),
    },
    {
        itemName: 'item_bar_gold',
        label: 'Gold Bar',
        singlePrice: (1000 * incomeMulti).toFixed(0),
    },
    {
        itemName: 'item_bar_gildiron',
        label: 'Gilded Iron Bar',
        singlePrice: (2500 * incomeMulti).toFixed(0),
    },
    {
        itemName: 'item_bar_auriron',
        label: 'Auriron Iron Bar',
        singlePrice: (3500 * incomeMulti).toFixed(0),
    },
    {
        itemName: 'item_gem_Amberite',
        label: 'Amberite gem',
        singlePrice: (10000 * incomeMulti).toFixed(0),
    },
    {
        itemName: 'item_gem_aqualith',
        label: 'qualith gem',
        singlePrice: (10000 * incomeMulti).toFixed(0),
    },
    {
        itemName: 'item_gem_luminite',
        label: 'luminite gem',
        singlePrice: (10000 * incomeMulti).toFixed(0),
    },
]
const zones = {
    zone1: {
        resources: [
			{ name: 'item_ore_stone', chance: 100, label: 'stone' },
        ],
        miningTime: pickaxeTotalHits * singleHitTime,  // Mining time in seconds
        travelTime: 270   // Travel time in seconds
    },
    zone2: {
        resources: [
			{ name: 'item_ore_iron', chance: 20, label: 'iron ore' },
            { name: 'item_ore_stone', chance: 20, label: 'stone' },
			{ name: 'item_ore_coal', chance: 39.994, label: 'coal ore' },
			{ name: 'item_ore_sulfur', chance: 20, label: 'sulfur' },
			{ name: 'item_gem_Amberite', chance: 0.006, label: 'amberite gem' }
        ],
        miningTime: pickaxeTotalHits * singleHitTime,
        travelTime: 434,
        kit: "kit_antiSharp"
    },
    zone3: {
        resources: [
            { name: 'item_ore_stone', chance: 50, label: 'stone' },
			{ name: 'item_ore_iron', chance: 40, label: 'iron ore' },
			{ name: 'item_ore_gold', chance: 9.994, label: 'gold ore' },
			{ name: 'item_gem_luminite', chance: 0.006, label: 'luminite gem' }
        ],
        miningTime: pickaxeTotalHits * singleHitTime,
        travelTime: 456,
        kit: "kit_gas"
    },
    zone4: {
        resources: [

            { name: 'item_ore_stone', chance: 30, label: 'stone' },
			{ name: 'item_ore_iron', chance: 30, label: 'iron ore' },
			{ name: 'item_ore_gold', chance: 39.94, label: 'gold ore' },
			{ name: 'item_gem_aqualith', chance: 0.006, label: 'aqualith gem' }
        ],
        miningTime: pickaxeTotalHits * singleHitTime,
        travelTime: 408,
        kit: "kit_radioactive"
    }
};

const pickaxes = {
    item_pickaxe_lvl_1: {
        hits: 100,
        reward: [1],
        chance: [1],
        repairCostPerHP: 1 * costMulti
    },
    item_pickaxe_lvl_2: {
        hits: 100,
        reward: [1, 2],
        chance: [0.70, 0.30],
        repairCostPerHP: 2 * costMulti
    },
    item_pickaxe_lvl_3: {
        hits: 100,
        reward: [1, 2, 3],
        chance: [0.50, 0.30, 0.20],
        repairCostPerHP: 3 * costMulti
    },
    item_pickaxe_lvl_4: {
        hits: 100,
        reward: [1, 2, 3, 4],
        chance: [0.20, 0.50, 0.20, 0.10],
        repairCostPerHP: 4 * costMulti
    }
};
const kits = {

    kit_antiSharp: {
        time: pickaxeTotalHits * singleHitTime * kitLifePerPickaxe, //800
        repairCostPerHP: 1 * costMulti
    },
    kit_gas: {
        time: pickaxeTotalHits * singleHitTime * kitLifePerPickaxe, //800
        repairCostPerHP: 2 * costMulti
    },
    kit_radioactive: {
        time: pickaxeTotalHits * singleHitTime * kitLifePerPickaxe, //800
        repairCostPerHP: 3 * costMulti
    },
    // سایر کیت‌ها...
};
function calculateCycleIncome(zone, pickaxeList, maxPickaxesPerCycle, totalTrips) {
    let income = 0;
    let PickAxeCount = 0;

    let Resource = []
    pickaxeList.forEach(({ type, count }) => {
        let tempPickAxe = 0;

        if (PickAxeCount < maxPickaxesPerCycle) {
            let remaining = maxPickaxesPerCycle - PickAxeCount;

            if (count <= remaining) {
                tempPickAxe = count;
                PickAxeCount += count;
            } else {
                tempPickAxe = remaining;
                PickAxeCount = maxPickaxesPerCycle;
            }
        }
        const pickaxe = pickaxes[type];
        console.log(pickaxe)
        // for (const resource in zone.resources) {
        //     const data = zone.resources[resource];
        //     console.log(data)
        //     const averageReward = pickaxe.reward.reduce(
        //         (acc, val, idx) => acc + val * (pickaxe.chance ? pickaxe.chance[idx] : 1),
        //         0
        //     );

        //     income += data.chance * data.price * averageReward * pickaxe.hits * tempPickAxe;
        //     const Item = Resource.findIndex(item => item.resource === resource)
        //     if(Item !== -1){
        //         Resource[Item].reward += Math.round(averageReward * pickaxe.hits * data.chance * tempPickAxe * totalTrips)
        //     }else{
        //         Resource.push({ resource: resource, reward: Math.round(averageReward * pickaxe.hits * data.chance * tempPickAxe * totalTrips), price: data.price })
                
        //     }
        // }
        zone.resources.forEach((resource,index) => {
            const data = zone.resources[index];
            console.log(data)
            const averageReward = pickaxe.reward.reduce(
                (acc, val, idx) => acc + val * (pickaxe.chance ? pickaxe.chance[idx] : 1),
                0
            );
            const singleOrePrice = MiningShopSell.find(item => item.itemName === data.name)?.singlePrice ?? 0;

            income += data.chance * singleOrePrice * averageReward * pickaxe.hits * tempPickAxe;
            const Item = Resource.findIndex((item ,indexF)=> item.resource === resource)
            if(Item !== -1){
                Resource[Item].reward += Math.round(averageReward * pickaxe.hits * data.chance * tempPickAxe * totalTrips) 
            }else{
                // Resource.push({ resource: resource, reward: Math.round(averageReward * pickaxe.hits * data.chance * tempPickAxe * totalTrips), price: data.price })
            }

        });
    });
 
    return { incomePerCycle: income, Resource };
}

function calculateCycleCost(zone, peakAxeUseKit, pickaxeList) {
  
    const kit = kits[zone.kit];


    return kit ? kit.repairCostPerHP * 100 * peakAxeUseKit : 0;

}
function calculateCycleCostPickaxe(peakAxeUseKit, pickaxeList, zoneName) {
    let totalCost = 0;
    let PickAxeCount = 0;
    console.log("-----------------------------------------------------------");
    console.log(`||      ___________  ${zoneName} ___________     `);
    pickaxeList.map((pickaxe) => {
        let tempeloryPickAxe = 0;

        if (PickAxeCount < peakAxeUseKit * 2) {
            let remaining = peakAxeUseKit * 2 - PickAxeCount;

            if (pickaxe.count <= remaining) {
                tempeloryPickAxe = pickaxe.count;
                PickAxeCount += pickaxe.count;

            } else {
                tempeloryPickAxe = remaining;
                PickAxeCount = peakAxeUseKit * 2;

            }
        }

        const pickaxeCostSingle = pickaxes[pickaxe.type].repairCostPerHP * 100;
        totalCost += pickaxeCostSingle * tempeloryPickAxe;
        console.log("|| pickaxe : " + tempeloryPickAxe + " * " + pickaxe.type);
    });
    return totalCost;
}

function calculateTripsAndIncome(zone, pickaxeList, kitCount, zoneName) {
    const pickAxeCount = pickaxeList.reduce((acc, p) => acc + p.count, 0);

    const kit = kits[zone.kit];
    const CyclePickAxeCount = kit ? (kit.time / zone.miningTime) * kitCount >= pickAxeCount ? pickAxeCount : (kit.time / zone.miningTime) * kitCount : pickAxeCount;
    const cycleTime = zone.miningTime * CyclePickAxeCount + zone.travelTime;
    const tripsPerHour = 3600 / cycleTime;

    const { incomePerCycle, Resource } = calculateCycleIncome(zone, pickaxeList, CyclePickAxeCount, tripsPerHour);
    let costPerCycle = 0;
    let PickAxeCost = 0
    if (kit) {
        const peakAxeUseKit = pickAxeCount * (zone.miningTime / kit.time) >= kitCount ? kitCount : pickAxeCount * (zone.miningTime / kit.time)
        costPerCycle = calculateCycleCost(zone, peakAxeUseKit, pickaxeList);
        PickAxeCost = calculateCycleCostPickaxe(peakAxeUseKit, pickaxeList, zoneName);
    } else {
        PickAxeCost = calculateCycleCostPickaxe(pickAxeCount, pickaxeList, zoneName);
    }

    const totalIncome = (incomePerCycle * tripsPerHour) - (costPerCycle + PickAxeCost);

    return { tripsPerHour, totalIncome, costPerCycle, PickAxeCost };
}

function calculateIncomeForPickaxes(zoneName, pickaxeList, kitCount) {
    const zone = zones[zoneName];
 
    const { tripsPerHour, totalIncome, costPerCycle, PickAxeCost } = calculateTripsAndIncome(zone, pickaxeList, kitCount, zoneName);


    console.log(`|| trips :           ${tripsPerHour.toFixed(2)} per / hour     `);
    // console.log(`|| pickaxes :        ${pickaxeList.map(p => `${p.count} * ${p.type}`).join(' and ')}     `);
    console.log(`|| kits :            ${kitCount} * ${zone.kit}  `);
    console.log(`|| kit cost :        -$${(costPerCycle * tripsPerHour).toFixed(2)}     `);
    console.log(`|| pickaxe cost :    -$${(PickAxeCost * tripsPerHour).toFixed(2)}     `);
    console.log(`|| total cost :      -$${((PickAxeCost * tripsPerHour) + (costPerCycle * tripsPerHour)).toFixed(2)}     `);
    console.log(`|| TOTAL income :    +$${(totalIncome / 100).toFixed(2) }     `);
    console.log("-----------------------------------------------------------");
}

// مثال استفاده
calculateIncomeForPickaxes("zone1", [
    { type: "item_pickaxe_lvl_1", count: 1 },
    // { type: "item_pickaxe_lvl_3", count:1 },
    // { type: "item_pickaxe_lvl_2", count: 1 },
    // { type: "item_pickaxe_lvl_4", count:1  },
], 3);


// const METER_TO_MILE = 0.000621371;



// const stations = [
//   { x: 304.16885, y: -765.45001 },
//   { x: 115.48283, y: -781.3399 },
//   { x: -248.33105, y: -713.4299 },
//   { x: -267.94165, y: -824.3837 },
//   { x: -250.16788, y: -887.0839 },
//   { x: 257.09158, y: -1118.581 },
//   { x: 356.26212, y: -1067.5596 },
//   { x: 767.8817, y: -941.633 },
//   { x: 788.6035, y: -776.33673 },
//   { x: -504.8988, y: 23.778746 },
//   { x: -697.10443, y: -1.262863 },
//   { x: -931.6797, y: -119.69078 },
//   { x: -1419.5776, y: -89.642944 },
//   { x: 422.8766, y: -643.355407 }
// ];

// const distances = [];

// for (let i = 0; i < stations.length - 1; i++) {
//   const { x: x1, y: y1 } = stations[i];
//   const { x: x2, y: y2 } = stations[i + 1];

//   const distanceMeters = Math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2);
//   const distanceMiles = distanceMeters * METER_TO_MILE;
  
//   distances.push(distanceMiles);
// }

// distances.forEach((d, i) => {
//   console.log(`Distance from Station ${i + 1} to ${i + 2}: ${d.toFixed(3)} miles`);
// });

const electricSalaryMultiplier = 1

// level 1   36 task per hour
// for 9000 per hour 
const Lvl1SingleSalary = (250 * electricSalaryMultiplier).toFixed(0)

// level 2   18 task per hour
// for 13000 per hour for level 2
const Lvl2SingleSalary =( 725 * electricSalaryMultiplier).toFixed(0)

// level 3  24 task per hour
// for 17000 per hour for level 2
const Lvl3SingleSalary = (710 * electricSalaryMultiplier).toFixed(0)


// each level 70 exp 
// level 1 exp 1
// level 2 exp 2
// level 1 exp 3


const levelRewards = {
    1: 1000,
    2: 2500,
    3: 3500,
    4: 4000,
    5: 5000,
    6: 6000,
    7: 7000,
    8: 7000,
    9: 7000,
    10: 7000,
}


const shopItems = {
    item_multi_metter: 3500,
    item_hand_pilers: 3000,
    mediumCircuit: 5500,
    advancedCircuit: 7650,
}

export const electricJobConfig = {
    Lvl1SingleSalary,
    Lvl2SingleSalary,
    Lvl3SingleSalary,
    levelRewards,
    shopItems,
}
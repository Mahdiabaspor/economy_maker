const electricSalaryMultiplier = 1.1

// level 1   36 task per hour
// for 9000 per hour 
const Lvl1SingleSalary = Math.floor(572 * (electricSalaryMultiplier + 0.1) )

// level 2   18 task per hour
// for 13000 per hour for level 2
const Lvl2SingleSalary = Math.floor( 942 * electricSalaryMultiplier)

// level 3  24 task per hour
// for 17000 per hour for level 2
const Lvl3SingleSalary = Math.floor(953 * electricSalaryMultiplier)


// each level 70 exp 
// level 1 exp 1
// level 2 exp 2
// level 1 exp 3


const levelRewards = [
    { id: 1, reward: 10000 },
    { id: 2, reward: 12000 },
    { id: 3, reward: 14000 },
    { id: 4, reward: 16000 },
    { id: 5, reward: 18000 },
    { id: 6, reward: 20000 },
    { id: 7, reward: 22000 },
    { id: 8, reward: 24000 },
    { id: 9, reward: 26000 },
    { id: 10, reward: 30000 }
]


const shopItems = {
    item_multi_metter: 2500,
    item_hand_pilers: 2000,
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
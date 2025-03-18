const electricSalaryMultiplier = 1

// level 1   36 task per hour
// for 9000 per hour 
const Lvl1SingleSalary = Math.floor(250 * electricSalaryMultiplier)

// level 2   18 task per hour
// for 13000 per hour for level 2
const Lvl2SingleSalary = Math.floor( 725 * electricSalaryMultiplier)

// level 3  24 task per hour
// for 17000 per hour for level 2
const Lvl3SingleSalary = Math.floor(710 * electricSalaryMultiplier)


// each level 70 exp 
// level 1 exp 1
// level 2 exp 2
// level 1 exp 3


const levelRewards = [
    { id: 1, reward: 1000 },
    { id: 2, reward: 2500 },
    { id: 3, reward: 3500 },
    { id: 4, reward: 4000 },
    { id: 5, reward: 5000 },
    { id: 6, reward: 6000 },
    { id: 7, reward: 7000 },
    { id: 8, reward: 7000 },
    { id: 9, reward: 7000 },
    { id: 10, reward: 7000 }
]


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
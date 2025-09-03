const busSalaryMultiplier = 1.2


//  oneRoundTime = 430
// 14 busStop
// 8.37 trips per hour
const singleBusStopSalary = Math.floor(182 * busSalaryMultiplier) ;  // 10000  per hour

// each level 120 exp 
//  exp 1


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


export const busJobConfig = {
    levelRewards,
    singleBusStopSalary ,
    
}
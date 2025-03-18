const busSalaryMultiplier = 1


//  oneRoundTime = 430
// 14 busStop
// 8.37 trips per hour
const singleBusStopSalary = Math.floor(90 * busSalaryMultiplier) ;  // 10000  per hour

// each level 120 exp 
//  exp 1


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


export const busJobConfig = {
    levelRewards,
    singleBusStopSalary ,
    
}
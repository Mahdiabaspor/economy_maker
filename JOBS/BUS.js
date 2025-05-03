const busSalaryMultiplier = 1.3


//  oneRoundTime = 430
// 14 busStop
// 8.37 trips per hour
const singleBusStopSalary = Math.floor(90 * busSalaryMultiplier) ;  // 10000  per hour

// each level 120 exp 
//  exp 1


const levelRewards = [
    { id: 1, reward: 2000 },
    { id: 2, reward: 5000 },
    { id: 3, reward: 7000 },
    { id: 4, reward: 8000 },
    { id: 5, reward: 10000 },
    { id: 6, reward: 12000 },
    { id: 7, reward: 14000 },
    { id: 8, reward: 15000 },
    { id: 9, reward: 16000 },
    { id: 10, reward: 17000 }
]


export const busJobConfig = {
    levelRewards,
    singleBusStopSalary ,
    
}
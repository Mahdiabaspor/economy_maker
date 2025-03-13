const busSalaryMultiplier = 1


//  oneRoundTime = 430
// 14 busStop
// 8.37 trips per hour
const singleBusStopSalary = (90 * busSalaryMultiplier).toFixed(0) ;  // 10000  per hour

// each level 120 exp 
//  exp 1


const levelRewards ={
    1: 1000,
    2: 2500,
    3: 3500,
    4: 4000,
    5: 5000,
    6: 6000,
    7: 7000,
    8: 7000,
    9: 7000,
    10: 7000
}


export const busJobConfig = {
    levelRewards,
    singleBusStopSalary ,
    
}
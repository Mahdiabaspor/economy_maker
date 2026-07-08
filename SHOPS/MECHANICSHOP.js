
const mechanicShopMultiplier = 1

export const mechanicShopConfig = {
     repairCost:Math.floor( 2000 * mechanicShopMultiplier),
     repairKitCost:Math.floor(4000 * mechanicShopMultiplier) ,
     repairCostMultiplier:Math.floor(1 * mechanicShopMultiplier),
     DriftKit:Math.floor(45000 * mechanicShopMultiplier),
     nitroKit:Math.floor(70000 * mechanicShopMultiplier),
     nitroRefillCost:Math.floor(4500 * mechanicShopMultiplier) ,
     // cost per 1% of wear when repairing a vehicle part from the condition UI
     conditionRepairCostPerPercent:Math.floor(50 * mechanicShopMultiplier),
}
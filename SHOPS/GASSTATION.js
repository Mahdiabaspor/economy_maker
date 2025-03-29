
const fuelMultiplier = 1;
const normalFuelPerLitter  =  Math.floor(3 * fuelMultiplier)


// max fuel = 100
// 100 fuel per 20 min = 300 fuel per hour
// $2100 per hour  fuel
// fuelcan  25 litr   25 * 7 = 175


export const gasStationConfig = {
    normalFuelPerLitter,
    gasUsageTime:20
}

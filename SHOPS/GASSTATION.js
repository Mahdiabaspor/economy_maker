
const fuelMultiplier = 1;
const normalFuelPerLitter  =  Math.floor(4 * fuelMultiplier)


// max fuel = 100
// 100 fuel per 20 min = 300 fuel per hour
// $2100 per hour  fuel
// fuelcan  25 litr   25 * 7 = 175


// Per-litre price by fuel type (regular kept in sync with normalFuelPerLitter).
// electricPricePerKwh = 0 makes charging free.
const pricePerLitter = {
    regular: normalFuelPerLitter,
    premium: Math.floor(8 * fuelMultiplier),
    diesel: Math.floor(5 * fuelMultiplier),
}
const electricPricePerKwh = Math.floor(3 * fuelMultiplier)

// Fuel-system damage (percent) dealt when the wrong fuel type is put in a vehicle.
const wrongFuelDamage = 15

export const gasStationConfig = {
    normalFuelPerLitter,
    gasUsageTime:20,
    pricePerLitter,
    electricPricePerKwh,
    wrongFuelDamage,
}

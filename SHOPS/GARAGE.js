export const garageConfig = {
    returnVehiclePrice: 1000,
}

// Phone "Garage" app fees — its own economy, separate from the NPC garage above.
export const phoneGarageConfig = {
    // deliver an owned car to the player's location (charged upfront)
    summonPrice: 5000,
    // send an out-of-garage car back to the garage remotely
    returnPrice: 5000,
}

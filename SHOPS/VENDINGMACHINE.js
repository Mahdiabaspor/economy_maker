const VendingMultiplier = 1;
export const vendingMachineConfig = {
  regular: [
    {
      itemName: "item_drink_water",
      label: "MINERAL WATER",
      singlePrice: Math.floor(150 * VendingMultiplier * 0.8),
    },

    {
      itemName: "item_food_chocolate",
      label: "CHOCOLATE BAR",
      singlePrice: Math.floor(150 * VendingMultiplier * 0.8),
    },

    {
      itemName: "item_food_burger",
      label: "HAMBURGER",
      singlePrice: Math.floor(230 * VendingMultiplier),
    },

    {
      itemName: "item_drink_sprunk",
      label: "SPRUNK SODA",
      singlePrice: Math.floor(215 * VendingMultiplier),
    },
  ],
};

const boozeShopMultiplier = 1.2;
export const boozeShopConfig = {
  regular: [
    {
      itemName: "item_drink_vodka",
      label: "VODKA",
      singlePrice: Math.floor(900 * boozeShopMultiplier),
    },
    {
      itemName: "item_drink_tequila",
      label: "TEQUILA",
      singlePrice: Math.floor(800 * boozeShopMultiplier),
    },
    {
      itemName: "item_drink_beer",
      label: "BEER",
      singlePrice: Math.floor(400 * boozeShopMultiplier),
    },
  ],
};
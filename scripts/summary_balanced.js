import { maleClothP } from '../SHOPS/ClothShopPermium/Male_balanced.js';
import { femaleClothP } from '../SHOPS/ClothShopPermium/Female_balanced.js';

const categories = ['accessories','hats','legs','masks','shoes','tops'];

function summary(arr){
  const prices=arr.map(it=>it.coinPrice);
  return {count:arr.length,min:Math.min(...prices),max:Math.max(...prices),avg:(prices.reduce((a,b)=>a+b,0)/arr.length).toFixed(2)};
}

for(const cat of categories){
  const maleKey = `${cat}_men`;
  const femaleKey = `${cat}_female`;
  const m = maleClothP[maleKey]||[];
  const f = femaleClothP[femaleKey]||[];
  console.log(cat.toUpperCase());
  console.log('male',summary(m));
  console.log('female',summary(f));
}

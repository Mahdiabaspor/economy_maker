import fs from 'fs';
import { maleClothP } from '../SHOPS/ClothShopPermium/Male.js';
import { femaleClothP } from '../SHOPS/ClothShopPermium/Female.js';

const categories = [
  'accessories',
  'torsos',
  'bags',
  'bracelets',
  'ears',
  'glasses',
  'undershirts',
  'hats',
  'legs',
  'masks',
  'shoes',
  'tops',
  'watches'
];

function calcAvg(arr) {
  if (!arr || arr.length === 0) return 0;
  return arr.reduce((s, i) => s + (i.coinPrice || 0), 0) / arr.length;
}

function adjustArray(arr, factor) {
  return arr.map(i => ({ ...i, coinPrice: Math.round(i.coinPrice * factor) }));
}

const globalDiscount = 0.9; // 10% off after balancing

const newMale = {};
const newFemale = {};

for (const cat of categories) {
  const maleKey = `${cat}_men`;
  const femaleKey = `${cat}_female`;
  const maleArr = maleClothP[maleKey] || [];
  const femaleArr = femaleClothP[femaleKey] || [];

  const maleAvg = calcAvg(maleArr);
  const femaleAvg = calcAvg(femaleArr);

  let maleFactor = 1;
  let femaleFactor = 1;

  if (maleAvg && femaleAvg) {
    if (maleAvg > femaleAvg) {
      maleFactor = femaleAvg / maleAvg;
    } else if (femaleAvg > maleAvg) {
      femaleFactor = maleAvg / femaleAvg;
    }
  }

  maleFactor *= globalDiscount;
  femaleFactor *= globalDiscount;

  newMale[maleKey] = adjustArray(maleArr, maleFactor);
  newFemale[femaleKey] = adjustArray(femaleArr, femaleFactor);
}

function buildFile(obj, exportName) {
  let content = '';
  for (const [key, arr] of Object.entries(obj)) {
    content += `export const ${key} = ${JSON.stringify(arr, null, 2)};\n\n`;
  }
  content += `export const ${exportName} = {\n`;
  for (const key of Object.keys(obj)) {
    content += `  ${key},\n`;
  }
  content += '};\n';
  return content;
}

fs.writeFileSync('./SHOPS/ClothShopPermium/Male_balanced.js', buildFile(newMale, 'maleClothP'));
fs.writeFileSync('./SHOPS/ClothShopPermium/Female_balanced.js', buildFile(newFemale, 'femaleClothP'));
console.log('Balanced files written.');

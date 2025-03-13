



export const CraftEmsConfig = [
    {
        label: 'MEDICAL BANDAGE', //24 hp     for medics 100 hp     //2600  / 5    = 520
        itemName: 'item_medical_bandage',
        materials: [
            { itemName: 'item_ethanol', count: 3, label: 'Ethanol' },  //1600,
            { itemName: 'item_fabric', count: 5, label: 'Fabric' }, // 1000
        ],
        itemType: 'RARE',
        craftTimeMinutes: 1,
        output: 5,
    },
    {
        label: 'PAIN KILLER POWDER', //1800    //1800 / 4 = 450
        itemName: 'item_pain_killer_powder',
        materials: [
            { itemName: 'item_medicine_stablizer', count: 4, label: 'DRUG STABILIZER' }, //1000
            { itemName: 'item_capsaicin_powder', count: 4, label: 'CAPSAICIN POWDER' }, //800
        ],

        itemType: 'RARE',
        craftTimeMinutes: 1,
        output: 4,
    },
    {
        label: 'PAIN KILLER PILL', // 700
        itemName: 'item_pain_killer_pill',
        materials: [
            { itemName: 'item_empty_pill_capsule', count: 4, label: 'EMPTY PILL CAPSULE' },  // 450 * 4
            { itemName: 'item_pain_killer_powder', count: 4, label: 'PAIN KILLER POWDER' }, // 250 * 4
        ],
        itemType: 'RARE',
        craftTimeMinutes: 1,
        output: 4,
    },

];


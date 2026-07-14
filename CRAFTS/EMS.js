



export const CraftEmsConfig = [
    {
        label: 'MEDICAL BANDAGE', //24 hp     for medics 100 hp     //3400  / 5    = 680 
        itemName: 'item_medical_bandage',
        materials: [
            { itemName: 'item_ethanol', count: 3, label: 'Ethanol' },  //2400,
            { itemName: 'item_fabric', count: 5, label: 'Fabric' }, // 1000
        ],
        itemType: 'RARE',
        craftTimeMinutes: 4,
        output: 5,
    },
    {
        label: 'PAIN KILLER POWDER', //5000    //5000 / 5 = 1000
        itemName: 'item_pain_killer_powder',
        materials: [
            { itemName: 'item_medicine_stablizer', count: 4, label: 'DRUG STABILIZER' }, //1000
            { itemName: 'item_capsaicin_powder', count: 4, label: 'CAPSAICIN POWDER' }, //4000
        ],

        itemType: 'RARE',
        craftTimeMinutes: 3,
        output: 5,
    },
    {
        label: 'PAIN KILLER PILL', // 700
        itemName: 'item_pain_killer_pill',
        materials: [
            { itemName: 'item_empty_pill_capsule', count: 5, label: 'EMPTY PILL CAPSULE' },  // 450 * 4
            { itemName: 'item_pain_killer_powder', count: 5, label: 'PAIN KILLER POWDER' }, // 250 * 4
        ],
        itemType: 'RARE',
        craftTimeMinutes: 3,
        output: 5,
    },
    {
        label: 'FIRST AID KIT', // materials self-crafted: 9820 / 2 = 4910 per kit; sells to gov at 6500
        itemName: 'item_medical_first_aid',
        materials: [
            { itemName: 'item_medical_bandage', count: 4, label: 'MEDICAL BANDAGE' }, // 680 * 4 = 2720 (crafted)
            { itemName: 'item_pain_killer_pill', count: 2, label: 'PAIN KILLER PILL' }, // 1250 * 2 = 2500 (crafted)
            { itemName: 'item_ethanol', count: 2, label: 'Ethanol' }, // 800 * 2 = 1600
            { itemName: 'item_fabric', count: 15, label: 'Fabric' }, // 200 * 15 = 3000
        ],
        itemType: 'RARE',
        craftTimeMinutes: 5,
        output: 2,
    },

];


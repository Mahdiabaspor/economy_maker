

export const CraftingGangConfig = {

    gang_drug_crafting: [
        {
            label: 'SULFURIC ACID', //1000
            itemName: 'item_sulfuric_acid',
            materials: [
                { itemName: 'item_battery', count: 4, label: 'BATTERY' },
            ],
            itemType: 'RARE',
            craftTimeMinutes: 3,
            output: 2,
            requiredGangLevel: 1,
        },
        // {
        //     { itemName: 'item_acetone', count: 1, label: 'ACETONE' },
        //     { itemName: 'item_coca_leaves', count: 1, label: 'COCA LEAVES' },
        //     { itemName: 'item_sulfuric_acid', count: 1, label: 'SULFURIC ACID' },
        //     { itemName: 'item_sodium_bicarbonate', count: 1, label: 'SODIUM BICARBONATE' },
        // }

        {
            label: 'COCAIN PACK', // 7500 / 3   2500
            itemName: 'item_cocain_pack',
            materials: [
                { itemName: 'item_cocain_powder', count: 3, label: 'COCAIN POWDER' }, //6200
                { itemName: 'item_empty_plastic_pack', count: 3, label: 'PLASTIC PACK' }, //1300
            ],
            itemType: 'RARE',
            craftTimeMinutes: 2,
            output: 3,
            requiredGangLevel: 1,
        },
        {
            label: 'SAFFAROLE OIL',
            itemName: 'item_saffarole_oil',
            materials: [
                { itemName: 'item_saffarole_leave', count: 2, label: 'SAFFAROLE LEAVES' },

            ],
            itemType: 'RARE',
            craftTimeMinutes: 3,
            output: 2,
            requiredGangLevel: 1,
        },


        {
            label: 'MDMA PILL', // 4250
            itemName: 'item_mdma_pill',
            materials: [
                { itemName: 'item_mdma_powder', count: 1, label: 'MDMA POWDER' }, //4000
                { itemName: 'item_empty_pill_capsule', count: 1, label: 'EMPTY PILL CAPSULE' }, //250
            ],
            itemType: 'RARE',
            craftTimeMinutes: 1,
            output: 1,
            requiredGangLevel: 1,
        },
        {
            label: 'ACETONE',  // 1200
            itemName: 'item_acetone',
            materials: [
                { itemName: 'item_paint_color', count: 2, label: 'PAINT COLOR' },
            ],
            itemType: 'RARE',
            craftTimeMinutes: 3,
            output: 2,
            requiredGangLevel: 1,
        },
        {
            label: 'METHYLAMINE',  // 4200
            itemName: 'item_methylamine_crystal',
            materials: [
                { itemName: 'item_methanol', count: 3, label: 'METHANOL' }, //1800
                { itemName: 'item_ammonia', count: 2, label: 'AMMONIA' }, //2400

            ],
            itemType: 'RARE',
            craftTimeMinutes: 3,
            output: 1,
            requiredGangLevel: 3,
        },
        {
            label: 'AMMONIA', // 1200
            itemName: 'item_ammonia',
            materials: [
                { itemName: 'item_house_cleaner', count: 4, label: 'HOUSE CLEANER' },

            ],
            itemType: 'RARE',
            craftTimeMinutes: 3,
            output: 2,
            requiredGangLevel: 1,
        },
        {
            label: 'COCAIN POWDER',  //6200 /3   = 2066
            itemName: 'item_cocain_powder',
            materials: [
                { itemName: 'item_acetone', count: 3, label: 'ACETONE' }, // 3600
                { itemName: 'item_coca_leaves', count: 3, label: 'COCA LEAVES' },
                { itemName: 'item_sulfuric_acid', count: 2, label: 'SULFURIC ACID' }, // 2000
                { itemName: 'item_sodium_bicarbonate', count: 2, label: 'SODIUM BICARBONATE' }, //800

            ],
            itemType: 'RARE',
            craftTimeMinutes: 3,
            output: 3,
            requiredGangLevel: 3,
        },
        {
            label: 'MDP2P POWDER', //2400
            itemName: 'item_mdp2p',
            materials: [
                { itemName: 'item_acetone', count: 1, label: 'ACETONE' }, // 1200
                { itemName: 'item_saffarole_oil', count: 1, label: 'SAFFAROLE OIL' },
                { itemName: 'item_ammonia', count: 1, label: 'AMMONIA' }, // 1200
            ],
            itemType: 'RARE',
            craftTimeMinutes: 3,
            output: 1,
            requiredGangLevel: 4,
        },
        {
            label: 'MDMA POWDER', //9800 / 3 = 4000
            itemName: 'item_mdma_powder',
            materials: [
                { itemName: 'item_mdp2p', count: 2, label: 'MDP2P POWDER' }, // 3600
                { itemName: 'item_methylamine_crystal', count: 2, label: 'METHYLAMINE' }, //8400


            ],
            itemType: 'RARE',
            craftTimeMinutes: 3,
            output: 3,
            requiredGangLevel: 4,
        },
    ],


    gang_weapon_crafting: [
        {
            label: ' KNIFE', //4125
            itemName: 'item_melee_knife',
            materials: [
                { itemName: 'item_bar_iron', count: 5, label: 'IRON BAR' },
            ],
            itemType: 'RARE',
            craftTimeMinutes: 3,
            output: 1,
            requiredGangLevel: 1,
        },
        {
            label: 'COMBAT PISTOL', //9,940
            itemName: 'item_weapon_combat_pistol',
            materials: [
                { itemName: 'item_normal_barrel', count: 1, label: 'NORMAL BARREL' }, //3815
                { itemName: 'item_normal_trigger', count: 1, label: 'TRIGGER' },      //3,350
                { itemName: 'item_grip_weapon', count: 1, label: 'GRIP' },            //2,775
            ],
            itemType: 'RARE',
            craftTimeMinutes: 3,
            output: 1,
            requiredGangLevel: 1,
        },
        {
            label: 'MACHETE',  //15,260
            itemName: 'item_melee_machete',
            materials: [
                { itemName: 'item_reinforced_steel', count: 4, label: 'REINFORCED STEEL' },  //2* 7,630 
            ],
            itemType: 'RARE',
            craftTimeMinutes: 3,
            output: 1,
            requiredGangLevel: 2,
        },
        {
            label: 'DOUBLE ACTION REVOLVER',  //15,720
            itemName: 'item_weapon_double_action_revolver',
            materials: [
                { itemName: 'item_advanced_trigger', count: 1, label: 'ADVANCED TRIGGER' }, //5,315
                { itemName: 'item_normal_barrel', count: 2, label: 'NORMAL BARREL' }, //3815 
                { itemName: 'item_grip_weapon', count: 1, label: 'GRIP' },   //2,775
            ],
            itemType: 'RARE',
            craftTimeMinutes: 3,
            output: 1,
            requiredGangLevel: 2,
        },
        {
            label: 'DB SHOTGUN',  //21,215
            itemName: 'item_weapon_db_shotgun',
            materials: [
                { itemName: 'item_reinforced_barrel', count: 1, label: 'REINFORCED BARREL' }, //5315 
                { itemName: 'item_advanced_trigger', count: 1, label: 'ADVANCED TRIGGER' }, //5,315
                { itemName: 'item_grip_weapon', count: 1, label: 'GRIP' },  //2,775
                { itemName: 'item_reinforced_steel', count: 2, label: 'REINFORCED STEEL' }, //7,630
            ], 
            itemType: 'RARE',
            craftTimeMinutes: 3,
            output: 1,
            requiredGangLevel: 3,
        },
        {
            label: 'MICRO SMG', //19,530
            itemName: 'item_weapon_micro_smg',
            materials: [
                { itemName: 'item_reinforced_barrel', count: 2, label: 'REINFORCED BARREL' }, //5315 * 2
                { itemName: 'item_normal_trigger', count: 1, label: 'TRIGGER' },  //3,350
                { itemName: 'item_grip_weapon', count: 1, label: 'GRIP' }, //2,775
                { itemName: 'item_stock_weapon', count: 1, label: 'STOCK' }, //2,775

            ],
            itemType: 'RARE',   
            craftTimeMinutes: 3,
            output: 1,
            requiredGangLevel: 3,
        },
        {
            label: 'SAWNOFF SHOTGUN',  //26,350
            itemName: 'item_weapon_sawnoff_shotgun',
            materials: [
                { itemName: 'item_advanced_trigger', count: 1, label: 'ADVANCED TRIGGER' }, //5,315
                { itemName: 'item_reinforced_barrel', count: 2, label: 'REINFORCED BARREL' }, //5315 * 2
                { itemName: 'item_grip_weapon', count: 1, label: 'GRIP' },  //2,775
                { itemName: 'item_reinforced_steel', count: 2, label: 'REINFORCED STEEL' }, //7,630 

            ],
            itemType: 'RARE',
            craftTimeMinutes: 3,
            output: 1,
            requiredGangLevel: 4,
        },

        {
            label: 'compact rifle',  //31,900
            itemName: 'item_weapon_compact_rifle',
            materials: [
                { itemName: 'item_reinforced_barrel', count: 1, label: 'REINFORCED BARREL' },  //5315 * 2
                { itemName: 'item_advanced_trigger', count: 1, label: 'ADVANCED TRIGGER' }, //5,315
                { itemName: 'item_grip_weapon', count: 1, label: 'GRIP' },  //2,775
                { itemName: 'item_stock_weapon', count: 2, label: 'STOCK' }, //2,775 * 2
                { itemName: 'item_reinforced_steel', count: 2, label: 'REINFORCED STEEL' }, //7,630 
            ],
            itemType: 'RARE',
            craftTimeMinutes: 3,
            output: 1,
            requiredGangLevel: 4,
        },
    ],

};


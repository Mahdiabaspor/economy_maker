
const colorCostMultiplier = 1.5

 const ColorTemplate  = [
    {
        ID: '0',
        Description: 'Metallic Black',
        Hex: '#0d1116',
        RGB: '13, 17, 22',
        Price:Math.floor(7000 *colorCostMultiplier),
    },
    {
        ID: '1',
        Description: 'Metallic Graphite Black',
        Hex: '#1c1d21',
        RGB: '28, 29, 33 ',
        Price:Math.floor(7000 *colorCostMultiplier),
    },
    {
        ID: '2',
        Description: 'Metallic Black Steal',
        Hex: '#32383d',
        RGB: '50, 56, 61 ',
        Price:Math.floor(7000 *colorCostMultiplier),
    },
    {
        ID: '3',
        Description: 'Metallic Dark Silver',
        Hex: '#454b4f',
        RGB: '69, 75, 79 ',
        Price:Math.floor(7000 *colorCostMultiplier),
    },
    {
        ID: '4',
        Description: 'Metallic Silver',
        Hex: '#999da0',
        RGB: '153, 157, 160 ',
        Price:Math.floor(7000 *colorCostMultiplier),
    },
    {
        ID: '5',
        Description: 'Metallic Blue Silver',
        Hex: '#c2c4c6',
        RGB: '194, 196, 198 ',
        Price:Math.floor(7000 *colorCostMultiplier),
    },
    {
        ID: '6',
        Description: 'Metallic Steel Gray',
        Hex: '#979a97',
        RGB: '151, 154, 151 ',
        Price:Math.floor(7000 *colorCostMultiplier),
    },
    {
        ID: '7',
        Description: 'Metallic Shadow Silver',
        Hex: '#637380',
        RGB: '99, 115, 128 ',
        Price:Math.floor(7000 *colorCostMultiplier),
    },
    {
        ID: '8',
        Description: 'Metallic Stone Silver',
        Hex: '#63625c',
        RGB: '99, 98, 92 ',
        Price:Math.floor(7000 *colorCostMultiplier),
    },
    {
        ID: '9',
        Description: 'Metallic Midnight Silver',
        Hex: '#3c3f47',
        RGB: '60, 63, 71 ',
        Price:Math.floor(7000 *colorCostMultiplier),
    },
    {
        ID: '10',
        Description: 'Metallic Gun Metal',
        Hex: '#444e54',
        RGB: '68, 78, 84 ',
        Price:Math.floor(7000 *colorCostMultiplier),
    },
    {
        ID: '11',
        Description: 'Metallic Anthracite Grey',
        Hex: '#1d2129',
        RGB: '29, 33, 41 ',
        Price:Math.floor(7000 *colorCostMultiplier),
    },
    {
        ID: '12',
        Description: 'Matte Black',
        Hex: '#13181f',
        RGB: '19, 24, 31 ',
        Price:Math.floor(5000 *colorCostMultiplier),
    },
    {
        ID: '13',
        Description: 'Matte Gray',
        Hex: '#26282a',
        RGB: '38, 40, 42 ',
        Price:Math.floor(5000 *colorCostMultiplier),
    },
    {
        ID: '14',
        Description: 'Matte Light Grey',
        Hex: '#515554',
        RGB: '81, 85, 84 ',
        Price:Math.floor(5000 *colorCostMultiplier),
    },
    {
        ID: '15',
        Description: 'Util Black',
        Hex: '#151921',
        RGB: '21, 25, 33 ',
        Price:Math.floor(2500 *colorCostMultiplier),
    },
    {
        ID: '16',
        Description: 'Util Black Poly',
        Hex: '#1e2429',
        RGB: '30, 36, 41 ',
        Price:Math.floor(2500 *colorCostMultiplier),
    },
    {
        ID: '17',
        Description: 'Util Dark silver',
        Hex: '#333a3c',
        RGB: '51, 58, 60 ',
        Price:Math.floor(2500 *colorCostMultiplier),
    },
    {
        ID: '18',
        Description: 'Util Silver',
        Hex: '#8c9095',
        RGB: '140, 144, 149 ',
        Price:Math.floor(2500 *colorCostMultiplier),
    },
    {
        ID: '19',
        Description: 'Util Gun Metal',
        Hex: '#39434d',
        RGB: '57, 67, 77 ',
        Price:Math.floor(2500 *colorCostMultiplier),
    },
    {
        ID: '20',
        Description: 'Util Shadow Silver',
        Hex: '#506272',
        RGB: '80, 98, 114 ',
        Price:Math.floor(2500 *colorCostMultiplier),
    },
    {
        ID: '21',
        Description: 'Worn Black',
        Hex: '#1e232f',
        RGB: '30, 35, 47 ',
        Price:Math.floor(5000 *colorCostMultiplier),
    },
    {
        ID: '22',
        Description: 'Worn Graphite',
        Hex: '#363a3f',
        RGB: '54, 58, 63 ',
        Price:Math.floor(5000 *colorCostMultiplier),
    },
    {
        ID: '23',
        Description: 'Worn Silver Grey',
        Hex: '#a0a199',
        RGB: '160, 161, 153 ',
        Price:Math.floor(5000 *colorCostMultiplier),
    },
    {
        ID: '24',
        Description: 'Worn Silver',
        Hex: '#d3d3d3',
        RGB: '211, 211, 211 ',
        Price:Math.floor(5000 *colorCostMultiplier),
    },
    {
        ID: '25',
        Description: 'Worn Blue Silver',
        Hex: '#b7bfca',
        RGB: '183, 191, 202 ',
        Price:Math.floor(5000 *colorCostMultiplier),
    },
    {
        ID: '26',
        Description: 'Worn Shadow Silver',
        Hex: '#778794',
        RGB: '119, 135, 148 ',
        Price:Math.floor(5000 *colorCostMultiplier),
    },
    {
        ID: '27',
        Description: 'Metallic Red',
        Hex: '#c00e1a',
        RGB: '192, 14, 26 ',
        Price:Math.floor(7000 *colorCostMultiplier),
    },
    {
        ID: '28',
        Description: 'Metallic Torino Red',
        Hex: '#da1918',
        RGB: '218, 25, 24 ',
        Price:Math.floor(7000 *colorCostMultiplier),
    },
    {
        ID: '29',
        Description: 'Metallic Formula Red',
        Hex: '#b6111b',
        RGB: '182, 17, 27 ',
        Price:Math.floor(7000 *colorCostMultiplier),
    },
    {
        ID: '30',
        Description: 'Metallic Blaze Red',
        Hex: '#a51e23',
        RGB: '165, 30, 35 ',
        Price:Math.floor(7000 *colorCostMultiplier),
    },
    {
        ID: '31',
        Description: 'Metallic Graceful Red',
        Hex: '#7b1a22',
        RGB: '123, 26, 34 ',
        Price:Math.floor(7000 *colorCostMultiplier),
    },
    {
        ID: '32',
        Description: 'Metallic Garnet Red',
        Hex: '#8e1b1f',
        RGB: '142, 27, 31 ',
        Price:Math.floor(7000 *colorCostMultiplier),
    },
    {
        ID: '33',
        Description: 'Metallic Desert Red',
        Hex: '#6f1818',
        RGB: '111, 24, 24 ',
        Price:Math.floor(7000 *colorCostMultiplier),
    },
    {
        ID: '34',
        Description: 'Metallic Cabernet Red',
        Hex: '#49111d',
        RGB: '73, 17, 29 ',
        Price:Math.floor(7000 *colorCostMultiplier),
    },
    {
        ID: '35',
        Description: 'Metallic Candy Red',
        Hex: '#b60f25',
        RGB: '182, 15, 37 ',
        Price:Math.floor(7000 *colorCostMultiplier),
    },
    {
        ID: '36',
        Description: 'Metallic Sunrise Orange',
        Hex: '#d44a17',
        RGB: '212, 74, 23 ',
        Price:Math.floor(7000 *colorCostMultiplier),
    },
    {
        ID: '37',
        Description: 'Metallic Classic Gold',
        Hex: '#c2944f',
        RGB: '194, 148, 79 ',
        Price:Math.floor(7000 *colorCostMultiplier),
    },
    {
        ID: '38',
        Description: 'Metallic Orange',
        Hex: '#f78616',
        RGB: '247, 134, 22 ',
        Price:Math.floor(7000 *colorCostMultiplier),
    },
    {
        ID: '39',
        Description: 'Matte Red',
        Hex: '#cf1f21',
        RGB: '207, 31, 33 ',
        Price:Math.floor(5000 *colorCostMultiplier),
    },
    {
        ID: '40',
        Description: 'Matte Dark Red',
        Hex: '#732021',
        RGB: '115, 32, 33 ',
        Price:Math.floor(5000 *colorCostMultiplier),
    },
    {
        ID: '41',
        Description: 'Matte Orange',
        Hex: '#f27d20',
        RGB: '242, 125, 32 ',
        Price:Math.floor(5000 *colorCostMultiplier),
    },
    {
        ID: '42',
        Description: 'Matte Yellow',
        Hex: '#ffc91f',
        RGB: '255, 201, 31 ',
        Price:Math.floor(5000 *colorCostMultiplier),
    },
    {
        ID: '43',
        Description: 'Util Red',
        Hex: '#9c1016',
        RGB: '156, 16, 22 ',
        Price:Math.floor(2500 *colorCostMultiplier),
    },
    {
        ID: '44',
        Description: 'Util Bright Red',
        Hex: '#de0f18',
        RGB: '222, 15, 24 ',
        Price:Math.floor(2500 *colorCostMultiplier),
    },
    {
        ID: '45',
        Description: 'Util Garnet Red',
        Hex: '#8f1e17',
        RGB: '143, 30, 23 ',
        Price:Math.floor(2500 *colorCostMultiplier),
    },
    {
        ID: '46',
        Description: 'Worn Red',
        Hex: '#a94744',
        RGB: '169, 71, 68 ',
        Price:Math.floor(5000 *colorCostMultiplier),
    },
    {
        ID: '47',
        Description: 'Worn Golden Red',
        Hex: '#b16c51',
        RGB: '177, 108, 81 ',
        Price:Math.floor(5000 *colorCostMultiplier),
    },
    {
        ID: '48',
        Description: 'Worn Dark Red',
        Hex: '#371c25',
        RGB: '55, 28, 37 ',
        Price:Math.floor(5000 *colorCostMultiplier),
    },
    {
        ID: '49',
        Description: 'Metallic Dark Green',
        Hex: '#132428',
        RGB: '19, 36, 40 ',
        Price:Math.floor(7000 *colorCostMultiplier),
    },
    {
        ID: '50',
        Description: 'Metallic Racing Green',
        Hex: '#122e2b',
        RGB: '18, 46, 43 ',
        Price:Math.floor(7000 *colorCostMultiplier),
    },
    {
        ID: '51',
        Description: 'Metallic Sea Green',
        Hex: '#12383c',
        RGB: '18, 56, 60 ',
        Price:Math.floor(7000 *colorCostMultiplier),
    },
    {
        ID: '52',
        Description: 'Metallic Olive Green',
        Hex: '#31423f',
        RGB: '49, 66, 63 ',
        Price:Math.floor(7000 *colorCostMultiplier),
    },
    {
        ID: '53',
        Description: 'Metallic Green',
        Hex: '#155c2d',
        RGB: '21, 92, 45 ',
        Price:Math.floor(7000 *colorCostMultiplier),
    },
    {
        ID: '54',
        Description: 'Metallic Gasoline Blue Green',
        Hex: '#1b6770',
        RGB: '27, 103, 112 ',
        Price:Math.floor(7000 *colorCostMultiplier),
    },
    {
        ID: '55',
        Description: 'Matte Lime Green',
        Hex: '#66b81f',
        RGB: '102, 184, 31 ',
        Price:Math.floor(5000 *colorCostMultiplier),
    },
    {
        ID: '56',
        Description: 'Util Dark Green',
        Hex: '#22383e',
        RGB: '34, 56, 62 ',
        Price:Math.floor(2500 *colorCostMultiplier),
    },
    {
        ID: '57',
        Description: 'Util Green',
        Hex: '#1d5a3f',
        RGB: '29, 90, 63 ',
        Price:Math.floor(2500 *colorCostMultiplier),
    },
    {
        ID: '58',
        Description: 'Worn Dark Green',
        Hex: '#2d423f',
        RGB: '45, 66, 63 ',
        Price:Math.floor(5000 *colorCostMultiplier),
    },
    {
        ID: '59',
        Description: 'Worn Green',
        Hex: '#45594b',
        RGB: '69, 89, 75 ',
        Price:Math.floor(5000 *colorCostMultiplier),
    },
    {
        ID: '60',
        Description: 'Worn Sea Wash',
        Hex: '#65867f',
        RGB: '101, 134, 127 ',
        Price:Math.floor(5000 *colorCostMultiplier),
    },
    {
        ID: '61',
        Description: 'Metallic Midnight Blue',
        Hex: '#222e46',
        RGB: '34, 46, 70 ',
        Price:Math.floor(7000 *colorCostMultiplier),
    },
    {
        ID: '62',
        Description: 'Metallic Dark Blue',
        Hex: '#233155',
        RGB: '35, 49, 85 ',
        Price:Math.floor(7000 *colorCostMultiplier),
    },
    {
        ID: '63',
        Description: 'Metallic Saxony Blue',
        Hex: '#304c7e',
        RGB: '48, 76, 126 ',
        Price:Math.floor(7000 *colorCostMultiplier),
    },
    {
        ID: '64',
        Description: 'Metallic Blue',
        Hex: '#47578f',
        RGB: '71, 87, 143 ',
        Price:Math.floor(7000 *colorCostMultiplier),
    },
    {
        ID: '65',
        Description: 'Metallic Mariner Blue',
        Hex: '#637ba7',
        RGB: '99, 123, 167 ',
        Price:Math.floor(7000 *colorCostMultiplier),
    },
    {
        ID: '66',
        Description: 'Metallic Harbor Blue',
        Hex: '#394762',
        RGB: '57, 71, 98 ',
        Price:Math.floor(7000 *colorCostMultiplier),
    },
    {
        ID: '67',
        Description: 'Metallic Diamond Blue',
        Hex: '#d6e7f1',
        RGB: '214, 231, 241 ',
        Price:Math.floor(7000 *colorCostMultiplier),
    },
    {
        ID: '68',
        Description: 'Metallic Surf Blue',
        Hex: '#76afbe',
        RGB: '118, 175, 190 ',
        Price:Math.floor(7000 *colorCostMultiplier),
    },
    {
        ID: '69',
        Description: 'Metallic Nautical Blue',
        Hex: '#345e72',
        RGB: '52, 94, 114 ',
        Price:Math.floor(7000 *colorCostMultiplier),
    },
    {
        ID: '70',
        Description: 'Metallic Bright Blue',
        Hex: '#0b9cf1',
        RGB: '11, 156, 241 ',
        Price:Math.floor(7000 *colorCostMultiplier),
    },
    {
        ID: '71',
        Description: 'Metallic Purple Blue',
        Hex: '#2f2d52',
        RGB: '47, 45, 82 ',
        Price:Math.floor(7000 *colorCostMultiplier),
    },
    {
        ID: '72',
        Description: 'Metallic Spinnaker Blue',
        Hex: '#282c4d',
        RGB: '40, 44, 77 ',
        Price:Math.floor(7000 *colorCostMultiplier),
    },
    {
        ID: '73',
        Description: 'Metallic Ultra Blue',
        Hex: '#2354a1',
        RGB: '35, 84, 161 ',
        Price:Math.floor(7000 *colorCostMultiplier),
    },
    {
        ID: '74',
        Description: 'Metallic Bright Blue',
        Hex: '#6ea3c6',
        RGB: '110, 163, 198 ',
        Price:Math.floor(7000 *colorCostMultiplier),
    },
    {
        ID: '75',
        Description: 'Util Dark Blue',
        Hex: '#112552',
        RGB: '17, 37, 82 ',
        Price:Math.floor(2500 *colorCostMultiplier),
    },
    {
        ID: '76',
        Description: 'Util Midnight Blue',
        Hex: '#1b203e',
        RGB: '27, 32, 62 ',
        Price:Math.floor(2500 *colorCostMultiplier),
    },
    {
        ID: '77',
        Description: 'Util Blue',
        Hex: '#275190',
        RGB: '39, 81, 144 ',
        Price:Math.floor(2500 *colorCostMultiplier),
    },
    {
        ID: '78',
        Description: 'Util Sea Foam Blue',
        Hex: '#608592',
        RGB: '96, 133, 146 ',
        Price:Math.floor(2500 *colorCostMultiplier),
    },
    {
        ID: '79',
        Description: 'Util Lightning blue',
        Hex: '#2446a8',
        RGB: '36, 70, 168 ',
        Price:Math.floor(2500 *colorCostMultiplier),
    },
    {
        ID: '80',
        Description: 'Util Maui Blue Poly',
        Hex: '#4271e1',
        RGB: '66, 113, 225 ',
        Price:Math.floor(2500 *colorCostMultiplier),
    },
    {
        ID: '81',
        Description: 'Util Bright Blue',
        Hex: '#3b39e0',
        RGB: '59, 57, 224 ',
        Price:Math.floor(2500 *colorCostMultiplier),
    },
    {
        ID: '82',
        Description: 'Matte Dark Blue',
        Hex: '#1f2852',
        RGB: '31, 40, 82 ',
        Price:Math.floor(5000 *colorCostMultiplier),
    },
    {
        ID: '83',
        Description: 'Matte Blue',
        Hex: '#253aa7',
        RGB: '37, 58, 167 ',
        Price:Math.floor(5000 *colorCostMultiplier),
    },
    {
        ID: '84',
        Description: 'Matte Midnight Blue',
        Hex: '#1c3551',
        RGB: '28, 53, 81 ',
        Price:Math.floor(5000 *colorCostMultiplier),
    },
    {
        ID: '85',
        Description: 'Worn Dark blue',
        Hex: '#4c5f81',
        RGB: '76, 95, 129 ',
        Price:Math.floor(5000 *colorCostMultiplier),
    },
    {
        ID: '86',
        Description: 'Worn Blue',
        Hex: '#58688e',
        RGB: '88, 104, 142 ',
        Price:Math.floor(5000 *colorCostMultiplier),
    },
    {
        ID: '87',
        Description: 'Worn Light blue',
        Hex: '#74b5d8',
        RGB: '116, 181, 216 ',
        Price:Math.floor(5000 *colorCostMultiplier),
    },
    {
        ID: '88',
        Description: 'Metallic Taxi Yellow',
        Hex: '#ffcf20',
        RGB: '255, 207, 32 ',
        Price:Math.floor(7000 *colorCostMultiplier),
    },
    {
        ID: '89',
        Description: 'Metallic Race Yellow',
        Hex: '#fbe212',
        RGB: '251, 226, 18 ',
        Price:Math.floor(7000 *colorCostMultiplier),
    },
    {
        ID: '90',
        Description: 'Metallic Bronze',
        Hex: '#916532',
        RGB: '145, 101, 50 ',
        Price:Math.floor(7000 *colorCostMultiplier),
    },
    {
        ID: '91',
        Description: 'Metallic Yellow Bird',
        Hex: '#e0e13d',
        RGB: '224, 225, 61 ',
        Price:Math.floor(7000 *colorCostMultiplier),
    },
    {
        ID: '92',
        Description: 'Metallic Lime',
        Hex: '#98d223',
        RGB: '152, 210, 35 ',
        Price:Math.floor(7000 *colorCostMultiplier),
    },
    {
        ID: '93',
        Description: 'Metallic Champagne',
        Hex: '#9b8c78',
        RGB: '155, 140, 120 ',
        Price:Math.floor(7000 *colorCostMultiplier),
    },
    {
        ID: '94',
        Description: 'Metallic Pueblo Beige',
        Hex: '#503218',
        RGB: '80, 50, 24 ',
        Price:Math.floor(7000 *colorCostMultiplier),
    },
    {
        ID: '95',
        Description: 'Metallic Dark Ivory',
        Hex: '#473f2b',
        RGB: '71, 63, 43 ',
        Price:Math.floor(7000 *colorCostMultiplier),
    },
    {
        ID: '96',
        Description: 'Metallic Choco Brown',
        Hex: '#221b19',
        RGB: '34, 27, 25 ',
        Price:Math.floor(7000 *colorCostMultiplier),
    },
    {
        ID: '97',
        Description: 'Metallic Golden Brown',
        Hex: '#653f23',
        RGB: '101, 63, 35 ',
        Price:Math.floor(7000 *colorCostMultiplier),
    },
    {
        ID: '98',
        Description: 'Metallic Light Brown',
        Hex: '#775c3e',
        RGB: '119, 92, 62 ',
        Price:Math.floor(7000 *colorCostMultiplier),
    },
    {
        ID: '99',
        Description: 'Metallic Straw Beige',
        Hex: '#ac9975',
        RGB: '172, 153, 117 ',
        Price:Math.floor(7000 *colorCostMultiplier),
    },
    {
        ID: '100',
        Description: 'Metallic Moss Brown',
        Hex: '#6c6b4b',
        RGB: '108, 107, 75 ',
        Price:Math.floor(7000 *colorCostMultiplier),
    },
    {
        ID: '101',
        Description: 'Metallic Biston Brown',
        Hex: '#402e2b',
        RGB: '64, 46, 43 ',
        Price:Math.floor(7000 *colorCostMultiplier),
    },
    {
        ID: '102',
        Description: 'Metallic Beechwood',
        Hex: '#a4965f',
        RGB: '164, 150, 95 ',
        Price:Math.floor(7000 *colorCostMultiplier),
    },
    {
        ID: '103',
        Description: 'Metallic Dark Beechwood',
        Hex: '#46231a',
        RGB: '70, 35, 26 ',
        Price:Math.floor(7000 *colorCostMultiplier),
    },
    {
        ID: '104',
        Description: 'Metallic Choco Orange',
        Hex: '#752b19',
        RGB: '117, 43, 25 ',
        Price:Math.floor(7000 *colorCostMultiplier),
    },
    {
        ID: '105',
        Description: 'Metallic Beach Sand',
        Hex: '#bfae7b',
        RGB: '191, 174, 123 ',
        Price:Math.floor(7000 *colorCostMultiplier),
    },
    {
        ID: '106',
        Description: 'Metallic Sun Bleeched Sand',
        Hex: '#dfd5b2',
        RGB: '223, 213, 178 ',
        Price:Math.floor(7000 *colorCostMultiplier),
    },
    {
        ID: '107',
        Description: 'Metallic Cream',
        Hex: '#f7edd5',
        RGB: '247, 237, 213 ',
        Price:Math.floor(7000 *colorCostMultiplier),
    },
    {
        ID: '108',
        Description: 'Util Brown',
        Hex: '#3a2a1b',
        RGB: '58, 42, 27 ',
        Price:Math.floor(2500 *colorCostMultiplier),
    },
    {
        ID: '109',
        Description: 'Util Medium Brown',
        Hex: '#785f33',
        RGB: '120, 95, 51 ',
        Price:Math.floor(2500 *colorCostMultiplier),
    },
    {
        ID: '110',
        Description: 'Util Light Brown',
        Hex: '#b5a079',
        RGB: '181, 160, 121 ',
        Price:Math.floor(2500 *colorCostMultiplier),
    },
    {
        ID: '111',
        Description: 'Metallic White',
        Hex: '#fffff6',
        RGB: '255, 255, 246 ',
        Price:Math.floor(7000 *colorCostMultiplier),
    },
    {
        ID: '112',
        Description: 'Metallic Frost White',
        Hex: '#eaeaea',
        RGB: '234, 234, 234 ',
        Price:Math.floor(7000 *colorCostMultiplier),
    },
    {
        ID: '113',
        Description: 'Worn Honey Beige',
        Hex: '#b0ab94',
        RGB: '176, 171, 148 ',
        Price:Math.floor(5000 *colorCostMultiplier),
    },
    {
        ID: '114',
        Description: 'Worn Brown',
        Hex: '#453831',
        RGB: '69, 56, 49 ',
        Price:Math.floor(5000 *colorCostMultiplier),
    },
    {
        ID: '115',
        Description: 'Worn Dark Brown',
        Hex: '#2a282b',
        RGB: '42, 40, 43 ',
        Price:Math.floor(5000 *colorCostMultiplier),
    },
    {
        ID: '116',
        Description: 'Worn straw beige',
        Hex: '#726c57',
        RGB: '114, 108, 87 ',
        Price:Math.floor(5000 *colorCostMultiplier),
    },
    {
        ID: '117',
        Description: 'Brushed Steel',
        Hex: '#6a747c',
        RGB: '106, 116, 124 ',
        Price:Math.floor(500000 *colorCostMultiplier),
    },
    {
        ID: '118',
        Description: 'Brushed Black steel',
        Hex: '#354158',
        RGB: '53, 65, 88 ',
        Price:Math.floor(500000 *colorCostMultiplier),
    },
    {
        ID: '119',
        Description: 'Brushed Aluminium',
        Hex: '#9ba0a8',
        RGB: '155, 160, 168 ',
        Price:Math.floor(500000 *colorCostMultiplier),
    },
    {
        ID: '120',
        Description: 'Chrome',
        Hex: '#5870a1',
        RGB: '88, 112, 161 ',
        Price:Math.floor(1500000 *colorCostMultiplier),
    },
    {
        ID: '121',
        Description: 'Worn Off White',
        Hex: '#eae6de',
        RGB: '234, 230, 222 ',
        Price:Math.floor(5000 *colorCostMultiplier),
    },
    {
        ID: '122',
        Description: 'Util Off White',
        Hex: '#dfddd0',
        RGB: '223, 221, 208 ',
        Price:Math.floor(2500 *colorCostMultiplier),
    },
    {
        ID: '123',
        Description: 'Worn Orange',
        Hex: '#f2ad2e',
        RGB: '242, 173, 46 ',
        Price:Math.floor(5000 *colorCostMultiplier),
    },
    {
        ID: '124',
        Description: 'Worn Light Orange',
        Hex: '#f9a458',
        RGB: '249, 164, 88 ',
        Price:Math.floor(5000 *colorCostMultiplier),
    },
    {
        ID: '125',
        Description: 'Metallic Securicor Green',
        Hex: '#83c566',
        RGB: '131, 197, 102 ',
        Price:Math.floor(7000 *colorCostMultiplier),
    },
    {
        ID: '126',
        Description: 'Worn Taxi Yellow',
        Hex: '#f1cc40',
        RGB: '241, 204, 64 ',
        Price:Math.floor(5000 *colorCostMultiplier),
    },
    {
        ID: '127',
        Description: 'police car blue',
        Hex: '#4cc3da',
        RGB: '76, 195, 218 ',
        Price:Math.floor(5000 *colorCostMultiplier),
    },
    {
        ID: '128',
        Description: 'Matte Green',
        Hex: '#4e6443',
        RGB: '78, 100, 67 ',
        Price:Math.floor(5000 *colorCostMultiplier),
    },
    {
        ID: '129',
        Description: 'Matte Brown',
        Hex: '#bcac8f',
        RGB: '188, 172, 143 ',
        Price:Math.floor(5000 *colorCostMultiplier),
    },
    {
        ID: '130',
        Description: 'Worn Orange',
        Hex: '#f8b658',
        RGB: '248, 182, 88 ',
        Price:Math.floor(5000 *colorCostMultiplier),
    },
    {
        ID: '131',
        Description: 'Matte White',
        Hex: '#fcf9f1',
        RGB: '252, 249, 241 ',
        Price:Math.floor(5000 *colorCostMultiplier),
    },
    {
        ID: '132',
        Description: 'Worn White',
        Hex: '#fffffb',
        RGB: '255, 255, 251 ',
        Price:Math.floor(5000 *colorCostMultiplier),
    },
    {
        ID: '133',
        Description: 'Worn Olive Army Green',
        Hex: '#81844c',
        RGB: '129, 132, 76 ',
        Price:Math.floor(5000 *colorCostMultiplier),
    },
    {
        ID: '134',
        Description: 'Pure White',
        Hex: '#ffffff',
        RGB: '255, 255, 255 ',
        Price:Math.floor(5000 *colorCostMultiplier),
    },
    {
        ID: '135',
        Description: 'Hot Pink',
        Hex: '#f21f99',
        RGB: '242, 31, 153 ',
        Price:Math.floor(5000 *colorCostMultiplier),
    },
    {
        ID: '136',
        Description: 'Salmon pink',
        Hex: '#fdd6cd',
        RGB: '253, 214, 205 ',
        Price:Math.floor(5000 *colorCostMultiplier),
    },
    {
        ID: '137',
        Description: 'Metallic Vermillion Pink',
        Hex: '#df5891',
        RGB: '223, 88, 145 ',
        Price:Math.floor(7000 *colorCostMultiplier),
    },
    {
        ID: '138',
        Description: 'Orange',
        Hex: '#f6ae20',
        RGB: '246, 174, 32 ',
        Price:Math.floor(5000 *colorCostMultiplier),
    },
    {
        ID: '139',
        Description: 'Green',
        Hex: '#b0ee6e',
        RGB: '176, 238, 110 ',
        Price:Math.floor(5000 *colorCostMultiplier),
    },
    {
        ID: '140',
        Description: 'Blue',
        Hex: '#08e9fa',
        RGB: '8, 233, 250 ',
        Price:Math.floor(5000 *colorCostMultiplier),
    },
    {
        ID: '141',
        Description: 'Metallic Black Blue',
        Hex: '#0a0c17',
        RGB: '10, 12, 23 ',
        Price:Math.floor(7000 *colorCostMultiplier),
    },
    {
        ID: '142',
        Description: 'Metallic Black Purple',
        Hex: '#0c0d18',
        RGB: '12, 13, 24 ',
        Price:Math.floor(7000 *colorCostMultiplier),
    },
    {
        ID: '143',
        Description: 'Metallic Black Red',
        Hex: '#0e0d14',
        RGB: '14, 13, 20 ',
        Price:Math.floor(7000 *colorCostMultiplier),
    },
    {
        ID: '144',
        Description: 'hunter green',
        Hex: '#9f9e8a',
        RGB: '159, 158, 138 ',
        Price:Math.floor(5000 *colorCostMultiplier),
    },
    {
        ID: '145',
        Description: 'Metallic Purple',
        Hex: '#621276',
        RGB: '98, 18, 118 ',
        Price:Math.floor(7000 *colorCostMultiplier),
    },
    {
        ID: '146',
        Description: 'Metallic V Dark Blue',
        Hex: '#0b1421',
        RGB: '11, 20, 33 ',
        Price:Math.floor(7000 *colorCostMultiplier),
    },
    {
        ID: '147',
        Description: 'MOD SHOP BLACK1',
        Hex: '#11141a',
        RGB: '17, 20, 26 ',
        Price:Math.floor(5000 *colorCostMultiplier),
    },
    {
        ID: '148',
        Description: 'Matte Purple',
        Hex: '#6b1f7b',
        RGB: '107, 31, 123 ',
        Price:Math.floor(5000 *colorCostMultiplier),
    },
    {
        ID: '149',
        Description: 'Matte Dark Purple',
        Hex: '#1e1d22',
        RGB: '30, 29, 34 ',
        Price:Math.floor(5000 *colorCostMultiplier),
    },
    {
        ID: '150',
        Description: 'Metallic Lava Red',
        Hex: '#bc1917',
        RGB: '188, 25, 23 ',
        Price:Math.floor(7000 *colorCostMultiplier),
    },
    {
        ID: '151',
        Description: 'Matte Forest Green',
        Hex: '#2d362a',
        RGB: '45, 54, 42 ',
        Price:Math.floor(5000 *colorCostMultiplier),
    },
    {
        ID: '152',
        Description: 'Matte Olive Drab',
        Hex: '#696748',
        RGB: '105, 103, 72 ',
        Price:Math.floor(5000 *colorCostMultiplier),
    },
    {
        ID: '153',
        Description: 'Matte Desert Brown',
        Hex: '#7a6c55',
        RGB: '122, 108, 85 ',
        Price:Math.floor(5000 *colorCostMultiplier),
    },
    {
        ID: '154',
        Description: 'Matte Desert Tan',
        Hex: '#c3b492',
        RGB: '195, 180, 146 ',
        Price:Math.floor(5000 *colorCostMultiplier),
    },
    {
        ID: '155',
        Description: 'Matte Foliage Green',
        Hex: '#5a6352',
        RGB: '90, 99, 82 ',
        Price:Math.floor(5000 *colorCostMultiplier),
    },
    {
        ID: '156',
        Description: 'DEFAULT ALLOY COLOR',
        Hex: '#81827f',
        RGB: '129, 130, 127 ',
        Price:Math.floor(5000 *colorCostMultiplier),
    },
    {
        ID: '157',
        Description: 'Epsilon Blue',
        Hex: '#afd6e4',
        RGB: '175, 214, 228 ',
        Price:Math.floor(5000 *colorCostMultiplier),
    },
    {
        ID: '158',
        Description: 'Pure Gold',
        Hex: '#7a6440',
        RGB: '122, 100, 64 ',
        Price:Math.floor(5000 *colorCostMultiplier),
    },
    {
        ID: '159',
        Description: 'Brushed Gold',
        Hex: '#7f6a48',
        RGB: '127, 106, 72 ',
        Price:Math.floor(5000 *colorCostMultiplier),
    },
];



 const ColorTemplateXenon= [
    {
        Description: 'White',
        Hex: '#ffffff',
        ID: '0',
        Price:Math.floor( 3300 * colorCostMultiplier),
    },
    {
        Description: 'Blue',
        Hex: '#0000ff',
        ID: '1',
        Price:Math.floor( 3300 * colorCostMultiplier),
    },
    {
        Description: 'Light Blue',
        Hex: '#add8e6',
        ID: '2',
        Price:Math.floor( 3300 * colorCostMultiplier),
    },
    {
        Description: 'Green',
        Hex: '#008000',
        ID: '3',
        Price:Math.floor( 3300 * colorCostMultiplier),
    },
    {
        Description: 'Light Green',
        Hex: '#90ee90',
        ID: '4',
        Price:Math.floor( 3300 * colorCostMultiplier),
    },
    {
        Description: 'Light Yellow',
        Hex: '#ffffe0',
        ID: '5',
        Price:Math.floor( 3300 * colorCostMultiplier),
    },
    {
        Description: 'Yellow',
        Hex: '#ffff00',
        ID: '6',
        Price:Math.floor( 3300 * colorCostMultiplier),
    },
    {
        Description: 'Orange',
        Hex: '#ffa500',
        ID: '7',
        Price:Math.floor( 3300 * colorCostMultiplier),
    },
    {
        Description: 'Red',
        Hex: '#ff0000',
        ID: '8',
        Price:Math.floor( 3300 * colorCostMultiplier),
    },
    {
        Description: 'Light Pink',
        Hex: '#ffb6c1',
        ID: '9',
        Price:Math.floor( 3300 * colorCostMultiplier),
    },
    {
        Description: 'Pink',
        Hex: '#ffc0cb',
        ID: '10',
        Price:Math.floor( 4700 * colorCostMultiplier),
    },
    {
        Description: 'Purple',
        Hex: '#800080',
        ID: '11',
        Price:Math.floor( 4700 * colorCostMultiplier),
    },
    {
        Description: 'Light Purple',
        Hex: '#cf67cf',
        ID: '12',
        Price:Math.floor( 4700 * colorCostMultiplier),
    },

];


const parts =  {
    Engine: {
        basePercentage: 0.1,
        step: 0.08
    },
    Suspension: {
        basePercentage: 0.1,
        step: 0.08
    },
    Transmission: {
        basePercentage: 0.1,
        step: 0.08
    },
    Armor: {
        basePercentage: 0.1,
        step: 0.08
    },
    Turbo: {
        basePercentage: 0.1,
        step: 0.08
    },
    Brake: {
        basePercentage: 0.1,
        step: 0.08
    },

    AirFilter: {
        basePercentage: 0.02,
        step: 0
    },
    ArchCover: {
        basePercentage: 0.02,
        step: 0
    },
    BackWheel: {
        basePercentage: 0.02,
        step: 0
    },
    DashBoard: {
        basePercentage: 0.02,
        step: 0
    },
    Dial: {
        basePercentage: 0.02,
        step: 0
    },
    DoorSpeaker: {
        basePercentage: 0.02,
        step: 0
    },
    EngineBlock: {
        basePercentage: 0.03,
        step: 0
    },
    Exhaust: {
        basePercentage: 0.02,
        step: 0
    },
    FrontBumper: {
        basePercentage: 0.02,
        step: 0
    },
    FrontWheels: {
        basePercentage: 0.02,
        step: 0
    },
    Grill: {
        basePercentage: 0.02,
        step: 0
    },
    Hood: {
        basePercentage: 0.03,
        step: 0
    },
    Horns: {
        basePercentage: 0.02,
        step: 0
    },
    Hydraulics: {
        basePercentage: 0.02,
        step: 0
    },
    LeftFender: {
        basePercentage: 0.02,
        step: 0
    },
    Livery: {
        basePercentage: 0.03,
        step: 0
    },
    Ornaments: {
        basePercentage: 0.02,
        step: 0
    },
    Plaques: {
        basePercentage: 0.02,
        step: 0
    },
    Plate: {
        basePercentage: 0.02,
        step: 0
    },
    PlateHolder: {
        basePercentage: 0.02,
        step: 0
    },
    RearBumper: {
        basePercentage: 0.02,
        step: 0
    },
    RightFender: {
        basePercentage: 0.02,
        step: 0
    },
    Roof: {
        basePercentage: 0.02,
        step: 0
    },
    Seats: {
        basePercentage: 0.02,
        step: 0
    },
    ShifterLeaver: {
        basePercentage: 0.02,
        step: 0
    },
    SideSkirt: {
        basePercentage: 0.02,
        step: 0
    },
    Speaker: {
        basePercentage: 0.02,
        step: 0
    },
    Spoiler: {
        basePercentage: 0.02,
        step: 0
    },
    SteeringWheel: {
        basePercentage: 0.02,
        step: 0
    },
    Struts: {
        basePercentage: 0.02,
        step: 0
    },
    Tank: {
        basePercentage: 0.02,
        step: 0
    },
    TrimDesign: {
        basePercentage: 0.02,
        step: 0
    },
    Trunk: {
        basePercentage: 0.02,
        step: 0
    },
    VanityPlate: {
        basePercentage: 0.02,
        step: 0
    },
    Window: {
        basePercentage: 0.01,
        step: 0
    },
    Xenon: {
        basePercentage: 0.02,
        step: 0
    },
    PrimaryColor: {
        basePercentage: 0.02,
        step: 0
    },
    SecondaryColor: {
        basePercentage: 0.02,
        step: 0
    },
    PearleScentColor: {
        basePercentage: 0.02,
        step: 0
    },
    XenonColor: {
        basePercentage: 0.04,
        step: 0
    },
    TyreSmokeColor: {
        basePercentage: 0.02,
        step: 0
    },
    NeonColor: {
        basePercentage: 0.02,
        step: 0
    },
    Neon: {
        basePercentage: 0.02,
        step: 0
    },
    Aerials: {
        basePercentage: 0.02,
        step: 0
    },
    Frame: {
        basePercentage: 0.02,
        step: 0
    },
    WheelType: {
        basePercentage: 0.03,
        step: 0
    },
    WheelColor: {
        basePercentage: 0.02,
        step: 0
    },
}

export const tunningConfig = {
    ColorTemplate,
    ColorTemplateXenon,
    parts,
}







//female 203   24
 
//male 165  23 
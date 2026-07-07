import { tattoos } from './tatooList/list.js';

// tatooList/list.js is the single source of truth: an object grouped by
// collection name. flatten it into one array, injecting the collection key
// so every tattoo keeps the { collection, ... } shape the UI expects.
const Tattoos = Object.entries(tattoos).flatMap(([collection, items]) =>
    items.map((item) => ({ collection, ...item })),
);

const TattoosMale = Tattoos.filter((item) => {
    return item.HashNameMale.length !== 0;
});
const TattooerFemale = Tattoos.filter((item) => {
    return item.HashNameFemale.length !== 0;
});

const F_Head = TattooerFemale.filter((tattoo) => {
    return tattoo.Zone === 'ZONE_HEAD';
});
const F_LeftArm = TattooerFemale.filter((tattoo) => {
    return tattoo.Zone === 'ZONE_LEFT_ARM';
});
const F_RightArm = TattooerFemale.filter((tattoo) => {
    return tattoo.Zone === 'ZONE_RIGHT_ARM';
});
const F_Torso = TattooerFemale.filter((tattoo) => {
    return tattoo.Zone === 'ZONE_TORSO';
});
const F_LeftLeg = TattooerFemale.filter((tattoo) => {
    return tattoo.Zone === 'ZONE_LEFT_LEG';
});
const F_RightLeg = TattooerFemale.filter((tattoo) => {
    return tattoo.Zone === 'ZONE_RIGHT_LEG';
});

const M_Head = TattoosMale.filter((tattoo) => {
    return tattoo.Zone === 'ZONE_HEAD';
});
const M_LeftArm = TattoosMale.filter((tattoo) => {
    return tattoo.Zone === 'ZONE_LEFT_ARM';
});
const M_RightArm = TattoosMale.filter((tattoo) => {
    return tattoo.Zone === 'ZONE_RIGHT_ARM';
});
const M_Torso = TattoosMale.filter((tattoo) => {
    return tattoo.Zone === 'ZONE_TORSO';
});
const M_LeftLeg = TattoosMale.filter((tattoo) => {
    return tattoo.Zone === 'ZONE_LEFT_LEG';
});
const M_RightLeg = TattoosMale.filter((tattoo) => {
    return tattoo.Zone === 'ZONE_RIGHT_LEG';
});

export const MaleTattooPackage = {
    M_Head,
    M_LeftArm,
    M_RightArm,
    M_Torso,
    M_LeftLeg,
    M_RightLeg,
};

export const FemaleTattooPackage = {
    F_Head,
    F_LeftArm,
    F_RightArm,
    F_Torso,
    F_LeftLeg,
    F_RightLeg,
};

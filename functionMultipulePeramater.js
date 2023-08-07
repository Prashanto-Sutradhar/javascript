function woodCalculator(chairQuantity, tableQuantity, bedQuantity) {
    const perChairWood = 3;
    const perTableWood = 7;
    const perBedWood = 6;


    const totalChairWood = perChairWood * chairQuantity;
    const totalTableWood = perTableWood * tableQuantity;
    const totalBedWood = perBedWood * bedQuantity;
    console.log('total Chair wood:', totalChairWood);
    console.log('total Table wood:', totalTableWood);
    console.log('total Bed wood:', totalBedWood);
    const totatWood = totalChairWood + totalTableWood + totalBedWood;
    console.log('total Wood :', totatWood);
}

const wood = woodCalculator(2, 2, 2);
console.log(wood);
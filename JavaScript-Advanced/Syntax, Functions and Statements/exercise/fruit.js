function calcMoney(fruitType, weightInGrams, pricePerKg) {
    let weightInKg = weightInGrams / 1000;
    const price = pricePerKg * weightInKg;
    console.log(`I need $${price.toFixed(2)} to buy ${weightInKg.toFixed(2)} kilograms ${fruitType}.`)
}

calcMoney('orange', 2500, 1.80);
calcMoney('apple', 1563, 2.35);
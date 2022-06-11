function cityRec(cityName, population, treasury) {
    const result = {
        name: cityName,
        population: population, 
        treasury: treasury
    };

    return result;
}

console.log(cityRec('Tortuga',7000,15000));
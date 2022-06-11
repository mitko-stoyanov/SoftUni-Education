function findPopulation(array) {
    let result = {};

    for (const pair of array) {
        const tokens = pair.split(' <-> ');
        cityName = tokens[0];
        population = Number(tokens[1]);

        if (result[cityName] != undefined) {
            population += result[cityName];
        }

        result[cityName] = population;
    }

    for (let [name, pop] of Object.entries(result)) {
        console.log(`${name} : ${pop}`);
    }
}

findPopulation(['Sofia <-> 1200000',
    'Montana <-> 20000',
    'New York <-> 10000000',
    'Washington <-> 2345000',
    'Las Vegas <-> 1000000']
);
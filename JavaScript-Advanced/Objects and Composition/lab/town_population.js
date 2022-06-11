function findPopulation(array) {
    let result = {};

    for(const pair of array) {
        const tokens = pair.split(' <-> ');
        cityName = tokens[0];
        population = Number(tokens[1]);

        if(result[cityName] != undefined){
            result[cityName] += population;
        } else{
            result[cityName] = population;
        }
    }

    for(let town in result){
        console.log(`${town} : ${result[town]}`)
    }
}

findPopulation(['Sofia <-> 1200000',
    'Montana <-> 20000',
    'New York <-> 10000000',
    'Washington <-> 2345000',
    'Las Vegas <-> 1000000']
);
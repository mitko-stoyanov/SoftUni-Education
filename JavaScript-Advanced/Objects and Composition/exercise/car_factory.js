function createCar(object) {
    const allEngines = [
        { power: 90, volume: 1800 },
        { power: 120, volume: 2400 },
        { power: 200, volume: 3500 }
    ];

    const allTypes = [
        { type: 'hatchback', color: object.color },
        { type: 'coupe', color: object.color }
    ];

    let wantedWheels = object.wheelsize;
    if (wantedWheels % 2 == 0) {
        wantedWheels -= 1;
    }

    return {
        model: object.model,
        engine: allEngines.filter(p => p.power >= object.power).sort((a, b) => a - b)[0],
        carriage: allTypes.filter(t => t.type == object.carriage)[0],
        wheels: [wantedWheels, wantedWheels, wantedWheels, wantedWheels]
    }
}

console.log(createCar({
    model: 'VW Golf II',
    power: 90,
    color: 'blue',
    carriage: 'hatchback',
    wheelsize: 14
}
));

console.log(createCar({
    model: 'Opel Vectra',
    power: 110,
    color: 'grey',
    carriage: 'coupe',
    wheelsize: 17
}
));
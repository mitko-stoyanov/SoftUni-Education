function areaVol(areaIn, volIn, input) {
    const data = JSON.parse(input);
    const cube = data[0];
    let result = [];

    for (const cube of data) {
        const current = {
            area: areaIn.call(cube),
            volume: volIn.call(cube)
        };
        result.push(current);
    }

    return result;
}
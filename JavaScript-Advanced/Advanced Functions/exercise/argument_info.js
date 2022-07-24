function solve(...params) {
    const types = {}

    for (const item of params) {
        const type = typeof item;
        console.log(`${type}: ${item}`);
        if(types[type] == undefined) {
            types[type] = 0;
        }

        types[type]++;
    }

    const result = Object.entries(types).sort((a, b) => {
        return b[1] - a[1];
    });

    for(let [type, count] of result) {
        console.log(`${type} = ${count}`);
    }
}

solve('cat', 42, function () { console.log('Hello world!'); });
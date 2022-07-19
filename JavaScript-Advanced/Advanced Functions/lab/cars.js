function solve(input) {
    const result = {};

    const car = {
        create: (n, inherits, n2) =>
            (result[n] = inherits ? Object.create(result[n2]) : {}),
        set: (n, k, v) => (result[n][k] = v),
        print: n => {
            const entry = [];

            for (const key in result[n]) {
                entry.push(`${key}:${result[n][key]}`);
            }
            console.log(entry.join(','));
        },
    }

    input.forEach(x => {
        const [c, n, k, v] = x.split(" ");

        car[c](n, k, v);
    });
}

solve(['create c1',
    'create c2 inherit c1',
    'set c1 color red',
    'set c2 model new',
    'print c1',
    'print c2']);
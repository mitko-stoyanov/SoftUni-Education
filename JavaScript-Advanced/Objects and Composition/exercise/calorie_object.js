function makeObject(array) {
    let result = {};

    for(let i=0; i<array.length - 1; i+=2) {
        result[array[i]] = Number(array[i + 1]);
    }

    console.log(result);
}

makeObject(['Yoghurt', '48', 'Rise', '138', 'Apple', '52']);
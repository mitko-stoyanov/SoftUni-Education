function makeObject(array) {
    let result = {};

    while(array.length != 0){
        result[array.shift()] = Number(array.shift());
    }

    console.log(result);
}

makeObject(['Yoghurt', '48', 'Rise', '138', 'Apple', '52']);
function solve(array) {
    let result = [];
    class Town {
        constructor(town, latitude, longtitude) {
            this.Town = town;
            this.Latitude = Number(latitude);
            this.Longitude = Number(longtitude);
        }
    }
    for (let i = 1; i < array.length; i++) {
        let arr = array[i].split('|').map(t => t.trim()).filter(x => x.length != 0);
        let townName = arr[0];
        let latitude = Number(arr[1]).toFixed(2);
        let longtitude = Number(arr[2]).toFixed(2);
        let town = new Town(townName, latitude, longtitude);
        result.push(town);
    }
    return JSON.stringify(result);
}

solve(['| Town | Latitude | Longitude |',
    '| Sofia | 42.696552 | 23.32601 |',
    '| Beijing | 39.913818 | 116.363625 |']
);
function findSubset(array) {
    let result = [];
    let biggestNum = array[0];

    for(let i=0; i<array.length; i++){
        if(array[i] >= biggestNum){
            result.push(array[i]);
            biggestNum = array[i];
        }
    }

    return result;
}

console.log(findSubset([1, 3, 8, 4, 10, 12, 3, 2, 24]));
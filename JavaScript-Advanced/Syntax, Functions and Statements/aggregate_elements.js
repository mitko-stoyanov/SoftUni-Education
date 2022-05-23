function solve(array) {
    let sum = 0;
    let inverseSum = 0;

    array.forEach(element => sum += element);
    array.forEach(element => inverseSum += 1 / element);

    console.log(sum);
    console.log(inverseSum)
    console.log(array.join(''))
}

solve([1, 2, 3]);
solve([2, 4, 8, 16]);
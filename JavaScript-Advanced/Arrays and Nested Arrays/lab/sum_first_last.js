function findSum(array){
    let firstElement = Number(array.shift());
    let lastElement = Number(array.pop());
    let totalSum = firstElement + lastElement;

    console.log(totalSum);
}

findSum(['20', '30', '40']);
findSum(['5', '10']);
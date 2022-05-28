function findBiggest(matrix) {
    let biggestNum = Number.MIN_SAFE_INTEGER;
    let currentBigestNum = 0;

    for(let i=0; i<matrix.length; i++){
        currentBigestNum = Math.max(...matrix[i]);
        if(currentBigestNum >= biggestNum){
            biggestNum = currentBigestNum;
        }
    }

    console.log(biggestNum);
}

findBiggest([[3, 5, 7, 12],[-1, 4, 33, 2],[8, 3, 0, 4]] );

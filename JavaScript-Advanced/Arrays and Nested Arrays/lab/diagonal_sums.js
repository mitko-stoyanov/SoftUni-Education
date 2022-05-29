function findSum(matrix) {
    let firstDiagonalSum = 0;
    let secondDiagonalSum = 0;

    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix.length; j++) {
            if (i == j) {
                firstDiagonalSum += matrix[i][j];
            }
            if (i + j == matrix.length - 1) {
                secondDiagonalSum += matrix[j][i];
            }
        }
    }
    console.log(firstDiagonalSum, secondDiagonalSum);
}

findSum([[20, 40], [10, 60]]);
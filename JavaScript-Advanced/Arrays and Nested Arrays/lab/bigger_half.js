function biggerHalf(array) {
    array.sort((a, b) => a - b);

    let half = array.slice(-Math.ceil(array.length / 2));
    return half;
}

biggerHalf([4, 7, 2, 5]);
biggerHalf([3, 19, 14, 7, 2, 19, 6]);

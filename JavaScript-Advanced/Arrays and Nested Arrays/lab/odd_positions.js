function findElements(array) {
    const odd = array.filter((x, i) => i % 2 != 0);
    const doubled = odd.map(x => x * 2);
    doubled.reverse(); 

    console.log(doubled.join(' '))
}

findElements([3, 0, 10, 4, 7, 3]);
findElements([10, 15, 20, 25]);
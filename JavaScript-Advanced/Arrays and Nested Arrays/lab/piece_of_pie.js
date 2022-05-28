function solve(array, firstTarget, secondTarget) {
    firstIndex = array.indexOf(firstTarget);
    secondIndex = array.indexOf(secondTarget);
    return array.slice(firstIndex, secondIndex + 1);
}

console.log(solve(['Pumpkin Pie',
'Key Lime Pie',
'Cherry Pie',
'Lemon Meringue Pie',
'Sugar Cream Pie'],
'Key Lime Pie',
'Lemon Meringue Pie'
));
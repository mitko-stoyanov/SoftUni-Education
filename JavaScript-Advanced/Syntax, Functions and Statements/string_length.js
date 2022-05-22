function findLength(firstStr, secondStr, thirdStr){
    let finalStr = firstStr + secondStr + thirdStr;
    let totalLength = finalStr.length;
    let averageLength = Math.floor(totalLength / 3);

    console.log(totalLength);
    console.log(averageLength);
}

findLength('chocolate', 'ice cream', 'cake');
findLength('pasta', '5', '22.3');
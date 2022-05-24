function findSum(firstStr, secondStr){
    let totalSum = 0;
    startNum = Number(firstStr);
    endNum = Number(secondStr);

    for(let i=startNum; i<=endNum; i++){
        totalSum += i;
    }

    console.log(totalSum);
}

findSum('1', '5');
findSum('-8', '20')
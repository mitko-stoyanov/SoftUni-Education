function largestNum(firstNum, secondNum, thirdNum) {
    const numsArr = [firstNum, secondNum, thirdNum];
    const maxNum = Math.max(...numsArr);

    console.log(`The largest number is ${maxNum}.`);
}

largestNum(5, -3, 16);
largestNum(-3, -5, -22.5);
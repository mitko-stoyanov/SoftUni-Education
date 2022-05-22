function findResult(firstNum, secondNum, operator) {
    let result = 0;

    if(operator == '+'){
        result = firstNum + secondNum;
    } else if(operator == '-'){
        result = firstNum - secondNum;
    } else if(operator == '*'){
        result = firstNum * secondNum;
    } else if(operator == '/'){
        result = firstNum / secondNum;
    } else if(operator == '%'){
        result = firstNum % secondNum;
    } else if(operator == '**'){
        result = firstNum ** secondNum;
    }

    console.log(result);
}

findResult(5, 6, '+')
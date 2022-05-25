function validityChecker(x1, y1, x2, y2) {

    let firstCase = Math.sqrt((0 - x1) ** 2 + (0 - y1) ** 2);
    if(Number.isInteger(firstCase)){
        console.log(`{${x1}, ${y1}} to {0, 0} is valid`);
    } else{
        console.log(`{${x1}, ${y1}} to {0, 0} is invalid`);
    }

    let secondCase = Math.sqrt((x2 - 0) ** 2 + (y2 - 0) ** 2);
    if(Number.isInteger(secondCase)){
        console.log(`{${x2}, ${y2}} to {0, 0} is valid`);
    } else{
        console.log(`{${x2}, ${y2}} to {0, 0} is invalid`);
    }

    let thirdCase = Math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2);
    if(Number.isInteger(thirdCase)){
        console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is valid`);
    } else{
        console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is invalid`);
    }
}

// validityChecker(3, 0, 0, 4);
validityChecker(2, 1, 1, 1);
function sameNumber(number) {
    let input = String(number)
    let firstDigit = input[0];
    let isSame = true;

    let totalSum = 0;
    for(let i=0; i<input.length; i++){
        if(Number(input[i]) != firstDigit){
            isSame = false;
        }
        totalSum += Number(input[i]);
    }

    console.log(isSame);
    console.log(totalSum);
}

sameNumber(2222222);
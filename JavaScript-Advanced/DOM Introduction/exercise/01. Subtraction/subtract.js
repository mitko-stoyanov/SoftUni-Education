function subtract() {
    const firstNum = Number(document.getElementById('firstNumber').value);
    const secondNum = Number(document.getElementById('secondNumber').value);
    const result = firstNum - secondNum;

    document.getElementById('result').textContent = result;
}
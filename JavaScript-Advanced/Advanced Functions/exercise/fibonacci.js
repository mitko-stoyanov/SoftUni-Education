function getFibonacci() {
    let prev = 0;
    let curr = 1;

    return function () {
        const next = prev + curr;
        prev = curr;
        curr = next;

        return prev;
    }
}

let fib = getFibonacci();
console.log(fib())
console.log(fib())
console.log(fib())
console.log(fib())
console.log(fib())
console.log(fib())
console.log(fib())
function fibonacci(number) {
    if (number == 0)
        return 0;
    if (number == 1 || number == 2)
        return 1;
    return fibonacci(number - 1) + fibonacci(number - 2);
}

let fibIndex = +process.argv[2];

if (fibIndex < 0)
    console.log("Entered number is negative");
else
    console.log("Fibonacci =", fibonacci(fibIndex));
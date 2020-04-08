let number = +process.argv[2];
let sum = 0;
while (number != 0) {
    sum = sum + (number % 10);
    number = (number / 10) | 0;
}
console.log("Sum =", sum);
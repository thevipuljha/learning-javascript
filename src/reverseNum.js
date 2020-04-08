let number = +process.argv[2];
let sum = 0;
if (number < 0)
    number *= -1;
while (number != 0) {
    console.log(number % 10);
    number = Math.trunc(number / 10);
}
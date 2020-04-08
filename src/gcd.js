function gcd(num1, num2) {
    if (num2 == 0)
        return num1;
    return gcd(num2, num1 % num2);
}
let number1 = +process.argv[2];
let number2 = +process.argv[3];

console.log(`GCD of ${number1} , ${number2} = ${gcd(number1, number2)}`);

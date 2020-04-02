function gcd(num1,num2){
    if(num2==0)
        return num1;
    return gcd(num2,num1 % num2);
}
let num1 = +process.argv[2];
let num2 = +process.argv[3];

console.log(`GCD of ${num1} and ${num2} is ${gcd(num1,num2)}`);

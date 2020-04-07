let number = +process.argv[2], fact = 1;
for (let index = 2; index <= number; index++) {
    fact *= index;
}
console.log(`${number}! = ${fact}`);

const principal = +process.argv[2];
const rate = +process.argv[3];
const time = +process.argv[4];
const simpleInterest = (principal * rate * time * 0.01);
console.log("Simple Interest =", simpleInterest);
console.log("Final Amount =", simpleInterest + principal);
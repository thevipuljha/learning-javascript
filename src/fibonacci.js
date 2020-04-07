//Fibonacci of a number by formulae Fn = {[(√5 + 1)/2] ^ n} / √5}
//aka "The Golden Ratio"
let number = +process.argv[2];
let fibonacci = Math.round(Math.pow(1.618033989, number) / Math.sqrt(5));
console.log("Fibonacci =", fibonacci);

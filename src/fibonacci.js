//Fibonacci of a number by formulae Fn = {[(√5 + 1)/2] ^ n} / √5}
//aka "The Golden Ratio"
let num= +process.argv[2];
let fib=Math.round(Math.pow(1.618033989, num)/Math.sqrt(5));
console.log("Fibonacci =",fib);

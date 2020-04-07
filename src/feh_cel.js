const fehrenhite = +process.argv[2];
console.log("Fehrenhite =", fehrenhite);
const celsius = ((fehrenhite - 32) / 1.8).toFixed(4)
console.log("Celsius =", celsius);
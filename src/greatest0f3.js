const firstNumber = +process.argv[2];
const secondNumber = +process.argv[3];
const thirdNumber = +process.argv[4];

let max = firstNumber;
if (secondNumber > max)
	max = secondNumber;
if (thirdNumber > max)
	max = thirdNumber;

console.log("Greatest number is", max);

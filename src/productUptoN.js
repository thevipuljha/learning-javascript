let number = +process.argv[2];
let product = 1;
if (number > 0) {
	while (number >= 1) {
		product = product * number;
		number--;
	}
	console.log("Product =", product);
}
else
	console.log("Natural Number expected")
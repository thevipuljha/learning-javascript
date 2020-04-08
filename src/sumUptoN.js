let number = +process.argv[2];
if (number <= 0)
	console.log("Natural Number Expected!");
else {
	let sum = 0;
	while (number >= 1) {
		sum += number;
		number--;
	}
	console.log("Sum =", sum);
}
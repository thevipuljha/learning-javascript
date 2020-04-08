let input = +process.argv[2];
if (input < 0) {
	for (let count = -2; count >= input; count = count - 2)
		console.log(count);
}
else {
	for (let count = 2; count <= input; count = count + 2)
		console.log(count);
}
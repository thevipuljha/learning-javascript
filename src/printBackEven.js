let number = +process.argv[2];
for (let count = number; count >= 1; count--) {
	if (count % 2 == 0)
		console.log(count);
}
let number = +process.argv[2];
if (number <= 0)
	console.log("Natural Number Expected!");
else
	console.log("Sum =", number * (++number) * 0.5);
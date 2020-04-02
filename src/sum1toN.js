let num = +process.argv[2];
if (num<=0)
	console.log("Natural Number Expected!");
else
	console.log("Sum =",num*(++num)*0.5);
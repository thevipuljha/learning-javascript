let first= +process.argv[2];
let last= +process.argv[3];
let diff= +process.argv[4];
if (first>last)
	console.log("First Number must be smaller than second");
else
	for(let i=first;i<=last;i=i+diff)
			console.log(i);

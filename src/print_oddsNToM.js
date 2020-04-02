let first= +process.argv[2];
let last= +process.argv[3];
if (first>last) {
	console.log("First Number must be smaller");
}
else{
	for(let i=first;i<=last;i++)
		if (i%2!=0)
			console.log(i);
}
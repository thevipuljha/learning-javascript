let first= +process.argv[2];
let last= +process.argv[3];
let pro=1;
if (first>last)
	console.log("First input must be smaller");
else{
	for(let i=first;i<=last;i++)
		pro*=i;
	console.log("Product =",pro);
}
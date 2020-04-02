let number = +process.argv[2];
if (number<=0)
	console.log("Natural Number Expected");
else {
	let pro=1;
	while(number>=1){
    	pro=pro*number;
    	number--;
	}       
	console.log("Product =",pro);
}
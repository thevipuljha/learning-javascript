let num= +process.argv[2];
if (num<1) {
	console.log("Natural Number Expected");
}
else{
	for(let i=1;i<=num;i=i+2)
    	console.log(i);
}
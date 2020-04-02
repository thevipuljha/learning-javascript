function fib(numb){
    if(numb<=1)
	return numb;
    return fib(numb-1)+fib(numb-2);
}
let num= +process.argv[2];
if(num<0)
    console.log("Entered number is negative");
else{
    let fibn=fib(num);
    console.log("Fibonacci =",fibn);
}


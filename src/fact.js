let num= +process.argv[2],i,fact=1;
for(i=2;i<=num;i++){
    fact = fact*i;
}
console.log(`${num}! = ${fact}`);

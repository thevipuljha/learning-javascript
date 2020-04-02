let sum=0,i=0;
for(i=0;i<3;++i)
    sum = sum+(+process.argv[i+2]);

console.log("Average =",sum/i);

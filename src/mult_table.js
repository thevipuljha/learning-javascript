let number= +process.argv[2];
let times= +process.argv[3];
for(let i=0;i<=times;i++)
    console.log(number,"X",i,"=",number*i);

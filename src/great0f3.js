let num=[],max=0,index=0;
for(i=0;i<3;++i)
    {
	num[i]= +process.argv[i+2];
	if(max<num[i])
	    max=num[i];
    }
console.log(max,"is greatest of all");

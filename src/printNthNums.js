//Print every Nth number from P to Q.
//Input syntax "P Q N"
let first = +process.argv[2];
let last = +process.argv[3];
let gap = +process.argv[4];
for (let count = first; count <= last; count = count + gap)
	console.log(count);
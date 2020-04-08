function sum(start, end) {
	let sum = 0;
	for (let count = start; count <= end; count++)
		if (count % 2 == 0)
			sum += count;
	return sum;
}

const first = +process.argv[2];
const last = +process.argv[3];
if (first < last)
	console.log("Sum =", sum(first, last));
else
	console.log("Sum =", sum(last, first));
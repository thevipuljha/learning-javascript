function sum(start, end) {
	let sum = start;
	for (++start; start <= end; start++)
		sum += start;
	return sum;
}

const first = +process.argv[2];
const last = +process.argv[3];
if (first < last)
	console.log("Sum =", sum(first, last));
else
	console.log("Sum =", sum(last, first));
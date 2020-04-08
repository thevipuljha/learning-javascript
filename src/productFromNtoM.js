function multiplyAll(start, end) {
	let product = 1;
	for (start; start <= end; start++)
		product *= start;
	return product;
}
const first = +process.argv[2];
const last = +process.argv[3];

if (first > last)
	console.log("Product =", multiplyAll(last, first));
else
	console.log("Product =", multiplyAll(first, last));

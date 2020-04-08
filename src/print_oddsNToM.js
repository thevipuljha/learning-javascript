function print(start, end) {
	for (let count = start; count <= end; count++)
		if (count % 2 != 0)
			console.log(count);
}

let first = +process.argv[2];
let last = +process.argv[3];

if (first > last)
	print(last, first);
else
	print(first, last);
let number = +process.argv[2];
let times = +process.argv[3];

for (let count = 0; count <= times; count++)
    console.log(number, "X", count, "=", number * count);

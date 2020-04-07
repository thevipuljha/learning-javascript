const principal = +process.argv[2];
const rate = +process.argv[3];
const year = +process.argv[4];

const finalAmount = Math.pow(((rate / 100) + 1), year) * principal;
const compInterest = finalAmount - principal;

//console.log(`Rate(Annually) = ${rate}%`);
//console.log("Principal =", principal);
//console.log("Time(Years) =", year);

console.log("Compound Interest(Annually) = ", compInterest.toFixed(2));
console.log("Final Amount = ", finalAmount.toFixed(2));

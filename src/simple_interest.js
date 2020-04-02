let principal = +process.argv[2];
let rate = +process.argv[3];
let time = +process.argv[4];
let final_amount = (principal*rate*time*0.01);
console.log("Simple Interest =",final_amount);

let principal = +process.argv[2];
let rate = +process.argv[3];
let year = +process.argv[4];
let final_amount = Math.pow((1+rate/100),year)*principal;
final_amount = Math.round(final_amount-principal);
console.log("Compound Interest Annually = ",final_amount);

let productName = "Disco-Balls";
let costPerUnit = 10.50;
let basePrice = 15.00;
let discountRate = 0.20;
let salesTaxRate = 0.05;
let fixedMonthlyCosts = 100;

let discountedPrice = basePrice * (1 - discountRate);
let finalPriceWithTax = discountedPrice * (1 + salesTaxRate);
let profitPerUnit = finalPriceWithTax - costPerUnit;
let breakEvenUnits = Math.ceil(fixedMonthlyCosts / profitPerUnit);
let isProfitablPerUnit = Boolean(profitPerUnit > 0);

console.log(productName)
console.log(discountedPrice)
console.log(finalPriceWithTax)
console.log(profitPerUnit)
console.log(breakEvenUnits)
console.log(isProfitablPerUnit)
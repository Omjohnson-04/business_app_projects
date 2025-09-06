let itemName = "USB-C Cable";
let unitCost = 3.75;
let currentStock = 10;
let reorderLevel = 15;
let targetStock = 120;
let weeklyDemand = 50;
let supplierLeadTimeWeeks = 1;

let weeksOfCover = weeklyDemand > 0 ? currentStock / weeklyDemand : Infinity;
let stockDeficit = Math.max(0, targetStock - currentStock);
let reorderQuantity = (currentStock <= reorderLevel || weeksOfCover
    < supplierLeadTimeWeeks) ? Math.ceil(stockDeficit) : 0;
let estimatedReorderCost = reorderQuantity * unitCost;
let reorderNow = Boolean(currentStock <= reorderLevel || weeksOfCover
    < supplierLeadTimeWeeks);

console.log(itemName)
console.log(weeksOfCover.toFixed(2))
console.log(reorderNow)
console.log(reorderQuantity)
console.log(estimatedReorderCost.toFixed(2))
// Step 2
const employees = [
    {name: "owen", hourlyRate: 15.0, hoursWorked: 40},
    {name: "amelia", hourlyRate: 20.0, hoursWorked: 45,},
    {name: "william", hourlyRate: 17.50, hoursWorked: 35}
]

// Step 3
function calculateBasePay(rate, hours) {
    if (hours <= 40) {
        return rate * hours
    }
    else if (hours >= 40) {
        return rate * 40
    }
    else {
        console.log("Wrong input, try again")
    }
}

console.log(calculateBasePay(15, 20))

// Step 4
function calculateOvertimePay(rate, hours) {
    let overtimeRate = (rate * 1.5)
    if (hours > 40) {
        return overtimeRate * (hours - 40)
    }
    else {
        console.log("No overtime hours worked")
    }
}

// Step 5
function calculateTaxes(grossPay) {
    return grossPay - (grossPay * 0.15)
}

// Step 6
function processPayroll(employee) {
    for (let employee of employees) {
        let employeeName = employee.name;
        let basePay = calculateBasePay(employee.hourlyRate, employee.hoursWorked);
        let overtimePay =  calculateOvertimePay(employee.hourlyRate, employee.hoursWorked) || 0;
        let taxedPay =  calculateTaxes(basePay + overtimePay)
    }
}

// Step 7
for (let employee of employees) {
    console.log(processPayroll(employee))
}
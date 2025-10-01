class Employee {
    constructor(name, department, level = "Associate") {
        this.name = name;
        this.department = department;
        this.level = level;
    }

    describe() {
        return `${this.name} works in ${this.department} department.`
    }

    promote() {
        if (this.level === "Associate") {
            this.level = "Manager"
        }
        else if (this.level === "Manager") {
            this.level = "Director"
        }
        else if (this.level === "Director") {
            this.level = "Executive"
        }
    }
}

employees = [
new Employee("Bob", "Accounting"),
new Employee("Stephen", "Mechanic"),
new Employee("William", "Food")
]

for (const employee of employees) {
console.log(employee.describe())
}



class Manager extends Employee {
constructor(name, department, level) {
    super(name, department, level);
    this.teamSize = teamSize;
}

describe() {
    return `${this.name} manages ${this.teamSize} employees. He is a ${this.level}.`;
}
}

let manager = new Manager("Tim", "Tools", "Manager", teamSize = 10);

console.log(manager.describe())
class Employee {
    constructor(name, department) {
        this.name = name;
        this.department = department;
    }

    describe() {
        return `${this.name} works in ${this.department} department.`
    }
}


class Manager extends Employee {
    constructor(name, department, teamSize) {
        super(name, department);
        this.teamSize = teamSize;
    }

    describe() {
        return `${this.name} is in ${this.department} and is in charge of ${this.teamSize} people.`
    }
}

const emp1 = new Employee ('owen', 'finance')
const emp2 = new Employee ('amelia', 'medical')
const emp3 = new Employee ('william', 'investigation')

const mng1 = new Manager ('josh', 'finance', 20)

class Company {
    constructor() {
        this.employees = [];
    }

    addEmployee(employee) {
        this.employees.push(employee);
    }

    listEmployees() {
        this.employees.forEach(e => console.log(e.describe()));
    }
}

const myCompany = new Company();

myCompany.addEmployee(emp1);
myCompany.addEmployee(emp2);
myCompany.addEmployee(emp3);
myCompany.addEmployee(mng1);

myCompany.listEmployees();
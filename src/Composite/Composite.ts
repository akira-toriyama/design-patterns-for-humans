abstract class Employee {
  constructor(protected name: string, protected salary: number) {}
  abstract getName(): string;
  abstract getSalary(): number;
  abstract setSalary(salary: number);
}

class Developer extends Employee {
  constructor(protected name: string, protected salary: number) {
    super(name, salary);
  }

  getName() {
    return super.name;
  }

  getSalary() {
    return super.salary;
  }

  setSalary(salary: number) {
    super.salary = salary;
  }
}

class Designer extends Employee {
  constructor(protected name: string, protected salary: number) {
    super(name, salary);
  }

  getName() {
    return super.name;
  }

  getSalary() {
    return super.salary;
  }

  setSalary(salary: number) {
    super.salary = salary;
  }
}

class Organization {
  private employees: Array<Employee>;

  addEmployee(employee: Employee) {
    this.employees.push(employee);
  }

  getEmployeeNames() {
    return this.employees.map((v) => v.getName());
  }
}

const bill = new Developer("Bill Gates", 150);
const steve = new Developer("Steve Jobs", 140);
const akira = new Designer("Akira Toriyama", 300);

const organization = new Organization();

organization.addEmployee(bill);
organization.addEmployee(steve);
organization.addEmployee(akira);

organization.getEmployeeNames();

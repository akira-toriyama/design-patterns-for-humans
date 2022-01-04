/**
 * 現実世界になぞらえるとこうです。
 *
 * どんな組織も従業員（employee）で構成されているものです。各従業員は同じ機能（給与や責務など）を共有しており、従業員によっては報告の義務があったりなかったり、部下がいたりいなかったりします。
 */

/**
 * わかりやすくまとめるとこうです。
 *
 * compositeパターンは、クライアントが個別のオブジェクトを統一的な方法で扱えるようにするためのものです。
 */

/**
 * Wikipediaではこうです。
 *
 * ソフトウェアエンジニアリングにおけるcompositeパターンとは、分割（partitioning）のためのデザインパターンである。compositeパターンは、オブジェクトのグループを単一オブジェクトのインスタンスと同じに扱えるよう記述する。compositeパターンの意図は、オブジェクトをツリー構造として「構成する（compose）」ことであり、このツリー構造は部分/全体階層を表現する。compositeパターンを実装することで、クライアントは個別のオブジェクトやcompositionを統一的に扱えるようになる。
 */

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

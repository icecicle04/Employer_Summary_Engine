// TODO: Write code to define and export the Employee class
class Employee {
  constructor(name, id, email) {
    //properties
    this.name = name;
    this.id = id;
    this.email = email;

    //method
    this.getName = function () {};
  }

  getName(name) {
    this.name += name.employee;
  }
  printInfo() {
    console.log(`{ name }`);
    Employee.getName();
  }
  //   ● Can get name via getName()

  //   TypeError: e.getName is not a function

  //     27 |   const testValue = "Alice";
  //     28 |   const e = new Employee(testValue);
  //   > 29 |   expect(e.getName()).toBe(testValue);
  //        |            ^
  //     30 | });
  //     31 |
  //     32 | test("Can get id via getId()", () => {

  //     at Object.<anonymous> (test/Employee.test.js:29:12)

  // ● Can get id via getId()

  //   TypeError: e.getId is not a function

  //     33 |   const testValue = 100;
  //     34 |   const e = new Employee("Foo", testValue);
  //   > 35 |   expect(e.getId()).toBe(testValue);
  //        |            ^
}

module.exports = Employee;

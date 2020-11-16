// TODO: Write code to define and export the Employee class
class Employee {
  constructor(name, id, email) {
    //properties
    this.name = name;
    this.id = id;
    this.email = email;
  }
  //method
  getName() {
    return this.name;
  }

  getId() {
    return this.id;
  }

  getEmail() {
    return this.email;
  }

  getRole() {
    var role = "Employee";
    return role;
  }
  printInfo() {
    console.log(`{ name }`);
    Employee.getName();
  }
}

module.exports = Employee;

const Employee = require("./lib/Employee");
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");
const mysql = require("mysql");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");
const team = [];
const connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "Braves2020",
  database: "employees_db",
});

connection.connect((err) => {
  if (err) throw err;
  console.log("Employee Directory");
  init();
});
function init() {
  console.log("---------");
  inquirer
    .prompt([
      {
        name: "action",
        type: "rawlist",
        message: "What would you like to do?",
        choices: ["Add Employee", "View Employees"],
      },
    ])
    .then(function (answer) {
      switch (answer.action) {
        case "Add Employee":
          addEmployee();
          break;

        case "View Employees":
          render();
          break;
      }
    })
    .catch((err) => {
      if (err) throw err;
    });
}

function addEmployee() {
  console.log("Lets add an employee!");
  console.log("---------------------");
  inquirer
    .prompt([
      {
        name: "action",
        type: "rawlist",
        message: "What type of employee would you like to add?",
        choices: ["Intern", "Engineer", "Manager"],
      },
    ])
    .then(function (answer) {
      switch (answer.action) {
        case "Intern":
          addIntern();
          break;

        case "Engineer":
          addEngineer();
          break;

        case "Manager":
          addManager();
          break;
      }
    })
    .catch((err) => {
      if (err) throw err;
    });
}

function addIntern() {
  inquirer.prompt([
    {
      name: "employee_first_name",
      type: "input",
      message: "What is the employees first name?",
    },
  ]);
}

function addEngineer() {
  inquirer
    .prompt([
      {
        name: "name",
        type: "input",
        message: "What is the employee's name?",
      },
      {
        name: "id",
        type: "input",
        message: "What is the employee's id?",
      },
      {
        name: "email",
        type: "input",
        message: "What is the employee's email?",
      },
      {
        name: "gitHub",
        type: "input",
        message: "What is the employee's gitHub?",
      },
    ])
    .then(function (data) {
      var newEngineer = new Engineer(
        data.engineerName,
        data.id,
        data.email,
        data.gitHub
      );
      team.push(newEngineer);
      render();
    });
}

function addManager() {}

// Write code to use inquirer to gather information about the development team members,
// and to create objects for each team member (using the correct classes as blueprints!)

// After the user has input all employees desired, call the `render` function (required
// above) and pass in an array containing all employee objects; the `render` function will
// generate and return a block of HTML including templated divs for each employee!

// After you have your html, you're now ready to create an HTML file using the HTML
// returned from the `render` function. Now write it to a file named `team.html` in the
// `output` folder. You can use the variable `outputPath` above target this location.
// Hint: you may need to check if the `output` folder exists and create it if it
// does not.

// HINT: each employee type (manager, engineer, or intern) has slightly different
// information; write your code to ask different questions via inquirer depending on
// employee type.

// HINT: make sure to build out your classes first! Remember that your Manager, Engineer,
// and Intern classes should all extend from a class named Employee; see the directions
// for further information. Be sure to test out each class and verify it generates an
// object with the correct structure and methods. This structure will be crucial in order
// for the provided `render` function to work! ```

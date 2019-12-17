//require packages
var mysql = require("mysql");
var inquirer = require("inquirer");

var connection = mysql.createConnection({
    host: "localhost",
  
    // Your port; if not 3306
    port: 3306,
  
    // Your username
    user: "root",
  
    // Your password
    password: "",
    database: "companyDB"
  });

  connection.connect(function(err) {
    if (err) throw err;
    runSearch();
  });

  //create CLI where you ask the user questions
  function runSearch() {
    inquirer
      .prompt({
        name: "action",
        type: "rawlist",
        message: "What would you like to do?",
        choices: [
          "Add departments, roles, employees",
          "View departments, roles, employees",
          "Update employee roles"
        ]
      })
      .then(function(answer) {
        switch (answer.action) {
        case "Add departments, roles, emplpoyees":
          addSearch();
          break;
  
        case "View departments, roles, employees":
          viewSearch();
          break;
  
        case "Update employee roles":
          updateSearch();
          break;
      };
  })
}

function addSearch() {
    inquirer
      .prompt({
        name: "action",
        type: "rawlist",
        message: "Which would you like to add?",
        choices: [
          "departments",
          "roles",
          "employees"
        ]
      })
      .then(function(answer) {
        switch (answer.action) {
        case "departments":
          addDepartments();
          break;
  
        case "roles":
          addRoles();
          break;
  
        case "employees":
          addEmployees();
          break;
      };
    })
}
function addDepartments(){
    //add department
    inquirer
    .prompt({
      name: "department",
      type: "input",
      message: "Add Department?"
    })
    //create a query 
    const query = "ADD department FROM companyDB WHERE ?";
    connection.query(query, function(err, res) {
       
         runSearch();
      });
}

function addRoles(){
    //add Roles
    inquirer
    .prompt({
      name: "role",
      type: "input",
      message: "Add Role?"
    })
    //create a query 
    const query = "ADD role FROM companyDB WHERE ?";
    connection.query(query, function(err, res) {
       
         runSearch();
      });
}

function addEmployees(){
    //add employee
    inquirer
    .prompt({
      name: "employee",
      type: "input",
      message: "Add Employee?"
    })
    //create a query 
    const query = "ADD employee FROM companyDB WHERE ?";
    connection.query(query, function(err, res) {
       
         runSearch();
      });
}

function viewSearch() {
    inquirer
      .prompt({
        name: "action",
        type: "rawlist",
        message: "Which would you like to view?",
        choices: [
          "departments",
          "roles",
          "employees"
        ]
      })
      .then(function(answer) {
        switch (answer.action) {
        case "departments":
          viewDepartments();
          break;
  
        case "roles":
          viewRoles();
          break;
  
        case "employees":
          viewEmployees();
          break;
      };
    })
}

function viewDepartments(){
    //view department
    inquirer
    .prompt({
      name: "department",
      type: "input",
      message: "View Department?"
    })
    //create a query 
    const query = "VIEW department FROM companyDB WHERE ?";
    connection.query(query, function(err, res) {
       
         runSearch();
      });
}

function viewRoles(){
    //view Roles
    inquirer
    .prompt({
      name: "role",
      type: "input",
      message: "View Role?"
    })
    //create a query 
    const query = "VIEW role FROM companyDB WHERE ?";
    connection.query(query, function(err, res) {
       
         runSearch();
      });
}

function viewEmployees(){
    //view Employees
    inquirer
    .prompt({
      name: "employee",
      type: "input",
      message: "View Employee?"
    })
    //create a query 
    const query = "VIEW employee FROM companyDB WHERE ?";
    connection.query(query, function(err, res) {
       
         runSearch();
      });
}

function updateSearch() {
    inquirer
      .prompt({
        name: "action",
        type: "rawlist",
        message: "Which would you like to update?",
        choices: [
          "departments",
          "roles",
          "employees"
        ]
      })
      .then(function(answer) {
        switch (answer.action) {
        case "departments":
          updateDepartments();
          break;
  
        case "roles":
          updateRoles();
          break;
  
        case "employees":
          updateEmployees();
          break;
      };
    })
}
function updateDepartments(){
    //update department
    inquirer
    .prompt({
      name: "department",
      type: "input",
      message: "Update Department?"
    })
    //create a query 
    const query = "UPDATE department FROM companyDB WHERE ?";
    connection.query(query, function(err, res) {
       
         runSearch();
      });
}

function updateRoles(){
    //update Roles
    inquirer
    .prompt({
      name: "role",
      type: "input",
      message: "Update Role?"
    })
    //create a query 
    const query = "Update role FROM companyDB WHERE ?";
    connection.query(query, function(err, res) {
       
         runSearch();
      });
}

function updateEmployees(){
    //update Employees
    inquirer
    .prompt({
      name: "employee",
      type: "input",
      message: "Update Employee?"
    })
    //create a query 
    const query = "UPDATE employee FROM companyDB WHERE ?";
    connection.query(query, function(err, res) {
       
         runSearch();
      });
}
//require packages
var mysql = require("mysql");
var inquirer = require("inquirer");
require("console.table")

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

connection.connect(function (err) {
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
        .then(function (answer) {
            switch (answer.action) {
                case "Add departments, roles, employees":
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
        .then(function (answer) {
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
function addDepartments() {
    //add department
    inquirer
        .prompt({
            name: "department",
            type: "input",
            message: "Add Department?"
        }).then(function (answer) {    //create a query 
            const query = "INSERT INTO department SET name=" + '"' + answer.department + '"';
            connection.query(query, function (err, res) {
                console.log("----------------------------")
                console.table(res)
                runSearch();
            });
        })
}

function addRoles() {
    //add Roles
    inquirer
        .prompt([{
            name: "title",
            type: "input",
            message: "Add Role?"
        },
        {

            name: "salary",
            type: "number",
            message: "new salary"

        },
        {
            name: "department_id",
            type: "number",
            message: "Which department id?"
        }

        ])
        .then(function (answer) {
            const { title, salary, department_id } = answer
            //create a query 
            const query = "INSERT INTO role SET title = ?, salary = ?, department_id =?";
            console.log(query)
            //create a query 
            connection.query(query, [title, salary, department_id], function (err, res) {
                console.log("----------------------------")
                console.table(res)
                runSearch();
            });
        })
}

function addEmployees() {
    //add employee
    inquirer
        .prompt([{
            name: "firstName",
            type: "input",
            message: "Add first name?"
        },
        {
            name: "lastName",
            type: "input",
            message: "Add last name?"
        },
        {
            name: "roleId",
            type: "number",
            message: "Add role id?"
        },
        {
            name: "managerId",
            type: "number",
            message: "Add manager id?"
        }
        ])
        .then(function (answer) {    //create a query 
            const { firstName, lastName, roleId, managerId } = answer
            const query = "INSERT INTO employee SET first_name = ?, last_name = ?, role_id = ?, manager_id = ?";
            
            connection.query(query, [firstName, lastName, roleId, managerId], function (err, res) {
                console.log("----------------------------")
                console.table(res)
                runSearch();
            });
        })
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
        .then(function (answer) {
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

function viewDepartments() {
    //view department
    inquirer
        .prompt({
            name: "department",
            type: "input",
            message: "View Department?"
        })
    //create a query 
    const query = "SELECT * FROM department";
    connection.query(query, function (err, res) {
        console.log("----------------------------")
        console.table(res)

        runSearch();
    });
}

function viewRoles() {
    //view Roles
    inquirer
        .prompt({
            name: "role",
            type: "input",
            message: "View Role?"
        })
    //create a query 
    const query = "SELECT * FROM role";
    connection.query(query, function (err, res) {
        console.log("----------------------------")
        console.table(res);
        runSearch();
    });
}

function viewEmployees() {
    //view Employees
    inquirer
        .prompt({
            name: "employee",
            type: "input",
            message: "View Employee?"
        })
    //create a query 
    const query = "SELECT * FROM employee";
    connection.query(query, function (err, res) {
        console.log("----------------------------")
        console.table(res);
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
        .then(function (answer) {
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
function updateDepartments() {
    //update department
    inquirer
        .prompt([
            {
                name: "id",
                type: "number",
                message: "which Department?"
            },
            {
                name: "department",
                type: "input",
                message: "Update Department?"
            }]).then(function (answer) {
                //create a query 
                const { id, department } = answer

                console.log(id, department)

                var query = "UPDATE department SET name = ? WHERE id = ?"
                //console.log(query)
                connection.query(query, [department, id], function (err, res) {
                    //console.log(res,err)
                    runSearch();
                });
            })
}

function updateRoles() {
    //update Roles
    inquirer
        .prompt([{
            name: "id",
            type: "number",
            message: "Which id?"
        },
        {
            name: "salary",
            type: "number",
            message: "new salary"

        }]
        ).then(function (data) {   // data {id:,salary:}
            //create a query 
            const { id, salary } = data
            //const query1= "Update role SET salary =" +  salary + " WHERE id =" + id;
            //console.log(query1)
            //const query = "Update role SET ?, ? WHERE ?";
            //connection.query(query, [{salary: salary},{name: newname},{id:id}], function (err, res) {

            const query = "Update role SET salary = ? WHERE id =?";
            connection.query(query, [salary, id], function (err, res) {

                runSearch();
            });
        })
}

function updateEmployees() {
    //update Employees
    inquirer
        .prompt({
            name: "employee",
            type: "input",
            message: "Update Employee?"
        })
    //create a query 
    const query = "UPDATE employee FROM companyDB WHERE ?";
    connection.query(query, function (err, res) {

        runSearch();
    });
}
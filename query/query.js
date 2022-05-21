const inquirer = require ("inquirer");
const table = require ("console.table");
const db = require("../config/connection");
const optionList ={
    type : "list",
    message:"what are you looking to do today?",
    name:"choice",
    choices:[
        "view all employees",
        "add employee",
        "update an employee",
        "see all roles",
        "add a role",
        "view all departments",
        "add a department",
        "exit options list",
    ],
};

async function optionsFunc(){
    const options = await inquirer.prompt(optionList);
    switch(options.choice){
        case "view all employees":
            viewEmployees();
            break;
        case "add employee":
            addEmployees();
             break;
        case "update an employee":
            editEmployees();
            break;
        case "see all roles":
            viewRoles();
             break;
         case "add a role":
            addRole();
            break;
        case "view all departments":
            seeDept();
            break;
        case "add a department":
            newDept();
            break;
        case "exit options list":
            return;
        }
}

module.exports = optionsFunc;
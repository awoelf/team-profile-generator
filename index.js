// Require packages
const inquirer = require('inquirer');
const fs = require('fs');
const employeeCard = require("./dist/scripts/employeeCard");

// Initialize the program
const init = () => {
  console.log('Welcome to the Team Profile Generator.');
  // The first employee is the manager
  addEmployee('manager');
};

// Prompts the user if they would like to add more employees or complete building the team.
const moreEmployees = () => {
  inquirer
    .prompt([
      {
        type: 'checkbox',
        message: 'Would you like to add a new team member?',
        name: 'newMember',
        choices: ['engineer', 'intern', 'No, finish building my team'],
      },
    ])
    .then((response) => {
      if (response.newMember[0] === 'No, finish building my team') {
        console.log('Building document!');
        buildDocument();
      } else {
        let item, icon;
        switch (response.newMember[0]) {
          case 'No, finish building my team':
            console.log('Building document!');
            break;
          case 'engineer':
            item = 'github username';
            icon = 'devices'
            break;
          case 'intern':
            item = 'school';
            icon = 'school';
            break;
        }
        console.log(`Adding ${response.newMember[0]} to the team!`);
        addEmployee(response.newMember[0], item);
      }
    });
};

const addEmployee = (employee, item = 'office number') => {
  console.log(item);
  inquirer
    .prompt([
      {
        type: 'input',
        message: `What is the ${employee}\'s name?`,
        name: 'name',
      },
      {
        type: 'input',
        message: `What is the ${employee}\'s employee id?`,
        name: 'id',
      },
      {
        type: 'input',
        message: `What is the ${employee}\'s email?`,
        name: 'email',
      },
      {
        type: 'input',
        message: `What is the ${employee}\'s ${item}?`,
        name: 'item',
      },
    ])
    .then((response) => {
      console.log(response);
      // Create employee obj
      moreEmployees();
    });
};

const createHtml = () => {

}

const buildDocument = () => {

};

init();

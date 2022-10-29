// Require packages
const inquirer = require('inquirer');
const fs = require('fs');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const Cards = require('./lib/Cards');
const Manager = require('./lib/Manager');
let teamCards = new Cards();

// Initialize the program
const init = () => {
  console.log('Welcome to the Team Profile Generator.');
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
        console.log(`Adding ${response.newMember[0]} to the team!`);
        addEmployee(response.newMember[0]);
      }
    });
};

const addEmployee = (employee) => {
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
        message: `What is the ${employee}\'s ${employeeItem(employee)}?`,
        name: 'item',
      },
    ])
    .then((response) => {
      console.log(response);
      let newEmployee;
      if (employee === 'engineer') {
        newEmployee = new Engineer(response);
      } else if (employee === 'intern') {
        newEmployee = new Intern(response);
      } else {
        newEmployee = new Manager(response);
      }
      teamCards.addCard(newEmployee.createCard());
      console.log(teamCards.getCards());
      moreEmployees();
    });
};

const employeeItem = (employee) => {
  if (employee === 'manager') {
    return 'office number';
  } else if (employee === 'engineer') {
    return 'Github';
  } else if (employee === 'intern') {
    return 'school';
  } else {
    return 'item';
  }
}

const buildDocument = () => {

};

init();

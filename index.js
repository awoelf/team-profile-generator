// Require packages
const inquirer = require('inquirer');
const fs = require('fs');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const Manager = require('./lib/Manager');

let htmlTemplate = require('./src/htmlTemplate');
let cardHtml = ``;

// Initialize the program
const init = () => {
  console.log('Welcome to the Team Profile Generator.');
  cardHtml = ``;
  addManager();
};

// Prompts the user if they would like to add more employees or complete building the team.
const addEmployee = () => {
  inquirer
    .prompt([
      {
        type: 'checkbox',
        message: 'Would you like to add a new team member?',
        name: 'newMember',
        choices: ['Engineer', 'Intern', 'No, finish building my team'],
      },
    ])
    .then((response) => {
      let member = response.newMember[0];
      if (member === 'No, finish building my team') {
        console.log('Building document!');
        buildDocument();
      } else {
        console.log(`Adding ${member} to the team!`);
        if (member === 'Engineer') {
          addEngineer();
        } else if (member === 'Intern'){
          addIntern();
        } else {
          console.log('Something went wrong. Please restart the program.')
        }
      }
    });
};

const addManager = () => {
  inquirer.prompt([
    {
      type: 'input',
      message: `What is the Manager's name?`,
      name: 'name',
    },
    {
      type: 'input',
      message: `What is the Manager's employee id?`,
      name: 'id',
    },
    {
      type: 'input',
      message: `What is the Manager's email?`,
      name: 'email',
    },
    {
      type: 'input',
      message: `What is the Manager's office number?`,
      name: 'officeNumber',
    },
  ])
  .then((response) => {
    let manager = new Manager(response);
    console.log(manager.getId());
    let managerCard = `<div class='card col-2 mx-2'>
    <div class='card-body'>
      <h3 class='card-title'>${manager.getName()}</h3>
      <h5 class='card-title d-flex'>
        <span class='material-symbols-outlined'>local_cafe</span>
        Manager
      </h5>
      <ul class='list-group'>
        <li class='list-group-item'>Id: ${manager.getId()}</li>
        <li class='list-group-item'>Email: <a href='mailto:${manager.getEmail()}'>${manager.getEmail()}</a></li>
        <li class='list-group-item'>Office Number: ${manager.getOfficeNumber()}</li>
      </ul>
    </div>
  </div>`

  
  cardHtml += managerCard;
  addEmployee();
  })
}

const addEngineer = () => {
    inquirer.prompt([
      {
        type: 'input',
        message: `What is the Engineer's name?`,
        name: 'name',
      },
      {
        type: 'input',
        message: `What is the Engineer's employee id?`,
        name: 'id',
      },
      {
        type: 'input',
        message: `What is the Engineer's email?`,
        name: 'email',
      },
      {
        type: 'input',
        message: `What is the Engineer's Github?`,
        name: 'github',
      },
    ])
    .then((response) => {
      let engineer = new Engineer(response)
      let engineerCard = `<div class='card col-2 mx-2'>
      <div class='card-body'>
        <h3 class='card-title'>${engineer.getName()}</h3>
        <h5 class='card-title d-flex'>
          <span class='material-symbols-outlined'>build</span>
          Engineer
        </h5>
        <ul class='list-group'>
          <li class='list-group-item'>Id: ${engineer.getId()}</li>
          <li class='list-group-item'>Email: <a href='mailto:${engineer.getEmail()}'>${engineer.getEmail()}</a></li>
          <li class='list-group-item'>Github: <a href='https://github.com/${engineer.getGithub()}'>${engineer.getGithub()}</a></li>
        </ul>
      </div>
    </div>`

    cardHtml += engineerCard;
    addEmployee();
    })
}

const addIntern = () => {
  inquirer.prompt([
    {
      type: 'input',
      message: `What is the Intern's name?`,
      name: 'name',
    },
    {
      type: 'input',
      message: `What is the Intern's employee id?`,
      name: 'id',
    },
    {
      type: 'input',
      message: `What is the Intern's email?`,
      name: 'email',
    },
    {
      type: 'input',
      message: `What is the Intern's School?`,
      name: 'school',
    },
  ])
  .then((response) => {
    let intern = new Intern(response)
    let internCard = `<div class='card col-2 mx-2'>
    <div class='card-body'>
      <h3 class='card-title'>${intern.getName()}</h3>
      <h5 class='card-title d-flex'>
        <span class='material-symbols-outlined'>school</span>
        Intern
      </h5>
      <ul class='list-group'>
        <li class='list-group-item'>Id: ${intern.getId()}</li>
        <li class='list-group-item'>Email: <a href='mailto:${intern.getEmail()}'>${intern.getEmail()}</a></li>
        <li class='list-group-item'>School: ${intern.getSchool()}</li>
      </ul>
    </div>
  </div>`

  cardHtml += internCard;
  addEmployee();
  })
}

const buildDocument = () => {
  const htmlPage = htmlTemplate(cardHtml);

  fs.writeFile('./dist/html/index.html', htmlPage, (err) => {
    if (err) {
      return console.log(err);
    }
    console.log('File successfully saved!')
  })
}

init();

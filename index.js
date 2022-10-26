// Require packages
const inquirer = require('inquirer');
const fs = require('fs');


const init = () => {
    console.log('Welcome to the Team Profile Generator.')
    memberInfo('manager');
}

const addMember = () => {
    inquirer.prompt([
        {
            type: 'checkbox',
            message: 'Would you like to add a new team member?',
            name: 'newMember',
            choices: ['engineer', 'intern', 'No, finish building my team']
        },
    ])
        .then((response) => {
            if (response.newMember[0] === 'No, finish building my team'){
                // Build document
                console.log('Building document!');
            } else {
                memberInfo(response.newMember)
            }
        })
}

const memberInfo = (memberType) => {
    inquirer.prompt([
        {
            type: 'input',
            message: `What is the ${memberType}\'s name?`,
            name: 'name'
        },
        {
            type: 'input',
            message: `What is the ${memberType}\'s employee id?`,
            name: 'id'
        },
        {
            type: 'input',
            message: `What is the ${memberType}\'s email?`,
            name: 'email'
        },
        {
            type: 'input',
            message: `What is the ${memberType}\'s office number?`,
            name: 'office'
        }
    ]).then((response) => {
        console.log(response);
        // Add manager's info to manager object
        addMember();
    })
}

init();
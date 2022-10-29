const Employee = require('./Employee');

class Intern extends Employee {
    constructor({name, id, email, school}) {
        super(name, id, email);
        this.icon = 'school';
        this.item = school;
        this.role = 'Intern';
    }

    // The getRole method is overwritten to return 'Intern'
    getRole = () => 'Intern';

    // Returns intern's school
    getSchool = () => this.school; 

    getIcon = () => 'school';

    getItem = () => `<li class='list-group-item'>School: ${this.getSchool}</li>`;
}

module.exports = Intern;
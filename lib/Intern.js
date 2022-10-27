const Employee = require('./Employee');

class Intern extends Employee {
    constructor(name, id, email, school) {
        super(name, id, email);
        this.school = school;
    }

    // The getRole method is overwritten to return 'Intern'
    getRole = () => 'Intern';

    // Returns intern's school
    getSchool = () => this.school; 
}

module.exports = Intern;
const Employee = require('./Employee');

class Manager extends Employee {
    constructor(name, id, email, officeNumber) {
        super(name, id, email);
        // Manager's office number
        this.officeNumber = officeNumber;
    }

    // The getRole method is overwritten to return 'Manager'
    getRole = () => 'Manager';
}

module.exports = Manager;
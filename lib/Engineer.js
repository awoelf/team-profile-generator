const Employee = require('./Employee');

class Engineer extends Employee {
    constructor(name, id, email, github) {
        super(name, id, email);
        // Github username
        this.github = github;
    }

    // The getRole method is overwritten to return 'Engineer'
    getRole = () => 'Engineer';

    // Returns engineer's github username
    getGithub = () => this.github;
}

module.exports = Engineer;
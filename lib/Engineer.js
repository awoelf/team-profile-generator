const Employee = require('./Employee');

class Engineer extends Employee {
    constructor({name, id, email, github}) {
        super(name, id, email);
        this.github = github;
    }

    // The getRole method is overwritten to return 'Engineer'
    getRole = () => 'Engineer';

    // Returns engineer's github username
    getGithub = () => this.github;

    getIcon = () => 'devices';

    getItem = () => `<li class='list-group-item'>Github: <a href='https://github.com/${this.getGithub}'>${this.getGithub}</a></li>`;
}

module.exports = Engineer;
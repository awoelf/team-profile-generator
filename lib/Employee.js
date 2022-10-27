// The employee class contains the base methods and attributes that are used by the other three types of employees
class Employee {
    constructor(name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;
    }

    // Returns employee name
    getName = () => this.name;

    // Returns employee id
    getId = () => this.id;

    // Returns employee email
    getEmail = () => this.email;

    // Returns the role of the employee
    getRole = () => 'Employee';
}

module.exports = Employee;
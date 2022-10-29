// The employee class contains the base methods and attributes that are used by the other three types of employees
class Employee {
    constructor({name, id, email}) {
        this.name = name;
        this.id = id;
        this.email = email;
        this.icon = 'person';
        this.item = '';
        this.role = 'Employee';
    }

    // Returns employee name
    getName = () => this.name;

    // Returns employee id
    getId = () => this.id;

    // Returns employee email
    getEmail = () => this.email;

    // Returns the role of the employee
    getRole = () => this.role;

    // Default values employee class

    createCard = () => { 
        return `<div class='card col-4'>
        <div class='card-body'>
          <h3 class='card-title'>${this.name}</h3>
          <h5 class='card-title d-flex>
            <span class='material-symbols-outlined'>${this.icon}</span>
            ${this.role}
          </h5>
          <ul class='list-group'>
            <li class='list-group-item'>Id: ${this.id}</li>
            <li class='list-group-item'>Email: <a href='mailto:${this.email}'>${this.email}</a></li>
            ${this.item}
          </ul>
        </div>
      </div>`
    }
}


module.exports = Employee;
const Employee = require('../lib/Employee');

describe('Employee', () => {
    const employee = new Employee('Alexis', 100, 'alexis@alexis.com');

    describe('getName', () => {
        it('should return the name of the employee', () => {
            const name = 'Alexis';
            const result = employee.getName();
            expect(result).toEqual(name);
        })
    });

    describe('getId', () => {
        it('should return the id of the employee', () => {
            const id = 100;
            const result = employee.getId();
            expect(result).toEqual(id);
        })
    });

    describe('getEmail', () => {
        it('should return the email of the employee', () => {
            const email = 'alexis@alexis.com';
            const result = employee.getEmail();
            expect(result).toEqual(email);
        })
    });

    describe('getRole', () => {
        it('should return the role of the employee', () => {
            const role = 'Employee';
            const result = employee.getRole();
            expect(result).toEqual(role);
        })
    });
});
const Manager = require('../lib/Manager');

describe('Manager', () => {
    const manager = new Manager({name: 'Alexis', id: 100, email: 'alexis@alexis.com', officeNumber: 402});

    describe('getName', () => {
        it('should return the name of the manager', () => {
            const name = 'Alexis';
            const result = manager.getName();
            expect(result).toEqual(name);
        })
    });

    describe('getId', () => {
        it('should return the id of the manager', () => {
            const id = 100;
            const result = manager.getId();
            expect(result).toEqual(id);
        })
    });

    describe('getEmail', () => {
        it('should return the email of the manager', () => {
            const email = 'alexis@alexis.com';
            const result = manager.getEmail();
            expect(result).toEqual(email);
        })
    });

    describe('getRole', () => {
        it('should return the role of the manager', () => {
            const role = 'Manager';
            const result = manager.getRole();
            expect(result).toEqual(role);
        })
    });

    describe('getGithub', () => {
        it('should return the manager\s office number', () => {
            const officeNumber = 402;
            const result = manager.getOfficeNumber();
            expect(result).toEqual(officeNumber);
        })
    });
});
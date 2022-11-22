const Engineer = require('../lib/Engineer');

describe('Engineer', () => {
    const engineer = new Engineer({name: 'Alexis', id: 100, email: 'alexis@alexis.com', github: 'awoelf'});

    describe('getName', () => {
        it('should return the name of the engineer', () => {
            const name = 'Alexis';
            const result = engineer.getName();
            expect(result).toEqual(name);
        })
    });

    describe('getId', () => {
        it('should return the id of the engineer', () => {
            const id = 100;
            const result = engineer.getId();
            expect(result).toEqual(id);
        })
    });

    describe('getEmail', () => {
        it('should return the email of the engineer', () => {
            const email = 'alexis@alexis.com';
            const result = engineer.getEmail();
            expect(result).toEqual(email);
        })
    });

    describe('getRole', () => {
        it('should return the role of the engineer', () => {
            const role = 'Engineer';
            const result = engineer.getRole();
            expect(result).toEqual(role);
        })
    });

    describe('getGithub', () => {
        it('should return the github username of the engineer', () => {
            const github = 'awoelf';
            const result = engineer.getGithub();
            expect(result).toEqual(github);
        })
    });
});
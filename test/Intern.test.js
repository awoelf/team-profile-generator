const Intern = require('../lib/Intern');

describe('Intern', () => {
    const intern = new Intern({name: 'Alexis', id: 100, email: 'alexis@alexis.com', school: 'UT Coding Bootcamp'});

    describe('getName', () => {
        it('should return the name of the intern', () => {
            const name = 'Alexis';
            const result = intern.getName();
            expect(result).toEqual(name);
        })
    });

    describe('getId', () => {
        it('should return the id of the intern', () => {
            const id = 100;
            const result = intern.getId();
            expect(result).toEqual(id);
        })
    });

    describe('getEmail', () => {
        it('should return the email of the intern', () => {
            const email = 'alexis@alexis.com';
            const result = intern.getEmail();
            expect(result).toEqual(email);
        })
    });

    describe('getRole', () => {
        it('should return the role of the intern', () => {
            const role = 'Intern';
            const result = intern.getRole();
            expect(result).toEqual(role);
        })
    });

    describe('getGithub', () => {
        it('should return the name of the intern\'s school', () => {
            const school = 'UT Coding Bootcamp';
            const result = intern.getSchool();
            expect(result).toEqual(school);
        })
    });
});
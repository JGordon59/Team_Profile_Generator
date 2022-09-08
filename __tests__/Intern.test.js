const Employee = require('../lib/employee');
const Intern = require('../lib/intern');

describe('Properties', () => {
    it('Intern name is required to be in a string format', () => {
        expect(typeof new Intern('Jonathan', '28', 'test@mail.com', 'University of Central Florida').getName()).toBe('string');
    });

    it('Intern ID is required to be in a numerical format', () => {
        expect(new Intern('Jonathan', '28', 'test@mail.com', 'University of Central Florida').getId()).toMatch(/^\d+$/);
    });

    it('An intern is required to have a valid email', () => {
        expect(new Intern('Jonathan', '28', 'test@mail.com', 'University of Central Florida').getEmail()).toMatch(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/);
    });

    it('Intern school is required to be in a string format', () => {
        expect(typeof new Intern('Jonathan', '28', 'test@mail.com', 'University of Central Florida').getSchool()).toBe('string');
    });

    it('Intern should be an instance of Employee', () => {
        expect(new Intern('Jonathan', '28', 'test@mail.com', 'University of Central Florida')).toBeInstanceOf(Employee);
    })
});

describe('Methods', () => {
    it('getName() will return the name in the string', () => {
        expect(new Intern('Jonathan', '28', 'test@mail.com', 'University of Central Florida').getName()).toBe('Jonathan');
    });

    it('getId should return the ID', () => {
        expect(new Intern('Jonathan', '28', 'test@mail.com', 'University of Central Florida').getId()).toBe('28');
    });

    it('getEmail should return the ID', () => {
        expect(new Intern('Jonathan', '28', 'test@mail.com', 'University of Central Florida').getEmail()).toBe('test@mail.com');
    });

    it('getSchool should return the school', () => {
        expect(new Intern('Jonathan', '28', 'test@mail.com', 'University of Central Florida').getSchool()).toBe('University of Central Florida');
    });
})
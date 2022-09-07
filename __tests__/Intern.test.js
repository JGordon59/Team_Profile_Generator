const Employee = require('../lib/employee');
const Intern = require('../lib/intern');

describe('Properties', () => {
    it('Intern name should always be a string', () => {
        expect(typeof new Intern('Jonathan', '28', 'test@mail.com', 'University of Central Florida').getName()).toBe('string');
    });

    it('Intern ID should always be a number', () => {
        expect(new Intern('Jonathan', '28', 'test@mail.com', 'University of Central Florida').getId()).toMatch(/^\d+$/);
    });

    it('Intern email should always be a valid email', () => {
        expect(new Intern('Jonathan', '28', 'test@mail.com', 'University of Central Florida').getEmail()).toMatch(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/);
    });

    it('Intern school should always be a string', () => {
        expect(typeof new Intern('Jonathan', '28', 'test@mail.com', 'University of Central Florida').getSchool()).toBe('string');
    });

    it('Intern should be an instance of Employee', () => {
        expect(new Intern('Jonathan', '28', 'test@mail.com', 'University of Central Florida')).toBeInstanceOf(Employee);
    })
});

describe('Methods', () => {
    it('getName() should return the name', () => {
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
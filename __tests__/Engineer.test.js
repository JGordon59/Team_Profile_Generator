const Employee = require('../lib/employee');
const Engineer = require('../lib/engineer');

describe('Properties', () => {
    it('Engineer name is required to be in a string format', () => {
        expect(typeof new Engineer('Jonathan', '28', 'test@mail.com', 'JGordon59').getName()).toBe('string');
    });

    it('Engineer ID is required to be in a numerical format', () => {
        expect(new Engineer('Jonathan', '28', 'test@mail.com', 'JGordon59').getId()).toMatch(/^\d+$/);
    });

    it('Engineer email should always be a valid email', () => {
        expect(new Engineer('Jonathan', '28', 'test@mail.com', 'JGordon59').getEmail()).toMatch(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/);
    });

    it('Engineer github is required to be in a string format', () => {
        expect(typeof new Engineer('Jonathan', '28', 'test@mail.com', 'JGordon59').getGithub()).toBe('string');
    });

    it('Engineer should be an instance of Employee', () => {
        expect(new Engineer('Jonathan', '28', 'test@mail.com', 'JGordon59')).toBeInstanceOf(Employee);
    })
});

describe('Methods', () => {
    it('getName() will return the name in the string', () => {
        expect(new Engineer('Jonathan', '28', 'test@mail.com', 'JGordon59').getName()).toBe('Jonathan');
    });

    it('getId should return the ID', () => {
        expect(new Engineer('Jonathan', '28', 'test@mail.com', 'JGordon59').getId()).toBe('28');
    });

    it('getEmail should return the ID', () => {
        expect(new Engineer('Jonathan', '28', 'test@mail.com', 'JGordon59').getEmail()).toBe('test@mail.com');
    });

    it('getGithub should return the github profile', () => {
        expect(new Engineer('Jonathan', '28', 'test@mail.com', 'JGordon59').getGithub()).toBe('JGordon59');
    });
})
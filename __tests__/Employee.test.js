const Employee = require('../lib/employee');

describe('Properties', () => {
    it('Employee name is required to be in a string format', () => {
        expect(typeof new Employee('Jonathan', '28', 'test@mail.com').getName()).toBe('string');
    });

    it('Employee ID is required to be in a numerical format', () => {
        expect(new Employee('Jonathan', '28', 'test@mail.com').getId()).toMatch(/^\d+$/);
    });

    it('Employee email should always be a valid email', () => {
        expect(new Employee('Jonathan', '28', 'test@mail.com').getEmail()).toMatch(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/);
    });
});

describe('Methods', () => {
    it('Inputting getName() will return the name in the string', () => {
        expect(new Employee('Jonathan', '28', 'test@mail.com').getName()).toBe('Jonathan');
    });

    it('Inputting getId() will return the ID value', () => {
        expect(new Employee('Jonathan', '28', 'test@mail.com').getId()).toBe('28');
    });

    it('Inputting getEmail() will return the valid email', () => {
        expect(new Employee('Jonathan', '28', 'test@mail.com').getEmail()).toBe('test@mail.com');
    });
})
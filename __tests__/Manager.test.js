const Employee = require('../lib/employee');
const Manager = require('../lib/manager');

describe('Properties', () => {
    it('A Manager name is required to be in a string format', () => {
        expect(typeof new Manager('Jonathan', '28', 'test@mail.com', '59').getName()).toBe('string');
    });

    it('The ID of a Manager is required to be in a numerical format', () => {
        expect(new Manager('Jonathan', '28', 'test@mail.com', '59').getId()).toMatch(/^\d+$/);
    });

    it('A Manager is required to have a valid email', () => {
        expect(new Manager('Jonathan', '28', 'test@mail.com', '59').getEmail()).toMatch(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/);
    });

    it('The office that a manager belongs to will be in numerical format', () => {
        expect(new Manager('Jonathan', '28', 'test@mail.com', '59').getOffice()).toMatch(/^\d+$/);
    });

    it('Managers are also regarded as Employees', () => {
        expect(new Manager('Jonathan', '28', 'test@mail.com', '59')).toBeInstanceOf(Employee);
    })
});

describe('Methods', () => {
    it(' Inputting getName() will return the name in the string', () => {
        expect(new Manager('Jonathan', '28', 'test@mail.com', '59').getName()).toBe('Jonathan');
    });

    it(' Inputting getId will return the ID value', () => {
        expect(new Manager('Jonathan', '28', 'test@mail.com', '59').getId()).toBe('28');
    });

    it(' Inputting getEmail will return the valid email value', () => {
        expect(new Manager('Jonathan', '28', 'test@mail.com', '59').getEmail()).toBe('test@mail.com');
    });

    it(' Inputting getOffice will return the numerical value of the office number', () => {
        expect(new Manager('Jonathan', '28', 'test@mail.com', '59').getOffice()).toBe('59');
    });
})
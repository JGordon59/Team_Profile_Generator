const Employee = require('../lib/employee');
const Manager = require('../lib/manager');

describe('Properties', () => {
    it('Manager name should always be a string', () => {
        expect(typeof new Manager('Jonathan', '28', 'test@mail.com', '59').getName()).toBe('string');
    });

    it('Manager ID should always be a number', () => {
        expect(new Manager('Jonathan', '28', 'test@mail.com', '59').getId()).toMatch(/^\d+$/);
    });

    it('Manager email should always be a valid email', () => {
        expect(new Manager('Jonathan', '28', 'test@mail.com', '59').getEmail()).toMatch(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/);
    });

    it('Manager office number should always be a number', () => {
        expect(new Manager('Jonathan', '28', 'test@mail.com', '59').getOffice()).toMatch(/^\d+$/);
    });

    it('Manager should be an instance of Employee', () => {
        expect(new Manager('Jonathan', '28', 'test@mail.com', '59')).toBeInstanceOf(Employee);
    })
});

describe('Methods', () => {
    it('getName() should return the name', () => {
        expect(new Manager('Jonathan', '28', 'test@mail.com', '59').getName()).toBe('Jonathan');
    });

    it('getId should return the ID', () => {
        expect(new Manager('Jonathan', '28', 'test@mail.com', '59').getId()).toBe('28');
    });

    it('getEmail should return the ID', () => {
        expect(new Manager('Jonathan', '28', 'test@mail.com', '59').getEmail()).toBe('test@mail.com');
    });

    it('getOffice should return the office number', () => {
        expect(new Manager('Jonathan', '28', 'test@mail.com', '59').getOffice()).toBe('59');
    });
})
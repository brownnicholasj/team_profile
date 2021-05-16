const Manager = require('../lib/manager');

const manager = new Manager('eName', 3, 'eName@email.com', 15);

describe('Manager class', () => {
	it('given officeNumber is returned from officeNumber key', () => {
		const output = manager.officeNumber;

		expect(output).toBe(15);
	});

	it('getRole() at the Mangaer class overrides Employee and returns "Manager"', () => {
		const output = manager.getRole();

		expect(output).toBe('Manager');
	});
});

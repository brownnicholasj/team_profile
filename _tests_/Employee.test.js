const Employee = require('../lib/employee');

describe('Employee class', () => {
	it("getName() returns employee's name", () => {
		expect(new Employee('eName', 3, 'eName@email.com').getName()).toBe('eName');
	});

	it("getId() returns employee's id", () => {
		expect(new Employee('eName', 3, 'eName@email.com').getId()).toBe(3);
	});

	it("getEmail() returns employee's email", () => {
		expect(new Employee('eName', 3, 'eName@email.com').getEmail()).toBe(
			'eName@email.com'
		);
	});

	it("getRole() returns 'Employee'", () => {
		expect(new Employee().getRole()).toBe('Employee');
	});
});

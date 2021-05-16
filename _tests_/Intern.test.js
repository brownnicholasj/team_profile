const Intern = require('../lib/intern');

const intern = new Intern('eName', 3, 'eName@email.com', 'University r Us');

describe('Intern class', () => {
	it('given school is returned from school key', () => {
		const output = intern.school;

		expect(output).toBe('University r Us');
	});

	it('getSchool() returns the school object', () => {
		const output = intern.getSchool();

		expect(output).toBe('University r Us');
	});

	it('getRole() at the Intern class overrides Employee and returns "Intern"', () => {
		const output = intern.getRole();

		expect(output).toBe('Intern');
	});
});

const Engineer = require('../lib/engineer');
const Employee = require('../lib/employee');

const engineer = new Engineer('eName', '3', 'eName@email.com', 'eName_github');

describe('Engineer class', () => {
	it('given github name is returned from github key', () => {
		const output = engineer.github;

		expect(output).toBe('eName_github');
	});

	it('getGithub() returns github url', () => {
		const output = engineer.getGithub();

		expect(output).toBe('https://www.github.com/eName_github');
	});

	it('getRole() at the Engineer class overrides Employee and returns "Engineer"', () => {
		const output = engineer.getRole();

		expect(output).toBe('Engineer');
	});
});

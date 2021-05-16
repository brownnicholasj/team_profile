const Engineer = require('../lib/engineer');
const Employee = require('../lib/employee');

jest.mock('../lib/employee');

describe('Engineer class', () => {
	it('given github name is returned from github key', () => {
		const engineer = new Engineer('eName_github');

		const output = engineer.getGithub();

		expect(output).toBe('eName_github');
	});
});

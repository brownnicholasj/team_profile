const Engineer = require('../lib/engineer');

describe('Engineer class', () => {
	it('given officeNumber is return from officeNumber key', () => {
		expect(new Engineer(`5`).officeNumber).toBe(5);
	});
});

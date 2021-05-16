const inquirer = require('inquirer');
const chalk = require('chalk');
const fs = require('fs');

class CollectInputs {
	constructor() {
		k;
	}
}
const collectInputs = async (inputs = []) => {
	const promptManager = [
		{
			type: 'input',
			message: `What is the team manager's name?`,
			name: 'managerName',
		},
	];

	const promptEmployee = [
		{
			type: 'input',
			message: 'What is their employee ID?',
			name: `id`,
		},
		{
			type: 'input',
			message: 'What is their email address?',
			name: 'email',
		},
	];

	const { again, ...answers } = await inquirer.prompt(prompts);

	const teamMembers = [...inputs, answers];

	return again ? collectInputs(teamMembers) : teamMembers;
};

const init = async () => {
	const teamMembers = await collectInputs();
	console.log(teamMembers);
	// .then((answers) => writeFileAsync('README.md', generateMarkdown(answers)))
	// .then(() => console.log('Successfully wrote to README.md'))
	// .catch((err) => console.error(err));
};

init();

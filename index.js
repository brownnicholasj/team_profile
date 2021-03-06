const inquirer = require('inquirer');
const chalk = require('chalk');
const util = require('util');
const fs = require('fs');
const generateHTML = require('./src/generateHTML');

let role = 'Manager';

const userAnswers = async (collected = []) => {
	const teamQuestions = [
		{
			type: 'input',
			message: `What is the Manager's name?`,
			name: 'name',
			when: role === 'Manager',
		},
		{
			type: 'input',
			message: `What is the Engineers's name?`,
			name: 'name',
			when: role === 'Engineer',
		},
		{
			type: 'input',
			message: `What is the Intern's name?`,
			name: 'name',
			when: role === 'Intern',
		},
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
		{
			type: 'input',
			message: `What is the Manager's Office Number`,
			name: 'officeNumber',
			when: role === 'Manager',
		},
		{
			type: 'input',
			message: `What is the Engineer's GitHub user name?`,
			name: 'github',
			when: role === 'Engineer',
		},
		{
			type: 'input',
			message: `What is the Intern's school?`,
			name: 'school',
			when: role === 'Intern',
		},
		{
			type: 'list',
			message: 'Do you have another employee to enter?',
			choices: ['Engineer', 'Intern', 'No'],
			name: 'newEmployee',
		},
	];

	const { newEmployee, ...answers } = await inquirer.prompt(teamQuestions);

	switch (role) {
		case 'Manager':
			answers.role = role;
		case 'Engineer':
			answers.role = role;
		case 'Intern':
			answers.role = role;
	}

	const employees = [...collected, answers];

	role = newEmployee;

	return newEmployee !== 'No' ? userAnswers(employees) : employees;
};

const writeFileAsync = util.promisify(fs.writeFile);

const init = async () => {
	const employees = await userAnswers()
		// console.log(employees)
		.then((employees) =>
			writeFileAsync('./dist/team_profile.html', generateHTML(employees))
		)
		.then(() => console.log(`Your page is ready to view`));
	// .catch((err) => console.error(err));
};

init();

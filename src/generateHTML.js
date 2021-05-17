const Manager = require('../lib/manager');
const Employee = require('../lib/employee');
const Engineer = require('../lib/engineer');
const Intern = require('../lib/intern');

function createMgr(e) {
    const getMgr = new Manager(e.name,e.id,e.email,e.officeNumber);
    let name = getMgr.name;
    let role = getMgr.getRole();
    let id = getMgr.id;
    let email = getMgr.email;
    let special = getMgr.officeNumber;

    return `
<article id="${role}" class="employee">
    <h2>${name}</h2>
    <h3><i class="fas fa-clipboard-list">${role}</i></h3>
    <ul>
        <li>Id: ${id}</li>
        <li>Email: ${email}</li>
        <li>Office Number: ${special}</li>
    </ul>
</article>
`;
}

function createEng(e) {
    const getEng = new Engineer(e.name,e.id,e.email,e.github);
    let name = getEng.name;
    let role = getEng.getRole();
    let id = getEng.id;
    let email = getEng.email;
    let special = getEng.github;

    return `
<article id="${role}" class="employee">
    <h2>${name}</h2>
    <h3><i class="fas fa-laptop-code">${role}</i></h3>
    <ul>
        <li>Id: ${id}</li>
        <li>Email: ${email}</li>
        <li>GitHub: ${special}</li>
    </ul>
</article>
`;
}

function createInt(e) {
    const getInt = new Intern(e.name,e.id,e.email,e.school);
    let name = getInt.name;
    let role = getInt.getRole();
    let id = getInt.id;
    let email = getInt.email;
    let special = getInt.school;

    return `
<article id="${role}" class="employee">
    <h2>${name}</h2>
    <h3><i class="fas fa-graduation-cap">${role}</i></h3>
    <ul>
        <li>Id: ${id}</li>
        <li>Email: ${email}</li>
        <li>School: ${special}</li>
    </ul>
</article>
`;
}

function topHTML() {
    return `<!DOCTYPE html>
<html lang="en-us">
<head>
<meta charset="UTF-8" />
        <link
            rel="stylesheet"
            href="https://use.fontawesome.com/releases/v5.8.1/css/all.css"
            integrity="sha384-50oBUHEmvpQ+1lW4y57PTFmhCaXp0ML5d60M1M7uH2+nqUivzIebhndOJK28anvf"
            crossorigin="anonymous"
        />
        <link rel="stylesheet" href="./assets/css/style.css" />
        <title>Team Profile</title>
    </head>

    <body>
        <header class="header">
            <h1>My Team</h1>
        </header>

        <section id="teamContainer" class="content">
`
}

function bottomHTML() {
    return `</section>
	</body>
</html>`
}

function generateHTML(employees) {
    let HTML = ``;

    employees.forEach(e => {
        if(e.role === 'Manager'){ 
            HTML += `${createMgr(e)}`;
        };
        if(e.role === 'Engineer'){
            HTML += `${createEng(e)}`
        };
        if(e.role === 'Intern'){
            HTML += `${createInt(e)}`
        };
    });

    // console.log(HTML);
    return `${topHTML()}
${HTML}
${bottomHTML()}`;
}

// const test = [{"name":"Ashley","id":"1","email":"ashley@email","officeNumber":"1","role":"Manager"},{"name":"Nic","id":"2","email":"nic@email.com","github":"nicGithub","role":"Engineer"},{"name":"Libby","id":"3","email":"libby@email.com","school":"doniphan","role":"Intern"}];
// generateHTML(test);
module.exports = generateHTML;

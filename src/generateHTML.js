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

    return `name = ${name}
role = ${role}
id = ${id}
email = ${email}
special = ${special}`;
}

function createEng(e) {
    const getEng = new Engineer(e.name,e.id,e.email,e.github);
    let name = getEng.name;
    let role = getEng.getRole();
    let id = getEng.id;
    let email = getEng.email;
    let special = getEng.github;

    return `name = ${name}
role = ${role}
id = ${id}
email = ${email}
special = ${special}`;
}

function createInt(e) {
    const getInt = new Intern(e.name,e.id,e.email,e.school);
    let name = getInt.name;
    let role = getInt.getRole();
    let id = getInt.id;
    let email = getInt.email;
    let special = getInt.school;

    return `name = ${name}
role = ${role}
id = ${id}
email = ${email}
special = ${special}`;
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
    return `new HTML
    ${HTML}`;
}

// const test = [{"name":"t","id":"t","email":"t","officeNumber":"t","role":"Manager"},{"name":"e","id":"e","email":"e","github":"e","role":"Engineer"},{"name":"i","id":"i","email":"i","school":"i","role":"Intern"}];
// generateHTML(test);
module.exports = generateHTML;

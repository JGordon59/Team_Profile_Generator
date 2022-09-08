const inquirer = require('inquirer');
const startHtml = require('./src/startHtml.js');
const endHtml = require('./src/endHtml.js');
const infoGeneral = require('./src/questions.js');
const infoManager = require('./src/managerQuestions.js');
const ManagerNew = require('./lib/manager.js');
const EngineerNew = require('./lib/engineer.js');
const InternNew = require('./lib/intern.js');

let getMembers = () => {
    inquirer
        .prompt(infoGeneral)
        .then((response) => {
            if (response.proceed == 'Add a new Engineer to your team') {
                let newEngineer = new EngineerNew(response.engineerName, response.engineerId, response.engineerEmail, response.engineerGithub);
                newEngineer.generateCard();
                getMembers();
            } else if (response.proceed == 'Add a new Intern to your team') {
                let newIntern = new InternNew(response.internName, response.internId, response.internEmail, response.internSchool);
                newIntern.generateCard();
                getMembers();
            } else {
                endHtml();
            }
        });
}

let init = () => {
    inquirer
        .prompt(infoManager)
        .then((managerResponse) => {
            getMembers();
            let newManager = new ManagerNew(managerResponse.managerName, managerResponse.managerId, managerResponse.managerEmail, managerResponse.managerOffice);
            newManager.generateCard();
            startHtml();
        })
}

init();

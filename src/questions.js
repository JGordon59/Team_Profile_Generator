const infoGeneral = [
    {
        type: 'list',
        name: 'proceed',
        message: 'What team member would you like to add to the team?',
        choices: ['Engineer', 'Intern', 'Finish'],
        default: 2
    },
    {
        type: 'input',
        name: `engineerName`,
        message: `Engineer Name?`,
        when(answers) {
            return answers.proceed === 'Engineer'
        },
        validate: engineerName => {
            if (typeof engineerName == 'string') {
                return true;
            } else {
                console.log('Name is required.');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: `engineerId`,
        message: `Please provide employee ID`,
        when(answers) {
            return answers.proceed === 'Engineer'
        },
        validate: engineerId => {
            if (/^\d+$/.test(engineerId)) {
                return true;
            } else {
                console.log('An ID number is required for your engineer.');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: `engineerEmail`,
        message: `Please provide email address`,
        when(answers) {
            return answers.proceed === 'Engineer'
        },
        validate: engineerEmail => {
            if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(engineerEmail)) {
                return true;
            } else {
                console.log('An email address is required for your engineer.');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: `engineerGithub`,
        message: `Please provide Github Username`,
        when(answers) {
            return answers.proceed === 'Engineer'
        },
        validate: engineerGithub => {
            if (typeof engineerGithub == 'string') {
                return true;
            } else {
                console.log('A github username is required for your engineer.');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: `internName`,
        message: `What is the name of this intern?`,
        when(answers) {
            return answers.proceed === 'Intern'
        },
        validate: internName => {
            if (typeof internName == 'string') {
                return true;
            } else {
                console.log('A intern is required for your team.');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: `internId`,
        message: `What is the employee ID of this intern?`,
        when(answers) {
            return answers.proceed === 'Intern'
        },
        validate: internId => {
            if (/^\d+$/.test(internId)) {
                return true;
            } else {
                console.log('An ID number is required for your intern.');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: `internEmail`,
        message: `What is the email address of this intern?`,
        when(answers) {
            return answers.proceed === 'Intern'
        },
        validate: internEmail => {
            if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(internEmail)) {
                return true;
            } else {
                console.log('An email address is required for your intern.');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: `internSchool`,
        message: `What school is your Intern currently enrolled?`,
        when(answers) {
            return answers.proceed === 'Intern'
        },
        validate: internSchool => {
            if (typeof internSchool == 'string') {
                return true;
            } else {
                console.log('An intern needs to be enrolled in school.');
                return false;
            }
        }
    }
]

module.exports = infoGeneral;
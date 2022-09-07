// questions to start the program with
const managerQuestions = [
    {
        type: 'input',
        name: `managerName`,
        message: `Your Manager, what is their name?`,
        // validating that a name was given
        validate: managerName => {
            if (typeof managerName == 'string') {
                return true;
            } else {
                console.log('You cannot have a team without a Manager.');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: `managerId`,
        message: `What is your Manager's employee ID?`,
        // validating that a number was given
        validate: managerId => {
            if (/^\d+$/.test(managerId)) {
                return true;
            } else {
                console.log('Your Manager requires an employee ID.');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: `managerEmail`,
        message: `Please provide your Manager's email address?`,
        // validating that an email was given
        validate: managerEmail => {
            if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(managerEmail)) {
                return true;
            } else {
                console.log('Your manager is required to have an email so we can contact them.');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: `managerOffice`,
        message: `What is your Manager's office number?`,
        // validating that a number was given
        validate: managerOffice => {
            if (/^\d+$/.test(managerOffice)) {
                return true;
            } else {
                console.log('An office number is required for your Manager.');
                return false;
            }
        }
    }
]

module.exports = managerQuestions;

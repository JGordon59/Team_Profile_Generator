const infoManager = [
    {
        type: 'input',
        name: `managerName`,
        message: `Your Manager, what is their name?`,
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

module.exports = infoManager;

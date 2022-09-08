const Employee = require('./employee');
const fs = require('fs');

class Intern extends Employee {
    constructor(name, id, email, school) {
        super(name, id, email);
        this.school = school;
    }

    getSchool() {
        return this.school;
    }

    getRole() {
        return 'Intern';
    }

    generateCard = () => {
        fs.appendFile('./dist/index.html',
            `
                    <div class="intern card bg-secondary" style="width: 18rem; margin: 20px;">
                        <div class="card-body">
                            <h2 id="intern-name">${this.getName()} <span class="badge badge-primary">Intern</span></h2>
                            <ul class="list-group">
                                <li id="intern-id" class="list-group-item list-group-item-action">ID: ${this.getId()}</li>
                                <li id="intern-email" class="list-group-item list-group-item-action">
                                    Email: <a href="mailto:${this.getEmail()}">${this.getEmail()}</a>
                                </li>
                                <li id="intern-office" class="list-group-item list-group-item-action">School: ${this.getSchool()}</li>
                            </ul>
                        </div>
                    </div>`,
            (err) => {
                if (err)
                    throw err;
                console.log(`\n----------------------------\nSuccessfully added to index.html!`);
            });
    }
}

// exporting the Intern class
module.exports = Intern;

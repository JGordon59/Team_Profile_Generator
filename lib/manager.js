const Employee = require('./employee');
const fs = require('fs');

class Manager extends Employee {
    constructor(name, id, email, officeNumber) {
        super(name, id, email);
        this.officeNumber = officeNumber;
    }

    getOffice() {
        return this.officeNumber;
    }

    getRole() {
        return 'Manager';
    }

    generateCard = () => {
        fs.appendFile('./dist/index.html',
            `
                    <div class="manager card bg-secondary" style="width: 18rem; margin: 20px;">
                        <div class="card-body">
                            <h2 id="manager-name">${this.getName()} <span class="badge badge-primary">Manager</span></h2>
                            <ul class="list-group">
                                <li id="manager-id" class="list-group-item list-group-item-action">ID: ${this.getId()}</li>
                                <li id="manager-email" class="list-group-item list-group-item-action">
                                    Email: <a href="mailto:${this.getEmail()}">${this.getEmail()}</a>
                                </li>
                                <li id="manager-office" class="list-group-item list-group-item-action">Office Number: ${this.getOffice()}</li>
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

// exporting the Manager class
module.exports = Manager;

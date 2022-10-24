const Employee = require("./Employee");

class Engineer extends Employee {
     //The constructor function creates blueprint objects for the employee class, which holds:name, id, email & github
    constructor(name, id, email, github) {
        //Super is calls the parents constructor (Employee)
        super(name, id, email);
        this.github = github;
    }
    getGithub() {
        return this.github;
    }
    getRole() {
        return "Engineer";
    }
}

module.exports = Engineer;
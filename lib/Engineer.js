const Employee = require("./Employee");

//Engineer class
class Engineer extends Employee {
     //The constructor function creates blueprint objects for the employee class, which holds:name, id, email & github
    constructor(name, id, email, gitHub) {
        //Super is calls the parents constructor (Employee)
        super(name, id, email);
        this.gitHub = gitHub;
    }
    getGithub() {
        return this.gitHub;
    }
    getRole() {
        return "Engineer";
    }
}
//Exports the Engineer class
module.exports = Engineer;
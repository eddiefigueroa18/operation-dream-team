const Employee = require("./Employee");

//Intern class
class Intern extends Employee {
    //The constructor function creates blueprint objects for the employee class, which holds:name, id, email & school
    constructor(name, id, email, school) {
        //Super is calls the parents constructor (Employee)
        super(name, id, email);
        this.school = school;
    }
    getSchool() {
        return this.school;
    }
    getRole() {
        return "Intern";
    }
}

module.exports = Intern;
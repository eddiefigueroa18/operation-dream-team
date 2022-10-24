const Employee = require("./Employee");

class Manager extends Employee {
    //The constructor function creates blueprint objects for the employee class, which holds:name, id, email & officeNumber
    constructor(name, id, email, officeNumber) {
        //Super is calls the parents constructor (Employee)
        super(name, id, email);
        this.officeNumber = officeNumber;
    }
    getOfficeNumber() {
        return this.officeNumber;
    }
    getRole() {
        return "Manager";
    }
}

module.exports = Manager;
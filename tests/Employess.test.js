//First we require to extract the information from the (Employee.js) file
const Employee = require("../lib/Employee");
//Create a fake variable so you can test functionality
const fakeEmployee = new Employee("Daniel", "12345", "danielp@gmail.com");

//TODO: Extract constructor value
test("This is a test to see if we can get the constructor values for the employee object", () => {
    expect(fakeEmployee.name).toBe("Daniel");
    expect(fakeEmployee.id).toBe("12345");
    expect(fakeEmployee.email).toBe("danielp@gmail.com");
});

//TODO: Extract the methods for getname(), getId(), getEmail() from the Employee.js file
test("This is a test to see if we can get the name from the getName() method", () => {
    expect(fakeEmployee.getName()).toBe("Daniel");
});
test("This is a test to see if we can get the ID from the getId() method", () => {
    expect(fakeEmployee.getId()).toBe("12345");
});
test("This is a test to see if we can get the email from  the getEmail() method", () => {
    expect(fakeEmployee.getEmail()).toBe("danielp@gmail.com");
});
test("This is a test to see if we can get the Role from the getRole() method", () => {
    expect(fakeEmployee.getRole()).toBe("Employee");
});
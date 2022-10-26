//First we require to extract the information from the (Employee.js) file
const Manager = require("../lib/Manager");
//Create a fake variable so you can test functionality
const fakeManager = new Manager("Daniel", "12345", "danielp@gmail.com", "007")
//Extract constructor value
test("This is a test to see if we can get the constructor values for the Manager object", () => {
    expect(fakeManager.name).toBe("Daniel");
    expect(fakeManager.id).toBe("12345");
    expect(fakeManager.email).toBe("danielp@gmail.com");
    expect(fakeManager.officeNumber).toBe("007");
});
//Extract the methods for getname(), getId(), getEmail(), getOfficeNumber from the Manager.js file
test("This is a test to see if we can get the name from the getName() method", () => {
    expect(fakeManager.getName()).toBe("Daniel");
});
test("This is a test to see if we can get the ID from the getId() method", () => {
    expect(fakeManager.getId()).toBe("12345");
});
test("This is a test to see if we can get the email from  the getEmail() method", () => {
    expect(fakeManager.getEmail()).toBe("danielp@gmail.com");
});
test("This is a test to see if we can get the officeNumber from the getOfficeNumber() method", () => {
    expect(fakeManager.getOfficeNumber()).toBe("007");
});
test("This is a test to see if we can get the Role from the getRole() method", () => {
    expect(fakeManager.getRole()).toBe("Manager");
});

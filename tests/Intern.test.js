//First we require to extract the information from the (Employee.js) file
const Intern = require("../lib/Intern");
//Create a fake variable so you can test functionality
const fakeIntern = new Intern("Daniel", "12345", "danielp@gmail.com", "Walla-Walla");

//Extract constructor value
test("This is a test to see if we can get the constructor values for the Intern object", () => {
    expect(fakeIntern.name).toBe("Daniel");
    expect(fakeIntern.id).toBe("12345");
    expect(fakeIntern.email).toBe("danielp@gmail.com");
    expect(fakeIntern.school).toBe("Walla-Walla");
});

//Extract the methods for getname(), getId(), getEmail(), getSchool() from the Intern.js file
test("This is a test to see if we can get the name from the getName() method", () => {
    expect(fakeIntern.getName()).toBe("Daniel");
});
test("This is a test to see if we can get the ID from the getId() method", () => {
    expect(fakeIntern.getId()).toBe("12345");
});
test("This is a test to see if we can get the email from  the getEmail() method", () => {
    expect(fakeIntern.getEmail()).toBe("danielp@gmail.com");
});
test("This is a test to see if we can get the school from the getSchool method", () => {
    expect(fakeIntern.getSchool()).toBe("Walla-Walla");
});
test("This is a test to see if we can get the Role from the getRole() method", () => {
    expect(fakeIntern.getRole()).toBe("Intern");
});

//Test pass: True.
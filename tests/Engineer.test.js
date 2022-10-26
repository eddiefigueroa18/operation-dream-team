//First we require to extract the information from the (Employee.js) file
const Engineer = require("../lib/Engineer");
//Create a fake variable so you can test functionality
const fakeEngineer = new Engineer("Daniel", "12345", "danielp@gmail.com", "dannyp");

//Extract constructor value
test("This is a test to see if we can get the constructor values for the Engineer object", () => {
    expect(fakeEngineer.name).toBe("Daniel");
    expect(fakeEngineer.id).toBe("12345");
    expect(fakeEngineer.email).toBe("danielp@gmail.com");
    expect(fakeEngineer.gitHub).toBe("dannyp");
});

//Extract the methods for getname(), getId(), getEmail(), getGithub() from the Engineer.js file
test("This is a test to see if we can get the name from the getName() method", () => {
    expect(fakeEngineer.getName()).toBe("Daniel");
});
test("This is a test to see if we can get the ID from the getId() method", () => {
    expect(fakeEngineer.getId()).toBe("12345");
});
test("This is a test to see if we can get the email from  the getEmail() method", () => {
    expect(fakeEngineer.getEmail()).toBe("danielp@gmail.com");
});
test("This is a test to see if we can get the gitHub from the getGithub method", () => {
    expect(fakeEngineer.getGithub()).toBe("dannyp");
});
test("This is a test to see if we can get the Role from the getRole() method", () => {
    expect(fakeEngineer.getRole()).toBe("Engineer");
});

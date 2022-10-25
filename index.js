const inquirer = require("inquirer");
const Employee = require("./lib/Employee");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const Manager = require("./lib/Manager");
const generatePage = require("./src/generatePage");
const fs = require("fs");

//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++//

//Variable for prompting the manager and creating an array of questions
const promptJefe = () => {
    //Array of questions
    return inquirer.prompt([
        {
            type: 'input',
            name: 'managerName',
            message: 'What is your name? ',
            validate: managerName => {
                if (managerName) {
                    return true;
                } else {
                console.log('A Name is required! ');
                } return false
            }
        },
        {
            type: 'input',
            name: 'managerId',
            message: 'Please enter your employee ID',
            validate: managerId => {
                if (managerId) {
                    return true;
                } else {
                    console.log('Please enter your employee ID!');
                } return false;
            }
        },
        {
            type: 'input',
            name: 'managerEmail',
            message: 'Please enter your email',
            validate: managerEmail => {
                if (managerEmail) {
                    return true;
                } else {
                    console.log('Please enter your email!');
                } return false;
            }
        },
        {
            type: 'input',
            name: 'officeNumber',
            message: 'Please enter your office number',
            validate: officeNumber => {
                if (officeNumber) {
                    return true;
                } else {
                    console.log('Please enter your office Number!');
                    return false;
                } 
            }
        },
    ]).then(answers => {
        console.log(answers);
        const manager = new manager(answers.managerName, answers.managerId, answers.managerEmail, answers.officeNumber);
        memeMembers.push(manager);
        promptMenuOptions()
        //Start the next function
    });
};

//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++//

//Prompts the menu for user to select what they want to do next
const promptMenuOptions = () => {
    return inquirer.prompt([
        {
            type: 'list',
            name: 'menu',
            message: 'Please select which option you would like to continue with: ',
            choices: ['Add an Engineer', 'Add an Intern', 'Finish Building Dream Team']
        }])
        //Prompts the selectable choices, then runs selected choice function
        .then(userChoice => {
            switch (userChoice.menu) {
                case "Add an Engineer":
                    promptEngineer();
                    break;
                case "Add an Intern":
                    promptIntern();
                    break;
                default: createTeam();
            }
    });
};

//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++//

//variable for engineer
const promptEngineer = () => {
    console.log(`++++++ ADD A NEW ENGINEER ++++++`);
    //Array of questions for engineer section
    return inquirer.prompt([
        {
            type: 'input',
            name: 'engineerName',
            message: 'Please enter the name of the Engineer',
            validate: engineerName => {
                if (engineerName) {
                    return true;
                } else {
                    console.log('Please enter the name of the engineer!');
                } return false;
            }
        },
        {
            type: 'input',
            name: 'engineerId',
            message: 'Please enter employee ID for Engineer',
            validate: engineerId => {
                if (engineerId) {
                    return true;
                } else {
                    console.log('Please enter the employee ID of the engineer!');
                } return false;
            }
        },
        {
            type: 'input',
            name: 'engineerEmail',
            message: 'Please enter the name of the Engineer',
            validate: engineerEmail => {
                if (engineerEmail) {
                    return true;
                } else {
                    console.log('Please enter the name of the engineer!');
                } return false;
            }
        },
        {
            type: 'input',
            name: 'engineerGithub',
            message: 'Please enter Github Username of the Engineer',
            validate: engineerGithub => {
                if (engineerGithub) {
                    return true;
                } else {
                    console.log('Please enter Github username of the engineer!');
                    return false;
                }
            }
        },
    ]).then(answers => {
        console.log(answers);
        const engineer = new Engineer(answers.engineerName, answers.engineerId, answers.engineerEmail, answers.engineerGithub);
        memeMembers.push(engineer);
        promptMenuOptions()
    });
};

//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++//
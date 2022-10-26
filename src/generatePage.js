const Engineer = require("../lib/Engineer");

//Variable with function to pass through all data needed to generate html
const createTeam = (dreamTeam) => {
    console.log(dreamTeam);
    //Empty array to push HTML elements (data) into
    const htmlElements = [];

    //Function for Manager to return HTML data
    const genManHtml = manager => {
        console.log(manager);
        let managerHtml = `
        <section class="card" id="card-1">
            <div class="name-role-section">
                <h2 class="name">${manager.name}</h2>
                <h3 class="role">Manager</h3>
            </div>
            <div class="information">
                <ul class="info-list">
                    <li class="identification" id="identification-1">ID: ${manager.Id}</li>
                    <li class="email">Email: <span id="email-1"><a href="mailto:${manager.email}">${manager.email}</a></span></li>
                    <li class="office-number" id="office-1">Office Number: ${manager.officeNumber}</li>
                </ul>
            </div>
        </section>
        `;
        htmlElements.push(managerHtml);
    }

    //Function for Engineer to return HTML data
    const genEngHtml = engineer => {
        console.log(engineer);
        let engineerHtml = `
        <section class="card" id="card-2">
            <div class="name-role-section">
                <h2 class="name">${manager.name}</h2>
                <h3 class="role">Engineer</h3>
            </div>
            <div class="information">
                <ul class="info-list">
                    <li class="identification" id="identification-2">ID: ${manager.Id}</li>
                    <li class="email">Email: <span id="email-2"><a href="mailto:${manager.email}">${manager.email}</a></span></li>
                    <li class="github">Github: <a target ="_blank" href="https://github.com/${manager.engineerGihub}">${manager.engineerGihub}</a></li>
                </ul>
            </div>
        </section>
        `;
        htmlElements.push(engineerHtml);
    }

    //Function for Intern to return HTML data
    const genIntHtml = (intern) => {
        console.log(intern);
        let internHtml = `
        <section class="card" id="card-3">
            <div class="name-role-section">
                <h2 class="name">${manager.name}</h2>
                <h3 class="role">Intern</h3>
            </div>
            <div class="information">
                <ul class="info-list">
                    <li class="identification" id="identification-3">ID: ${manager.Id}</li>
                    <li class="email">Email: <span id="email-2"><a href="${manager.email}">${manager.email}</a></span></li>
                    <li class="school" id="school-3">School: ${manager.School}</li>
                </ul>
            </div>
        </section>
        `
        htmlElements.push(internHtml);
    }
};

//Export function that will generate entire page in the "Main" section
module.exports = dreamTeam => {
    return `
    <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="./styles.css">
    <script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/moment.js/2.27.0/moment.min.js"></script>
    <script src="https://code.jquery.com/jquery-3.6.1.min.js"
        integrity="sha256-o88AwQnZB+VDvE9tvIXrMQaPlFFSUTR+nldQm1LuPXQ=" crossorigin="anonymous"></script>
    <title>The Dream Team</title>
</head>
<body>
    <header>
        <h1>The Dream Team</h1>
    </header>
    <main>${createTeam(dreamTeam)}</main>
</body>
</html>
    `;
};
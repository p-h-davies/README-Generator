const inquirer = require('inquirer');
const fs = require('fs');
const functions = require('./utils/generateMarkdown.js');

inquirer
    .prompt([
        {
            type: 'input',
            name: 'title',
            message: 'What is the title of your project?',
        },
        {
            type: 'input',
            name: 'description',
            message: 'Write a description of the project.',
        },
        {
            type: 'input',
            name: 'installation',
            message: 'Write installation instructions.',
        },
        {
            type: 'input',
            name: 'usage',
            message: 'Write usage information.',
        },
        {
            type: 'input',
            name: 'contribution',
            message: 'Write contribution guidelines.',
        },
        {
            type: 'input',
            name: 'test',
            message: 'Write test instructions.',
        },
        {
            type: 'list',
            message: 'Which license would you like?',
            name: 'license',
            choices: ['No_License', 'Academic_Free_License_v3_0', 'Apache_license_2_0', 'Artistic_license_2_0', 'Boost_Software_License_1_0', 'The_2_Clause_BSD_License', 'BSD_3_Clause_New_or_Revised_License', 'BSD_3_Clause_Clear_License', 'Creative_Commons_License_Family', 'Creative_Commons_Zero_v1_0_Universal', 'Do_What_The_Fck_You_Want_To_Public_License', 'Microsoft_Public_License', 'MIT', 'Mozilla_Public_License_2_0', 'Open_Software_License_3_0', 'SIL_Open_Font_License_1_1'],
        },
        {
            type: 'input',
            name: 'profile',
            message: 'Type in your GitHub username.',
        },
        {
            type: 'input',
            name: 'email',
            message: 'Type in your email address.',
        }
    ])
    .then((data) => {
        functions.generateMarkdown(data);
        const filename = `README.md`;
        const readMe = functions.generateMarkdown(data)
        functions.renderLicenseBadge(data)
        fs.writeFile(filename, readMe, (err) =>
            err ? console.error(err) : console.log('Success! README.md created in this folder.')
        );
    });

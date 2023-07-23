// TODO: Include packages needed for this application

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
            choices: ['MIT', 'phone', 'telekinesis'],
        },
    ])
    .then((data) => {
        functions.generateMarkdown(data);
        const filename = `README.md`;
        const readMe = functions.generateMarkdown(data)
        functions.renderLicenseBadge(data)
        console.log(readMe)
        fs.writeFile(filename, readMe, (err) =>
            err ? console.log(err) : console.log('Success!')
        );
    });








// TODO: Create an array of questions for user input
const questions = [];

// TODO: Create a function to write README file
function writeToFile(fileName, data) { }

// TODO: Create a function to initialize app
function init() { }

// Function call to initialize app
init();

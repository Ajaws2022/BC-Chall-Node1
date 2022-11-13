// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const generate = require('./generateMarkdown.js')
const fs = require('fs')
// TODO: Create an array of questions for user input
// Description, Table of Contents, Installation, Usage, License, Contributing, Tests, and Questions
const questions = [
    'Please enter a description of your project:',
    'Please provide installation instructions:',
    'Please enter usage details for this app:',
    'What is your license type? (If none press enter)',
    'How can contributions be made to this project?',

];
const [question1, question2, question3, question4, question5] = questions;
inquirer
  .prompt([
    {
        type: 'input',
        message: question1,
        name: 'description',
    },
    {
        type: 'input',
        message: question2,
        name: 'install',
    },
    {
        type: 'input',
        message: question3,
        name: 'usage',
    },
    {
        type: 'input',
        message: question4,
        name: 'license',
    },
    {
        type: 'input',
        message: question5,
        name: 'contribute',
    }
  ])
//   .then((data) => console.log(data))
  .then((data) => writeToFile(data))
//   .then((response) => writeToFile(response))
// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    const {description} = data;
    const { install } = data;
    const { usage } = data;
    const { license } = data;
    const { contribute } = data;
    console.log(description, install, usage, license, contribute) 

}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();

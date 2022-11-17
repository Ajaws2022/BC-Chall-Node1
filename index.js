// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const generate = require('./generateMarkdown.js')
const fs = require('fs')
// TODO: Create an array of questions for user input
// Description, Table of Contents, Installation, Usage, License, Contributing, Tests, and Questions
const questions = [
    {
        type: 'input',
        message: 'Please enter the title of your project:',
        name: 'title',
    },
    {
        type: 'input',
        message: 'Please enter a description of your project:',
        name: 'description',
    },
    {
        type: 'input',
        message: 'Please provide installation instructions:',
        name: 'install',
    },
    {
        type: 'input',
        message: 'Please enter usage details for this app:',
        name: 'usage',
    },
    {
        type: 'input',
        message: 'Provide a link with a demonstration?',
        name: 'vid',
    },
    {
        type: 'list',
        message: 'What is your license type? (If none press enter)',
        choices: ['MIT', 'Apache', 'CC_BY_NC_4', 'N/A'],
        name: 'license',
    },
    {
        type: 'input',
        message: 'How can contributions be made to this project?',
        name: 'contribute',
    },
    {
        type: 'input',
        message: 'What is your email?',
        name: 'email',
    },
    {
        type: 'input',
        message: 'What is your GitHub username?',
        name: 'github',
    }

];

// TODO: Create a function to write README file
function writeToFile(data) {
    const create = generate(data)
    
    fs.writeFile('README.md', create, function(err){
        if(err){
            console.log('Could not generate file')
        } else {
            console.log('File created successfully!')
        }
    })
}

// TODO: Create a function to initialize app
function init() {
    return inquirer.prompt(questions)
        .then((answers) => {
            console.log(answers)
            
            writeToFile(answers)   
        })
        .catch((error) => {
            console.log(error)
        })
}

// Function call to initialize app
init();

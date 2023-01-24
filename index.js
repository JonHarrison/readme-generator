import { promises as fs } from 'fs';
import path from 'path';
import inquirer from 'inquirer';

import { generateMarkdown } from './utils/generateMarkdown.js';
import { licenses } from './utils/licenses.js';

// array of questions for user
const questions = [
    {
        type: 'input',
        name: 'title',
        message: "What is the project title?",
        default: 'Untitled'
    },
    {
        type: 'input',
        name: 'description',
        message: "Please provide a description of the project"
    },
    {
        type: 'input',
        name: 'installation',
        message: "Please provide the installation instructions for the project"
    },
    {
        type: 'input',
        name: 'usage',
        message: "Please provide usage information"
    },
    {
        type: 'input',
        name: 'contributing',
        message: "Please provide guidelines on how to contribute to the project"
    },
    {
        type: 'input',
        name: 'tests',
        message: "Please provide test instructions"
    },
    {
        type: 'list',
        name: 'license',
        message: 'Please choose a license for the application',
        choices: licenses.getChoices()
    },
    {
        type: 'input',
        name: 'username',
        message: "Please enter your GitHub username"
    },
    {
        type: 'input',
        name: 'email',
        message: "Please enter your contact email address"
    }

];

// function to write README file
function writeToFile(fileName, data) {
    (async () => {
        await fs.writeFile(fileName, generateMarkdown(data), (err) => {
            err ? console.error(err) : console.log(data);
        })
    })();
}

// function to initialize program
(function init() {
    let filename = 'example README.md';
    inquirer
        .prompt(questions)
        .then((response) => {
            if (response.title) {
                // generate filename from project title after converting to lower case and removing any extraneous spaces
                filename = `README for ${response.title.toLowerCase().split(' ').join('')}.md`;
            }
            writeToFile(filename, response);
        })
        .then(() => console.log(`Successfully written to ${filename}`))
        .catch((error) => {
            if (error.isTtyError) {
                // Prompt couldn't be rendered in the current environment
            } else {
                // Something else went wrong
                console.log(error);
            }
        });

}
)();

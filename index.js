import fs from 'fs';
import path from 'path';
import inquirer from 'inquirer';
import { generateMarkdown, licenses } from './utils/generateMarkdown.js';
import util from 'util';

const writeFileAsync = util.promisify(fs.writeFile);

// array of questions for user
const questions = [
    {
        type: 'input',
        name: 'title',
        message: "What is the project title?"
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
    writeFileAsync(fileName, generateMarkdown(data), (err) => {
        err ? console.error(err) : console.log(data);
    })
}

// function to initialize program
function init() {

}

// function call to initialize program
init();

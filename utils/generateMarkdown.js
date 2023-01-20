import { licenses } from './licenses.js';

const generateToC = (data) => {
  // destructure data object
  const { installation, usage, license, contributing, tests, username, email } = data;
  // define sections on table of contents
  const ToC = [
    { section: installation, content: '[Installation](#installation)' },
    { section: usage, content: '[Usage](#usage)' },
    { section: license, content: '[License](#license)' },
    { section: contributing, content: '[Contributing](#contributing)' },
    { section: tests, content: '[Tests](#tests)' },
    { section: username || email, content: '[Questions](#questions)' }
  ];

  let item = 1; // ToC starts with item 1
  let output = '## Table of Contents\n';

  for (let element of ToC) {
    if (element.section) { // if this section has any content add ToC
      output += `${item++}. ${element.content}\n`;
    }
  }

  return output;
}

// function to generate markdown for README
function generateMarkdown(data) {
  return `
  # ${data.title}
  ${licenses.makeBadge(data.license)}
  
  ## Description
  ${data.description}

  ## Table of Contents
  1. [Installation](#installation)
  2. [Usage](#usage)
  3. [License](#license)
  4. [Contributing](#contributing)
  5. [Tests](#tests)
  6. [Questions](#questions)

  ## Installation
  ${data.installation}

  ## Usage
  ${data.usage}

  ## License
  This project is licensed under ${data.license}

  ## Contributing
  ${data.contributing}

  ## Tests
  ${data.tests}

  ## Questions
  * GitHub profile : [${data.username}](https://github.com/${data.username})
  * Email : [Contact me](mailto:${data.email}?subject=re:%20${encodeURIComponent(data.title)})
  `;
}

export { generateMarkdown, licenses };
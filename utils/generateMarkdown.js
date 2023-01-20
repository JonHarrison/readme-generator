import { licenses } from './licenses.js';

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
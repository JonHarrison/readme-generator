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
const generateMarkdown = (data) => {
// destructure data object
const { title, license, description, installation, usage, contributing, tests, username, email } = data;

return `# ${title}
${licenses.makeBadge(license)}
  
${description ? `## Description\n${description}` : '' }

${generateToC(data)}

${installation ? `## Installation\n${installation}` : '' }

${usage ? `## Usage\n${usage}` : '' }

${license ? `## License\nThis project is licensed under ${license}` : '' }

${contributing ? `## Contributing\n${contributing}` : '' }

${tests ? `## Tests\n${tests}` : '' }

${ (username || email)
  ?
  '## Questions\n' +
  `${username ? `* GitHub profile : [${username}](https://github.com/${username})` : '' }` +
  '\n' +
  `${email ? `* Email : [Contact me](mailto:${email}?subject=re:%20${encodeURIComponent(title)})` : '' }`
  : '' }
`;
}

export { generateMarkdown, licenses };
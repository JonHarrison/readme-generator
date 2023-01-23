import { generateToC } from '../utils/generateMarkdown.js';

const tests = [
    [
        { installation: 'dummy text' },
        '## Table of Contents\n1. [Installation](#installation)\n'
    ],
    [
        { installation: 'dummy text', usage: 'dummy text' },
        '## Table of Contents\n1. [Installation](#installation)\n2. [Usage](#usage)\n'
    ],
    [
        { installation: 'dummy text', usage: 'dummy text', license: 'dummy text', contributing: 'dummy text', tests: 'dummy text', username: 'dummy text' },
        '## Table of Contents\n1. [Installation](#installation)\n2. [Usage](#usage)\n3. [License](#license)\n4. [Contributing](#contributing)\n5. [Tests](#tests)\n6. [Questions](#questions)\n'
    ],
    [
        { usage: 'dummy text' },
        '## Table of Contents\n1. [Usage](#usage)\n'
    ],
    [
        { email: 'dummy text' },
        '## Table of Contents\n1. [Questions](#questions)\n'
    ]
]

test.each(tests)('Table of contents', (data, result) => {
    expect(generateToC(data)).toBe(result);
})

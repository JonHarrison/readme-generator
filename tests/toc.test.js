import { generateToC } from '../utils/generateMarkdown.js';

test('Table of contents', () => {
    const tests = [
        {
            data : { installation: 'dummy text' },
            result: '## Table of Contents\n1. [Installation](#installation)\n'
        },
        {
            data : { installation: 'dummy text', usage: 'dummy text' },
            result: '## Table of Contents\n1. [Installation](#installation)\n2. [Usage](#usage)\n'
        },
        {
            data : { installation: 'dummy text', usage: 'dummy text', license: 'dummy text', contributing: 'dummy text', tests: 'dummy text', username: 'dummy text' },
            result: '## Table of Contents\n1. [Installation](#installation)\n2. [Usage](#usage)\n3. [License](#license)\n4. [Contributing](#contributing)\n5. [Tests](#tests)\n6. [Questions](#questions)\n'
        },
        {
            data : { usage: 'dummy text' },
            result: '## Table of Contents\n1. [Usage](#usage)\n'
        },
        {
            data : { email: 'dummy text' },
            result: '## Table of Contents\n1. [Questions](#questions)\n'
        },
    ]
    for(let test of tests)
    {
        let toc = generateToC(test.data);
        expect(toc).toBe(test.result);
    }
})
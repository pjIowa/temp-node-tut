//async means non-blocking, sync means blocking

//this bracket syntax imports specific functions from module, rather than all
//this are sync versions of file functions
const {readFileSync, writeFileSync} = require('fs');

const first = readFileSync('./content/first.txt','utf8');
const test = readFileSync('./content/test.txt','utf8');

//prints content of each file
console.log(first);
console.log(test);

//creates new file if not present and overwrites if present, by default
//a flag means add new content to EOF
writeFileSync(
    './content/result-sync.txt',
    `here is result: ${first}, ${test}`,
    {flag:'a'}
);

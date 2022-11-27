const path = require('path');

//os-specific file separator character
console.log(path.sep);

//builds local file path using list passed 
const filePath = path.join('\\content','test.txt');
console.log(filePath);

//the string at end of file path
const base = path.basename(filePath);
console.log(base);

//full path
const absolute = path.resolve(__dirname,'content','test.txt');
console.log(absolute);
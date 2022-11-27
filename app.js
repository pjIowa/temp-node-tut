//node commands
//npm --version
//npm i PACKAGE_NAME, installs package in local project only
//npm install -g PACKAGE_NAME, installs package globally
//package.json, manifest file of what packages used in local project
    //can be created manually at root folder or with below commands
//npm init, asks to select among options
//npm init -y, uses all defaults

const _ = require('lodash');

const items = [1, [2, [3, [4]]]];
const newItems = _.flattenDeep(items);
console.log(newItems);
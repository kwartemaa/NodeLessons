/*
var url = 'http://mylogger.io/log';

function log(message){
    console.log(message);
}

module.exports = log;
*/

// Using the path module
const path = require ('path');
let pathObj = path.parse(__filename);
console.log(pathObj)

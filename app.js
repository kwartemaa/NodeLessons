/*function sayHello(name){
    console.log("Hello "+ name)

}

sayHello("Esi")
// console.log(window);

// Modules in node and how to create your own
// Global functions(eg. console.log(), setTimeout, clearTimeout, setInterval(), clearInterval())

//instead of the window object, node has an object called global
*/

// To load a module
// const log = require('./logger');
// log('message');

const path = require ('path');
let pathObj = path.parse(__filename);
console.log(pathObj)

//The OS module
const os = require('os');
let totalMemory = os.totalmem();
let freeMemory = os.freemem();
console.log(`Free memory: ${freeMemory} ` );
console.log(`Total memory: ${totalMemory}`);

//working with files
const fs = require ('fs');

// const files = fs.readdirSync('./');
// console.log(files);

fs.readdir('$', function(err, files){
    if(err) console.log('Error', err);
    else console.log('Result', files);

    
} );


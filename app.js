// const log=require('./logger')//require function returns the object which is exported
// //its better to store requier in constant
// log('message')


//...........................Path Modules................................................//

// const path = require('path')

// var pathObj=path.parse(__filename)

// console.log(pathObj);


//..............................................OS Modules................................//
// const os = require('os')
// var totalMemory=os.totalmem();
// var freeMemory = os.freemem();


// console.log(`Total Memory: ${totalMemory}`)
// console.log(`Free Memory: ${freeMemory}`)

//..............................................File System Modules................................//

const fs= require('fs');

const files = fs.readdirSync('./') 
console.log(files);
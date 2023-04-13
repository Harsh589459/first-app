var  url = 'http://mylogger.io/log';

function log(message){
    //Send an HTTP request
    console.log(message);
}

// module.exports.log=log;//to accessible outside the module. before equal log is a
module.exports=log;
module.exports.endPoint=url;//to accessible outside the module


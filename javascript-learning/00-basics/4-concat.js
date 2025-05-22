// Prints two arguments passed to it in following format "first arg" is "second arg"

const { argv } = require('node:process');

console.log(argv[2] + ' is ' + argv[3]);

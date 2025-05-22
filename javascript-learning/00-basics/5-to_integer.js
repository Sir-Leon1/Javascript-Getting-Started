// Prints the first argument as an integer

const { argv } = require('node:process');
const firstArg = argv[2];

const number = parseInt(firstArg);
if (number) {
  console.log(number);
} else {
  console.log('Not a number');
}
